# Rebuild ./assets/ (the unhashed inputs build_v6.py expects) from a built dist_v6/ (reads window.__MANIFEST in index.html).
# Lets you change only the JS/HTML (src_v6/) and rebuild without re-running the heavy data prep.
import json, os, re
os.chdir(os.path.dirname(os.path.abspath(__file__)))
NAMES = {'d-h8k': 'height_8192_resid.webp', 'd-h4k': 'height_4096_pred.i16.gz', 'd-h2k': 'height_2048_pred.i16.gz', 'd-hesc': 'height_8192_esc.bin.gz',
         'd-sat': 'bluemarble_jul_4096.jpg', 'd-font-sans-r': 'font_sans_r_v6.woff2', 'd-font-sans-b': 'font_sans_b_v6.woff2',
         'd-font-serif-b': 'font_serif_b_v6.woff2', 'd-loc': 'loc_v6.json.gz', 'd-vectors': 'vectors_v6.json'}
html = open('dist_v6/index.html', encoding='utf-8').read()
man = json.loads(re.search(r'window\.__MANIFEST=(\{.*?\})</script>', html).group(1))
os.makedirs('assets', exist_ok=True)
for id_, m in man.items():
    b = b''.join(open('dist_v6/' + u, 'rb').read() for u, n in m['parts'])
    assert len(b) == m['size'], id_
    open('assets/' + NAMES[id_], 'wb').write(b); print(f'{NAMES[id_]:28s} {len(b)/1048576:6.2f} MiB')
