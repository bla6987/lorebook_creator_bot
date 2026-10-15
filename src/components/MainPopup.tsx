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
  st_createNewWorldInfo,
  st_createWorldInfoEntry,
  st_echo,
  st_getCharaFilename,
  this_chid,
  world_names,
  WI_METADATA_KEY,
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
import {
  getChangedEntryFields,
  normalizeEntriesByWorld,
  normalizeExtendedEntry,
  OPTIONAL_ENTRY_FIELDS,
  OptionalEntryField,
  shouldForkBranchBook,
  toWorldInfoSaveFormat,
} from './lorebookEditorUtils.js';
import { WorldInfoRecommenderSettings } from './Settings.js';
import { loadMainSession, saveMainSession } from '../main-session-storage.js';
import { saveWorldInfoChecked } from '../world-info-save.js';
import { getMessageIndexes } from '../message-ranges.js';
import { createRevisionId, getEntryRevisionId, withEntryRevisionId } from '../revise-entry-identity.js';
import { relocateEntryRevisionSessions } from '../revise-session-storage.js';

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

// Private chat_metadata marker recording which chatId owns the bound chat lorebook.
// Because branching copies chat_metadata, a branch sees the parent's chatId here,
// which signals that its bound book was inherited and should be forked.
const WIRC_CHAT_BOOK_OWNER = 'worldInfoRecommender_chatBookOwner';

// These context members exist at runtime but are absent from the lib's typings.
const getChatContext = () =>
  SillyTavern.getContext() as typeof globalContext & {
    getCurrentChatId?: () => string | null | undefined;
    updateChatMetadata: (values: Record<string, unknown>, reset: boolean) => void;
    saveMetadata: () => Promise<void>;
    updateWorldInfoList: () => Promise<void>;
  };

const getAvatar = () => (this_chid ? st_getCharaFilename(this_chid) : selected_group);
type MobilePanel = 'setup' | 'suggestions' | 'settings' | 'activity';

const hasOwnEntryField = (entry: ExtendedWIEntry, field: OptionalEntryField) =>
  Object.prototype.hasOwnProperty.call(entry, field);

const buildEntryUpdatePayload = (entry: ExtendedWIEntry, existingEntry?: ExtendedWIEntry): Partial<ExtendedWIEntry> => {
  const normalizedEntry = normalizeExtendedEntry(entry);
  const payload: Partial<ExtendedWIEntry> = {
    key: normalizedEntry.key,
    content: normalizedEntry.content,
    comment: normalizedEntry.comment,
  };

  const revisionId = getEntryRevisionId(normalizedEntry);
  if (revisionId && (!existingEntry || !getEntryRevisionId(existingEntry))) payload._wircRevisionId = revisionId;

  OPTIONAL_ENTRY_FIELDS.forEach((field) => {
    if (hasOwnEntryField(normalizedEntry, field)) {
      (payload as Record<OptionalEntryField, ExtendedWIEntry[OptionalEntryField]>)[field] = normalizedEntry[field];
    }
  });

  return payload;
};

const hasEntryChanges = (entry: ExtendedWIEntry, existingEntry: ExtendedWIEntry) =>
  getChangedEntryFields(normalizeExtendedEntry(entry), existingEntry).length > 0;

// Adds or updates a suggestion inside a world's entry array, mutating it in place.
// Shared by the single-entry add and "Apply All" paths so the create/update/no-op
// rules live in exactly one place.
const applyEntryToWorld = (
  worldEntries: ExtendedWIEntry[],
  worldName: string,
  entry: ExtendedWIEntry,
): 'added' | 'updated' | 'unchanged' => {
  const existingEntry = worldEntries.find((e) => e.uid === entry.uid);
  if (existingEntry) {
    const needsRevisionId = !!getEntryRevisionId(entry) && !getEntryRevisionId(existingEntry);
    if (!hasEntryChanges(entry, existingEntry) && !needsRevisionId) return 'unchanged';
    Object.assign(existingEntry, buildEntryUpdatePayload(entry, existingEntry));
    return 'updated';
  }

  const created = st_createWorldInfoEntry(worldName, toWorldInfoSaveFormat(worldEntries));
  if (!created) throw new Error('Failed to create new World Info entry.');
  const newEntry = withEntryRevisionId(created, getEntryRevisionId(entry));
  worldEntries.push(newEntry);
  Object.assign(newEntry, buildEntryUpdatePayload(entry));
  return 'added';
};

const getSuggestionTargetKey = (worldName: string, entry: ExtendedWIEntry) =>
  `${worldName}::${entry.uid}::${entry.comment ?? ''}`;

// Cloning or editing another suggestion must not change this submitted snapshot's
// identity. Keep the source world in the key because UIDs are book-local.
const getSuggestionSnapshotKey = (worldName: string, entry: ExtendedWIEntry) => {
  const snapshot = { ...entry };
  // Opening a revision session stamps private metadata without changing the lore
  // submitted by an already pending application. It must still be acknowledged.
  delete snapshot._wircRevisionId;
  return JSON.stringify([worldName, snapshot]);
};

const removeCompletedSuggestions = (
  suggested: Record<string, ExtendedWIEntry[]>,
  completed: Set<string>,
): Record<string, ExtendedWIEntry[]> =>
  Object.fromEntries(
    Object.entries(suggested).map(([worldName, entries]) => [
      worldName,
      entries.filter((entry) => !completed.has(getSuggestionSnapshotKey(worldName, entry))),
    ]),
  );

