# Native expansion testing release

Requires **Aroki 2.0.36 or newer with the expansion engine**. Importing this
collection does not update the app or install new engine code. Older builds
should show the minimum-version requirement, not offer these pilots.

These are separate `*-expansion` families. Existing AniKoto, HiAnime and stable
collection files are unchanged. No existing saved source is replaced.

| Source | Version | Evidence and limitations |
|---|---|---|
| Anime-Sama | 0.3.0 | Strict frozen50: 23 passed, 1 failed, 26 unconfirmed; 95.83% of confirmed-present titles. Naruto/Black Torch advance and seek on native macOS. |
| Aniworld | 0.3.0 | Strict frozen50: 30 passed, 2 failed, 18 unconfirmed; 93.75% of confirmed-present titles. Naruto/One Piece advance and seek on native macOS. SUB pilot, source-labelled DE/EN captions. |
| AnimeKai | 0.2.0 | Historical resolution: 29 passed, 6 failed, 15 unconfirmed. Below target; failures remain. |
| Mugiwara | 0.1.0 | Historical resolution: 15 passed, 5 failed, 30 unconfirmed. Naruto/Black Clover advance and seek on macOS. SUB television only; catalogue/episode failures remain. |
| AnimeUnity | 0.1.0 | **Playback blocked.** Catalogue and 220 Naruto episode records resolve, but video playlists return HTTP 403. Diagnostic candidate only. |

Historical runs used fuzzy-title/flattened-group selection and are not final
strict certification. Strict runs use exact titles/aliases and the primary
episode group, but do not automatically prove canonical season identity.
The corpus is unchanged: 40 known + 10 withheld, seed 20260817.
Corpus SHA-256: d9c309abfcd4712aaf878de86027711a421caa9aaeacf0559dc47c3a278c6ed5.

No connector is release-certified. iPhone playback, ten-minute sessions, visible
subtitles, spoken language, downloads, offline reopening, PiP, AirPlay and
same-phone performance comparison remain unverified. Mac/HTTP success does not
prove those capabilities. Xcode developer-image incompatibility blocked the
iPhone run. Core regression suite: 476 tests, 20 intentional skips, no failures.

Publication changes only display names, authorization notes and a conservative
minimum app version from the local candidates; resolver operations are identical.
Published file SHA-256 values are recorded in index.json. No keys, media,
temporary playback URLs, cookies or app source code are included.

## Testing

1. On Aroki 2.0.36+, refresh `kas021/Testing-Modules-AR` under Profile → Sources.
2. Add the new BETA source explicitly, then select it as the active source.
3. Search again inside that source rather than opening a saved title belonging
   to another source. Start with Anime-Sama or Aniworld.
4. Test episode selection, playback advancement, seeking and available captions.
   Report app version, source/version, show, season, episode and SUB/DUB choice.
   Do not share stream URLs or request credentials.

To stop testing, switch back to the stable source. Do not roll back the entire
collection index to an older timestamp; publish a new ordered correction instead.
