# PublicOfferingShares release website alignment

## 1. Idea summary

Keep the existing public product/support/privacy pages truthful during the 1.1.26 app release. This cross-repository change is limited to the app's public release documentation and directory entry.

## 2. MVP scope

- Problem: static example figures read as live data and backup persistence is not explained.
- Must-have: label examples, explain the simplified home/report split, document safe backup restore and external backup deletion, preserve existing icon/store/support/privacy links and Korean locale.
- Out of scope: website redesign, additional locales, analytics, app-data changes, unapproved replacement screenshot artwork.
- Success: desktop/mobile readable; linked public pages and images load; no browser errors; scoped commit/push and live GitHub Pages verification.
- Monetization remains consent-gated contextual AdMob banners; offline records remain usable.

## 3. Feature specification

- Product: replace time-sensitive sample claims with stable instructions. Mark legacy screenshots and illustrative calendar/figures clearly; avoid implying 1.1.26 is publicly available before store approval. Home summary focuses on grade/institution metrics; detailed allocation remains in reports.
- Support: explain that invalid backups are rejected before replacing records; remind users to retain a separate backup before import.
- Privacy: clarify that exported/automatic backup files in Downloads or user-selected locations can remain after uninstall and require explicit user deletion. No new data collection is introduced.
- Errors/acceptance: broken links, clipped text, missing images or unsupported language claims block completion.

## 4. Wireframe

```text
LABHUB router -> App introduction -> Google Play / App Store
                                -> Support -> backup guidance / contact
                                -> Privacy -> local storage / backup deletion
```

## Verification

- Commit 078a268 deployed successfully in Pages run 35472721368.
- Found that /google-privacy/ is served by the separate qnqnckck/google-privacy project Pages site, taking precedence over this mirrored folder. Applied identical app-specific copy in packages/google-privacy-site (e7e51f2, successful run 35473081665).
- Live router/product/support/privacy checked on desktop and 390x844 mobile; linked app images load, no document overflow in scoped pages or console errors. Public HTTPS links verified.
