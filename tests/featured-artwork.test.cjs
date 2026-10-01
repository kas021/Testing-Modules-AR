const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const {execFileSync} = require('node:child_process');
const root = path.resolve(__dirname, '..');
const index = JSON.parse(fs.readFileSync(path.join(root, 'index.json')));
const artwork = JSON.parse(fs.readFileSync(path.join(root, 'artwork.json')));

test('all twelve hashes, identities and optional artwork references agree', () => {
  assert.equal(index.connectors.length, 12);
  for (const entry of index.connectors) {
    assert.equal(entry.icon, undefined, 'legacy root index remains icon-free');
    const bytes = fs.readFileSync(path.join(root, entry.manifest.path));
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), entry.manifest.sha256);
    const manifest = JSON.parse(bytes);
    for (const key of ['id','familyID','version','minimumAppVersion']) assert.equal(manifest[key], entry[key]);
    const sidecar = artwork.connectors.find(x => x.id === entry.id);
    assert.equal(sidecar.manifest.sha256, entry.manifest.sha256);
    assert.equal(sidecar.version, entry.version);
  }
});

test('six opt-in upgrades preserve catalogue posters, episodes and playback graphs', () => {
  let changed = 0;
  for (const entry of index.connectors) {
    const m = JSON.parse(fs.readFileSync(path.join(root, entry.manifest.path)));
    const old = JSON.parse(execFileSync('git', ['show',`8fb488a:${entry.manifest.path}`], {cwd:root}));
    for (const op of ['discovery','search','episodes','streams']) assert.deepEqual(m.operations[op], old.operations[op]);
    assert.deepEqual(m.operations.details.extract.posterURL, old.operations.details.extract.posterURL);
    if (m.operations.details.extract.featuredPosterURL) {
      changed++;
      assert.equal(m.minimumAppVersion, '2.1.8');
      assert.ok(m.requiredEngineFeatures.includes('featured-artwork-v1'));
      assert.notEqual(m.version, old.version);
    } else assert.deepEqual(m, old);
  }
  assert.equal(changed, 6);
});

test('large Flux requests are details-only and Sama/Koto declare bounded selectors', () => {
  const load = id => JSON.parse(fs.readFileSync(path.join(root, 'connectors', id, 'connector.json')));
  const flux = load('synthetiq-anime-direct-logo-test');
  assert.ok(flux.operations.details.request.body.includes('large extraLarge'));
  assert.equal(flux.operations.details.extract.featuredPosterURL.path, 'data.Media.coverImage.extraLarge');
  assert.equal(load('anime-sama-expansion-logo-test').operations.details.extract.featuredPosterURL.selector, '#coverOeuvre');
  const koto = load('anikoto-logo-test');
  assert.equal(koto.operations.details.extract.featuredPosterURL.selector, '#player');
  assert.equal(koto.operations.details.extract.featuredPosterURL.transforms.length, 4);
});
