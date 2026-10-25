import { expect, test } from 'vitest';
import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import type { ReviseMessage, ReviseSession } from '../revise-types.js';
import { compactRevisionMessages, getRevisionState, revisionStateFields } from '../revision-state.js';
import { saveLatestSession, type SessionStorage } from '../session-storage.js';
import { loadReviseSession, loadReviseSessions, persistReviseSessionMutation, REVISE_SESSIONS_KEY } from '../revise-session-storage.js';

const entry = (uid: number, content = 'x'.repeat(500)): WIEntry => ({ uid, comment: `Entry ${uid}`, content, key: ['key'] } as WIEntry);
const noLegacy = { getItem: () => null, removeItem: () => {} };
function database() {
  const items = new Map<string, unknown>();
  const reads: string[] = [];
  const db: SessionStorage = {
    keys: async () => [...items.keys()],
    getItem: async <T>(key: string) => { reads.push(key); return structuredClone(items.get(key) ?? null) as T | null; },
    setItem: async <T>(key: string, value: T) => { items.set(key, structuredClone(value)); return value; },
    removeItem: async key => { items.delete(key); },
  };
  return { db, items, reads };
}
const session = (id: string): ReviseSession => ({ id, name: id, type: 'global', createdAt: '2026-10-25',
  profileId: 'p', promptEngineeringMode: 'native', context: { mainContextTemplatePreset: 'Default' },
  messages: [{ id: 'initial', role: 'assistant', content: 'Initial', stateSnapshot: { Book: [entry(1)] } }],
});

test('checkpoint histories reconstruct every revision, retain custom fields, and substantially reduce repeated book data', () => {
  const full: ReviseMessage[] = [];
  let state = { Book: Array.from({ length: 100 }, (_, i) => entry(i)), Other: [entry(999)] };
  for (let i = 0; i < 30; i++) {
    state = structuredClone(state);
    state.Book[i].content = `Changed ${i}`;
    full.push({ id: `revision-${i}`, role: 'assistant', content: 'Changed', stateSnapshot: state });
  }
  const compact = compactRevisionMessages(full, 'global');
  expect(compact.filter(message => message.stateSnapshot)).toHaveLength(3);
  for (let i = 0; i < full.length; i++) expect(getRevisionState(compact, {}, i + 1)).toEqual(full[i].stateSnapshot);
  expect(JSON.stringify(compact).length).toBeLessThan(JSON.stringify(full).length / 5);
  expect(compactRevisionMessages(compact, 'global')).toEqual(compact);
});

test('delta references preserve entry order, duplicate UIDs, removals, empty books, and added custom fields', () => {
  const before = { Book: [entry(1, 'first'), entry(1, 'second'), entry(2)], Removed: [entry(3)] };
  const after = { Book: [before.Book[1], { ...before.Book[0], custom: { nested: ['kept'] } }], Empty: [] };
  const messages: ReviseMessage[] = [{ id: 'base', role: 'assistant', content: '', stateSnapshot: before }];
  messages.push({ id: 'next', role: 'assistant', content: '', ...revisionStateFields(messages, after, 'global') });
  expect(messages[1].stateSnapshot).toBeUndefined();
  expect(getRevisionState(messages, {})).toEqual(after);
  expect(before.Book[0].content).toBe('first');
  const corrupted = structuredClone(messages);
  corrupted[1].stateDelta!.baseMessageId = 'missing';
  expect(() => getRevisionState(corrupted, {})).toThrow(/checkpoint/);
  expect(() => compactRevisionMessages([messages[1]], 'global')).toThrow(/checkpoint/);
});

test('queued autosaves keep only the active write and newest pending value without accepting caller mutations', async () => {
  const { db, items } = database();
  const write = db.setItem.bind(db);
  let release!: () => void;
  const gate = new Promise<void>(resolve => { release = resolve; });
  const written: number[] = [];
  db.setItem = async <T>(key: string, value: T) => {
    written.push((value as { version: number }).version);
    if (written.length === 1) await gate;
    return write(key, value);
  };
  const pending = [saveLatestSession('session', { version: 0 }, db)];
  await Promise.resolve(); await Promise.resolve();
  for (let i = 1; i <= 50; i++) {
    const value = { version: i };
    pending.push(saveLatestSession('session', value, db));
    value.version = -1;
  }
  release();
  expect((await Promise.all(pending)).every(result => result.persisted)).toBe(true);
  expect(written).toEqual([0, 50]);
  expect(items.get('session')).toEqual({ version: 50 });
});

test('listing sessions reads only headers; selecting one loads only its message body', async () => {
  const { db, reads } = database();
  for (const id of ['A', 'B', 'C']) {
    await persistReviseSessionMutation({ type: 'create', session: session(id) }, db);
    await persistReviseSessionMutation({ type: 'patch', sessionId: id, changes: { messages: session(id).messages } }, db);
  }
  reads.length = 0;
  const headers = await loadReviseSessions(db, noLegacy, { headersOnly: true });
  expect(headers.writable).toBe(true);
  expect(headers.value).toHaveLength(3);
  expect(headers.value.every(value => value.messagesLoaded === false && value.messages.length === 0)).toBe(true);
  expect(reads.some(key => key.endsWith(',"messages"]') || key.endsWith(',"$create"]'))).toBe(false);
  reads.length = 0;
  expect((await loadReviseSession('B', db, noLegacy)).value?.messages).toEqual(session('B').messages);
  expect(reads.filter(key => key.endsWith(',"messages"]'))).toEqual([`${REVISE_SESSIONS_KEY}.records.["B","messages"]`]);
});

test('legacy header indexing leaves original creation data intact and skips bodies on the next list', async () => {
  const { db, items, reads } = database();
  const key = `${REVISE_SESSIONS_KEY}.records.["A","$create"]`;
  const original = { value: session('A') };
  items.set(key, original);
  expect((await loadReviseSessions(db, noLegacy, { headersOnly: true })).value[0].messages).toEqual([]);
  expect(items.get(key)).toEqual(original);
  reads.length = 0;
  await loadReviseSessions(db, noLegacy, { headersOnly: true });
  expect(reads).not.toContain(key);
});
