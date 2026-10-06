"""Frozen, sequential diagnostic using the already-built native engine."""
import hashlib, json, subprocess, time
from pathlib import Path

ROOT = Path(__file__).parent
TOOL = Path('/Volumes/ZX20/.codex-worktrees/aroki-quality-preferences-20260929/VireoCore/.build/debug/vireo-tool')
MANIFEST = Path('/Volumes/ZX20/.codex-worktrees/aroki-anikoto-test-repair-20261006/connectors/synthetiq-anime-direct-logo-test/connector.json')
CORPUS = Path('/Volumes/ZX20/Synthetiq/aroki-connector-certifier/corpora/anime-v1/corpus.controller.json')
corpus = json.loads(CORPUS.read_text())
assert len(corpus['titles']) == 50
results = []
cooldown = False
for i, item in enumerate(corpus['titles']):
    row = {'title': item['title'], 'id': item['id'], 'state':'blocked'}
    if cooldown:
        row['reason'] = 'RATE_LIMIT_STOP_NOT_TESTED'
    else:
        started = time.monotonic()
        try:
            p = subprocess.run([str(TOOL),'certify-title-strict',str(MANIFEST), item['title'], *item.get('aliases',[])], capture_output=True,text=True,timeout=70)
            line = next((x for x in p.stdout.splitlines() if x.startswith('CERTIFY_OK\t')), None)
            if p.returncode == 0 and line:
                proof = json.loads(line.split('\t',1)[1])
                row.update(state='passed', reason='NATIVE_SHORT_ADVANCEMENT',proof=proof)
            else:
                raw = p.stdout+p.stderr
                # Save fixed classifications only, never raw provider errors or URLs.
                if '429' in raw:
                    cooldown = True; row['reason']='RATE_LIMIT'
                elif 'TITLE_MISS' in raw: row['reason']='TITLE_NOT_VERIFIED'
                elif 'timed out' in raw or 'TIMEOUT' in raw: row['reason']='TIMEOUT'
                elif 'parse error' in raw: row['reason']='PARSE_OR_IDENTITY'
                else: row['reason']='NO_PLAYABLE_MEDIA'
        except subprocess.TimeoutExpired: row['reason']='PROCESS_TIMEOUT'
        row['elapsedSeconds']=round(time.monotonic()-started,2)
    results.append(row)
    report={'manifestSHA256':hashlib.sha256(MANIFEST.read_bytes()).hexdigest(),
            'corpusSHA256':hashlib.sha256(CORPUS.read_bytes()).hexdigest(),
            'seed':corpus['seed'],'target':38,'complete':len(results)==50,
            'profile':'one representative middle episode, one fresh attempt, short native playback; no device/audio certification',
            'results':results}
    (ROOT/'current-flux-50.json').write_text(json.dumps(report,indent=2)+'\n')
    print(f'{i+1}/50 {row["state"]}: {item["title"]} ({row["reason"]})',flush=True)
    if not cooldown: time.sleep(1.5)
