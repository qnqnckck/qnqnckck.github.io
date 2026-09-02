# Shape Escape public pages plan

## Idea summary

Publish a clear LABHUB landing page for Shape Escape: Puzzle Rescue so the app is discoverable from the central router, with matching support and privacy pages.

## MVP scope

- Core problem: visitors need to understand the puzzle loop, progression, and purchase model before installing.
- Must-have flows: router → landing page → support/privacy; every page returns to the router.
- Out of scope: accounts, analytics, remote game services, and interactive puzzle simulation.
- Success criteria: all three HTTPS pages load, the icon renders, copy matches the shipped 300-level / 30-level-free behavior, and links are usable on desktop and mobile.

## Feature specification

- Landing page: explain the spatial puzzle loop and link to support/privacy. State changes are navigation only; broken assets must not block text content. Acceptance: hero, three value cards, and legal/support links are visible.
- Support page: explain movement arrows, hearts, restore purchases, and troubleshooting. Acceptance: contact address and return links are present.
- Privacy page: describe on-device progress, optional AdMob rewarded ads, StoreKit/Google Play purchases, retention, and contact. Acceptance: no unsupported collection claims and policy link is reachable.

## Wireframe

```text
[LABHUB / Shape Escape] [Apps] [Support] [Privacy]
┌──────────────────────┬─────────────────────────┐
│ Think. Move. Escape. │ app icon + puzzle grid  │
│ 300-level campaign   │                         │
│ [How to play]        │                         │
└──────────────────────┴─────────────────────────┘
[300 levels] [Visible arrows] [Offline + optional purchase]
[LABHUB Apps] [Support] [Privacy]
```
