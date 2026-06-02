import { describe, expect, test } from 'vitest';
import { shouldForkBranchBook, BranchForkDecisionInput } from '../components/lorebookEditorUtils.js';

const base: BranchForkDecisionInput = {
  enabled: true,
  boundBook: 'Lore',
  owner: 'parent-chat',
  isBranch: true,
  chatId: 'branch-chat',
  worldNames: ['Lore', 'Other'],
  requested: 'Lore',
};

const decide = (overrides: Partial<BranchForkDecisionInput>) => shouldForkBranchBook({ ...base, ...overrides });

describe('shouldForkBranchBook', () => {
  test('forks when a branch targets an inherited chat book', () => {
    expect(decide({})).toBe(true);
  });

  test('does not fork when the feature is disabled', () => {
    expect(decide({ enabled: false })).toBe(false);
  });

  test('does not fork in a non-branch (root) chat', () => {
    expect(decide({ isBranch: false })).toBe(false);
  });

  test('does not fork when there is no chat id', () => {
    expect(decide({ chatId: undefined })).toBe(false);
  });

  test('does not fork when no book is bound', () => {
    expect(decide({ boundBook: undefined })).toBe(false);
  });

  test('does not fork when the bound book no longer exists', () => {
    expect(decide({ worldNames: ['Other'] })).toBe(false);
  });

  test('does not fork when the branch already owns its book', () => {
    expect(decide({ owner: 'branch-chat' })).toBe(false);
  });

  test('respects an explicit, valid non-chat-book target', () => {
    expect(decide({ requested: 'Other' })).toBe(false);
  });

  test('still forks when the requested target is the bound book', () => {
    expect(decide({ requested: 'Lore' })).toBe(true);
  });

  test('forks when there is no explicit target (Apply All path)', () => {
    expect(decide({ requested: '' })).toBe(true);
  });

  test('forks an inherited user book with no owner marker', () => {
    expect(decide({ owner: undefined })).toBe(true);
  });

  test('ignores a stale explicit target that does not exist', () => {
    // A requested world that isn't a real book should not block forking.
    expect(decide({ requested: 'Ghost' })).toBe(true);
  });
});
