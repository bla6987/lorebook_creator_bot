# Review fixes — 0.2.2

The follow-up review and subsequent corrections are documented in [the 0.2.3 review fixes](2026-10-15-regression-fixes.md).

The 21 findings from the October 14 review are addressed below. The review started at `ee52c1f`; the shipped `dist/index.js` was rebuilt after these changes.

| # | Finding | Fix | Regression coverage in `src/test/` |
| --- | --- | --- | --- |
| 1 | Multi-world saves persisted only the last world | All save paths use the shared checked-save helper: immediate host writes, uncached server read-back, and cache restoration on failure. Immediate mode also cancels queued native writes. Empty books require a server file-list check because `/get` returns a dummy for missing files. | `world-info-save.test.ts`, `commands.test.ts`, `editor-ui-regressions.test.ts` |
| 2 | Suggestion HTML could execute handlers | Render only the result of host DOMPurify sanitization; memoize by content. | `editor-ui-regressions.test.ts`; additional actual-host DOMPurify smoke check |
| 3 | Save Entry discarded other drafts/deletions | Reconcile the incoming baseline with dirty drafts, acknowledge only submitted data, preserve edits made during a pending save, and serialize editor save actions. | `editor-ui-regressions.test.ts` |
| 4 | Applying a chat revision corrupted the suggestion | Use a consistent entry-apply envelope and extract its `updatedEntry`. | `editor-ui-regressions.test.ts` |
| 5 | Global Revise mixed book-local UIDs and omitted zero | Key suggestions by world and UID; accept UID zero. | `editor-ui-regressions.test.ts` |
| 6 | Failed branch fork wrote into parent | Stop target resolution when a required fork fails. | `editor-ui-regressions.test.ts` |
| 7 | Late responses overwrote newer session history | Merge field patches into current history; abort and invalidate requests on departure; prevent stale navigation. | `revise-session-ui.test.ts` |
| 8 | Command restrictions were bypassed by renaming | Match updates by world/UID and authorize against the original entry title. | `commands.test.ts` |
| 9 | Apply All removed failed suggestions | Commit only successful worlds and remove only their submitted suggestions. Duplicate suggestions classified as unchanged also wait for their world's write. | `editor-ui-regressions.test.ts` |
| 10 | Failed Add disabled retry | Reset the card's busy flag in `finally`. | `editor-ui-regressions.test.ts` |
| 11 | Entry renaming hid revision history | Use stable serialized world/UID identifiers and normalize legacy title-containing identifiers on load. | `session-storage.test.ts`, `revise-session-ui.test.ts` |
| 12 | XML trigger wrappers became `[object Object]` | Unwrap primitive item arrays and reject unexpected objects. | `parser.test.ts`, `request.test.ts` |
| 13 | Continue used an old assistant message | Construct the continuation prefix from its target entry directly. | `generate.test.ts` |
| 14 | Native global schema violated strict requirements | Recursively adapt optional properties to required nullable fields; restore omission semantics before original schema validation. Manual formats retain their original schemas. | `native-response-schema.test.ts`, `request.test.ts` |
| 15 | XML serialization lost literal markup | Escape serialized text; preserve CDATA, literal reasoning tags, and inner code fences; reject unexpected nested text objects instead of silently erasing them. | `parser.test.ts` |
| 16 | Numeric-looking text changed during parsing | Disable automatic XML text-to-number conversion in both parsers. | `parser.test.ts`, `request.test.ts` |
| 17 | Truncated multi-entry XML was accepted | Validate the complete extracted XML before accepting entries. | `parser.test.ts` |
| 18 | New profiles overwrote existing presets | Validate canonical filenames through the host sanitizer and reject preset-name collisions before saving. This includes names that would otherwise sanitize to an existing preset. | `api-settings.test.ts`; additional actual-host sanitizer smoke check |
| 19 | Requests uploaded all historical snapshots | Project outgoing structured and plain revision messages to `role` and `content`, retaining full snapshots locally. | `revise-session-ui.test.ts` |
| 20 | Documented context flags were ignored | Normalize command context names to lowercase. | `commands.test.ts` |
| 21 | Command overrides mutated shared settings | Clone nested settings and apply explicit message overrides independently of the prior `none` setting. | `commands.test.ts` |

## Verification

- `npm test -- --run`: 123 tests across 14 files, including 64 additional regression cases.
- `npm run build`: TypeScript checks and production Vite build.
- `git diff --check`: no whitespace errors.
- Additional temporary harnesses exercised the installed host DOMPurify and filename sanitizer, and the actual extracted host debounce/save functions, with isolated in-memory state.
- The new `worldInfoCache` runtime import resolves through `../../../../world-info.js` from the installed extension's `dist/index.js`, matching the existing host imports and the configured installation directory.

Checked saves add one server read-back per write because the host save function ignores HTTP status failures. Empty worlds add an existence check. These reads establish persistence without replacing global `fetch` or allowing an old native debounce to overwrite the extension's write.

Validation used real project components and host functions with mocked service boundaries. No live user lorebooks were changed and no paid provider requests were sent. Native structured-output compatibility was checked against the schema contract and local host request path; live provider and native-dialog behavior remain untested.
