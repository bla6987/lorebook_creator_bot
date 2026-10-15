import type { Session } from './generate.js';
import { normalizeEntriesByWorld } from './components/lorebookEditorUtils.js';
import { loadSession, saveSession, type SessionStorage, type LegacyStorage } from './session-storage.js';

export const getMainSessionKey = (avatarKey: string) => `worldInfoRecommend_${avatarKey}`;

function validateSession(value: unknown): Partial<Session> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid saved session');
  const session = value as Partial<Session>;
  for (const key of ['suggestedEntries', 'selectedEntryUids', 'regexIds', 'suggestionTargetWorlds', 'implicitChatTargets'] as const) {
    if (session[key] !== undefined && (!session[key] || typeof session[key] !== 'object' || Array.isArray(session[key]))) {
      throw new Error(`Invalid saved session field: ${key}`);
    }
  }
  for (const key of ['blackListedEntries', 'selectedWorldNames', 'explicitOtherTargets'] as const) {
    if (session[key] !== undefined && (!Array.isArray(session[key]) || !session[key]!.every(item => typeof item === 'string'))) {
      throw new Error(`Invalid saved session field: ${key}`);
    }
  }
  for (const key of ['suggestionTargetWorlds', 'implicitChatTargets'] as const) {
    if (!Object.values(session[key] ?? {}).every((target) => typeof target === 'string')) {
      throw new Error(`Invalid saved target mapping: ${key}`);
    }
  }
  for (const ids of Object.values(session.selectedEntryUids ?? {})) {
    if (!Array.isArray(ids) || !ids.every(Number.isInteger)) throw new Error('Invalid saved entry selection');
  }
  return { ...session, suggestedEntries: normalizeEntriesByWorld(session.suggestedEntries ?? {}) };
}

export const loadMainSession = (key: string, storage?: SessionStorage, legacy?: LegacyStorage) =>
  loadSession(getMainSessionKey(key), {} as Partial<Session>, validateSession, storage, legacy);
export const saveMainSession = (key: string, session: Session, storage?: SessionStorage) =>
  saveSession(getMainSessionKey(key), session, storage);
