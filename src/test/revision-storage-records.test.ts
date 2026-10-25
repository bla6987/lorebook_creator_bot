import { expect, test } from 'vitest';
import { getReviseEntryIdentifier, loadReviseSessions, persistReviseSessionMutation, relocateEntryRevisionSessions, REVISE_SESSIONS_KEY } from '../revise-session-storage.js';
import type { ReviseSession } from '../revise-types.js';
import type { SessionStorage } from '../session-storage.js';

const session = (id: string): ReviseSession => ({
  id, name: `Session ${id}`, type: 'global', createdAt: '2026-10-15',
  messages: [{ id: 'context', role: 'system', content: 'Context' }],
  context: { mainContextTemplatePreset: 'Default' }, profileId: 'profile', promptEngineeringMode: 'native',
});
const noLegacy = { getItem: () => null, removeItem: () => {} };
const key = (id: string, field: string) => `${REVISE_SESSIONS_KEY}.records.${JSON.stringify([id, field])}`;
function sharedDatabase() {
  const items = new Map<string, unknown>();
  // Each tab gets a different SessionStorage object and therefore a separate
  // module-local queue. Only the backing persistent key/value store is shared.
  const tab = (): SessionStorage => ({
    getItem: async <T>(k: string) => structuredClone(items.get(k) ?? null) as T | null,
    setItem: async <T>(k: string, value: T) => { items.set(k, structuredClone(value)); return value; },
    keys: async () => [...items.keys()],
    removeItem: async (k) => { items.delete(k); },
  });
  return { items, tab };
}

test('separate tabs preserve changes to distinct sessions and distinct fields of the same session', async () => {
  const db = sharedDatabase(), a = db.tab(), b = db.tab();
  db.items.set(REVISE_SESSIONS_KEY, [session('A'), session('B')]);
  const loaded = await Promise.all([loadReviseSessions(a, noLegacy), loadReviseSessions(b, noLegacy)]);
  expect(loaded.every(result => result.writable)).toBe(true);
  const results = await Promise.all([
    persistReviseSessionMutation({ type: 'patch', sessionId: 'A', changes: { isReadonly: true } }, a),
    persistReviseSessionMutation({ type: 'patch', sessionId: 'B', changes: { messages: [{ id: 'new', role: 'assistant', content: 'New B history' }] } }, b),
    persistReviseSessionMutation({ type: 'patch', sessionId: 'A', changes: { promptEngineeringMode: 'xml' } }, b),
  ]);
  expect(results.every(result => result.persisted)).toBe(true);
  const saved = (await loadReviseSessions(a, noLegacy)).value;
  expect(saved.find(value => value.id === 'A')).toMatchObject({ isReadonly: true, promptEngineeringMode: 'xml' });
  expect(saved.find(value => value.id === 'B')?.messages.at(-1)?.content).toBe('New B history');
});

test('deletion retains a tombstone, reclaims payloads, and a stale tab cannot resurrect its session', async () => {
  const db = sharedDatabase(), a = db.tab(), b = db.tab();
  await persistReviseSessionMutation({ type: 'create', session: session('A') }, a);
  await loadReviseSessions(b, noLegacy);
  await persistReviseSessionMutation({ type: 'delete', sessionId: 'A' }, a);
  expect(db.items.has(key('A', '$deleted'))).toBe(true);
  expect(db.items.has(key('A', '$create'))).toBe(false);
  await persistReviseSessionMutation({ type: 'patch', sessionId: 'A', changes: { messages: [{ id: 'late', role: 'assistant', content: 'Late result' }] } }, b);
  const read = a.getItem.bind(a);
  const payloadReads: string[] = [];
  a.getItem = async <T>(k: string) => { if (k === key('A', 'messages')) payloadReads.push(k); return read<T>(k); };
  expect((await loadReviseSessions(a, noLegacy)).value).toEqual([]);
  expect(payloadReads).toEqual([]);
  expect(db.items.has(key('A', 'messages'))).toBe(false);
});

test('repeated message edits keep only one current snapshot per field', async () => {
  const db = sharedDatabase(), a = db.tab();
  await persistReviseSessionMutation({ type: 'create', session: session('A') }, a);
  for (let index = 0; index < 30; index++) {
    await persistReviseSessionMutation({ type: 'patch', sessionId: 'A', changes: {
      messages: [{ id: 'current', role: 'assistant', content: 'x'.repeat(1000 + index) }],
    } }, a);
  }
  expect([...db.items.keys()].filter(k => k.startsWith(`${REVISE_SESSIONS_KEY}.records.`))).toHaveLength(3);
  expect((await loadReviseSessions(a, noLegacy)).value[0].messages[0].content).toHaveLength(1029);
});

test('explicit suggestion materialization relocates only matching lifetime and exact source binding', async () => {
  const db = sharedDatabase(), a = db.tab();
  const source: ReviseSession = { ...session('Source'), type: 'entry', worldName: 'Source',
    targetEntryIdentifier: getReviseEntryIdentifier('Source', 9), targetEntryRevisionId: 'lifetime' };
  const copied = { ...source, id: 'Copied', worldName: 'Copied', targetEntryIdentifier: getReviseEntryIdentifier('Copied', 9) };
  const unrelated = { ...source, id: 'Unrelated', targetEntryRevisionId: 'another-lifetime' };
  for (const saved of [source, copied, unrelated]) await persistReviseSessionMutation({ type: 'create', session: saved }, a);
  const result = await relocateEntryRevisionSessions('lifetime', { worldName: 'Source', uid: 9 }, { worldName: 'Assigned', uid: 77 }, a, noLegacy);
  expect(result.persisted).toBe(true);
  const saved = (await loadReviseSessions(a, noLegacy)).value;
  expect(saved.find(value => value.id === 'Source')).toMatchObject({ worldName: 'Assigned', targetEntryIdentifier: getReviseEntryIdentifier('Assigned', 77) });
  expect(saved.find(value => value.id === 'Copied')).toEqual(copied);
  expect(saved.find(value => value.id === 'Unrelated')).toEqual(unrelated);
});

test('migration write failure keeps complete original histories and can retry', async () => {
  const db = sharedDatabase(), a = db.tab();
  const original = [session('A'), session('B')];
  db.items.set(REVISE_SESSIONS_KEY, original);
  const write = a.setItem.bind(a);
  a.setItem = async <T>(k: string, value: T) => {
    if (k === key('B', '$create')) throw new Error('Quota exceeded');
    return write(k, value);
  };
  const failed = await loadReviseSessions(a, noLegacy);
  expect(failed.writable).toBe(false); expect(failed.value).toEqual(original);
  expect(db.items.get(REVISE_SESSIONS_KEY)).toEqual(original);
  a.setItem = write;
  const retried = await loadReviseSessions(a, noLegacy);
  expect(retried.writable).toBe(true); expect(retried.value).toEqual(original);
  expect(db.items.get(REVISE_SESSIONS_KEY)).toEqual([]);
});

test.each([{ value: {} }, { value: { ...session('Wrong'), id: 'Wrong' } }])('corrupt existing creation records never authorize releasing valid baseline history', async (corrupt) => {
  const db = sharedDatabase(), a = db.tab();
  const original = [session('A')];
  db.items.set(REVISE_SESSIONS_KEY, original);
  db.items.set(key('A', '$create'), corrupt);
  const loaded = await loadReviseSessions(a, noLegacy);
  expect(loaded.writable).toBe(false);
  expect(loaded.value).toEqual(original);
  expect(db.items.get(REVISE_SESSIONS_KEY)).toEqual(original);
  expect(db.items.get(key('A', '$create'))).toEqual(corrupt);
});
