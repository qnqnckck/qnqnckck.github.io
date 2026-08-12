# Paper Dock global release website plan

## Idea summary

Bring the existing Paper Dock launch, support, and privacy pages into parity with the app and store listing. The site remains a static, local-first-friendly GitHub Pages artifact with no analytics, account, backend, or runtime dependency.

## MVP scope

### Core user problem

Store visitors and customers in every shipped locale need to understand the product, find recovery help, and read the actual privacy terms without falling back to another language.

### Must-have flows

- Follow the system language on first visit across the 12 shipped locales.
- Allow an explicit language override that persists locally.
- Move between product, support, privacy, and LABHUB directory pages without losing the selected language.
- Present complete product, support, monetization, storage, sharing, and privacy behavior in every locale.
- Remain usable with JavaScript disabled through a complete English fallback.

### Out of scope

- Accounts, contact forms, analytics, remote translation, app-download redirects before store URLs are public, or a build system.

### Success criteria

- All three pages expose the same 12 locales as the app and store listing.
- Every visible copy slot has a value in every locale; missing keys fail an automated audit.
- Keyboard focus, 200% text, 360px mobile width, reduced motion, and internal links remain usable.
- Pages produce no browser console errors and all production HTTPS URLs return successfully.

## Feature specification

### Locale selection

- Purpose: align the site with app/store localization.
- Flow: system locale is mapped to a supported locale; selecting another locale immediately updates copy and stores the choice in `localStorage`.
- State: `paperDockLocale`; URL query `lang` takes precedence and is propagated to internal Paper Dock links.
- Error state: unknown or unavailable locale falls back to English.
- Acceptance: all 12 options update `lang`, title, description, navigation, and page content.

### Product page

- Purpose: explain the six real PDF workflows and one-time Pro value exchange.
- Flow: understand value, inspect tools, open support/privacy.
- Acceptance: no claim exceeds shipped behavior; free tier is clearly useful and ad-free.

### Support page

- Purpose: provide recovery paths for protected/damaged PDFs, cancellation, purchase restore, and contact.
- Flow: identify the matching issue, follow corrective guidance, optionally email support without attaching sensitive documents.
- Acceptance: advice matches implemented error handling and purchase restoration.

### Privacy page

- Purpose: disclose document processing, storage, sharing, purchases, tracking, retention, children, and contact behavior.
- Flow: scan section headings and read the relevant disclosure.
- Acceptance: copy matches the shipped SDKs, Android backup settings, and platform purchase processing.

## Wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ [icon] PAPER DOCK      Product  Support  Privacy  [Language] │
├──────────────────────────────────────────────────────────────┤
│ Product: dominant promise + icon + primary feature action    │
│          six workstation cards + privacy/value ticket        │
│                                                              │
│ Support: issue title → direct recovery guidance → contact    │
│                                                              │
│ Privacy: effective date → structured disclosure sections     │
├──────────────────────────────────────────────────────────────┤
│ LABHUB · Product · Support · Privacy                          │
└──────────────────────────────────────────────────────────────┘

Mobile: brand → language selector → two-column/two-row nav →
single-column content. All controls retain at least 48px height.
```

## Visual direction

Continue the document-dock metaphor already used by the app: heavy navy rules are dock rails, cyan stamps indicate status, white sheets hold content, and the app icon remains the dominant launch object. Localization changes density and hierarchy only; it does not introduce a separate visual identity.

Reusable primitives: sticky dock bar, language stamp selector, primary/secondary ticket buttons, workstation card, status ticket, document section label, and shared footer navigation.

