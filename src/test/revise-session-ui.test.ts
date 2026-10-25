import * as revisionState from '../revision-state.js';
import { afterEach, beforeAll, beforeEach, expect, test, vi } from 'vitest';
import * as React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import { act, createElement, type ComponentType } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import * as Handlebars from 'handlebars';
import * as editorUtils from '../components/lorebookEditorUtils.js';
import { applyReviseSessionMutation, getReviseEntryIdentifier, revisionSessionHeader, type ReviseSessionMutation } from '../revise-session-storage.js';
import * as revisionIdentity from '../revise-entry-identity.js';
import { getMessageIndexes } from '../message-ranges.js';
import type { ReviseSession } from '../revise-types.js';
import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';

const entry = { uid: 1, comment: 'Name', content: 'Original', key: ['Name'], disable: false,
  keysecondary: [], _wircRevisionId: 'entry-lifetime' } as WIEntry;
const state = {
  load: vi.fn(), loadBody: vi.fn(), save: vi.fn(), structured: vi.fn(), plain: vi.fn(),
  settings: { profileId: 'profile', prompts: {}, maxResponseToken: 100 },
  input: null as any,
  apply: vi.fn(), confirm: vi.fn(), ensure: vi.fn(), buildPrompt: vi.fn(),
  history: [] as ReviseSession[],
};
const session = (id: string): ReviseSession => ({
  id, name: `Session ${id}`, type: 'entry', worldName: 'Book',
  targetEntryIdentifier: getReviseEntryIdentifier('Book', 1), createdAt: '2026-10-14',
  targetEntryRevisionId: 'entry-lifetime',
  profileId: 'profile', promptEngineeringMode: 'native', context: { mainContextTemplatePreset: 'Default' },
  messages: [{ id: `${id}-snapshot`, role: 'assistant', content: 'Earlier reply', stateSnapshot: entry }],
});
const response = { name: 'Name', triggers: ['Name'], content: 'Revised', justification: 'Done' };
const saveToHistory = async (mutation: ReviseSessionMutation) => {
  state.history = applyReviseSessionMutation(state.history, mutation);
  return { persisted: true };
};
let Manager: ComponentType<any>, root: Root, container: HTMLDivElement;
function compile(file: string, modules: Record<string, any>) {
  const compiled = ts.transpileModule(readFileSync(file, 'utf8'), {
    // Match the extension's modern target so Map iterators retain their runtime semantics.
    compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
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
    chat: Array.from({ length: 5 }, (_, index) => ({ mes: String(index) })),
    CONNECT_API_MAP: { test: { selected: 'test' } }, substituteParams: (text: string) => text,
    Popup: { show: { confirm: state.confirm } },
  }) });
  const modules: Record<string, any> = {
    '../revision-state.js': revisionState,
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
    'sillytavern-utils-lib': { buildPrompt: state.buildPrompt }, 'sillytavern-utils-lib/types/popup': { POPUP_TYPE: {} },
    '../revise-prompt-builder.js': {},
    '../revise-session-storage.js': { getReviseEntryIdentifier, applyReviseSessionMutation,
      loadReviseSessions: state.load, loadReviseSession: state.loadBody, revisionSessionHeader, persistReviseSessionMutation: state.save },
    '../revise-entry-identity.js': revisionIdentity,
    '../message-ranges.js': { getMessageIndexes },
  };
  for (const name of ['CompareStatePopup', 'CurrentStatePopup', 'GlobalStatePopup']) {
    modules[`./${name}.js`] = { [name]: () => null };
  }
  modules['./ReviseSessionChat.js'] = compile('src/components/ReviseSessionChat.tsx', modules);
  Manager = compile('src/components/ReviseSessionManager.tsx', modules).ReviseSessionManager;
});
beforeEach(() => {
  state.history = [session('A'), session('B')];
  state.load.mockReset().mockImplementation(async () => ({ value: structuredClone(state.history).map(revisionSessionHeader), writable: true }));
  state.loadBody.mockReset().mockImplementation(async (id: string) => ({ value: structuredClone(state.history.find(item => item.id === id)), writable: true }));
  state.save.mockReset().mockImplementation(saveToHistory);
  state.apply.mockReset(); state.confirm.mockReset().mockResolvedValue(true);
  state.ensure.mockReset().mockImplementation(async (value) => revisionIdentity.withEntryRevisionId(value));
  state.buildPrompt.mockReset().mockImplementation(async (_api, options) => {
    // Match the installed builder's truthy-end check and JS slice semantics.
    const indexes = options.messageIndexesBetween;
    const start = indexes?.start ?? 0;
    const end = indexes?.end ? indexes.end + 1 : undefined;
    const messages = Array.from({ length: 5 }, (_, index) => ({ role: 'user', content: String(index) }));
    return { result: start === -1 && end === 0 ? [] : messages.slice(start, end) };
  });
  state.structured.mockReset().mockResolvedValue(response);
  state.plain.mockReset().mockResolvedValue('Discussion');
  container = document.createElement('div'); document.body.append(container); root = createRoot(container);
});
afterEach(async () => { await act(async () => root.unmount()); container.remove(); });
const mount = (comment = 'Name', overrides: Record<string, unknown> = {}) => act(async () => root.render(createElement(Manager, {
  target: { type: 'entry', worldName: 'Book', entry: { ...entry, comment } }, initialState: entry,
  onClose: () => {}, onApply: state.apply, onEnsureEntryIdentity: state.ensure,
  sessionForContext: {}, allEntries: {}, contextToSend: { messages: { type: 'none' } }, ...overrides,
})));
const select = (id: string) => act(async () => {
  Array.from(container.querySelectorAll<HTMLElement>('.session-info')).find(el => el.textContent?.includes(`Session ${id}`))!.click();
});
const click = (selector: string) => act(async () => { container.querySelector<HTMLElement>(selector)!.click(); });
const send = async () => {
  await act(async () => { state.input.onChange({ target: { value: 'Revise this' } }); });
  await click('.chat-input-area button');
};
const lastSaved = () => state.history;

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

