# Synthetiq Anime 0.1.0 — testing release

Requires Aroki 2.0.38 (51) with contextual-hls-v1, numbered-catalogue-v1 and
catalogue-fallback-v1. This repository does not install those app engine features.

Connector ID/family: synthetiq-anime-testing. SHA-256:
`f83d4fb3a28b69f275e388b62c4816c74c93bfce5eee5ea2f3163b175b1a8fed`.

## Install

In Profile → Sources, refresh Testing Modules AR, add **Synthetiq Anime
(BETA - Testing only)**, then select it. If the collection is not yet added,
use `https://github.com/kas021/Testing-Modules-AR`. Search a title after selecting
the source; existing saved items from other source families are not migrated.
An older app may reject or hide this new candidate: update the app first.

## Evidence, September 11

- Frozen 30-title sample: 166/168 routes returned structurally validated HLS/media;
  156 routes also returned nonempty parsed captions. HTTP results do not establish
  correct programme, spoken language or sustained native playback.
- No validated media: One Piece episode1177 Dub; Gintama episode201 Dub.
- No selectable captions: Your Name episode1, A Silent Voice episode1, and
  Fighting Spirit episodes1/38/75, on both sampled Sub and Dub routes.
  Burned-in subtitles have not been checked.
- iPhone 15 Pro Max: Naruto episode1 Sub/Dub, Death Note episode1 Sub and
  Spy × Family episode1 Dub-labelled route advanced and resumed after middle seek.
  Tests were muted. Both Sub samples returned parseable English caption cues,
  but the tests did not render captions. Three targeted tests passed, zero failures.
- Core regression: 499 tests, 24 intentional skips, zero failures; includes three
  preserved local prototype tests. Excluding those: 496 tests, 22 skips, zero failures.

## Still unverified

Spy × Family previously returned Japanese speech on a Dub-labelled route.
Correct English speech is **not established** by these tests. No exception hides
this issue. Naruto Dub also needs longer real-device testing for intermittent
seek failures. Check dialogue rather than relying on server labels.

Visual subtitle rendering, every caption language, actual server/quality switching,
ten-minute reliability, downloads, offline reopening, PiP and AirPlay remain
unverified. Catalogue-derived episode counts do not guarantee playable copies.
Flow and Zuri may share the same upstream media. AniCrowd/MegaPlay fallback is
not implemented in this candidate.

## What to check

1. Trending, Popular, search, page two, details and episode listing.
2. Naruto/Death Note Sub with visible captions; seek, pause and resume.
3. Spy × Family and Naruto episode1 Dub: listen near the beginning and middle.
4. Switch servers, actual quality choices and caption languages; check position
   and audio remain correct. Verify source intro/outro buttons when present.
5. Download, disconnect the network, reopen, seek and reopen again.

This is an external declarative source, not downloaded JavaScript. Existing
public stable modules are unchanged. Use only content you are entitled to access.
