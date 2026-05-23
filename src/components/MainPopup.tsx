import { FC, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  STButton,
  STConnectionProfileSelect,
  STFancyDropdown,
  STPresetSelect,
  STTextarea,
  PresetItem,
  DropdownItem as FancyDropdownItem,
  Popup,
} from 'sillytavern-utils-lib/components/react';
import { BuildPromptOptions, Message, getWorldInfos } from 'sillytavern-utils-lib';
import {
  groups,
  selected_group,
  st_createWorldInfoEntry,
  st_echo,
  st_getCharaFilename,
  this_chid,
  world_names,
} from 'sillytavern-utils-lib/config';
import { buildRecommendationMessages, runWorldInfoRecommendation, Session } from '../generate.js';
import { ExtensionSettings, settingsManager } from '../settings.js';
import { Character } from 'sillytavern-utils-lib/types';
import { RegexScriptData } from 'sillytavern-utils-lib/types/regex';
import { SuggestedEntry } from './SuggestedEntry.js';
import * as Handlebars from 'handlebars';
import { useForceUpdate } from '../hooks/useForceUpdate.js';
import { SelectEntriesPopup, SelectEntriesPopupRef } from './SelectEntriesPopup.js';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { ReviseSessionManager } from './ReviseSessionManager.js';
import { ApiSettingsPanel } from './ApiSettingsPanel.js';
import { getRuntimeConnectionProfile } from '../api-settings.js';
import { ExtendedWIEntry, SaveEntryPayload } from '../types.js';
import { LorebookEditor } from './LorebookEditor.js';
import { normalizeEntriesByWorld, normalizeExtendedEntry } from './lorebookEditorUtils.js';
import { WorldInfoRecommenderSettings } from './Settings.js';

if (!Handlebars.helpers['join']) {
  Handlebars.registerHelper('join', function (array: any, separator: any) {
    if (Array.isArray(array)) {
      return array.join(typeof separator === 'string' ? separator : ', ');
    }
    return '';
  });
}

if (!Handlebars.helpers['is_not_empty']) {
  Handlebars.registerHelper('is_not_empty', function (this: any, value: any, options: any) {
    if (!value) {
      return options.inverse(this);
    }
    if (Array.isArray(value)) {
      return value.length > 0 ? options.fn(this) : options.inverse(this);
    }
    if (typeof value === 'object' && Object.keys(value).length > 0) {
      return options.fn(this);
    }
    if (typeof value !== 'object' && !Array.isArray(value)) {
      return options.fn(this);
    }
    return options.inverse(this);
  });
}

const globalContext = SillyTavern.getContext();

const getAvatar = () => (this_chid ? st_getCharaFilename(this_chid) : selected_group);
const optionalEntryFields = ['constant', 'vectorized', 'order', 'position', 'depth', 'role'] as const;
type OptionalEntryField = (typeof optionalEntryFields)[number];

const hasOwnEntryField = (entry: ExtendedWIEntry, field: OptionalEntryField) =>
  Object.prototype.hasOwnProperty.call(entry, field);

const buildEntryUpdatePayload = (entry: ExtendedWIEntry): Partial<ExtendedWIEntry> => {
  const normalizedEntry = normalizeExtendedEntry(entry);
  const payload: Partial<ExtendedWIEntry> = {
    key: normalizedEntry.key,
    content: normalizedEntry.content,
    comment: normalizedEntry.comment,
  };

  optionalEntryFields.forEach((field) => {
    if (hasOwnEntryField(normalizedEntry, field)) {
      (payload as Record<OptionalEntryField, ExtendedWIEntry[OptionalEntryField]>)[field] = normalizedEntry[field];
    }
  });

  return payload;
};

const hasEntryChanges = (entry: ExtendedWIEntry, existingEntry: ExtendedWIEntry) => {
  const normalizedEntry = normalizeExtendedEntry(entry);
  const contentChanged = (normalizedEntry.content || '') !== (existingEntry.content || '');
  const commentChanged = (normalizedEntry.comment || '') !== (existingEntry.comment || '');
  const keysChanged =
    (normalizedEntry.key || []).slice().sort().join(',') !== (existingEntry.key || []).slice().sort().join(',');
  const optionalChanged = optionalEntryFields.some(
    (field) => hasOwnEntryField(normalizedEntry, field) && normalizedEntry[field] !== existingEntry[field],
  );

  return contentChanged || commentChanged || keysChanged || optionalChanged;
};

