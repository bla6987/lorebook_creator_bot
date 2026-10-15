import * as revisionIdentity from '../revise-entry-identity.js';
import * as messageRanges from '../message-ranges.js';
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
const state = {
  session: {} as any,
  entries: seedEntries(),
  metadata: {} as any,
  chatId: 'chat',
  branch: false,
  realEditor: false,
};
const recommendation = vi.fn();
const saveMain = vi.fn();
const relocateHistory = vi.fn();
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
    '../revise-entry-identity.js': revisionIdentity,
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
  if (props.initialWorldName) {
    captures[`${name}:${props.initialWorldName}`] = props;
    if (props.entry) captures[`${name}:${props.initialWorldName}:${props.entry.uid}`] = props;
  }
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
      saveMainSession: saveMain,
    },
    '../settings.js': { settingsManager: { getSettings: () => settings } },
    '../generate.js': { buildRecommendationMessages: noop, runWorldInfoRecommendation: recommendation },
    '../api-settings.js': { getRuntimeConnectionProfile: () => ({}) },
    '../hooks/useForceUpdate.js': { useForceUpdate: () => noop },
    '../message-ranges.js': messageRanges,
    '../revise-entry-identity.js': revisionIdentity,
    '../world-info-save.js': { saveWorldInfoChecked: saveWorld },
    '../revise-session-storage.js': { relocateEntryRevisionSessions: relocateHistory },
    './SuggestedEntry.js': { SuggestedEntry: capture('suggestion') },
    './SelectEntriesPopup.js': { SelectEntriesPopup: noop },
    './ReviseSessionManager.js': { ReviseSessionManager: capture('globalRevision') },
    './ApiSettingsPanel.js': { ApiSettingsPanel: noop },
    './LorebookEditor.js': {
      LorebookEditor: (props: any) => {
        captures.editor = props;
        return state.realEditor ? createElement(LorebookEditor, props) : null;
      },
    },
    './Settings.js': { WorldInfoRecommenderSettings: noop },
  }).MainPopup;
});
beforeEach(() => {
  vi.clearAllMocks();
  settings.profileId = '';
  recommendation.mockReset();
  relocateHistory.mockReset().mockResolvedValue({ persisted: true });
  saveMain.mockReset().mockResolvedValue({ persisted: true });
  host.saveMetadata.mockReset().mockResolvedValue(undefined);
  host.chat.length = 0;
  settings.contextToSend.messages = { type: 'none' };
  config.world_names.splice(0, config.world_names.length, 'A', 'B');
  host.updateChatMetadata.mockImplementation((values: any) => Object.assign(state.metadata, values));
  host.updateWorldInfoList.mockResolvedValue(undefined);
  localStorage.clear();
  Object.keys(captures).forEach((key) => delete captures[key]);
  state.session = {};
  state.entries = seedEntries();
  state.metadata = {};
  state.chatId = 'chat';
  state.branch = false;
  state.realEditor = false;
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

test('same-world single applications serialize their snapshots and preserve both accepted updates', async () => {
  state.session = {
    suggestedEntries: { A: [entry(0, 'zero revised'), entry(1, 'one revised')], B: [entry(0, 'keep visible')] },
  };
  let finish!: () => void;
  saveWorld.mockImplementationOnce(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
  );
  await mount(MainPopup);
  let first!: Promise<void>, second!: Promise<void>;
  await act(async () => {
    const props = captures['suggestion:A'];
    first = props.onAdd(props.sessionForContext.suggestedEntries.A[0], 'A', 'A');
  });
  await act(async () => {
    const props = captures['suggestion:A'];
    second = props.onAdd(props.sessionForContext.suggestedEntries.A[1], 'A', 'A');
  });
  expect(saveWorld).toHaveBeenCalledTimes(1);
  await act(async () => {
    finish();
    await Promise.all([first, second]);
  });
  expect(Object.values(saveWorld.mock.calls[1][1].entries).map((item: any) => item.comment)).toEqual([
    'zero revised',
    'one revised',
  ]);
  expect(captures['suggestion:B'].sessionForContext.suggestedEntries.A).toHaveLength(0);
});

test('overlapping single Add and Apply All preserve updates and apply shared new suggestions once', async () => {
  state.session = { suggestedEntries: { A: [entry(9, 'new addition'), entry(1, 'one revised')] } };
  let finish!: () => void;
  saveWorld.mockImplementationOnce(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
  );
  await mount(MainPopup);
  let single!: Promise<void>;
  await act(async () => {
    const props = captures['suggestion:A'];
    single = props.onAdd(props.sessionForContext.suggestedEntries.A[0], 'A', 'A');
  });
  await click('Apply All');
  expect(saveWorld).toHaveBeenCalledTimes(1);
  await act(async () => {
    finish();
    await single;
  });
  expect(saveWorld).toHaveBeenCalledTimes(2);
  const saved = Object.values(saveWorld.mock.calls[1][1].entries) as ExtendedWIEntry[];
  expect(saved.filter((item) => item.comment === 'new addition')).toHaveLength(1);
  expect(saved.find((item) => item.uid === 1)?.comment).toBe('one revised');
});

test('a pending suggestion application survives a queued editor Save All and its deletion delta', async () => {
  state.session = { suggestedEntries: { A: [entry(9, 'new addition')] } };
  let finish!: () => void;
  saveWorld.mockImplementationOnce(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
  );
  await mount(MainPopup);
  let addition!: Promise<void>;
  await act(async () => {
    const props = captures['suggestion:A'];
    addition = props.onAdd(props.entry, 'A', 'A');
  });
  await click('Lorebook Editor');
  let replace!: Promise<void>;
  await act(async () => {
    // Delete UID 0 and edit UID 1, while the accepted new UID is still saving.
    replace = captures.editor.onReplaceWorldEntries('A', [entry(1, 'editor revised')]);
  });
  expect(saveWorld).toHaveBeenCalledTimes(1);
  await act(async () => {
    finish();
    await Promise.all([addition, replace]);
  });
  expect(Object.values(saveWorld.mock.calls[1][1].entries).map((item: any) => item.comment)).toEqual([
    'editor revised',
    'new addition',
  ]);
});

test('a queued suggestion reads a completed editor Save Entry before preparing its whole-world write', async () => {
  state.session = { suggestedEntries: { A: [entry(1, 'suggestion revised')] } };
  let finish!: () => void;
  saveWorld.mockImplementationOnce(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
  );
  await mount(MainPopup);
  const suggestion = captures['suggestion:A'];
  await click('Lorebook Editor');
  let editorSave!: Promise<void>, addition!: Promise<void>;
  await act(async () => {
    editorSave = captures.editor.onSaveEntries('A', [{ entry: entry(0, 'editor revised'), originalUid: 0 }]);
  });
  await act(async () => {
    addition = suggestion.onAdd(suggestion.entry, 'A', 'A');
  });
  expect(saveWorld).toHaveBeenCalledTimes(1);
  await act(async () => {
    finish();
    await Promise.all([editorSave, addition]);
  });
  expect(Object.values(saveWorld.mock.calls[1][1].entries).map((item: any) => item.comment)).toEqual([
    'editor revised',
    'suggestion revised',
  ]);
});

test('failed Apply All retains the resolved branch target on retry instead of writing the parent', async () => {
  state.branch = true;
  state.chatId = 'Branch 1';
  state.metadata = { world_info: 'A', main_chat: 'parent', worldInfoRecommender_chatBookOwner: 'parent' };
  state.session = { suggestedEntries: { A: [entry(9, 'branch addition')] } };
  loadWorld.mockResolvedValue({ entries: { 0: entry(0, 'A zero'), 1: entry(1, 'A one') } });
  host.updateWorldInfoList.mockImplementation(async () => {
    config.world_names.push('A - Branch 1');
  });
  saveWorld.mockResolvedValueOnce(undefined).mockRejectedValueOnce(new Error('HTTP 500'));
  await mount(MainPopup);
  await click('Apply All');
  expect(captures['suggestion:A'].selectedTargetWorld).toBe('A - Branch 1');
  expect(captures['suggestion:A'].sessionForContext.suggestedEntries.A).toHaveLength(1);
  await click('Apply All');
  expect(saveWorld.mock.calls.map(([name]) => name)).toEqual(['A - Branch 1', 'A - Branch 1', 'A - Branch 1']);
  expect(saveWorld.mock.calls[2][1].entries[0].comment).toBe('A zero');
});

test('Apply All removes unchanged submitted snapshots after Continue clones suggestions, while retaining newer edits', async () => {
  settings.profileId = 'test';
  Object.assign(settings, {
    mainContextTemplatePreset: 'Default',
    mainContextTemplatePresets: { Default: { prompts: [] } },
  });
  state.session = { suggestedEntries: { A: [entry(9, 'new addition'), entry(1, 'one revised')] } };
  let finish!: () => void;
  saveWorld.mockImplementationOnce(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
  );
  recommendation.mockResolvedValue({ A: [entry(1, 'continued one')] });
  await mount(MainPopup);
  await click('Apply All');
  await act(async () => {
    const props = captures['suggestion:A'];
    await props.onContinue({
      worldName: 'A',
      entry: props.sessionForContext.suggestedEntries.A[1],
      prompt: 'continue',
      mode: 'continue',
    });
  });
  await act(async () => finish());
  expect(captures['suggestion:A'].sessionForContext.suggestedEntries.A.map((item: any) => item.comment)).toEqual([
    'continued one',
  ]);
  expect(
    Object.values(saveWorld.mock.calls[0][1].entries).filter((item: any) => item.comment === 'new addition'),
  ).toHaveLength(1);
});

const setupBranch = () => {
  state.branch = true;
  state.chatId = 'Branch 1';
  state.metadata = { world_info: 'A', main_chat: 'parent', worldInfoRecommender_chatBookOwner: 'parent' };
  loadWorld.mockResolvedValue({ entries: { 0: entry(0, 'A zero'), 1: entry(1, 'A one') } });
  host.updateWorldInfoList.mockImplementation(async () => {
    config.world_names.push('A - Branch 1');
  });
};

test('Add and Apply All coalesce branch resolution while metadata persistence is pending', async () => {
  setupBranch();
  state.session = { suggestedEntries: { A: [entry(9, 'branch addition')] } };
  let finishMetadata!: () => void;
  host.saveMetadata.mockImplementationOnce(
    () =>
      new Promise<void>((resolve) => {
        finishMetadata = resolve;
      }),
  );
  await mount(MainPopup);
  let single!: Promise<void>;
  await act(async () => {
    const props = captures['suggestion:A'];
    single = props.onAdd(props.entry, 'A', 'A');
  });
  expect(state.metadata.world_info).toBe('A - Branch 1');
  await click('Apply All');
  expect(saveWorld.mock.calls.map(([name]) => name)).toEqual(['A - Branch 1']);
  await act(async () => {
    finishMetadata();
    await single;
  });
  expect(saveWorld.mock.calls.map(([name]) => name)).toEqual(['A - Branch 1', 'A - Branch 1']);
  expect(
    Object.values(saveWorld.mock.calls[1][1].entries).filter((item: any) => item.comment === 'branch addition'),
  ).toHaveLength(1);
});

test('later default source suggestions follow the fork after binding while the first content save is pending', async () => {
  setupBranch();
  state.session = { suggestedEntries: { A: [entry(9, 'first branch addition'), entry(10, 'second branch addition')] } };
  let finish!: () => void;
  saveWorld.mockResolvedValueOnce(undefined).mockImplementationOnce(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
  );
  await mount(MainPopup);
  let single!: Promise<void>;
  await act(async () => {
    const props = captures['suggestion:A'];
    single = props.onAdd(props.sessionForContext.suggestedEntries.A[0], 'A', 'A');
  });
  await click('Apply All');
  await act(async () => {
    finish();
    await single;
  });
  expect(saveWorld.mock.calls.map(([name]) => name)).toEqual(['A - Branch 1', 'A - Branch 1', 'A - Branch 1']);
  expect(Object.values(saveWorld.mock.calls[2][1].entries).map((item: any) => item.comment)).toEqual([
    'A zero',
    'A one',
    'first branch addition',
    'second branch addition',
  ]);
});

test('failed branch target resolution metadata persists with retained suggestions across popup reopen', async () => {
  setupBranch();
  state.session = { suggestedEntries: { A: [entry(9, 'branch addition')] } };
  saveWorld.mockResolvedValueOnce(undefined).mockRejectedValueOnce(new Error('HTTP 500'));
  await mount(MainPopup);
  await click('Apply All');
  state.session = structuredClone(saveMain.mock.calls.at(-1)![1]);
  state.entries = { ...seedEntries(), ['A - Branch 1']: [entry(0, 'A zero'), entry(1, 'A one')] } as any;
  await act(async () => root.render(null));
  await mount(MainPopup);
  expect(captures['suggestion:A'].selectedTargetWorld).toBe('A - Branch 1');
  await click('Apply All');
  expect(saveWorld.mock.calls.map(([name]) => name)).toEqual(['A - Branch 1', 'A - Branch 1', 'A - Branch 1']);
});

test('an explicitly selected parent target survives a suggestion rename after the chat forks', async () => {
  setupBranch();
  state.session = { suggestedEntries: { A: [entry(9, 'first addition'), entry(10, 'second addition')] } };
  let finish!: () => void;
  saveWorld.mockResolvedValueOnce(undefined).mockImplementationOnce(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
  );
  await mount(MainPopup);
  let single!: Promise<void>;
  await act(async () => {
    const props = captures['suggestion:A'];
    single = props.onAdd(props.sessionForContext.suggestedEntries.A[0], 'A', 'A');
  });
  await act(async () => captures['suggestion:A:10'].onTargetWorldChange('A'));
  await act(async () => {
    const props = captures['suggestion:A:10'];
    props.onUpdate('A', props.entry, { ...props.entry, comment: 'explicitly renamed' });
  });
  await click('Apply All');
  await act(async () => {
    finish();
    await single;
  });
  expect(saveWorld.mock.calls.map(([name]) => name)).toEqual(['A - Branch 1', 'A - Branch 1', 'A']);
  expect(
    Object.values(saveWorld.mock.calls[2][1].entries).some((item: any) => item.comment === 'explicitly renamed'),
  ).toBe(true);
});

test('revision identity stamping persists only the stored entry, and rejects a recycled UID before Apply', async () => {
  await mount(MainPopup);
  await click('Lorebook Editor');
  loadWorld.mockResolvedValue({ entries: { 0: entry(0, 'A zero'), 1: entry(1, 'A one') } });
  let stamped!: ExtendedWIEntry;
  await act(async () => {
    stamped = await captures.editor.onEnsureEntryIdentity('A', entry(0, 'unsaved draft'));
  });
  expect(stamped.comment).toBe('unsaved draft');
  expect(stamped._wircRevisionId).toEqual(expect.any(String));
  expect(saveWorld.mock.calls[0][1].entries[0].comment).toBe('A zero');
  expect(saveWorld.mock.calls[0][1].entries[0]._wircRevisionId).toBe(stamped._wircRevisionId);
  // A native delete/recreate reused UID 0 without the saved lifetime marker.
  loadWorld.mockResolvedValue({ entries: { 0: entry(0, 'replacement'), 1: entry(1, 'A one') } });
  await act(async () => {
    await expect(captures.editor.onEnsureEntryIdentity('A', stamped)).rejects.toThrow('replaced');
  });
  expect(saveWorld).toHaveBeenCalledTimes(1);
});

test('suggestion materialization preserves its marker while existing-entry updates retain the stored lifetime', async () => {
  state.entries.A[0]._wircRevisionId = 'stored-lifetime';
  state.session = {
    suggestedEntries: {
      A: [
        { ...entry(0, 'updated existing'), _wircRevisionId: 'unrelated-suggestion' },
        { ...entry(9, 'new suggestion'), _wircRevisionId: 'suggestion-lifetime' },
      ],
    },
  };
  await mount(MainPopup);
  await click('Apply All');
  expect(saveWorld.mock.calls[0][1].entries[0]._wircRevisionId).toBe('stored-lifetime');
  expect(saveWorld.mock.calls[0][1].entries[2]._wircRevisionId).toBe('suggestion-lifetime');
});

test.each([
  [
    { type: 'first', first: 2 },
    { start: 0, end: 1 },
  ],
  [
    { type: 'range', range: { start: 0, end: 0 } },
    { start: 0, end: 0.5 },
  ],
  [
    { type: 'first', first: 0 },
    { start: -1, end: -1 },
  ],
])('UI context messages %j use the shared exact-count range conversion', async (messages, expected) => {
  settings.profileId = 'test';
  Object.assign(settings, {
    mainContextTemplatePreset: 'Default',
    mainContextTemplatePresets: { Default: { prompts: [] } },
  });
  settings.contextToSend.messages = messages;
  (host.chat as any[]).push({}, {}, {});
  state.session = { suggestedEntries: { A: [entry(0, 'continue target')] } };
  recommendation.mockResolvedValue({});
  await mount(MainPopup);
  await act(async () =>
    captures['suggestion:A'].onContinue({
      worldName: 'A',
      entry: captures['suggestion:A'].entry,
      prompt: 'continue',
      mode: 'continue',
    }),
  );
  expect(recommendation.mock.calls[0][0].buildPromptOptions.messageIndexesBetween).toEqual(expected);
});

test('opening revision normalizes omitted host defaults before checking the unstamped baseline', async () => {
  await mount(MainPopup);
  await click('Lorebook Editor');
  loadWorld.mockResolvedValue({
    entries: {
      0: { uid: 0, comment: 'A zero', content: 'A zero', key: [] },
      1: entry(1, 'A one'),
    },
  });
  await act(async () => {
    await expect(captures.editor.onEnsureEntryIdentity('A', entry(0, 'unsaved title'))).resolves.toMatchObject({
      comment: 'unsaved title',
      _wircRevisionId: expect.any(String),
    });
  });
  expect(saveWorld.mock.calls[0][1].entries[0].comment).toBe('A zero');
});

test('Continue preserves the current suggestion lifetime instead of accepting a generated marker', async () => {
  settings.profileId = 'test';
  Object.assign(settings, {
    mainContextTemplatePreset: 'Default',
    mainContextTemplatePresets: { Default: { prompts: [] } },
  });
  state.session = {
    suggestedEntries: { A: [{ ...entry(0, 'continue target'), _wircRevisionId: 'current-lifetime' }] },
  };
  recommendation.mockResolvedValue({ A: [{ ...entry(0, 'continued'), _wircRevisionId: 'model-marker' }] });
  await mount(MainPopup);
  await act(async () =>
    captures['suggestion:A'].onContinue({
      worldName: 'A',
      entry: captures['suggestion:A'].entry,
      prompt: 'continue',
      mode: 'continue',
    }),
  );
  expect(captures['suggestion:A'].entry).toMatchObject({ comment: 'continued', _wircRevisionId: 'current-lifetime' });
});

test('Apply All persists a suggestion lifetime on a matching unstamped entry even without text changes', async () => {
  state.session = { suggestedEntries: { A: [{ ...entry(0, 'A zero'), _wircRevisionId: 'suggestion-lifetime' }] } };
  await mount(MainPopup);
  await click('Apply All');
  expect(saveWorld).toHaveBeenCalledTimes(1);
  expect(saveWorld.mock.calls[0][1].entries[0]._wircRevisionId).toBe('suggestion-lifetime');
});

test('an editor title draft merges an accepted suggestion content change before Save All', async () => {
  state.realEditor = true;
  state.session = { suggestedEntries: { A: [{ ...entry(0, 'A zero'), content: 'accepted content' }] } };
  let finish!: () => void;
  saveWorld.mockImplementationOnce(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
  );
  await mount(MainPopup);
  let addition!: Promise<void>;
  await act(async () => {
    const props = captures['suggestion:A'];
    addition = props.onAdd(props.entry, 'A', 'A');
  });
  await click('Lorebook Editor');
  await change(container.querySelector('.entry-title-input')!, 'draft title');
  await act(async () => {
    finish();
    await addition;
  });
  expect((container.querySelector('textarea[rows="5"]') as HTMLTextAreaElement).value).toBe('accepted content');
  await click('Save All');
  expect(saveWorld.mock.calls[1][1].entries[0]).toMatchObject({ comment: 'draft title', content: 'accepted content' });
});

test.each(['single', 'all'])(
  '%s application relocates only the materialized unsaved suggestion history',
  async (mode) => {
    state.session = {
      suggestedEntries: {
        A: [{ ...entry(9, 'new suggestion'), _wircRevisionId: 'suggestion-lifetime' }],
        B: [entry(0, 'keep visible')],
      },
    };
    await mount(MainPopup);
    if (mode === 'all') {
      // Keep B in the UI without submitting it, so consumption can be inspected.
      saveWorld.mockResolvedValueOnce(undefined).mockRejectedValueOnce(new Error('B unavailable'));
      await click('Apply All');
    } else
      await act(async () => {
        const props = captures['suggestion:A'];
        await props.onAdd(props.entry, 'A', 'A');
      });
    expect(relocateHistory).toHaveBeenCalledWith(
      'suggestion-lifetime',
      { worldName: 'A', uid: 9 },
      { worldName: 'A', uid: 2 },
    );
    expect(saveWorld.mock.calls[0][1].entries[2]._wircRevisionId).toBe('suggestion-lifetime');
    expect(captures['suggestion:B'].sessionForContext.suggestedEntries.A).toHaveLength(0);
  },
);

test.each(['single', 'all'])(
  '%s application still consumes a persisted new suggestion when history relocation fails',
  async (mode) => {
    state.session = {
      suggestedEntries: { A: [{ ...entry(9, 'new suggestion'), _wircRevisionId: 'suggestion-lifetime' }] },
    };
    relocateHistory.mockResolvedValueOnce({ persisted: false, error: new Error('Storage unavailable') });
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    try {
      await mount(MainPopup);
      if (mode === 'all') await click('Apply All');
      else
        await act(async () => {
          const props = captures['suggestion:A'];
          await props.onAdd(props.entry, 'A', 'A');
        });
      expect(saveWorld).toHaveBeenCalledTimes(1);
      expect(saveMain.mock.calls.at(-1)![1].suggestedEntries.A).toHaveLength(0);
      expect(echo).toHaveBeenCalledWith('warning', expect.stringContaining('Entry saved'));
      expect(echo).toHaveBeenCalledWith('success', expect.any(String));
    } finally {
      warn.mockRestore();
    }
  },
);

test.each(['single', 'all'])(
  '%s cross-world import creates a separate lifetime and preserves source history',
  async (mode) => {
    state.entries.A[0]._wircRevisionId = 'source-lifetime';
    state.entries.B = [];
    state.session = { suggestedEntries: { A: [{ ...entry(0, 'A zero'), _wircRevisionId: 'source-lifetime' }] } };
    await mount(MainPopup);
    if (mode === 'all') {
      await act(async () => captures['suggestion:A'].onTargetWorldChange('B'));
      await click('Apply All');
    } else
      await act(async () => {
        const props = captures['suggestion:A'];
        await props.onAdd(props.entry, 'A', 'B');
      });
    expect(saveWorld.mock.calls.map(([name]) => name)).toEqual(['B']);
    expect(saveWorld.mock.calls[0][1].entries[0]._wircRevisionId).toEqual(expect.any(String));
    expect(saveWorld.mock.calls[0][1].entries[0]._wircRevisionId).not.toBe('source-lifetime');
    expect(relocateHistory).not.toHaveBeenCalled();
    expect(state.entries.A[0]._wircRevisionId).toBe('source-lifetime');
  },
);

test('branch copies assign separate lifetimes to copied entries', async () => {
  setupBranch();
  const parentEntry = { ...entry(0, 'parent entry'), _wircRevisionId: 'parent-lifetime' };
  state.entries.A = [parentEntry];
  loadWorld.mockResolvedValue({ entries: { 0: parentEntry } });
  state.session = { suggestedEntries: { A: [entry(9, 'branch addition')] } };
  await mount(MainPopup);
  await click('Apply All');
  const copiedId = saveWorld.mock.calls[0][1].entries[0]._wircRevisionId;
  expect(copiedId).toEqual(expect.any(String));
  expect(copiedId).not.toBe('parent-lifetime');
  expect(saveWorld.mock.calls[1][1].entries[0]._wircRevisionId).toBe(copiedId);
  expect(parentEntry._wircRevisionId).toBe('parent-lifetime');
});

test.each(['single', 'all'])('%s completion consumes a suggestion stamped during its pending save', async (mode) => {
  state.session = { suggestedEntries: { A: [entry(9, 'new suggestion')] } };
  let finish!: () => void;
  saveWorld.mockImplementationOnce(
    () =>
      new Promise<void>((resolve) => {
        finish = resolve;
      }),
  );
  await mount(MainPopup);
  let single: Promise<void> | undefined;
  if (mode === 'all') await click('Apply All');
  else
    await act(async () => {
      const props = captures['suggestion:A'];
      single = props.onAdd(props.entry, 'A', 'A');
    });
  await act(async () => {
    const props = captures['suggestion:A'];
    // Opening Revise/New Session stamps its lifetime without editing lore content.
    props.onUpdate('A', props.entry, { ...props.entry, _wircRevisionId: 'session-created-during-save' });
  });
  await act(async () => {
    finish();
    await single;
  });
  expect(saveWorld).toHaveBeenCalledTimes(1);
  expect(saveMain.mock.calls.at(-1)![1].suggestedEntries.A).toHaveLength(0);
});
