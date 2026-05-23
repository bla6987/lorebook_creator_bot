import { FC, useMemo } from 'react';
import { diffWords } from 'diff';
import { ExtendedWIEntry } from '../types.js';
import { getActivationMode, getPositionLabel, getRoleLabel } from './lorebookEditorUtils.js';

interface CompareEntryPopupProps {
  originalEntry: ExtendedWIEntry;
  newEntry: ExtendedWIEntry;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const formatValue = (value: unknown) => {
  if (Array.isArray(value)) return value.join(', ');
  if (value === null || value === undefined || value === '') return 'Unset';
  return String(value);
};

export const CompareEntryPopup: FC<CompareEntryPopupProps> = ({ originalEntry, newEntry }) => {
  const diffResult = useMemo(() => {
    const diff = diffWords(originalEntry.content ?? '', newEntry.content ?? '');
    let originalHtml = '';
    let newHtml = '';

    diff.forEach((part) => {
      const style = part.added
        ? 'color: green; background-color: #e6ffed;'
        : part.removed
          ? 'color: red; background-color: #ffebe9;'
          : 'color: grey;';

      const span = `<span style="${style}">${escapeHtml(part.value)}</span>`;

      if (!part.added) {
        originalHtml += span;
      }
      if (!part.removed) {
        newHtml += span;
      }
    });

    return { originalHtml, newHtml };
  }, [originalEntry, newEntry]);

  const metadataRows = useMemo(
    () => [
      { label: 'Title', before: originalEntry.comment, after: newEntry.comment },
      { label: 'Triggers', before: originalEntry.key ?? [], after: newEntry.key ?? [] },
      { label: 'Activation', before: getActivationMode(originalEntry), after: getActivationMode(newEntry) },
      { label: 'Position', before: getPositionLabel(originalEntry.position), after: getPositionLabel(newEntry.position) },
      { label: 'Order', before: originalEntry.order, after: newEntry.order },
      { label: 'Depth', before: originalEntry.depth, after: newEntry.depth },
      { label: 'Role', before: getRoleLabel(originalEntry.role), after: getRoleLabel(newEntry.role) },
    ],
    [originalEntry, newEntry],
  );

  return (
    <div className="compare-popup" style={{ padding: '10px' }}>
      <h3>Compare Changes</h3>
      <div className="metadata-diff-grid">
        <div className="metadata-diff-heading">Field</div>
        <div className="metadata-diff-heading">Original</div>
        <div className="metadata-diff-heading">Suggestion</div>
        {metadataRows.map((row) => {
          const before = formatValue(row.before);
          const after = formatValue(row.after);
          const changed = before !== after;
          return (
            <div key={row.label} className={changed ? 'changed' : ''}>
              <strong>{row.label}</strong>
              <span>{before}</span>
              <span>{after}</span>
            </div>
          );
        })}
      </div>
      <div className="content-diff-grid">
        {/* Original Content Column */}
        <div className="content-diff-column">
          <h4>Original Content</h4>
          <div
            className="content-diff-box"
            dangerouslySetInnerHTML={{ __html: diffResult.originalHtml }}
          />
        </div>

        {/* New Content Column */}
        <div className="content-diff-column">
          <h4>New Content (Suggestion)</h4>
          <div
            className="content-diff-box"
            dangerouslySetInnerHTML={{ __html: diffResult.newHtml }}
          />
        </div>
      </div>
    </div>
  );
};
