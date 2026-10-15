import { afterEach, beforeAll, beforeEach, expect, test, vi } from 'vitest';
import * as React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import { act, createElement, type ComponentType } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import * as Handlebars from 'handlebars';
import showdown from 'showdown';
import * as utils from '../components/lorebookEditorUtils.js';
import * as htmlUtils from '../html-utils.js';
import type { ExtendedWIEntry } from '../types.js';

const entry = (uid: number, comment: string): ExtendedWIEntry => ({
  uid,
  comment,
  content: comment,
  key: [],
  keysecondary: [],
  disable: false,
});
const seedEntries = () => ({ A: [entry(0, 'A zero'), entry(1, 'A one')], B: [entry(0, 'B zero'), entry(1, 'B one')] });
const captures: Record<string, any> = {};
const state = { session: {} as any, entries: seedEntries(), metadata: {} as any, chatId: 'chat', branch: false };
const saveWorld = vi.fn(),
  echo = vi.fn(),
  confirm = vi.fn(),
  sanitize = vi.fn(),
  loadWorld = vi.fn();
const host = {
  characters: [],
  chat: [],
  Popup: { show: { confirm } },
  loadWorldInfo: loadWorld,
  reloadWorldInfoEditor: vi.fn(),
  getCurrentChatId: () => state.chatId,
  get chatMetadata() {
    return state.metadata;
  },
  updateChatMetadata: vi.fn(),
  saveMetadata: vi.fn(),
  updateWorldInfoList: vi.fn(),
};
const noop = () => null;
const ui = {
  STButton: ({ children, ...props }: any) => createElement('button', props, children),
  STTextarea: (props: any) => createElement('textarea', props),
  Popup: ({ content }: any) => content,
  STConnectionProfileSelect: noop,
  STFancyDropdown: noop,
  STPresetSelect: noop,
};
const config = {
  st_echo: echo,
  selected_group: null,
  this_chid: 'avatar',
  groups: [],
  world_names: ['A', 'B'],
  WI_METADATA_KEY: 'world_info',
  st_getCharaFilename: () => 'avatar',
  st_createNewWorldInfo: vi.fn(),
  st_createWorldInfoEntry: (_name: string, data: any) =>
    entry(Math.max(-1, ...Object.values(data.entries).map((e: any) => e.uid)) + 1, ''),
};
const settings = {
  profileId: '',
  promptPreset: 'Default',
  promptPresets: { Default: { content: '' } },
  contextToSend: { messages: { type: 'none' }, worldInfo: true },
  prompts: {},
  mainContextTemplatePresets: {},
  maxContextType: 'active',
  mainContextTemplatePreset: '',
  get branchLorebooks() {
    return state.branch;
  },
};
function compile(file: string, modules: Record<string, unknown>) {
  const source = readFileSync(file, 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const exports: Record<string, any> = {};
  const dependencies: Record<string, unknown> = {
    react: React,
    'react/jsx-runtime': jsxRuntime,
    'sillytavern-utils-lib/components/react': ui,
    'sillytavern-utils-lib/config': config,
    'sillytavern-utils-lib/types/popup': { POPUP_TYPE: {} },
    './lorebookEditorUtils.js': utils,
    '../html-utils.js': htmlUtils,
    ...modules,
  };
  new Function('require', 'exports', compiled)((name: string) => {
    if (!(name in dependencies)) throw new Error(`Unmocked dependency: ${name}`);
    return dependencies[name];
  }, exports);
  return exports;
}
const capture = (name: string) => (props: any) => {
  captures[name] = props;
  if (props.initialWorldName) captures[`${name}:${props.initialWorldName}`] = props;
  return null;
};
let LorebookEditor: ComponentType<any>, SuggestedEntry: ComponentType<any>, MainPopup: ComponentType;
let root: Root, container: HTMLDivElement;
beforeAll(() => {
  vi.stubGlobal('IS_REACT_ACT_ENVIRONMENT', true);
  const storage = new Map<string, string>();
  vi.stubGlobal('localStorage', {
    getItem: (key: string) => storage.get(key) ?? null,
    setItem: (key: string, value: string) => storage.set(key, value),
    clear: () => storage.clear(),
  });
  vi.stubGlobal('SillyTavern', { getContext: () => host, libs: { DOMPurify: { sanitize } } });
  LorebookEditor = compile('src/components/LorebookEditor.tsx', {
    './ReviseSessionManager.js': { ReviseSessionManager: capture('revision') },
  }).LorebookEditor;
  SuggestedEntry = compile('src/components/SuggestedEntry.tsx', {
    showdown: { default: showdown },
    './CompareEntryPopup.js': { CompareEntryPopup: noop },
    './EditEntryPopup.js': { EditEntryPopup: noop },
    './ReviseSessionManager.js': { ReviseSessionManager: capture('revision') },
  }).SuggestedEntry;
  MainPopup = compile('src/components/MainPopup.tsx', {
    handlebars: Handlebars,
    'sillytavern-utils-lib': { getWorldInfos: async () => state.entries },
    '../main-session-storage.js': {
      loadMainSession: async () => ({ value: state.session, writable: true }),
      saveMainSession: async () => ({ persisted: true }),
    },
    '../settings.js': { settingsManager: { getSettings: () => settings } },
    '../generate.js': { buildRecommendationMessages: noop, runWorldInfoRecommendation: noop },
    '../api-settings.js': { getRuntimeConnectionProfile: noop },
    '../hooks/useForceUpdate.js': { useForceUpdate: () => noop },
    '../world-info-save.js': { saveWorldInfoChecked: saveWorld },
    './SuggestedEntry.js': { SuggestedEntry: capture('suggestion') },
    './SelectEntriesPopup.js': { SelectEntriesPopup: noop },
    './ReviseSessionManager.js': { ReviseSessionManager: capture('globalRevision') },
    './ApiSettingsPanel.js': { ApiSettingsPanel: noop },
    './LorebookEditor.js': { LorebookEditor: capture('editor') },
    './Settings.js': { WorldInfoRecommenderSettings: noop },
  }).MainPopup;
});
beforeEach(() => {
  vi.clearAllMocks();
  localStorage.clear();
  Object.keys(captures).forEach((key) => delete captures[key]);
  state.session = {};
  state.entries = seedEntries();
  state.metadata = {};
  state.chatId = 'chat';
  state.branch = false;
  confirm.mockResolvedValue(true);
  saveWorld.mockResolvedValue(undefined);
  loadWorld.mockResolvedValue(null);
  sanitize.mockImplementation(() => '<strong>Sanitized</strong>');
  container = document.createElement('div');
  document.body.append(container);
  root = createRoot(container);
});
afterEach(async () => {
  await act(async () => root.unmount());
  container.remove();
});
const mount = (component: ComponentType<any>, props: any = {}) =>
  act(async () => root.render(createElement(component, props)));
async function click(label: string) {
  const button = [...container.querySelectorAll('button')].find((item) => item.textContent?.trim() === label);
  expect(button, `button ${label}`).toBeTruthy();
  await act(async () => button!.click());
}
async function change(element: HTMLInputElement, value: string) {
  await act(async () => {
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!.call(element, value);
    element.dispatchEvent(new Event('input', { bubbles: true }));
  });
}
const suggestionProps = () => ({
  entry: entry(1, 'original'),
  initialWorldName: 'A',
  allWorldNames: ['A'],
  selectedTargetWorld: 'A',
  entriesGroupByWorldName: {},
  sessionRegexIds: {},
  sessionForContext: {},
  contextToSend: {},
  onUpdate: vi.fn(),
  onAdd: vi.fn().mockResolvedValue(undefined),
  onContinue: noop,
  onRemove: noop,
  onTargetWorldChange: noop,
});

test('suggestion rendering inserts only host-sanitized Markdown and memoizes it', async () => {
  const props = suggestionProps();
  props.entry.content = '<img src=x onerror="window.hacked=1">';
  await mount(SuggestedEntry, props);
  expect(sanitize).toHaveBeenCalledWith(
    expect.stringContaining('onerror='),
    expect.objectContaining({ MESSAGE_SANITIZE: true, FORBID_ATTR: expect.arrayContaining(['style']) }),
  );
  expect(container.querySelector('.content')?.innerHTML).toBe('<strong>Sanitized</strong>');
  expect(container.querySelector('[onerror]')).toBeNull();
  await click('Revise');
  expect(sanitize).toHaveBeenCalledTimes(1);
});
test('entry revision applies updatedEntry rather than the manager envelope', async () => {
  const props = suggestionProps();
  await mount(SuggestedEntry, props);
  await click('Revise');
  const revised = entry(1, 'revised');
  await act(async () =>
    captures.revision.onApply({ type: 'entry', worldName: 'A', originalEntry: props.entry, updatedEntry: revised }),
  );
  expect(props.onUpdate).toHaveBeenCalledWith('A', props.entry, revised, {});
});
test('Add becomes available again when parent retains the card after failed target resolution', async () => {
  const props = suggestionProps();
  await mount(SuggestedEntry, props);
  await click('Add New');
  expect(
    [...container.querySelectorAll('button')].find((button) => button.textContent?.trim() === 'Add New')?.disabled,
  ).toBe(false);
  await click('Add New');
  expect(props.onAdd).toHaveBeenCalledTimes(2);
});
test('saving one editor entry preserves other drafts and pending deletions', async () => {
  const onSave = vi.fn();
  function Owner() {
    const [data, setData] = React.useState({ A: [entry(1, 'one'), entry(2, 'two'), entry(3, 'three')] });
    return createElement(LorebookEditor, {
      entriesGroupByWorldName: data,
      onSaveEntries: async (world: string, [{ entry: saved, originalUid }]: any) => {
        onSave(saved);
        setData((previous: any) => ({
          ...previous,
          [world]: previous[world].map((item: any) => (item.uid === originalUid ? saved : item)),
        }));
      },
      onReplaceWorldEntries: vi.fn(),
      onRefreshEntries: noop,
      sessionForContext: {},
      contextToSend: {},
    });
  }
  await mount(Owner);
  await change(container.querySelectorAll<HTMLInputElement>('.entry-title-input')[0], 'edited one');
  await change(container.querySelectorAll<HTMLInputElement>('.entry-title-input')[1], 'edited two');
  const deleteButtons = [...container.querySelectorAll('button')].filter(
    (item) => item.textContent?.trim() === 'Delete',
  );
  await act(async () => deleteButtons[2].click());
  await click('Save Entry');
  expect([...container.querySelectorAll<HTMLInputElement>('.entry-title-input')].map((input) => input.value)).toEqual([
    'edited one',
    'edited two',
  ]);
  expect(container.querySelectorAll('.entry-dirty-label')).toHaveLength(1);
  expect(container.textContent).toContain('1 draft deleted');
});
test('an edit during an outstanding save remains dirty after the saved baseline arrives', async () => {
  let finish!: () => void;
  const pending = new Promise<void>((resolve) => {
    finish = resolve;
  });
  function Owner() {
    const [data, setData] = React.useState({ A: [entry(1, 'one')] });
    return createElement(LorebookEditor, {
      entriesGroupByWorldName: data,
      onSaveEntries: async (_world: string, [{ entry: saved }]: any) => {
        await pending;
        setData({ A: [saved] });
      },
      onReplaceWorldEntries: vi.fn(),
      onRefreshEntries: noop,
      sessionForContext: {},
      contextToSend: {},
    });
  }
  await mount(Owner);
  await change(container.querySelector('.entry-title-input')!, 'submitted');
  await click('Save Entry');
  await change(container.querySelector('.entry-title-input')!, 'newer draft');
  await act(async () => finish());
  expect((container.querySelector('.entry-title-input') as HTMLInputElement).value).toBe('newer draft');
  expect(container.querySelectorAll('.entry-dirty-label')).toHaveLength(1);
});
test('Global Revise isolates per-world UIDs and includes UID zero revisions', async () => {
  state.session = {
    suggestedEntries: { B: [entry(1, 'B revised'), entry(0, 'B zero revised')] },
    selectedWorldNames: ['A', 'B'],
  };
  await mount(MainPopup);
  await click('Global Revise');
  expect(captures.globalRevision.initialState.A.map((item: any) => item.comment)).toEqual(['A zero', 'A one']);
  expect(captures.globalRevision.initialState.B.map((item: any) => item.comment)).toEqual([
    'B zero revised',
    'B revised',
  ]);
});
test('Apply All awaits each checked write, keeps failed suggestions, and commits only successful worlds', async () => {
  state.session = {
    suggestedEntries: { A: [entry(1, 'A revised')], B: [entry(1, 'B revised')] },
    selectedWorldNames: ['A', 'B'],
  };
  let finish!: () => void;
  saveWorld
    .mockImplementationOnce(
      () =>
        new Promise<void>((resolve) => {
          finish = resolve;
        }),
    )
    .mockRejectedValueOnce(new Error('HTTP 500'));
  await mount(MainPopup);
  await click('Apply All');
  expect(saveWorld).toHaveBeenCalledTimes(1);
  expect(captures.suggestion.sessionForContext.suggestedEntries.A).toHaveLength(1);
  await act(async () => finish());
  expect(saveWorld.mock.calls.map((args) => args[0])).toEqual(['A', 'B']);
  expect(captures.suggestion.sessionForContext.suggestedEntries.A).toHaveLength(0);
  expect(captures.suggestion.sessionForContext.suggestedEntries.B[0].comment).toBe('B revised');
  expect(captures.suggestion.entriesGroupByWorldName.A[1].comment).toBe('A revised');
  expect(captures.suggestion.entriesGroupByWorldName.B[1].comment).toBe('B one');
  expect(echo).toHaveBeenCalledWith(
    'warning',
    expect.stringContaining('1 suggestions could not be applied and were kept'),
  );
});
test('a required branch fork failure never falls through to writing the inherited parent book', async () => {
  state.branch = true;
  state.metadata = { world_info: 'A', main_chat: 'parent', worldInfoRecommender_chatBookOwner: 'parent' };
  state.session = { suggestedEntries: { A: [entry(4, 'branch addition')] }, selectedWorldNames: ['A'] };
  await mount(MainPopup);
  await act(async () => captures.suggestion.onAdd(captures.suggestion.entry, 'A', 'A'));
  expect(loadWorld).toHaveBeenCalledWith('A');
  expect(saveWorld).not.toHaveBeenCalled();
  expect(captures.suggestion.sessionForContext.suggestedEntries.A).toHaveLength(1);
});

test('Save All acknowledges only submitted edits/deletions and retains changes made during the write', async () => {
  let finish!: () => void;
  const pending = new Promise<void>((resolve) => {
    finish = resolve;
  });
  const replace = vi.fn();
  function Owner() {
    const [data, setData] = React.useState({ A: [entry(1, 'one'), entry(2, 'two'), entry(3, 'three')] });
    return createElement(LorebookEditor, {
      entriesGroupByWorldName: data,
      onSaveEntries: vi.fn(),
      onReplaceWorldEntries: async (name: string, entries: ExtendedWIEntry[]) => {
        replace(name, entries);
        await pending;
        setData({ A: entries });
      },
      onRefreshEntries: noop,
      sessionForContext: {},
      contextToSend: {},
    });
  }
  await mount(Owner);
  await change(container.querySelector('.entry-title-input')!, 'submitted');
  let deleteButtons = [...container.querySelectorAll('button')].filter(
    (button) => button.textContent?.trim() === 'Delete',
  );
  await act(async () => deleteButtons[1].click());
  await click('Save All');
  expect(replace.mock.calls[0][1].map((item: ExtendedWIEntry) => item.uid)).toEqual([1, 3]);
  await change(container.querySelector('.entry-title-input')!, 'newer edit');
  deleteButtons = [...container.querySelectorAll('button')].filter((button) => button.textContent?.trim() === 'Delete');
  await act(async () => deleteButtons[1].click());
  await act(async () => finish());
  expect([...container.querySelectorAll<HTMLInputElement>('.entry-title-input')].map((input) => input.value)).toEqual([
    'newer edit',
  ]);
  expect(container.querySelectorAll('.entry-dirty-label')).toHaveLength(1);
  expect(container.textContent).toContain('1 draft deleted');
});

test('failed editor saves retain drafts and allow retry', async () => {
  const save = vi.fn().mockRejectedValue(new Error('HTTP 500'));
  await mount(LorebookEditor, {
    entriesGroupByWorldName: { A: [entry(1, 'one')] },
    onSaveEntries: save,
    onReplaceWorldEntries: vi.fn(),
    onRefreshEntries: noop,
    sessionForContext: {},
    contextToSend: {},
  });
  await change(container.querySelector('.entry-title-input')!, 'draft');
  await click('Save Entry');
  expect(container.querySelectorAll('.entry-dirty-label')).toHaveLength(1);
  expect((container.querySelector('.entry-title-input') as HTMLInputElement).value).toBe('draft');
  await click('Save Entry');
  expect(save).toHaveBeenCalledTimes(2);
});

test('duplicate suggestions marked unchanged by an unsaved prior update survive a failed Apply All', async () => {
  state.session = {
    suggestedEntries: { A: [entry(1, 'same revision')], B: [entry(1, 'same revision')] },
    selectedWorldNames: ['A', 'B'],
  };
  saveWorld.mockRejectedValueOnce(new Error('HTTP 500'));
  await mount(MainPopup);
  // Both source suggestions are directed at A, so the second matches the
  // in-memory result of the first while neither change has reached disk.
  await act(async () => captures['suggestion:B'].onTargetWorldChange('A'));
  await click('Apply All');
  expect(captures.suggestion.sessionForContext.suggestedEntries.A).toHaveLength(1);
  expect(captures.suggestion.sessionForContext.suggestedEntries.B).toHaveLength(1);
  expect(captures.suggestion.entriesGroupByWorldName.A[1].comment).toBe('A one');
});

test('parent editor state is published only after checked persistence succeeds', async () => {
  await mount(MainPopup);
  await click('Lorebook Editor');
  let finish!: () => void;
  saveWorld.mockImplementationOnce(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
  );
  let saved!: Promise<void>;
  await act(async () => {
    saved = captures.editor.onSaveEntries('A', [{ entry: entry(1, 'saved'), originalUid: 1 }]);
  });
  expect(captures.editor.entriesGroupByWorldName.A[1].comment).toBe('A one');
  await act(async () => {
    finish();
    await saved;
  });
  expect(captures.editor.entriesGroupByWorldName.A[1].comment).toBe('saved');
  saveWorld.mockRejectedValueOnce(new Error('HTTP 500'));
  await act(async () => {
    await expect(captures.editor.onReplaceWorldEntries('B', [entry(1, 'failed')])).rejects.toThrow('HTTP 500');
  });
  expect(captures.editor.entriesGroupByWorldName.B[1].comment).toBe('B one');
});

test('concurrent editor saves to different books preserve both committed worlds', async () => {
  await mount(MainPopup);
  await click('Lorebook Editor');
  let finishA!: () => void;
  saveWorld
    .mockImplementationOnce(
      () =>
        new Promise<void>((resolve) => {
          finishA = resolve;
        }),
    )
    .mockResolvedValueOnce(undefined);
  const saveEntries = captures.editor.onSaveEntries;
  let saveA!: Promise<void>;
  await act(async () => {
    saveA = saveEntries('A', [{ entry: entry(1, 'A saved'), originalUid: 1 }]);
    await saveEntries('B', [{ entry: entry(1, 'B saved'), originalUid: 1 }]);
  });
  await act(async () => {
    finishA();
    await saveA;
  });
  expect(captures.editor.entriesGroupByWorldName.A[1].comment).toBe('A saved');
  expect(captures.editor.entriesGroupByWorldName.B[1].comment).toBe('B saved');
});
