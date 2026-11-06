# Dragon Oath release website

## Idea summary
Publish an accurate product, support and privacy site for the existing Android tactical RPG. User approved jade/ink/hero art direction on 2026-11-06. Preserve existing site entries and unrelated worktree changes by using this isolated worktree.

## MVP scope
Problem: players need an honest preview and clear purchase, save and privacy information.
Must-have: responsive product page, support FAQ, privacy policy, KO/EN/JA navigation, LABHUB directory card and working HTTPS links. No account or backend required. Success: all nine pages render on desktop/mobile, no missing assets/internal links, live deployment verified.
Out of scope: inventing a public store availability date, pretending the story is translated, or changing game rules. The initial store gallery is Korean because the current story projection still contains Korean prose in English/Japanese UI. English/Japanese web pages explicitly disclose this limitation; do not describe them as complete game localization.

## Feature specification
Product: one dominant gameplay preview action, real in-app screenshots, original promotional art labelled, free campaign and optional one-time ad removal described. State is static; release pending is visible instead of a dead download link.
Support: local-save recovery limits, offline ad fallback, ad removal/restore and Google Play refund links. No support message is sent automatically. Contact email uses the existing published LABHUB address.
Privacy: distinguish on-device saves from Google Mobile Ads SDK processing and Google Play purchases. Link official provider policies. No false no-data-collection claim or invented retention promise.
Language navigation: explicit static locale links preserve page type. No tracking, external fonts or remote API. All pages usable offline after downloading the site files.
Directory: add one card linking all three Korean pages with the current icon. Do not edit other apps.

## Wireframe
Header: app icon/name | product | support | privacy | language
Product: release status -> hero/title/one preview action -> real battlefield -> tactics/cinematic cards -> free/purchase/local save notes -> footer.
Support: clear contact action -> categorized FAQ -> privacy/product return.
Privacy: effective date -> local data / ads / purchases / choices / contact -> provider links.

## Visual direction
Reference completeness: google-privacy/household-ledger. Chosen metaphor: jade command seal and battlefield scroll. Alternatives considered in game doc/store247-production-plan.md: ivory strategy dossier and hero gallery. Use jade/ink/gold, original hero group, restrained thin lines and generous reading width. 48px links, visible focus, no decorative motion, readable contrast. Hero art is promotional; game panels retain their entire HUD and aspect ratio. No imitation of another game's assets or branding.

## Monetization and privacy sources
Full campaign free, one-time remove_ads; Korean Play price KRW5,000, regional price shown by Play. Ads between battles from continuation after second victory, and confirmed defeat retry from battle three. No-fill/offline continues; minimum two-minute interstitial interval. Purchase restore requires same Play account/network and restores entitlement only.
Official source: https://developers.google.com/admob/android/privacy/play-data-disclosure and https://policies.google.com/privacy . Provider processing may include IP/coarse location, device identifiers, app/ad interactions and diagnostics for advertising, fraud prevention and service operation.

## Verification
Record local browser screenshots, link audit, scoped commit and live HTTPS checks in the main game doc/store247-verification.md. app-ads.txt already contains the correct publisher record and is unchanged.

The existing public google-privacy subtree returns404 even for the older Household Ledger reference. The ff61e16 deployment succeeded and its artifact contains all19 Dragon Oath entries with correct644/755 modes; root router.html is live with the new card. Add root entry mirrors like the existing household-ledger.html convention, retaining canonical source pages under google-privacy/dragon-oath. Root mirrors use their own scoped dragon-oath-* assets/CSS, and the directory card links these operational entry points. Browser checks verify locale/page navigation, no overflow or missing images. This is a routing compatibility measure, not a redesign of other apps or a claim that the underlying site-wide issue was fixed.
