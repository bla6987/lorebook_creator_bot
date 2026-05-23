import { ExtendedWIEntry } from '../types.js';

export type SortDirection = 'asc' | 'desc';
export type SortSelection =
  | 'original'
  | 'name-asc'
  | 'name-desc'
  | 'uid-asc'
  | 'uid-desc'
  | 'order-asc'
  | 'order-desc'
  | 'date-asc'
  | 'date-desc';

export interface EntryFirstWord {
  key: string;
  label: string;
}

export interface LorebookCategory {
  id: string;
  name: string;
  icon?: string;
  color?: string;
}

export interface LorebookCategoryWorldState {
  categories: LorebookCategory[];
  entryAssignments: Record<string, string>;
}

export type LorebookCategoryStorage = Record<string, LorebookCategoryWorldState>;

export const UNCATEGORIZED_FILTER = '__uncategorized__';
export const NO_FIRST_WORD_FILTER = '__all__';
export const NO_COMMENT_FIRST_WORD_KEY = '__no_comment__';
export const NO_COMMENT_FIRST_WORD_LABEL = '(no title)';

export const POSITION_OPTIONS = [
  { value: 0, label: 'Before character' },
  { value: 1, label: 'After character' },
  { value: 2, label: "Author's Note top" },
  { value: 3, label: "Author's Note bottom" },
  { value: 4, label: 'At depth' },
  { value: 5, label: 'Examples top' },
  { value: 6, label: 'Examples bottom' },
] as const;

export const ROLE_OPTIONS = [
  { value: 0, label: 'System' },
  { value: 1, label: 'User' },
  { value: 2, label: 'Assistant' },
] as const;

export const ACTIVATION_OPTIONS = [
  { value: 'normal', label: 'Keywords', constant: false, vectorized: false },
  { value: 'constant', label: 'Constant', constant: true, vectorized: false },
  { value: 'vectorized', label: 'Vectorized', constant: false, vectorized: true },
] as const;

export type ActivationMode = (typeof ACTIVATION_OPTIONS)[number]['value'];

const naturalNameCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

const getEntryTitle = (entry: ExtendedWIEntry) => entry.comment?.trim() || `Entry ${entry.uid}`;

export const cloneEntriesByWorld = (entriesByWorldName: Record<string, ExtendedWIEntry[]>) =>
  Object.fromEntries(
    Object.entries(entriesByWorldName).map(([worldName, entries]) => [
      worldName,
      entries.map((entry) => normalizeExtendedEntry(entry)),
    ]),
  );

export const normalizeExtendedEntry = (entry: ExtendedWIEntry): ExtendedWIEntry => {
  const roleAlias = entry.role ?? entry.roleAtDepth ?? entry.depth_role;
  const normalized: ExtendedWIEntry = {
    ...structuredClone(entry),
    key: Array.isArray(entry.key) ? [...entry.key] : [],
    keysecondary: Array.isArray(entry.keysecondary) ? [...entry.keysecondary] : [],
    content: entry.content ?? '',
    comment: entry.comment ?? '',
    disable: !!entry.disable,
  };

  if (roleAlias !== undefined) {
    normalized.role = roleAlias;
  }

  delete normalized.roleAtDepth;
  delete normalized.depth_role;
  return normalized;
};

export const normalizeEntriesByWorld = (entriesByWorldName: Record<string, ExtendedWIEntry[]>) =>
  Object.fromEntries(
    Object.entries(entriesByWorldName).map(([worldName, entries]) => [
      worldName,
      entries.map((entry) => normalizeExtendedEntry(entry)),
    ]),
  );

export const sortEntriesByName = (entries: ExtendedWIEntry[], direction: SortDirection = 'asc') => {
  const multiplier = direction === 'desc' ? -1 : 1;
  return [...entries].sort((a, b) => multiplier * naturalNameCollator.compare(getEntryTitle(a), getEntryTitle(b)));
};

export const sortEntriesByUid = (entries: ExtendedWIEntry[], direction: SortDirection = 'asc') => {
  const multiplier = direction === 'desc' ? -1 : 1;
  return [...entries].sort((a, b) => multiplier * (a.uid - b.uid));
};

