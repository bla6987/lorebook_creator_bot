import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';
import type { ConnectionProfile } from 'sillytavern-utils-lib/types/profiles';
import { st_echo } from 'sillytavern-utils-lib/config';
import {
  clearRuntimeConnectionProfiles,
  createConnectionProfileFromDraft,
  getConnectionProfiles,
  loadApiSettingsDraft,
  resolvePresetApiId,
  resolveSelectedApiGroup,
  saveConnectionProfile,
  saveResponsePreset,
  setRuntimeConnectionProfile,
} from '../api-settings.js';
import type { ApiSettingsDraft } from '../api-settings.js';
// @ts-ignore SillyTavern runtime module resolved from the built extension path.
import { model_list as chatCompletionModels } from '../../../../openai.js';
// @ts-ignore SillyTavern runtime module resolved from the built extension path.
import { openRouterModels as textCompletionOpenRouterModels } from '../../../../textgen-models.js';
// @ts-ignore SillyTavern runtime module resolved from the built extension path.
import { amount_gen, max_context } from '../../../../../script.js';

const context = SillyTavern.getContext();

interface ApiSettingsPanelProps {
  profileId: string;
  onProfileSelected: (profileId: string) => void;
}

const stringify = (value: unknown) => JSON.stringify(value ?? {}, null, 2);

const parseJson = <T,>(value: string, label: string): T => {
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    throw new Error(`${label} is not valid JSON: ${(error as Error).message}`);
  }
};

const getApiOptions = () =>
  Object.entries(context.CONNECT_API_MAP)
    .filter(([, config]: any) => config?.selected === 'openai' || config?.selected === 'textgenerationwebui')
    .sort(([a], [b]) => a.localeCompare(b));

const getModelValue = (profile: ConnectionProfile): string => profile.model ?? '';

interface ModelOption {
  value: string;
  label: string;
  group?: string;
}

interface OpenRouterModel {
  id: string;
  name?: string;
  context_length?: number;
  pricing?: {
    prompt?: string | number;
    completion?: string | number;
  };
}

const CHAT_MODEL_SELECTORS: Record<string, string> = {
  openai: '#model_openai_select',
  claude: '#model_claude_select',
  openrouter: '#model_openrouter_select',
  ai21: '#model_ai21_select',
  makersuite: '#model_google_select',
  vertexai: '#model_vertexai_select',
  mistralai: '#model_mistralai_select',
  cohere: '#model_cohere_select',
  perplexity: '#model_perplexity_select',
  groq: '#model_groq_select',
  siliconflow: '#model_siliconflow_select',
  minimax: '#model_minimax_select',
  electronhub: '#model_electronhub_select',
  chutes: '#model_chutes_select',
  nanogpt: '#model_nanogpt_select',
  deepseek: '#model_deepseek_select',
  aimlapi: '#model_aimlapi_select',
  xai: '#model_xai_select',
  pollinations: '#model_pollinations_select',
  moonshot: '#model_moonshot_select',
  fireworks: '#model_fireworks_select',
  cometapi: '#model_cometapi_select',
  zai: '#model_zai_select',
  workers_ai: '#model_workers_ai_select',
};

const TEXT_MODEL_SELECTORS: Record<string, string> = {
  mancer: '#mancer_model',
  togetherai: '#model_togetherai_select',
  openrouter: '#openrouter_model',
  infermaticai: '#model_infermaticai_select',
  dreamgen: '#model_dreamgen_select',
  featherless: '#featherless_model',
  vllm: '#vllm_model',
  aphrodite: '#aphrodite_model',
  llamacpp: '#llamacpp_model',
  ollama: '#ollama_model',
  tabby: '#tabby_model',
};

const getApiMap = (profile: ConnectionProfile): any =>
  profile.api ? (context.CONNECT_API_MAP[profile.api] as any) : undefined;

const isOpenRouterProfile = (profile: ConnectionProfile): boolean => {
  const apiMap = getApiMap(profile);
  return apiMap?.source === 'openrouter' || apiMap?.type === 'openrouter';
};