const suggestionForTarget = (entry: ExtendedWIEntry, copyExistingSource: boolean): ExtendedWIEntry => {
  if (!copyExistingSource) return entry;
  const copy = structuredClone(entry);
  delete copy._wircRevisionId;
  return copy;
};

// Only a confirmed materialization of this exact suggestion may move its
// sessions to a UID allocated by the host. Ordinary copied markers cannot do so.
const relocateSuggestionHistory = async (
  sourceWorld: string,
  suggestion: ExtendedWIEntry,
  worldName: string,
  saved: ExtendedWIEntry[],
  allowRelocation: boolean,
) => {
  if (!allowRelocation) return;
  const revisionId = getEntryRevisionId(suggestion);
  if (!revisionId) return;
  const materialized = saved.find((entry) => getEntryRevisionId(entry) === revisionId);
  if (!materialized || (sourceWorld === worldName && materialized.uid === suggestion.uid)) return;
  try {
    const result = await relocateEntryRevisionSessions(
      revisionId,
      { worldName: sourceWorld, uid: suggestion.uid },
      { worldName, uid: materialized.uid },
    );
    if (!result.persisted) throw result.error ?? new Error('History storage is unavailable.');
  } catch (error) {
    console.warn('The lorebook entry was saved, but its revision history could not be moved:', error);
    st_echo('warning', 'Entry saved, but its revision history could not be moved to the assigned UID.');
  }
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
  const committedEntriesRef = useRef(entriesGroupByWorldName);
  committedEntriesRef.current = entriesGroupByWorldName;
  const worldTransactionsRef = useRef(new Map<string, Promise<unknown>>());
  // Deduplicate a submitted suggestion shared by overlapping Add / Apply All actions.
  const activeApplyActionsRef = useRef(0);
  const completedApplicationsRef = useRef(new Set<string>());
  const pendingChatTargetRef = useRef<{
    source: string;
    promise: Promise<{ worldName: string | null; baseEntries?: ExtendedWIEntry[] }>;
  } | null>(null);
  const explicitOtherTargetsRef = useRef(new Set<string>());
  const implicitChatTargetsRef = useRef(new Map<string, string>());
  const publishWorldEntries = useCallback((worldName: string, entries: ExtendedWIEntry[]) => {
    committedEntriesRef.current = { ...committedEntriesRef.current, [worldName]: entries };
    setEntriesGroupByWorldName((previous) => ({ ...previous, [worldName]: entries }));
  }, []);
  const enqueueWorldTransaction = useCallback(<T,>(worldName: string, action: () => Promise<T>): Promise<T> => {
    const previous = worldTransactionsRef.current.get(worldName) ?? Promise.resolve();
    const result = previous.catch(() => {}).then(action);
    worldTransactionsRef.current.set(worldName, result);
    const cleanup = () => {
      if (worldTransactionsRef.current.get(worldName) === result) worldTransactionsRef.current.delete(worldName);
    };
    void result.then(cleanup, cleanup);
    return result;
  }, []);
  const finishApplyAction = () => {
    if (--activeApplyActionsRef.current === 0) completedApplicationsRef.current.clear();
  };
  const [groupMembers, setGroupMembers] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState<'recommender' | 'editor'>('recommender');
  const [suggestionTab, setSuggestionTab] = useState<'suggestions' | 'preview'>('suggestions');
  const [rightRailTab, setRightRailTab] = useState<'settings' | 'activity'>('settings');
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>('setup');
  const [suggestionSearch, setSuggestionSearch] = useState('');
  const [suggestionTargetFilter, setSuggestionTargetFilter] = useState('all');
  const [suggestionSort, setSuggestionSort] = useState<'newest' | 'title' | 'target'>('newest');
  const suggestionTargetWorlds = session.suggestionTargetWorlds ?? {};
  const setSuggestionTargetWorlds = useCallback(
    (update: Record<string, string> | ((previous: Record<string, string>) => Record<string, string>)) => {
      setSession((previous) => ({
        ...previous,
        suggestionTargetWorlds: typeof update === 'function' ? update(previous.suggestionTargetWorlds ?? {}) : update,
        explicitOtherTargets: [...explicitOtherTargetsRef.current],
      }));
    },
    [],
  );
  const [previewMessages, setPreviewMessages] = useState<Message[]>([]);
  const [previewError, setPreviewError] = useState('');
  const [isPreviewLoading, setIsPreviewLoading] = useState(false);
  const [isSelectingEntries, setIsSelectingEntries] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [isGlobalReviseOpen, setIsGlobalReviseOpen] = useState(false);

  const selectEntriesPopupRef = useRef<SelectEntriesPopupRef>(null);
  const importPopupRef = useRef<SelectEntriesPopupRef>(null);
  const previousSuggestionCountRef = useRef(0);
  const loadVersionRef = useRef(0);
  const loadedSessionRef = useRef<{ key: string; writable: boolean } | null>(null);

  const avatarKey = useMemo(() => getAvatar() ?? '_global', [this_chid, selected_group]);

  const loadData = useCallback(async () => {
    const version = ++loadVersionRef.current;
    loadedSessionRef.current = null;
    setIsLoading(true);
    committedEntriesRef.current = {};
    setEntriesGroupByWorldName({});
    setAllWorldNames([]);
    setGroupMembers([]);
    setSuggestionTargetWorlds({});
    explicitOtherTargetsRef.current.clear();
    implicitChatTargetsRef.current.clear();

    const avatar = getAvatar();
    const loaded = await loadMainSession(avatarKey);
    if (version !== loadVersionRef.current) return;
    const savedSession = loaded.value;
    if (loaded.error) {
      console.warn('Could not fully load/migrate World Info Recommender history:', loaded.error);
      st_echo(
        'warning',
        loaded.writable
          ? 'Saved history was loaded from the original storage, but could not be migrated. The original has been kept.'
          : 'History storage could not be read safely. The original data has been kept; reopen this popup before saving history.',
      );
    }
    const initialSession: Session = {
      suggestedEntries: normalizeEntriesByWorld(savedSession.suggestedEntries ?? {}),
      blackListedEntries: savedSession.blackListedEntries ?? [],
      selectedWorldNames: savedSession.selectedWorldNames ?? [],
      selectedEntryUids: savedSession.selectedEntryUids ?? {},
      regexIds: savedSession.regexIds ?? {},
      suggestionTargetWorlds: savedSession.suggestionTargetWorlds ?? {},
      implicitChatTargets: savedSession.implicitChatTargets ?? {},
      explicitOtherTargets: savedSession.explicitOtherTargets ?? [],
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

    if (version !== loadVersionRef.current) return;
    loadedEntries = normalizeEntriesByWorld(loadedEntries);
    committedEntriesRef.current = loadedEntries;
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
    implicitChatTargetsRef.current = new Map(Object.entries(initialSession.implicitChatTargets ?? {}));
    explicitOtherTargetsRef.current = new Set(initialSession.explicitOtherTargets ?? []);
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

    loadedSessionRef.current = { key: avatarKey, writable: loaded.writable };
    setIsLoading(false);
  }, [avatarKey]);

  useEffect(() => {
    void loadData();
    return () => {
      ++loadVersionRef.current;
      loadedSessionRef.current = null;
    };
  }, [loadData]);

  useEffect(() => {
    if (isLoading || loadedSessionRef.current?.key !== avatarKey || !loadedSessionRef.current?.writable) return;
    void saveMainSession(avatarKey, session).then((result) => {
      if (!result.persisted) {
        console.warn('Failed to save World Info Recommender session:', result.error);
        st_echo('warning', 'Session history could not be saved. Keep this popup open and check browser storage.');
      }
    });
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

    buildPromptOptions.messageIndexesBetween = !avatar
      ? { start: -1, end: -1 }
      : getMessageIndexes(settings.contextToSend.messages, globalContext.chat?.length ?? 0);

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

  // Reflect a newly available lorebook in the local UI state without a full reload.
  // Pass seedEntries to register a freshly-copied book together with its entries.
  const registerWorldLocally = useCallback(
    (worldName: string, seedEntries?: ExtendedWIEntry[]) => {
      setAllWorldNames((prev) => (prev.includes(worldName) ? prev : [...prev, worldName]));
      if (!committedEntriesRef.current[worldName]) {
        publishWorldEntries(worldName, seedEntries ? [...seedEntries] : []);
      }
      setSession((prev) =>
        prev.selectedWorldNames.includes(worldName)
          ? prev
          : { ...prev, selectedWorldNames: [...prev.selectedWorldNames, worldName] },
      );
    },
    [publishWorldEntries],
  );

  // Returns the lorebook bound to the current chat, creating one if it doesn't exist yet.
  const resolveOrCreateChatLorebook = useCallback(async (): Promise<string | null> => {
    const context = getChatContext();
    const chatId = context.getCurrentChatId?.();
    if (!chatId) {
      st_echo('warning', 'Open a chat first so a chat-specific lorebook can be created.');
      return null;
    }

    // Reuse the lorebook already bound to this chat when it still exists.
    const boundName = context.chatMetadata?.[WI_METADATA_KEY];
    if (boundName && world_names.includes(boundName)) {
      registerWorldLocally(boundName);
      return boundName;
    }

    // Otherwise create a fresh chat-specific lorebook and bind it to the chat.
    const baseName = `Chat Book ${chatId}`
      .replace(/[^a-z0-9 -]/gi, '_')
      .replace(/_{2,}/g, '_')
      .substring(0, 64);
    let worldName = baseName;
    for (let counter = 1; world_names.includes(worldName); counter++) {
      worldName = `${baseName} ${counter}`;
    }

    const created = await st_createNewWorldInfo(worldName, { interactive: false });
    if (!created || !world_names.includes(worldName)) {
      st_echo('error', 'Failed to create a chat-specific lorebook.');
      return null;
    }

    // Stamp ownership so this chat never forks its own freshly-created book.
    context.updateChatMetadata({ [WI_METADATA_KEY]: worldName, [WIRC_CHAT_BOOK_OWNER]: chatId }, false);
    await context.saveMetadata();
    registerWorldLocally(worldName);
    st_echo('success', `Created chat lorebook "${worldName}".`);
    return worldName;
  }, [registerWorldLocally]);

  // Copies the inherited chat lorebook into a new branch-specific book, binds the
  // branch to it, disables the parent for this chat, and claims ownership so the
  // branch forks at most once. Returns the new name + its copied entries.
  const forkChatLorebookForBranch = useCallback(
    async (sourceBook: string, chatId: string): Promise<{ name: string; baseEntries: ExtendedWIEntry[] } | null> => {
      const context = getChatContext();

      // Name = parent title (trailing branch suffix stripped) + this branch's label.
      const match = chatId.match(/(Branch|Checkpoint)\s*#?\s*(\d+)/i);
      const branchLabel = match ? `${match[1]} ${match[2]}` : `branch ${chatId}`;
      const baseTitle = sourceBook.replace(/ - (?:Branch|Checkpoint)\s*#?\s*\d+$/i, '');
      const rawName = `${baseTitle} - ${branchLabel}`
        .replace(/[^a-z0-9 -]/gi, '_')
        .replace(/_{2,}/g, '_')
        .substring(0, 64);
      let worldName = rawName;
      for (let counter = 1; world_names.includes(worldName); counter++) {
        worldName = `${rawName} (${counter})`;
      }

      // Copy the parent's entries into the new book on disk. Write immediately (not
      // debounced) so updateWorldInfoList sees the new file — mirrors ST's own
      // world-duplicate flow.
      const data = await globalContext.loadWorldInfo(sourceBook);
      if (!data) {
        st_echo('error', `Could not load "${sourceBook}" to fork a branch lorebook.`);
        return null;
      }
      const cloned = Object.values(data.entries).map((entry) =>
        withEntryRevisionId(normalizeExtendedEntry(entry as ExtendedWIEntry), createRevisionId()),
      );
      await saveWorldInfoChecked(worldName, toWorldInfoSaveFormat(cloned));
      await context.updateWorldInfoList();
      if (!world_names.includes(worldName)) {
        st_echo('error', 'Failed to create the branch lorebook.');
        return null;
      }

      // Bind the branch to the new book and claim ownership (disables the parent here).
      context.updateChatMetadata({ [WI_METADATA_KEY]: worldName, [WIRC_CHAT_BOOK_OWNER]: chatId }, false);
      await context.saveMetadata();

      // Seed exactly the snapshot copied to disk; another action may have changed
      // the parent while metadata persistence was pending.
      registerWorldLocally(worldName, cloned);
      setSession((prev) =>
        prev.selectedWorldNames.includes(sourceBook)
          ? { ...prev, selectedWorldNames: prev.selectedWorldNames.filter((name) => name !== sourceBook) }
          : prev,
      );

      globalContext.reloadWorldInfoEditor(worldName, true);
      st_echo('success', `Forked branch lorebook "${worldName}" from "${sourceBook}".`);
      return { name: worldName, baseEntries: cloned };
    },
    [registerWorldLocally],
  );

  // Resolves the lorebook an entry should be added to. Honors an explicit valid
  // target; otherwise forks the inherited chat book for a branch, or falls back
  // to reusing/creating the chat lorebook. May return copied baseEntries that the
  // caller must seed into the save so a freshly-forked copy isn't clobbered.
  const resolveTargetForAdd = useCallback(
    async (
      requestedWorldName: string,
      explicitOther = false,
    ): Promise<{ worldName: string | null; baseEntries?: ExtendedWIEntry[] }> => {
      const implicitTarget = implicitChatTargetsRef.current.get(requestedWorldName);
      if (!explicitOther && implicitTarget && getChatContext().chatMetadata?.[WI_METADATA_KEY] === implicitTarget) {
        return { worldName: implicitTarget };
      }
      const pending = pendingChatTargetRef.current;
      if (
        pending &&
        !explicitOther &&
        (!requestedWorldName ||
          requestedWorldName === pending.source ||
          requestedWorldName === getChatContext().chatMetadata?.[WI_METADATA_KEY])
      ) {
        return pending.promise;
      }
      const resolve = async (): Promise<{ worldName: string | null; baseEntries?: ExtendedWIEntry[] }> => {
        const context = getChatContext();
        const chatId = context.getCurrentChatId?.();
        const boundBook = context.chatMetadata?.[WI_METADATA_KEY];
        const owner = context.chatMetadata?.[WIRC_CHAT_BOOK_OWNER];
        const isBranch = !!context.chatMetadata?.main_chat;

        // 1. Explicit, valid, non-chat-book target -> respect it.
        if (requestedWorldName && requestedWorldName !== boundBook && allWorldNames.includes(requestedWorldName)) {
          return { worldName: requestedWorldName };
        }

        // 2. Branch still on an inherited chat book -> fork a branch-specific copy.
        if (
          shouldForkBranchBook({
            enabled: settings.branchLorebooks,
            boundBook,
            owner,
            isBranch,
            chatId,
            worldNames: world_names,
            requested: requestedWorldName,
          })
        ) {
          const forked = await forkChatLorebookForBranch(boundBook as string, chatId as string);
          if (forked) return { worldName: forked.name, baseEntries: forked.baseEntries };
          return { worldName: null };
        }

        // 3. Default: reuse or create the chat lorebook.
        return { worldName: await resolveOrCreateChatLorebook() };
      };
      const source = getChatContext().chatMetadata?.[WI_METADATA_KEY] ?? '';
      const isChatTarget =
        !requestedWorldName || requestedWorldName === source || !allWorldNames.includes(requestedWorldName);
      const promise = resolve();
      if (!isChatTarget) return promise;
      const operation = { source, promise };
      pendingChatTargetRef.current = operation;
      try {
        const resolved = await promise;
        if (source && resolved.worldName && source !== resolved.worldName) {
          implicitChatTargetsRef.current.set(source, resolved.worldName);
          setSession((previous) => ({
            ...previous,
            implicitChatTargets: Object.fromEntries(implicitChatTargetsRef.current),
          }));
        }
        return resolved;
      } finally {
        if (pendingChatTargetRef.current === operation) pendingChatTargetRef.current = null;
      }
    },
    [allWorldNames, settings.branchLorebooks, forkChatLorebookForBranch, resolveOrCreateChatLorebook],
  );

  const addEntry = useCallback(
    async (
      entry: ExtendedWIEntry,
      worldName: string,
      sourceWorld: string,
    ): Promise<'added' | 'updated' | 'unchanged'> =>
      enqueueWorldTransaction(worldName, async () => {
        const applicationKey = JSON.stringify([worldName, getSuggestionSnapshotKey(sourceWorld, entry)]);
        if (completedApplicationsRef.current.has(applicationKey)) return 'unchanged';
        // Read only when this transaction begins, after earlier saves published.
        const sourceExists = (committedEntriesRef.current[sourceWorld] ?? []).some(
          (stored) => stored.uid === entry.uid,
        );
        const worldEntries = structuredClone(committedEntriesRef.current[worldName] ?? []);
        const candidate = suggestionForTarget(entry, sourceExists && sourceWorld !== worldName);
        const status = applyEntryToWorld(worldEntries, worldName, candidate);
        if (status !== 'unchanged') {
          await saveWorldInfoChecked(worldName, toWorldInfoSaveFormat(worldEntries));
          publishWorldEntries(worldName, worldEntries);
          globalContext.reloadWorldInfoEditor(worldName, true);
        }
        completedApplicationsRef.current.add(applicationKey);
        await relocateSuggestionHistory(sourceWorld, entry, worldName, worldEntries, !sourceExists);
        return status;
      }),
    [enqueueWorldTransaction, publishWorldEntries],
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
                  const previousEntry = newSuggested[worldName][entryIndex];
                  const revised = normalizeExtendedEntry(updatedEntry);
                  delete revised._wircRevisionId;
                  const revisionId = getEntryRevisionId(previousEntry);
                  newSuggested[worldName][entryIndex] = revisionId ? withEntryRevisionId(revised, revisionId) : revised;
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
  const isPreviewActive = !isLoading && activeTab === 'recommender' && suggestionTab === 'preview';
  // Only serialize the (potentially large) preview inputs when the preview is actually
  // visible — this used to run a full JSON.stringify on every render of the popup.
  const previewDependencyKey = useMemo(
    () =>
      isPreviewActive
        ? JSON.stringify({
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
          })
        : '',
    [
      isPreviewActive,
      settings.profileId,
      settings.promptPreset,
      currentPromptText,
      settings.contextToSend,
      settings.maxContextType,
      settings.maxContextValue,
      settings.prompts,
      settings.mainContextTemplatePreset,
      settings.mainContextTemplatePresets,
      session,
    ],
  );

  useEffect(() => {
    if (!isPreviewActive) {
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
    isPreviewActive,
    settings.profileId,
    currentPromptText,
    previewDependencyKey,
    session,
    entriesGroupByWorldName,
    buildRecommendationRequestContext,
  ]);

  const handleAddSingleEntry = useCallback(
    async (entry: ExtendedWIEntry, worldName: string, selectedTargetWorld: string) => {
      activeApplyActionsRef.current++;
      const submitted = structuredClone(entry);
      try {
        const { worldName: targetWorld } = await resolveTargetForAdd(
          selectedTargetWorld,
          explicitOtherTargetsRef.current.has(getSuggestionTargetKey(worldName, submitted)),
        );
        if (!targetWorld) return;
        setSuggestionTargetWorlds((previous) => ({
          ...previous,
          [getSuggestionTargetKey(worldName, submitted)]: targetWorld,
        }));
        const status = await addEntry(submitted, targetWorld, worldName);
        if (status === 'unchanged') {
          st_echo('info', `No changes detected for "${entry.comment}". Entry was not updated.`);
        } else {
          st_echo('success', status === 'added' ? 'Entry added' : 'Entry updated');
        }

        setSession((prev) => ({
          ...prev,
          suggestedEntries: removeCompletedSuggestions(
            prev.suggestedEntries,
            new Set([getSuggestionSnapshotKey(worldName, submitted)]),
          ),
        }));
        setSuggestionTargetWorlds((prev) => {
          const key = getSuggestionTargetKey(worldName, entry);
          if (!(key in prev)) return prev;
          const next = { ...prev };
          delete next[key];
          return next;
        });
      } catch (error: any) {
        console.error(error);
        st_echo('error', `Failed to add entry: ${error.message}`);
      } finally {
        finishApplyAction();
      }
    },
    [addEntry, resolveTargetForAdd],
  );

  const handleAddAll = async () => {
    const totalEntries = Object.values(session.suggestedEntries).flat().length;
    if (totalEntries === 0) return st_echo('warning', 'No entries to add.');
    const confirmed = await globalContext.Popup.show.confirm(
      'Apply All Suggestions',
      `Apply all ${totalEntries} suggested entries? Existing UIDs will be updated; unmatched suggestions will be added as new entries.`,
    );
    if (!confirmed) return;

    setIsGenerating(true);
    activeApplyActionsRef.current++;
    try {
      const completed = new Set<string>();
      let addedCount = 0;
      let updatedCount = 0;
      let unchangedCount = 0;
      const inheritedBook = getChatContext().chatMetadata?.[WI_METADATA_KEY];
      const isExplicitOther = (selected: string, sourceWorld: string, entry: ExtendedWIEntry) => {
        const pendingSource = pendingChatTargetRef.current?.source;
        const implicitTarget = implicitChatTargetsRef.current.get(selected);
        if (
          (selected === pendingSource || (implicitTarget && implicitTarget === inheritedBook)) &&
          !explicitOtherTargetsRef.current.has(getSuggestionTargetKey(sourceWorld, entry))
        )
          return false;
        return allWorldNames.includes(selected) && selected !== inheritedBook;
      };
      const targets = Object.entries(session.suggestedEntries).flatMap(([sourceWorld, entries]) =>
        entries.map((entry) => ({
          sourceWorld,
          entry: structuredClone(entry),
          selected: suggestionTargetWorlds[getSuggestionTargetKey(sourceWorld, entry)] ?? sourceWorld,
        })),
      );
      const explicitTargets = new Set(
        targets.filter(({ selected, sourceWorld, entry }) => isExplicitOther(selected, sourceWorld, entry)),
      );
      let chatTargetWorld = '';
      if (targets.some((target) => !explicitTargets.has(target))) {
        const resolved = await resolveTargetForAdd('');
        if (!resolved.worldName) return;
        chatTargetWorld = resolved.worldName;
      }
      const targetsByWorld = new Map<string, typeof targets>();
      const resolvedTargets: Record<string, string> = {};
      for (const target of targets) {
        const worldName = explicitTargets.has(target) ? target.selected : chatTargetWorld;
        resolvedTargets[getSuggestionTargetKey(target.sourceWorld, target.entry)] = worldName;
        const group = targetsByWorld.get(worldName) ?? [];
        group.push(target);
        targetsByWorld.set(worldName, group);
      }
      // A successful fork changes the binding before content persistence. Keep
      // that resolution even on failure so retry cannot target the inherited book.
      setSuggestionTargetWorlds((previous) => ({ ...previous, ...resolvedTargets }));

      for (const [worldName, worldTargets] of targetsByWorld) {
        try {
          const pending = await enqueueWorldTransaction(worldName, async () => {
            const entries = structuredClone(committedEntriesRef.current[worldName] ?? []);
            const results: {
              target: (typeof targets)[number];
              status: 'added' | 'updated' | 'unchanged';
              key: string;
              sourceExists: boolean;
            }[] = [];
            for (const target of worldTargets) {
              const key = JSON.stringify([worldName, getSuggestionSnapshotKey(target.sourceWorld, target.entry)]);
              try {
                const sourceExists = (committedEntriesRef.current[target.sourceWorld] ?? []).some(
                  (stored) => stored.uid === target.entry.uid,
                );
                const candidate = suggestionForTarget(target.entry, sourceExists && target.sourceWorld !== worldName);
                const status = completedApplicationsRef.current.has(key)
                  ? 'unchanged'
                  : applyEntryToWorld(entries, worldName, candidate);
                results.push({ target, status, key, sourceExists });
              } catch (error) {
                st_echo('error', `Failed to process entry: ${target.entry.comment}`);
              }
            }
            if (results.some(({ status }) => status !== 'unchanged')) {
              await saveWorldInfoChecked(worldName, toWorldInfoSaveFormat(entries));
              publishWorldEntries(worldName, entries);
              globalContext.reloadWorldInfoEditor(worldName, true);
            }
            results.forEach(({ key }) => completedApplicationsRef.current.add(key));
            await Promise.all(
              results.map(({ target, sourceExists }) =>
                relocateSuggestionHistory(target.sourceWorld, target.entry, worldName, entries, !sourceExists),
              ),
            );
            return results;
          });
          pending.forEach(({ target, status }) => {
            completed.add(getSuggestionSnapshotKey(target.sourceWorld, target.entry));
            if (status === 'added') addedCount++;
            else if (status === 'updated') updatedCount++;
            else unchangedCount++;
          });
        } catch (error) {
          st_echo('error', `Failed to save world: ${worldName}`);
        }
      }
      setSession((previous) => ({
        ...previous,
        suggestedEntries: removeCompletedSuggestions(previous.suggestedEntries, completed),
      }));
      const remainingCount = totalEntries - completed.size;
      st_echo(
        remainingCount ? 'warning' : 'success',
        `Applied: ${addedCount} new, ${updatedCount} updated, ${unchangedCount} unchanged.${remainingCount ? ` ${remainingCount} suggestions could not be applied and were kept.` : ''}`,
      );
    } catch (error) {
      st_echo('error', `Failed to apply suggestions: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      finishApplyAction();
      setIsGenerating(false);
    }
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
      explicitOtherTargetsRef.current.clear();
      setSuggestionTargetWorlds({});
      st_echo('success', 'Reset successful');
    }
  };

  const handleRemoveEntry = (entry: ExtendedWIEntry, worldName: string, isBlacklist: boolean) => {
    explicitOtherTargetsRef.current.delete(getSuggestionTargetKey(worldName, entry));
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
    setSuggestionTargetWorlds((prev) => {
      const key = getSuggestionTargetKey(worldName, entry);
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const handleUpdateEntry = (
    worldName: string,
    originalEntry: ExtendedWIEntry,
    updatedEntry: ExtendedWIEntry,
    updatedRegexIds?: Record<string, Partial<RegexScriptData>>,
  ) => {
    const oldKey = getSuggestionTargetKey(worldName, originalEntry);
    const newKey = getSuggestionTargetKey(worldName, updatedEntry);
    if (oldKey !== newKey && explicitOtherTargetsRef.current.delete(oldKey))
      explicitOtherTargetsRef.current.add(newKey);
    setSuggestionTargetWorlds((prev) => {
      const previousKey = getSuggestionTargetKey(worldName, originalEntry);
      const nextKey = getSuggestionTargetKey(worldName, updatedEntry);
      if (previousKey === nextKey || !(previousKey in prev)) return prev;
      const next = { ...prev, [nextKey]: prev[previousKey] };
      delete next[previousKey];
      return next;
    });
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

  const handleEnsureEntryIdentity = useCallback(
    async (worldName: string, draft: ExtendedWIEntry) => {
      const original = committedEntriesRef.current[worldName]?.find((entry) => entry.uid === draft.uid);
      if (!original) throw new Error('This entry no longer exists. Refresh the lorebook before revising it.');
      return enqueueWorldTransaction(worldName, async () => {
        // The host loader observes native editor saves too. Stamp only its current
        // stored entry: a dirty editor draft must never be persisted by opening Revise.
        const loaded = await globalContext.loadWorldInfo(worldName);
        const rawLatest = loaded?.entries?.[draft.uid] as ExtendedWIEntry | undefined;
        const latest = rawLatest && normalizeExtendedEntry(rawLatest);
        const draftId = getEntryRevisionId(draft);
        const latestId = latest && getEntryRevisionId(latest);
        const originalId = getEntryRevisionId(original);
        const sameBaseline = latest && new Set([...Object.keys(original), ...Object.keys(latest)]);
        if (
          !latest ||
          (draftId && draftId !== latestId) ||
          (originalId && originalId !== latestId) ||
          (!draftId &&
            !originalId &&
            sameBaseline &&
            [...sameBaseline].some(
              (field) =>
                field !== '_wircRevisionId' &&
                JSON.stringify((original as any)[field]) !== JSON.stringify((latest as any)[field]),
            ))
        ) {
          throw new Error('This entry changed or was replaced. Refresh the lorebook before applying its revision.');
        }
        const stamped = withEntryRevisionId(latest, latestId);
        if (!latestId) {
          const entries = Object.values(loaded!.entries).map((entry) =>
            (entry as ExtendedWIEntry).uid === draft.uid ? stamped : normalizeExtendedEntry(entry as ExtendedWIEntry),
          );
          await saveWorldInfoChecked(worldName, toWorldInfoSaveFormat(entries));
          publishWorldEntries(worldName, entries);
        }
        return withEntryRevisionId(draft, getEntryRevisionId(stamped));
      });
    },
    [enqueueWorldTransaction, publishWorldEntries],
  );

  const handleSaveEditorEntries = useCallback(
    async (worldName: string, payloads: SaveEntryPayload[]) =>
      enqueueWorldTransaction(worldName, async () => {
        const worldEntries = structuredClone(committedEntriesRef.current[worldName] ?? []);
        payloads.forEach(({ entry, originalUid }) => {
          const normalizedEntry = normalizeExtendedEntry(entry);
          const existingIndex = worldEntries.findIndex((item) => item.uid === originalUid);
          if (existingIndex === -1) worldEntries.push(normalizedEntry);
          else
            worldEntries[existingIndex] = {
              ...worldEntries[existingIndex],
              ...buildEntryUpdatePayload(normalizedEntry, worldEntries[existingIndex]),
              uid: originalUid,
            };
        });
        await saveWorldInfoChecked(worldName, toWorldInfoSaveFormat(worldEntries));
        publishWorldEntries(worldName, worldEntries);
        globalContext.reloadWorldInfoEditor(worldName, true);
      }),
    [enqueueWorldTransaction, publishWorldEntries],
  );

  const handleReplaceEditorWorldEntries = useCallback(
    async (worldName: string, entries: ExtendedWIEntry[]) => {
      // Save All submits a whole editor draft. Apply its delta to the latest world
      // so suggestions accepted while it was pending retain their own entries/edits.
      const baseline = structuredClone(committedEntriesRef.current[worldName] ?? []);
      const submitted = entries.map(normalizeExtendedEntry);
      await enqueueWorldTransaction(worldName, async () => {
        const previousByUid = new Map(baseline.map((entry) => [entry.uid, entry]));
        const submittedByUid = new Map(submitted.map((entry) => [entry.uid, entry]));
        const merged = structuredClone(committedEntriesRef.current[worldName] ?? [])
          .filter((entry) => !previousByUid.has(entry.uid) || submittedByUid.has(entry.uid))
          .map((entry) => {
            const updated = submittedByUid.get(entry.uid);
            const original = previousByUid.get(entry.uid);
            if (!updated || !original) return entry;
            const result = { ...entry };
            const resultFields = result as unknown as Record<string, unknown>;
            for (const field of new Set([...Object.keys(original), ...Object.keys(updated)])) {
              if (JSON.stringify((updated as any)[field]) === JSON.stringify((original as any)[field])) continue;
              if (Object.prototype.hasOwnProperty.call(updated, field)) resultFields[field] = (updated as any)[field];
              else delete resultFields[field];
            }
            return result;
          });
        const mergedUids = new Set(merged.map((entry) => entry.uid));
        submitted.forEach((entry) => {
          if (!previousByUid.has(entry.uid) && !mergedUids.has(entry.uid)) merged.push(entry);
        });
        await saveWorldInfoChecked(worldName, toWorldInfoSaveFormat(merged));
        publishWorldEntries(worldName, merged);
        globalContext.reloadWorldInfoEditor(worldName, true);
      });
    },
    [enqueueWorldTransaction, publishWorldEntries],
  );

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
    const mergedState: Record<string, ExtendedWIEntry[]> = structuredClone(entriesForSelectionPopup);
    const suggestedByUid = new Map<string, { worldName: string; entry: ExtendedWIEntry }>();

    Object.entries(session.suggestedEntries).forEach(([worldName, entries]) => {
      entries.forEach((entry) => {
        if (Number.isInteger(entry.uid)) {
          suggestedByUid.set(`${worldName}::${entry.uid}`, { worldName, entry });
        }
      });
    });

    Object.entries(mergedState).forEach(([worldName, entries]) => {
      entries.forEach((existingEntry, index) => {
        const key = `${worldName}::${existingEntry.uid}`;
        if (suggestedByUid.has(key)) {
          entries[index] = suggestedByUid.get(key)!.entry;
          suggestedByUid.delete(key);
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

  const suggestedEntriesList = useMemo(
    () =>
      Object.entries(session.suggestedEntries).flatMap(([worldName, entries]) =>
        entries.map((entry) => ({ worldName, entry })),
      ),
    [session.suggestedEntries],
  );

  const visibleSuggestedEntriesList = useMemo(() => {
    // Precompute each item's position so the "newest" sort is O(n log n) instead of
    // calling indexOf (O(n)) inside the comparator.
    const orderIndex = new Map(suggestedEntriesList.map((item, index) => [item, index] as const));
    const needle = suggestionSearch.trim().toLocaleLowerCase();
    return suggestedEntriesList
      .filter(({ worldName, entry }) => {
        if (suggestionTargetFilter !== 'all' && worldName !== suggestionTargetFilter) return false;
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
        return (orderIndex.get(right) ?? 0) - (orderIndex.get(left) ?? 0);
      });
  }, [suggestedEntriesList, suggestionSearch, suggestionTargetFilter, suggestionSort]);

  useEffect(() => {
    if (isLoading) return;

    const previousCount = previousSuggestionCountRef.current;
    const currentCount = suggestedEntriesList.length;

    if (currentCount === 0 && previousCount > 0) {
      setMobilePanel('setup');
    } else if (currentCount > previousCount) {
      setMobilePanel('suggestions');
      setSuggestionTab('suggestions');
    }

    previousSuggestionCountRef.current = currentCount;
  }, [isLoading, suggestedEntriesList.length]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
  const effectiveRightRailTab =
    mobilePanel === 'activity' ? 'activity' : mobilePanel === 'settings' ? 'settings' : rightRailTab;

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
        {activeTab === 'recommender' && (
          <div className="wirc-mobile-task-tabs" role="tablist" aria-label="Mobile work area">
            <STButton
              className={`menu_button ${mobilePanel === 'setup' ? 'active' : ''}`}
              onClick={() => setMobilePanel('setup')}
            >
              <i className="fa-solid fa-sliders"></i>
              Setup
            </STButton>
            <STButton
              className={`menu_button ${mobilePanel === 'suggestions' ? 'active' : ''}`}
              onClick={() => {
                setMobilePanel('suggestions');
                setSuggestionTab('suggestions');
              }}
            >
              <i className="fa-solid fa-list-check"></i>
              Results
              {suggestedEntriesList.length > 0 && <span>{suggestedEntriesList.length}</span>}
            </STButton>
            <STButton
              className={`menu_button ${mobilePanel === 'settings' ? 'active' : ''}`}
              onClick={() => {
                setMobilePanel('settings');
                setRightRailTab('settings');
              }}
            >
              <i className="fa-solid fa-gear"></i>
              Settings
            </STButton>
            <STButton
              className={`menu_button ${mobilePanel === 'activity' ? 'active' : ''}`}
              onClick={() => {
                setMobilePanel('activity');
                setRightRailTab('activity');
              }}
            >
              <i className="fa-solid fa-chart-simple"></i>
              Activity
            </STButton>
          </div>
        )}
        {activeTab === 'recommender' ? (
          <div className="wirc-recommender-grid">
            <aside className={`wirc-rail wirc-mobile-panel ${mobilePanel === 'setup' ? 'mobile-active' : ''}`}>
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

            <main
              className={`wirc-panel wirc-results-panel wirc-mobile-panel ${
                mobilePanel === 'suggestions' ? 'mobile-active' : ''
              }`}
            >
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
                  <div className="wirc-mobile-suggestion-actions">
                    <STButton
                      onClick={() => setIsImporting(true)}
                      disabled={isGenerating}
                      className="menu_button interactable"
                      title="Import existing entries to continue or revise them"
                    >
                      <i className="fa-solid fa-download"></i> Import
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
                        <i className="fa-solid fa-circle-check"></i> Apply All
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
                        selectedTargetWorld={
                          suggestionTargetWorlds[getSuggestionTargetKey(worldName, entry)] ?? worldName
                        }
                        sessionRegexIds={session.regexIds}
                        onTargetWorldChange={(targetWorldName) => {
                          const key = getSuggestionTargetKey(worldName, entry);
                          if (targetWorldName !== getChatContext().chatMetadata?.[WI_METADATA_KEY])
                            explicitOtherTargetsRef.current.add(key);
                          else explicitOtherTargetsRef.current.delete(key);
                          setSuggestionTargetWorlds((prev) => ({
                            ...prev,
                            [key]: targetWorldName,
                          }));
                        }}
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

            <aside
              className={`wirc-panel wirc-right-rail wirc-mobile-panel ${
                mobilePanel === 'settings' || mobilePanel === 'activity' ? 'mobile-active' : ''
              }`}
            >
              <div className="wirc-right-tabs">
                <STButton
                  className={`menu_button ${effectiveRightRailTab === 'settings' ? 'active' : ''}`}
                  onClick={() => {
                    setRightRailTab('settings');
                    setMobilePanel('settings');
                  }}
                >
                  Settings & Templates
                </STButton>
                <STButton
                  className={`menu_button ${effectiveRightRailTab === 'activity' ? 'active' : ''}`}
                  onClick={() => {
                    setRightRailTab('activity');
                    setMobilePanel('activity');
                  }}
                >
                  Activity
                </STButton>
              </div>
              {effectiveRightRailTab === 'settings' ? (
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
              onEnsureEntryIdentity={handleEnsureEntryIdentity}
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
