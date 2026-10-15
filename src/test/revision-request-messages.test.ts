import { afterEach, beforeAll, beforeEach, expect, test, vi } from 'vitest';
import * as React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import { act, createElement, type ComponentType } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import * as Handlebars from 'handlebars';
import * as editorUtils from '../components/lorebookEditorUtils.js';
import type { ReviseSession } from '../revise-types.js';
import type { WIEntry } from 'sillytavern-utils-lib/types/world-info';

const entry = { uid: 1, comment: 'Entry', content: 'Current content', key: ['entry'],
  privateSnapshotMarker: 'LOCAL SNAPSHOT ONLY',
} as unknown as WIEntry;
const toolCalls = [{ id: 'call_lookup', type: 'function', function: { name: 'lookup', arguments: '{}' } }];
const hostHistory = [
  { role: 'system', content: '<|im_start|>system\nStory<|im_end|>\n', ignoreInstruct: true,
    source: { mes: 'RAW CHAT SOURCE ONLY' } },
  { role: 'assistant', content: 'Checking.', name: 'Character', tool_calls: toolCalls,
    signature: 'provider-signature', reasoning: 'Tool reasoning' },
  { role: 'tool', content: 'Lookup result', tool_call_id: 'call_lookup', name: 'lookup' },
];
const state = { input: null as any, plain: vi.fn(), structured: vi.fn(), buildPrompt: vi.fn() };
let Chat: ComponentType<any>, root: Root, container: HTMLDivElement;
function compile(file: string, modules: Record<string, any>) {
  const code = ts.transpileModule(readFileSync(file, 'utf8'), {
    compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS },
  }).outputText;
  const exports: Record<string, any> = {};
  new Function('require', 'exports', code)((name: string) => {
    if (!(name in modules)) throw new Error(`Unmocked host dependency: ${name}`);
    return modules[name];
  }, exports);
  return exports;
}
beforeAll(() => {
  vi.stubGlobal('IS_REACT_ACT_ENVIRONMENT', true);
  HTMLElement.prototype.scrollIntoView = () => {};
  vi.stubGlobal('SillyTavern', { getContext: () => ({
    chat: [], CONNECT_API_MAP: { test: { selected: 'openai' } }, substituteParams: (text: string) => text,
  }) });
  const modules: Record<string, any> = {
    react: React, 'react/jsx-runtime': jsxRuntime, handlebars: Handlebars,
    'sillytavern-utils-lib/components/react': {
      STButton: (props: any) => createElement('button', props),
      STTextarea: (props: any) => { state.input = props; return createElement('textarea', props); },
      STInput: (props: any) => createElement('input', props), Popup: () => null,
    },
    '../settings.js': { settingsManager: { getSettings: () => ({ profileId: 'profile', maxResponseToken: 100, prompts: {} }) } },
    'sillytavern-utils-lib/config': { st_echo: vi.fn(), this_chid: 1, selected_group: null },
    '../api-settings.js': { getRuntimeConnectionProfile: () => ({ api: 'test' }) },
    './lorebookEditorUtils.js': editorUtils,
    '../revise-types.js': {
      EntryRevisionResponseSchema: {}, GlobalRevisionResponseSchema: {},
      REVISE_SCHEMA_NAME: { ENTRY: 'entry', GLOBAL: 'global' }, CHAT_HISTORY_PLACEHOLDER_ID: 'placeholder',
    },
    '../request.js': { makeStructuredRequest: state.structured, makePlainRequest: state.plain },
    'sillytavern-utils-lib': { buildPrompt: state.buildPrompt },
    'sillytavern-utils-lib/types/popup': { POPUP_TYPE: {} },
  };
  for (const name of ['CompareStatePopup', 'CurrentStatePopup', 'GlobalStatePopup']) {
    modules[`./${name}.js`] = { [name]: () => null };
  }
  Chat = compile('src/components/ReviseSessionChat.tsx', modules).ReviseSessionChat;
});
beforeEach(() => {
  state.plain.mockReset().mockResolvedValue('Discussion');
  state.structured.mockReset();
  state.buildPrompt.mockReset().mockResolvedValue({ result: hostHistory });
  container = document.createElement('div'); document.body.append(container); root = createRoot(container);
});
afterEach(async () => { await act(async () => root.unmount()); container.remove(); });

test.each(['readonly', 'entry', 'global'] as const)(
  '%s requests preserve host protocol metadata without sending local snapshots or raw source',
  async (mode) => {
    const initialState = mode === 'global' ? { Book: [entry] } : entry;
    state.structured.mockResolvedValue(mode === 'global'
      ? { justification: 'No change.' }
      : { justification: 'Updated.', name: 'Entry', triggers: ['entry'], content: 'Updated' });
    const session: ReviseSession = {
      id: 'session', name: 'Session', type: mode === 'global' ? 'global' : 'entry',
      worldName: 'Book', profileId: 'profile', promptEngineeringMode: 'native',
      createdAt: '2026-10-15', context: { mainContextTemplatePreset: 'Default' },
      isReadonly: mode === 'readonly', messages: [
        { id: 'placeholder', role: 'system', content: 'Chat placeholder', isInitial: true },
        { id: 'snapshot', role: 'assistant', content: 'Earlier reply', stateSnapshot: initialState, isStateUpdate: true },
      ],
    };
    const onUpdate = vi.fn();
    await act(async () => root.render(createElement(Chat, {
      session, initialState, onSessionUpdate: onUpdate, onBack: () => {}, onApply: () => {}, chatContextOptions: {},
    })));
    await act(async () => state.input.onChange({ target: { value: 'Discuss this' } }));
    await act(async () => container.querySelector<HTMLButtonElement>('.chat-input-area button')!.click());
    const request = mode === 'readonly' ? state.plain : state.structured;
    expect(request).toHaveBeenCalledOnce();
    const outgoing = request.mock.calls[0][1] as Record<string, any>[];
    expect(outgoing.find(message => message.ignoreInstruct)).toEqual({
      role: 'system', content: hostHistory[0].content, ignoreInstruct: true,
    });
    expect(outgoing.find(message => message.tool_calls)).toEqual(hostHistory[1]);
    expect(outgoing.find(message => message.role === 'tool')).toEqual(hostHistory[2]);
    for (const message of outgoing) {
      for (const field of ['id', 'isInitial', 'isStateUpdate', 'stateSnapshot', 'source']) {
        expect(message).not.toHaveProperty(field);
      }
    }
    expect(JSON.stringify(outgoing)).not.toContain('LOCAL SNAPSHOT ONLY');
    expect(JSON.stringify(outgoing)).not.toContain('RAW CHAT SOURCE ONLY');
    expect(onUpdate.mock.calls[0][1].messages.find((message: any) => message.id === 'snapshot').stateSnapshot)
      .toEqual(initialState);
    expect(hostHistory[0].source).toEqual({ mes: 'RAW CHAT SOURCE ONLY' });
  },
);
