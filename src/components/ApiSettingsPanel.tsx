import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { STButton, STTextarea } from 'sillytavern-utils-lib/components/react';
import type { ConnectionProfile } from 'sillytavern-utils-lib/types/profiles';
import { st_echo } from 'sillytavern-utils-lib/config';
import {
  createConnectionProfileFromDraft,
  getConnectionProfiles,
  loadApiSettingsDraft,
  resolvePresetApiId,
  resolveSelectedApiGroup,
  saveConnectionProfile,
  saveResponsePreset,
} from '../api-settings.js';
import type { ApiSettingsDraft } from '../api-settings.js';

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

export const ApiSettingsPanel: FC<ApiSettingsPanelProps> = ({ profileId, onProfileSelected }) => {
  const [draft, setDraft] = useState<ApiSettingsDraft | undefined>(() => loadApiSettingsDraft(profileId));
  const [profileJson, setProfileJson] = useState(() => stringify(draft?.profile));
  const [presetJson, setPresetJson] = useState(() => stringify(draft?.preset));
  const [showRaw, setShowRaw] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const apiOptions = useMemo(() => getApiOptions(), []);

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
      setProfileJson(stringify(profile));
      return nextDraft;
    });
  };

  const handleLoadRawProfile = () => {
    if (!draft) return;
    try {
      const profile = parseJson<ConnectionProfile>(profileJson, 'Profile JSON');
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
            onChange={(event) => updateDraftProfile('api', event.target.value)}
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
          <input
            className="text_pole"
            value={getModelValue(draft.profile)}
            onChange={(event) => updateDraftProfile('model', event.target.value)}
          />
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
