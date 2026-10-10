// Adapted from upstream's IndexedDB session migration. Keep the legacy copy on
// every failure and serialize writes so a slow save cannot replace a newer one.
export interface SessionStorage {
  getItem<T>(key: string): Promise<T | null>;
  setItem<T>(key: string, value: T): Promise<T>;
}
export type LegacyStorage = Pick<Storage, 'getItem' | 'removeItem'>;
export interface LoadResult<T> {
  value: T;
  migrated: boolean;
  writable: boolean;
  error?: unknown;
}
export interface SaveResult { persisted: boolean; error?: unknown }

const queues = new WeakMap<SessionStorage, Map<string, Promise<unknown>>>();
const getStorage = () => SillyTavern.libs.localforage as SessionStorage;

function ordered<T>(storage: SessionStorage, key: string, action: () => Promise<T>): Promise<T> {
  let queue = queues.get(storage);
  if (!queue) { queue = new Map(); queues.set(storage, queue); }
  const pending = (queue.get(key) ?? Promise.resolve()).catch(() => {}).then(action);
  queue.set(key, pending);
  void pending.finally(() => { if (queue!.get(key) === pending) queue!.delete(key); }).catch(() => {});
  return pending;
}

export async function loadSession<T>(
  key: string, empty: T, validate: (value: unknown) => T,
  storage?: SessionStorage, legacy?: LegacyStorage,
): Promise<LoadResult<T>> {
  let legacyRaw: string | null = null;
  let legacyValue = empty;
  let legacyError: unknown;
  try {
    legacy ??= localStorage;
    legacyRaw = legacy.getItem(key);
    if (legacyRaw !== null) legacyValue = validate(JSON.parse(legacyRaw));
  } catch (error) { legacyError = error; }

  try {
    storage ??= getStorage();
    return await ordered(storage, key, async () => {
      // Do not treat a read failure as an empty database: it could contain newer data.
      const stored = await storage!.getItem<unknown>(key);
      if (stored !== null) return { value: validate(stored), migrated: false, writable: true };
      if (legacyError) return { value: empty, migrated: false, writable: false, error: legacyError };
      if (legacyRaw === null) return { value: empty, migrated: false, writable: true };
      try {
        await storage!.setItem(key, legacyValue);
        // Never delete a legacy copy changed by another tab while the write ran.
        if (legacy!.getItem(key) === legacyRaw) legacy!.removeItem(key);
        return { value: legacyValue, migrated: true, writable: true };
      } catch (error) {
        // In particular, a quota failure must still load the user's session.
        return { value: legacyValue, migrated: false, writable: true, error };
      }
    });
  } catch (error) {
    // Preserve readable legacy data for display, but block writes until a reopen
    // can establish which stored copy is authoritative.
    return { value: legacyError ? empty : legacyValue, migrated: false, writable: false, error };
  }
}

export async function saveSession<T>(
  key: string, value: T, storage?: SessionStorage,
): Promise<SaveResult> {
  try {
    storage ??= getStorage();
    const snapshot = structuredClone(value);
    await ordered(storage, key, () => storage!.setItem(key, snapshot));
    // Only migration removes legacy records. A failed migration retains a backup.
    return { persisted: true };
  } catch (error) { return { persisted: false, error }; }
}
