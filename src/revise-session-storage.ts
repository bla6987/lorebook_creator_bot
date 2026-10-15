import type { ReviseSession } from './revise-types.js';
import { loadSession, saveSession, type SessionStorage, type LegacyStorage } from './session-storage.js';

export const getReviseEntryIdentifier = (worldName: string, uid: number) => JSON.stringify([worldName, uid]);

export const REVISE_SESSIONS_KEY = 'worldInfoRecommender_reviseSessions';
function validateSessions(value: unknown): ReviseSession[] {
  if (!Array.isArray(value)) throw new Error('Invalid saved revision sessions');
  for (const session of value) {
    if (!session || typeof session.id !== 'string' || typeof session.name !== 'string'
      || !['entry', 'global'].includes(session.type) || typeof session.createdAt !== 'string'
      || !Array.isArray(session.messages) || session.messages.some((message: any) =>
        !message || typeof message.id !== 'string' || typeof message.role !== 'string')) {
      throw new Error('Invalid saved revision session; the original data has been retained');
    }
  }
  // Older versions included the mutable title after world and UID. Normalize on
  // read so renamed entries keep their history, retaining every other field.
  return (value as ReviseSession[]).map((session) => {
    const prefix = `${session.worldName}::`;
    if (session.type !== 'entry' || !session.worldName || !session.targetEntryIdentifier?.startsWith(prefix)) {
      return session;
    }
    const uid = session.targetEntryIdentifier.slice(prefix.length).match(/^(-?\d+)::/);
    return uid ? { ...session, targetEntryIdentifier: getReviseEntryIdentifier(session.worldName, Number(uid[1])) } : session;
  });
}
// The old shared array is migration input only. New writes address one
// session field at a time, so tabs never replace each other's stale arrays.
// Each field has one bounded snapshot (including messages), not an append-only
// history of increasingly large conversations. Tombstones prevent late writes
// from resurrecting a session deleted in another tab.
const RECORD_PREFIX = `${REVISE_SESSIONS_KEY}.records.`;
const fields = new Set<keyof ReviseSession>([
  'name', 'type', 'targetEntryIdentifier', 'targetEntryRevisionId', 'worldName',
  'createdAt', 'messages', 'context', 'profileId', 'promptEngineeringMode', 'isReadonly',
]);
const storageOrDefault = (storage?: SessionStorage) => storage ?? SillyTavern.libs.localforage as SessionStorage;
const recordKey = (id: string, field: string) => `${RECORD_PREFIX}${JSON.stringify([id, field])}`;

async function removeDeletedPayloads(db: SessionStorage, deleted: Set<string>, keys: string[]) {
  if (!db.removeItem || deleted.size === 0) return;
  await Promise.all(keys.filter((key) => {
    if (!key.startsWith(RECORD_PREFIX)) return false;
    try {
      const [id, field] = JSON.parse(key.slice(RECORD_PREFIX.length));
      return deleted.has(id) && field !== '$deleted';
    } catch { return false; }
  }).map((key) => db.removeItem!(key).catch(() => {
    // The tombstone remains authoritative if quota cleanup is unavailable.
  })));
}

export type ReviseSessionMutation =
  | { type: 'create'; session: ReviseSession }
  | { type: 'patch'; sessionId: string; changes: Partial<ReviseSession> }
  | { type: 'delete'; sessionId: string };

export function applyReviseSessionMutation(current: ReviseSession[], mutation: ReviseSessionMutation): ReviseSession[] {
  if (mutation.type === 'create') return [...current, mutation.session];
  if (mutation.type === 'delete') return current.filter((session) => session.id !== mutation.sessionId);
  return current.map((session) => session.id === mutation.sessionId ? { ...session, ...mutation.changes, id: session.id } : session);
}

