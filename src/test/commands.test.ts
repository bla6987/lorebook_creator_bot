import { beforeEach, describe, expect, test, vi } from 'vitest';
import type { ExtendedWIEntry } from '../types.js';
import { readFileSync } from 'node:fs';
import ts from 'typescript';

const harness = vi.hoisted(() => ({
  settings: {} as any,
  worlds: {} as Record<string, ExtendedWIEntry[]>,
  suggestions: {} as Record<string, ExtendedWIEntry[]>,
  commands: [] as any[],
  lastParams: undefined as any,
  context: undefined as any,
  echo: vi.fn(),
  save: vi.fn(),
}));

function compileSource(file: string, dependencies: Record<string, unknown>) {
  const source = readFileSync(new URL(file, import.meta.url), 'utf8');
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports: Record<string, any> = {};
  new Function('require', 'exports', output)((name: string) => {
    if (!(name in dependencies)) throw new Error(`Unexpected import: ${name}`);
    return dependencies[name];
  }, exports);
  return exports;
}

const makeEntry = (uid = 1, comment = 'Original', content = 'Keep me'): ExtendedWIEntry => ({
  uid,
  key: ['key'],
  keysecondary: [],
  comment,
  content,
  disable: false,
});

async function initializeRun() {
  const config = {
    commonEnumProviders: { worlds: [] },
    selected_group: null,
    this_chid: 'character',
    st_echo: harness.echo,
    st_createWorldInfoEntry: (_name: string, data: any) => {
      const uid = Math.max(-1, ...Object.keys(data.entries).map(Number)) + 1;
      const entry = { uid, key: [], keysecondary: [], comment: '', content: '', disable: false };
      data.entries[uid] = entry;
      return entry;
    },
  };
  const utils = compileSource('../components/lorebookEditorUtils.ts', {});
  const generate = compileSource('../generate.ts', {
    './components/lorebookEditorUtils.js': utils,
    'sillytavern-utils-lib': {
      ExtensionSettingsManager: class {
        getSettings() {
          return { prompts: {} };
        }
      },
    },
    'sillytavern-utils-lib/config': config,
    './xml.js': {},
    './api-settings.js': {},
    handlebars: {},
  });
  const { initializeCommands } = compileSource('../commands.ts', {
    'sillytavern-utils-lib': { getWorldInfos: async () => structuredClone(harness.worlds) },
    'sillytavern-utils-lib/config': config,
    './generate.js': {
      ...generate,
      runWorldInfoRecommendation: async (params: any) => {
        harness.lastParams = params;
        return structuredClone(harness.suggestions);
      },
    },
    './settings.js': { settingsManager: { getSettings: () => harness.settings } },
    './world-info-save.js': { saveWorldInfoChecked: harness.save },
  });
  initializeCommands();
  const callback = harness.commands.find((command) => command.name === 'world-info-recommender-run').callback;
  return (args: Record<string, any> = {}) => callback({ profile: 'p', ...args }, 'Create entries');
}

beforeEach(() => {
  vi.resetModules();
  vi.clearAllMocks();
  harness.save.mockReset().mockResolvedValue(undefined);
  harness.worlds = { World: [makeEntry()] };
  harness.suggestions = {};
  harness.commands = [];
  harness.lastParams = undefined;
  harness.settings = {
    contextToSend: {
      stDescription: true,
      charCard: true,
      authorNote: true,
      worldInfo: true,
      suggestedEntries: true,
      messages: { type: 'all', range: { start: 2, end: 4 } },
    },
    prompts: { stDescription: { content: 'ST' }, currentLorebooks: { content: 'WI' } },
    mainContextTemplatePreset: 'Default',
    mainContextTemplatePresets: { Default: { prompts: [] } },
    maxContextType: 'active',
    maxResponseToken: 1000,
  };
  harness.context = {
    extensionSettings: { connectionManager: { profiles: [{ id: 'p', name: 'Profile' }] } },
    SlashCommandParser: { addCommandObject: (command: any) => harness.commands.push(command) },
    SlashCommand: { fromProps: (value: any) => value },
    SlashCommandNamedArgument: { fromProps: (value: any) => value },
    SlashCommandArgument: { fromProps: (value: any) => value },
    ARGUMENT_TYPE: { BOOLEAN: 'boolean', STRING: 'string', LIST: 'list', NUMBER: 'number' },
    loadWorldInfo: vi.fn(async (name: string) => ({
      entries: Object.fromEntries(harness.worlds[name].map((e) => [e.uid, structuredClone(e)])),
    })),
    reloadWorldInfoEditor: vi.fn(),
    chat: [{}, {}, {}, {}],
  };
  vi.stubGlobal('SillyTavern', { getContext: () => harness.context });
});

