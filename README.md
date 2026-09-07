# Testing Modules AR

Public experimental Aroki connectors. Not the official stable collection.
Source code is licensed under MIT; that licence does not cover third-party
websites, media, artwork or their data. Use only content you are entitled to access.

## Import the testing collection

In an Aroki build supporting unsigned collections, open Profile → Sources,
enable **Allow unsigned collection**, enter `kas021/Testing-Modules-AR`,
and explicitly approve the unsigned collection. This is separate from your
existing official repository and does not change its modules.

## HiAnimeTV (BETA - Testing only)

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