test('a replacement in a recycled UID cannot open or apply its predecessor history without explicit recovery', async () => {
  const replacement = { ...entry, comment: 'Replacement', _wircRevisionId: 'replacement-lifetime' };
  await mount('Replacement', { target: { type: 'entry', worldName: 'Book', entry: replacement }, initialState: replacement });
  expect(container.querySelectorAll('.session-item')).toHaveLength(0);
  expect(container.querySelectorAll('.unverified-session-item')).toHaveLength(2);
  expect(container.querySelector('button[title="Apply Changes and Close"]')).toBeNull();
  state.confirm.mockResolvedValueOnce(false);
  await click('button[title="Attach a copy of verified history"]');
  expect(state.ensure).not.toHaveBeenCalled(); expect(state.save).not.toHaveBeenCalled();
  const original = structuredClone(state.history[0]);
  await click('button[title="Attach a copy of verified history"]');
  const recovered = state.history.find(value => value.id !== 'A' && value.id !== 'B')!;
  expect(recovered.targetEntryRevisionId).toBe('replacement-lifetime');
  expect(state.history.find(value => value.id === 'A')).toEqual(original);
  await click('button[title="Apply Changes and Close"]');
  expect(state.apply.mock.calls[0][0].updatedEntry._wircRevisionId).toBe('replacement-lifetime');
});

test('an explicitly relocated suggestion session applies to its assigned world and host UID', async () => {
  const assigned = { ...entry, uid: 77 };
  state.history = state.history.map((value) => ({ ...value, worldName: 'Destination',
    targetEntryIdentifier: getReviseEntryIdentifier('Destination', 77) }));
  await mount('Name', { target: { type: 'entry', worldName: 'Destination', entry: assigned }, initialState: assigned });
  expect(container.querySelectorAll('.session-item')).toHaveLength(2);
  await select('A');
  expect(state.history.find(value => value.id === 'A')?.worldName).toBe('Destination');
  await click('button[title="Apply Changes and Close"]');
  expect(state.apply.mock.calls[0][0]).toMatchObject({ worldName: 'Destination', updatedEntry: { uid: 77, _wircRevisionId: 'entry-lifetime' } });
});

test.each([
  ['Copied book', 1],
  ['Book', 2],
])('native copies retaining a marker do not inherit source history (%s / UID %s)', async (worldName, uid) => {
  const copy = { ...entry, uid };
  await mount('Name', { target: { type: 'entry', worldName, entry: copy }, initialState: copy });
  expect(container.querySelectorAll('.session-item')).toHaveLength(0);
  expect(container.querySelector('button[title="Apply Changes and Close"]')).toBeNull();
});

test('apply revalidates saved lifetime and refuses a target deleted or replaced while its chat was open', async () => {
  await mount(); await select('A');
  state.ensure.mockRejectedValueOnce(new Error('The saved entry was replaced.'));
  await click('button[title="Apply Changes and Close"]');
  expect(state.ensure).toHaveBeenCalled(); expect(state.apply).not.toHaveBeenCalled();
});

test.each([
  [{ type: 'first', first: 1 }, ['0']],
  [{ type: 'range', range: { start: 0, end: 0 } }, ['0']],
  [{ type: 'first', first: 0 }, []],
])('manager chat-history selection %j reaches the request with exactly the selected indexes', async (messages, expected) => {
  state.history = [{ ...session('A'), messages: [{ id: 'placeholder', role: 'system', content: 'placeholder', isInitial: true }] }];
  await mount('Name', { contextToSend: { messages } }); await select('A'); await send();
  expect(state.structured.mock.calls[0][1].map((message: any) => message.content).filter((text: string) => /^\d$/.test(text))).toEqual(expected);
});

