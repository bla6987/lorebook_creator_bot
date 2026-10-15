import { afterEach, beforeAll, beforeEach, expect, test, vi } from 'vitest';
import * as React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import { act, createElement, type ComponentType } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import * as Handlebars from 'handlebars';
import * as editorUtils from '../components/lorebookEditorUtils.js';
import { getReviseEntryIdentifier } from '../revise-session-storage.js';
import type { ReviseSession } from '../revise-types.js';
import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';

const entry = { uid: 1, comment: 'Name', content: 'Original', key: ['Name'] } as WIEntry;
const state = {
  load: vi.fn(), save: vi.fn(), structured: vi.fn(), plain: vi.fn(),
  settings: { profileId: 'profile', prompts: {}, maxResponseToken: 100 },
  input: null as any,
};
const session = (id: string): ReviseSession => ({
  id, name: `Session ${id}`, type: 'entry', worldName: 'Book',
  targetEntryIdentifier: getReviseEntryIdentifier('Book', 1), createdAt: '2026-10-14',
  profileId: 'profile', promptEngineeringMode: 'native', context: { mainContextTemplatePreset: 'Default' },
  messages: [{ id: `${id}-snapshot`, role: 'assistant', content: 'Earlier reply', stateSnapshot: entry }],
});
const response = { name: 'Name', triggers: ['Name'], content: 'Revised', justification: 'Done' };
let Manager: ComponentType<any>, root: Root, container: HTMLDivElement;
function compile(file: string, modules: Record<string, any>) {
  const compiled = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const exports: Record<string, any> = {};
  new Function('require', 'exports', compiled)((name: string) => {
    if (!(name in modules)) throw new Error(`Unmocked host dependency: ${name}`);
    return modules[name];
  }, exports);
  return exports;
}
beforeAll(() => {
  vi.stubGlobal('IS_REACT_ACT_ENVIRONMENT', true);
  HTMLElement.prototype.scrollIntoView = () => {};
  vi.stubGlobal('SillyTavern', { getContext: () => ({
    chat: [], CONNECT_API_MAP: { test: { selected: 'test' } }, substituteParams: (text: string) => text,
    Popup: { show: { confirm: async () => true } },
  }) });
  const modules: Record<string, any> = {
    react: React, 'react/jsx-runtime': jsxRuntime, handlebars: Handlebars,
    'sillytavern-utils-lib/components/react': {
      STButton: (props: any) => createElement('button', props),
      STTextarea: (props: any) => { state.input = props; return createElement('textarea', props); },
      STInput: (props: any) => createElement('input', props), Popup: () => null,
    },
    '../settings.js': { settingsManager: { getSettings: () => state.settings } },
    'sillytavern-utils-lib/config': { st_echo: vi.fn(), this_chid: 1, selected_group: null },
    '../api-settings.js': { getRuntimeConnectionProfile: () => ({ api: 'test' }) },
    './lorebookEditorUtils.js': editorUtils,
    '../revise-types.js': {
      EntryRevisionResponseSchema: {}, GlobalRevisionResponseSchema: {},
      REVISE_SCHEMA_NAME: { ENTRY: 'entry', GLOBAL: 'global' }, CHAT_HISTORY_PLACEHOLDER_ID: 'placeholder',
    },
    '../request.js': { makeStructuredRequest: state.structured, makePlainRequest: state.plain },
    'sillytavern-utils-lib': {}, 'sillytavern-utils-lib/types/popup': { POPUP_TYPE: {} },
    '../revise-prompt-builder.js': {},
    '../revise-session-storage.js': { getReviseEntryIdentifier, loadReviseSessions: state.load, saveReviseSessions: state.save },
  };
  for (const name of ['CompareStatePopup', 'CurrentStatePopup', 'GlobalStatePopup']) {
    modules[`./${name}.js`] = { [name]: () => null };
  }
  modules['./ReviseSessionChat.js'] = compile('src/components/ReviseSessionChat.tsx', modules);
  Manager = compile('src/components/ReviseSessionManager.tsx', modules).ReviseSessionManager;
});
beforeEach(() => {
  state.load.mockReset().mockResolvedValue({ value: [session('A'), session('B')], writable: true });
  state.save.mockReset().mockResolvedValue({ persisted: true });
  state.structured.mockReset().mockResolvedValue(response);
  state.plain.mockReset().mockResolvedValue('Discussion');
  container = document.createElement('div'); document.body.append(container); root = createRoot(container);
});
afterEach(async () => { await act(async () => root.unmount()); container.remove(); });
const mount = (comment = 'Name') => act(async () => root.render(createElement(Manager, {
  target: { type: 'entry', worldName: 'Book', entry: { ...entry, comment } }, initialState: entry,
  onClose: () => {}, onApply: () => {}, sessionForContext: {}, allEntries: {}, contextToSend: { messages: { type: 'none' } },
})));
const select = (id: string) => act(async () => {
  Array.from(container.querySelectorAll<HTMLElement>('.session-info')).find(el => el.textContent?.includes(`Session ${id}`))!.click();
});
const click = (selector: string) => act(async () => { container.querySelector<HTMLElement>(selector)!.click(); });
const send = async () => {
  await act(async () => { state.input.onChange({ target: { value: 'Revise this' } }); });
  await click('.chat-input-area button');
};
const lastSaved = () => state.save.mock.calls.at(-1)![0] as ReviseSession[];

