# Aroki optional logo tests

This **module-logos** branch is for artwork testing. It does not publish to or
replace AROKI-Connectors/main, or this testing repository's main collection.

Paste this collection address in Aroki Sources:

https://raw.githubusercontent.com/kas021/Testing-Modules-AR/module-logos/index.json

Use Aroki **2.1.6 (91)** or newer for separate-catalogue support. The primary
schema-1 index has **no icon fields**. `artwork.json` is an optional separately
verified index-format envelope containing icon descriptors. Older readers do
not request this sidecar. Manifests contain no new artwork keys.

There are ten service-logo forks plus Flux No Logo Test and Flux Broken Logo
Test. The two fallback entries must install/load normally with initials. All
forks use distinct IDs/families so testing does not replace installed main
modules, preferences, history or downloads. Provider graphs and original
minimum engine versions are unchanged. Release track is beta.

Local native validation: all twelve manifests passed identity/hash/schema
checks and real installation/reload. Ten PNG assets passed the bounded image
validator. Missing/broken artwork produced the expected fallback. The current
core regression suite passed 512 cases, 22 skipped, zero failures.

The upstream snapshot's live smoke checks previously reached media for eight
services. AniKoto and Synthetiq One had existing route failures; this branch
does not claim to repair those. Five successes had macOS AVPlayer advancement;
three had HLS/segment evidence only. This is not a fresh broad catalogue or
physical-device audio/subtitle certification.

## Phone checklist

1. Add the above exact raw collection address (a GitHub `/tree/` URL is not an
   import URL). Install one Logo Test source, then activate it.
2. Check the home source pill, source menu, Browse control, Profile collection
   indicator and Sources installed rows. Names/actions must stay usable.
3. Install/activate both Flux fallback entries: initials should appear, and
   artwork failure must not prevent normal catalogue/search/playback attempts.
4. Reopen the app and check cached logos. Use Check for Updates to backfill
   artwork if a test module was installed before its sidecar was available.
5. Keep main modules installed. Do not treat a provider failure as an artwork
   installation failure, or a resolved URL as proof of video/audio correctness.

## Later main rollout

After separate approval, merge only verified official image assets and a
properly signed optional `artwork.json` into the production repository. Rebuild
that catalogue against the **actual production IDs, versions and manifest
digests**; do not copy these test IDs or this unsigned catalogue into main.
Keep the legacy root index icon-free and connector manifests unchanged.
Use the existing trusted publication/signing workflow; a signed collection
rejects unsigned or differently signed artwork and still loads its modules.
New apps can then backfill logos, while old apps never depend on those files.
