import { describe, test, expect } from 'vitest';
import { parseResponse } from '../parsers.js';
import { parseXMLOwn } from '../xml.js';

const mockSchema = {
  type: 'object',
  properties: {
    justification: { type: 'string' },
    add: {
      type: 'array',
      items: {
        type: 'object',
        required: ['worldName', 'name'],
        properties: {
          worldName: { type: 'string' },
          name: { type: 'string' },
          triggers: { type: 'array', items: { type: 'string' } },
          content: { type: 'string' },
        },
      },
    },
    remove: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          worldName: { type: 'string' },
          name: { type: 'string' },
        },
      },
    },
    // Simple array of strings for testing simpler structures
    keywords: {
      type: 'array',
      items: { type: 'string' },
    },
  },
};

describe('parseResponse', () => {
  describe('JSON format', () => {
    test('parses simple JSON object', () => {
      const input = '{"key": "value"}';
      const result = parseResponse(input, 'json');
      expect(result).toEqual({ key: 'value' });
    });

    test('parses JSON inside markdown code blocks', () => {
      const input = 'Here is the data:\n```json\n{"key": "value"}\n```';
      const result = parseResponse(input, 'json');
      expect(result).toEqual({ key: 'value' });
    });

    test('throws error on invalid JSON', () => {
      const input = '{"key": "value"'; // Missing closing brace
      expect(() => parseResponse(input, 'json')).toThrow();
    });
  });

  describe('XML format with Schema Enforcement', () => {
    test('parses simple XML', () => {
      const input = '<root><justification>Test</justification></root>';
      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;
      expect(result.justification).toBe('Test');
    });

    test('handles empty self-closing tags for arrays (fixes empty string bug)', () => {
      // LLM often outputs <add/> or <keywords/> which parses to "" instead of []
      const input = `
        <root>
          <justification>None</justification>
          <add/>
          <keywords/>
        </root>
      `;

      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;

      expect(Array.isArray(result.add)).toBe(true);
      expect(result.add).toHaveLength(0);

      expect(Array.isArray(result.keywords)).toBe(true);
      expect(result.keywords).toHaveLength(0);
    });

    test('unwraps incorrectly nested "item" tags (fixes wrapping bug)', () => {
      // LLM output: <add><item><worldName>...</worldName>...</item></add>
      // Schema expects: add: [{ worldName: ... }]
      const input = `
        <root>
          <add>
            <item>
              <worldName>Earth</worldName>
              <name>Entry1</name>
              <content>Content1</content>
            </item>
          </add>
        </root>
      `;

      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;

      expect(Array.isArray(result.add)).toBe(true);
      expect(result.add).toHaveLength(1);
      // It should have stripped the "item" wrapper
      expect(result.add[0]).toHaveProperty('worldName', 'Earth');
      expect(result.add[0]).not.toHaveProperty('item');
    });

    test('unwraps multiple incorrectly nested items', () => {
      const input = `
        <root>
          <add>
            <item>
              <worldName>W1</worldName>
              <name>N1</name>
            </item>
            <item>
              <worldName>W2</worldName>
              <name>N2</name>
            </item>
          </add>
        </root>
      `;

      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;

      expect(result.add).toHaveLength(2);
      expect(result.add[0].name).toBe('N1');
      expect(result.add[1].name).toBe('N2');
    });

    test('handles mixed correctly and incorrectly formatted fields', () => {
      // <add> is wrapped in <item>, <remove> is correct
      const input = `
        <root>
          <add>
            <item>
              <worldName>W1</worldName>
              <name>N1</name>
            </item>
          </add>
          <remove>
            <worldName>W2</worldName>
            <name>N2</name>
          </remove>
        </root>
      `;

      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;

      // Add should be unwrapped
      expect(result.add[0].worldName).toBe('W1');

      // Remove should be coerced to array normally
      expect(result.remove[0].worldName).toBe('W2');
    });

    test('coerces single object to array', () => {
      const input = `
        <root>
          <add>
            <worldName>W1</worldName>
            <name>N1</name>
          </add>
        </root>
      `;
      const result = parseResponse(input, 'xml', { schema: mockSchema }) as any;
      expect(Array.isArray(result.add)).toBe(true);
      expect(result.add[0].name).toBe('N1');
    });
  });
});

