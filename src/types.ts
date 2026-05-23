import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';

export interface ExtendedWIEntry extends WIEntry {
  constant?: boolean;
  vectorized?: boolean;
  order?: number;
  position?: number;
  depth?: number | null;
  role?: number | null;
  roleAtDepth?: number | null;
  depth_role?: number | null;
}

export interface SaveEntryPayload {
  entry: ExtendedWIEntry;
  originalUid: number;
}
