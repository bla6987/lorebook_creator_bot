import type { ConnectionProfile } from 'sillytavern-utils-lib/types/profiles';
import { st_echo } from 'sillytavern-utils-lib/config';

const context = SillyTavern.getContext();
const runtimeContext = context as any;

export interface ApiSettingsDraft {
  profile: ConnectionProfile;
  preset: Record<string, any>;
  presetApiId: 'openai' | 'textgenerationwebui';
  selectedApiGroup: string;
}

export interface ConnectionStateSnapshot {
  selectedProfile: string | null;
  chatCompletionSettings: Record<string, any>;
  textCompletionSettings: Record<string, any>;
  powerUserSettings: Record<string, any>;
}

const clone = <T>(value: T): T => structuredClone(value ?? ({} as T));

const replaceObjectContents = (target: Record<string, any>, source: Record<string, any>) => {
  for (const key of Object.keys(target)) {
    delete target[key];
  }
  Object.assign(target, clone(source));
};

const getProfiles = (): ConnectionProfile[] => context.extensionSettings.connectionManager?.profiles ?? [];

export function getConnectionProfiles(): ConnectionProfile[] {
  return getProfiles();
}

export function getConnectionProfile(profileId?: string): ConnectionProfile | undefined {
  if (!profileId) return undefined;
  return getProfiles().find((profile) => profile.id === profileId);
}

export function resolvePresetApiId(profile: ConnectionProfile): 'openai' | 'textgenerationwebui' {
  const apiMap = profile.api ? context.CONNECT_API_MAP[profile.api] : undefined;
  return apiMap?.selected === 'openai' ? 'openai' : 'textgenerationwebui';
}

export function resolveSelectedApiGroup(profile: ConnectionProfile): string {
  return profile.api ? (context.CONNECT_API_MAP[profile.api]?.selected ?? '') : '';
}

export function getPresetManager(apiId: 'openai' | 'textgenerationwebui') {
  return context.getPresetManager(apiId) as any;
}

export function loadApiSettingsDraft(profileId?: string): ApiSettingsDraft | undefined {
  const profile = getConnectionProfile(profileId);
  if (!profile) return undefined;

  const presetApiId = resolvePresetApiId(profile);
  const presetManager = getPresetManager(presetApiId);
  const preset = profile.preset ? presetManager?.getCompletionPresetByName(profile.preset) : undefined;

  return {
    profile: clone(profile),
    preset: clone(preset ?? {}),
    presetApiId,
    selectedApiGroup: resolveSelectedApiGroup(profile),
  };
}

export async function saveConnectionProfile(updatedProfile: ConnectionProfile): Promise<ConnectionProfile> {
  if (!updatedProfile.id) {
    throw new Error('Profile must have an id.');
  }
  if (!updatedProfile.name?.trim()) {
    throw new Error('Profile name cannot be empty.');
  }

  const profiles = getProfiles();
  const index = profiles.findIndex((profile) => profile.id === updatedProfile.id);
  if (index === -1) {
    throw new Error(`Profile not found: ${updatedProfile.id}`);
  }

  const oldProfile = clone(profiles[index]);
  profiles[index] = clone(updatedProfile);
  context.saveSettingsDebounced();
  await context.eventSource.emit(runtimeContext.eventTypes.CONNECTION_PROFILE_UPDATED, oldProfile, profiles[index]);
  return profiles[index];
}

export async function createConnectionProfileFromDraft(
  draftProfile: ConnectionProfile,
  draftPreset: Record<string, any>,
  presetApiId: 'openai' | 'textgenerationwebui',
  name: string,
): Promise<ConnectionProfile> {
  const trimmedName = name.trim();
  if (!trimmedName) {
    throw new Error('Profile name cannot be empty.');
  }

  const profiles = getProfiles();
  if (profiles.some((profile) => profile.name === trimmedName)) {
    throw new Error(`A profile named "${trimmedName}" already exists.`);
  }

  const presetManager = getPresetManager(presetApiId);
  if (!presetManager?.savePreset) {
    throw new Error(`Could not find the ${presetApiId} preset manager.`);
  }

  await presetManager.savePreset(trimmedName, clone(draftPreset));

  const newProfile: ConnectionProfile = {
    ...clone(draftProfile),
    id: context.uuidv4(),
    name: trimmedName,
    preset: trimmedName,
  };

  profiles.push(newProfile);
  context.saveSettingsDebounced();
  await context.eventSource.emit(runtimeContext.eventTypes.CONNECTION_PROFILE_CREATED, newProfile);
  return newProfile;
}

export async function saveResponsePreset(
  profile: ConnectionProfile,
  preset: Record<string, any>,
  presetApiId: 'openai' | 'textgenerationwebui',
): Promise<void> {
  if (!profile.preset?.trim()) {
    throw new Error('Profile must have a preset name before saving preset settings.');
  }

  const presetManager = getPresetManager(presetApiId);
  if (!presetManager?.savePreset) {
    throw new Error(`Could not find the ${presetApiId} preset manager.`);
  }

  await presetManager.savePreset(profile.preset, clone(preset));
}

export function snapshotConnectionState(): ConnectionStateSnapshot {
  return {
    selectedProfile: runtimeContext.extensionSettings.connectionManager?.selectedProfile ?? null,
    chatCompletionSettings: clone(context.chatCompletionSettings),
    textCompletionSettings: clone(context.textCompletionSettings),
    powerUserSettings: clone(context.powerUserSettings),
  };
}

export async function restoreConnectionState(snapshot?: ConnectionStateSnapshot | null): Promise<void> {
  if (!snapshot) return;

  try {
    const selectedProfile = snapshot.selectedProfile;
    const profileStillExists = selectedProfile ? !!getConnectionProfile(selectedProfile) : false;
    const profileCommand = context.SlashCommandParser?.commands?.profile;

    if (profileCommand) {
      if (profileStillExists && selectedProfile) {
        const profile = getConnectionProfile(selectedProfile);
        await profileCommand.callback({ await: 'true', timeout: '2000' }, profile?.name ?? '');
      } else {
        await profileCommand.callback({ await: 'false' }, '<None>');
      }
    } else if (runtimeContext.extensionSettings.connectionManager) {
      runtimeContext.extensionSettings.connectionManager.selectedProfile = profileStillExists ? selectedProfile : '';
    }

    replaceObjectContents(context.chatCompletionSettings, snapshot.chatCompletionSettings);
    replaceObjectContents(context.textCompletionSettings, snapshot.textCompletionSettings);
    replaceObjectContents(context.powerUserSettings, snapshot.powerUserSettings);

    if (runtimeContext.extensionSettings.connectionManager) {
      runtimeContext.extensionSettings.connectionManager.selectedProfile = profileStillExists ? selectedProfile : '';
    }

    context.saveSettingsDebounced();
  } catch (error) {
    console.error('[WorldInfoRecommender] Failed to restore SillyTavern API settings:', error);
    await st_echo('warning', 'Failed to restore SillyTavern API settings after closing World Info Recommender.');
  }
}
