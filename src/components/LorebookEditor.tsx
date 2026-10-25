import { ChangeEvent, CSSProperties, FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Popup, STButton } from 'sillytavern-utils-lib/components/react';
import { st_echo } from 'sillytavern-utils-lib/config';
import { ExtendedWIEntry, SaveEntryPayload } from '../types.js';
import { escapeHtml } from '../html-utils.js';
import { Session } from '../generate.js';
import { ExtensionSettings } from '../settings.js';
import { ReviseSessionManager } from './ReviseSessionManager.js';
import { getEntryRevisionId, withEntryRevisionId } from '../revise-entry-identity.js';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import {
  ACTIVATION_OPTIONS,
  LorebookCategory,
  LorebookCategoryStorage,
  NO_FIRST_WORD_FILTER,
  POSITION_OPTIONS,
  ROLE_OPTIONS,
  SortSelection,
  UNCATEGORIZED_FILTER,
  buildFirstWordGrouping,
  filterEntriesByFirstWord,
  getActivationMode,
  getActivationUpdates,
  getEntryIdentity,
  getPositionLabel,
  getRoleLabel,
  normalizeEntriesByWorld,
  normalizeExtendedEntry,
  parseNumberInput,
  sanitizeCategoryColor,
  sanitizeCategoryIcon,
  sanitizeCategoryName,
  sanitizeCategoryStorage,
  sortEntries,
  toWorldInfoSaveFormat,
} from './lorebookEditorUtils.js';

const globalContext = SillyTavern.getContext();

const CATEGORY_STORAGE_KEY = 'worldInfoRecommender.lorebookEditor.categories';
const VIEW_MODE_STORAGE_KEY = 'worldInfoRecommender.lorebookEditor.viewMode';
const SELECTED_WORLD_STORAGE_KEY = 'worldInfoRecommender.lorebookEditor.selectedWorld';
const SORT_STORAGE_KEY = 'worldInfoRecommender.lorebookEditor.sort';

type ViewMode = 'card' | 'compact';

interface LorebookEditorProps {
  entriesGroupByWorldName: Record<string, ExtendedWIEntry[]>;
  onSaveEntries: (worldName: string, entries: SaveEntryPayload[]) => Promise<void>;
  onReplaceWorldEntries: (worldName: string, entries: ExtendedWIEntry[]) => Promise<void>;
  onRefreshEntries: () => void | Promise<void>;
  onEnsureEntryIdentity?: (worldName: string, entry: ExtendedWIEntry) => Promise<ExtendedWIEntry>;
  sessionForContext: Session;
  contextToSend: ExtensionSettings['contextToSend'];
}

interface EntryEditorProps {
  entry: ExtendedWIEntry;
  worldName: string;
  viewMode: ViewMode;
  isSelected: boolean;
  isDirty: boolean;
  isSaving: boolean;
  categoryId: string;
  categories: LorebookCategory[];
  onToggleSelected: (worldName: string, uid: number, event: ChangeEvent<HTMLInputElement>) => void;
  onChange: (worldName: string, uid: number, changes: Partial<ExtendedWIEntry>) => void;
  onCategoryChange: (worldName: string, uid: number, categoryId: string) => void;
  onSave: (worldName: string, uid: number) => void | Promise<void>;
  onDelete: (worldName: string, uid: number) => void | Promise<void>;
  onRevise: (worldName: string, uid: number) => void;
}

const readJsonStorage = <T,>(key: string, fallback: T): T => {
  if (typeof localStorage === 'undefined') return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
};

const writeJsonStorage = (key: string, value: unknown) => {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(key, JSON.stringify(value));
};

