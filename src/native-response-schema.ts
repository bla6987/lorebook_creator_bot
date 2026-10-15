/** Adapt optional fields to the required, nullable fields used by strict native output. */
export function toNativeResponseSchema(schema: any): any {
  if (!schema || typeof schema !== 'object') return schema;
  if (Array.isArray(schema)) return schema.map(toNativeResponseSchema);

  const result = { ...schema };
  if (schema.properties) {
    const required = new Set<string>(schema.required ?? []);
    result.properties = Object.fromEntries(
      Object.entries(schema.properties).map(([key, property]) => {
        const converted = toNativeResponseSchema(property);
        return [key, required.has(key) ? converted : { anyOf: [converted, { type: 'null' }] }];
      }),
    );
    result.required = Object.keys(schema.properties);
    result.additionalProperties = false;
  }
  if (schema.items) result.items = toNativeResponseSchema(schema.items);
  for (const key of ['anyOf', 'oneOf', 'allOf']) {
    if (schema[key]) result[key] = schema[key].map(toNativeResponseSchema);
  }
  if (schema.$defs) {
    result.$defs = Object.fromEntries(
      Object.entries(schema.$defs).map(([key, value]) => [key, toNativeResponseSchema(value)]),
    );
  }
  return result;
}

const acceptsNull = (schema: any): boolean =>
  schema?.type === 'null' ||
  (Array.isArray(schema?.type) && schema.type.includes('null')) ||
  (schema?.anyOf ?? schema?.oneOf ?? []).some(acceptsNull);

/** Restore omitted-field semantics before validating with the original Zod schema. */
export function normalizeNativeResponse(value: any, schema: any): any {
  if (Array.isArray(value)) return value.map((item) => normalizeNativeResponse(item, schema?.items));
  if (!value || typeof value !== 'object' || !schema?.properties) return value;

  const required = new Set<string>(schema.required ?? []);
  return Object.fromEntries(
    Object.entries(value)
      .filter(([key, item]) => {
        const property = schema.properties[key];
        return !(property && !required.has(key) && item === null && !acceptsNull(property));
      })
      .map(([key, item]) => [key, normalizeNativeResponse(item, schema.properties[key])]),
  );
}
