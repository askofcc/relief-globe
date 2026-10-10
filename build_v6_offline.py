# Single self-contained offline file: relief_globe_v6.html (assets inlined as data: URLs, fetched by the same loader)
import base64, json, os, subprocess
os.chdir(os.path.dirname(os.path.abspath(__file__)))
subprocess.run(['npx', 'esbuild', 'src_v6/main.js', '--bundle', '--minify', '--format=iife', '--target=es2020', '--outfile=build/app_v6_off.js', '--legal-comments=none'], check=True)
man = {}
for id_, path in [('d-h8k', 'assets/height_8192_resid.webp'), ('d-h2k', 'assets/height_2048_pred.i16.gz'), ('d-hesc', 'assets/height_8192_esc.bin.gz'),
                  ('d-sat', 'assets/bluemarble_jul_4096.jpg'), ('d-font-sans-r', 'assets/font_sans_r_v6.woff2'), ('d-font-sans-b', 'assets/font_sans_b_v6.woff2'),
                  ('d-font-serif-b', 'assets/font_serif_b_v6.woff2'), ('d-loc', 'assets/loc_v6.json.gz'), ('d-vectors', 'assets/vectors_v6.json')]:
    b = open(path, 'rb').read()
    man[id_] = {'size': len(b), 'parts': [['data:application/octet-stream;base64,' + base64.b64encode(b).decode(), len(b)]]}
app = open('build/app_v6_off.js', encoding='utf-8').read().replace('</script', '<\\/script')
html = open('src_v6/template.html', encoding='utf-8').read()
html = html.replace('<!--MANIFEST-->', '<script>window.__MANIFEST=' + json.dumps(man, separators=(',', ':')) + '</script>')
html = html.replace('<script>/*APP*/</script>', '<script>' + app + '</script>')
html = html.replace('首次打开约需下载 6 MB，地球出现后高精度地形会在后台继续加载。', '离线单文件版：全部数据已内嵌（局部高精度地形与剖面需联网，离线时自动使用内置 ETOPO1）。')
open('relief_globe_v6.html', 'w', encoding='utf-8').write(html)
print('MB', os.path.getsize('relief_globe_v6.html') / 1e6)
