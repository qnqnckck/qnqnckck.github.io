# Today Margin listing plan

## Idea summary

Add Today Margin to the LABHUB public app directory and publish its app, support, and privacy pages.

## MVP scope

- Problem: app-store and AdMob review need stable public information and privacy URLs.
- Must-have flows: app directory to Today Margin; Today Margin to support/privacy; return to directory.
- Out of scope: dynamic forms, accounts, analytics, downloads.
- Success: all links return successful HTTPS responses and remain mobile-readable.

## Feature specification

- Directory card: purpose is product discovery; it links to three public pages; no stored state; relative links avoid environment errors; acceptance requires visible name, summary, and links.
- Public pages: purpose is store/compliance support; visitors read or contact the developer; only language preference changes locally; acceptance requires Korean/English policy and accurate AdMob disclosure.

## Wireframe

```text
[LABHUB app wall]
  ... existing apps ...
  [Today Margin]
    [Intro] [Support] [Privacy]
```

