# Testing Modules AR

A small, curated collection for testing Aroki's newer iOS engine.
This is separate from the main AROKI-Connectors repository.

## Install on your iPhone

Use Aroki **2.0.39 (52)** or newer for this testing round.
The retained connector's actual minimum remains 2.0.36.

1. Open **Profile → Sources**.
2. Paste this collection address:

   `https://raw.githubusercontent.com/kas021/Testing-Modules-AR/main/index.json`

3. Import/refresh the collection, add **Aniworld (BETA - SUB testing)** and select it.
4. Search for Naruto or One Piece after selecting the source. Existing saved
   titles retain their original source, so opening one is not a source-switch test.

The collection remains unsigned, with its existing identity and trust policy.
No app update, signing key or replacement repository is introduced here.

## Currently offered

| Source | Version | Evidence |
| --- | --- | --- |
| Aniworld (BETA - SUB testing) | 0.3.0 | Fresh exact-title middle-episode HLS segment checks passed for Naruto and One Piece. Earlier macOS AVPlayer advancement and seeking passed. |

**This is a working test candidate, not a promise that every episode works.**
The earlier strict 50-title run had 30 passes, 2 failures and 18 unconfirmed
titles (not 50 successes). Source-labelled German-captioned SUB is tried before
English-captioned SUB; actual dialogue/caption language remains to be checked.
No full iPhone, offline, PiP or AirPlay certification is claimed.

## What to test

- Search, details, season selection and episode numbering.
- Playback starts, advances, seeks and runs for at least ten minutes.
- Actual spoken audio and visible subtitle language/content.
- Quality changes where supplied, and position/audio retention.
- Download completion, airplane-mode playback and reopening after relaunch.
- PiP and AirPlay separately, with a real receiver for AirPlay.

## Removed candidates

On 13 September 2026 the active index and connector folders were reduced from
eight candidates to one. AniKoto testing, HiAnimeTV, Anime-Sama, AnimeKai,
Mugiwara, AnimeUnity and Synthetiq Anime testing are held back because of
failed checks, unresolved language/caption issues or insufficient reliability.

See [the curation record](docs/curation-2026-09-13.md).
Their source files remain recoverable in Git history. Old documents under
`docs/` are historical evidence, not a list of currently installable sources.

Already installed sources are not remotely erased. After refreshing, an old
source may show **No longer listed**. Long-press it and choose **Remove source**
if you want to remove the installed copy. No library or downloads are deleted
by this repository change.

## Development

Keep failed/diagnostic candidates off this active feed until their problems
are resolved and fresh evidence is recorded. Preserve the repository ID, trust
mode and retained manifest hashes; advance the index timestamp for index edits.
Manifest changes require their own version bump and matching index SHA-256.
Do not publish secrets, temporary stream routes or private app code.

Source code is MIT licensed; that licence does not cover third-party websites,
media, artwork or data. Use only content you are entitled to access.
