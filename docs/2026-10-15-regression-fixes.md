# Follow-up review fixes — 0.2.3

This release addresses the ten findings from the second review of `2488b28`, starting from `3548973` and preserving its popup/toast HTML escaping fixes.

| Finding | Change | Regression coverage in `src/test/` |
| --- | --- | --- |
| R01: overlapping saves discarded accepted entries | Queue complete read/apply/save operations per world and publish committed state before the next operation. Serialize checked saves through verification. Merge editor changes by field so unrelated accepted changes survive. | `editor-ui-regressions.test.ts`, `world-info-save.test.ts` |
| R02: failed branch retries wrote the parent | Coalesce branch creation, retain implicit branch-source mappings, and persist resolved suggestion targets across popup reopen. Preserve explicit target overrides. | `editor-ui-regressions.test.ts`, `main-session-ui.test.ts` |
| R03: case aliases overwrote presets | Compare all host preset names using Unicode normalization and case folding before creating a profile. Support both host name-list formats. | `api-settings.test.ts` |
| R04: Apply All retained completed suggestions after cloning | Match submitted world/content snapshots, preserve concurrently changed suggestions, and deduplicate overlapping applications. | `editor-ui-regressions.test.ts` |
| R05: revision requests lost provider metadata | Remove extension-local snapshots, flags, IDs, and raw chat sources while retaining instruct formatting and tool-call fields on all request paths. | `revision-request-messages.test.ts`, `revise-session-ui.test.ts` |
| R06: reused UIDs inherited deleted entries' history | Require world, UID, and an entry lifetime marker; preserve the marker through ordinary edits and revalidate before applying. Give copied entries independent markers, and relocate history only for a confirmed unsaved suggestion assigned a new UID. Preserve older histories for preview and explicit attachment of a copy. | `revise-session-ui.test.ts`, `editor-ui-regressions.test.ts`, `revision-storage-records.test.ts` |
| R07: inner fences broke manual revisions | Unwrap the enclosing response fence without extracting fences inside JSON strings or XML text. | `parser.test.ts` |
| R08: an empty editable-entry list allowed every update | Treat a supplied empty list as a restriction, separately from an omitted argument. | `commands.test.ts` |
| R09: message ranges included extra chat | Share validated inclusive-range conversion across commands, recommendation UI, and revision chats, including the installed dependency's zero-end compatibility handling. | `message-ranges.test.ts`, `commands.test.ts`, `revise-session-ui.test.ts` |
| R10: browser tabs overwrote unrelated revision histories | Store bounded per-session field records instead of replacing a shared stale array. Migrate only after preserving valid records, and use deletion tombstones to prevent resurrection while reclaiming obsolete payloads. | `session-storage.test.ts`, `revision-storage-records.test.ts`, `revise-session-ui.test.ts` |

## Compatibility

- Entry lifetime markers are extension metadata; ordinary lore text, titles, triggers, and activation settings are unchanged by identity creation. Opening revision history does not save unrelated editor drafts.
- Old histories without a trustworthy lifetime marker remain available for preview. Explicitly attaching a copy avoids silently applying a deleted entry's history to its replacement.
- Revision storage works on ordinary HTTP LAN installations without requiring Web Locks. Different sessions and different fields can be saved independently. Concurrent edits to the same field use the last committed write.
- Preset collision checks protect names already known to the host. The host's save API does not provide an atomic exclusive-create operation for a separate client creating the same name concurrently.

## Verification

- `npm test -- --run`: **215 tests passed across 17 files**.
- `npm run build`: TypeScript checks and production Vite build passed; `dist/index.js` rebuilt.
- `git diff --check`: no whitespace errors.
- Independent Sol 6.1 reviews found no remaining blockers in the ten fixes after the reported integration issues were corrected.
- Additional isolated harnesses exercise actual host save/debounce functions, prompt formatting and tool histories, filesystem filename aliases, installed prompt-builder slicing, separate-tab storage, and corrupt-record migration recovery.

No live user lorebooks or browser histories are used by the verification harnesses, and no paid provider requests are sent. Live provider and native-dialog behavior are not part of these automated checks.
