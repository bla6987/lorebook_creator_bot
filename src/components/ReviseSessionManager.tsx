import { FC, useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { ReviseSession, ReviseState } from '../revise-types.js';
import { STButton } from 'sillytavern-utils-lib/components/react';
import { ReviseSessionChat } from './ReviseSessionChat.js';
import { ExtensionSettings, settingsManager } from '../settings.js';
import { buildInitialReviseMessages } from '../revise-prompt-builder.js';
import { st_echo, selected_group, this_chid } from 'sillytavern-utils-lib/config';
import { BuildPromptOptions } from 'sillytavern-utils-lib';
import { Session } from '../generate.js';
import { getRuntimeConnectionProfile } from '../api-settings.js';
import { applyReviseSessionMutation, getReviseEntryIdentifier, loadReviseSessions, persistReviseSessionMutation, type ReviseSessionMutation } from '../revise-session-storage.js';
import { createRevisionId, getEntryRevisionId, withEntryRevisionId } from '../revise-entry-identity.js';
import { getMessageIndexes } from '../message-ranges.js';

const globalContext = SillyTavern.getContext();

export interface EntryRevisionApplyArgs {
  type: 'entry';
  worldName: string;
  originalEntry: WIEntry;
  updatedEntry: WIEntry;
}

interface SharedReviseSessionManagerProps {
  initialState: ReviseState;
  onClose: () => void;
  sessionForContext: Session;
  allEntries: Record<string, WIEntry[]>;
  contextToSend: ExtensionSettings['contextToSend'];
}

type ReviseSessionManagerProps = SharedReviseSessionManagerProps & (
  | { target: { type: 'global' }; onApply: (newState: Record<string, WIEntry[]>) => void }
  | { target: { type: 'entry'; worldName: string; entry: WIEntry }; onApply: (args: EntryRevisionApplyArgs) => void;
      onEnsureEntryIdentity?: (entry: WIEntry) => Promise<WIEntry> }
);

export const ReviseSessionManager: FC<ReviseSessionManagerProps> = ({
  target,
  initialState,
  onClose,
  onApply,
  sessionForContext,
  allEntries,
  contextToSend,
  ...entryProps
}) => {
  const [allSessions, setAllSessions] = useState<ReviseSession[]>([]);
  const [activeSession, setActiveSession] = useState<ReviseSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const historyWritable = useRef(false);
  const mountedRef = useRef(false);
  const sessionsRef = useRef<ReviseSession[]>([]);
  const activeSessionIdRef = useRef<string | null>(null);
  const [identifiedEntry, setIdentifiedEntry] = useState<WIEntry | null>(null);
  const [isIdentifying, setIsIdentifying] = useState(false);
  const currentEntry = target.type === 'entry' ? identifiedEntry ?? target.entry : undefined;
  const entryRevisionId = currentEntry ? getEntryRevisionId(currentEntry) : undefined;

  const selectSession = (session: ReviseSession | null) => {
    activeSessionIdRef.current = session?.id ?? null;
    setActiveSession(session);
  };

  const targetIdentifier = useMemo(() => {
    if (target.type === 'entry') {
      return getReviseEntryIdentifier(target.worldName, target.entry.uid);
    }
    return 'global';
  }, [target]);

  useEffect(() => {
    mountedRef.current = true;
    let mounted = true;
    void loadReviseSessions().then((result) => {
      if (!mounted) return;
      historyWritable.current = result.writable;
      sessionsRef.current = result.value;
      setAllSessions(result.value);
      if (result.error) {
        console.warn('Revision history storage:', result.error);
        st_echo('warning', result.writable
          ? 'Revision history was loaded from its original storage, but migration failed. The original has been kept.'
          : 'Revision history could not be read safely. Its original data has been kept; reopen before saving history.');
      }
      setIsLoading(false);
    });
    return () => { mounted = false; mountedRef.current = false; historyWritable.current = false; };
  }, []);

  const filteredSessions = useMemo(() => {
    if (target.type === 'entry') {
      return allSessions
        .filter((s) => s.type === 'entry' && s.targetEntryIdentifier === targetIdentifier
          && !!entryRevisionId && s.targetEntryRevisionId === entryRevisionId)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return allSessions
      .filter((s) => s.type === 'global')
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [allSessions, target.type, targetIdentifier, entryRevisionId]);

  const unverifiedSessions = useMemo(() => target.type === 'entry'
    ? allSessions.filter((session) => session.type === 'entry' && session.targetEntryIdentifier === targetIdentifier
      && (!entryRevisionId || session.targetEntryRevisionId !== entryRevisionId)) : [],
  [allSessions, target.type, targetIdentifier, entryRevisionId]);

  const saveMutation = useCallback((mutation: ReviseSessionMutation) => {
    if (!mountedRef.current) return;
    const updatedSessions = applyReviseSessionMutation(sessionsRef.current, mutation);
    sessionsRef.current = updatedSessions;
    setAllSessions(updatedSessions);
    if (!historyWritable.current) {
      st_echo('warning', 'Revision history has not been saved. Reopen this popup after browser storage is available.');
      return;
    }
    void persistReviseSessionMutation(mutation).then((result) => {
      if (!result.persisted) {
        console.warn('Failed to save revision history:', result.error);
        st_echo('warning', 'Revision history could not be saved. Keep this popup open and check browser storage.');
      }
    });
  }, []);

  const ensureEntryIdentity = async (): Promise<WIEntry | undefined> => {
    if (target.type !== 'entry' || !currentEntry) return undefined;
    if (!('onEnsureEntryIdentity' in entryProps) || !entryProps.onEnsureEntryIdentity) {
      if (getEntryRevisionId(currentEntry)) return currentEntry;
      throw new Error('The entry identity could not be saved. Reopen the editor before creating a revision session.');
    }
    const identified = await entryProps.onEnsureEntryIdentity(currentEntry);
    if (!getEntryRevisionId(identified)) throw new Error('The entry identity was not saved.');
    if (mountedRef.current) setIdentifiedEntry(identified);
    return identified;
  };

  const handleCreateNewSession = async () => {
    const name = await globalContext.Popup.show.input(
      'New Session Name',
      'Session name:',
      target.type === 'entry'
        ? `Revise "${target.entry.comment}" - ${new Date().toLocaleDateString()}`
        : `Global Revise - ${new Date().toLocaleDateString()}`,
    );
    if (!name) return;

    setIsIdentifying(true);
    try {
      const currentSettings = settingsManager.getSettings();
      if (!currentSettings.profileId) {
        st_echo('warning', 'Please select a connection profile in the main popup first.');
        return;
      }

      const identified = await ensureEntryIdentity();
      const initialMsgs = await buildInitialReviseMessages(
        identified ?? initialState,
        target.type,
        target.type === 'entry' ? target.worldName : undefined,
        currentSettings.mainContextTemplatePreset,
        contextToSend,
        sessionForContext,
        allEntries,
      );

      const newSession: ReviseSession = {
        id: `rs-${createRevisionId()}`,
        name,
        type: target.type,
        targetEntryIdentifier: target.type === 'entry' ? targetIdentifier : undefined,
        targetEntryRevisionId: identified ? getEntryRevisionId(identified) : undefined,
        worldName: target.type === 'entry' ? target.worldName : undefined,
        createdAt: new Date().toISOString(),
        messages: initialMsgs,
        context: { mainContextTemplatePreset: currentSettings.mainContextTemplatePreset },
        profileId: currentSettings.profileId,
        promptEngineeringMode: currentSettings.defaultPromptEngineeringMode,
        isReadonly: false,
      };

      if (!mountedRef.current) return;
      saveMutation({ type: 'create', session: newSession });
      selectSession(newSession);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      console.error('Failed to create session:', error);
      st_echo('error', `Failed to create session: ${message}`);
    } finally {
      if (mountedRef.current) setIsIdentifying(false);
    }
  };

  const handleSelectSession = (session: ReviseSession) => {
    selectSession(session);
  };

  const handleDeleteSession = async (sessionId: string) => {
    const confirm = await globalContext.Popup.show.confirm('Delete Session', 'Are you sure? This cannot be undone.');
    if (confirm) {
      saveMutation({ type: 'delete', sessionId });
    }
  };

  const handleSessionUpdate = useCallback((sessionId: string, changes: Partial<ReviseSession>) => {
    saveMutation({ type: 'patch', sessionId, changes });
    // Completing a request for a departed session must never navigate back to it.
    if (mountedRef.current && activeSessionIdRef.current === sessionId) {
      setActiveSession((current) => current?.id === sessionId ? { ...current, ...changes } : current);
    }
  }, [saveMutation]);

  const handleRecoverSession = async (session: ReviseSession) => {
    const confirmed = await globalContext.Popup.show.confirm('Attach saved revision history',
      'This history cannot be verified as belonging to the current entry. Its UID may have been reused after deletion. '
      + 'Only continue if you have verified that the saved history belongs to this entry. A separate copy will be attached.');
    if (!confirmed || !mountedRef.current) return;
    setIsIdentifying(true);
    try {
      const identified = await ensureEntryIdentity();
      if (!identified || !mountedRef.current) return;
      const recovered = { ...structuredClone(session), id: `rs-${createRevisionId()}`,
        name: `${session.name} (recovered)`, createdAt: new Date().toISOString(),
        worldName: target.type === 'entry' ? target.worldName : session.worldName,
        targetEntryIdentifier: targetIdentifier,
        targetEntryRevisionId: getEntryRevisionId(identified) };
      saveMutation({ type: 'create', session: recovered });
      selectSession(recovered);
    } catch (error) {
      st_echo('error', `Could not attach revision history: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      if (mountedRef.current) setIsIdentifying(false);
    }
  };

  const handleApplyAndClose = async (newState: ReviseState) => {
    if (target.type === 'entry') {
      const expectedId = activeSession?.targetEntryRevisionId;
      try {
        const identified = await ensureEntryIdentity();
        if (!mountedRef.current) return;
        if (!expectedId || getEntryRevisionId(identified!) !== expectedId) {
          throw new Error('This revision belongs to a different entry lifetime. Attach its history explicitly before applying.');
        }
      } catch (error) {
        st_echo('error', `Revision was not applied: ${error instanceof Error ? error.message : String(error)}`);
        return;
      }
      (onApply as (args: EntryRevisionApplyArgs) => void)({
        type: 'entry',
        worldName: target.worldName,
        originalEntry: initialState as WIEntry,
        updatedEntry: withEntryRevisionId({ ...newState as WIEntry, uid: target.entry.uid }, expectedId),
      });
    } else {
      (onApply as (newState: Record<string, WIEntry[]>) => void)(newState as Record<string, WIEntry[]>);
    }
    onClose();
  };

  if (activeSession) {
    const currentSettings = settingsManager.getSettings();
    const effectiveProfileId = currentSettings.profileId || activeSession.profileId;
    const profile = getRuntimeConnectionProfile(effectiveProfileId);
    const msgContext = contextToSend.messages;
    const chatContextOptions: BuildPromptOptions = {
      targetCharacterId: this_chid,
      ignoreCharacterFields: !contextToSend.charCard,
      ignoreWorldInfo: true,
      ignoreAuthorNote: !contextToSend.authorNote,
      includeNames: !!selected_group,
      presetName: profile?.preset,
      contextName: profile?.context,
      instructName: profile?.instruct,
    };

    if (this_chid === undefined && !selected_group) {
      chatContextOptions.messageIndexesBetween = { start: -1, end: -1 };
    } else {
      chatContextOptions.messageIndexesBetween = getMessageIndexes(msgContext, globalContext.chat?.length ?? 0);
    }

    return (
      <ReviseSessionChat
        key={activeSession.id}
        session={activeSession}
        onBack={() => selectSession(null)}
        onApply={handleApplyAndClose}
        onSessionUpdate={handleSessionUpdate}
        initialState={initialState}
        chatContextOptions={chatContextOptions}
      />
    );
  }

  const title = target.type === 'entry' ? `Revise Sessions for "${target.entry.comment}"` : 'Global Revise Sessions';

  return (
    <div className="revise-session-manager">
      <div className="popup_header">
        <h2>{title}</h2>
      </div>
      <div className="session-list">
        {isLoading ? (
          <p className="subtle" style={{ textAlign: 'center' }}>
            Loading sessions...
          </p>
        ) : filteredSessions.length === 0 ? (
          <p className="subtle" style={{ textAlign: 'center' }}>
            No sessions found. Create one to get started.
          </p>
        ) : (
          filteredSessions.map((session) => (
            <div key={session.id} className="session-item">
              <div className="session-info" onClick={() => handleSelectSession(session)}>
                <span className="session-name">{session.name}</span>
                <span className="session-date">{new Date(session.createdAt).toLocaleString()}</span>
              </div>
              <STButton className="danger_button" onClick={() => handleDeleteSession(session.id)}>
                <i className="fa-solid fa-trash-can"></i>
              </STButton>
            </div>
          ))
        )}
      </div>
      {unverifiedSessions.length > 0 && (
        <section className="unverified-revision-history">
          <h3>Unverified saved history</h3>
          <p>These sessions may belong to a deleted entry that used this UID. Preview them before explicitly attaching a copy.</p>
          {unverifiedSessions.map((session) => (
            <div key={session.id} className="unverified-session-item">
              <strong>{session.name}</strong>
              <details>
                <summary>Preview saved history</summary>
                {session.messages.map((message) => (
                  <div key={message.id}>
                    <strong>{message.role}</strong>
                    <pre style={{ whiteSpace: 'pre-wrap' }}>{message.content}</pre>
                    {message.stateSnapshot && <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(message.stateSnapshot, null, 2)}</pre>}
                  </div>
                ))}
              </details>
              <STButton onClick={() => handleRecoverSession(session)} disabled={isIdentifying} title="Attach a copy of verified history">
                Attach history
              </STButton>
              <STButton className="danger_button" onClick={() => handleDeleteSession(session.id)}>
                Delete saved history
              </STButton>
            </div>
          ))}
        </section>
      )}
      <div className="session-actions">
        <STButton onClick={handleCreateNewSession} disabled={isLoading || isIdentifying} className="menu_button">
          <i className="fa-solid fa-plus"></i> New Session
        </STButton>
      </div>
    </div>
  );
};
