# Drawing Playground release-copy alignment

## Idea summary

Align the public website with the actual Drawing Playground photo-to-art app
and the iOS1.9.5 candidate while retaining existing URLs and visual identity.

## MVP scope

Core problem: root and legacy pages disagree about modes, iOS advertising and
export behavior, and language coverage is incomplete. Must-have: complete
ko/en/ja/zh-CN/es/pt-BR landing/support/privacy content, correct platform split,
free/Pro and local/export disclosures, consistent navigation. Out of scope:
new branding, synthetic screenshots, other apps, pricing/store approval claims,
analytics or new backend dependencies. Success: targeted static pages verified
on desktop/mobile, language/link checks pass and live publication verified.

## Feature specification

| Feature | Purpose and interaction | State / errors / acceptance |
| --- | --- | --- |
| App story | Photo -> outline -> coloring -> editable artbook -> user-selected export | Describe current features without guaranteeing perfect conversion or an approved store launch |
| Locales | Six complete languages; visible language links, no forced account | All primary content and navigation translated, correct lang attributes, working anchors |
| Support | Explain landscape, example/first photo, saving/reopening, purchase restoration and export | Distinguish iOS no ads/web search from Android optional ads/web search; no false device-QA promise |
| Privacy | State on-device processing, local storage, explicit export destinations, store billing, Android external services, contact and deletion | No invented collection/retention claims; preserve factual caveats and platform distinction |
| Compatibility | Canonical app folder with old root links still usable | No broken support/privacy URLs; legacy typo privacy alias remains functional |

## Wireframe

```text
LABHUB router -> Drawing Playground landing
                    language navigation (6)
                    photo-to-art story / free and Pro
                    support <-> privacy
old root URLs ------^ compatibility links
```

## Visual direction and boundaries

This is a content/localization correction, not a new UI design. Retain the
existing paper/sticker metaphor, palette, icon and legible static page framing.
Language navigation should wrap and preserve 48px touch targets. Do not publish
old sample screenshots as evidence of the current release. No new app image is
required for the factual text pass. Modified paths are limited to the app folder,
three root compatibility pages, Drawing Playground router links, and this doc.

## Verification

Check six-language completeness, internal file links and fragment IDs, HTML
structure and console errors; inspect desktop/mobile screenshots. Review diff
before a scoped commit/push. Confirm resulting public HTTPS pages after deploy.

## Implemented copy and compatibility (local, 2026-09-19)

- Canonical landing, support and privacy pages now contain complete static
  ko/en/ja/zh-CN/es/pt-BR sections, with matching language fragments. Optional
  local JavaScript selects a section from the URL or system language; all
  sections and links remain available without JavaScript.
- Root landing/support/privacy URLs and the legacy `private-policy.html` typo
  redirect to canonical pages while retaining the fragment. Each also has
  six-language static fallback links.
- Retained the existing paper/sticker palette, borders and app icon. Removed
  stale screen images from rendered pages only; the source files remain intact.
- The landing and support pages explicitly identify the described features as
  version 1.9.5 and do not promise public-store availability.
- Privacy sections reuse the six committed in-app translations from app commit
  `5fc6cb25aded210fc3a93781bb3d26e3dbe116b5`, aligned with monetization and export
  code. Added factual email-contact and GitHub Pages hosting disclosures.
- First-photo wording refers to a saved personal-photo coloring page, not a
  completed colored artwork. iOS has no third-party ads or web search; Android
  optional services and user-selected export destinations are distinguished.

### Local verification

- `node --check google-privacy/drawing-playground/languages.js`: PASS.
- Read-only Node static verification: PASS for 18 complete locale sections,
  HTML tag nesting, 154 local links/assets/fragments, four hash-preserving
  aliases, and 12 system-language/hash selection and subsequent-change cases.
- `git -c safe.directory=D:/harness/packages/labhub-site diff --check`: PASS.
- Source parity check against the committed app privacy, monetization, artbook,
  export, finish and journey-string files: no worktree differences.
- Korean word boundaries and balanced headings were corrected following the
  main agent's desktop visual inspection. Main agent owns final desktop/mobile
  browser inspection, public deployment, live URL checks and publication record.

### Linguistic review boundary

All six packages received a terminology and factual consistency pass against
the committed in-app copy. This is not a claim of independent native-speaker
certification. New landing/support prose and contact disclosures received a
separate contextual linguistic pass: Korean/English by the main reviewer and
Japanese, Simplified Chinese, Spanish and Brazilian Portuguese by the independent
copy reviewer. No material factual mismatch was found. Existing artbook/album UI
terminology aliases remain documented rather than represented as one label. No
screenshots were created or certified as native-device evidence in this pass.

### Main browser verification

- Local server: Python `-m http.server 8793 --bind 127.0.0.1 --directory
  D:\harness\packages\labhub-site` (local-only).
- At 390x844, all six languages on landing/support/privacy select exactly one
  correct-language article. All 18 combinations have no horizontal document
  overflow or overflowing headings/paragraphs/links. Support has nine complete
  sections and privacy six in each locale.
- Inspected rendered mobile landing/support/privacy and 1280x900 desktop
  landing/support/privacy screenshots. Korean word-break correction is visible;
  text remains legible, the icon loads, and navigation controls wrap cleanly.
- Browser compatibility checks: root about#ja, support#es, privacy#pt-BR and
  legacy private-policy#zh-CN all resolve to the matching canonical language.
- Browser warning/error log query returned an empty list. No native app testing
  or App Store screenshot approval is implied by these website checks.
