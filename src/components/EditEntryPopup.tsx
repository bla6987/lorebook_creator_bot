import { useState, useEffect, useMemo, useCallback, forwardRef, useImperativeHandle } from 'react';
import {
  STButton,
  STFancyDropdown,
  STSortableList,
  STTextarea,
  SortableListItemData,
  DropdownItem,
} from 'sillytavern-utils-lib/components/react';
import { st_runRegexScript } from 'sillytavern-utils-lib/config';
import { RegexScriptData } from 'sillytavern-utils-lib/types/regex';
import { ExtendedWIEntry } from '../types.js';
import {
  ACTIVATION_OPTIONS,
  ActivationMode,
  POSITION_OPTIONS,
  ROLE_OPTIONS,
  getActivationMode,
  getActivationUpdates,
  parseNumberInput,
} from './lorebookEditorUtils.js';

const globalContext = SillyTavern.getContext();

/**
 * The props for the EditEntryPopup component.
 */
interface EditEntryPopupProps {
  entry: ExtendedWIEntry;
  initialRegexIds: Record<string, Partial<RegexScriptData>>;
}

/**
 * Defines the imperative functions that can be called on this component's instance
 * from a parent component using a ref.
 */
export interface EditEntryPopupRef {
  getFormData: () => {
    updatedEntry: ExtendedWIEntry;
    updatedRegexIds: Record<string, Partial<RegexScriptData>>;
  };
}

/**
 * A popup form for editing a suggested World Info entry, including its content and associated regex scripts.
 * It's wrapped in `forwardRef` to allow the parent component to call `getFormData` imperatively when the
 * user confirms the changes via an external "OK" button (provided by the <Popup> component).
 */
export const EditEntryPopup = forwardRef<EditEntryPopupRef, EditEntryPopupProps>(({ entry, initialRegexIds }, ref) => {
  // --- Internal State Management ---
  const [allRegexes, setAllRegexes] = useState<RegexScriptData[]>([]);
  const [title, setTitle] = useState(entry.comment ?? '');
  const [keywords, setKeywords] = useState((entry.key ?? []).join(', '));
  const [content, setContent] = useState(entry.content ?? '');
  const [activationMode, setActivationMode] = useState<ActivationMode>(getActivationMode(entry));
  const [position, setPosition] = useState(entry.position?.toString() ?? '');
  const [order, setOrder] = useState(entry.order?.toString() ?? '');
  const [depth, setDepth] = useState(entry.depth?.toString() ?? '4');
  const [role, setRole] = useState((entry.role ?? 0).toString());
  const [regexListItems, setRegexListItems] = useState<SortableListItemData[]>([]);

  useEffect(() => {
    const loadedRegexes = globalContext.extensionSettings.regex ?? [];
    setAllRegexes(loadedRegexes);

    const initialItems = Object.entries(initialRegexIds)
      .map(([id, data]) => {
        const regex = loadedRegexes.find((r) => r.id === id);
        return regex ? { id: regex.id, label: regex.scriptName, enabled: !data?.disabled } : null;
      })
      // @ts-ignore
      .filter((item): item is SortableListItemData => item !== null);
    // @ts-ignore
    setRegexListItems(initialItems);
  }, [initialRegexIds]);

  // --- Imperative Handle ---
  // This exposes the `getFormData` function to the parent component through the ref.
  // It's the bridge that allows the parent's "OK" button to retrieve this component's final state.
  useImperativeHandle(ref, () => ({
    getFormData: () => {
      const nextPosition = parseNumberInput(position);
      const updatedEntry: ExtendedWIEntry = {
        ...entry,
        comment: title.trim(),
        key: keywords
          .split(',')
          .map((k) => k.trim())
          .filter(Boolean),
        content,
        ...getActivationUpdates(activationMode),
        order: parseNumberInput(order),
        position: nextPosition,
        depth: nextPosition === 4 ? (parseNumberInput(depth) ?? 4) : null,
        role: nextPosition === 4 ? (parseNumberInput(role) ?? 0) : null,
      };

      const updatedRegexIds = regexListItems.reduce(
        (acc, item) => {
          acc[item.id] = { disabled: !item.enabled };
          return acc;
        },
        {} as Record<string, Partial<RegexScriptData>>,
      );

      return { updatedEntry, updatedRegexIds };
    },
  }));

  // --- Derived Data & Handlers ---
  const fancyDropdownItems = useMemo(
    (): DropdownItem[] => allRegexes.map((r) => ({ value: r.id, label: r.scriptName })),
    [allRegexes],
  );

  const selectedRegexIds = useMemo(() => regexListItems.map((item) => item.id), [regexListItems]);

  const handleSimulate = useCallback(() => {
    let simulatedContent = entry.content; // Start from original content for simulation
    const orderedEnabledItems = regexListItems.filter((item) => item.enabled);

    for (const item of orderedEnabledItems) {
      const regex = allRegexes.find((r) => r.id === item.id);
      if (regex) {
        simulatedContent = st_runRegexScript(regex, simulatedContent);
      }
    }
    setContent(simulatedContent);
  }, [regexListItems, allRegexes, entry.content]);

  const handleRegexSelectionChange = (newIds: string[]) => {
    const newItems = newIds
      .map((id) => {
        const existingItem = regexListItems.find((item) => item.id === id);
        if (existingItem) return existingItem;
        const regex = allRegexes.find((r) => r.id === id);
        return regex ? { id: regex.id, label: regex.scriptName, enabled: true } : null;
      })
      .filter((item): item is SortableListItemData => item !== null);
    setRegexListItems(newItems);
  };

  // The component does not render its own buttons, as they are provided by the parent <Popup>.
  return (
    <div className="edit-popup" style={{ padding: '10px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
      <h3>Edit Suggestion</h3>
      <div>
        <label>Title</label>
        <input type="text" className="text_pole" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Keywords (comma-separated)</label>
        <input type="text" className="text_pole" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
      </div>
      <div className="edit-popup-grid">
        <label>
          Activation
          <select className="text_pole" value={activationMode} onChange={(e) => setActivationMode(e.target.value as ActivationMode)}>
            {ACTIVATION_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Position
          <select className="text_pole" value={position} onChange={(e) => setPosition(e.target.value)}>
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
          <input className="text_pole" type="number" value={order} onChange={(e) => setOrder(e.target.value)} />
        </label>
        {position === '4' && (
          <>
            <label>
              Depth
              <input className="text_pole" type="number" min="0" value={depth} onChange={(e) => setDepth(e.target.value)} />
            </label>
            <label>
              Role
              <select className="text_pole" value={role} onChange={(e) => setRole(e.target.value)}>
                {ROLE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </>
        )}
      </div>
      <div>
        <h4>Apply Regex Scripts</h4>
        <STFancyDropdown
          items={fancyDropdownItems}
          value={selectedRegexIds}
          onChange={handleRegexSelectionChange}
          multiple
          enableSearch
          placeholder="Select regex scripts..."
        />
        {regexListItems.length > 0 && (
          <STSortableList
            items={regexListItems}
            onItemsChange={setRegexListItems}
            showToggleButton
            showDeleteButton
            sortableJsOptions={{ style: { marginTop: '10px' } }}
          />
        )}
      </div>
      <STButton onClick={handleSimulate} className="menu_button">
        Simulate Regex
      </STButton>
      <STTextarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={8}
        placeholder="Resulting content..."
      />
    </div>
  );
});
