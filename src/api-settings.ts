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
const runtimeConnectionProfiles = new Map<string, ConnectionProfile>();

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

export function getRuntimeConnectionProfile(profileId?: string): ConnectionProfile | undefined {
  if (!profileId) return undefined;

  const profile = getConnectionProfile(profileId);
  const runtimeProfile = runtimeConnectionProfiles.get(profileId);
  if (!profile || !runtimeProfile) return profile;

  return { ...clone(runtimeProfile), id: profileId };
}

export function setRuntimeConnectionProfile(profile: ConnectionProfile, profileId = profile.id): void {
  if (!profileId) return;
  runtimeConnectionProfiles.set(profileId, { ...clone(profile), id: profileId });
}

export function clearRuntimeConnectionProfiles(profileId?: string): void {
  if (profileId) {
    runtimeConnectionProfiles.delete(profileId);
    return;
  }

  runtimeConnectionProfiles.clear();
}

export async function withRuntimeConnectionProfile<T>(
  profileId: string,
  callback: (requestProfileId: string, profile: ConnectionProfile) => Promise<T>,
): Promise<T> {
  const profile = getRuntimeConnectionProfile(profileId);
  if (!profile) {
    throw new Error(`Connection profile with ID "${profileId}" not found.`);
  }

  if (!runtimeConnectionProfiles.has(profileId)) {
    return callback(profileId, profile);
  }

  const profiles = getProfiles();
  const temporaryProfile = {
    ...clone(profile),
    id: `world-info-recommender-${context.uuidv4()}`,
    name: profile.name ? `${profile.name} (World Info Recommender draft)` : 'World Info Recommender draft',
  };

  profiles.push(temporaryProfile);
  try {
    return await callback(temporaryProfile.id, temporaryProfile);
  } finally {
    const temporaryIndex = profiles.findIndex((existingProfile) => existingProfile.id === temporaryProfile.id);
    if (temporaryIndex !== -1) {
      profiles.splice(temporaryIndex, 1);
    }
  }
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
  const profile = getRuntimeConnectionProfile(profileId);
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
  clearRuntimeConnectionProfiles(updatedProfile.id);
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
    const restoredProfileId = selectedProfile && profileStillExists ? selectedProfile : null;

    replaceObjectContents(context.chatCompletionSettings, snapshot.chatCompletionSettings);
    replaceObjectContents(context.textCompletionSettings, snapshot.textCompletionSettings);
    replaceObjectContents(context.powerUserSettings, snapshot.powerUserSettings);

    if (runtimeContext.extensionSettings.connectionManager) {
      runtimeContext.extensionSettings.connectionManager.selectedProfile = restoredProfileId;
    }

    const profileSelect = document.getElementById('connection_profiles');
    if (profileSelect instanceof HTMLSelectElement) {
      profileSelect.value = restoredProfileId ?? '';
    }

    clearRuntimeConnectionProfiles();
    context.saveSettingsDebounced();
  } catch (error) {
    console.error('[WorldInfoRecommender] Failed to restore SillyTavern API settings:', error);
    await st_echo('warning', 'Failed to restore SillyTavern API settings after closing World Info Recommender.');
  }
}
