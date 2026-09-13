const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const root = path.resolve(__dirname, '..');
const index = JSON.parse(fs.readFileSync(path.join(root, 'index.json')));
const manifest = id => JSON.parse(fs.readFileSync(path.join(root, 'connectors', id, 'connector.json')));

test('four distinct candidates, with actual Home operations and matching index hashes', () => {
  assert.deepEqual(index.connectors.map(x => x.id), ['synthetiq-anime-direct','synthetiq-anime-testing','aniworld-expansion','anime-sama-expansion']);
  for (const entry of index.connectors) {
    const bytes = fs.readFileSync(path.join(root, entry.manifest.path));
    const m = JSON.parse(bytes);
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'), entry.manifest.sha256);
    for (const key of ['id','familyID','name','version','minimumAppVersion']) assert.equal(m[key], entry[key]);
    assert.ok(m.capabilities.includes('discovery'));
    assert.ok(m.operations.discovery.sections.length > 0);
  }
});
test('Aniworld repair changes discovery, not search, episode identity or stream resolution', () => {
  const old = JSON.parse(execFileSync('git', ['show','c20aae9:connectors/aniworld-expansion/connector.json'], {cwd:root, encoding:'utf8'}));
  const m = manifest('aniworld-expansion');
  assert.equal(m.version, '0.3.1');
  assert.equal(m.familyID, old.familyID);
  for (const op of ['search','details','episodes','streams']) assert.deepEqual(m.operations[op], old.operations[op]);
  assert.deepEqual(m.allowedHosts, old.allowedHosts);
  assert.equal(m.minimumAppVersion, old.minimumAppVersion);
});
test('restored candidates are byte-identical to their earlier tested artifacts', () => {
  for (const id of ['synthetiq-anime-testing','anime-sama-expansion']) {
    const relative = `connectors/${id}/connector.json`;
    const old = execFileSync('git',['show',`d5f8e0a:${relative}`],{cwd:root});
    assert.deepEqual(fs.readFileSync(path.join(root,relative)),old);
  }
});
test('Flux keeps strict per-audio selection and bounded context without pretending 1.2 compatibility', () => {
  const m = manifest('synthetiq-anime-direct');
  assert.equal(m.minimumAppVersion,'2.0.38');
  assert.equal(m.releaseTrack,'beta');
  assert.equal(m.downloadSupport,'none');
  assert.equal(m.operations.streams.mirrors.length,2);
  for (const mirror of m.operations.streams.mirrors) {
    assert.equal(mirror.contextualMedia.maxContextScalarBytes,16384);
    assert.deepEqual(mirror.contextualMedia.identity,{titleID:'malId',episodeID:'episode'});
    assert.deepEqual(mirror.steps.at(-1).extract.collection.where,[{path:'id',equalsPlaceholder:'variant'}]);
    assert.deepEqual(mirror.steps.at(-1).extract.subtitles.variantCollections,{sub:'captions.sub[*]',dub:'captions.dub[*]'});
  }
});
