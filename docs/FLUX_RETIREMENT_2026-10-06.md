# Flux testing retirement and future recovery

Scope: module-logos testing collection only. Main Aroki and Player remain
unchanged pending the owner's scope clarification. Target: 38/50 frozen
titles passing, no confirmed identity/audio mismatch.

Current Flux Logo Test 0.1.3 SHA-256:
`80acac5f6dce676d83dffc3da8b43e86f4786200d9d74fd970015fb004962060`.
Corpus seed 20260817, SHA-256:
`d9c309abfcd4712aaf878de86027711a421caa9aaeacf0559dc47c3a278c6ed5`.

## BLOCKED: target not established

Fresh results: **7 green / 0 red / 0 white / 43 grey**. Seven titles reached
short native macOS AVPlayer advancement. The eighth encountered HTTP 429;
42 remaining titles were not requested. This is NOT a measured 14% success
rate or evidence that 43 titles fail. No origin is inferred from the CLI's
generic rate-limit message. One fresh attempt per tested title; no rate-limit
evasion or additional retries after 429.

Existing built core suite: 555 tests, 22 skipped, zero failures. No new build,
physical device, exhaustive episodes/Sub/Dub, dialogue timing or spoken-language
certification. Frozen native tool: certify-title-strict. Full raw redacted
results and the diagnostic runner are retained beside this report.

## Repair attempts

Current Aroki Flux uses AniKage koto. The isolated native Vidhawk translation
successfully reaches resolve/play but receives media HTTP 502 with both root
and embed Referer; other samples time out. It validates requested IDs, uses
validated URL continuation for long tickets, and maps requested audio/captions.
It cannot recreate Player's parallel retry/rescue behavior with the current
sequential mirror format. No unverified replacement published or limits weakened.

## Retirement

Retire Flux Logo Test plus its No Logo/Broken Logo QA variants in the index and
artwork sidecar. Retain every manifest and image byte-for-byte. The native
ConnectorStore rejects retired entries before installation. Existing installed
copies are not removed or forcibly disabled; this is not a remote erase.

## Later engine/JavaScript work

- Shared bounded parallel networking, cancellation and one cold-start retry.
- Distinct warming, absent, offline and rate-limit states; respect Retry-After.
- Bounded validated ticket URLs; no blanket scalar/security-limit expansion.
- Actual media validation and native startup, not URL-only success.
- Exact series/season/episode/audio and per-edition caption timing/labels;
  preserve quality and headers, and label fallback routes honestly.
- Keep native modules intact; isolated JS adapter without accounts/files/
  purchases/device identifier access, never arbitrary browser execution.
- Re-test frozen coverage, cold/warm cases, multiple episodes/languages and
  physical playback before publishing a higher version and reactivating it.

No modules were deleted. Player Flux and its repository are untouched.