const sanitizeFileName = (value: string) => value.replace(/[\s.<>:"/\\|?*\u0000-\u001F\u007F]+/g, '_');

const parseTriggerInput = (value: string) =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const createCategoryId = () => {
  const randomId = globalThis.crypto?.randomUUID?.();
  return randomId ?? `category-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const categoryStyle = (category?: LorebookCategory): CSSProperties | undefined => {
  if (!category?.color) return undefined;
  return { '--lorebook-category-color': category.color } as CSSProperties;
};

const EntryEditor: FC<EntryEditorProps> = ({
  entry,
  worldName,
  viewMode,
  isSelected,
  isDirty,
  isSaving,
  categoryId,
  categories,
  onToggleSelected,
  onChange,
  onCategoryChange,
  onSave,
  onDelete,
  onRevise,
}) => {
  const selectedCategory = categories.find((category) => category.id === categoryId);
  const activationMode = getActivationMode(entry);
  const isCompact = viewMode === 'compact';
  const cardClass = [
    'lorebook-entry-card',
    isCompact ? 'compact' : 'card-view',
    isDirty ? 'dirty' : '',
    isSelected ? 'selected' : '',
  ]
    .filter(Boolean)
    .join(' ');
  const roleValue = entry.role ?? 0;

  const handleActivationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(worldName, entry.uid, getActivationUpdates(event.target.value as ReturnType<typeof getActivationMode>));
  };

  const handlePositionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const position = parseNumberInput(event.target.value);
    onChange(worldName, entry.uid, {
      position,
      role: position === 4 ? roleValue : null,
      depth: position === 4 ? (entry.depth ?? 4) : entry.depth,
    });
  };

  return (
    <article className={cardClass} data-uid={entry.uid} style={categoryStyle(selectedCategory)}>
      <div className="entry-card-topline">
        <label className="entry-card-select">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={(event) => onToggleSelected(worldName, entry.uid, event)}
          />
        </label>
        <span className="entry-card-category-swatch" title={selectedCategory?.name ?? 'Uncategorized'}>
          {selectedCategory?.icon ?? ''}
        </span>
        <input
          className="text_pole entry-title-input"
          value={entry.comment ?? ''}
          placeholder={`Entry ${entry.uid}`}
          onChange={(event) => onChange(worldName, entry.uid, { comment: event.target.value })}
        />
        <span className="entry-uid">UID {entry.uid}</span>
        {isDirty && <span className="entry-dirty-label">Unsaved</span>}
      </div>

      <div className="entry-card-controls">
        <label>
          Activation
          <select className="text_pole" value={activationMode} onChange={handleActivationChange}>
            {ACTIVATION_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Position
          <select className="text_pole" value={entry.position ?? ''} onChange={handlePositionChange}>
            <option value="">Unset</option>
            {POSITION_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Order
          <input
            className="text_pole"
            type="number"
            value={entry.order ?? ''}
            onChange={(event) => onChange(worldName, entry.uid, { order: parseNumberInput(event.target.value) })}
          />
        </label>
        {entry.position === 4 && (
          <>
            <label>
              Depth
              <input
                className="text_pole"
                type="number"
                min="0"
                value={entry.depth ?? ''}
                onChange={(event) =>
                  onChange(worldName, entry.uid, { depth: parseNumberInput(event.target.value) ?? null })
                }
              />
            </label>
            <label>
              Role
              <select
                className="text_pole"
                value={roleValue}
                onChange={(event) => onChange(worldName, entry.uid, { role: Number(event.target.value) })}
              >
                {ROLE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </>
        )}
        <label>
          Category
          <select
            className="text_pole"
            value={categoryId}
            onChange={(event) => onCategoryChange(worldName, entry.uid, event.target.value)}
          >
            <option value="">Uncategorized</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.icon ? `${category.icon} ` : ''}
                {category.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {!isCompact && (
        <div className="entry-card-body">
          <label>
            Triggers
            <textarea
              className="text_pole"
              rows={2}
              value={(entry.key ?? []).join(', ')}
              onChange={(event) => onChange(worldName, entry.uid, { key: parseTriggerInput(event.target.value) })}
            />
          </label>
          <label>
            Content
            <textarea
              className="text_pole"
              rows={5}
              value={entry.content ?? ''}
              onChange={(event) => onChange(worldName, entry.uid, { content: event.target.value })}
            />
          </label>
        </div>
      )}

      {isCompact && (
        <div className="compact-entry-summary">
          <span>{(entry.key ?? []).join(', ') || 'No triggers'}</span>
          <span>
            {getPositionLabel(entry.position)}
            {entry.position === 4 ? ` / ${getRoleLabel(entry.role)}` : ''}
          </span>
        </div>
      )}

      <div className="entry-card-actions">
        <STButton className="menu_button" onClick={() => onRevise(worldName, entry.uid)}>
          <i className="fa-solid fa-comments"></i> AI Revise
        </STButton>
        <STButton className="menu_button" disabled={!isDirty || isSaving} onClick={() => onSave(worldName, entry.uid)}>
          Save Entry
        </STButton>
        <STButton className="menu_button danger_button" onClick={() => onDelete(worldName, entry.uid)}>
          Delete
        </STButton>
      </div>
    </article>
  );
};

export const LorebookEditor: FC<LorebookEditorProps> = ({
  entriesGroupByWorldName,
  onSaveEntries,
  onReplaceWorldEntries,
  onRefreshEntries,
  onEnsureEntryIdentity,
  sessionForContext,
  contextToSend,
}) => {
  const normalizedEntries = useMemo(() => normalizeEntriesByWorld(entriesGroupByWorldName), [entriesGroupByWorldName]);
  const worldNames = useMemo(() => Object.keys(normalizedEntries), [normalizedEntries]);
  const [draftEntries, setDraftEntries] = useState<Record<string, ExtendedWIEntry[]>>(() =>
    normalizedEntries,
  );
  const [selectedWorldName, setSelectedWorldName] = useState(() => {
    const stored = typeof localStorage === 'undefined' ? '' : localStorage.getItem(SELECTED_WORLD_STORAGE_KEY) || '';
    return stored && normalizedEntries[stored] ? stored : (worldNames[0] ?? '');
  });
  const [viewMode, setViewMode] = useState<ViewMode>(() =>
    typeof localStorage !== 'undefined' && localStorage.getItem(VIEW_MODE_STORAGE_KEY) === 'compact'
      ? 'compact'
      : 'card',
  );
  const [sortSelection, setSortSelection] = useState<SortSelection>(() => {
    const stored = typeof localStorage === 'undefined' ? '' : localStorage.getItem(SORT_STORAGE_KEY) || '';
    return [
      'original',
      'name-asc',
      'name-desc',
      'uid-asc',
      'uid-desc',
      'order-asc',
      'order-desc',
      'date-asc',
      'date-desc',
    ].includes(stored)
      ? (stored as SortSelection)
      : 'original';
  });
  const [searchText, setSearchText] = useState('');
  const [entryPage, setEntryPage] = useState(0);
  const [firstWordFilter, setFirstWordFilter] = useState(NO_FIRST_WORD_FILTER);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [dirtyIds, setDirtyIds] = useState<Set<string>>(new Set());
  const [deletedIds, setDeletedIds] = useState<Set<string>>(new Set());
  const [isSaving, setIsSaving] = useState(false);
  const [categoryStorage, setCategoryStorage] = useState<LorebookCategoryStorage>(() =>
    sanitizeCategoryStorage(readJsonStorage(CATEGORY_STORAGE_KEY, {})),
  );
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryIcon, setNewCategoryIcon] = useState('');
  const [newCategoryColor, setNewCategoryColor] = useState('#6c7a89');
  const [bulkPrefix, setBulkPrefix] = useState('');
  const [bulkSuffix, setBulkSuffix] = useState('');
  const [bulkReplace, setBulkReplace] = useState('');
  const [bulkCounterStart, setBulkCounterStart] = useState('');
  const [bulkOrderStart, setBulkOrderStart] = useState('');
  const [bulkOrderDirection, setBulkOrderDirection] = useState<'asc' | 'desc'>('asc');
  const [bulkPosition, setBulkPosition] = useState('');
  const [bulkDepth, setBulkDepth] = useState('4');
  const [bulkRole, setBulkRole] = useState('0');
  const [reviseTarget, setReviseTarget] = useState<{ worldName: string; uid: number } | null>(null);

  const lastSelectedIdRef = useRef<string | null>(null);
  const draftEntriesRef = useRef(draftEntries);
  const dirtyIdsRef = useRef(dirtyIds);
  const deletedIdsRef = useRef(deletedIds);
  const previousBaselineRef = useRef(normalizedEntries);
  draftEntriesRef.current = draftEntries;
  dirtyIdsRef.current = dirtyIds;
  deletedIdsRef.current = deletedIds;

  useEffect(() => {
    const previousBaseline = previousBaselineRef.current;
    previousBaselineRef.current = normalizedEntries;
    // Parent saves refresh the baseline. Keep drafts that have not been acknowledged
    // by their own save, including edits made while an earlier save was in flight.
    setDraftEntries((previous) =>
      Object.fromEntries(
        Object.entries(normalizedEntries).map(([worldName, entries]) => {
          const previousEntries = previous[worldName] ?? [];
          const retained = new Map(
            previousEntries
              .filter((entry) => {
                const id = getEntryIdentity(worldName, entry.uid);
                return dirtyIdsRef.current.has(id) || deletedIdsRef.current.has(id);
              })
              .map((entry) => [entry.uid, entry]),
          );
          const merged = entries.map((entry) => {
            const draft = retained.get(entry.uid);
            if (!draft) return entry;
            const baseline = previousBaseline[worldName]?.find((old) => old.uid === entry.uid);
            if (!baseline) return draft;
            // Keep only fields the user changed. A save from another action may
            // have updated untouched fields on this very same entry meanwhile.
            const next = { ...entry } as ExtendedWIEntry & Record<string, unknown>;
            const oldFields = baseline as ExtendedWIEntry & Record<string, unknown>;
            const draftFields = draft as ExtendedWIEntry & Record<string, unknown>;
            for (const field of new Set([...Object.keys(baseline), ...Object.keys(draft)])) {
              if (field === '_wircRevisionId' || JSON.stringify(draftFields[field]) === JSON.stringify(oldFields[field])) continue;
              if (field in draftFields) next[field] = draftFields[field];
              else delete next[field];
            }
            return next;
          });
          const incomingUids = new Set(entries.map((entry) => entry.uid));
          retained.forEach((entry, uid) => {
            if (!incomingUids.has(uid)) merged.push(entry);
          });
          return [worldName, merged];
        }),
      ),
    );
    setSelectedWorldName((current) => {
      if (current && normalizedEntries[current]) return current;
      return worldNames[0] ?? '';
    });
  }, [normalizedEntries, worldNames]);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') localStorage.setItem(VIEW_MODE_STORAGE_KEY, viewMode);
  }, [viewMode]);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') localStorage.setItem(SORT_STORAGE_KEY, sortSelection);
  }, [sortSelection]);

  useEffect(() => {
    if (selectedWorldName && typeof localStorage !== 'undefined') {
      localStorage.setItem(SELECTED_WORLD_STORAGE_KEY, selectedWorldName);
    }
    lastSelectedIdRef.current = null;
    setSelectedIds(new Set());
    setFirstWordFilter(NO_FIRST_WORD_FILTER);
    setCategoryFilter('');
  }, [selectedWorldName]);

  const persistCategoryStorage = useCallback((next: LorebookCategoryStorage) => {
    const sanitized = sanitizeCategoryStorage(next);
    setCategoryStorage(sanitized);
    writeJsonStorage(CATEGORY_STORAGE_KEY, sanitized);
  }, []);

  const activeEntries = useMemo(
    () =>
      (draftEntries[selectedWorldName] ?? []).filter(
        (entry) => !deletedIds.has(getEntryIdentity(selectedWorldName, entry.uid)),
      ),
    [deletedIds, draftEntries, selectedWorldName],
  );

  const activeCategoryState = categoryStorage[selectedWorldName] ?? { categories: [], entryAssignments: {} };
  const activeCategories = activeCategoryState.categories;
  const activeAssignments = activeCategoryState.entryAssignments;

  const searchFilteredEntries = useMemo(() => {
    const needle = searchText.trim().toLocaleLowerCase();
    if (!needle) return activeEntries;
    return activeEntries.filter((entry) => {
      const haystack =
        `${entry.comment ?? ''}\n${(entry.key ?? []).join(',')}\n${entry.content ?? ''}`.toLocaleLowerCase();
      return haystack.includes(needle);
    });
  }, [activeEntries, searchText]);

  const firstWordOptions = useMemo(() => buildFirstWordGrouping(searchFilteredEntries), [searchFilteredEntries]);

  const visibleEntries = useMemo(() => {
    let entries = filterEntriesByFirstWord(searchFilteredEntries, firstWordFilter);
    if (categoryFilter === UNCATEGORIZED_FILTER) {
      entries = entries.filter((entry) => !activeAssignments[String(entry.uid)]);
    } else if (categoryFilter) {
      entries = entries.filter((entry) => activeAssignments[String(entry.uid)] === categoryFilter);
    }
    return sortEntries(entries, sortSelection);
  }, [activeAssignments, categoryFilter, firstWordFilter, searchFilteredEntries, sortSelection]);

  const entryPages = Math.max(1, Math.ceil(visibleEntries.length / 50));
  const currentEntryPage = Math.min(entryPage, entryPages - 1);
  const pageEntries = visibleEntries.slice(currentEntryPage * 50, (currentEntryPage + 1) * 50);
  useEffect(() => { setEntryPage(0); }, [selectedWorldName, searchText, firstWordFilter, categoryFilter, sortSelection]);

  const selectedEntries = useMemo(
    () => visibleEntries.filter((entry) => selectedIds.has(getEntryIdentity(selectedWorldName, entry.uid))),
    [selectedIds, selectedWorldName, visibleEntries],
  );
  const reviseEntry = useMemo(() => {
    if (!reviseTarget) return undefined;
    if (deletedIds.has(getEntryIdentity(reviseTarget.worldName, reviseTarget.uid))) return undefined;
    return draftEntries[reviseTarget.worldName]?.find((entry) => entry.uid === reviseTarget.uid);
  }, [deletedIds, draftEntries, reviseTarget]);

  const allVisibleSelected = visibleEntries.length > 0 && selectedEntries.length === visibleEntries.length;
  const hasUnsavedChanges = dirtyIds.size > 0 || deletedIds.size > 0;

  const markDirty = (worldName: string, uid: number) => {
    const id = getEntryIdentity(worldName, uid);
    setDirtyIds((previous) => new Set(previous).add(id));
  };

  const updateEntry = useCallback((worldName: string, uid: number, changes: Partial<ExtendedWIEntry>) => {
    setDraftEntries((previous) => {
      const entries = previous[worldName] ?? [];
      return {
        ...previous,
        [worldName]: entries.map((entry) => (entry.uid === uid ? { ...entry, ...changes } : entry)),
      };
    });
    markDirty(worldName, uid);
  }, []);

  const updateEntryWithSelection = useCallback(
    (worldName: string, uid: number, changes: Partial<ExtendedWIEntry>) => {
      const targetId = getEntryIdentity(worldName, uid);
      updateEntry(worldName, uid, changes);

      const bulkKeys = ['constant', 'vectorized', 'position', 'depth', 'role'];
      if (!bulkKeys.some((key) => key in changes) || selectedIds.size <= 1 || !selectedIds.has(targetId)) {
        return;
      }

      selectedIds.forEach((id) => {
        if (id === targetId || !id.startsWith(`${worldName}::`)) return;
        const selectedUid = Number(id.split('::')[1]);
        if (Number.isFinite(selectedUid)) updateEntry(worldName, selectedUid, changes);
      });
    },
    [selectedIds, updateEntry],
  );

  const handleToggleSelected = useCallback(
    (worldName: string, uid: number, event: ChangeEvent<HTMLInputElement>) => {
      const id = getEntryIdentity(worldName, uid);
      const shouldSelect = event.currentTarget.checked;
      const shiftKey = Boolean((event.nativeEvent as Event & { shiftKey?: boolean }).shiftKey);
      const lastId = lastSelectedIdRef.current;

      setSelectedIds((previous) => {
        const next = new Set(previous);
        if (shiftKey && lastId?.startsWith(`${worldName}::`)) {
          const startIndex = visibleEntries.findIndex((entry) => getEntryIdentity(worldName, entry.uid) === lastId);
          const endIndex = visibleEntries.findIndex((entry) => entry.uid === uid);
          if (startIndex !== -1 && endIndex !== -1) {
            const start = Math.min(startIndex, endIndex);
            const end = Math.max(startIndex, endIndex);
            for (let index = start; index <= end; index += 1) {
              const rangeId = getEntryIdentity(worldName, visibleEntries[index].uid);
              if (shouldSelect) next.add(rangeId);
              else next.delete(rangeId);
            }
            return next;
          }
        }

        if (shouldSelect) next.add(id);
        else next.delete(id);
        return next;
      });

      lastSelectedIdRef.current = id;
    },
    [visibleEntries],
  );

  const handleToggleAllVisible = () => {
    setSelectedIds((previous) => {
      const next = new Set(previous);
      if (allVisibleSelected) {
        visibleEntries.forEach((entry) => next.delete(getEntryIdentity(selectedWorldName, entry.uid)));
      } else {
        visibleEntries.forEach((entry) => next.add(getEntryIdentity(selectedWorldName, entry.uid)));
      }
      return next;
    });
  };

  const updateCategoryStorageForWorld = (
    updater: (categories: LorebookCategory[], assignments: Record<string, string>) => LorebookCategoryStorage[string],
  ) => {
    const previousState = categoryStorage[selectedWorldName] ?? { categories: [], entryAssignments: {} };
    const nextState = updater([...previousState.categories], { ...previousState.entryAssignments });
    persistCategoryStorage({ ...categoryStorage, [selectedWorldName]: nextState });
  };

  const handleCreateCategory = () => {
    const name = sanitizeCategoryName(newCategoryName);
    if (!selectedWorldName || !name) {
      st_echo('warning', 'Enter a category name first.');
      return;
    }

    const icon = sanitizeCategoryIcon(newCategoryIcon);
    const color = sanitizeCategoryColor(newCategoryColor);
    if (newCategoryColor && !color) {
      st_echo('warning', 'Category color must be a hex color like #6c7a89.');
      return;
    }

    updateCategoryStorageForWorld((categories, entryAssignments) => {
      if (categories.some((category) => category.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
        st_echo('warning', `Category "${name}" already exists.`);
        return { categories, entryAssignments };
      }
      return { categories: [...categories, { id: createCategoryId(), name, icon, color }], entryAssignments };
    });
    setNewCategoryName('');
    setNewCategoryIcon('');
  };

  const handleUpdateCategory = (categoryId: string, changes: Partial<LorebookCategory>) => {
    updateCategoryStorageForWorld((categories, entryAssignments) => ({
      categories: categories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              ...changes,
              icon: 'icon' in changes ? sanitizeCategoryIcon(changes.icon) : category.icon,
              color: 'color' in changes ? sanitizeCategoryColor(changes.color) : category.color,
              name: 'name' in changes ? (sanitizeCategoryName(changes.name) ?? category.name) : category.name,
            }
          : category,
      ),
      entryAssignments,
    }));
  };

  const handleDeleteCategory = async (categoryId: string) => {
    const category = activeCategories.find((item) => item.id === categoryId);
    if (!category) return;
    const confirmed = await globalContext.Popup.show.confirm(
      'Delete Category',
      `Remove category "${escapeHtml(category.name)}"? Entries will become uncategorized.`,
    );
    if (!confirmed) return;

    updateCategoryStorageForWorld((categories, entryAssignments) => {
      const nextAssignments = { ...entryAssignments };
      Object.entries(nextAssignments).forEach(([uid, assignedCategoryId]) => {
        if (assignedCategoryId === categoryId) delete nextAssignments[uid];
      });
      return { categories: categories.filter((item) => item.id !== categoryId), entryAssignments: nextAssignments };
    });
  };

  const handleEntryCategoryChange = (worldName: string, uid: number, nextCategoryId: string) => {
    const selectedInWorld = selectedIds.has(getEntryIdentity(worldName, uid))
      ? Array.from(selectedIds)
          .filter((id) => id.startsWith(`${worldName}::`))
          .map((id) => id.split('::')[1])
      : [String(uid)];

    const previousState = categoryStorage[worldName] ?? { categories: [], entryAssignments: {} };
    const assignments = { ...previousState.entryAssignments };
    selectedInWorld.forEach((selectedUid) => {
      if (nextCategoryId) assignments[selectedUid] = nextCategoryId;
      else delete assignments[selectedUid];
    });
    persistCategoryStorage({
      ...categoryStorage,
      [worldName]: { categories: previousState.categories, entryAssignments: assignments },
    });
  };

  const handleSaveEntry = async (worldName: string, uid: number) => {
    if (isSaving) return;
    const entry = draftEntries[worldName]?.find((item) => item.uid === uid);
    if (!entry) return;
    const submitted = structuredClone(entry);
    setIsSaving(true);
    try {
      await onSaveEntries(worldName, [{ entry: submitted, originalUid: uid }]);
      setDirtyIds((previous) => {
        const current = draftEntriesRef.current[worldName]?.find((item) => item.uid === uid);
        if (JSON.stringify(current) !== JSON.stringify(submitted)) return previous;
        const next = new Set(previous);
        next.delete(getEntryIdentity(worldName, uid));
        return next;
      });
    } catch (error) {
      st_echo('error', `Could not save entry: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteEntry = async (worldName: string, uid: number) => {
    const entry = draftEntries[worldName]?.find((item) => item.uid === uid);
    const label = entry?.comment?.trim() || `UID ${uid}`;
    const confirmed = await globalContext.Popup.show.confirm(
      'Draft Delete Entry',
      `Hide "${escapeHtml(label)}" from the editor until Save All is clicked?`,
    );
    if (!confirmed) return;
    const id = getEntryIdentity(worldName, uid);
    setDeletedIds((previous) => new Set(previous).add(id));
    setSelectedIds((previous) => {
      const next = new Set(previous);
      next.delete(id);
      return next;
    });
  };

  const handleDeleteSelected = async () => {
    if (selectedIds.size === 0) {
      st_echo('warning', 'Select entries to delete first.');
      return;
    }
    const confirmed = await globalContext.Popup.show.confirm(
      'Draft Delete Selected',
      `Hide ${selectedIds.size} selected entries until Save All is clicked?`,
    );
    if (!confirmed) return;
    setDeletedIds((previous) => new Set([...Array.from(previous), ...Array.from(selectedIds)]));
    setSelectedIds(new Set());
  };

  const handleRevertAll = async () => {
    if (!hasUnsavedChanges) return;
    const confirmed = await globalContext.Popup.show.confirm(
      'Revert Editor Changes',
      'Discard unsaved editor changes and draft deletions?',
    );
    if (!confirmed) return;
    setDraftEntries(normalizedEntries);
    setDirtyIds(new Set());
    setDeletedIds(new Set());
    setSelectedIds(new Set());
  };

  const handleSaveAll = async () => {
    if (!hasUnsavedChanges || isSaving) return;
    setIsSaving(true);
    const affectedWorlds = new Set<string>();
    [...Array.from(dirtyIds), ...Array.from(deletedIds)].forEach((id) => {
      const [worldName] = id.split('::');
      if (worldName) affectedWorlds.add(worldName);
    });

    let savedCount = 0;
    for (const worldName of affectedWorlds) {
      const entries = (draftEntries[worldName] ?? []).filter(
        (entry) => !deletedIds.has(getEntryIdentity(worldName, entry.uid)),
      );
      const submitted = structuredClone(entries);
      try {
        await onReplaceWorldEntries(worldName, submitted);
        savedCount++;
        // The baseline may have rendered before this promise resumes. Remove
        // acknowledged deletions from drafts as well as their pending markers.
        setDraftEntries((previous) => ({
          ...previous,
          [worldName]: (previous[worldName] ?? []).filter(
            (entry) => !deletedIds.has(getEntryIdentity(worldName, entry.uid)),
          ),
        }));
        setDirtyIds((previous) => {
          const next = new Set(previous);
          deletedIds.forEach((id) => {
            if (id.startsWith(`${worldName}::`)) next.delete(id);
          });
          submitted.forEach((entry) => {
            const current = draftEntriesRef.current[worldName]?.find((item) => item.uid === entry.uid);
            if (JSON.stringify(current) === JSON.stringify(entry)) next.delete(getEntryIdentity(worldName, entry.uid));
          });
          return next;
        });
        setDeletedIds(
          (previous) => new Set([...previous].filter((id) => !deletedIds.has(id) || !id.startsWith(`${worldName}::`))),
        );
      } catch (error) {
        st_echo('error', `Could not save ${worldName}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }

    if (savedCount) st_echo('success', `Saved ${savedCount} lorebook${savedCount === 1 ? '' : 's'}.`);
    setIsSaving(false);
  };

  const handleBulkTitle = () => {
    if (selectedEntries.length === 0) {
      st_echo('warning', 'Select entries before applying bulk title changes.');
      return;
    }
    const counterStart = parseNumberInput(bulkCounterStart);
    selectedEntries.forEach((entry, index) => {
      const counter = counterStart === undefined ? '' : String(counterStart + index);
      const base = bulkReplace || entry.comment || '';
      const nextComment = `${bulkPrefix}${base}${bulkSuffix}${counter ? ` ${counter}` : ''}`;
      updateEntry(selectedWorldName, entry.uid, { comment: nextComment });
    });
  };

  const handleBulkOrder = () => {
    if (selectedEntries.length === 0) {
      st_echo('warning', 'Select entries before applying bulk order changes.');
      return;
    }
    const start = parseNumberInput(bulkOrderStart);
    if (start === undefined) {
      st_echo('warning', 'Enter a starting order number.');
      return;
    }
    selectedEntries.forEach((entry, index) => {
      const order = bulkOrderDirection === 'asc' ? start + index : start - index;
      updateEntry(selectedWorldName, entry.uid, { order });
    });
  };

  const handleBulkPosition = () => {
    if (selectedEntries.length === 0) {
      st_echo('warning', 'Select entries before applying bulk position changes.');
      return;
    }
    const position = parseNumberInput(bulkPosition);
    if (position === undefined) {
      st_echo('warning', 'Select a position.');
      return;
    }
    selectedEntries.forEach((entry) => {
      updateEntry(selectedWorldName, entry.uid, {
        position,
        depth: position === 4 ? (parseNumberInput(bulkDepth) ?? 4) : entry.depth,
        role: position === 4 ? (parseNumberInput(bulkRole) ?? 0) : null,
      });
    });
  };

  const handleBackup = () => {
    if (!selectedWorldName) {
      st_echo('warning', 'Select a lorebook to export first.');
      return;
    }
    const entries = activeEntries;
    const payload = toWorldInfoSaveFormat(entries);
    const fileName = `${sanitizeFileName(selectedWorldName) || 'lorebook'}_backup_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
    st_echo('success', `Exported ${selectedWorldName} backup.`);
  };

  const handleApplyReviseEntry = ({
    worldName,
    updatedEntry,
  }: {
    worldName: string;
    originalEntry: ExtendedWIEntry;
    updatedEntry: ExtendedWIEntry;
  }) => {
    const normalizedEntry = normalizeExtendedEntry(updatedEntry);
    setDraftEntries((previous) => {
      const entries = previous[worldName] ?? [];
      return {
        ...previous,
        [worldName]: entries.map((entry) => (entry.uid === normalizedEntry.uid ? normalizedEntry : entry)),
      };
    });
    markDirty(worldName, normalizedEntry.uid);
    st_echo('success', `Applied AI revision to "${normalizedEntry.comment || `UID ${normalizedEntry.uid}`}".`);
  };

  if (worldNames.length === 0) {
    return (
      <div className="lorebook-editor empty-state">
        <p>No lorebooks are available in this context.</p>
        <STButton className="menu_button" onClick={() => void onRefreshEntries()}>
          Refresh
        </STButton>
      </div>
    );
  }

  return (
    <div className="lorebook-editor">
      <div className="lorebook-editor-toolbar card">
        <div className="toolbar-row">
          <label>
            Lorebook
            <select
              className="text_pole"
              value={selectedWorldName}
              onChange={(event) => setSelectedWorldName(event.target.value)}
            >
              {worldNames.map((worldName) => (
                <option key={worldName} value={worldName}>
                  {worldName}
                </option>
              ))}
            </select>
          </label>
          <label>
            Search
            <input
              className="text_pole"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Name, trigger, content"
            />
          </label>
          <label>
            Sort
            <select
              className="text_pole"
              value={sortSelection}
              onChange={(event) => setSortSelection(event.target.value as SortSelection)}
            >
              <option value="original">Original order</option>
              <option value="name-asc">Name A-Z</option>
              <option value="name-desc">Name Z-A</option>
              <option value="uid-asc">UID ascending</option>
              <option value="uid-desc">UID descending</option>
              <option value="order-asc">Position/order ascending</option>
              <option value="order-desc">Position/order descending</option>
              <option value="date-asc">Date ascending</option>
              <option value="date-desc">Date descending</option>
            </select>
          </label>
          <label>
            First word
            <select
              className="text_pole"
              value={firstWordFilter}
              onChange={(event) => setFirstWordFilter(event.target.value)}
            >
              <option value={NO_FIRST_WORD_FILTER}>All</option>
              {firstWordOptions.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Category
            <select
              className="text_pole"
              value={categoryFilter}
              onChange={(event) => setCategoryFilter(event.target.value)}
            >
              <option value="">All</option>
              <option value={UNCATEGORIZED_FILTER}>Uncategorized</option>
              {activeCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.icon ? `${category.icon} ` : ''}
                  {category.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="toolbar-actions">
          <STButton className="menu_button" onClick={() => setViewMode(viewMode === 'card' ? 'compact' : 'card')}>
            {viewMode === 'card' ? 'Compact View' : 'Card View'}
          </STButton>
          <STButton className="menu_button" onClick={handleToggleAllVisible}>
            {allVisibleSelected ? 'Deselect Visible' : 'Select Visible'}
          </STButton>
          <STButton className="menu_button" onClick={() => void onRefreshEntries()}>
            Refresh
          </STButton>
          <STButton className="menu_button" onClick={handleBackup}>
            Backup / Export
          </STButton>
          <STButton className="menu_button" disabled={!hasUnsavedChanges || isSaving} onClick={handleRevertAll}>
            Revert All
          </STButton>
          <STButton className="menu_button" disabled={!hasUnsavedChanges || isSaving} onClick={handleSaveAll}>
            Save All
          </STButton>
          <STButton
            className="menu_button danger_button"
            disabled={selectedIds.size === 0}
            onClick={handleDeleteSelected}
          >
            Delete Selected
          </STButton>
        </div>
      </div>

      <div className="lorebook-editor-grid">
        <aside className="lorebook-side-panel card">
          <h3>Bulk Tools</h3>
          <div className="bulk-tool">
            <h4>Titles</h4>
            <input
              className="text_pole"
              placeholder="Prefix"
              value={bulkPrefix}
              onChange={(event) => setBulkPrefix(event.target.value)}
            />
            <input
              className="text_pole"
              placeholder="Replace title with"
              value={bulkReplace}
              onChange={(event) => setBulkReplace(event.target.value)}
            />
            <input
              className="text_pole"
              placeholder="Suffix"
              value={bulkSuffix}
              onChange={(event) => setBulkSuffix(event.target.value)}
            />
            <input
              className="text_pole"
              placeholder="Counter start"
              value={bulkCounterStart}
              onChange={(event) => setBulkCounterStart(event.target.value)}
            />
            <STButton className="menu_button" disabled={selectedEntries.length === 0} onClick={handleBulkTitle}>
              Apply Title
            </STButton>
          </div>
          <div className="bulk-tool">
            <h4>Order</h4>
            <input
              className="text_pole"
              placeholder="Start"
              value={bulkOrderStart}
              onChange={(event) => setBulkOrderStart(event.target.value)}
            />
            <select
              className="text_pole"
              value={bulkOrderDirection}
              onChange={(event) => setBulkOrderDirection(event.target.value as 'asc' | 'desc')}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
            <STButton className="menu_button" disabled={selectedEntries.length === 0} onClick={handleBulkOrder}>
              Apply Order
            </STButton>
          </div>
          <div className="bulk-tool">
            <h4>Position</h4>
            <select
              className="text_pole"
              value={bulkPosition}
              onChange={(event) => setBulkPosition(event.target.value)}
            >
              <option value="">Select position</option>
              {POSITION_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {bulkPosition === '4' && (
              <>
                <input
                  className="text_pole"
                  placeholder="Depth"
                  value={bulkDepth}
                  onChange={(event) => setBulkDepth(event.target.value)}
                />
                <select className="text_pole" value={bulkRole} onChange={(event) => setBulkRole(event.target.value)}>
                  {ROLE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </>
            )}
            <STButton className="menu_button" disabled={selectedEntries.length === 0} onClick={handleBulkPosition}>
              Apply Position
            </STButton>
          </div>

          <h3>Categories</h3>
          <div className="category-create">
            <input
              className="text_pole"
              placeholder="Name"
              value={newCategoryName}
              onChange={(event) => setNewCategoryName(event.target.value)}
            />
            <input
              className="text_pole"
              placeholder="Icon"
              value={newCategoryIcon}
              maxLength={4}
              onChange={(event) => setNewCategoryIcon(event.target.value)}
            />
            <input
              className="text_pole"
              type="color"
              value={newCategoryColor}
              onChange={(event) => setNewCategoryColor(event.target.value)}
            />
            <STButton className="menu_button" onClick={handleCreateCategory}>
              Add
            </STButton>
          </div>
          <div className="category-list">
            {activeCategories.length === 0 && <p className="subtle">No categories yet.</p>}
            {activeCategories.map((category) => (
              <div key={category.id} className="category-item" style={categoryStyle(category)}>
                <span className="entry-card-category-swatch">{category.icon ?? ''}</span>
                <input
                  className="text_pole"
                  value={category.name}
                  onChange={(event) => handleUpdateCategory(category.id, { name: event.target.value })}
                />
                <input
                  className="text_pole category-icon-input"
                  value={category.icon ?? ''}
                  maxLength={4}
                  onChange={(event) => handleUpdateCategory(category.id, { icon: event.target.value })}
                />
                <input
                  className="text_pole category-color-input"
                  type="color"
                  value={category.color ?? '#6c7a89'}
                  onChange={(event) => handleUpdateCategory(category.id, { color: event.target.value })}
                />
                <STButton className="menu_button danger_button" onClick={() => void handleDeleteCategory(category.id)}>
                  Remove
                </STButton>
              </div>
            ))}
          </div>
        </aside>

        <section className="lorebook-entry-list">
          <div className="entry-list-summary">
            <span>
              Showing {visibleEntries.length ? currentEntryPage * 50 + 1 : 0}–{Math.min((currentEntryPage + 1) * 50, visibleEntries.length)} of {visibleEntries.length} matching entries ({activeEntries.length} total)
            </span>
            <span>{selectedEntries.length} selected</span>
            {deletedIds.size > 0 && <span>{deletedIds.size} draft deleted</span>}
          </div>
          {entryPages > 1 && <div className="session-actions" aria-label="Lorebook entry pages">
            <STButton disabled={currentEntryPage === 0} onClick={() => setEntryPage(currentEntryPage - 1)}>Previous entries</STButton>
            <span>Page {currentEntryPage + 1} of {entryPages}</span>
            <STButton disabled={currentEntryPage >= entryPages - 1} onClick={() => setEntryPage(currentEntryPage + 1)}>Next entries</STButton>
          </div>}
          {visibleEntries.length === 0 ? (
            <div className="card empty-state">No entries match the current filters.</div>
          ) : (
            pageEntries.map((entry) => (
              <EntryEditor
                key={`${selectedWorldName}::${entry.uid}`}
                entry={entry}
                worldName={selectedWorldName}
                viewMode={viewMode}
                isSelected={selectedIds.has(getEntryIdentity(selectedWorldName, entry.uid))}
                isDirty={dirtyIds.has(getEntryIdentity(selectedWorldName, entry.uid))}
                isSaving={isSaving}
                categoryId={activeAssignments[String(entry.uid)] ?? ''}
                categories={activeCategories}
                onToggleSelected={handleToggleSelected}
                onChange={updateEntryWithSelection}
                onCategoryChange={handleEntryCategoryChange}
                onSave={handleSaveEntry}
                onDelete={handleDeleteEntry}
                onRevise={(worldName, uid) => setReviseTarget({ worldName, uid })}
              />
            ))
          )}
        </section>
      </div>
      {reviseTarget && reviseEntry && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            <ReviseSessionManager
              target={{ type: 'entry', worldName: reviseTarget.worldName, entry: reviseEntry }}
              initialState={reviseEntry}
              onEnsureEntryIdentity={async (entry) => {
                if (!onEnsureEntryIdentity) throw new Error('The editor cannot persist revision identity. Reopen the main popup.');
                const identified = await onEnsureEntryIdentity(reviseTarget.worldName, entry);
                const id = getEntryRevisionId(identified);
                if (!id) throw new Error('The saved entry has no revision identity.');
                setDraftEntries((previous) => ({
                  ...previous,
                  [reviseTarget.worldName]: (previous[reviseTarget.worldName] ?? []).map((draft) =>
                    draft.uid === entry.uid ? withEntryRevisionId(draft, id) : draft),
                }));
                return identified;
              }}
              onClose={() => setReviseTarget(null)}
              onApply={handleApplyReviseEntry}
              sessionForContext={sessionForContext}
              allEntries={draftEntries}
              contextToSend={contextToSend}
            />
          }
          onComplete={() => setReviseTarget(null)}
          options={{ wide: true, large: true }}
        />
      )}
    </div>
  );
};

