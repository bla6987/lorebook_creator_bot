import * as revisionIdentity from '../revise-entry-identity.js';
import * as messageRanges from '../message-ranges.js';
import { beforeAll, beforeEach, afterEach, expect, test, vi } from 'vitest';
import * as React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import { act, createElement, type ComponentType } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import * as Handlebars from 'handlebars';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import * as editorUtils from '../components/lorebookEditorUtils.js';
import { useForceUpdate } from '../hooks/useForceUpdate.js';

const state = {
  avatar: 'first', load: vi.fn(), save: vi.fn(), warn: vi.fn(),
  settings: { profileId: '', promptPreset: 'Default', promptPresets: { Default: { content: '' } },
    contextToSend: { messages: { type: 'none' }, worldInfo: true }, prompts: {},
    mainContextTemplatePresets: {}, maxContextType: 'active' },
};
let MainPopup: ComponentType, root: Root, container: HTMLDivElement;
beforeAll(() => {
  vi.stubGlobal('IS_REACT_ACT_ENVIRONMENT', true);
  vi.stubGlobal('SillyTavern', { getContext: () => ({ characters: [], chat: [] }) });
  // Compile the actual component and inject host/UI dependencies. This avoids
  // loading SillyTavern's server-only import paths in the standalone test runner.
  const source = readFileSync('src/components/MainPopup.tsx', 'utf8');
  const compiled = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS } }).outputText;
  const modules: Record<string, unknown> = {
    react: React, 'react/jsx-runtime': jsxRuntime, handlebars: Handlebars,
    '../main-session-storage.js': { loadMainSession: state.load, saveMainSession: state.save },
    '../settings.js': { settingsManager: { getSettings: () => state.settings } },
    '../generate.js': { buildRecommendationMessages: vi.fn(), runWorldInfoRecommendation: vi.fn() },
    '../api-settings.js': { getRuntimeConnectionProfile: vi.fn() },
    '../message-ranges.js': messageRanges,
    '../revise-entry-identity.js': revisionIdentity,
    '../world-info-save.js': { saveWorldInfoChecked: vi.fn() },
    '../revise-session-storage.js': { relocateEntryRevisionSessions: vi.fn() },
    '../hooks/useForceUpdate.js': { useForceUpdate }, './lorebookEditorUtils.js': editorUtils,
    'sillytavern-utils-lib': { getWorldInfos: async () => ({}) },
    'sillytavern-utils-lib/types/popup': { POPUP_TYPE: {} },
    'sillytavern-utils-lib/config': {
      get this_chid() { return state.avatar; }, selected_group: null, groups: [], world_names: [],
      st_getCharaFilename: (value: string) => value, st_echo: state.warn, WI_METADATA_KEY: 'world_info',
      st_createNewWorldInfo: vi.fn(), st_createWorldInfoEntry: vi.fn(),
    },
    'sillytavern-utils-lib/components/react': {
      STButton: () => null, STConnectionProfileSelect: () => null, STFancyDropdown: () => null,
      STPresetSelect: () => null, STTextarea: () => null, Popup: () => null,
    },
  };
  for (const name of ['SuggestedEntry', 'SelectEntriesPopup', 'ReviseSessionManager', 'ApiSettingsPanel', 'LorebookEditor']) {
    modules[`./${name}.js`] = { [name]: () => null };
  }
  modules['./Settings.js'] = { WorldInfoRecommenderSettings: () => null };
  const exports: Record<string, any> = {};
  new Function('require', 'exports', compiled)((name: string) => {
    if (!(name in modules)) throw new Error(`Unmocked host dependency: ${name}`);
    return modules[name];
  }, exports);
  MainPopup = exports.MainPopup;
});
beforeEach(() => {
  state.avatar = 'first'; state.load.mockReset(); state.save.mockReset(); state.warn.mockClear();
  state.save.mockResolvedValue({ persisted: true });
  container = document.createElement('div'); document.body.append(container); root = createRoot(container);
});
afterEach(async () => { await act(async () => root.unmount()); container.remove(); });
const mount = () => act(async () => { root.render(createElement(MainPopup)); });

test('storage read failures display fallback history without autosaving over unread data', async () => {
  state.load.mockResolvedValue({ value: { blackListedEntries: ['retained'] }, writable: false, error: new Error('Read failed') });
  await mount();
  expect(state.load).toHaveBeenCalledWith('first');
  expect(state.save).not.toHaveBeenCalled();
  expect(state.warn).toHaveBeenCalledWith('warning', expect.stringContaining('original data has been kept'));
  expect(container.textContent).not.toBe('Loading...');
});

test('a slow old-character load cannot overwrite the new character session', async () => {
  let finishOld!: (result: any) => void;
  state.load.mockImplementation((key: string) => key === 'first'
    ? new Promise(resolve => { finishOld = resolve; })
    : Promise.resolve({ value: { blackListedEntries: ['second-history'] }, writable: true }));
  await mount(); expect(state.save).not.toHaveBeenCalled();
  state.avatar = 'second'; await mount();
  expect(state.save).toHaveBeenCalledWith('second', expect.objectContaining({ blackListedEntries: ['second-history'] }));
  state.save.mockClear();
  await act(async () => { finishOld({ value: { blackListedEntries: ['old-history'] }, writable: true }); });
  expect(state.save).not.toHaveBeenCalled();
});

test('closing during a storage load cannot trigger a later history save', async () => {
  let finish!: (result: any) => void;
  state.load.mockImplementation(() => new Promise(resolve => { finish = resolve; }));
  await mount();
  await act(async () => root.render(null));
  await act(async () => finish({ value: {}, writable: true }));
  expect(state.save).not.toHaveBeenCalled();
});