export async function loadReviseSessions(storage?: SessionStorage, legacy?: LegacyStorage) {
  const result = await loadSession(REVISE_SESSIONS_KEY, [] as ReviseSession[], validateSessions, storage, legacy);
  if (!result.writable) return result;
  try {
    const db = storageOrDefault(storage);
    if (!db.keys) throw new Error('Revision storage cannot enumerate session records');
    // Convert the old shared array before releasing any copy of it. Two tabs
    // can copy the same immutable creation record safely; edits live in other
    // keys and are never replaced by this migration.
    if (result.value.length > 0) {
      for (const session of result.value) {
        const key = recordKey(session.id, '$create');
        const existing = await db.getItem<{ value: unknown }>(key);
        if (existing === null) {
          const saved = await saveSession(key, { value: session }, db);
          if (!saved.persisted) throw saved.error;
        } else {
          const [storedSession] = validateSessions([existing.value]);
          if (storedSession.id !== session.id) throw new Error('Revision session record ID mismatch');
        }
      }
      const released = await saveSession(REVISE_SESSIONS_KEY, [], db);
      if (!released.persisted) throw released.error;
    }
    const keys = (await db.keys()).filter((key) => key.startsWith(RECORD_PREFIX));
    const addresses = keys.map((key) => {
      const address: unknown = JSON.parse(key.slice(RECORD_PREFIX.length));
      if (!Array.isArray(address) || address.length !== 2 || address.some((part) => typeof part !== 'string')) {
        throw new Error('Invalid revision session record address');
      }
      return { key, address: address as [string, string] };
    });
    const deleted = new Set<string>();
    await Promise.all(addresses.filter(({ address }) => address[1] === '$deleted').map(async ({ key, address }) => {
      const record = await db.getItem<{ value: unknown }>(key);
      if (record?.value !== true) throw new Error('Invalid revision session deletion record');
      deleted.add(address[0]);
    }));
    await removeDeletedPayloads(db, deleted, keys);
    // A deleted conversation may be large. Its tombstone is enough; avoid
    // loading obsolete message snapshots, including late writes after deletion.
    const records = await Promise.all(addresses.filter(({ address }) => !deleted.has(address[0])).map(async ({ key, address }) => ({
      address, record: await db.getItem<{ value: unknown }>(key),
    })));
    const sessions = new Map(result.value.map((session) => [session.id, session]));
    for (const { address: [id, field], record } of records) {
      if (!record) {
        throw new Error('Invalid revision session record; the original data has been retained');
      }
      if (field === '$create') {
        const [session] = validateSessions([record.value]);
        if (session.id !== id) throw new Error('Revision session record ID mismatch');
        sessions.set(id, session);
      }
    }
    for (const { address: [id, field], record } of records) {
      if (!fields.has(field as keyof ReviseSession) || !sessions.has(id)) continue;
      sessions.set(id, { ...sessions.get(id)!, [field]: record!.value });
    }
    return { ...result, value: validateSessions([...sessions.values()].filter((session) => !deleted.has(session.id))) };
  } catch (error) {
    return { ...result, writable: false, error };
  }
}

export async function persistReviseSessionMutation(mutation: ReviseSessionMutation, storage?: SessionStorage) {
  try {
    const db = storageOrDefault(storage);
    if (!db.keys) throw new Error('Revision storage cannot enumerate session records');
    const writes = mutation.type === 'create'
      ? [[recordKey(mutation.session.id, '$create'), mutation.session] as const]
      : mutation.type === 'delete'
        ? [[recordKey(mutation.sessionId, '$deleted'), true] as const]
        : Object.entries(mutation.changes)
          .filter(([field]) => fields.has(field as keyof ReviseSession))
          .map(([field, value]) => [recordKey(mutation.sessionId, field), value] as const);
    const results = await Promise.all(writes.map(([key, value]) => saveSession(key, { value }, db)));
    if (mutation.type === 'delete' && results.every((result) => result.persisted)) {
      await removeDeletedPayloads(db, new Set([mutation.sessionId]), await db.keys());
    }
    return results.find((result) => !result.persisted) ?? { persisted: true };
  } catch (error) {
    return { persisted: false, error };
  }
}

/** Rebind only a confirmed materialized suggestion, never a native book/entry copy. */
export async function relocateEntryRevisionSessions(
  revisionId: string,
  from: { worldName: string; uid: number },
  to: { worldName: string; uid: number },
  storage?: SessionStorage,
  legacy?: LegacyStorage,
) {
  const loaded = await loadReviseSessions(storage, legacy);
  if (!loaded.writable) return { persisted: false, error: loaded.error };
  const identifier = getReviseEntryIdentifier(from.worldName, from.uid);
  const results = await Promise.all(loaded.value.filter((session) => session.type === 'entry'
    && session.targetEntryRevisionId === revisionId && session.targetEntryIdentifier === identifier)
    .map((session) => persistReviseSessionMutation({ type: 'patch', sessionId: session.id,
      changes: { worldName: to.worldName, targetEntryIdentifier: getReviseEntryIdentifier(to.worldName, to.uid) } }, storage)));
  return results.find((result) => !result.persisted) ?? { persisted: true };
}

// Retained for importing an entire legacy baseline, never used by popup edits.
export const saveReviseSessions = (sessions: ReviseSession[], storage?: SessionStorage) =>
  saveSession(REVISE_SESSIONS_KEY, sessions, storage);
