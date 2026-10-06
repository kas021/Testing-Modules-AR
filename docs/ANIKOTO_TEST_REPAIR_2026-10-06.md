# AniKoto Logo Test 0.3.12 — partial repair

Testing collection only. Production modules and app code are unchanged.

Identity remains `anikoto-logo-test`; minimum Aroki version is **2.1.19**,
requiring `typed-graph-context-v1`. Earlier apps cannot consume this repair;
the immutable previous manifest is retained. This is not a legacy rollout.

SHA-256: `944f610e6ee342011ed35315c999237fce4d5ac72fd5300f818af55de5d15229`.
Baseline 0.3.11: `497d264050eba825db0a42469c068cb2fae0350af2ca4eb37951f22d225846dd`.

## Change

Malformed/missing premiere season is optional rather than failing before a
stream request. Valid seasons remain constraints. Provider selection must be
unique and match title, year, format and any valid season; it no longer accepts
the first fuzzy result. Episode/audio mapping, captions, headers, artwork and
host restrictions are unchanged. No new executable code or resolver proxy.

## Fresh checks

- `node --test tests/anikoto-repair.test.cjs`: 3 passed, 0 failed. Checks every
  collection digest/identity and sidecar reference, unchanged browsing/episodes,
  and the optional-season/strict-match contract.
- Native `vireo-tool validate-manifest <new manifest>`: passed.
- Native `vireo-tool probe-title <new manifest> 'Case Closed' dub first`:
  exact title, first episode, Dub request resolves and returns an HLS signature.
  This is not segment/decode or spoken-language proof.
- Native `vireo-tool certify-title-strict <new manifest> 'Horimiya'`:
  exact title, representative middle episode, Sub, 1420.086-second item,
  native macOS AVPlayer advancement to 0.833 seconds. Not sustained/device proof.

No iPhone/iPad playback, downloads, full-dialogue subtitle sync or all-title
certification claimed. Full Swift suite and a new 50-title sweep were not run
in this diagnostic publication pass because startup disk was below 1 GiB.
The preflight script also incorrectly rejects Git worktree .git files; actual
checkout and the previously built native executable were checked separately.

## Known unresolved cases

- Keroro (2014): website TV versus provider TV_SHORT causes a strict-match
  failure in both audio variants. Do not select the different 2004 Sgt. Frog.
- Yamada-kun special: website subtitle differs from provider OVA catalogue name;
  verified matching remains unresolved.
- Prior isolated 50-title run of this same stream repair on October 5 was
  **27 green / 0 red / 0 white / 23 grey — PARTIAL**, versus baseline
  **24 / 0 / 0 / 26**. These are historical, not fresh results of this package.
  Five cases improved; Reze Arc and Kaguya-sama Ultra Romantic became blocked
  by stricter identity checks. No wrong-title match was established, and no
  claim is made that those unresolved cases are fixed.
- Corpus seed 20260817, SHA-256
  `d9c309abfcd4712aaf878de86027711a421caa9aaeacf0559dc47c3a278c6ed5`.

Verdict: **PARTIAL TEST REPAIR**, not a production-ready certification.
The optional-season fix is available for owner testing; remaining identity
repairs must not relax matching or guess a different series.

Rollback: retain this immutable artifact; publish a higher-version correction
using the previous graph if necessary. Do not overwrite cached manifest bytes.