test('a failed body save survives Back and a later metadata save includes the unacknowledged history', async () => {
  state.save.mockResolvedValue({ persisted: false, error: new Error('Storage quota') });
  await mount(); await select('A'); await send();
  expect(container.querySelector('.revision-save-warning')).not.toBeNull();
  expect(state.history[0].messages).toHaveLength(1);
  await click('button[title="Back to sessions"]');
  await select('A');
  expect(state.loadBody).toHaveBeenCalledTimes(1);
  expect(container.textContent).toContain('Done');
  state.save.mockImplementation(saveToHistory);
  await click('input[type="checkbox"]');
  const saved = state.history.find(value => value.id === 'A')!;
  expect(saved.isReadonly).toBe(true);
  expect(saved.messages.some(message => message.stateSnapshot?.content === 'Revised')).toBe(true);
  expect(state.save.mock.calls.at(-1)![0].changes.messages).toEqual(saved.messages);
  expect(container.querySelector('.revision-save-warning')).toBeNull();
  await click('button[title="Back to sessions"]'); await select('A');
  expect(state.loadBody).toHaveBeenCalledTimes(2);
  expect(container.textContent).toContain('Done');
});

test('retry saving keeps the failed history until its exact replacement is durable', async () => {
  state.save.mockResolvedValue({ persisted: false, error: new Error('Storage quota') });
  await mount(); await select('A'); await send();
  await click('button[title="Back to sessions"]');
  const failedAttempts = state.save.mock.calls.length;
  state.save.mockImplementation(saveToHistory);
  await click('.revision-save-warning button');
  expect(state.save).toHaveBeenCalledTimes(failedAttempts + 1);
  expect(state.history[0].messages.some(message => message.stateSnapshot?.content === 'Revised')).toBe(true);
  expect(container.querySelector('.revision-save-warning')).toBeNull();
});

test('rapid edits retain one active save and one latest pending history', async () => {
  let finish!: (value: { persisted: boolean }) => void;
  state.save.mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
  await mount(); await select('A'); await send();
  for (let index = 0; index < 21; index++) await click('input[type="checkbox"]');
  expect(state.save).toHaveBeenCalledTimes(1);
  await click('button[title="Back to sessions"]'); await select('A');
  expect(state.loadBody).toHaveBeenCalledTimes(1);
  expect(container.textContent).toContain('Done');
  await act(async () => { finish({ persisted: true }); });
  expect(state.save).toHaveBeenCalledTimes(2);
  expect(state.history[0].isReadonly).toBe(true);
  expect(state.history[0].messages.some(message => message.stateSnapshot?.content === 'Revised')).toBe(true);
});

test('deleting a session while its body loads cannot reopen the deleted session', async () => {
  let finish!: (value: { writable: boolean; value: ReviseSession }) => void;
  state.loadBody.mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
  await mount(); await select('A');
  expect(container.textContent).toContain('Loading selected history');
  await click('.session-item .danger_button');
  await act(async () => { finish({ writable: true, value: session('A') }); });
  expect(container.querySelector('.revise-session-manager')).not.toBeNull();
  expect(container.textContent).not.toContain('Session A');
  expect(container.textContent).not.toContain('Loading selected history');
  expect(state.history.map(value => value.id)).toEqual(['B']);
});

test('deleting history during an Attach load cannot create a recovered copy afterward', async () => {
  const replacement = { ...entry, _wircRevisionId: 'replacement-lifetime' };
  let finish!: (value: { writable: boolean; value: ReviseSession }) => void;
  state.loadBody.mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
  await mount('Replacement', { target: { type: 'entry', worldName: 'Book', entry: replacement }, initialState: replacement });
  await click('button[title="Attach a copy of verified history"]');
  await click('.unverified-session-item .danger_button');
  await act(async () => { finish({ writable: true, value: session('A') }); });
  expect(state.save).toHaveBeenCalledTimes(1);
  expect(state.save.mock.calls[0][0].type).toBe('delete');
  expect(state.history.map(value => value.id)).toEqual(['B']);
  expect(container.querySelector('.revise-session-manager')).not.toBeNull();
});

test('retrying an unavailable store shares one header reload across rapid clicks', async () => {
  state.load.mockResolvedValueOnce({ writable: false, value: state.history.map(revisionSessionHeader) });
  let finish!: (value: { writable: boolean; value: ReviseSession[] }) => void;
  state.load.mockImplementationOnce(() => new Promise(resolve => { finish = resolve; }));
  await mount(); await select('A'); await send();
  expect(state.save).not.toHaveBeenCalled();
  await click('button[title="Back to sessions"]');
  await act(async () => {
    const retry = container.querySelector<HTMLButtonElement>('.revision-save-warning button')!;
    retry.click(); retry.click();
  });
  expect(state.load).toHaveBeenCalledTimes(2);
  expect(container.querySelector<HTMLButtonElement>('.revision-save-warning button')?.disabled).toBe(true);
  await act(async () => { finish({ writable: true, value: state.history.map(revisionSessionHeader) }); });
  expect(state.save).toHaveBeenCalledTimes(1);
  expect(state.history[0].messages.some(message => message.stateSnapshot?.content === 'Revised')).toBe(true);
  expect(container.querySelector('.revision-save-warning')).toBeNull();
});
