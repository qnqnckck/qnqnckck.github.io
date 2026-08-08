# Drawing Playground Public Pages Plan

## Idea summary

Add Drawing Playground to the LABHUB public app catalog and publish stable Google Play URLs for its product overview, support information, and bilingual privacy policy.

## MVP scope

- Core user problem: testers and store reviewers need public, accurate information about the app and its local-only data handling.
- Must-have flows: open the LABHUB app list, visit the Drawing Playground page, reach support, and read the Korean or English privacy policy.
- Out of scope: accounts, web drawing features, analytics, payments, and a dynamic backend.
- Success criteria: all pages render as static HTML, local links and assets resolve, and the privacy-policy URL is publicly reachable after GitHub Pages deployment.

## Feature specification

### LABHUB catalog entry

- Purpose: make the app discoverable from the studio app list.
- User interaction flow: LABHUB app wall -> Drawing Playground card -> overview/support/privacy link.
- Data/state changes: none; static navigation only.
- Error states: missing icon or broken relative link.
- Acceptance criteria: the app count and ticker include Drawing Playground and all three card links resolve.

### Product overview

- Purpose: explain the child-friendly offline drawing experience.
- User interaction flow: scan features and screenshots -> open support or privacy policy.
- Data/state changes: none.
- Error states: missing screenshots or unreadable responsive layout.
- Acceptance criteria: icon, six screenshots, core features, offline behavior, and policy links are visible on mobile and desktop.

### Support and privacy

- Purpose: provide store-compliant support and transparent data handling information.
- User interaction flow: read common help topics or policy -> contact LABHUB by email.
- Data/state changes: an email is sent only when the visitor activates the mail link.
- Error states: stale contact address or claims that differ from app behavior.
- Acceptance criteria: the pages state that there are no accounts, ads, analytics, cloud uploads, or developer-side collection; selected photos and artwork stay on device.

## Wireframe

```text
[LABHUB APP WALL]
        |
        v
[Drawing Playground overview]
   |        |          |
screens   support   privacy (KO/EN)
             \          /
              [email contact]
```

