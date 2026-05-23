import { beforeEach, describe, expect, test, vi } from 'vitest';
import { ExtendedWIEntry } from '../types.js';

vi.mock('sillytavern-utils-lib', () => ({
  buildPrompt: vi.fn(async () => ({ result: [] })),
  ExtensionSettingsManager: class {
    getSettings() {
      return { prompts: {} };
    }
  },
}));

vi.mock('sillytavern-utils-lib/config', () => ({
  st_createWorldInfoEntry: vi.fn(),
}));

vi.mock('../api-settings.js', () => ({
  getRuntimeConnectionProfile: vi.fn(() => ({
    id: 'profile-1',
    name: 'Draft Profile',
    api: 'chat-completion',
    preset: 'draft-preset',
    context: 'draft-context',
    instruct: 'draft-instruct',
    sysprompt: 'draft-system',
  })),
  withRuntimeConnectionProfile: vi.fn(),
}));

const makeEntry = (overrides: Partial<ExtendedWIEntry>): ExtendedWIEntry => ({
  uid: overrides.uid ?? 1,
  key: overrides.key ?? [],
  keysecondary: [],
  content: overrides.content ?? '',
  comment: overrides.comment ?? '',
  disable: overrides.disable ?? false,
  ...overrides,
});

const makeContext = () => ({
  CONNECT_API_MAP: {
    'chat-completion': { selected: 'openai' },
  },
  substituteParams: vi.fn((value: string) => value.replaceAll('{{user}}', 'User')),
  ConnectionManagerRequestService: {
    sendRequest: vi.fn(),
  },
});

describe('buildRecommendationMessages', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.stubGlobal('SillyTavern', { getContext: makeContext });
  });

  test('builds templated messages without sending a request', async () => {
    const { buildRecommendationMessages, globalContext } = await import('../generate.js');
    const messages = await buildRecommendationMessages({
      profileId: 'profile-1',
      userPrompt: 'Create {{user}} locations',
      buildPromptOptions: {},
      entriesGroupByWorldName: {
        Earth: [
          makeEntry({ uid: 1, comment: 'Keep', key: ['keep'] }),
          makeEntry({ uid: 2, comment: 'Skip Disabled', disable: true }),
          makeEntry({ uid: 3, comment: 'Skip Unselected' }),
        ],
      },
      session: {
        selectedWorldNames: ['Earth'],
        selectedEntryUids: { Earth: [1] },
        blackListedEntries: ['Earth (Old)'],
        suggestedEntries: {
          Earth: [makeEntry({ uid: 4, comment: 'Suggested' })],
        },
        regexIds: {},
      },
      promptSettings: {
        preview: {
          content:
            'Task: {{userInstructions}}\nCurrent: {{#each currentLorebooks}}{{@key}}/{{#each this}}{{comment}};{{/each}}{{/each}}\nSuggested: {{#each suggestedLorebooks}}{{@key}}/{{#each this}}{{comment}};{{/each}}{{/each}}\nBlacklist: {{#each blackListedEntries}}{{this}};{{/each}}',
        },
      } as any,
      mainContextList: [{ promptName: 'preview', role: 'system' }],
    });

    expect(messages).toHaveLength(1);
    expect(messages[0]).toEqual({
      role: 'system',
      content:
        'Task: Create User locations\nCurrent: Earth/Keep;\nSuggested: Earth/Suggested;\nBlacklist: Earth (Old);',
    });
    expect(globalContext.ConnectionManagerRequestService.sendRequest).not.toHaveBeenCalled();
  });

  test('adds continue assistant XML with optional fields', async () => {
    const { buildRecommendationMessages } = await import('../generate.js');
    const entry = makeEntry({
      uid: 8,
      comment: 'Depth Entry',
      key: ['depth'],
      content: 'Existing',
      constant: true,
      vectorized: false,
      order: 9,
      position: 4,
      depth: 2,
      role: 1,
    });

    const messages = await buildRecommendationMessages({
      profileId: 'profile-1',
      userPrompt: 'continue it',
      buildPromptOptions: {},
      entriesGroupByWorldName: { Earth: [entry] },
      session: {
        selectedWorldNames: ['Earth'],
        selectedEntryUids: {},
        blackListedEntries: [],
        suggestedEntries: {},
        regexIds: {},
      },
      promptSettings: {} as any,
      mainContextList: [],
      continueFrom: { worldName: 'Earth', entry, mode: 'continue' },
    });

    expect(messages).toHaveLength(1);
    expect(messages[0].role).toBe('assistant');
    expect(messages[0].content).toContain('<constant>true</constant>');
    expect(messages[0].content).toContain('<position>4</position>');
    expect(messages[0].content).toContain('<role>1</role>');
    expect(messages[0].content).toContain('<content>Existing');
  });
});
