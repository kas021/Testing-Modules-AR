const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {execFileSync}=require('node:child_process');
const ids=new Set(['synthetiq-anime-direct-logo-test','synthetiq-flux-no-logo-test','synthetiq-flux-broken-logo-test']);
test('only Flux QA entries retired; every manifest and logo reference preserved',()=>{
 for(const file of ['index.json','artwork.json']) {
  const old=JSON.parse(execFileSync('git',['show','94af2b6:'+file]));
  const current=JSON.parse(fs.readFileSync(file));
  assert.equal(current.connectors.length,old.connectors.length);
  for(const before of old.connectors){
   const after=current.connectors.find(e=>e.id===before.id);
   if(ids.has(before.id)) {
    assert.equal(after.status,'retired');
    assert.deepEqual({...after,status:before.status,releaseNotes:before.releaseNotes},before);
   } else assert.deepEqual(after,before);
   assert.deepEqual(fs.readFileSync(after.manifest.path),execFileSync('git',['show','94af2b6:'+before.manifest.path]));
  }
 }
});
