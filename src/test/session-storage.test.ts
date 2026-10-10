import { describe, expect, test } from 'vitest';
import { loadMainSession, saveMainSession, getMainSessionKey } from '../main-session-storage.js';
import { loadReviseSessions, saveReviseSessions, REVISE_SESSIONS_KEY } from '../revise-session-storage.js';
import type { SessionStorage } from '../session-storage.js';
import type { Session } from '../generate.js';
import type { ReviseSession } from '../revise-types.js';

class Database implements SessionStorage {
  items = new Map<string, unknown>();
  failRead = false;
  failWrite = false;
  async getItem<T>(key: string): Promise<T | null> {
    if (this.failRead) throw new Error('Read unavailable');
    return (structuredClone(this.items.get(key)) as T) ?? null;
  }
  async setItem<T>(key: string, value: T): Promise<T> {
    if (this.failWrite) throw new Error('Quota exceeded');
    this.items.set(key, structuredClone(value));
    return value;
  }
}
class Legacy {
  items = new Map<string, string>();
  getItem(key: string) { return this.items.get(key) ?? null; }
  removeItem(key: string) { this.items.delete(key); }
}
const mainSession = (): Session => ({
  suggestedEntries: { Book: [{ uid: 1, key: ['trigger'], keysecondary: ['other'], content: 'content', comment: 'name',
    disable: false, constant: true, vectorized: true, depth: 4, position: 4, role: 2, order: 99 }] },
  selectedWorldNames: ['Book'], selectedEntryUids: { Book: [1] }, blackListedEntries: ['ignored'], regexIds: {},
});
const revision = (): ReviseSession => ({ id: 'one', name: 'session', type: 'entry', createdAt: '2026-10-10',
  messages: [{ id: 'message', role: 'assistant', content: 'reply', stateSnapshot: mainSession().suggestedEntries.Book[0] }],
  context: { mainContextTemplatePreset: 'Custom' }, profileId: 'custom-profile', promptEngineeringMode: 'native',
  targetEntryIdentifier: 'Book::1::name', isReadonly: true });

describe('session migration', () => {
  for (const kind of ['main', 'revision'] as const) {
    const key = kind === 'main' ? getMainSessionKey('avatar') : REVISE_SESSIONS_KEY;
    const value = () => kind === 'main' ? mainSession() : [revision()];
    const load = (db: Database, legacy: Legacy) => kind === 'main' ? loadMainSession('avatar', db, legacy) : loadReviseSessions(db, legacy);
    test(`${kind}: migrates history with custom fields before deleting legacy copy`, async () => {
      const db = new Database(), legacy = new Legacy();
      legacy.items.set(key, JSON.stringify(value()));
      const result = await load(db, legacy);
      expect(result.value).toEqual(value());
      expect(result.migrated).toBe(true);
      expect(result.writable).toBe(true);
      expect(db.items.get(key)).toEqual(value());
      expect(legacy.getItem(key)).toBeNull();
    });
    test(`${kind}: quota failure returns history and retains original, then retries`, async () => {
      const db = new Database(), legacy = new Legacy();
      db.failWrite = true;
      const original = JSON.stringify(value());
      legacy.items.set(key, original);
      const result = await load(db, legacy);
      expect(result.value).toEqual(value());
      expect(result.migrated).toBe(false);
      expect(result.error).toBeTruthy();
      expect(legacy.getItem(key)).toBe(original);
      db.failWrite = false;
      expect((await load(db, legacy)).migrated).toBe(true);
    });
    test(`${kind}: failed reads cannot authorize overwriting unknown newer history`, async () => {
      const db = new Database(), legacy = new Legacy();
      legacy.items.set(key, JSON.stringify(value())); db.failRead = true;
      const result = await load(db, legacy);
      expect(result.value).toEqual(value()); expect(result.writable).toBe(false);
      expect(legacy.getItem(key)).not.toBeNull(); expect(db.items.size).toBe(0);
    });
    test(`${kind}: malformed legacy data is kept, not reset and autosaved`, async () => {
      const db = new Database(), legacy = new Legacy();
      for (const invalid of ['{broken', 'null', '123', kind === 'main' ? '{"selectedWorldNames":5}' : '[{}]']) {
        legacy.items.set(key, invalid);
        expect((await load(db, legacy)).writable).toBe(false);
        expect(legacy.getItem(key)).toBe(invalid); expect(db.items.size).toBe(0);
      }
    });
    test(`${kind}: existing IndexedDB value is authoritative`, async () => {
      const db = new Database(), legacy = new Legacy();
      db.items.set(key, value()); legacy.items.set(key, '{broken');
      const result = await load(db, legacy);
      expect(result.value).toEqual(value()); expect(result.writable).toBe(true);
      expect(result.migrated).toBe(false); expect(legacy.getItem(key)).toBe('{broken');
    });
  }

  test('legacy data changed during migration is not deleted', async () => {
    const db = new Database(), legacy = new Legacy();
    const key = getMainSessionKey('avatar'); legacy.items.set(key, JSON.stringify(mainSession()));
    const setItem = db.setItem.bind(db);
    db.setItem = async (k, v) => { legacy.items.set(key, 'changed-by-another-tab'); return setItem(k, v); };
    await loadMainSession('avatar', db, legacy);
    expect(legacy.getItem(key)).toBe('changed-by-another-tab');
  });

  test('serialized writes preserve latest state and snapshot the caller data', async () => {
    const db = new Database();
    let release!: () => void;
    const gate = new Promise<void>(resolve => { release = resolve; });
    let calls = 0;
    const setItem = db.setItem.bind(db);
    db.setItem = async (k, v) => { if (++calls === 1) await gate; return setItem(k, v); };
    const first = mainSession(), second = mainSession(); second.blackListedEntries = ['new'];
    const saves = [saveMainSession('avatar', first, db), saveMainSession('avatar', second, db)];
    second.blackListedEntries.push('mutation-after-save');
    await Promise.resolve(); await Promise.resolve(); expect(calls).toBe(1);
    release(); expect((await Promise.all(saves)).every(result => result.persisted)).toBe(true);
    expect((await loadMainSession('avatar', db, new Legacy())).value.blackListedEntries).toEqual(['new']);
  });

  test('a failed write does not poison the queue or change prior saved data', async () => {
    const db = new Database(); const prior = revision();
    await saveReviseSessions([prior], db); db.failWrite = true;
    expect((await saveReviseSessions([], db)).persisted).toBe(false);
    expect(db.items.get(REVISE_SESSIONS_KEY)).toEqual([prior]);
    db.failWrite = false; expect((await saveReviseSessions([], db)).persisted).toBe(true);
    expect((await loadReviseSessions(db, new Legacy())).value).toEqual([]);
  });
});
