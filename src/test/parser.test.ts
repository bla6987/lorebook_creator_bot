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

describe('XML response regressions', () => {
  test('parses the actual generated entry example without corrupting its trigger array', async () => {
    const { z } = await import('zod');
    const { EntryRevisionResponseSchema } = await import('../revise-types.js');
    const { schemaToExample } = await import('../schema-to-example.js');
    const schema = z.toJSONSchema(EntryRevisionResponseSchema);
    const result = parseResponse(schemaToExample(schema, 'xml'), 'xml', { schema });
    expect(EntryRevisionResponseSchema.parse(result).triggers).toEqual(['string']);
  });

  test('unwraps one or multiple primitive items and distinguishes empty arrays from empty items', () => {
    const schema = { type: 'object', properties: { triggers: { type: 'array', items: { type: 'string' } } } };
    expect(parseResponse('<root><triggers><item>00123</item><item>second</item></triggers></root>', 'xml', { schema }))
      .toEqual({ triggers: ['00123', 'second'] });
    expect(parseResponse('<root><triggers><item/></triggers></root>', 'xml', { schema }))
      .toEqual({ triggers: [''] });
    expect(parseResponse('<root><triggers/></root>', 'xml', { schema })).toEqual({ triggers: [] });
    expect(() => parseResponse('<root><triggers><unexpected>bad</unexpected></triggers></root>', 'xml', { schema }))
      .toThrow('Expected text items');
  });

  test('round-trips markup, entities, and numeric text through both XML serializers', async () => {
    const { getFullXML, getPrefilledXML } = await import('../xml.js');
    const { getFull, getPrefilled } = await import('../parsers.js');
    const entry = { uid: 7, key: ['00123', '<tag>', 'A & B'], keysecondary: [],
      content: 'A <b>bold</b> entry & literal &amp; entity.', comment: '<name> & "quoted"', disable: false };
    const world = '00123 <world> & more';
    for (const serialized of [getFullXML(world, entry), getFull(world, entry as any, 'xml')]) {
      const parsed = parseXMLOwn(serialized)[world][0];
      expect(parsed.content).toBe(entry.content);
      expect(parsed.comment).toBe(entry.comment);
      expect(parsed.key).toEqual(entry.key);
    }
    for (const prefilled of [getPrefilledXML(world, entry), getPrefilled(world, entry as any, 'xml')]) {
      const parsed = parseXMLOwn(' Continued.</content></entry></lorebooks>', { previousContent: prefilled })[world][0];
      expect(parsed.content).toBe(`${entry.content} Continued.`);
    }
    const numeric = { ...entry, key: ['00123'], content: '00123', comment: '00123' };
    expect(parseXMLOwn(getFullXML('00123', numeric))['00123'][0]).toMatchObject({
      key: ['00123'], content: '00123', comment: '00123',
    });
  });

  test('accepts CDATA markup and rejects unexpected nested objects instead of erasing text', () => {
    const prefix = '<lorebooks><entry><worldName>Earth</worldName><name>Entry</name><content>';
    const suffix = '</content></entry></lorebooks>';
    expect(parseXMLOwn(`${prefix}<![CDATA[A <b>bold</b> entry]]>${suffix}`).Earth[0].content)
      .toBe('A <b>bold</b> entry');
    expect(() => parseXMLOwn(`${prefix}A <b>bold</b> entry${suffix}`)).toThrow();
  });

  test('preserves literal reasoning tags in CDATA while discarding only the model preamble', () => {
    const literal = '<think>literal lore</think> <thinking>memory</thinking> <reasoning>reason</reasoning>';
    const document = `<lorebooks><entry><worldName>Earth</worldName><name>Entry</name>
      <content><![CDATA[${literal}]]></content></entry></lorebooks>`;
    const preamble = `<think>Plan with an example: <lorebooks><entry>not the answer</entry></lorebooks></think>
      <reasoning>Now produce the actual answer.</reasoning>`;
    expect(parseXMLOwn(document).Earth[0].content).toBe(literal);
    expect(parseXMLOwn(`${preamble}${document}`).Earth[0].content).toBe(literal);
    const split = document.indexOf(literal);
    expect(parseXMLOwn(document.slice(split), { previousContent: document.slice(0, split) }).Earth[0].content)
      .toBe(literal);
  });

  test('removes enclosing response fences while preserving literal code fences in lore text', async () => {
    const { getFullXML, getPrefilledXML } = await import('../xml.js');
    const literal = 'Example:\n```xml\n<literal>Keep this</literal>\n```\nEnd.';
    const entry = { uid: 7, key: ['trigger'], keysecondary: [], comment: 'Entry', content: literal, disable: false };
    const document = getFullXML('Earth', entry);
    expect(parseXMLOwn(document).Earth[0].content).toBe(literal);
    expect(parseXMLOwn('```xml\n' + document + '\n```').Earth[0].content).toBe(literal);
    expect(parseXMLOwn('<think>Planning...</think>\n```xml\n' + document + '\n```').Earth[0].content)
      .toBe(literal);
    expect(parseXMLOwn('```xml\n<think>Planning...</think>\n' + document + '\n```').Earth[0].content)
      .toBe(literal);
    expect(parseXMLOwn('```xml\n continued</content></entry></lorebooks>\n```', {
      previousContent: getPrefilledXML('Earth', entry),
    }).Earth[0].content).toBe(literal + ' continued');
    const cdata = `<lorebooks><entry><worldName>Earth</worldName><name>Entry</name><content><![CDATA[${literal}]]></content></entry></lorebooks>`;
    expect(parseXMLOwn(cdata).Earth[0].content).toBe(literal);
  });

  test('rejects a truncated second entry even when the first entry is complete', () => {
    const complete = '<lorebooks><entry><worldName>Earth</worldName><name>Complete</name><content>Fine</content></entry>';
    expect(() => parseXMLOwn(`${complete}<entry><worldName>Earth</worldName><name>Truncated</name><content>Cut off`))
      .toThrow('Model response is not valid XML');
    expect(() => parseXMLOwn(`${complete}</lorebooks>`)).not.toThrow();
  });
});
