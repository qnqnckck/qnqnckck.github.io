# Household Ledger Public Pages Plan

## Idea Summary

Add Household Ledger to the LABHUB `router.html` app wall and create public store-support pages for marketing, support, and privacy policy.

## MVP Scope

Core user problem: store review and users need stable public URLs that explain the app, provide support contact information, and disclose privacy behavior.

Must-have flows:
1. Router homepage shows Household Ledger alongside the other LABHUB apps.
2. App card links to marketing, support, and privacy pages.
3. Marketing page shows the app identity, offline/local-first positioning, and real UI screenshots.
4. Support page provides contact and troubleshooting.
5. Privacy page clearly states local storage behavior, optional permissions, ads, and deletion.

Out-of-scope items:
1. Store download buttons with live Play Store IDs.
2. Backend account, cloud sync, or payment flows.
3. Rebuilding the whole LABHUB homepage style.

Success criteria:
1. `router.html` contains a Household Ledger hero stamp and app wall card.
2. `google-privacy/household-ledger/index.html`, `support.html`, and `private-policy.html` exist.
3. Required assets are local and referenced with relative paths.
4. Static HTML opens without missing local assets for the new Household Ledger pages.

## Feature Specification

Router addition:
- Purpose: make Household Ledger discoverable from the LABHUB homepage.
- User interaction flow: user opens `router.html`, selects Household Ledger, then chooses introduction/support/privacy.
- Data/state changes: none.
- Error states: broken links or missing icons are failure.
- Acceptance criteria: app count updates and links use the same pattern as existing app cards.

Marketing page:
- Purpose: explain the local-first ledger app in store-friendly language.
- User interaction flow: user scans value prop, screenshots, features, and support/privacy links.
- Data/state changes: none.
- Error states: unavailable screenshots or misleading data claims are failure.
- Acceptance criteria: page uses real app screenshots and no unsupported backend claims.

Support and privacy pages:
- Purpose: provide Google Play public URLs.
- User interaction flow: user reads support steps or privacy disclosures and can email the developer.
- Data/state changes: none.
- Error states: missing contact or vague privacy handling is failure.
- Acceptance criteria: includes local storage, optional permissions, ads, deletion, children policy, and contact.

## Wireframe

```text
router.html
  LABHUB hero
    floating Household Ledger stamp
  APP WALL
    Household Ledger card
      소개 -> google-privacy/household-ledger/
      지원 -> support.html
      개인정보 -> private-policy.html

household-ledger/index.html
  sticky header
  hero value proposition
  screenshot stack
  feature cards
  privacy/local-first notice
  support/privacy links

support.html
  contact
  troubleshooting
  local data notes

private-policy.html
  collected/processed data
  purpose
  storage/transmission
  permissions
  ads
  deletion
  contact
```
