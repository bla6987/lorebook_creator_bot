import { describe, expect, test } from 'vitest';
import { z } from 'zod';
import { EntryRevisionResponseSchema, GlobalRevisionResponseSchema } from '../revise-types.js';
import { normalizeNativeResponse, toNativeResponseSchema } from '../native-response-schema.js';

function expectStrictObjects(schema: any): void {
  if (!schema || typeof schema !== 'object') return;
  if (schema.type === 'object') {
    expect(schema.required).toEqual(Object.keys(schema.properties));
    expect(schema.additionalProperties).toBe(false);
  }
  for (const child of Object.values(schema)) {
    if (Array.isArray(child)) child.forEach(expectStrictObjects);
    else if (child && typeof child === 'object') expectStrictObjects(child);
  }
}

describe('native response schema adaptation', () => {
  test.each([EntryRevisionResponseSchema, GlobalRevisionResponseSchema])(
    'requires every field in every nested object without changing the manual schema',
    (schema) => {
      const original: any = z.toJSONSchema(schema);
      const before = structuredClone(original);
      expectStrictObjects(toNativeResponseSchema(original));
      expect(original).toEqual(before);
    },
  );

  test('restores optional operation semantics while preserving explicit empty values', () => {
    const original = z.toJSONSchema(GlobalRevisionResponseSchema);
    const normalized = normalizeNativeResponse({
      justification: 'Update one entry.', add: null, remove: null,
      change: [{ worldName: 'Earth', originalName: 'Entry', newName: null, triggers: [], content: '' }],
    }, original);
    expect(GlobalRevisionResponseSchema.parse(normalized)).toEqual({
      justification: 'Update one entry.',
      change: [{ worldName: 'Earth', originalName: 'Entry', triggers: [], content: '' }],
    });
    const native: any = toNativeResponseSchema(original);
    expect(native.properties.change.anyOf[1]).toEqual({ type: 'null' });
    expect(native.properties.change.anyOf[0].items.properties.content.anyOf[1]).toEqual({ type: 'null' });
  });

  test('preserves null when the original schema explicitly accepts it', () => {
    const schema = z.object({ nullable: z.string().nullable().optional(), required: z.string() });
    const normalized = normalizeNativeResponse({ nullable: null, required: null }, z.toJSONSchema(schema));
    expect(normalized).toEqual({ nullable: null, required: null });
    expect(schema.safeParse(normalized).success).toBe(false);
  });
});
