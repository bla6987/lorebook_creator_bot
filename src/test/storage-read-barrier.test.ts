import { expect, test } from 'vitest';
import type { ReviseSession } from '../revise-types.js';
import { flushSessionWrites, readSessionRecord, saveLatestSession, type SessionStorage } from '../session-storage.js';
import { loadReviseSession, persistReviseSessionMutation, REVISE_SESSIONS_KEY } from '../revise-session-storage.js';

const noLegacy = { getItem: () => null, removeItem: () => {} };
const tick = () => new Promise<void>(resolve => setTimeout(resolve, 0));
const session = (): ReviseSession => ({ id: 'A', name: 'A', type: 'global', createdAt: '2026-10-25',
  profileId: 'p', promptEngineeringMode: 'native', context: { mainContextTemplatePreset: 'Default' },
  messages: [{ id: 'initial', role: 'assistant', content: 'old', stateSnapshot: {} }],
});

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

function holdWrites(db: SessionStorage, heldKey: string) {
  const original = db.setItem.bind(db);
  let release!: () => void;
  let started!: () => void;
  const gate = new Promise<void>(resolve => { release = resolve; });
  const active = new Promise<void>(resolve => { started = resolve; });
  db.setItem = async <T>(key: string, value: T) => {
    if (key === heldKey) { started(); await gate; }
    return original(key, value);
  };
  return { release, active };
}

test('ordered record reads wait for a write already queued on the same key', async () => {
  const { db } = database();
  const held = holdWrites(db, 'value');
  const save = saveLatestSession('value', { version: 1 }, db);
  await held.active;
  let complete = false;
  const read = readSessionRecord('value', db).then(value => { complete = true; return value; });
  await tick();
  expect(complete).toBe(false);
  held.release();
  expect(await save).toEqual({ persisted: true });
  expect(await read).toEqual({ version: 1 });
});

test('lazy session loading waits before key enumeration for the first pending messages field', async () => {
  const { db, items } = database();
  const initial = session();
  await persistReviseSessionMutation({ type: 'create', session: initial }, db);
  const key = `${REVISE_SESSIONS_KEY}.records.["A","messages"]`;
  const held = holdWrites(db, key);
  const messages = [...initial.messages, { id: 'new', role: 'user', content: 'new revision' }];
  const saved = persistReviseSessionMutation({ type: 'patch', sessionId: 'A', changes: { messages } }, db);
  await held.active;
  expect(items.has(key)).toBe(false);
  let complete = false;
  const loaded = loadReviseSession('A', db, noLegacy).then(value => { complete = true; return value; });
  await tick();
  expect(complete).toBe(false);
  held.release();
  expect((await saved).persisted).toBe(true);
  expect((await loaded).value?.messages).toEqual(messages);
});

test('a reopen observes the newest coalesced value, including a pending save behind an active one', async () => {
  const { db } = database();
  const initial = session();
  await persistReviseSessionMutation({ type: 'create', session: initial }, db);
  const held = holdWrites(db, `${REVISE_SESSIONS_KEY}.records.["A","messages"]`);
  const first = persistReviseSessionMutation({ type: 'patch', sessionId: 'A', changes: { messages: initial.messages } }, db);
  await held.active;
  const secondMessages = [...initial.messages, { id: 'new', role: 'user', content: 'latest' }];
  const second = persistReviseSessionMutation({ type: 'patch', sessionId: 'A', changes: { messages: secondMessages } }, db);
  const loaded = loadReviseSession('A', db, noLegacy);
  held.release();
  expect((await Promise.all([first, second])).every(result => result.persisted)).toBe(true);
  expect((await loaded).value?.messages).toEqual(secondMessages);
});

test('a failed in-flight write rejects the barrier instead of claiming old storage is current', async () => {
  const { db } = database();
  let reject!: (reason: Error) => void;
  let started!: () => void;
  const active = new Promise<void>(resolve => { started = resolve; });
  const failed = new Promise<void>((_resolve, fail) => { reject = fail; });
  db.setItem = async <T>(_key: string, value: T) => { started(); await failed; return value; };
  const save = saveLatestSession('value', { version: 2 }, db);
  await active;
  const barrier = flushSessionWrites(db);
  const expected = expect(barrier).rejects.toThrow('quota failure');
  reject(new Error('quota failure'));
  await expected;
  expect((await save).persisted).toBe(false);
});

test('legacy migration can load and index a session without nesting same-key ordered reads', async () => {
  const { db } = database();
  let raw: string | null = JSON.stringify([session()]);
  const legacy = { getItem: () => raw, removeItem: () => { raw = null; } };
  const loaded = await loadReviseSession('A', db, legacy);
  expect(loaded.writable).toBe(true);
  expect(loaded.value?.messages).toEqual(session().messages);
});

test('full selection uses header plus current messages, but preserves creation-history fallback', async () => {
  const { db, items, reads } = database();
  const initial = session();
  await persistReviseSessionMutation({ type: 'create', session: initial }, db);
  const createKey = `${REVISE_SESSIONS_KEY}.records.["A","$create"]`;
  const messageKey = `${REVISE_SESSIONS_KEY}.records.["A","messages"]`;
  const current = [...initial.messages, { id: 'later', role: 'user', content: 'current body' }];
  await persistReviseSessionMutation({ type: 'patch', sessionId: 'A', changes: { messages: current } }, db);
  reads.length = 0;
  const updated = await loadReviseSession('A', db, noLegacy);
  expect(updated.value?.messages).toEqual(current);
  expect(updated.value?.messagesLoaded).toBeUndefined();
  expect(reads).toContain(messageKey);
  expect(reads).not.toContain(createKey);
  expect(items.get(createKey)).toEqual({ value: initial });

  // An untouched session only has its original creation body. A derived header
  // must never make that history look empty or overwrite the source record.
  items.delete(messageKey);
  reads.length = 0;
  const untouched = await loadReviseSession('A', db, noLegacy);
  expect(untouched.value?.messages).toEqual(initial.messages);
  expect(reads).toContain(createKey);
  expect(items.get(createKey)).toEqual({ value: initial });
});
