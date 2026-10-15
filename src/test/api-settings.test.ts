import { beforeEach, describe, expect, test, vi } from 'vitest';
const mock = vi.hoisted(() => ({
  profiles: [] as any[], presets: new Map<string, any>(), savePreset: vi.fn(), saveSettings: vi.fn(), emit: vi.fn(),
  sanitize: vi.fn(), fetch: vi.fn(), presetList: vi.fn(),
}));
vi.mock('sillytavern-utils-lib/config', () => ({ st_echo: vi.fn() }));

beforeEach(() => {
  vi.resetModules();
  mock.profiles.length = 0;
  mock.presets.clear();
  mock.presetList.mockReset().mockImplementation(() => ({ preset_names: Object.fromEntries(
    [...mock.presets.keys()].map((name, index) => [name, index]),
  ) }));
  mock.savePreset.mockReset().mockImplementation(async (name, preset) => mock.presets.set(name, preset));
  mock.saveSettings.mockReset();
  mock.emit.mockReset();
  mock.sanitize.mockReset().mockImplementation((name) => name);
  mock.fetch.mockReset().mockImplementation(async (_url, options) => ({
    ok: true, json: async () => ({ fileName: mock.sanitize(JSON.parse(options.body).fileName) }),
  }));
  vi.stubGlobal('fetch', mock.fetch);
  vi.stubGlobal('SillyTavern', { getContext: () => ({
    extensionSettings: { connectionManager: { profiles: mock.profiles } },
    getPresetManager: () => ({
      getCompletionPresetByName: (name: string) => mock.presets.get(name), savePreset: mock.savePreset,
      getPresetList: mock.presetList,
    }),
    uuidv4: () => 'new-id', saveSettingsDebounced: mock.saveSettings,
    getRequestHeaders: () => ({ 'X-CSRF-Token': 'test-token' }),
    eventSource: { emit: mock.emit }, eventTypes: { CONNECTION_PROFILE_CREATED: 'created' },
  }) });
});