const getOpenRouterModelsForProfile = (profile: ConnectionProfile): OpenRouterModel[] => {
  const apiMap = getApiMap(profile);
  if (apiMap?.source === 'openrouter') return chatCompletionModels as OpenRouterModel[];
  if (apiMap?.type === 'openrouter') return textCompletionOpenRouterModels as OpenRouterModel[];
  return [];
};

const getOpenRouterModel = (profile: ConnectionProfile, modelId: string): OpenRouterModel | undefined =>
  getOpenRouterModelsForProfile(profile).find((model) => model.id === modelId);

const formatOpenRouterPrice = (model?: OpenRouterModel): string | undefined => {
  const promptPrice = Number(model?.pricing?.prompt);
  if (!Number.isFinite(promptPrice)) return undefined;
  if (promptPrice === 0) return 'Free';

  const tokensPerDollar = 1 / (1000 * promptPrice);
  const roundedTokens = (Math.round(tokensPerDollar * 1000) / 1000).toFixed(0);
  return `${roundedTokens}k t/$`;
};

const formatOpenRouterModelLabel = (model?: OpenRouterModel, fallbackLabel?: string): string | undefined => {
  if (!model) return undefined;

  const parts = [model.name || model.id];
  if (model.context_length) {
    parts.push(`${model.context_length} ctx`);
  }

  const price = formatOpenRouterPrice(model);
  if (price) {
    parts.push(price);
  }

  return parts.length > 1 ? parts.join(' | ') : fallbackLabel;
};

const firstFiniteNumber = (...values: unknown[]): number | undefined => {
  for (const value of values) {
    const numberValue = Number(value);
    if (Number.isFinite(numberValue)) return numberValue;
  }
  return undefined;
};

const calculateOpenRouterMaxPromptCost = (profile: ConnectionProfile, preset: Record<string, any>): string => {
  const model = getOpenRouterModel(profile, getModelValue(profile));
  if (!model?.pricing) return 'Unknown';

  const completionCost = Number(model.pricing.completion);
  const promptCost = Number(model.pricing.prompt);
  if (!Number.isFinite(completionCost) || !Number.isFinite(promptCost)) return 'Unknown';

  const apiMap = getApiMap(profile);
  const isChatCompletion = apiMap?.source === 'openrouter';
  const completionTokens = isChatCompletion
    ? firstFiniteNumber(preset.openai_max_tokens, context.chatCompletionSettings.openai_max_tokens)
    : firstFiniteNumber(preset.genamt, amount_gen);
  const contextTokens = isChatCompletion
    ? firstFiniteNumber(preset.openai_max_context, context.chatCompletionSettings.openai_max_context)
    : firstFiniteNumber(preset.max_length, max_context);

  if (completionTokens === undefined || contextTokens === undefined) return 'Unknown';

  const promptTokens = contextTokens - completionTokens;
  const totalCost = completionCost * completionTokens + promptCost * promptTokens;
  if (!Number.isFinite(totalCost)) return 'Unknown';

  let cost = `$${totalCost.toFixed(3)}`;
  if (isChatCompletion && (preset.enable_web_search ?? context.chatCompletionSettings.enable_web_search)) {
    cost += ' + $0.02';
  }
  return cost;
};

const extractSelectOptions = (selector?: string): ModelOption[] => {
  if (!selector) return [];
  const select = document.querySelector(selector);
  if (!(select instanceof HTMLSelectElement)) return [];

  const options: ModelOption[] = [];
  for (const option of Array.from(select.options)) {
    const value = option.value;
    const label = option.textContent?.trim() || value;
    if (!value || label.includes('-- Connect to the API --')) continue;
    const groupElement = option.parentElement;
    const group = groupElement instanceof HTMLOptGroupElement ? groupElement.label : undefined;
    options.push({ value, label, group });
  }
  return options;
};

const getModelSelector = (profile: ConnectionProfile): string | undefined => {
  const apiMap = profile.api ? (context.CONNECT_API_MAP[profile.api] as any) : undefined;
  if (!apiMap) return undefined;
  if (apiMap.selected === 'openai') return CHAT_MODEL_SELECTORS[apiMap.source];
  if (apiMap.selected === 'textgenerationwebui') return TEXT_MODEL_SELECTORS[apiMap.type];
  return undefined;
};