test('leaving a revision aborts its request and ignores late results without changing another session', async () => {
  let finish!: (value: typeof response) => void;
  state.structured.mockImplementation(() => new Promise(resolve => { finish = resolve; }));
  await mount(); await select('A'); await send();
  const signal = state.structured.mock.calls[0][6] as AbortSignal;
  await click('button[title="Back to sessions"]');
  expect(signal.aborted).toBe(true);
  await select('B'); await click('input[type="checkbox"]');
  const savesBeforeResponse = state.save.mock.calls.length;
  await act(async () => { finish(response); });
  expect(state.save).toHaveBeenCalledTimes(savesBeforeResponse);
  expect(lastSaved().find(saved => saved.id === 'B')?.isReadonly).toBe(true);
  expect(container.querySelector('h2')?.textContent).toBe('Session B');
  expect(lastSaved().find(saved => saved.id === 'A')?.messages).toHaveLength(1);
});

test.each(['send', 'regenerate'])('%s completion preserves settings changed during generation and strips local snapshot metadata', async (action) => {
  let finish!: (value: typeof response) => void;
  state.structured.mockImplementation(() => new Promise(resolve => { finish = resolve; }));
  await mount(); await select('A');
  if (action === 'regenerate') await click('button[title="Regenerate response"]');
  else await send();
  await click('input[type="checkbox"]');
  await act(async () => { finish(response); });
  const saved = lastSaved().find(value => value.id === 'A')!;
  expect(saved.isReadonly).toBe(true);
  expect(saved.messages.some(message => message.stateSnapshot?.content === 'Revised')).toBe(true);
  const sentMessages = state.structured.mock.calls[0][1];
  if (action === 'send') expect(sentMessages).toContainEqual({ role: 'assistant', content: 'Earlier reply' });
  expect(sentMessages.every((message: object) => Object.keys(message).sort().join(',') === 'content,role')).toBe(true);
});

test('readonly requests and regeneration also strip history metadata while retaining local snapshots', async () => {
  const saved = session('A'); saved.isReadonly = true;
  state.load.mockResolvedValue({ value: [saved], writable: true });
  await mount(); await select('A'); await send();
  await click('button[title="Regenerate response"]');
  expect(state.plain).toHaveBeenCalledTimes(2);
  for (const call of state.plain.mock.calls) {
    expect(call[1].every((message: object) => Object.keys(message).sort().join(',') === 'content,role')).toBe(true);
  }
  expect(lastSaved()[0].messages[0].stateSnapshot).toEqual(entry);
});

test('renaming a target preserves its revision history list', async () => {
  await mount(); expect(container.querySelectorAll('.session-item')).toHaveLength(2);
  await mount('New title');
  expect(container.querySelectorAll('.session-item')).toHaveLength(2);
});


test('a cancelled request cannot commit a late response and restores the prior conversation', async () => {
  let finish!: (value: typeof response) => void;
  state.structured.mockImplementation(() => new Promise(resolve => { finish = resolve; }));
  await mount(); await select('A'); await send();
  const signal = state.structured.mock.calls[0][6] as AbortSignal;
  await click('button[title="Cancel Request"]');
  expect(signal.aborted).toBe(true);
  await act(async () => { finish(response); });
  expect(state.save).not.toHaveBeenCalled();
  expect(container.querySelector('.loading')).toBeNull();
  expect(Array.from(container.querySelectorAll('.message-content')).map(el => el.textContent)).toEqual(['Earlier reply']);
});
