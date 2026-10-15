import { describe, expect, test } from 'vitest';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { getMessageIndexes, parseMessageRangeArgument } from '../message-ranges.js';

// Execute the selection expression from the installed dependency rather than
// recreating its inclusive-index and zero-end behavior in the test.
const dependencyDirectory = dirname(createRequire(import.meta.url).resolve('sillytavern-utils-lib'));
const builderSource = readFileSync(join(dependencyDirectory, 'prompt-builder.js'), 'utf8');
const selectionSource = builderSource.match(/tt = \(C[\s\S]*?let k = [\s\S]*?\.filter/)?.[0];
if (!selectionSource) throw new Error('Installed prompt builder selection changed; update the integration harness.');
const selectInstalled = new Function('C', 'n',
  `const ${selectionSource.replace(/\s*let k =/, ' let k =').replace(/\.filter$/, '')}; return k;`,
) as (range: ReturnType<typeof getMessageIndexes>, context: { chat: number[] }) => number[];

describe('message selections with the installed prompt builder', () => {
  test.each([
    ['all', 5, [0, 1, 2, 3, 4]],
    ['none', 5, []],
    ['first:0', 5, []],
    ['last:0', 5, []],
    ['first:1', 5, [0]],
    ['first:2', 5, [0, 1]],
    ['first:10', 5, [0, 1, 2, 3, 4]],
    ['last:2', 5, [3, 4]],
    ['last:10', 5, [0, 1, 2, 3, 4]],
    ['range:0-0', 5, [0]],
    ['range:1-2', 5, [1, 2]],
    ['range:4-9', 5, [4]],
    ['range:6-9', 5, []],
    ['first:1', 1, [0]],
    ['last:1', 1, [0]],
    ['range:0-0', 1, [0]],
    ['first:1', 0, []],
    ['last:1', 0, []],
    ['range:0-0', 0, []],
  ])('%s selects exactly the requested messages from a chat of length %i', (argument, length, expected) => {
    const chat = Array.from({ length }, (_, index) => index);
    expect(selectInstalled(getMessageIndexes(parseMessageRangeArgument(argument), length), { chat })).toEqual(expected);
  });

  test.each(['first:-1', 'last:1.5', 'first:2x', 'range:3-1', 'range:-1-2', 'range:1-', 'range:0-9007199254740992']) (
    'rejects invalid command bounds: %s', (argument) => {
      expect(() => parseMessageRangeArgument(argument)).toThrow();
    },
  );

  test('validates stored UI bounds as well as command arguments', () => {
    for (const selection of [
      { type: 'first', first: -1 }, { type: 'last', last: NaN },
      { type: 'range', range: { start: 2, end: 1 } },
      { type: 'range', range: { start: 0, end: 1.5 } }, { type: 'range' },
    ] as const) {
      expect(() => getMessageIndexes(selection, 5)).toThrow();
    }
  });
});
