# Builds dist_v6/ : small index.html + hashed asset files (chunked to < 5 MiB each; fine for Vercel / any static host)
# Optional: SITE_URL=https://your.domain python3 build_v6.py  -> fills og:url / og:image / twitter:image
import hashlib, json, os, shutil, subprocess
os.chdir(os.path.dirname(os.path.abspath(__file__)))
OUT = 'dist_v6'; shutil.rmtree(OUT, ignore_errors=True); os.makedirs(OUT + '/assets')
subprocess.run(['npx', 'esbuild', 'src_v6/main.js', '--bundle', '--minify', '--format=iife', '--target=es2020', '--outfile=build/app_v6.js', '--legal-comments=none'], check=True)
CHUNK = 3_500_000
def put(data, stem, ext):
    h = hashlib.sha256(data).hexdigest()[:10]; name = f'assets/{stem}.{h}.{ext}'
    open(f'{OUT}/{name}', 'wb').write(data); return name
man = {}
for id_, path, ext in [('d-h8k', 'assets/height_8192_resid.webp', 'bin'), ('d-h4k', 'assets/height_4096_pred.i16.gz', 'bin'), ('d-h2k', 'assets/height_2048_pred.i16.gz', 'bin'), ('d-hesc', 'assets/height_8192_esc.bin.gz', 'bin'), ('d-sat', 'assets/bluemarble_jul_4096.jpg', 'jpg'),
                       ('d-font-sans-r', 'assets/font_sans_r_v6.woff2', 'woff2'), ('d-font-sans-b', 'assets/font_sans_b_v6.woff2', 'woff2'), ('d-font-serif-b', 'assets/font_serif_b_v6.woff2', 'woff2'),
                       ('d-loc', 'assets/loc_v6.json.gz', 'bin'), ('d-vectors', 'assets/vectors_v6.json', 'json')]:
    b = open(path, 'rb').read(); stem = os.path.basename(path).split('.')[0]
    parts = [b[i:i + CHUNK] for i in range(0, len(b), CHUNK)]
    man[id_] = {'size': len(b), 'parts': [[put(p, f'{stem}.p{k}' if len(parts) > 1 else stem, ext), len(p)] for k, p in enumerate(parts)]}
app = open('build/app_v6.js', 'rb').read(); app_name = put(app, 'app', 'js')
html = open('src_v6/template.html', encoding='utf-8').read()
if os.environ.get('SITE_URL'): html = html.replace('https://YOUR-PROJECT.vercel.app', os.environ['SITE_URL'].rstrip('/'))
html = html.replace('<!--MANIFEST-->', '<script>window.__MANIFEST=' + json.dumps(man, separators=(',', ':')) + '</script>')
html = html.replace('<script>/*APP*/</script>', f'<script src="{app_name}" defer></script>')
# preload the biggest files early
pre = ''.join(f'<link rel="preload" href="{u}" as="fetch" crossorigin>' for m in man.values() for u, n in m['parts'] if n > 1_000_000)
pass  # no <link rel=preload>: keep bandwidth for the app script so the progress bar starts right away
open(f'{OUT}/index.html', 'w', encoding='utf-8').write(html)
shutil.copy('static/og.jpg', f'{OUT}/og.jpg')  # 1200x630 share image
# cache headers live in vercel.json (no Cloudflare _headers file)
tot = 0
for r, d, fs in os.walk(OUT):
    for f in fs:
        p = os.path.join(r, f); n = os.path.getsize(p); tot += n; print(f'{n/1048576:7.2f} MiB  {p}'); assert n < 5 * 1048576
print('total MiB', tot / 1048576)