export const sortEntriesByOrder = (entries: ExtendedWIEntry[], direction: SortDirection = 'asc') => {
  const multiplier = direction === 'desc' ? -1 : 1;
  return [...entries].sort((a, b) => {
    const posA = a.position;
    const posB = b.position;

    if (posA == null && posB != null) return 1;
    if (posB == null && posA != null) return -1;
    if (posA != null && posB != null && posA !== posB) return multiplier * (posA - posB);

    const orderA = a.order;
    const orderB = b.order;
    if (orderA == null && orderB != null) return 1;
    if (orderB == null && orderA != null) return -1;
    if (orderA != null && orderB != null && orderA !== orderB) return multiplier * (orderA - orderB);

    return naturalNameCollator.compare(getEntryTitle(a), getEntryTitle(b));
  });
};

const monthNames = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const monthPattern = monthNames.join('|');
const datePatterns = [
  new RegExp(`\\b(${monthPattern})\\s+([0-9]{1,2})(?:st|nd|rd|th)?[,]?\\s+([0-9]{4})\\b`, 'i'),
  new RegExp(`\\b([0-9]{1,2})\\s+(${monthPattern})\\s+([0-9]{4})\\b`, 'i'),
  /\b([0-9]{4})[-/](0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])\b/,
  /\b(0?[1-9]|1[0-2])[-/](0?[1-9]|[12][0-9]|3[01])[-/]([0-9]{4})\b/,
];

const makeDateKey = (year: number, month: number, day: number) => {
  const date = new Date(Date.UTC(year, month - 1, day));
  if (date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
    return null;
  }
  return date.toISOString().slice(0, 10);
};

export const extractDateFromContent = (value?: string | null): string | null => {
  const text = value ?? '';
  if (!text.trim()) return null;

  const monthFirst = text.match(datePatterns[0]);
  if (monthFirst) {
    const month = monthNames.indexOf(monthFirst[1].toLowerCase()) + 1;
    return makeDateKey(Number(monthFirst[3]), month, Number(monthFirst[2]));
  }

  const dayFirst = text.match(datePatterns[1]);
  if (dayFirst) {
    const month = monthNames.indexOf(dayFirst[2].toLowerCase()) + 1;
    return makeDateKey(Number(dayFirst[3]), month, Number(dayFirst[1]));
  }

  const iso = text.match(datePatterns[2]);
  if (iso) return makeDateKey(Number(iso[1]), Number(iso[2]), Number(iso[3]));

  const numeric = text.match(datePatterns[3]);
  if (numeric) return makeDateKey(Number(numeric[3]), Number(numeric[1]), Number(numeric[2]));

  return null;
};

export const getEntryDateKey = (entry: ExtendedWIEntry): string | null =>
  extractDateFromContent(entry.comment) ?? extractDateFromContent(entry.content);

export const sortEntriesByDate = (entries: ExtendedWIEntry[], direction: SortDirection = 'asc') => {
  const multiplier = direction === 'desc' ? -1 : 1;
  return [...entries].sort((a, b) => {
    const dateA = getEntryDateKey(a);
    const dateB = getEntryDateKey(b);
    if (!dateA && !dateB) return naturalNameCollator.compare(getEntryTitle(a), getEntryTitle(b));
    if (!dateA) return 1;
    if (!dateB) return -1;
    return multiplier * dateA.localeCompare(dateB);
  });
};

export const sortEntries = (entries: ExtendedWIEntry[], sortSelection: SortSelection) => {
  switch (sortSelection) {
    case 'name-asc':
      return sortEntriesByName(entries, 'asc');
    case 'name-desc':
      return sortEntriesByName(entries, 'desc');
    case 'uid-asc':
      return sortEntriesByUid(entries, 'asc');
    case 'uid-desc':
      return sortEntriesByUid(entries, 'desc');
    case 'order-asc':
      return sortEntriesByOrder(entries, 'asc');
    case 'order-desc':
      return sortEntriesByOrder(entries, 'desc');
    case 'date-asc':
      return sortEntriesByDate(entries, 'asc');
    case 'date-desc':
      return sortEntriesByDate(entries, 'desc');
    case 'original':
    default:
      return [...entries];
  }
};

