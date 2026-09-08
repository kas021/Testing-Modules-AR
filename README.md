# Testing Modules AR

Public experimental Aroki connectors. Not the official stable collection.
Source code is licensed under MIT; that licence does not cover third-party
websites, media, artwork or their data. Use only content you are entitled to access.

## Import the testing collection

In an Aroki build supporting unsigned collections, open Profile → Sources,
enable **Allow unsigned collection**, enter `kas021/Testing-Modules-AR`,
and explicitly approve the unsigned collection. This is separate from your
existing official repository and does not change its modules.

## AniKoto (BETA - Testing only) — 0.3.8

Use **Check for Updates** on this collection, add the newly offered source,
and select **AniKoto (BETA - Testing only)**. Its separate `anikoto-testing`
identity leaves the normal AniKoto source and saved progress untouched. Saved
items from normal AniKoto still belong to that source: search for your test title
after selecting the testing source rather than opening an existing saved item.

This candidate updates the source endpoint without adding JavaScript or app code.
It has 45 HTTP media passes from the frozen 50-title corpus; 5 title matches were
unverified. Fragrant Flower episode 1 SUB and DUB passed short macOS AVPlayer
playback and middle seeking, with native English caption parsing. This is not
physical iPhone, subtitle rendering, spoken-language or offline certification.

Test Fragrant Flower episode 1 in SUB and DUB, visible English subtitles, middle
seeking, 5–10 minutes of playback, then downloading and airplane-mode playback.
If anything fails, switch back to normal AniKoto. No stable collection is changed.

This testing repository remains unsigned and needs a build that supports unsigned
collections. The manifest itself uses the existing connector schema; the testing
collection is not a delivery route for old signed-only app builds.

## HiAnimeTV historical notes

- Candidate version: 1.0.0. Not certified or production-ready.
- Needs the experimental native `scriptAssignment` extractor.
- **Aroki 2.0.2 cannot install/use this connector.**
- Minimum 2.0.3 is reserved to keep unsupported current builds from offering
  installation. It does not mean a compatible 2.0.3 app exists or has shipped.
- An app with both that version and the implemented extractor is still needed.
- This publication did not run live playback, subtitle, download or device tests.
- No JavaScript runtime is included. The extractor implementation is app code,
  not something importing this repository installs.

## Development

Keep candidates isolated from the official repository. For every manifest edit,
update the version, its SHA-256 in index.json and the index generatedAt timestamp.
Index identity/version fields must match the manifest. Never add secrets, signed
media URLs, downloaded media, private app code or production credentials.
Do not claim a minimum app version supports an operation without testing it.
Public access to a source is not evidence of permission to redistribute its content.