describe('profile creation', () => {
  test.each(['array', 'map'])('rejects case aliases in the host %s name collection', async (shape) => {
    const saved = { temperature: 0.9 };
    mock.presets.set('Independent preset', saved);
    mock.presetList.mockImplementation(() => ({ preset_names:
      shape === 'array' ? ['Independent preset'] : { 'Independent preset': 0 },
    }));
    const { createConnectionProfileFromDraft } = await import('../api-settings.js');
    await expect(createConnectionProfileFromDraft({ id: 'source' } as any, { temperature: 0.1 }, 'openai', 'independent preset'))
      .rejects.toThrow('already exists');
    expect(mock.presets.get('Independent preset')).toBe(saved);
    expect(mock.savePreset).not.toHaveBeenCalled();
    expect(mock.profiles).toEqual([]);
  });

  test('rejects Unicode normalization aliases and fails closed without a host name collection', async () => {
    const { createConnectionProfileFromDraft } = await import('../api-settings.js');
    mock.presets.set('Café', {});
    await expect(createConnectionProfileFromDraft({ id: 'source' } as any, {}, 'openai', 'Cafe\u0301'))
      .rejects.toThrow('already exists');
    mock.presetList.mockReturnValue(undefined);
    await expect(createConnectionProfileFromDraft({ id: 'source' } as any, {}, 'openai', 'New profile'))
      .rejects.toThrow('Could not verify existing preset names');
    expect(mock.savePreset).not.toHaveBeenCalled();
  });

  test.each([
    ['ß', 'ss'], ['ẞ', 'ss'], ['ß', 'ẞ'], ['Σ', 'ς'], ['σ', 'ς'], ['ſ', 'S'],
    ['ﬃ', 'ffi'], ['ΐ', 'ι\u0308\u0301'],
  ])('preserves the existing Unicode preset %s when its filename aliases %s', async (existing, requested) => {
    const saved = { temperature: 0.9 };
    mock.presets.set(existing, saved);
    const { createConnectionProfileFromDraft } = await import('../api-settings.js');
    await expect(createConnectionProfileFromDraft({ id: 'source' } as any, { temperature: 0.1 }, 'openai', requested))
      .rejects.toThrow('already exists');
    expect(mock.presets.get(existing)).toBe(saved);
    expect(mock.savePreset).not.toHaveBeenCalled();
    expect(mock.profiles).toEqual([]);
  });

  test('preserves distinct Unicode names when creating a profile', async () => {
    mock.presets.set('Café', { temperature: 0.9 });
    const { createConnectionProfileFromDraft } = await import('../api-settings.js');
    const result = await createConnectionProfileFromDraft({ id: 'source' } as any, {}, 'openai', '日本語');
    expect(result.name).toBe('日本語');
    expect(mock.savePreset).toHaveBeenCalledWith('日本語', {});
  });

  test('preserves an existing preset even when no profile shares its name', async () => {
    const { createConnectionProfileFromDraft } = await import('../api-settings.js');
    const saved = { temperature: 0.9 };
    mock.presets.set('Independent preset', saved);
    await expect(createConnectionProfileFromDraft({ id: 'source' } as any, { temperature: 0.1 }, 'openai', 'Independent preset'))
      .rejects.toThrow('A preset named "Independent preset" already exists');
    expect(mock.presets.get('Independent preset')).toBe(saved);
    expect(mock.savePreset).not.toHaveBeenCalled();
    expect(mock.profiles).toEqual([]);
    expect(mock.saveSettings).not.toHaveBeenCalled();
  });

  test('creates and links a distinct preset when the requested name is unused', async () => {
    const { createConnectionProfileFromDraft } = await import('../api-settings.js');
    const result = await createConnectionProfileFromDraft({ id: 'source', model: 'model' } as any, { temperature: 0.1 }, 'openai', ' New profile ');
    expect(result).toMatchObject({ id: 'new-id', name: 'New profile', preset: 'New profile', model: 'model' });
    expect(mock.presets.get('New profile')).toEqual({ temperature: 0.1 });
    expect(mock.profiles).toEqual([result]);
    expect(mock.fetch).toHaveBeenCalledWith('/api/files/sanitize-filename', expect.objectContaining({
      method: 'POST', headers: { 'X-CSRF-Token': 'test-token' }, body: JSON.stringify({ fileName: 'New profile' }),
    }));
  });

  test.each([
    ['A/B', 'AB'],
    ['CON', ''],
    ['A'.repeat(256), 'A'.repeat(255)],
    ['é'.repeat(128), 'é'.repeat(127)],
  ])('rejects a name changed by the host filename sanitizer before saving: %s', async (name, canonical) => {
    const { createConnectionProfileFromDraft } = await import('../api-settings.js');
    const existing = { temperature: 0.9 };
    mock.presets.set(canonical, existing);
    mock.sanitize.mockImplementation(() => canonical);
    await expect(createConnectionProfileFromDraft({ id: 'source' } as any, { temperature: 0.1 }, 'openai', name))
      .rejects.toThrow('not a valid preset filename');
    expect(mock.presets.get(canonical)).toBe(existing);
    expect(mock.savePreset).not.toHaveBeenCalled();
    expect(mock.profiles).toEqual([]);
    expect(mock.saveSettings).not.toHaveBeenCalled();
  });

  test('does not save anything when filename validation fails', async () => {
    const { createConnectionProfileFromDraft } = await import('../api-settings.js');
    mock.fetch.mockResolvedValue({ ok: false });
    await expect(createConnectionProfileFromDraft({ id: 'source' } as any, {}, 'openai', 'New profile'))
      .rejects.toThrow('Could not validate the preset filename');
    expect(mock.savePreset).not.toHaveBeenCalled();
    expect(mock.profiles).toEqual([]);
  });
});
