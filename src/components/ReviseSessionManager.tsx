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
import { applyReviseSessionMutation, getReviseEntryIdentifier, loadReviseSessions, loadReviseSession, revisionSessionHeader, persistReviseSessionMutation, type ReviseSessionMutation } from '../revise-session-storage.js';
import { createRevisionId, getEntryRevisionId, withEntryRevisionId } from '../revise-entry-identity.js';
import { getMessageIndexes } from '../message-ranges.js';

import { getRevisionState, hasRevisionState } from '../revision-state.js';

const globalContext = SillyTavern.getContext();

async function sessionBody(session: ReviseSession): Promise<ReviseSession> {
  if (session.messagesLoaded !== false) return session;
  const loaded = await loadReviseSession(session.id);
  if (!loaded.writable || !loaded.value) throw loaded.error ?? new Error('Saved session is unavailable. Reopen history to refresh.');
  return loaded.value;
}

function RevisionHistoryPreview({ session, loadBody }: {
  session: ReviseSession; loadBody: (session: ReviseSession) => Promise<ReviseSession>;
}) {
  const [open, setOpen] = useState(false);
  const [body, setBody] = useState<ReviseSession | null>(null);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);
  const [stateId, setStateId] = useState<string | null>(null);
  useEffect(() => {
    let current = true;
    setBody(null); setError(''); setStateId(null); setPage(0);
    if (open) void loadBody(session).then(value => { if (current) setBody(value); })
      .catch(reason => { if (current) setError(String(reason?.message ?? reason)); });
    return () => { current = false; };
  }, [open, session.id, loadBody]);
  const messages = body?.messages ?? [];
  const selected = stateId ? messages.findIndex(message => message.id === stateId) : -1;
  const preview = useMemo(() => selected < 0 ? null : getRevisionState(messages, {}, selected + 1), [body, selected]);
  return <details onToggle={event => setOpen(event.currentTarget.open)}>
    <summary>Preview saved history</summary>
    {open && <>
      {error ? <p>{error}</p> : !body ? <p>Loading history...</p> : <>
        {messages.slice(page * 50, (page + 1) * 50).map(message => <div key={message.id}>
          <strong>{message.role}</strong>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{message.content}</pre>
          {hasRevisionState(message) && <STButton onClick={() => setStateId(stateId === message.id ? null : message.id)}>Show revision state</STButton>}
        </div>)}
        {messages.length > 50 && <div className="session-actions">
          <STButton disabled={!page} onClick={() => setPage(page - 1)}>Previous messages</STButton>
          <span>Page {page + 1} of {Math.ceil(messages.length / 50)}</span>
          <STButton disabled={(page + 1) * 50 >= messages.length} onClick={() => setPage(page + 1)}>Next messages</STButton>
        </div>}
        {preview && <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(preview, null, 2)}</pre>}
      </>}
    </>}
  </details>;
}

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

