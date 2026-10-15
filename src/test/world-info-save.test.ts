import { beforeAll, beforeEach, afterEach, expect, test, vi } from 'vitest';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const cache = new Map<string, any>();
const disk = new Map<string, any>();
const fetchMock = vi.fn(), emit = vi.fn(), hostSave = vi.fn();
let save: typeof import('../world-info-save.js').saveWorldInfoChecked;
let pendingNativeSave: ReturnType<typeof setTimeout> | undefined;

beforeAll(() => {
  const compiled = ts.transpileModule(readFileSync('src/world-info-save.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports: Record<string, any> = {};
  new Function('require', 'exports', compiled)((name: string) => {
    if (name !== '../../../../world-info.js') throw new Error(`Unexpected host import: ${name}`);
    return { worldInfoCache: cache };
  }, exports);
  save = exports.saveWorldInfoChecked;
});

beforeEach(() => {
  cache.clear(); disk.clear();
  pendingNativeSave = undefined;
  fetchMock.mockReset().mockImplementation(async (url: string, options: RequestInit) => {
    if (url === '/api/worldinfo/list') {
      return { ok: true, json: async () => [...disk.keys()].map(file_id => ({ file_id })) };
    }
    const { name } = JSON.parse(String(options.body));
    if (url !== '/api/worldinfo/get') throw new Error('Unexpected endpoint');
    return { ok: true, status: 200, json: async () => structuredClone(disk.get(name) ?? { entries: {} }) };
  });
  emit.mockReset().mockResolvedValue(undefined);
  // Model the owning host contract: optimistic cache, one shared debounce,
  // immediate writes cancel it, and a rejected HTTP response can resolve.
  hostSave.mockReset().mockImplementation(async (name: string, data: any, immediately: boolean) => {
    cache.set(name, data);
    const write = async () => { disk.set(name, structuredClone(data)); await emit('world-updated', name, data); };
    if (immediately) { clearTimeout(pendingNativeSave); await write(); }
    else { clearTimeout(pendingNativeSave); pendingNativeSave = setTimeout(() => { void write(); }, 100); }
  });
  vi.stubGlobal('fetch', fetchMock);
  vi.stubGlobal('SillyTavern', { getContext: () => ({
    saveWorldInfo: hostSave,
    getRequestHeaders: () => ({ 'Content-Type': 'application/json', 'X-CSRF-Token': 'test-token' }),
    eventSource: { emit }, eventTypes: { WORLDINFO_UPDATED: 'world-updated' },
  }) });
});
afterEach(() => {
  clearTimeout(pendingNativeSave); vi.useRealTimers(); vi.unstubAllGlobals(); vi.restoreAllMocks();
});
const data = (content: string) => ({ entries: { 0: { uid: 0, content, comment: 'Entry', key: [], keysecondary: [], disable: false } } });

test('immediate saves persist every world and verification bypasses optimistic cache', async () => {
  await save('A', data('A')); await save('B', data('B'));
  expect(hostSave.mock.calls.map(([name, , immediately]) => [name, immediately])).toEqual([['A', true], ['B', true]]);
  expect(disk.get('A')).toEqual(data('A')); expect(disk.get('B')).toEqual(data('B'));
  expect(fetchMock.mock.calls.map(([, options]) => JSON.parse(options.body).name)).toEqual(['A', 'B']);
  expect(fetchMock.mock.calls[0][1]).toMatchObject({ cache: 'no-store', headers: { 'X-CSRF-Token': 'test-token' } });
});

test('an already scheduled native save cannot overwrite the verified write afterward', async () => {
  vi.useFakeTimers();
  await hostSave('A', data('old'), false);
  await save('A', data('new'));
  await vi.advanceTimersByTimeAsync(200);
  expect(disk.get('A')).toEqual(data('new'));
  expect(cache.get('A')).toEqual(data('new'));
});

test('a host save that ignores an HTTP error is detected and its cache is restored', async () => {
  const original = data('original'); cache.set('A', original); disk.set('A', original);
  hostSave.mockImplementationOnce(async (name, value) => { cache.set(name, value); await emit('world-updated', name, value); });
  await expect(save('A', data('edited'))).rejects.toThrow('server did not retain');
  expect(cache.get('A')).toEqual(original);
  expect(emit).toHaveBeenLastCalledWith('world-updated', 'A', original);
  await save('A', data('edited'));
  expect(cache.get('A')).toEqual(data('edited'));
});

test.each([403, 500])('HTTP %i from verification preserves the previous cache for retry', async status => {
  const original = data('original'); cache.set('A', original);
  fetchMock.mockResolvedValueOnce({ ok: false, status });
  await expect(save('A', data('edited'))).rejects.toThrow(`HTTP ${status}`);
  expect(cache.get('A')).toEqual(original);
});

test('network failures remove an unverified new cache entry', async () => {
  hostSave.mockImplementationOnce(async (name, value) => { cache.set(name, value); throw new Error('offline'); });
  fetchMock.mockRejectedValueOnce(new Error('offline'));
  await expect(save('A', data('edited'))).rejects.toThrow('offline');
  expect(cache.has('A')).toBe(false);
});

test('the operation stays pending until server verification completes', async () => {
  let finish!: (value: any) => void;
  fetchMock.mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
  let done = false;
  const pending = save('A', data('edited')).then(() => { done = true; });
  await vi.waitFor(() => expect(fetchMock).toHaveBeenCalled());
  expect(done).toBe(false);
  finish({ ok: true, json: async () => data('edited') });
  await pending; expect(done).toBe(true);
});

test('caller or observer mutation cannot change the verified cached snapshot', async () => {
  const value = data('saved');
  emit.mockImplementation(async (_event, _name, eventData) => { eventData.entries[0].content = 'observer'; });
  await save('A', value); value.entries[0].content = 'caller';
  expect(cache.get('A')).toEqual(data('saved'));
  expect(disk.get('A')).toEqual(data('saved'));
});

test('an observer failure does not report a verified disk write as failed', async () => {
  emit.mockRejectedValueOnce(new Error('listener failed'));
  vi.spyOn(console, 'warn').mockImplementation(() => {});
  await expect(save('A', data('saved'))).resolves.toBeUndefined();
  expect(cache.get('A')).toEqual(data('saved'));
  expect(hostSave).toHaveBeenCalledTimes(1);
});

test('an empty dummy returned for a failed new-world creation is not treated as a saved file', async () => {
  hostSave.mockImplementationOnce(async (name, value) => { cache.set(name, value); });
  await expect(save('New', { entries: {} })).rejects.toThrow('file does not exist');
  expect(cache.has('New')).toBe(false);
  expect(disk.has('New')).toBe(false);
});

test('an empty world is successful when its file exists on the server', async () => {
  await expect(save('New', { entries: {} })).resolves.toBeUndefined();
  expect(disk.has('New')).toBe(true);
  expect(cache.get('New')).toEqual({ entries: {} });
});
