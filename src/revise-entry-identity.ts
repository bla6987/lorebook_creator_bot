import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';

// UIDs are recycled by the host. This marker travels with the saved entry and
// survives ordinary edits/renames, but a newly created entry gets a fresh one.
export const getEntryRevisionId = (entry: WIEntry): string | undefined => {
  const id = (entry as WIEntry & { _wircRevisionId?: unknown })._wircRevisionId;
  return typeof id === 'string' && id.length > 0 ? id : undefined;
};

export const createRevisionId = (): string => {
  // getRandomValues also works on plain-HTTP LAN hosts where randomUUID and
  // Web Locks may be unavailable.
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

export const withEntryRevisionId = <T extends WIEntry>(entry: T, id = getEntryRevisionId(entry) ?? createRevisionId()): T & { _wircRevisionId: string } =>
  ({ ...entry, _wircRevisionId: id });
