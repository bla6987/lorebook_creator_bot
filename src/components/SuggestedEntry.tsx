import { FC, useState, useMemo, useRef } from 'react';
import showdown from 'showdown';
import { STButton, Popup, STTextarea } from 'sillytavern-utils-lib/components/react';
import { RegexScriptData } from 'sillytavern-utils-lib/types/regex';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { CompareEntryPopup } from './CompareEntryPopup.js';
import { EditEntryPopup, EditEntryPopupRef } from './EditEntryPopup.js';
import { ReviseSessionManager } from './ReviseSessionManager.js';
import { Session } from '../generate.js';
import { ExtensionSettings } from '../settings.js';
import { ReviseState } from '../revise-types.js';
import { ExtendedWIEntry } from '../types.js';
import { getActivationMode, getPositionLabel, getRoleLabel } from './lorebookEditorUtils.js';

const converter = new showdown.Converter();

export interface SuggestedEntryProps {
  displayIndex?: number;
  initialWorldName: string;
  entry: ExtendedWIEntry;
  allWorldNames: string[];
  existingEntry?: ExtendedWIEntry;
  sessionRegexIds: Record<string, Partial<RegexScriptData>>;
  entriesGroupByWorldName: Record<string, ExtendedWIEntry[]>;
  sessionForContext: Session;
  contextToSend: ExtensionSettings['contextToSend'];
  onAdd: (entry: ExtendedWIEntry, initialWorldName: string, selectedTargetWorld: string) => void;
  onRemove: (entry: ExtendedWIEntry, initialWorldName: string, isBlacklist: boolean) => void;
  onContinue: (continueFrom: {
    worldName: string;
    entry: ExtendedWIEntry;
    prompt: string;
    mode: 'continue' | 'revise';
  }) => void;
  onUpdate: (
    worldName: string,
    originalEntry: ExtendedWIEntry,
    updatedEntry: ExtendedWIEntry,
    updatedRegexIds: Record<string, Partial<RegexScriptData>>,
  ) => void;
}