interface PendingRevisionSave {
  mutation: ReviseSessionMutation;
  body?: ReviseSession;
  version: number;
  saving: boolean;
  failed: boolean;
}

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
  const [loadingSessionId, setLoadingSessionId] = useState<string | null>(null);
  const selectionVersion = useRef(0);
  const [sessionPage, setSessionPage] = useState(0);
  const [unverifiedPage, setUnverifiedPage] = useState(0);
  const historyWritable = useRef(false);
  const mountedRef = useRef(false);
  const sessionsRef = useRef<ReviseSession[]>([]);
  const activeSessionIdRef = useRef<string | null>(null);
  const activeSessionRef = useRef<ReviseSession | null>(null);
  // Only unacknowledged histories stay resident after Back. A session has one
  // active save and one latest pending value; successful saves release both.
  const pendingSaves = useRef(new Map<string, PendingRevisionSave>());
  const [saveStatus, setSaveStatus] = useState({ pending: 0, failed: 0 });
  const retryingRef = useRef(false);
  const [retrying, setRetrying] = useState(false);
  const [identifiedEntry, setIdentifiedEntry] = useState<WIEntry | null>(null);
  const [isIdentifying, setIsIdentifying] = useState(false);
  const currentEntry = target.type === 'entry' ? identifiedEntry ?? target.entry : undefined;
  const entryRevisionId = currentEntry ? getEntryRevisionId(currentEntry) : undefined;

  const selectSession = (session: ReviseSession | null) => {
    selectionVersion.current++;
    setLoadingSessionId(null);
    activeSessionIdRef.current = session?.id ?? null;
    activeSessionRef.current = session;
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
    void loadReviseSessions(undefined, undefined, { headersOnly: true }).then((result) => {
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
    return () => { mounted = false; mountedRef.current = false; selectionVersion.current++; };
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

  useEffect(() => {
    setSessionPage(page => Math.min(page, Math.max(0, Math.ceil(filteredSessions.length / 50) - 1)));
    setUnverifiedPage(page => Math.min(page, Math.max(0, Math.ceil(unverifiedSessions.length / 50) - 1)));
  }, [filteredSessions.length, unverifiedSessions.length]);

  const updateSaveStatus = useCallback(() => {
    if (mountedRef.current) setSaveStatus({ pending: pendingSaves.current.size,
      failed: [...pendingSaves.current.values()].filter(value => value.failed).length });
  }, []);

  const startPendingSave = useCallback(function savePending(id: string) {
    const pending = pendingSaves.current.get(id);
    if (!pending || pending.saving) return;
    if (!historyWritable.current) {
      pending.failed = true;
      updateSaveStatus();
      return;
    }
    const version = pending.version;
    pending.saving = true;
    pending.failed = false;
    updateSaveStatus();
    void persistReviseSessionMutation(pending.mutation).catch(error => ({ persisted: false, error })).then(result => {
      if (pendingSaves.current.get(id) !== pending) return;
      pending.saving = false;
      if (pending.version !== version) {
        // New edits include all fields not yet acknowledged, even if the older
        // write failed. Never let a metadata-only save forget an unsaved body.
        savePending(id);
        return;
      }
      if (result.persisted) pendingSaves.current.delete(id);
      else {
        pending.failed = true;
        console.warn('Failed to save revision history:', result.error);
        if (mountedRef.current) st_echo('warning', 'Revision history could not be saved. Keep this popup open and retry after checking browser storage.');
      }
      updateSaveStatus();
    });
  }, [updateSaveStatus]);

  const readSessionBody = useCallback(async (session: ReviseSession) => {
    const retained = pendingSaves.current.get(session.id);
    if (retained?.mutation.type === 'delete') throw new Error('This session was deleted.');
    if (retained?.body && retained.body.messagesLoaded !== false) return retained.body;
    const loaded = await sessionBody(session);
    const latest = pendingSaves.current.get(session.id);
    if (latest?.mutation.type === 'delete') throw new Error('This session was deleted.');
    if (latest?.body && latest.body.messagesLoaded !== false) return latest.body;
    return latest?.mutation.type === 'patch' ? { ...loaded, ...latest.mutation.changes, id: loaded.id } : loaded;
  }, []);

  const saveMutation = useCallback((mutation: ReviseSessionMutation) => {
    if (!mountedRef.current) return;
    const id = mutation.type === 'create' ? mutation.session.id : mutation.sessionId;
    const previous = pendingSaves.current.get(id);
    if (previous?.mutation.type === 'delete' && mutation.type !== 'delete') return;
    const base = previous?.body ?? (activeSessionRef.current?.id === id ? activeSessionRef.current : undefined)
      ?? sessionsRef.current.find(session => session.id === id);
    const body = mutation.type === 'create' ? mutation.session : mutation.type === 'patch' && base
      ? { ...base, ...mutation.changes, id, ...(mutation.changes.messages ? { messagesLoaded: undefined } : {}) } : base;
    let combined = mutation;
    if (mutation.type === 'patch' && previous?.mutation.type === 'create' && body) {
      combined = { type: 'create', session: body };
    } else if (mutation.type === 'patch' && previous?.mutation.type === 'patch') {
      combined = { ...mutation, changes: { ...previous.mutation.changes, ...mutation.changes } };
    }
    const pending: PendingRevisionSave = previous ?? { mutation: combined, version: 0, saving: false, failed: false };
    pending.mutation = combined;
    pending.body = body;
    pending.version++;
    pending.failed = false;
    pendingSaves.current.set(id, pending);
    const updatedSessions = applyReviseSessionMutation(sessionsRef.current, mutation).map(revisionSessionHeader);
    sessionsRef.current = updatedSessions;
    setAllSessions(updatedSessions);
    if (mutation.type === 'patch' && activeSessionIdRef.current === id && body) {
      activeSessionRef.current = body;
      setActiveSession(body);
    }
    updateSaveStatus();
    startPendingSave(id);
  }, [startPendingSave, updateSaveStatus]);

  const retryPendingSaves = async () => {
    if (retryingRef.current) return;
    retryingRef.current = true;
    setRetrying(true);
    try {
      if (!historyWritable.current) {
        const loaded = await loadReviseSessions(undefined, undefined, { headersOnly: true });
        if (!mountedRef.current) return;
        historyWritable.current = loaded.writable;
        if (!loaded.writable) {
          st_echo('warning', 'Revision storage is still unavailable. Unsaved history remains in this popup.');
          return;
        }
        let refreshed = loaded.value;
        for (const { mutation } of pendingSaves.current.values()) refreshed = applyReviseSessionMutation(refreshed, mutation);
        sessionsRef.current = refreshed.map(revisionSessionHeader);
        setAllSessions(sessionsRef.current);
      }
      for (const id of pendingSaves.current.keys()) startPendingSave(id);
    } finally {
      retryingRef.current = false;
      if (mountedRef.current) setRetrying(false);
    }
  };

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

  const handleSelectSession = async (session: ReviseSession) => {
    const version = ++selectionVersion.current;
    setLoadingSessionId(session.id);
    try {
      const body = await readSessionBody(session);
      if (mountedRef.current && version === selectionVersion.current
        && sessionsRef.current.some(current => current.id === session.id)) selectSession(body);
    } catch (error) {
      if (mountedRef.current && version === selectionVersion.current) {
        setLoadingSessionId(null);
        st_echo('warning', `Could not open history: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  };

  const handleDeleteSession = async (sessionId: string) => {
    const confirm = await globalContext.Popup.show.confirm('Delete Session', 'Are you sure? This cannot be undone.');
    if (confirm && mountedRef.current) {
      selectionVersion.current++;
      setLoadingSessionId(null);
      if (activeSessionIdRef.current === sessionId) selectSession(null);
      saveMutation({ type: 'delete', sessionId });
    }
  };

  const handleSessionUpdate = useCallback((sessionId: string, changes: Partial<ReviseSession>) => {
    saveMutation({ type: 'patch', sessionId, changes });
  }, [saveMutation]);

  const handleRecoverSession = async (session: ReviseSession) => {
    const confirmed = await globalContext.Popup.show.confirm('Attach saved revision history',
      'This history cannot be verified as belonging to the current entry. Its UID may have been reused after deletion. '
      + 'Only continue if you have verified that the saved history belongs to this entry. A separate copy will be attached.');
    if (!confirmed || !mountedRef.current) return;
    const version = ++selectionVersion.current;
    setIsIdentifying(true);
    try {
      const identified = await ensureEntryIdentity();
      if (!identified || !mountedRef.current || version !== selectionVersion.current
        || !sessionsRef.current.some(current => current.id === session.id)) return;
      const original = await readSessionBody(session);
      if (!mountedRef.current || version !== selectionVersion.current
        || !sessionsRef.current.some(current => current.id === session.id)) return;
      const recovered = { ...structuredClone(original), id: `rs-${createRevisionId()}`,
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

  const saveNotice = saveStatus.failed > 0 && <div className="revision-save-warning" role="status">
    <p>Revision history has unsaved changes. Keep this popup open until saving succeeds; you can safely return to the session list.</p>
    <STButton onClick={retryPendingSaves} disabled={retrying}>Retry saving history</STButton>
  </div>;

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
      <>{saveNotice}<ReviseSessionChat
        key={activeSession.id}
        session={activeSession}
        onBack={() => selectSession(null)}
        onApply={handleApplyAndClose}
        onSessionUpdate={handleSessionUpdate}
        initialState={initialState}
        chatContextOptions={chatContextOptions}
      /></>
    );
  }

  const title = target.type === 'entry' ? `Revise Sessions for "${target.entry.comment}"` : 'Global Revise Sessions';

  return (
    <div className="revise-session-manager">
      {saveNotice}
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
          filteredSessions.slice(sessionPage * 50, (sessionPage + 1) * 50).map((session) => (
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
      {loadingSessionId && <p className="subtle">Loading selected history...</p>}
      {filteredSessions.length > 50 && <div className="session-actions">
        <STButton disabled={!sessionPage} onClick={() => setSessionPage(sessionPage - 1)}>Previous sessions</STButton>
        <span>Page {sessionPage + 1} of {Math.ceil(filteredSessions.length / 50)}</span>
        <STButton disabled={(sessionPage + 1) * 50 >= filteredSessions.length} onClick={() => setSessionPage(sessionPage + 1)}>Next sessions</STButton>
      </div>}
      {unverifiedSessions.length > 0 && (
        <section className="unverified-revision-history">
          <h3>Unverified saved history</h3>
          <p>These sessions may belong to a deleted entry that used this UID. Preview them before explicitly attaching a copy.</p>
          {unverifiedSessions.slice(unverifiedPage * 50, (unverifiedPage + 1) * 50).map((session) => (
            <div key={session.id} className="unverified-session-item">
              <strong>{session.name}</strong>
              <RevisionHistoryPreview session={session} loadBody={readSessionBody} />
              <STButton onClick={() => handleRecoverSession(session)} disabled={isIdentifying} title="Attach a copy of verified history">
                Attach history
              </STButton>
              <STButton className="danger_button" onClick={() => handleDeleteSession(session.id)}>
                Delete saved history
              </STButton>
            </div>
          ))}
          {unverifiedSessions.length > 50 && <div className="session-actions">
            <STButton disabled={!unverifiedPage} onClick={() => setUnverifiedPage(unverifiedPage - 1)}>Previous saved sessions</STButton>
            <span>Page {unverifiedPage + 1} of {Math.ceil(unverifiedSessions.length / 50)}</span>
            <STButton disabled={(unverifiedPage + 1) * 50 >= unverifiedSessions.length} onClick={() => setUnverifiedPage(unverifiedPage + 1)}>Next saved sessions</STButton>
          </div>}
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

