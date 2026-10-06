const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const crypto = require('node:crypto');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const index = JSON.parse(fs.readFileSync(path.join(root, 'index.json')));
const artwork = JSON.parse(fs.readFileSync(path.join(root, 'artwork.json')));
const entry = index.connectors.find(x => x.id === 'anikoto-logo-test');
const m = JSON.parse(fs.readFileSync(path.join(root, entry.manifest.path)));
test('all collection and artwork identities and digests agree', () => {
  for (const e of index.connectors) {
    const bytes = fs.readFileSync(path.join(root,e.manifest.path));
    const manifest = JSON.parse(bytes);
    assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),e.manifest.sha256);
    for(const key of ['id','familyID','version','minimumAppVersion']) assert.equal(e[key],manifest[key]);
    const decorated = artwork.connectors.find(x=>x.id===e.id);
    assert.deepEqual(decorated.manifest,e.manifest);
    assert.equal(decorated.version,e.version);
    assert.equal(decorated.minimumAppVersion,e.minimumAppVersion);
  }
});
test('upgrade retains family, artwork, browsing, episodes and media mapping', () => {
  const old = JSON.parse(fs.readFileSync(path.join(root,'connectors/anikoto-logo-test/connector.json')));
  assert.equal(m.familyID,old.familyID);
  for(const op of ['discovery','search','details','episodes']) assert.deepEqual(m.operations[op],old.operations[op]);
  assert.equal(m.minimumAppVersion,'2.1.19');
  assert.ok(m.requiredEngineFeatures.includes('typed-graph-context-v1'));
});
test('season optionality retains unique title/year/format/season checks', () => {
  const text = JSON.stringify(m.operations.streams);
  assert.ok(text.includes('"optionalQuery":{"season":"season"}'));
  assert.ok(text.includes('"allowedValues":["WINTER","SPRING","SUMMER","FALL"]'));
  assert.ok(!text.includes('data[0].slug'));
  for(const context of ['title','year','format','season']) assert.ok(text.includes('"context":"'+context+'"'));
});
