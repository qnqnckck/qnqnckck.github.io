# APP Wall consistency and scaling plan

## Idea summary

Turn the LABHUB APP Wall into a consistent, expandable product shelf. Every app card should use the same information order and action language, while a calm horizontal loop keeps a large catalog visible without making the page excessively tall.

## MVP scope

### Core user problem

The current cards have uneven title and description lengths, and the fixed grid will become difficult to scan as the catalog grows.

### Must-have flows

- Scan app icon, catalog number, title, description, and links in the same order on every card.
- Let the wall advance automatically in a seamless horizontal loop.
- Pause the motion on hover, keyboard focus, touch interaction, or with an explicit pause button.
- Allow direct horizontal scrolling and retain usable cards on narrow screens.

### Out of scope

- Changing app detail pages or their branding.
- Adding filtering, search, categories, or remote catalog data.
- Publishing the changed site.

### Success criteria

- Card title and copy areas remain visually aligned across all eight current apps.
- The loop continues without a visible jump and supports future cards without layout changes.
- Reduced-motion users receive a stationary, manually scrollable list.
- Every original app link remains keyboard accessible.

## Feature specification

### Standardized product card

- Purpose: make all apps comparable at a glance.
- Interaction flow: user scans catalog label, app title, short description, then chooses one of three consistent actions.
- Data/state changes: none.
- Error states: long names or localized copy must wrap without changing the action alignment.
- Acceptance criteria: identical card structure, fixed icon treatment, bounded title/copy areas, and consistent link labels.

### Auto-scrolling wall

- Purpose: continuously reveal a growing catalog in a compact section.
- Interaction flow: wall moves horizontally; hovering, focusing, touching, or pressing pause stops it; resume restarts it.
- Data/state changes: in-memory paused/running state only.
- Error states: if scripting is unavailable, the original horizontal list remains manually scrollable; if reduced motion is requested, automatic movement stays off.
- Acceptance criteria: seamless loop, no duplicate focus targets, manual scrolling remains available, and control state is announced accessibly.

## Wireframe

```text
APP WALL                         [ PAUSE AUTO SCROLL ]
Description / usage hint

< fade  [01 ICON TITLE ... LINKS] [02 ICON TITLE ... LINKS] [03 ...]  fade >
         ^ fixed card rhythm, horizontally scrollable, seamless loop ^

Mobile:
< [01 CARD ~85vw] [02 CARD] ... >
```