export const MainPopup: FC = () => {
  const forceUpdate = useForceUpdate();
  const settings = settingsManager.getSettings();
  const [session, setSession] = useState<Session>({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {},
  });
  const [allWorldNames, setAllWorldNames] = useState<string[]>([]);
  const [entriesGroupByWorldName, setEntriesGroupByWorldName] = useState<Record<string, ExtendedWIEntry[]>>({});
  const [groupMembers, setGroupMembers] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'recommender' | 'editor'>('recommender');
  const [suggestionTab, setSuggestionTab] = useState<'suggestions' | 'preview'>('suggestions');
  const [rightRailTab, setRightRailTab] = useState<'settings' | 'activity'>('settings');
  const [suggestionSearch, setSuggestionSearch] = useState('');
  const [suggestionTargetFilter, setSuggestionTargetFilter] = useState('all');
  const [suggestionSort, setSuggestionSort] = useState<'newest' | 'title' | 'target'>('newest');
  const [previewMessages, setPreviewMessages] = useState<Message[]>([]);
  const [previewError, setPreviewError] = useState('');
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [isSelectingEntries, setIsSelectingEntries] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [isGlobalReviseOpen, setIsGlobalReviseOpen] = useState(false);

  const selectEntriesPopupRef = useRef<SelectEntriesPopupRef>(null);
  const importPopupRef = useRef<SelectEntriesPopupRef>(null);

  const avatarKey = useMemo(() => getAvatar() ?? '_global', [this_chid, selected_group]);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    setEntriesGroupByWorldName({});
    setAllWorldNames([]);
    setGroupMembers([]);

    const avatar = getAvatar();
    const key = `worldInfoRecommend_${avatarKey}`;

    const savedSession: Partial<Session> = JSON.parse(localStorage.getItem(key) ?? '{}');
    const initialSession: Session = {
      suggestedEntries: normalizeEntriesByWorld(savedSession.suggestedEntries ?? {}),
      blackListedEntries: savedSession.blackListedEntries ?? [],
      selectedWorldNames: savedSession.selectedWorldNames ?? [],
      selectedEntryUids: savedSession.selectedEntryUids ?? {},
      regexIds: savedSession.regexIds ?? {},
    };

    let loadedEntries: Record<string, ExtendedWIEntry[]> = {};
    if (avatar) {
      if (selected_group) {
        const groupWorldInfo = await getWorldInfos(['chat', 'persona', 'global'], true);
        if (groupWorldInfo) loadedEntries = groupWorldInfo;

        const group = groups.find((g: any) => g.id === selected_group);
        if (group) {
          for (const member of group.members) {
            const index = globalContext.characters.findIndex((c: Character) => c.avatar === member);
            if (index !== -1) {
              const worldInfo = await getWorldInfos(['character'], true, index);
              if (worldInfo) loadedEntries = { ...loadedEntries, ...worldInfo };
            }
          }
        }
      } else {
        loadedEntries = await getWorldInfos(['all'], true, this_chid);
      }
    } else {
      for (const worldName of world_names) {
        const worldInfo = await globalContext.loadWorldInfo(worldName);
        if (worldInfo) loadedEntries[worldName] = Object.values(worldInfo.entries);
      }
    }

    loadedEntries = normalizeEntriesByWorld(loadedEntries);
    setEntriesGroupByWorldName(loadedEntries);
    const loadedWorldNames = Object.keys(loadedEntries);
    setAllWorldNames(loadedWorldNames);

    if (initialSession.selectedWorldNames.length === 0 && avatarKey !== '_global') {
      initialSession.selectedWorldNames = [...loadedWorldNames];
    } else {
      initialSession.selectedWorldNames = initialSession.selectedWorldNames.filter((name) =>
        loadedWorldNames.includes(name),
      );
    }

    const validEntryUids: Record<string, number[]> = {};
    if (initialSession.selectedEntryUids) {
      for (const [worldName, uids] of Object.entries(initialSession.selectedEntryUids)) {
        if (loadedEntries[worldName]) {
          const worldEntryUids = new Set(loadedEntries[worldName].map((e) => e.uid));
          const validUids = uids.filter((uid) => worldEntryUids.has(uid));
          if (validUids.length > 0) {
            validEntryUids[worldName] = validUids;
          }
        }
      }
    }
    initialSession.selectedEntryUids = validEntryUids;
    setSession(initialSession);

    if (selected_group) {
      const group = groups.find((g: any) => g.id === selected_group);
      if (group?.generation_mode === 0) {
        const members = group.members
          .map((memberAvatar: string) => globalContext.characters.find((c: Character) => c.avatar === memberAvatar))
          .filter((c?: Character): c is Character => !!c);
        setGroupMembers(members);
      }
    }

    setIsLoading(false);
  }, [avatarKey]);

  useEffect(() => {
    void loadData();
  }, [loadData]);

  useEffect(() => {
    if (isLoading) return;
    const key = `worldInfoRecommend_${avatarKey}`;
    localStorage.setItem(key, JSON.stringify(session));
  }, [session, avatarKey, isLoading]);

  const updateSetting = <K extends keyof ExtensionSettings>(key: K, value: ExtensionSettings[K]) => {
    settingsManager.getSettings()[key] = value;
    settingsManager.saveSettings();
    forceUpdate();
  };

  const updateContextToSend = <K extends keyof ExtensionSettings['contextToSend']>(
    key: K,
    value: ExtensionSettings['contextToSend'][K],
  ) => {
    settingsManager.getSettings().contextToSend[key] = value;
    settingsManager.saveSettings();
    forceUpdate();
  };

  const buildRecommendationRequestContext = useCallback(() => {
    if (!settings.profileId) {
      throw new Error('Please select a connection profile.');
    }

    const profile = getRuntimeConnectionProfile(settings.profileId);
    if (!profile) {
      throw new Error('Connection profile not found.');
    }

    const avatar = getAvatar();
    const buildPromptOptions: BuildPromptOptions = {
      presetName: profile.preset,
      contextName: profile.context,
      instructName: profile.instruct,
      syspromptName: profile.sysprompt,
      ignoreCharacterFields: !settings.contextToSend.charCard,
      ignoreWorldInfo: true,
      ignoreAuthorNote: !settings.contextToSend.authorNote,
      maxContext:
        settings.maxContextType === 'custom'
          ? settings.maxContextValue
          : settings.maxContextType === 'profile'
            ? 'preset'
            : 'active',
      includeNames: !!selected_group,
    };

    if (!avatar) {
      buildPromptOptions.messageIndexesBetween = { start: -1, end: -1 };
    } else {
      switch (settings.contextToSend.messages.type) {
        case 'none':
          buildPromptOptions.messageIndexesBetween = { start: -1, end: -1 };
          break;
        case 'first':
          buildPromptOptions.messageIndexesBetween = { start: 0, end: settings.contextToSend.messages.first ?? 10 };
          break;
        case 'last': {
          const lastCount = settings.contextToSend.messages.last ?? 10;
          const chatLength = globalContext.chat?.length ?? 0;
          buildPromptOptions.messageIndexesBetween = {
            end: Math.max(0, chatLength - 1),
            start: Math.max(0, chatLength - lastCount),
          };
          break;
        }
        case 'range':
          if (settings.contextToSend.messages.range) {
            buildPromptOptions.messageIndexesBetween = settings.contextToSend.messages.range;
          }
          break;
      }
    }

    const promptSettings = structuredClone(settings.prompts);
    if (!settings.contextToSend.stDescription) delete (promptSettings as any).stDescription;
    if (!settings.contextToSend.worldInfo || session.selectedWorldNames.length === 0)
      delete (promptSettings as any).currentLorebooks;
    const anySuggestedEntries = Object.values(session.suggestedEntries).some((entries) => entries.length > 0);
    if (!settings.contextToSend.suggestedEntries || !anySuggestedEntries)
      delete (promptSettings as any).suggestedLorebooks;
    if (session.blackListedEntries.length === 0) delete (promptSettings as any).blackListedEntries;

    return {
      buildPromptOptions,
      promptSettings,
      mainContextList: settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts
        .filter((prompt) => prompt.enabled)
        .map((prompt) => ({ promptName: prompt.promptName, role: prompt.role })),
    };
  }, [settings, session]);

  const addEntry = useCallback(
    async (
      entry: ExtendedWIEntry,
      selectedWorldName: string,
      skipSave: boolean = false,
    ): Promise<'added' | 'updated' | 'unchanged'> => {
      const worldInfoCopy = structuredClone(entriesGroupByWorldName);
      if (!worldInfoCopy[selectedWorldName]) {
        worldInfoCopy[selectedWorldName] = [];
      }

      const existingEntry = worldInfoCopy[selectedWorldName].find((e) => e.uid === entry.uid);
      const isUpdate = !!existingEntry;
      let targetEntry: ExtendedWIEntry;

      if (isUpdate) {
        if (!hasEntryChanges(entry, existingEntry!)) {
          return 'unchanged'; // Nothing to do.
        }
        targetEntry = existingEntry!;
      } else {
        const stFormat = { entries: Object.fromEntries(worldInfoCopy[selectedWorldName].map((e) => [e.uid, e])) };
        const newEntry = st_createWorldInfoEntry(selectedWorldName, stFormat);
        if (!newEntry) throw new Error('Failed to create new World Info entry.');
        targetEntry = newEntry;
        worldInfoCopy[selectedWorldName].push(targetEntry);
      }

      Object.assign(targetEntry, buildEntryUpdatePayload(entry));
      setEntriesGroupByWorldName(worldInfoCopy);

      if (!skipSave) {
        const finalFormat = { entries: Object.fromEntries(worldInfoCopy[selectedWorldName].map((e) => [e.uid, e])) };
        await globalContext.saveWorldInfo(selectedWorldName, finalFormat);
        globalContext.reloadWorldInfoEditor(selectedWorldName, true);
      }

      return isUpdate ? 'updated' : 'added';
    },
    [entriesGroupByWorldName],
  );

  const handleGeneration = useCallback(
    async (continueFrom?: {
      worldName: string;
      entry: ExtendedWIEntry;
      prompt: string;
      mode: 'continue' | 'revise';
    }) => {
      if (!settings.profileId) return st_echo('warning', 'Please select a connection profile.');

      const userPrompt = continueFrom?.prompt ?? settings.promptPresets[settings.promptPreset].content;

      if (!continueFrom && !userPrompt) {
        return st_echo('warning', 'Please enter a prompt.');
      }

      setIsGenerating(true);
      try {
        const { buildPromptOptions, promptSettings, mainContextList } = buildRecommendationRequestContext();

        const continueFromPayload = continueFrom
          ? { worldName: continueFrom.worldName, entry: continueFrom.entry, mode: continueFrom.mode }
          : undefined;

        const resultingEntries = await runWorldInfoRecommendation({
          profileId: settings.profileId,
          userPrompt: userPrompt,
          buildPromptOptions,
          session,
          entriesGroupByWorldName,
          promptSettings,
          mainContextList,
          maxResponseToken: settings.maxResponseToken,
          continueFrom: continueFromPayload,
        });

        if (Object.keys(resultingEntries).length > 0) {
          if (continueFrom) {
            setSession((prev) => {
              const newSuggested = structuredClone(prev.suggestedEntries);
              const worldName = continueFrom.worldName;
              const updatedEntry = resultingEntries[worldName]?.[0];

              if (newSuggested[worldName] && updatedEntry) {
                const entryIndex = newSuggested[worldName].findIndex(
                  (e) => e.uid === continueFrom.entry.uid && e.comment === continueFrom.entry.comment,
                );

                if (entryIndex !== -1) {
                  newSuggested[worldName][entryIndex] = normalizeExtendedEntry(updatedEntry);
                }
              }
              return { ...prev, suggestedEntries: newSuggested };
            });
          } else {
            setSession((prev) => {
              const newSuggested = structuredClone(prev.suggestedEntries);
              for (const [worldName, entries] of Object.entries(resultingEntries)) {
                if (!newSuggested[worldName]) newSuggested[worldName] = [];
                for (const entry of entries) {
                  if (!newSuggested[worldName].some((e) => e.uid === entry.uid && e.comment === entry.comment)) {
                    newSuggested[worldName].push(normalizeExtendedEntry(entry));
                  }
                }
              }
              return { ...prev, suggestedEntries: newSuggested };
            });
          }
        } else {
          st_echo('warning', 'No results from AI');
        }
      } catch (error: any) {
        console.error(error);
        st_echo('error', error instanceof Error ? error.message : String(error));
      } finally {
        setIsGenerating(false);
      }
    },
    [settings, session, entriesGroupByWorldName, buildRecommendationRequestContext],
  );

  const currentPromptText = settings.promptPresets[settings.promptPreset]?.content ?? '';
  const previewDependencyKey = JSON.stringify({
    profileId: settings.profileId,
    promptPreset: settings.promptPreset,
    promptText: currentPromptText,
    contextToSend: settings.contextToSend,
    maxContextType: settings.maxContextType,
    maxContextValue: settings.maxContextValue,
    prompts: settings.prompts,
    mainContextTemplatePreset: settings.mainContextTemplatePreset,
    mainContextTemplatePresets: settings.mainContextTemplatePresets,
    session,
  });

  useEffect(() => {
    if (isLoading || activeTab !== 'recommender' || suggestionTab !== 'preview') {
      return;
    }

    let cancelled = false;
    setIsPreviewLoading(true);
    setPreviewError('');

    const timeoutId = window.setTimeout(async () => {
      try {
        const { buildPromptOptions, promptSettings, mainContextList } = buildRecommendationRequestContext();
        const messages = await buildRecommendationMessages({
          profileId: settings.profileId,
          userPrompt: currentPromptText,
          buildPromptOptions,
          session,
          entriesGroupByWorldName,
          promptSettings,
          mainContextList,
        });

        if (!cancelled) {
          setPreviewMessages(messages);
          setPreviewError('');
        }
      } catch (error) {
        if (!cancelled) {
          setPreviewMessages([]);
          setPreviewError(error instanceof Error ? error.message : String(error));
        }
      } finally {
        if (!cancelled) {
          setIsPreviewLoading(false);
        }
      }
    }, 300);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [
    activeTab,
    suggestionTab,
    isLoading,
    settings.profileId,
    currentPromptText,
    previewDependencyKey,
    session,
    entriesGroupByWorldName,
    buildRecommendationRequestContext,
  ]);

  const handleAddSingleEntry = useCallback(
    async (entry: ExtendedWIEntry, worldName: string, selectedTargetWorld: string) => {
      try {
        const status = await addEntry(entry, selectedTargetWorld);
        if (status === 'unchanged') {
          st_echo('info', `No changes detected for "${entry.comment}". Entry was not updated.`);
        } else {
          st_echo('success', status === 'added' ? 'Entry added' : 'Entry updated');
        }

        setSession((prev) => {
          const newSuggested = { ...prev.suggestedEntries };
          if (newSuggested[worldName]) {
            newSuggested[worldName] = newSuggested[worldName].filter(
              (e) => !(e.uid === entry.uid && e.comment === entry.comment),
            );
          }
          return { ...prev, suggestedEntries: newSuggested };
        });
      } catch (error: any) {
        console.error(error);
        st_echo('error', `Failed to add entry: ${error.message}`);
      }
    },
    [addEntry],
  );

  const handleAddAll = async () => {
    const totalEntries = Object.values(session.suggestedEntries).flat().length;
    if (totalEntries === 0) return st_echo('warning', 'No entries to add.');

    const confirm = await globalContext.Popup.show.confirm(
      'Add All',
      `Are you sure you want to add/update all ${totalEntries} suggested entries?`,
    );
    if (!confirm) return;

    setIsGenerating(true);
    let addedCount = 0;
    let updatedCount = 0;
    let unchangedCount = 0;
    const modifiedWorlds = new Set<string>();
    const entriesToAdd: { worldName: string; entry: ExtendedWIEntry }[] = [];
    const workingEntries = structuredClone(entriesGroupByWorldName);

    Object.entries(session.suggestedEntries).forEach(([worldName, entries]) => {
      entries.forEach((entry) => {
        const targetWorldName = allWorldNames.includes(worldName) ? worldName : (allWorldNames[0] ?? '');
        if (targetWorldName) entriesToAdd.push({ worldName: targetWorldName, entry });
      });
    });

    for (const { worldName, entry } of entriesToAdd) {
      try {
        if (!workingEntries[worldName]) {
          workingEntries[worldName] = [];
        }

        const existingEntry = workingEntries[worldName].find((item) => item.uid === entry.uid);
        const isUpdate = !!existingEntry;
        let targetEntry: ExtendedWIEntry;

        if (isUpdate) {
          if (!hasEntryChanges(entry, existingEntry!)) {
            unchangedCount++;
            continue;
          }
          targetEntry = existingEntry!;
        } else {
          const stFormat = { entries: Object.fromEntries(workingEntries[worldName].map((item) => [item.uid, item])) };
          const newEntry = st_createWorldInfoEntry(worldName, stFormat);
          if (!newEntry) throw new Error('Failed to create new World Info entry.');
          targetEntry = newEntry;
          workingEntries[worldName].push(targetEntry);
        }

        Object.assign(targetEntry, buildEntryUpdatePayload(entry));
        const status = isUpdate ? 'updated' : 'added';
        if (status === 'added') addedCount++;
        else updatedCount++;
        modifiedWorlds.add(worldName);
      } catch (error) {
        st_echo('error', `Failed to process entry: ${entry.comment}`);
      }
    }

    for (const worldName of modifiedWorlds) {
      try {
        const finalFormat = { entries: Object.fromEntries(workingEntries[worldName].map((e) => [e.uid, e])) };
        await globalContext.saveWorldInfo(worldName, finalFormat);
        globalContext.reloadWorldInfoEditor(worldName, true);
      } catch (error) {
        st_echo('error', `Failed to save world: ${worldName}`);
      }
    }

    setEntriesGroupByWorldName(workingEntries);
    setSession((prev) => ({ ...prev, suggestedEntries: {} }));
    st_echo('success', `Processed: ${addedCount} new, ${updatedCount} updated, ${unchangedCount} unchanged.`);
    setIsGenerating(false);
  };

  const handleReset = async () => {
    const confirm = await globalContext.Popup.show.confirm(
      'Reset',
      'Clear all suggestions and reset lorebook selection?',
    );
    if (confirm) {
      setSession((prev) => ({
        ...prev,
        suggestedEntries: {},
        blackListedEntries: [],
        selectedWorldNames: getAvatar() ? [...allWorldNames] : [],
        selectedEntryUids: {},
      }));
      st_echo('success', 'Reset successful');
    }
  };

  const handleRemoveEntry = (entry: ExtendedWIEntry, worldName: string, isBlacklist: boolean) => {
    setSession((prev) => {
      const newSession = { ...prev };
      if (isBlacklist) {
        newSession.blackListedEntries = [...newSession.blackListedEntries, `${worldName} (${entry.comment})`];
      }
      const newSuggested = { ...newSession.suggestedEntries };
      if (newSuggested[worldName]) {
        newSuggested[worldName] = newSuggested[worldName].filter(
          (e) => !(e.uid === entry.uid && e.comment === entry.comment),
        );
      }
      newSession.suggestedEntries = newSuggested;
      return newSession;
    });
  };

  const handleUpdateEntry = (
    worldName: string,
    originalEntry: ExtendedWIEntry,
    updatedEntry: ExtendedWIEntry,
    updatedRegexIds?: Record<string, Partial<RegexScriptData>>,
  ) => {
    setSession((prev) => {
      const newSuggested = { ...prev.suggestedEntries };
      if (newSuggested[worldName]) {
        const entryIndex = newSuggested[worldName].findIndex(
          (e) => e.uid === originalEntry.uid && e.comment === originalEntry.comment,
        );

        if (entryIndex !== -1) {
          newSuggested[worldName][entryIndex] = normalizeExtendedEntry(updatedEntry);
        }
      }
      const newSessionState = { ...prev, suggestedEntries: newSuggested };
      if (updatedRegexIds) {
        newSessionState.regexIds = updatedRegexIds;
      }
      return newSessionState;
    });
  };

  const handleImportEntries = useCallback(
    (selection: Record<string, number[]>) => {
      setSession((prev) => {
        const newSuggested = structuredClone(prev.suggestedEntries);
        let importCount = 0;

        for (const [worldName, uids] of Object.entries(selection)) {
          if (!entriesGroupByWorldName[worldName]) continue;
          if (!newSuggested[worldName]) {
            newSuggested[worldName] = [];
          }

          for (const uid of uids) {
            const alreadySuggested = newSuggested[worldName].some((e) => e.uid === uid);
            if (alreadySuggested) continue;

            const entryToImport = entriesGroupByWorldName[worldName].find((e) => e.uid === uid);
            if (entryToImport) {
              newSuggested[worldName].push(normalizeExtendedEntry(entryToImport));
              importCount++;
            }
          }
        }
        if (importCount > 0) {
          st_echo('success', `Imported ${importCount} entries for revision.`);
        }
        return { ...prev, suggestedEntries: newSuggested };
      });
    },
    [entriesGroupByWorldName],
  );

  const handleSaveEditorEntries = useCallback(
    async (worldName: string, payloads: SaveEntryPayload[]) => {
      const worldInfoCopy = structuredClone(entriesGroupByWorldName);
      const worldEntries = worldInfoCopy[worldName] ?? [];

      payloads.forEach(({ entry, originalUid }) => {
        const normalizedEntry = normalizeExtendedEntry(entry);
        const existingIndex = worldEntries.findIndex((item) => item.uid === originalUid);
        if (existingIndex === -1) {
          worldEntries.push(normalizedEntry);
          return;
        }

        worldEntries[existingIndex] = {
          ...worldEntries[existingIndex],
          ...buildEntryUpdatePayload(normalizedEntry),
          uid: worldEntries[existingIndex].uid,
        };
      });

      const normalizedEntries = worldEntries.map((entry) => normalizeExtendedEntry(entry));
      worldInfoCopy[worldName] = normalizedEntries;
      setEntriesGroupByWorldName(worldInfoCopy);

      const finalFormat = { entries: Object.fromEntries(normalizedEntries.map((entry) => [entry.uid, entry])) };
      await globalContext.saveWorldInfo(worldName, finalFormat);
      globalContext.reloadWorldInfoEditor(worldName, true);
    },
    [entriesGroupByWorldName],
  );

  const handleReplaceEditorWorldEntries = useCallback(async (worldName: string, entries: ExtendedWIEntry[]) => {
    const normalizedEntries = entries.map((entry) => normalizeExtendedEntry(entry));
    setEntriesGroupByWorldName((previous) => ({ ...previous, [worldName]: normalizedEntries }));
    const finalFormat = { entries: Object.fromEntries(normalizedEntries.map((entry) => [entry.uid, entry])) };
    await globalContext.saveWorldInfo(worldName, finalFormat);
    globalContext.reloadWorldInfoEditor(worldName, true);
  }, []);

  const entriesForSelectionPopup = useMemo(() => {
    const result: Record<string, ExtendedWIEntry[]> = {};
    session.selectedWorldNames.forEach((worldName) => {
      if (entriesGroupByWorldName[worldName]) {
        result[worldName] = entriesGroupByWorldName[worldName];
      }
    });
    return result;
  }, [session.selectedWorldNames, entriesGroupByWorldName]);

  const entriesForGlobalRevise = useMemo(() => {
    const mergedState: Record<string, ExtendedWIEntry[]> = JSON.parse(JSON.stringify(entriesForSelectionPopup));
    const suggestedByUid = new Map<number, { worldName: string; entry: ExtendedWIEntry }>();

    Object.entries(session.suggestedEntries).forEach(([worldName, entries]) => {
      entries.forEach((entry) => {
        if (entry.uid) {
          suggestedByUid.set(entry.uid, { worldName, entry });
        }
      });
    });

    Object.entries(mergedState).forEach(([, entries]) => {
      entries.forEach((existingEntry, index) => {
        if (existingEntry.uid && suggestedByUid.has(existingEntry.uid)) {
          entries[index] = suggestedByUid.get(existingEntry.uid)!.entry;
          suggestedByUid.delete(existingEntry.uid);
        }
      });
    });

    suggestedByUid.forEach(({ worldName, entry }) => {
      if (!mergedState[worldName]) {
        mergedState[worldName] = [];
      }
      if (!mergedState[worldName].some((e) => e.uid === entry.uid)) {
        mergedState[worldName].push(entry);
      }
    });

    return mergedState;
  }, [entriesForSelectionPopup, session.suggestedEntries]);

  const handleApplyGlobalRevise = (newState: Record<string, ExtendedWIEntry[]>) => {
    // Create a map of all original entries for efficient lookup. Key is "worldName::uid".
    const originalEntriesMap = new Map<string, ExtendedWIEntry>();
    Object.entries(entriesGroupByWorldName).forEach(([worldName, entries]) => {
      entries.forEach((entry) => {
        originalEntriesMap.set(`${worldName}::${entry.uid}`, entry);
      });
    });

    const newSuggestedEntries: Record<string, ExtendedWIEntry[]> = {};

    // Iterate through the state returned by the revise session.
    Object.entries(newState).forEach(([worldName, entries]) => {
      entries.forEach((revisedEntry) => {
        const compositeKey = `${worldName}::${revisedEntry.uid}`;
        const originalEntry = originalEntriesMap.get(compositeKey);

        let isSuggestion = false;
        if (!originalEntry) {
          // The entry is new; it didn't exist in the original lorebooks.
          isSuggestion = true;
        } else {
          if (hasEntryChanges(revisedEntry, originalEntry)) {
            isSuggestion = true;
          }
        }

        // If the entry is new or modified, add it to our list of suggestions.
        if (isSuggestion) {
          if (!newSuggestedEntries[worldName]) {
            newSuggestedEntries[worldName] = [];
          }
          newSuggestedEntries[worldName].push(revisedEntry);
        }
      });
    });

    setSession((prev) => ({ ...prev, suggestedEntries: newSuggestedEntries }));
    st_echo('success', 'Changes from global revise session applied.');
  };

  const promptPresetItems = useMemo(
    (): PresetItem[] => Object.keys(settings.promptPresets).map((key) => ({ value: key, label: key })),
    [settings.promptPresets],
  );

  const worldInfoDropdownItems = useMemo(
    (): FancyDropdownItem[] => allWorldNames.map((name) => ({ value: name, label: name })),
    [allWorldNames],
  );

  const totalSelectedEntries = useMemo(
    () => Object.values(session.selectedEntryUids).reduce((sum, uids) => sum + uids.length, 0),
    [session.selectedEntryUids],
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const suggestedEntriesList = Object.entries(session.suggestedEntries).flatMap(([worldName, entries]) =>
    entries.map((entry) => ({ worldName, entry })),
  );
  const visibleSuggestedEntriesList = suggestedEntriesList
    .filter(({ worldName, entry }) => {
      if (suggestionTargetFilter !== 'all' && worldName !== suggestionTargetFilter) return false;
      const needle = suggestionSearch.trim().toLocaleLowerCase();
      if (!needle) return true;
      return `${worldName}\n${entry.comment ?? ''}\n${(entry.key ?? []).join(', ')}\n${entry.content ?? ''}`
        .toLocaleLowerCase()
        .includes(needle);
    })
    .sort((left, right) => {
      if (suggestionSort === 'title') {
        return (left.entry.comment ?? '').localeCompare(right.entry.comment ?? '');
      }
      if (suggestionSort === 'target') {
        return (
          left.worldName.localeCompare(right.worldName) ||
          (left.entry.comment ?? '').localeCompare(right.entry.comment ?? '')
        );
      }
      return suggestedEntriesList.indexOf(right) - suggestedEntriesList.indexOf(left);
    });
  const contextSectionCount =
    Number(settings.contextToSend.stDescription) +
    Number(settings.contextToSend.charCard) +
    Number(settings.contextToSend.authorNote) +
    Number(settings.contextToSend.worldInfo) +
    Number(settings.contextToSend.suggestedEntries);
  const responseTokenLimit = settings.maxResponseToken || 0;
  const tokenUsageEstimate = Math.min(
    responseTokenLimit,
    Math.max(0, Math.round((currentPromptText.length + suggestedEntriesList.length * 180) / 4)),
  );
  const tokenPercent =
    responseTokenLimit > 0 ? Math.min(100, Math.round((tokenUsageEstimate / responseTokenLimit) * 100)) : 0;

  return (
    <>
      <div id="worldInfoRecommenderPopup">
        <div className="wirc-app-header">
          <div className="wirc-title-lockup">
            <div className="wirc-logo">
              <i className="fa-solid fa-globe"></i>
            </div>
            <div>
              <h2>World Info Recommender</h2>
              <p>Find and craft lorebook entries from your roleplay.</p>
            </div>
          </div>
          <div className="wirc-header-meta">
            <div className="wirc-token-meter" title="Estimated response token budget">
              <span>
                {tokenUsageEstimate} / {responseTokenLimit || '--'} tokens
              </span>
              <div>
                <span style={{ width: `${tokenPercent}%` }}></span>
              </div>
            </div>
            <div className="wirc-header-actions">
              <STButton
                onClick={() => setIsImporting(true)}
                disabled={isGenerating}
                className="menu_button interactable"
                title="Import existing entries to continue or revise them"
              >
                <i className="fa-solid fa-download"></i> Import Entries
              </STButton>
              <STButton
                onClick={() => setIsGlobalReviseOpen(true)}
                disabled={isGenerating}
                className="menu_button interactable global-revise"
                title="Revise all selected existing entries and current suggestions in a single chat session"
              >
                <i className="fa-solid fa-wand-magic-sparkles"></i> Global Revise
              </STButton>
            </div>
          </div>
        </div>

        <div className="top-tab-bar wirc-mode-switch">
          <STButton
            className={`menu_button ${activeTab === 'recommender' ? 'active' : ''}`}
            onClick={() => setActiveTab('recommender')}
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i> Recommender
          </STButton>
          <STButton
            className={`menu_button ${activeTab === 'editor' ? 'active' : ''}`}
            onClick={() => setActiveTab('editor')}
          >
            <i className="fa-solid fa-book-open"></i> Lorebook Editor
          </STButton>
        </div>
        {activeTab === 'recommender' ? (
          <div className="wirc-recommender-grid">
            <aside className="wirc-rail">
              <section className="wirc-section">
                <div className="wirc-section-title">
                  <span>1</span>
                  <h3>Connection</h3>
                </div>
                <label>
                  Connection Profile
                  <STConnectionProfileSelect
                    key={settings.profileId || 'no-profile'}
                    initialSelectedProfileId={settings.profileId}
                    // @ts-ignore
                    onChange={(profile) => updateSetting('profileId', profile?.id)}
                  />
                </label>
                <details className="wirc-details">
                  <summary>Provider details</summary>
                  <ApiSettingsPanel
                    profileId={settings.profileId}
                    onProfileSelected={(id) => updateSetting('profileId', id)}
                  />
                </details>
              </section>

              <section className="wirc-section">
                <div className="wirc-section-title">
                  <span>2</span>
                  <h3>Context Sources</h3>
                </div>
                <div className="wirc-form-stack">
                  <label className="checkbox_label">
                    <input
                      type="checkbox"
                      checked={settings.contextToSend.stDescription}
                      onChange={(e) => updateContextToSend('stDescription', e.target.checked)}
                    />
                    Description of SillyTavern and Lorebook
                  </label>
                  {avatarKey !== '_global' && (
                    <div className="message-options">
                      <label>
                        Messages to Include
                        <select
                          className="text_pole"
                          value={settings.contextToSend.messages.type}
                          onChange={(e) =>
                            updateContextToSend('messages', {
                              ...settings.contextToSend.messages,
                              type: e.target.value as any,
                            })
                          }
                        >
                          <option value="none">None</option>
                          <option value="all">All Messages</option>
                          <option value="first">First X Messages</option>
                          <option value="last">Last X Messages</option>
                          <option value="range">Range</option>
                        </select>
                      </label>
                      {settings.contextToSend.messages.type === 'first' && (
                        <label className="inline-number-field">
                          First
                          <input
                            type="number"
                            className="text_pole small message-input"
                            min="1"
                            value={settings.contextToSend.messages.first ?? 10}
                            onChange={(e) =>
                              updateContextToSend('messages', {
                                ...settings.contextToSend.messages,
                                first: parseInt(e.target.value) || 10,
                              })
                            }
                          />
                          Messages
                        </label>
                      )}
                      {settings.contextToSend.messages.type === 'last' && (
                        <label className="inline-number-field">
                          Last
                          <input
                            type="number"
                            className="text_pole small message-input"
                            min="1"
                            value={settings.contextToSend.messages.last ?? 10}
                            onChange={(e) =>
                              updateContextToSend('messages', {
                                ...settings.contextToSend.messages,
                                last: parseInt(e.target.value) || 10,
                              })
                            }
                          />
                          Messages
                        </label>
                      )}
                      {settings.contextToSend.messages.type === 'range' && (
                        <label className="inline-number-field">
                          Range
                          <input
                            type="number"
                            className="text_pole small message-input"
                            min="0"
                            placeholder="Start"
                            value={settings.contextToSend.messages.range?.start ?? 0}
                            onChange={(e) =>
                              updateContextToSend('messages', {
                                ...settings.contextToSend.messages,
                                range: {
                                  ...settings.contextToSend.messages.range!,
                                  start: parseInt(e.target.value) || 0,
                                },
                              })
                            }
                          />
                          to
                          <input
                            type="number"
                            className="text_pole small message-input"
                            min="1"
                            placeholder="End"
                            value={settings.contextToSend.messages.range?.end ?? 10}
                            onChange={(e) =>
                              updateContextToSend('messages', {
                                ...settings.contextToSend.messages,
                                range: {
                                  ...settings.contextToSend.messages.range!,
                                  end: parseInt(e.target.value) || 10,
                                },
                              })
                            }
                          />
                        </label>
                      )}
                    </div>
                  )}
                  <label className="checkbox_label">
                    <input
                      type="checkbox"
                      checked={settings.contextToSend.charCard}
                      onChange={(e) => updateContextToSend('charCard', e.target.checked)}
                    />
                    Character Card
                  </label>
                  {groupMembers.length > 0 && (
                    <label>
                      Select Character
                      <select className="text_pole" title="Select character for your group.">
                        {groupMembers.map((member) => (
                          <option key={member.avatar} value={member.avatar}>
                            {member.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}
                  <label className="checkbox_label">
                    <input
                      type="checkbox"
                      checked={settings.contextToSend.authorNote}
                      onChange={(e) => updateContextToSend('authorNote', e.target.checked)}
                    />
                    Author Note
                  </label>
                  <label className="checkbox_label">
                    <input
                      type="checkbox"
                      checked={settings.contextToSend.worldInfo}
                      onChange={(e) => updateContextToSend('worldInfo', e.target.checked)}
                    />
                    World Info
                  </label>
                  <label>
                    Lorebooks to Include
                    <STFancyDropdown
                      items={worldInfoDropdownItems}
                      value={session.selectedWorldNames}
                      onChange={(newValues) => {
                        setSession((prev) => {
                          const newSelectedEntryUids = { ...prev.selectedEntryUids };
                          const removedWorlds = prev.selectedWorldNames.filter((w) => !newValues.includes(w));
                          removedWorlds.forEach((w) => delete newSelectedEntryUids[w]);
                          return { ...prev, selectedWorldNames: newValues, selectedEntryUids: newSelectedEntryUids };
                        });
                      }}
                      multiple
                      enableSearch
                    />
                  </label>
                  {session.selectedWorldNames.length > 0 && (
                    <div className="entry-selection-control">
                      <STButton
                        className="menu_button"
                        onClick={() => setIsSelectingEntries(true)}
                        title="Select specific entries from the chosen lorebooks"
                      >
                        <i className="fa-solid fa-list-check"></i>
                        Select Entries
                      </STButton>
                      <span>
                        {totalSelectedEntries > 0 ? `${totalSelectedEntries} selected` : 'All entries included'}
                      </span>
                    </div>
                  )}
                  <label className="checkbox_label">
                    <input
                      type="checkbox"
                      checked={settings.contextToSend.suggestedEntries}
                      onChange={(e) => updateContextToSend('suggestedEntries', e.target.checked)}
                    />
                    Existing Suggestions
                  </label>
                </div>
              </section>

              <section className="wirc-section">
                <div className="wirc-section-title">
                  <span>3</span>
                  <h3>Token & Length Limits</h3>
                </div>
                <div className="wirc-form-stack">
                  <label>
                    Max Context
                    <select
                      className="text_pole"
                      title="Select Max Context Type"
                      value={settings.maxContextType}
                      onChange={(e) => updateSetting('maxContextType', e.target.value as any)}
                    >
                      <option value="profile">Use profile preset</option>
                      <option value="sampler">Use active preset in sampler settings</option>
                      <option value="custom">Custom</option>
                    </select>
                  </label>
                  {settings.maxContextType === 'custom' && (
                    <label>
                      Custom Context Tokens
                      <input
                        type="number"
                        className="text_pole"
                        min="1"
                        step="1"
                        placeholder="Enter max tokens"
                        value={settings.maxContextValue}
                        onChange={(e) => updateSetting('maxContextValue', parseInt(e.target.value) || 2048)}
                      />
                    </label>
                  )}
                  <label>
                    Max Response Tokens
                    <input
                      type="number"
                      className="text_pole"
                      min="1"
                      step="1"
                      placeholder="Enter max response tokens"
                      value={settings.maxResponseToken}
                      onChange={(e) => updateSetting('maxResponseToken', parseInt(e.target.value) || 256)}
                    />
                  </label>
                </div>
              </section>

              <section className="wirc-section">
                <div className="wirc-section-title">
                  <span>4</span>
                  <h3>Prompt</h3>
                </div>
                <div className="wirc-form-stack">
                  <STPresetSelect
                    label="Prompt Preset"
                    items={promptPresetItems}
                    value={settings.promptPreset}
                    readOnlyValues={['default']}
                    onChange={(newValue) => updateSetting('promptPreset', newValue ?? 'default')}
                    onItemsChange={(newItems) => {
                      const newPresets = newItems.reduce(
                        (acc, item) => {
                          acc[item.value] = settings.promptPresets[item.value] ?? { content: '' };
                          return acc;
                        },
                        {} as Record<string, { content: string }>,
                      );
                      updateSetting('promptPresets', newPresets);
                    }}
                    enableCreate
                    enableRename
                    enableDelete
                  />
                  <STTextarea
                    value={settings.promptPresets[settings.promptPreset]?.content ?? ''}
                    onChange={(e) => {
                      const newPresets = { ...settings.promptPresets };
                      if (newPresets[settings.promptPreset]) {
                        newPresets[settings.promptPreset].content = e.target.value;
                        updateSetting('promptPresets', newPresets);
                      }
                    }}
                    placeholder="e.g., Suggest entries for places {{user}} visited."
                    rows={4}
                    style={{ width: '100%' }}
                  />
                  <STButton
                    onClick={() => handleGeneration()}
                    disabled={isGenerating}
                    className="menu_button interactable generate"
                  >
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    {isGenerating ? 'Generating...' : 'Generate Suggestions'}
                  </STButton>
                </div>
              </section>
            </aside>

            <main className="wirc-panel wirc-results-panel">
              <div className="wirc-panel-heading">
                <div>
                  <h3>
                    Suggested Entries <span>{suggestedEntriesList.length}</span>
                  </h3>
                  <p>AI-crafted lorebook entries based on your current context.</p>
                </div>
                <div className="panel-tab-bar">
                  <STButton
                    className={`menu_button ${suggestionTab === 'suggestions' ? 'active' : ''}`}
                    onClick={() => setSuggestionTab('suggestions')}
                  >
                    Suggestions
                  </STButton>
                  <STButton
                    className={`menu_button ${suggestionTab === 'preview' ? 'active' : ''}`}
                    onClick={() => setSuggestionTab('preview')}
                  >
                    Prompt Preview
                  </STButton>
                </div>
              </div>
              {suggestionTab === 'suggestions' ? (
                <>
                  <div className="suggestion-tools">
                    <label className="search-field">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <input
                        className="text_pole"
                        value={suggestionSearch}
                        onChange={(event) => setSuggestionSearch(event.target.value)}
                        placeholder="Search entries..."
                      />
                    </label>
                    <select
                      className="text_pole"
                      value={suggestionTargetFilter}
                      onChange={(event) => setSuggestionTargetFilter(event.target.value)}
                    >
                      <option value="all">All Targets</option>
                      {allWorldNames.map((name) => (
                        <option key={name} value={name}>
                          {name}
                        </option>
                      ))}
                    </select>
                    <select
                      className="text_pole"
                      value={suggestionSort}
                      onChange={(event) => setSuggestionSort(event.target.value as typeof suggestionSort)}
                    >
                      <option value="newest">Newest First</option>
                      <option value="title">Title A-Z</option>
                      <option value="target">Target A-Z</option>
                    </select>
                    <div className="actions wirc-list-actions">
                      <STButton
                        onClick={handleAddAll}
                        disabled={isGenerating || suggestedEntriesList.length === 0}
                        className="menu_button interactable"
                      >
                        <i className="fa-solid fa-plus"></i> Add All
                      </STButton>
                      <STButton onClick={handleReset} disabled={isGenerating} className="menu_button interactable">
                        <i className="fa-solid fa-rotate-left"></i> Reset
                      </STButton>
                    </div>
                  </div>
                  <div className="suggestion-list">
                    {suggestedEntriesList.length === 0 && (
                      <p className="empty-state">No suggestions yet. Send a prompt to get started.</p>
                    )}
                    {suggestedEntriesList.length > 0 && visibleSuggestedEntriesList.length === 0 && (
                      <p className="empty-state">No suggestions match the current filters.</p>
                    )}
                    {visibleSuggestedEntriesList.map(({ worldName, entry }, index) => (
                      <SuggestedEntry
                        key={`${worldName}-${entry.uid}-${entry.comment}`}
                        displayIndex={index + 1}
                        initialWorldName={worldName}
                        entry={entry}
                        allWorldNames={allWorldNames}
                        existingEntry={entriesGroupByWorldName[worldName]?.find((e) => e.uid === entry.uid)}
                        sessionRegexIds={session.regexIds}
                        onAdd={handleAddSingleEntry}
                        onRemove={handleRemoveEntry}
                        onContinue={handleGeneration}
                        onUpdate={handleUpdateEntry}
                        entriesGroupByWorldName={entriesGroupByWorldName}
                        sessionForContext={session}
                        contextToSend={settings.contextToSend}
                      />
                    ))}
                  </div>
                  <div className="wirc-panel-footer">
                    <span>{visibleSuggestedEntriesList.length} visible</span>
                    <span>
                      <i className="fa-solid fa-circle-check"></i>
                      {isGenerating ? 'Generating suggestions...' : 'Ready for suggestions.'}
                    </span>
                  </div>
                </>
              ) : (
                <div className="prompt-preview-panel">
                  {isPreviewLoading && <p>Updating preview...</p>}
                  {previewError && <div className="preview-error">{previewError}</div>}
                  {!isPreviewLoading && !previewError && previewMessages.length === 0 && (
                    <p>No prompt messages to preview.</p>
                  )}
                  {previewMessages.map((message, index) => (
                    <section key={`${message.role}-${index}`} className={`preview-message ${message.role}`}>
                      <div className="preview-message-role">{message.role}</div>
                      <pre>{message.content}</pre>
                    </section>
                  ))}
                </div>
              )}
            </main>

            <aside className="wirc-panel wirc-right-rail">
              <div className="wirc-right-tabs">
                <STButton
                  className={`menu_button ${rightRailTab === 'settings' ? 'active' : ''}`}
                  onClick={() => setRightRailTab('settings')}
                >
                  Settings & Templates
                </STButton>
                <STButton
                  className={`menu_button ${rightRailTab === 'activity' ? 'active' : ''}`}
                  onClick={() => setRightRailTab('activity')}
                >
                  Activity
                </STButton>
              </div>
              {rightRailTab === 'settings' ? (
                <WorldInfoRecommenderSettings />
              ) : (
                <div className="wirc-activity-panel">
                  <div className="activity-stat-grid">
                    <div>
                      <span>{session.selectedWorldNames.length}</span>
                      <p>Lorebooks</p>
                    </div>
                    <div>
                      <span>{totalSelectedEntries || 'All'}</span>
                      <p>Entries</p>
                    </div>
                    <div>
                      <span>{contextSectionCount}</span>
                      <p>Sources</p>
                    </div>
                    <div>
                      <span>{session.blackListedEntries.length}</span>
                      <p>Blocked</p>
                    </div>
                  </div>
                  <section>
                    <h4>Selected Lorebooks</h4>
                    {session.selectedWorldNames.length === 0 ? (
                      <p className="subtle">No lorebooks selected.</p>
                    ) : (
                      <ul>
                        {session.selectedWorldNames.map((worldName) => (
                          <li key={worldName}>{worldName}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                  <section>
                    <h4>Blocklist</h4>
                    {session.blackListedEntries.length === 0 ? (
                      <p className="subtle">No blocklisted suggestions.</p>
                    ) : (
                      <ul>
                        {session.blackListedEntries.map((entry) => (
                          <li key={entry}>{entry}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                </div>
              )}
            </aside>
          </div>
        ) : (
          <div className="wirc-editor-frame">
            <LorebookEditor
              entriesGroupByWorldName={entriesGroupByWorldName}
              onSaveEntries={handleSaveEditorEntries}
              onReplaceWorldEntries={handleReplaceEditorWorldEntries}
              onRefreshEntries={loadData}
              sessionForContext={session}
              contextToSend={settings.contextToSend}
            />
          </div>
        )}
      </div>
      {isSelectingEntries && (
        <Popup
          type={POPUP_TYPE.CONFIRM}
          content={
            <SelectEntriesPopup
              ref={selectEntriesPopupRef}
              entriesByWorldName={entriesForSelectionPopup}
              initialSelectedUids={session.selectedEntryUids}
              title="Select Entries to Include in Context"
            />
          }
          onComplete={(confirmed) => {
            if (confirmed && selectEntriesPopupRef.current) {
              const newSelection = selectEntriesPopupRef.current.getSelection();
              setSession((prev) => ({ ...prev, selectedEntryUids: newSelection }));
            }
            setIsSelectingEntries(false);
          }}
          options={{ wide: true }}
        />
      )}
      {isImporting && (
        <Popup
          type={POPUP_TYPE.CONFIRM}
          content={
            <SelectEntriesPopup
              ref={importPopupRef}
              entriesByWorldName={entriesGroupByWorldName}
              initialSelectedUids={{}}
              title="Select Entries to Import for Revision"
            />
          }
          onComplete={(confirmed) => {
            if (confirmed && importPopupRef.current) {
              const selection = importPopupRef.current.getSelection();
              handleImportEntries(selection);
            }
            setIsImporting(false);
          }}
          options={{ wide: true }}
        />
      )}
      {isGlobalReviseOpen && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            <ReviseSessionManager
              target={{ type: 'global' }}
              initialState={entriesForGlobalRevise}
              onClose={() => setIsGlobalReviseOpen(false)}
              onApply={handleApplyGlobalRevise}
              sessionForContext={session}
              allEntries={entriesGroupByWorldName}
              contextToSend={settings.contextToSend}
            />
          }
          onComplete={() => setIsGlobalReviseOpen(false)}
          options={{ wide: true, large: true }}
        />
      )}
    </>
  );
};