export const SuggestedEntry: FC<SuggestedEntryProps> = ({
  displayIndex,
  initialWorldName,
  entry,
  allWorldNames,
  existingEntry,
  sessionRegexIds,
  onAdd,
  onRemove,
  onContinue,
  onUpdate,
  entriesGroupByWorldName,
  sessionForContext,
  contextToSend,
}) => {
  const [selectedWorld, setSelectedWorld] = useState(() => {
    const initial = allWorldNames.find((w) => w === initialWorldName);
    return initial ?? allWorldNames[0] ?? '';
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isContinuing, setIsContinuing] = useState(false);
  const [isRevising, setIsRevising] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isComparing, setIsComparing] = useState(false);
  const [isReviseSessionManagerOpen, setIsReviseSessionManagerOpen] = useState(false);
  const [updatePrompt, setUpdatePrompt] = useState('');

  const editPopupRef = useRef<EditEntryPopupRef>(null);

  const isUpdate = useMemo(
    () => !!entriesGroupByWorldName[selectedWorld]?.find((e) => e.uid === entry.uid && e.comment === entry.comment),
    [selectedWorld, entry.uid, entry.comment, entriesGroupByWorldName],
  );

  const isActing = isContinuing || isRevising;
  const metadataChips = useMemo(() => {
    const chips = [`Activation: ${getActivationMode(entry)}`];
    if (entry.position !== undefined && entry.position !== null)
      chips.push(`Position: ${getPositionLabel(entry.position)}`);
    if (entry.order !== undefined) chips.push(`Order: ${entry.order}`);
    if (entry.position === 4) {
      chips.push(`Depth: ${entry.depth ?? 4}`);
      chips.push(`Role: ${getRoleLabel(entry.role)}`);
    }
    return chips;
  }, [entry]);

  const handleAddClick = async () => {
    setIsAdding(true);
    await onAdd(entry, initialWorldName, selectedWorld);
  };

  const handleContinueClick = async () => {
    setIsContinuing(true);
    await onContinue({ worldName: initialWorldName, entry, prompt: updatePrompt, mode: 'continue' });
    setIsContinuing(false);
  };

  const handleReviseClick = async () => {
    setIsRevising(true);
    await onContinue({ worldName: initialWorldName, entry, prompt: updatePrompt, mode: 'revise' });
    setIsRevising(false);
  };

  const handleApplyReviseSession = (newState: ReviseState) => {
    onUpdate(initialWorldName, entry, newState as ExtendedWIEntry, sessionRegexIds);
  };

  return (
    <>
      <div className="entry">
        <div className="entry-heading">
          <span className="entry-index">{displayIndex ?? entry.uid}</span>
          <div className="entry-title-block">
            <div className="entry-title-row">
              <h4 className="comment">{entry.comment}</h4>
              <span className={`entry-state ${isUpdate ? 'update' : 'new'}`}>{isUpdate ? 'Update' : 'New'}</span>
            </div>
            <div className="key">
              {(entry.key ?? []).map((key, index) => (
                <span key={`${key}-${index}`}>{key}</span>
              ))}
            </div>
          </div>
          <span className="entry-menu-icon" aria-hidden="true">
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>
        <div className="entry-meta-chips">
          {metadataChips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
        <p className="content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(entry.content ?? '') }}></p>
        <div className="entry-target-row">
          <label>
            Target Lorebook
            <select
              className="world-select text_pole"
              value={selectedWorld}
              onChange={(e) => setSelectedWorld(e.target.value)}
            >
              {allWorldNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <div className="menu">
            <STButton onClick={handleAddClick} disabled={isAdding || isActing} className="menu_button interactable add">
              <i className="fa-solid fa-box-archive"></i> {isUpdate ? 'Update' : 'Add'}
            </STButton>
            <STButton
              onClick={() => setIsReviseSessionManagerOpen(true)}
              disabled={isActing}
              className="menu_button interactable chat-revise"
              title="Revise this entry with a chat-based AI session."
            >
              <i className="fa-solid fa-wand-magic-sparkles"></i> Revise
            </STButton>
            <STButton
              onClick={handleContinueClick}
              disabled={isActing}
              className="menu_button interactable continue"
              title="Continue writing this entry. You can provide instructions in the optional textbox below."
            >
              <i className="fa-solid fa-code-branch"></i> {isContinuing ? '...' : 'Continue'}
            </STButton>
            <STButton
              onClick={handleReviseClick}
              disabled={isActing}
              className="menu_button interactable revise"
              title="Request changes to this entry. Provide instructions in the optional textbox below."
            >
              <i className="fa-solid fa-pen-nib"></i> {isRevising ? '...' : 'Rewrite'}
            </STButton>
            <STButton onClick={() => setIsEditing(true)} disabled={isActing} className="menu_button interactable edit">
              <i className="fa-solid fa-pen-to-square"></i> Edit
            </STButton>
            {isUpdate && (
              <STButton
                onClick={() => setIsComparing(true)}
                disabled={isActing}
                className="menu_button interactable compare"
              >
                <i className="fa-solid fa-code-compare"></i> Compare
              </STButton>
            )}
            <STButton
              onClick={() => onRemove(entry, initialWorldName, true)}
              disabled={isActing}
              className="menu_button interactable blacklist"
            >
              <i className="fa-solid fa-ban"></i> Blocklist
            </STButton>
            <STButton
              onClick={() => onRemove(entry, initialWorldName, false)}
              disabled={isActing}
              className="menu_button interactable remove"
            >
              <i className="fa-solid fa-trash-can"></i> Remove
            </STButton>
          </div>
        </div>
        <details className="continue-prompt-section">
          <summary>Optional continue/rewrite instructions</summary>
          <STTextarea
            value={updatePrompt}
            onChange={(e) => setUpdatePrompt(e.target.value)}
            placeholder="Add specific instructions, then press Continue or Rewrite."
            rows={2}
            style={{ width: '100%' }}
          />
        </details>
      </div>

      {isEditing && (
        <Popup
          type={POPUP_TYPE.CONFIRM}
          content={<EditEntryPopup ref={editPopupRef} entry={entry} initialRegexIds={sessionRegexIds} />}
          onComplete={(confirmed) => {
            if (confirmed && editPopupRef.current) {
              const { updatedEntry, updatedRegexIds } = editPopupRef.current.getFormData();
              onUpdate(initialWorldName, entry, updatedEntry, updatedRegexIds);
            }
            setIsEditing(false);
          }}
        />
      )}

      {isComparing && existingEntry && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={<CompareEntryPopup originalEntry={existingEntry} newEntry={entry} />}
          onComplete={() => setIsComparing(false)}
        />
      )}

      {isReviseSessionManagerOpen && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            <ReviseSessionManager
              target={{ type: 'entry', worldName: initialWorldName, entry: entry }}
              initialState={entry}
              onClose={() => setIsReviseSessionManagerOpen(false)}
              onApply={handleApplyReviseSession}
              sessionForContext={sessionForContext}
              allEntries={entriesGroupByWorldName}
              contextToSend={contextToSend}
            />
          }
          onComplete={() => setIsReviseSessionManagerOpen(false)}
          options={{ wide: true, large: true }}
        />
      )}
    </>
  );
};
