import { describe, expect, test } from 'vitest';
import { ExtendedWIEntry } from '../types.js';
import {
  NO_COMMENT_FIRST_WORD_KEY,
  buildFirstWordGrouping,
  extractDateFromContent,
  filterEntriesByFirstWord,
  getActivationMode,
  getActivationUpdates,
  getEntryFirstWord,
  getPositionLabel,
  normalizeExtendedEntry,
  sanitizeCategoryColor,
  sanitizeCategoryIcon,
  sanitizeCategoryName,
  sanitizeCategoryStorage,
  sortEntriesByDate,
  sortEntriesByName,
  sortEntriesByOrder,
  sortEntriesByUid,
} from '../components/lorebookEditorUtils.js';

const entry = (overrides: Partial<ExtendedWIEntry>): ExtendedWIEntry => ({
  uid: overrides.uid ?? 1,
  key: overrides.key ?? [],
  content: overrides.content ?? '',
  comment: overrides.comment ?? '',
  disable: overrides.disable ?? false,
  keysecondary: overrides.keysecondary ?? [],
  ...overrides,
});

describe('lorebook editor utilities', () => {
  test('sorts names naturally', () => {
    const sorted = sortEntriesByName([
      entry({ uid: 1, comment: 'Entry 10' }),
      entry({ uid: 2, comment: 'Entry 2' }),
      entry({ uid: 3, comment: 'Entry 1' }),
    ]);

    expect(sorted.map((item) => item.comment)).toEqual(['Entry 1', 'Entry 2', 'Entry 10']);
  });

  test('sorts by UID in both directions', () => {
    const entries = [entry({ uid: 20 }), entry({ uid: 3 }), entry({ uid: 11 })];

    expect(sortEntriesByUid(entries).map((item) => item.uid)).toEqual([3, 11, 20]);
    expect(sortEntriesByUid(entries, 'desc').map((item) => item.uid)).toEqual([20, 11, 3]);
  });

  test('sorts by position before order', () => {
    const sorted = sortEntriesByOrder([
      entry({ uid: 1, comment: 'unset' }),
      entry({ uid: 2, comment: 'second', position: 1, order: 20 }),
      entry({ uid: 3, comment: 'first', position: 0, order: 20 }),
      entry({ uid: 4, comment: 'first low order', position: 0, order: 5 }),
    ]);

    expect(sorted.map((item) => item.comment)).toEqual(['first low order', 'first', 'second', 'unset']);
  });

  test('extracts common date formats and sorts by date', () => {
    expect(extractDateFromContent('March 4, 2026')).toBe('2026-03-04');
    expect(extractDateFromContent('4 March 2026')).toBe('2026-03-04');
    expect(extractDateFromContent('2026-03-04')).toBe('2026-03-04');
    expect(extractDateFromContent('03/04/2026')).toBe('2026-03-04');
    expect(extractDateFromContent('2026-02-31')).toBeNull();

    const sorted = sortEntriesByDate([
      entry({ uid: 1, comment: 'Later 2026-05-01' }),
      entry({ uid: 2, comment: 'No date' }),
      entry({ uid: 3, content: 'January 2, 2024' }),
    ]);

    expect(sorted.map((item) => item.uid)).toEqual([3, 1, 2]);
  });

  test('groups and filters by first title word', () => {
    const entries = [
      entry({ uid: 1, comment: 'Castle - West' }),
      entry({ uid: 2, comment: 'Castle East' }),
      entry({ uid: 3, comment: 'Market Square' }),
      entry({ uid: 4, comment: '' }),
    ];

    expect(getEntryFirstWord(entries[0])).toEqual({ key: 'castle', label: 'Castle' });
    expect(getEntryFirstWord(entries[3]).key).toBe(NO_COMMENT_FIRST_WORD_KEY);
    expect(new Set(buildFirstWordGrouping(entries).map((item) => item.key))).toEqual(
      new Set(['castle', 'market', NO_COMMENT_FIRST_WORD_KEY]),
    );
    expect(filterEntriesByFirstWord(entries, 'castle').map((item) => item.uid)).toEqual([1, 2]);
  });

  test('normalizes role aliases and activation helpers', () => {
    expect(normalizeExtendedEntry(entry({ uid: 1, roleAtDepth: 2 })).role).toBe(2);
    expect(normalizeExtendedEntry(entry({ uid: 2, depth_role: 1 })).role).toBe(1);
    expect(getActivationMode({ constant: true, vectorized: false })).toBe('constant');
    expect(getActivationMode({ constant: true, vectorized: true })).toBe('vectorized');
    expect(getActivationUpdates('normal')).toEqual({ constant: false, vectorized: false });
    expect(getPositionLabel(4)).toBe('At depth');
    expect(getPositionLabel(undefined)).toBe('Unset');
  });

  test('sanitizes category metadata and storage', () => {
    expect(sanitizeCategoryName('  Places  ')).toBe('Places');
    expect(sanitizeCategoryName('  ')).toBeUndefined();
    expect(sanitizeCategoryIcon('  🏰 Castle ')).toBe('🏰C');
    expect(sanitizeCategoryColor('#ABC')).toBe('#abc');
    expect(sanitizeCategoryColor('red')).toBeUndefined();

    const sanitized = sanitizeCategoryStorage({
      World: {
        categories: [
          { id: 'places', name: ' Places ', icon: '🏰', color: '#AABBCC' },
          { id: '', name: 'Invalid' },
        ],
        entryAssignments: { '10': 'places', nope: 'places', '11': 'missing' },
      },
    });

    expect(sanitized).toEqual({
      World: {
        categories: [{ id: 'places', name: 'Places', icon: '🏰', color: '#aabbcc' }],
        entryAssignments: { '10': 'places' },
      },
    });
  });
});
