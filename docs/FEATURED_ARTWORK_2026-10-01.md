# Featured artwork — logo-testing branch only

Requires Aroki **2.1.8 (93)** for the six new artwork forks. Use the existing
collection address:

https://raw.githubusercontent.com/kas021/Testing-Modules-AR/module-logos/index.json

Check for Updates and apply the matching source update. No production/main
collection is modified, no installed stable family is replaced, and the other
six test modules remain byte-identical.

## What changes

- Synthetiq Flux Logo/No Logo/Broken Logo tests and Synthetiq Anime Logo Test:
  request `coverImage.extraLarge` in details only. Normal catalogue/search
  posters remain `coverImage.large`.
- Anime-Sama Logo Test: select the actual `#coverOeuvre` image from the title
  page for Featured, not the obsolete JavaScript-generated `#imgOeuvre`.
- AniKoto Logo Test: extract the website's own `#player` background using four
  existing literal transforms. Explicitly allow its public AniList/TMDB image
  hosts. Missing backgrounds fall back to the normal poster.

All six keep their existing `posterURL`, catalogue operations, episode
identity, audio selection and stream-resolution graphs unchanged. The optional
new `details.extract.featuredPosterURL` declares `featured-artwork-v1` with
minimum app version 2.1.8. No provider-specific Swift branch or extra artwork
service was introduced.

## Native live poster evidence, 1 October 2026

| Sample | Ordinary image | Featured image |
| --- | --- | --- |
| Flux Re:Zero | 230×316 | 460×632 |
| AniKoto One Piece: Hand Island | 256×400 | 1900×550 |
| AniKoto One Piece: Dead End | 284×400 | 1900×550 |
| Anime-Sama ACCA 13-ku | 440×248 | 3840×2160 |
| Anime-Sama Acchi Kocchi | 440×248 | 3840×2160 |
| Anime-Sama 91 Days | 440×248 | 1600×900 |
| Anime-Sama Alice in Borderland Retry | 440×248 | 1280×720 |

Some Flux shorts return the same image for `large` and `extraLarge`. AniKoto
Wano Kuni SP and the sampled Anime-Sama Ao Ashi page supplied no larger image.
Do not claim every title has HD artwork. The app downsamples to a maximum of
1600 pixels; it does not invent image detail.

AnimeGG search and Home both returned valid, distinct JPEG files through the
native engine (sampled dimensions 225–424 pixels wide). Its connector remains
unchanged. HTTP success and macOS parsing alone do not prove iPhone rendering;
the app-side iOS/image-race validation is recorded in the app report.

## Checks

- `node --test tests/featured-artwork.test.cjs`: three passes. Checks all twelve
  manifest hashes/identities/sidecar references and unchanged provider graphs.
- Native validator and real local install/reload: twelve passes; ten logos,
  missing-logo and broken-logo fallback retained.
- Poster probes used the same ConnectorEngine and allowlist as the app, then
  decoded image dimensions. This is artwork testing, not renewed video/audio,
  offline, subtitle or fifty-title playback certification.

The historical `tests/collection.test.cjs` concerns the old four-source main
collection and is not a test of this twelve-source branch.

## Compatibility and future production rollout

Old native validators reject unknown extraction keys; they do **not** silently
ignore `featuredPosterURL`. These are separate test families, gated to 2.1.8.
An older app should retain its already installed compatible fork; it cannot
install the newer artifact. New Aroki still accepts unmodified old manifests.

Do not blindly merge these new manifests into a legacy-compatible production
release. Retain its existing compatible artifacts and apply normal minimum
app version/feature gates when a future production upgrade is approved.
Optional module logos remain in the separate `artwork.json` envelope; the
root index still has no icon fields. Every sidecar descriptor is rebound to
the actual new test manifest hash/version.