export const getEntryFirstWord = (entry: ExtendedWIEntry): EntryFirstWord => {
  const title = entry.comment?.trim();
  if (!title) {
    return { key: NO_COMMENT_FIRST_WORD_KEY, label: NO_COMMENT_FIRST_WORD_LABEL };
  }
  const firstWord = title.split(/\s+/)[0]?.replace(/[^\p{L}\p{N}_'-]/gu, '') || title;
  return { key: firstWord.toLocaleLowerCase(), label: firstWord };
};

export const buildFirstWordGrouping = (entries: ExtendedWIEntry[]): EntryFirstWord[] => {
  const grouped = new Map<string, string>();
  for (const entry of entries) {
    const firstWord = getEntryFirstWord(entry);
    if (!grouped.has(firstWord.key)) grouped.set(firstWord.key, firstWord.label);
  }
  return Array.from(grouped.entries())
    .map(([key, label]) => ({ key, label }))
    .sort((a, b) => naturalNameCollator.compare(a.label, b.label));
};

export const filterEntriesByFirstWord = (entries: ExtendedWIEntry[], firstWordKey: string) => {
  if (!firstWordKey || firstWordKey === NO_FIRST_WORD_FILTER) return entries;
  return entries.filter((entry) => getEntryFirstWord(entry).key === firstWordKey);
};

export const sanitizeCategoryIcon = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return Array.from(trimmed)
    .filter((character) => !/\s/u.test(character))
    .slice(0, 2)
    .join('');
};

export const sanitizeCategoryColor = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  if (!/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(trimmed)) return undefined;
  return trimmed.toLowerCase();
};

export const sanitizeCategoryName = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed || undefined;
};

export const sanitizeCategoryStorage = (value: unknown): LorebookCategoryStorage => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {};

  const result: LorebookCategoryStorage = {};
  Object.entries(value as Record<string, unknown>).forEach(([worldName, rawState]) => {
    if (!rawState || typeof rawState !== 'object' || Array.isArray(rawState)) return;
    const state = rawState as Partial<LorebookCategoryWorldState>;
    const categories: LorebookCategory[] = Array.isArray(state.categories)
      ? state.categories
          .map((category): LorebookCategory | null => {
            if (!category || typeof category !== 'object') return null;
            const raw = category as Partial<LorebookCategory>;
            const id = typeof raw.id === 'string' && raw.id.trim() ? raw.id : '';
            const name = sanitizeCategoryName(raw.name);
            if (!id || !name) return null;
            const normalizedCategory: LorebookCategory = { id, name };
            const icon = sanitizeCategoryIcon(raw.icon);
            const color = sanitizeCategoryColor(raw.color);
            if (icon) normalizedCategory.icon = icon;
            if (color) normalizedCategory.color = color;
            return normalizedCategory;
          })
          .filter((category): category is LorebookCategory => !!category)
      : [];

    const validCategoryIds = new Set(categories.map((category) => category.id));
    const entryAssignments: Record<string, string> = {};
    if (state.entryAssignments && typeof state.entryAssignments === 'object' && !Array.isArray(state.entryAssignments)) {
      Object.entries(state.entryAssignments).forEach(([uid, categoryId]) => {
        if (/^\d+$/.test(uid) && typeof categoryId === 'string' && validCategoryIds.has(categoryId)) {
          entryAssignments[uid] = categoryId;
        }
      });
    }

    if (categories.length > 0 || Object.keys(entryAssignments).length > 0) {
      result[worldName] = { categories, entryAssignments };
    }
  });

  return result;
};

export const getActivationMode = (entry: Pick<ExtendedWIEntry, 'constant' | 'vectorized'>): ActivationMode => {
  if (entry.vectorized) return 'vectorized';
  if (entry.constant) return 'constant';
  return 'normal';
};

export const getActivationUpdates = (mode: ActivationMode): Pick<ExtendedWIEntry, 'constant' | 'vectorized'> => {
  const option = ACTIVATION_OPTIONS.find((item) => item.value === mode) ?? ACTIVATION_OPTIONS[0];
  return { constant: option.constant, vectorized: option.vectorized };
};

export const parseNumberInput = (value: string): number | undefined => {
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const parsed = Number(trimmed);
  return Number.isFinite(parsed) ? parsed : undefined;
};

export const getPositionLabel = (position?: number | null) =>
  POSITION_OPTIONS.find((option) => option.value === position)?.label ?? 'Unset';

export const getRoleLabel = (role?: number | null) => ROLE_OPTIONS.find((option) => option.value === role)?.label ?? 'System';

export const getEntryIdentity = (worldName: string, uid: number) => `${worldName}::${uid}`;