describe('parseXMLOwn', () => {
  const baseXml = `
<lorebooks>
  <entry>
    <worldName>Earth</worldName>
    <name>Capital</name>
    <triggers>capital,city</triggers>
    <content>Paris is the capital.</content>
  </entry>
</lorebooks>`;

  test('parses plain lorebooks XML', () => {
    const result = parseXMLOwn(baseXml);
    expect(result.Earth).toHaveLength(1);
    expect(result.Earth[0].comment).toBe('Capital');
    expect(result.Earth[0].content).toBe('Paris is the capital.');
  });

  test('strips <think> blocks emitted by reasoning models', () => {
    const input = `<think>Let me consider what to add...
The user wants a city entry.</think>\n${baseXml}`;
    const result = parseXMLOwn(input);
    expect(result.Earth).toHaveLength(1);
    expect(result.Earth[0].comment).toBe('Capital');
  });

  test('strips <thinking> blocks', () => {
    const input = `<thinking>planning...</thinking>${baseXml}`;
    const result = parseXMLOwn(input);
    expect(result.Earth).toHaveLength(1);
  });

  test('strips <reasoning> blocks', () => {
    const input = `<reasoning>step 1 ... step 2</reasoning>${baseXml}`;
    const result = parseXMLOwn(input);
    expect(result.Earth).toHaveLength(1);
  });

  test('extracts <lorebooks> region from surrounding prose', () => {
    const input = `Sure! Here are my suggestions:\n\n${baseXml}\n\nLet me know if you want more.`;
    const result = parseXMLOwn(input);
    expect(result.Earth).toHaveLength(1);
  });

  test('tolerates singular <lorebook> root', () => {
    const input = `
<lorebook>
  <entry>
    <worldName>Mars</worldName>
    <name>Olympus</name>
    <triggers>olympus,mons</triggers>
    <content>Largest volcano.</content>
  </entry>
</lorebook>`;
    const result = parseXMLOwn(input);
    expect(result.Mars).toHaveLength(1);
    expect(result.Mars[0].comment).toBe('Olympus');
  });

  test('strips ```xml code fences', () => {
    const input = '```xml\n' + baseXml + '\n```';
    const result = parseXMLOwn(input);
    expect(result.Earth).toHaveLength(1);
  });

  test('preserves optional activation and position fields', () => {
    const input = `
<lorebooks>
  <entry>
    <worldName>Earth</worldName>
    <id>42</id>
    <name>Depth Entry</name>
    <triggers>depth,entry</triggers>
    <constant>true</constant>
    <vectorized>false</vectorized>
    <order>7</order>
    <position>4</position>
    <depth>3</depth>
    <role>2</role>
    <content>At-depth content.</content>
  </entry>
</lorebooks>`;

    const result = parseXMLOwn(input);
    expect(result.Earth[0]).toMatchObject({
      uid: 42,
      constant: true,
      vectorized: false,
      order: 7,
      position: 4,
      depth: 3,
      role: 2,
    });
  });

  test('normalizes legacy role aliases while parsing XML', () => {
    const input = `
<lorebooks>
  <entry>
    <worldName>Earth</worldName>
    <name>Alias Entry</name>
    <triggers>alias</triggers>
    <position>4</position>
    <roleAtDepth>1</roleAtDepth>
    <content>Alias content.</content>
  </entry>
  <entry>
    <worldName>Earth</worldName>
    <name>Alias Entry Two</name>
    <triggers>alias-two</triggers>
    <position>4</position>
    <depth_role>2</depth_role>
    <content>Alias content two.</content>
  </entry>
</lorebooks>`;

    const result = parseXMLOwn(input);
    expect(result.Earth.map((entry) => entry.role)).toEqual([1, 2]);
    expect(result.Earth[0]).not.toHaveProperty('roleAtDepth');
    expect(result.Earth[1]).not.toHaveProperty('depth_role');
  });

  test('does not crash when a single entry lacks a <content> tag', () => {
    const input = `
<lorebooks>
  <entry>
    <worldName>Earth</worldName>
    <name>Bare</name>
    <triggers>bare</triggers>
  </entry>
</lorebooks>`;
    expect(() => parseXMLOwn(input)).not.toThrow();
    const result = parseXMLOwn(input);
    expect(result.Earth).toHaveLength(1);
    expect(result.Earth[0].comment).toBe('Bare');
    // Missing <content> should default to empty string, not undefined
    expect(result.Earth[0].content).toBe('');
  });

  test('returns empty record when <lorebooks> has no entries', () => {
    const result = parseXMLOwn('<lorebooks></lorebooks>');
    expect(result).toEqual({});
  });
});
