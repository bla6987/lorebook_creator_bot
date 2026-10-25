import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import type { ReviseMessage, ReviseSessionType, ReviseState } from './revise-types.js';

type Worlds = Record<string, WIEntry[]>;

/** Indexes refer to entries in the previous state, never the mutable live book. */
export interface RevisionStateDelta {
  version: 1;
  baseMessageId: string;
  worlds: Record<string, Array<number | WIEntry> | null>;
}

export const REVISION_CHECKPOINT_INTERVAL = 12;

/** Compare JSON-like entry data without allocating a serialization of a book. */
export function sameRevisionValue(a: unknown, b: unknown): boolean {
  if (Object.is(a, b)) return true;
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;
  const ak = Object.keys(a), bk = Object.keys(b);
  if (ak.length !== bk.length) return false;
  return ak.every(key => Object.hasOwn(b, key)
    && sameRevisionValue((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key]));
}

export function hasRevisionState(message: ReviseMessage): boolean {
  return message.stateSnapshot !== undefined || message.stateDelta !== undefined;
}

function applyDelta(previous: Worlds, delta: RevisionStateDelta, previousId: string): Worlds {
  if (delta.version !== 1 || delta.baseMessageId !== previousId || !delta.worlds
    || typeof delta.worlds !== 'object' || Array.isArray(delta.worlds)) {
    throw new Error('Invalid revision checkpoint chain; the saved history has been retained.');
  }
  const next = { ...previous };
  for (const [world, refs] of Object.entries(delta.worlds)) {
    if (refs === null) { delete next[world]; continue; }
    if (!Array.isArray(refs)) throw new Error('Invalid revision entry references.');
    const old = Object.hasOwn(previous, world) ? previous[world] : [];
    const entries = refs.map(ref => {
      if (typeof ref === 'number') {
        if (!Number.isInteger(ref) || ref < 0 || ref >= old.length) throw new Error('Missing revision entry.');
        return old[ref];
      }
      if (!ref || typeof ref !== 'object' || Array.isArray(ref)) throw new Error('Invalid revision entry.');
      return ref;
    });
    Object.defineProperty(next, world, { value: entries, writable: true, enumerable: true, configurable: true });
  }
  return next;
}

/** Reconstruct only the requested state, starting at its nearest checkpoint. */
export function getRevisionState(
  messages: readonly ReviseMessage[], initial: ReviseState, end = messages.length,
): ReviseState {
  let start = Math.min(end, messages.length) - 1;
  while (start >= 0 && messages[start].stateSnapshot === undefined) start--;
  let state = start >= 0 ? messages[start].stateSnapshot! : initial;
  let stateId = start >= 0 ? messages[start].id : '';
  for (let i = start + 1; i < Math.min(end, messages.length); i++) {
    const message = messages[i];
    if (message.stateDelta) {
      if (!stateId) throw new Error('Revision history is missing its checkpoint.');
      state = applyDelta(state as Worlds, message.stateDelta, stateId);
      stateId = message.id;
    }
  }
  return state;
}

function makeDelta(previous: Worlds, next: Worlds, baseMessageId: string): RevisionStateDelta {
  const changed: RevisionStateDelta['worlds'] = Object.create(null);
  for (const world of Object.keys(previous)) {
    if (!Object.hasOwn(next, world)) changed[world] = null;
  }
  for (const [world, entries] of Object.entries(next)) {
    const old = Object.hasOwn(previous, world) ? previous[world] : [];
    if (entries === old || sameRevisionValue(entries, old) && Object.hasOwn(previous, world)) continue;
    const byUid = new Map<number, number[]>();
    old.forEach((entry, index) => {
      const indexes = byUid.get(entry.uid) ?? [];
      indexes.push(index); byUid.set(entry.uid, indexes);
    });
    changed[world] = entries.map(entry => {
      const index = (byUid.get(entry.uid) ?? []).find(i => sameRevisionValue(entry, old[i]));
      return index === undefined ? entry : index;
    });
  }
  return { version: 1, baseMessageId, worlds: changed };
}

export function revisionStateFields(
  messages: readonly ReviseMessage[], state: ReviseState, type: ReviseSessionType,
): Pick<ReviseMessage, 'stateSnapshot' | 'stateDelta'> {
  if (type !== 'global') return { stateSnapshot: state };
  let last = -1, sinceCheckpoint = 0;
  for (let i = messages.length - 1; i >= 0; i--) {
    if (!hasRevisionState(messages[i])) continue;
    if (last < 0) last = i;
    if (messages[i].stateSnapshot !== undefined) break;
    sinceCheckpoint++;
  }
  if (last < 0 || sinceCheckpoint >= REVISION_CHECKPOINT_INTERVAL - 1) return { stateSnapshot: state };
  return { stateDelta: makeDelta(getRevisionState(messages, state) as Worlds, state as Worlds, messages[last].id) };
}

/** Legacy full snapshots stay on disk until the next successful save. */
export function compactRevisionMessages(messages: ReviseMessage[], type: ReviseSessionType): ReviseMessage[] {
  if (type !== 'global') return messages;
  const compact: ReviseMessage[] = [];
  let state: ReviseState = {}, stateId = '', sinceCheckpoint = 0;
  for (const message of messages) {
    if (!hasRevisionState(message)) { compact.push(message); continue; }
    if (message.stateSnapshot === undefined && !stateId) throw new Error('Revision history is missing its checkpoint.');
    const next: ReviseState = message.stateSnapshot !== undefined ? message.stateSnapshot
      : applyDelta(state as Worlds, message.stateDelta!, stateId);
    const { stateSnapshot: _snapshot, stateDelta: _delta, ...rest } = message;
    const fields = !stateId || sinceCheckpoint >= REVISION_CHECKPOINT_INTERVAL - 1
      ? { stateSnapshot: next }
      : { stateDelta: makeDelta(state as Worlds, next as Worlds, stateId) };
    compact.push({ ...rest, ...fields });
    sinceCheckpoint = 'stateSnapshot' in fields ? 0 : sinceCheckpoint + 1;
    state = next; stateId = message.id;
  }
  return compact;
}
