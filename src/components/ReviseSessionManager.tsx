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
import { getReviseEntryIdentifier, loadReviseSessions, saveReviseSessions } from '../revise-session-storage.js';

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
  | { target: { type: 'entry'; worldName: string; entry: WIEntry }; onApply: (args: EntryRevisionApplyArgs) => void }
);

export const ReviseSessionManager: FC<ReviseSessionManagerProps> = ({
  target,
  initialState,
  onClose,
  onApply,
  sessionForContext,
  allEntries,
  contextToSend,
}) => {
  const [allSessions, setAllSessions] = useState<ReviseSession[]>([]);
  const [activeSession, setActiveSession] = useState<ReviseSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const historyWritable = useRef(false);
  const mountedRef = useRef(false);
  const sessionsRef = useRef<ReviseSession[]>([]);
  const activeSessionIdRef = useRef<string | null>(null);

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
        .filter((s) => s.type === 'entry' && s.targetEntryIdentifier === targetIdentifier)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return allSessions
      .filter((s) => s.type === 'global')
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [allSessions, target.type, targetIdentifier]);

  const saveAllSessions = useCallback((update: (current: ReviseSession[]) => ReviseSession[]) => {
    if (!mountedRef.current) return;
    const updatedSessions = update(sessionsRef.current);
    sessionsRef.current = updatedSessions;
    setAllSessions(updatedSessions);
    if (!historyWritable.current) {
      st_echo('warning', 'Revision history has not been saved. Reopen this popup after browser storage is available.');
      return;
    }
    void saveReviseSessions(updatedSessions).then((result) => {
      if (!result.persisted) {
        console.warn('Failed to save revision history:', result.error);
        st_echo('warning', 'Revision history could not be saved. Keep this popup open and check browser storage.');
      }
    });
  }, []);

  const handleCreateNewSession = async () => {
    const name = await globalContext.Popup.show.input(
      'New Session Name',
      'Session name:',
      target.type === 'entry'
        ? `Revise "${target.entry.comment}" - ${new Date().toLocaleDateString()}`
        : `Global Revise - ${new Date().toLocaleDateString()}`,
    );
    if (!name) return;

    try {
      const currentSettings = settingsManager.getSettings();
      if (!currentSettings.profileId) {
        st_echo('warning', 'Please select a connection profile in the main popup first.');
        return;
      }

      const initialMsgs = await buildInitialReviseMessages(
        initialState,
        target.type,
        target.type === 'entry' ? target.worldName : undefined,
        currentSettings.mainContextTemplatePreset,
        contextToSend,
        sessionForContext,
        allEntries,
      );

      const newSession: ReviseSession = {
        id: `rs-${Date.now()}`,
        name,
        type: target.type,
        targetEntryIdentifier: target.type === 'entry' ? targetIdentifier : undefined,
        worldName: target.type === 'entry' ? target.worldName : undefined,
        createdAt: new Date().toISOString(),
        messages: initialMsgs,
        context: { mainContextTemplatePreset: currentSettings.mainContextTemplatePreset },
        profileId: currentSettings.profileId,
        promptEngineeringMode: currentSettings.defaultPromptEngineeringMode,
        isReadonly: false,
      };

      if (!mountedRef.current) return;
      saveAllSessions((current) => [...current, newSession]);
      selectSession(newSession);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      console.error('Failed to create session:', error);
      st_echo('error', `Failed to create session: ${message}`);
    }
  };

  const handleSelectSession = (session: ReviseSession) => {
    selectSession(session);
  };

  const handleDeleteSession = async (sessionId: string) => {
    const confirm = await globalContext.Popup.show.confirm('Delete Session', 'Are you sure? This cannot be undone.');
    if (confirm) {
      saveAllSessions((current) => current.filter((s) => s.id !== sessionId));
    }
  };

  const handleSessionUpdate = useCallback((sessionId: string, changes: Partial<ReviseSession>) => {
    saveAllSessions((current) => current.map((saved) => saved.id === sessionId ? { ...saved, ...changes } : saved));
    // Completing a request for a departed session must never navigate back to it.
    if (mountedRef.current && activeSessionIdRef.current === sessionId) {
      setActiveSession((current) => current?.id === sessionId ? { ...current, ...changes } : current);
    }
  }, [saveAllSessions]);

  const handleApplyAndClose = (newState: ReviseState) => {
    if (target.type === 'entry') {
      (onApply as (args: EntryRevisionApplyArgs) => void)({
        type: 'entry',
        worldName: target.worldName,
        originalEntry: initialState as WIEntry,
        updatedEntry: newState as WIEntry,
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

    if (!this_chid && !selected_group) {
      chatContextOptions.messageIndexesBetween = { start: -1, end: -1 };
    } else {
      switch (msgContext.type) {
        case 'none':
          chatContextOptions.messageIndexesBetween = { start: -1, end: -1 };
          break;
        case 'first':
          chatContextOptions.messageIndexesBetween = { start: 0, end: msgContext.first ?? 10 };
          break;
        case 'last': {
          const chatLength = globalContext.chat?.length ?? 0;
          const lastCount = msgContext.last ?? 10;
          chatContextOptions.messageIndexesBetween = {
            end: Math.max(0, chatLength - 1),
            start: Math.max(0, chatLength - lastCount),
          };
          break;
        }
        case 'range':
          if (msgContext.range) {
            chatContextOptions.messageIndexesBetween = {
              start: msgContext.range.start,
              end: msgContext.range.end,
            };
          }
          break;
        case 'all':
        default:
          break;
      }
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
      <div className="session-actions">
        <STButton onClick={handleCreateNewSession} disabled={isLoading} className="menu_button">
          <i className="fa-solid fa-plus"></i> New Session
        </STButton>
      </div>
    </div>
  );
};
