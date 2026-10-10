import type { ReviseSession } from './revise-types.js';
import { loadSession, saveSession, type SessionStorage, type LegacyStorage } from './session-storage.js';

export const REVISE_SESSIONS_KEY = 'worldInfoRecommender_reviseSessions';
function validateSessions(value: unknown): ReviseSession[] {
  if (!Array.isArray(value)) throw new Error('Invalid saved revision sessions');
  for (const session of value) {
    if (!session || typeof session.id !== 'string' || typeof session.name !== 'string'
      || !['entry', 'global'].includes(session.type) || typeof session.createdAt !== 'string'
      || !Array.isArray(session.messages) || session.messages.some((message: any) =>
        !message || typeof message.id !== 'string' || typeof message.role !== 'string')) {
      throw new Error('Invalid saved revision session; the original data has been retained');
    }
  }
  // Retain snapshots, custom profile settings and extended lorebook fields verbatim.
  return value as ReviseSession[];
}
export const loadReviseSessions = (storage?: SessionStorage, legacy?: LegacyStorage) =>
  loadSession(REVISE_SESSIONS_KEY, [] as ReviseSession[], validateSessions, storage, legacy);
export const saveReviseSessions = (sessions: ReviseSession[], storage?: SessionStorage) =>
  saveSession(REVISE_SESSIONS_KEY, sessions, storage);
