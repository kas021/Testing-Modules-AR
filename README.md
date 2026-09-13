# Testing Modules AR

Four experimental Aroki sources for owner testing on the newer iOS engine.
This is not the official stable collection and is not full playback certification.

## Add or refresh

In **Profile → Sources**, paste:

```text
https://raw.githubusercontent.com/kas021/Testing-Modules-AR/main/index.json
```

Use **Check for Updates**, apply the AniWorld **0.3.1** update, and add the other
offered sources. Select the source you want to test. Your installed Aroki
**2.0.39 (52)** supports these manifests; no app reinstall is needed.

If AniWorld still shows 0.3.0, its module update has not applied yet. That old
module had no homepage operation. Select the updated source again after updating.

## Sources in this collection

| Source | Version | Current evidence and limits |
| --- | --- | --- |
| **Synthetiq Flux (BETA - Testing only)** | 0.1.0 | Newly indexed native port for 2.0.38+. Fresh Home: 39 titles/posters. Dr. Stone episode 1 SUB played and resumed after middle seek on macOS. Dub labels can be wrong; visible captions/iPhone/offline remain unverified. Downloads deliberately disabled. |
| **Synthetiq Anime (BETA - Testing only)** | 0.1.0 | Restored unchanged. Fresh Home: 39 titles/posters. Earlier short iPhone playback/seek tests passed. Known missing captions on some titles and a provider Dub/audio mismatch remain. |
| **Aniworld (BETA - SUB testing)** | 0.3.1 | Adds the missing Home/Browse feed. Fresh Home: 30 series/posters; search/episode/stream operations unchanged. Source-labelled DE/EN SUB choices need actual language checks. |
| **Anime-Sama (BETA - Testing only)** | 0.3.0 | Restored unchanged. Fresh Home: 30 titles/posters. Naruto works; Black Torch middle-episode timeout remains. Not fully certified. |

Numbers are snapshots from 13 September 2026, not catalogue size guarantees.
Catalogue rows do not prove that a playable provider copy exists.

Flux and Synthetiq Anime are **different connector identities**. Flux is a port
of the released Player Flux module, not a renamed Synthetiq Anime package.
Neither is a module-only solution for Aroki 1.2; minimum versions are retained.

## Testing steps

1. Confirm the selected source has a populated Home and usable posters.
2. Search for a known title; verify the title, season and episode.
3. Play, seek, and watch for ten minutes; verify real dialogue and captions.
4. Check quality/language choices only where actually supplied.
5. Test downloads/offline, PiP and AirPlay separately where supported.

Saved titles retain their original source. Search after switching sources rather
than using a saved entry from a different source.

## What changed

The earlier one-source cleanup was too aggressive for the requested exploratory
testing. It removed usable partial candidates and did not test AniWorld's Home.
This update corrects that: it restores the two tested candidates, adds the Flux
native beta, and repairs AniWorld discovery without editing app code.

[Repair and evidence record](docs/discovery-and-restoration-2026-09-13.md).
Earlier documents are historical, not current install lists.

Known non-working candidates (HiAnimeTV, AnimeUnity and the failing AniKoto
testing endpoint) are not reintroduced. AnimeKai/Mugiwara remain held for further
work. No claim is made that every source previously explored is working.

The collection ID and unsigned trust mode are unchanged. The stable
AROKI-Connectors repository is untouched. Removed installed sources are not
remotely erased; use their Remove source menu if desired.

## Development

Run `node --test tests/collection.test.cjs` for exact-artifact checks.
Native validation and tests are described in the evidence record. Changes to
manifests require version/hash updates; index edits require a newer timestamp.
Keep secrets, transient media URLs and private app code out of this repository.

Source code is MIT licensed; that licence does not cover third-party websites,
media, artwork or data. Use only content you are entitled to access.