describe('slash command restrictions', () => {
  test('add-only rejects an existing UID even when its suggested title changes', async () => {
    harness.suggestions = { World: [makeEntry(1, 'Renamed', 'Forbidden overwrite')] };
    const run = await initializeRun();

    expect(await run({ 'allowed-ops': '[add]', 'editable-entries': 'World.999' })).toBe(true);
    expect(harness.save).not.toHaveBeenCalled();
    expect(harness.worlds.World[0].content).toBe('Keep me');
  });

  test('editable title cannot authorize a different original entry by renaming it', async () => {
    harness.suggestions = { World: [makeEntry(1, 'Allowed title', 'Forbidden overwrite')] };
    const run = await initializeRun();

    expect(await run({ 'editable-entries': 'World.Allowed title' })).toBe(true);
    expect(harness.save).not.toHaveBeenCalled();
  });

  test('the original editable title continues to authorize renamed updates', async () => {
    harness.suggestions = {
      World: [makeEntry(1, 'First rename', 'First revision'), makeEntry(1, 'Second rename', 'Second revision')],
    };
    const run = await initializeRun();

    expect(await run({ 'allowed-ops': '[update]', 'editable-entries': 'World.Original' })).toBe(true);
    const saved = harness.save.mock.calls[0][1];
    expect(saved.entries[1]).toMatchObject({ uid: 1, comment: 'Second rename', content: 'Second revision' });
  });

  test('editable UID zero is scoped to its world', async () => {
    harness.worlds = { World: [makeEntry(0)], Other: [makeEntry(0)] };
    harness.suggestions = {
      World: [makeEntry(0, 'Renamed', 'Allowed')],
      Other: [makeEntry(0, 'Renamed', 'Forbidden')],
    };
    const run = await initializeRun();

    expect(await run({ 'editable-entries': 'World.0' })).toBe(true);
    expect(harness.save).toHaveBeenCalledTimes(1);
    expect(harness.save.mock.calls[0][0]).toBe('World');
  });
});

describe('slash command context overrides', () => {
  test('accepts the documented camelCase names and mixed casing', async () => {
    const run = await initializeRun();
    expect(await run({ context: '[stDescription,charCard,authorNote,worldInfo,messages]' })).toBe(true);
    expect(harness.lastParams.buildPromptOptions).toMatchObject({
      ignoreCharacterFields: false,
      ignoreAuthorNote: false,
    });
    expect(harness.lastParams.promptSettings).toHaveProperty('stDescription');
    expect(harness.lastParams.promptSettings).toHaveProperty('currentLorebooks');
    expect(await run({ context: '[STDESCRIPTION,CHARCARD,AUTHORNOTE,WORLDINFO]' })).toBe(true);
    expect(harness.lastParams.buildPromptOptions).toMatchObject({
      ignoreCharacterFields: false,
      ignoreAuthorNote: false,
    });
    expect(harness.lastParams.promptSettings).toHaveProperty('currentLorebooks');
  });

  test('message and context overrides leave all global defaults unchanged between commands', async () => {
    const original = structuredClone(harness.settings);
    const run = await initializeRun();
    expect(await run({ messages: 'last:1' })).toBe(true);
    expect(harness.lastParams.buildPromptOptions.messageIndexesBetween).toEqual({ start: 3, end: 3 });
    expect(await run({ context: '[worldInfo]' })).toBe(true);
    expect(harness.lastParams.buildPromptOptions.messageIndexesBetween).toEqual({ start: -1, end: -1 });
    expect(await run({ messages: 'range:1-2' })).toBe(true);
    expect(harness.lastParams.buildPromptOptions.messageIndexesBetween).toEqual({ start: 1, end: 2 });
    expect(await run()).toBe(true);
    expect(harness.lastParams.buildPromptOptions.messageIndexesBetween).toBeUndefined();
    expect(harness.settings).toEqual(original);
  });

  test('an explicit messages override can enable messages from a none default or excluded context', async () => {
    harness.settings.contextToSend.messages.type = 'none';
    const original = structuredClone(harness.settings);
    const run = await initializeRun();
    expect(await run({ messages: 'all' })).toBe(true);
    expect(harness.lastParams.buildPromptOptions.messageIndexesBetween).toBeUndefined();
    expect(await run({ context: '[worldInfo]', messages: 'first:2' })).toBe(true);
    expect(harness.lastParams.buildPromptOptions.messageIndexesBetween).toEqual({ start: 0, end: 2 });
    expect(harness.settings).toEqual(original);
  });
});

describe('slash command persistence', () => {
  test('awaits checked persistence of every world before reporting success', async () => {
    harness.worlds = { World: [makeEntry()], Other: [makeEntry()] };
    harness.suggestions = { World: [makeEntry(1, 'Original', 'First')], Other: [makeEntry(1, 'Original', 'Second')] };
    let releaseFirst!: () => void;
    const firstWrite = new Promise<void>((resolve) => {
      releaseFirst = resolve;
    });
    harness.save.mockImplementationOnce(() => firstWrite);
    const run = await initializeRun();
    const result = run();
    await vi.waitFor(() => expect(harness.save).toHaveBeenCalledTimes(1));
    expect(harness.save.mock.calls[0][0]).toBe('World');
    expect(harness.context.reloadWorldInfoEditor).not.toHaveBeenCalled();
    expect(harness.echo.mock.calls.some(([level]) => level === 'success')).toBe(false);
    releaseFirst();
    expect(await result).toBe(true);
    expect(harness.save.mock.calls.map(([world]) => world)).toEqual(['World', 'Other']);
    expect(harness.save.mock.calls[0][1].entries[1].content).toBe('First');
    expect(harness.save.mock.calls[1][1].entries[1].content).toBe('Second');
    expect(harness.context.reloadWorldInfoEditor).toHaveBeenCalledTimes(2);
  });

  test('reports a failed checked save and does not reload or report success', async () => {
    harness.suggestions = { World: [makeEntry(1, 'Original', 'Unsaved')] };
    harness.save.mockRejectedValueOnce(new Error('HTTP 500'));
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
    const run = await initializeRun();
    try {
      expect(await run()).toBe(false);
      expect(harness.context.reloadWorldInfoEditor).not.toHaveBeenCalled();
      expect(harness.echo).toHaveBeenCalledWith('error', expect.stringContaining('HTTP 500'));
      expect(harness.echo.mock.calls.some(([level]) => level === 'success')).toBe(false);
    } finally {
      consoleError.mockRestore();
    }
  });
});
