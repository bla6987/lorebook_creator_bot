import { expect, test } from 'vitest';
import { getEntryKeys, normalizeExtendedEntry } from '../components/lorebookEditorUtils.js';
import { getFullXML, getPrefilledXML } from '../xml.js';
import { getFull, getPrefilled } from '../parsers.js';
import type { ExtendedWIEntry } from '../types.js';

test('missing trigger lists render in all XML prompt paths without losing custom fields', () => {
  const entry = { uid: 7, content: 'text', comment: 'name', key: undefined,
    constant: true, vectorized: true, order: 12, position: 4, depth: 8, role: 2 } as unknown as ExtendedWIEntry;
  const before = structuredClone(entry);
  expect(getEntryKeys(entry)).toEqual([]);
  for (const output of [getFullXML('Book', entry), getPrefilledXML('Book', entry),
    getFull('Book', entry, 'xml'), getPrefilled('Book', entry, 'xml')]) {
    expect(output).toContain('<triggers></triggers>');
  }
  expect(getFullXML('Book', entry)).toContain('<depth>8</depth>');
  expect(entry).toEqual(before);
  const normalized = normalizeExtendedEntry(entry);
  expect(normalized).toMatchObject({ key: [], constant: true, vectorized: true, order: 12, position: 4, depth: 8, role: 2 });
});

test('normalization keeps explicit empty trigger lists and clones nested custom data', () => {
  const entry = { uid: 1, key: [], keysecondary: ['secondary'], content: 'text', comment: 'name', disable: false,
    roleAtDepth: 2, extra: { kept: true } } as ExtendedWIEntry & { extra: { kept: boolean } };
  const result = normalizeExtendedEntry(entry) as typeof entry;
  result.keysecondary.push('new'); result.extra.kept = false;
  expect(entry.keysecondary).toEqual(['secondary']); expect(entry.extra.kept).toBe(true);
  expect(result.role).toBe(2); expect(result.key).toEqual([]);
});
