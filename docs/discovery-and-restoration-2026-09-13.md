# Discovery repair and testing-source restoration

This supersedes the earlier one-source curation decision. The owner wanted
usable candidates available for testing on the new iOS build, not removal of
every partial candidate. No app, Player, stable repository or backend is edited.

## AniWorld empty-Home root cause

The published 0.3.0 connector declared search/details/episodes/streams only.
It had neither the discovery capability nor operations.discovery. VireoCore's
loadDiscovery returns an empty array when no discovery operation exists.
Search-based stream checks therefore passed without exercising Home at all.
The earlier claim of readiness omitted this essential UI flow.

Version **0.3.1** adds one bounded native HTML discovery section. It reads
series-card links with headings and lazy-loaded posters from the public home
page. Links to specific seasons/episodes and non-card navigation are excluded;
the stable root-series slug is retained. Relative image paths are absolutized.
The current live result is 30 series, each with a poster URL. This is a homepage
selection, not a complete-site episode or catalogue guarantee.

No request headers, allowed hosts, search, details, episodes, stream mirrors,
audio selection, minimum version or app engine were changed. The manifest's
version and index hash were updated for the discovery change.

## Four offered sources

| ID | Version | Action |
| --- | --- | --- |
| synthetiq-anime-direct | 0.1.0 | First testing publication of the existing native Flux prototype; display name marks it BETA. |
| synthetiq-anime-testing | 0.1.0 | Restored byte-for-byte from d5f8e0a. |
| aniworld-expansion | 0.3.1 | Discovery-only repair. |
| anime-sama-expansion | 0.3.0 | Restored byte-for-byte from d5f8e0a. |

Flux is a separate native port of Player Synthetiq Flux 1.0.0, not a renamed
Synthetiq Anime manifest. Original Player archive SHA-256:
`395b9609be7e49f6b41046841756b5040ffeb074ce7b985f66b3c706ef83bb08`.
Prototype SHA-256:
`a2dc00c8795d9bb327ceb72ae7e260f93e8476e32e716f090ec4aae8a6747086`.
Only its testing display/release/authorization notes are changed for this
publication; operations and bounds remain those of the tested native prototype.
It requires 2.0.38+, uses no general JS runtime, and does not fit Aroki 1.2's
512-character context limit. That minimum was not lowered.

## Fresh evidence in this repair

| Check | Result |
| --- | --- |
| AniWorld discovery fixture | Exactly one root series; season, episode and navigation links excluded; lazy poster correctly absolutized. |
| AniWorld live discovery | 30 titles, 30 poster URLs. |
| AniWorld 0.3.1 Naruto SUB | Native resolver returned the correct title and 52 episodes; strict middle HLS segment validation passed (MPEG-TS, 1,361-second playlist). This is media validation, not iPhone playback. |
| Flux live discovery | Trending 20 + Popular 19; 39 poster URLs. |
| Synthetiq Anime live discovery | Trending 20 + Popular 19; 39 poster URLs. |
| Anime-Sama live discovery | 30 titles, 30 poster URLs. |
| Flux Dr. Stone ep1 SUB | Fresh macOS AVPlayer advanced >=3 seconds and resumed >=3 seconds after middle seek; duration 1,446 seconds; 314 parsed caption cues and 9 caption tracks. |
| Exact published-artifact Node tests | 4/4 passed: index/hashes/discovery, unchanged AniWorld playback operations, byte-identical restorations, strict Flux audio/context limits. |
| Original Flux prototype invariants | 6/6 passed; these are prototype checks, separate from the exact-artifact tests. |
| Current native core suite | 496 executed, 22 intentional skips, 0 failures. |
| Native unsigned collection verification | Four manifests cross-checked, all compatible with 2.0.39 under the existing explicit unsigned mode. |

The device app was not rebuilt or reinstalled. Live discovery tests use the same
VireoCore API as the app, but are not screenshots or an iPhone UI test. Poster
URL extraction is not proof that every image was rendered. The Flux AVPlayer
probe was muted; parsed captions do not establish visible caption rendering or
spoken language. No new 50-title certificate, ten-minute, offline, PiP or AirPlay
pass is claimed. These remain user-testing candidates, not fully certified releases.

## Known limits are retained, not hidden

- Flux and Synthetiq Anime can receive incorrectly labelled Dub audio from their
  provider. Strict branch matching is not proof of actual dialogue language.
- Some Synthetiq Anime Sub routes have no selectable captions. Burned-in text
  has not been independently verified for those routes.
- Flux downloads stay disabled until tested; catalogue episode counts are not
  provider-verified availability.
- Anime-Sama Naruto works, but Black Torch's middle-episode timeout remains.
- AniWorld SUB uses source-labelled DE/EN routes. Broad audio/caption correctness
  and iPhone/offline behavior remain unverified.
- HiAnimeTV, AnimeUnity and the failing AniKoto testing endpoint are not restored;
  AnimeKai/Mugiwara need further qualification. Historical files remain in Git.

## Reproduction and recovery

Run `node --test tests/collection.test.cjs` from the repository root. Those tests
require Git history containing c20aae9 and d5f8e0a. `tests/DiscoveryProbe.swift`
links against the already-built VireoCore and SwiftSoup objects; run it with a
manifest path, adding `--fixture` for the AniWorld deterministic case. Without
that flag it uses public HTTP and fails on empty discovery. It prints no stream
URLs, transport headers, cookies or tickets.

The repository ID/schema/trust mode stay unchanged; the index timestamp advances.
The normal signed users' repository is untouched. Restored families keep their
identities, while new Flux has its own identity. Recovery uses a new commit and
newer index timestamp, never a force-push or replay of the old feed.

On the phone: Check for Updates, apply AniWorld 0.3.1, add the other three
offered modules, then select the desired source. Saved entries still belong to
their original source. The existing 2.0.39 app can load these module-only changes.
