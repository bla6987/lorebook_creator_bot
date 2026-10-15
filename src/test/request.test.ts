import { beforeEach, describe, expect, test, vi } from 'vitest';
import { GlobalRevisionResponseSchema } from '../revise-types.js';

const mock = vi.hoisted(() => ({ response: {} as any, generate: vi.fn() }));
vi.mock('sillytavern-utils-lib', () => ({
  Generator: class { generateRequest = mock.generate; },
}));
vi.mock('sillytavern-utils-lib/config', () => ({ st_echo: vi.fn() }));
vi.mock('../settings.js', () => ({ settingsManager: { getSettings: () => ({
  prompts: { reviseJsonPrompt: { content: '{{schema}}' }, reviseXmlPrompt: { content: '{{example_response}}' } },
}) } }));
vi.mock('../api-settings.js', () => ({
  withRuntimeConnectionProfile: async (id: string, callback: (id: string) => Promise<unknown>) => callback(id),
}));
import { makeStructuredRequest } from '../request.js';

describe('structured request wire formats', () => {
  beforeEach(() => {
    mock.generate.mockReset();
    mock.generate.mockImplementation(async (_params, options) => {
      options.onFinish('id', { content: mock.response });
    });
  });

  test('sends a strict native schema and validates normalized optional nulls', async () => {
    mock.response = JSON.stringify({ justification: 'No changes.', add: null, change: null, remove: null });
    const result = await makeStructuredRequest('p', [], GlobalRevisionResponseSchema, 'Global', 'native', 1000);
    expect(result).toEqual({ justification: 'No changes.' });
    const wire = mock.generate.mock.calls[0][0].overridePayload.json_schema;
    expect(wire.strict).toBe(true);
    expect(wire.value.required).toEqual(['justification', 'add', 'change', 'remove']);
    expect(wire.value.properties.change.anyOf[0].items.required)
      .toEqual(['worldName', 'originalName', 'newName', 'triggers', 'content']);
  });

  test('continues accepting omitted optional operations in manual JSON mode', async () => {
    mock.response = '```json\n{"justification":"No changes."}\n```';
    await expect(makeStructuredRequest('p', [], GlobalRevisionResponseSchema, 'Global', 'json', 1000))
      .resolves.toEqual({ justification: 'No changes.' });
    expect(mock.generate.mock.calls[0][0].overridePayload).toEqual({});
    const instruction = mock.generate.mock.calls[0][0].prompt[0].content;
    expect(JSON.parse(instruction).required).toEqual(['justification']);
  });

  test('validates wrapped XML operations and their primitive trigger arrays', async () => {
    mock.response = `<root><justification>Added an entry.</justification><add><item>
      <worldName>00123</worldName><name>Entry</name>
      <triggers><item>00123</item><item>second</item></triggers><content>00123</content>
      </item></add></root>`;
    await expect(makeStructuredRequest('p', [], GlobalRevisionResponseSchema, 'Global', 'xml', 1000))
      .resolves.toEqual({ justification: 'Added an entry.', add: [{
        worldName: '00123', name: 'Entry', triggers: ['00123', 'second'], content: '00123',
      }] });
  });

  test('still rejects null in required fields after native normalization', async () => {
    mock.response = JSON.stringify({ justification: null, add: null, change: null, remove: null });
    await expect(makeStructuredRequest('p', [], GlobalRevisionResponseSchema, 'Global', 'native', 1000))
      .rejects.toThrow('failed schema validation');
  });
});