const getModelOptions = (profile: ConnectionProfile): ModelOption[] => {
  const options = extractSelectOptions(getModelSelector(profile));
  const currentModel = getModelValue(profile);
  const openRouterProfile = isOpenRouterProfile(profile);
  const enrichedOptions = openRouterProfile
    ? options.map((option) => ({
        ...option,
        label: formatOpenRouterModelLabel(getOpenRouterModel(profile, option.value), option.label) ?? option.label,
      }))
    : options;

  if (currentModel && !options.some((option) => option.value === currentModel)) {
    const label =
      (openRouterProfile && formatOpenRouterModelLabel(getOpenRouterModel(profile, currentModel))) ||
      `${currentModel} (current)`;
    return [{ value: currentModel, label }, ...enrichedOptions];
  }
  return enrichedOptions;
};

const groupModelOptions = (options: ModelOption[]) => {
  const ungrouped = options.filter((option) => !option.group);
  const grouped = new Map<string, ModelOption[]>();
  for (const option of options) {
    if (!option.group) continue;
    const group = grouped.get(option.group) ?? [];
    group.push(option);
    grouped.set(option.group, group);
  }
  return { ungrouped, grouped: Array.from(grouped.entries()) };
};

export const ApiSettingsPanel: FC<ApiSettingsPanelProps> = ({ profileId, onProfileSelected }) => {
  const [draft, setDraft] = useState<ApiSettingsDraft | undefined>(() => loadApiSettingsDraft(profileId));
  const [profileJson, setProfileJson] = useState(() => stringify(draft?.profile));
  const [presetJson, setPresetJson] = useState(() => stringify(draft?.preset));
  const [showRaw, setShowRaw] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [modelOptionsVersion, setModelOptionsVersion] = useState(0);

  const apiOptions = useMemo(() => getApiOptions(), []);
  const modelOptions = useMemo(
    () => (draft ? getModelOptions(draft.profile) : []),
    [draft?.profile.api, draft?.profile.model, modelOptionsVersion],
  );
  const groupedModelOptions = useMemo(() => groupModelOptions(modelOptions), [modelOptions]);

  const reloadDraft = useCallback((nextProfileId: string) => {
    const nextDraft = loadApiSettingsDraft(nextProfileId);
    setDraft(nextDraft);
    setProfileJson(stringify(nextDraft?.profile));
    setPresetJson(stringify(nextDraft?.preset));
  }, []);

  useEffect(() => {
    reloadDraft(profileId);
  }, [profileId, reloadDraft]);

  const updateDraftProfile = <K extends keyof ConnectionProfile>(key: K, value: ConnectionProfile[K]) => {
    setDraft((current) => {
      if (!current) return current;
      const profile = { ...current.profile, [key]: value };
      const nextDraft = {
        ...current,
        profile,
        presetApiId: resolvePresetApiId(profile),
        selectedApiGroup: resolveSelectedApiGroup(profile),
      };
      setRuntimeConnectionProfile(profile, profileId);
      setProfileJson(stringify(profile));
      return nextDraft;
    });
  };

  const handleLoadRawProfile = () => {
    if (!draft) return;
    try {
      const profile = parseJson<ConnectionProfile>(profileJson, 'Profile JSON');
      setRuntimeConnectionProfile(profile, profileId);
      setDraft((current) => {
        if (!current) return current;
        return {
          ...current,
          profile,
          presetApiId: resolvePresetApiId(profile),
          selectedApiGroup: resolveSelectedApiGroup(profile),
        };
      });
      st_echo('success', 'Profile JSON loaded into the editor draft.');
    } catch (error) {
      st_echo('error', (error as Error).message);
    }
  };

  const handleLoadRawPreset = () => {
    try {
      const preset = parseJson<Record<string, any>>(presetJson, 'Preset JSON');
      setDraft((current) => (current ? { ...current, preset } : current));
      st_echo('success', 'Preset JSON loaded into the editor draft.');
    } catch (error) {
      st_echo('error', (error as Error).message);
    }
  };

  const handleSaveProfile = async () => {
    if (!draft) return;
    setIsSaving(true);
    try {
      const profile = parseJson<ConnectionProfile>(profileJson, 'Profile JSON');
      const savedProfile = await saveConnectionProfile(profile);
      clearRuntimeConnectionProfiles(profileId);
      clearRuntimeConnectionProfiles(savedProfile.id);
      const nextDraft = loadApiSettingsDraft(savedProfile.id);
      setDraft(nextDraft);
      setProfileJson(stringify(nextDraft?.profile));
      setPresetJson(stringify(nextDraft?.preset));
      onProfileSelected(savedProfile.id);
      await st_echo('success', `Profile "${savedProfile.name}" saved.`);
    } catch (error) {
      await st_echo('error', (error as Error).message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleSavePreset = async () => {
    if (!draft) return;
    setIsSaving(true);
    try {
      const profile = parseJson<ConnectionProfile>(profileJson, 'Profile JSON');
      const preset = parseJson<Record<string, any>>(presetJson, 'Preset JSON');
      await saveResponsePreset(profile, preset, resolvePresetApiId(profile));
      setDraft((current) => (current ? { ...current, preset } : current));
      await st_echo('success', `Preset "${profile.preset}" saved.`);
    } catch (error) {
      await st_echo('error', (error as Error).message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCreateProfile = async () => {
    if (!draft) return;
    const baseName = draft.profile.name ? `${draft.profile.name} copy` : 'New WIR Profile';
    const name = await context.Popup.show.input('Create Connection Profile', 'Profile name:', baseName);
    if (!name || typeof name !== 'string') return;

    setIsSaving(true);
    try {
      const profile = parseJson<ConnectionProfile>(profileJson, 'Profile JSON');
      const preset = parseJson<Record<string, any>>(presetJson, 'Preset JSON');
      const newProfile = await createConnectionProfileFromDraft(profile, preset, resolvePresetApiId(profile), name);
      onProfileSelected(newProfile.id);
      reloadDraft(newProfile.id);
      await st_echo('success', `Profile "${newProfile.name}" created.`);
    } catch (error) {
      await st_echo('error', (error as Error).message);
    } finally {
      setIsSaving(false);
    }
  };

  if (!profileId) {
    return (
      <div className="api-settings-panel empty-state">
        <h3>API Settings</h3>
        <p>Select a connection profile to inspect and edit its API settings.</p>
      </div>
    );
  }

  if (!draft) {
    return (
      <div className="api-settings-panel empty-state">
        <h3>API Settings</h3>
        <p>The selected connection profile could not be found.</p>
      </div>
    );
  }

  const isTextCompletion = draft.selectedApiGroup === 'textgenerationwebui';
  const isChatCompletion = draft.selectedApiGroup === 'openai';
  const openRouterPromptCost = isOpenRouterProfile(draft.profile)
    ? calculateOpenRouterMaxPromptCost(draft.profile, draft.preset)
    : undefined;

  return (
    <div className="api-settings-panel">
      <div className="api-settings-header">
        <div>
          <h3>API Settings</h3>
          <span>
            {isChatCompletion ? 'Chat Completion' : isTextCompletion ? 'Text Completion' : 'Connection Profile'}
          </span>
        </div>
        <STButton
          className="menu_button fa-solid fa-file-circle-plus"
          title="Create profile from editor"
          onClick={handleCreateProfile}
          disabled={isSaving}
        />
      </div>

      <div className="api-settings-grid">
        <label>
          Profile Name
          <input
            className="text_pole"
            value={draft.profile.name ?? ''}
            onChange={(event) => updateDraftProfile('name', event.target.value)}
          />
        </label>
        <label>
          API
          <select
            className="text_pole"
            value={draft.profile.api ?? ''}
            onChange={(event) => {
              updateDraftProfile('api', event.target.value);
              setModelOptionsVersion((version) => version + 1);
            }}
          >
            <option value="">Select API</option>
            {apiOptions.map(([api]) => (
              <option key={api} value={api}>
                {api}
              </option>
            ))}
          </select>
        </label>
        <label>
          Preset
          <input
            className="text_pole"
            value={draft.profile.preset ?? ''}
            onChange={(event) => updateDraftProfile('preset', event.target.value)}
          />
        </label>
        <label>
          Model
          <div className="model-picker-row">
            {modelOptions.length > 0 ? (
              <select
                className="text_pole"
                value={getModelValue(draft.profile)}
                onFocus={() => setModelOptionsVersion((version) => version + 1)}
                onChange={(event) => updateDraftProfile('model', event.target.value)}
              >
                {groupedModelOptions.ungrouped.map((option) => (
                  <option key={`models:${option.value}`} value={option.value}>
                    {option.label}
                  </option>
                ))}
                {groupedModelOptions.grouped.map(([group, options]) => (
                  <optgroup key={group} label={group}>
                    {options.map((option) => (
                      <option key={`${group}:${option.value}`} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            ) : (
              <input
                className="text_pole"
                value={getModelValue(draft.profile)}
                onFocus={() => setModelOptionsVersion((version) => version + 1)}
                onChange={(event) => updateDraftProfile('model', event.target.value)}
              />
            )}
            <STButton
              className="menu_button fa-solid fa-rotate"
              title="Refresh model list"
              onClick={() => setModelOptionsVersion((version) => version + 1)}
            />
          </div>
          {openRouterPromptCost && (
            <small className="openrouter-pricing-summary">Max prompt cost: {openRouterPromptCost}</small>
          )}
        </label>
        <label>
          API URL
          <input
            className="text_pole"
            value={draft.profile['api-url'] ?? ''}
            onChange={(event) => updateDraftProfile('api-url', event.target.value)}
          />
        </label>
        <label>
          Secret ID
          <input
            className="text_pole"
            value={(draft.profile as any)['secret-id'] ?? ''}
            onChange={(event) => updateDraftProfile('secret-id' as any, event.target.value as any)}
          />
        </label>
        {isTextCompletion && (
          <>
            <label>
              Instruct Template
              <input
                className="text_pole"
                value={draft.profile.instruct ?? ''}
                onChange={(event) => updateDraftProfile('instruct', event.target.value)}
              />
            </label>
            <label>
              Context Template
              <input
                className="text_pole"
                value={draft.profile.context ?? ''}
                onChange={(event) => updateDraftProfile('context', event.target.value)}
              />
            </label>
            <label>
              System Prompt
              <input
                className="text_pole"
                value={draft.profile.sysprompt ?? ''}
                onChange={(event) => updateDraftProfile('sysprompt', event.target.value)}
              />
            </label>
            <label>
              Tokenizer
              <input
                className="text_pole"
                value={draft.profile.tokenizer ?? ''}
                onChange={(event) => updateDraftProfile('tokenizer', event.target.value)}
              />
            </label>
          </>
        )}
      </div>

      <div className="api-settings-actions">
        <STButton className="menu_button interactable" onClick={handleSaveProfile} disabled={isSaving}>
          Save Profile
        </STButton>
        <STButton className="menu_button interactable" onClick={handleSavePreset} disabled={isSaving}>
          Save Preset
        </STButton>
        <STButton className="menu_button" onClick={() => setShowRaw((value) => !value)}>
          {showRaw ? 'Hide Raw JSON' : 'Show Raw JSON'}
        </STButton>
      </div>

      {showRaw && (
        <div className="api-settings-raw">
          <div>
            <div className="raw-heading">
              <span>Profile JSON</span>
              <STButton className="menu_button" onClick={handleLoadRawProfile}>
                Load JSON
              </STButton>
            </div>
            <STTextarea value={profileJson} onChange={(event) => setProfileJson(event.target.value)} rows={10} />
          </div>
          <div>
            <div className="raw-heading">
              <span>Preset JSON</span>
              <STButton className="menu_button" onClick={handleLoadRawPreset}>
                Load JSON
              </STButton>
            </div>
            <STTextarea value={presetJson} onChange={(event) => setPresetJson(event.target.value)} rows={10} />
          </div>
        </div>
      )}

      <div className="api-settings-footnote">
        {getConnectionProfiles().length} profiles available. API keys are intentionally not shown; only secret IDs are
        editable.
      </div>
    </div>
  );
};
