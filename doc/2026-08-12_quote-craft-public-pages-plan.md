# QuoteCraft public release pages

## Idea summary

Publish a complete, responsive public presence for QuoteCraft that matches the app's receipt-and-workshop metaphor and accurately explains its local-first pricing, quote, invoice, payment, and profit workflow.

## MVP scope

- Core problem: store visitors need a trustworthy explanation, support path, and privacy disclosure before installing or purchasing.
- Must-have flows: discover product value, understand offline storage and Pro billing, reach support, read privacy terms, return to the LABHUB directory.
- Out of scope: account login, web data sync, analytics, checkout outside Apple/Google billing, and fabricated store download links.
- Success criteria: landing/support/privacy pages work at mobile and desktop widths, six app locales are selectable, all links resolve, and the central router contains QuoteCraft.

## Feature specification

### Landing page
- Purpose: communicate the price-to-profit workflow in under five seconds.
- Interaction: language picker, feature sections, support/privacy navigation.
- State: selected language is kept in the URL and local storage.
- Errors: unsupported locale falls back to Korean.
- Acceptance: primary value, core features, local-first behavior, and Pro model are accurate.

### Support page
- Purpose: provide troubleshooting, backup, billing restore, and contact guidance.
- Interaction: language picker and links to product/privacy pages.
- Acceptance: no promise of server recovery; store-billing limitations are explicit.

### Privacy page
- Purpose: disclose on-device business data, exported files, and Apple/Google purchase processing.
- Acceptance: no ads or backend are claimed; deletion and retention behavior match the app.

### LABHUB router entry
- Purpose: make QuoteCraft discoverable in the central app directory.
- Acceptance: current icon, product summary, landing, support, and privacy links are present.

## Wireframe

```text
[LABHUB]                       [Language] [Support]

[QUOTE WORKSHOP]
Price it. Quote it. Get paid.
[rate] -> [quote] -> [invoice] -> [profit]

[Primary product proof card]
[Feature grid: clients | items | payments | actual profit]
[Local-first + Pro disclosure]
[Support] [Privacy]
```

Support and privacy pages use the same header, language control, paper-card system, and footer.

## 2026-08-14 renewal mapping

- Reference level: PublicOfferingShares' complete mobile/desktop product narrative, sticky navigation, product proof, feature explanation, support access, and legal linkage.
- Original direction: retain QuoteCraft's quote-workshop metaphor, navy/coral/cream palette, receipt-like status language, and real product screenshots rather than copying the IPO product's visual trade dress.
- Public root routes: `quote-craft.html`, `quote-craft-support.html`, and `quote-craft-privacy.html` avoid the unreliable nested Pages route and keep every central-directory link HTTPS-accessible.
- Product proof: five Korean Google Play screenshots map the story from sustainable pricing through quote, invoice/payment, and real-profit analysis.
- Monetization: the landing page explicitly states that there are no ads and that Pro is a one-time in-app purchase rather than a subscription.

## Visual direction

- Metaphor: a professional quote workshop with paper sheets, stamped states, and a coral approval mark.
- Hierarchy: navy hero, cream paper, coral primary actions, restrained gold detail.
- Reusable primitives: paper sheet, status stamp, ledger row, metric ticket, rounded action.
- Accessibility: 48px targets, high contrast, visible focus states, responsive single-column fallback.
- Brand continuity: use the shipped QuoteCraft icon and the same navy/coral/cream palette as the Flutter app.

## 2026-08-14 global website localization

- Launch locales: Korean, English, Japanese, Spanish, French, and German, aligned with QuoteCraft's global store positioning.
- Coverage: product landing page, support FAQ, privacy policy, page titles, descriptions, navigation, accessibility labels, and internal QuoteCraft links.
- Behavior: `?lang=` takes priority, then the saved website preference, then the browser locale, with Korean as the deterministic fallback.
- Control: every QuoteCraft page exposes the same keyboard-accessible language selector and preserves the locale across landing, support, and privacy links.
- QA: verify all six locale routes, mobile navigation, long-string wrapping, internal-link locale persistence, and browser console errors before publication.
- Product proof images: each locale loads its matching five-image Google Play screenshot set; Korean screenshots must never appear as the fallback for a supported non-Korean locale.
