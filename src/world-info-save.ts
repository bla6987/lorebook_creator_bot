// This runtime path is relative to dist/index.js in the installed extension.
// @ts-expect-error SillyTavern provides this module at runtime.
import { worldInfoCache } from '../../../../world-info.js';
import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';

type WorldInfoData = { entries: Record<number, WIEntry>; [key: string]: unknown };

/**
 * Use an immediate host save to flush its shared debounce, then verify the
 * server's copy directly. The host ignores failed HTTP statuses and its loader
 * returns optimistic cached data, so neither its promise nor cache proves that
 * the write succeeded. A read-back also lets us restore the cache on failure.
 */
export async function saveWorldInfoChecked(name: string, data: WorldInfoData): Promise<void> {
  if (!name.trim()) throw new Error('A lorebook name is required.');
  const snapshot = structuredClone(data);
  const expected = JSON.stringify(snapshot);
  const hadCached = worldInfoCache.has(name);
  const previous = hadCached ? structuredClone(worldInfoCache.get(name)) : undefined;
  // The installed utility package predates the host's eventTypes context field.
  const context = SillyTavern.getContext() as ReturnType<typeof SillyTavern.getContext> & {
    eventTypes: { WORLDINFO_UPDATED: string };
  };
  let writeError: unknown;
  try {
    await context.saveWorldInfo(name, snapshot, true);
  } catch (error) {
    // A listener can throw after a successful write. Verify before deciding
    // whether this was a persistence failure or only a notification failure.
    writeError = error;
  }

  let persisted: WorldInfoData | undefined;
  let missingWorld = false;
  try {
    const response = await fetch('/api/worldinfo/get', {
      method: 'POST',
      headers: context.getRequestHeaders(),
      body: JSON.stringify({ name }),
      cache: 'no-store',
    });
    if (!response.ok) throw new Error(`Verification failed (HTTP ${response.status}).`);
    persisted = await response.json();
    if (JSON.stringify(persisted) !== expected) {
      throw new Error('The server did not retain the submitted changes.');
    }
    // /get returns an empty dummy book for a missing file. Verify existence
    // separately when that dummy could otherwise count as a successful save.
    if (persisted && Object.keys(persisted.entries).length === 0) {
      const listing = await fetch('/api/worldinfo/list', {
        method: 'POST', headers: context.getRequestHeaders(), body: '{}', cache: 'no-store',
      });
      if (!listing.ok) throw new Error(`Existence verification failed (HTTP ${listing.status}).`);
      const worlds: { file_id: string }[] = await listing.json();
      if (!worlds.some((world) => world.file_id === name)) {
        missingWorld = true;
        throw new Error('The saved lorebook file does not exist.');
      }
    }
    // The host shares the object with listeners; cache a fresh verified value.
    worldInfoCache.set(name, structuredClone(persisted));
  } catch (error) {
    if (missingWorld) worldInfoCache.delete(name);
    else if (persisted) worldInfoCache.set(name, structuredClone(persisted));
    else if (hadCached) worldInfoCache.set(name, previous);
    else worldInfoCache.delete(name);
    try {
      await context.eventSource.emit(context.eventTypes.WORLDINFO_UPDATED, name,
        structuredClone(persisted ?? previous ?? { entries: {} }));
    } catch (listenerError) {
      console.warn(`Could not notify listeners about the restored lorebook "${name}":`, listenerError);
    }
    throw new Error(`Could not verify the save of lorebook "${name}": ${error instanceof Error ? error.message : String(error)}`);
  }
  if (writeError) console.warn(`Lorebook "${name}" was verified on disk despite a host save error:`, writeError);
}
