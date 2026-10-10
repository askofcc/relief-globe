# Builds assets/loc_v4.json.gz : offline gazetteer (China admin + world cities) + nearby-feature set for the "my location" card
import json, math, os, ast, zipfile, io, gzip, collections, re
import numpy as np
from opencc import OpenCC
from pypinyin import lazy_pinyin
from shapely.geometry import shape, Polygon, box, mapping
cc = OpenCC('t2s')
os.chdir(os.path.dirname(os.path.abspath(__file__)))
D = 'data/'
def load(f): return json.load(open(D + f + '.geojson'))['features']
def zh(s): return cc.convert(s or '').strip()
# reuse the curated name fixes from prep_v3.py
src = ast.parse(open('prep_v3.py', encoding='utf-8').read())
FIX = {}
for n in src.body:
    if isinstance(n, ast.Assign) and isinstance(n.targets[0], ast.Name) and n.targets[0].id in ('LF_FIX', 'KEEP', 'MAR_FIX', 'PK_FIX', 'LK_FIX', 'RV', 'NAME_FIX'):
        FIX[n.targets[0].id] = ast.literal_eval(n.value)
R2 = lambda x: round(float(x), 3)

# ------------------------------------------------------------------ gazetteer
ctxs = []; ctx_i = {}
def C(s):
    if s not in ctx_i: ctx_i[s] = len(ctxs); ctxs.append(s)
    return ctx_i[s]
def py(s):
    s = re.sub(r'(特别行政区|自治州|自治县|自治旗|地区|新区|林区|矿区|特区|盟|市|区|县|旗|州)$', '', s) or s
    return ''.join(lazy_pinyin(s)).lower()
rows = []
dv = json.load(open(D + 'datav_infos.json'))
node = {}
for k, v in dv.items():
    for c in v.get('children', []): node[c['adcode']] = c
SHORT = lambda s: re.sub(r'(省|市|壮族自治区|回族自治区|维吾尔自治区|自治区|特别行政区)$', '', s)
for ad, c in node.items():
    lv = c['level']; nm = c['name']; lon, lat = c['center']
    chain = [node[a]['name'] for a in c.get('acroutes', [])[1:] if a in node]
    if lv == 'province': t, ctx = 0, '中国'
    elif lv == 'city': t, ctx = 1, ' · '.join(chain + ['中国'])
    else: t, ctx = 2, ' · '.join(chain)
    rows.append([nm, py(nm), C(ctx), R2(lon), R2(lat), t, 0])
# populations for Chinese cities from GeoNames (match pinyin + proximity) -> better search ranking
cnpop = {}
for l in open(D + 'cities15000.txt', encoding='utf-8'):
    c = l.split('\t')
    if c[8] != 'CN': continue
    k = c[2].lower().replace(' ', '').replace("'", '')
    cnpop.setdefault(k, []).append((float(c[5]), float(c[4]), int(c[14] or 0)))
for r in rows:
    for lon, lat, pop in cnpop.get(r[1], []):
        if abs(lon - r[3]) < 0.6 and abs(lat - r[4]) < 0.6 and r[5] in (1, 2): r[6] = max(r[6], pop)
print('china rows', len(rows), 'with pop', sum(1 for r in rows if r[6]))
# GeoNames world cities (>15000) with Chinese names from alternateNamesV2
cities = [l.rstrip('\n').split('\t') for l in open(D + 'cities15000.txt', encoding='utf-8')]
adm1 = {}
for l in open(D + 'admin1CodesASCII.txt', encoding='utf-8'):
    a = l.rstrip('\n').split('\t'); adm1[a[0]] = (a[1], a[3])
cinfo = {}
for l in open(D + 'countryInfo.txt', encoding='utf-8'):
    if l.startswith('#'): continue
    a = l.rstrip('\n').split('\t'); cinfo[a[0]] = (a[4], a[16])  # name, geonameid
ids = set(c[0] for c in cities) | set(v[1] for v in adm1.values()) | set(v[1] for v in cinfo.values())
alt = collections.defaultdict(dict)  # id -> {lang: (name, pref)}
cache = D + 'alt_zh.json'
if os.path.exists(cache): alt = json.load(open(cache))
else:
    with zipfile.ZipFile(D + 'alternateNamesV2.zip') as z:
        with z.open('alternateNamesV2.txt') as f:
            for line in io.TextIOWrapper(f, encoding='utf-8'):
                a = line.split('\t')
                if a[2] not in ('zh', 'zh-CN', 'zh-Hans', 'zh-TW', 'zh-Hant', 'zh-SG') or a[1] not in ids: continue
                if a[7].strip() == '1' or (len(a) > 6 and a[6] == '1'): continue  # historic / colloquial
                pref = a[4] == '1'; short = a[5] == '1'
                cur = alt[a[1]].get(a[2])
                if cur is None or (pref and not cur[1]): alt[a[1]][a[2]] = (a[3], pref)
    json.dump(alt, open(cache, 'w'), ensure_ascii=False)
def zhname(gid):
    d = alt.get(gid) or {}
    for lang in ('zh-CN', 'zh-Hans', 'zh', 'zh-SG', 'zh-TW', 'zh-Hant'):
        if lang in d:
            n = zh(d[lang][0])
            if re.search(r'[\u4e00-\u9fff]', n) and not re.search(r'[\u3040-\u30ff]', n): return n
    return ''
CN_FIX = {'US': '美国', 'GB': '英国', 'KR': '韩国', 'KP': '朝鲜', 'TW': '中国', 'HK': '中国', 'MO': '中国', 'RU': '俄罗斯', 'CZ': '捷克', 'MN': '蒙古', 'LA': '老挝'}
nworld = 0
for c in cities:
    gid, name, asc, lat, lon, cc2, a1, pop = c[0], c[1], c[2], float(c[4]), float(c[5]), c[8], c[10], int(c[14] or 0)
    if cc2 in ('CN', 'HK', 'MO'): continue  # covered by the Chinese admin list
    z = zhname(gid)
    country = CN_FIX.get(cc2) or zhname(cinfo.get(cc2, ('', ''))[1]) or cinfo.get(cc2, (cc2, ''))[0]
    a1n = adm1.get(f'{cc2}.{a1}')
    a1z = zhname(a1n[1]) if a1n else ''
    if cc2 == 'TW': a1z = '台湾省'
    if a1z and (a1z == z or a1z.startswith(z or '@')): a1z = ''
    ctx = ' · '.join([x for x in (a1z, country) if x])
    rows.append([z or name, asc.lower(), C(ctx), R2(lon), R2(lat), 4 if c[7] == 'PPLC' and cc2 != 'TW' else 3, pop, ] + ([name] if z else []))
    nworld += 1
print('world rows', nworld, 'with zh', sum(1 for r in rows if r[5] >= 3 and re.search(r'[\u4e00-\u9fff]', r[0])))

# ------------------------------------------------------------------ nearby features
feats = []
def q(coords): return [int(round(v * 100)) for p in coords for v in p]
def add_poly(cat, name, w, g):
    g = g.simplify(0.03, preserve_topology=True)
    polys = g.geoms if g.geom_type == 'MultiPolygon' else [g]
    rings = [q(p.exterior.coords) for p in polys if p.area > 0.002]
    if rings: feats.append([cat, name, 2, w, rings])
def add_line(cat, name, w, lines):
    out = []
    for ln in lines:
        from shapely.geometry import LineString
        l = LineString(ln).simplify(0.02)
        if len(l.coords) >= 2: out.append(q(l.coords))
    if out: feats.append([cat, name, 1, w, out])
def add_pt(cat, name, w, lon, lat, extra=''):
    feats.append([cat, name, 0, w, R2(lon), R2(lat), extra])

LF_FIX, KEEP = FIX['LF_FIX'], FIX['KEEP']
CAT = {'Range/mtn': '山脉', 'Plateau': '高原', 'Desert': '沙漠', 'Plain': '平原', 'Basin': '盆地', 'Depression': '洼地', 'Lowland': '低地', 'Peninsula': '半岛',
       'Pen/cape': '半岛', 'Valley': '谷地', 'Gorge': '峡谷', 'Isthmus': '地峡', 'Wetlands': '湿地', 'Delta': '三角洲', 'Tundra': '苔原', 'Geoarea': '地区'}
hand = {  # approximate outlines for key Chinese landforms missing / too coarse in Natural Earth
  ('长江中下游平原', '平原'): [(111.5,30.8),(113,31.2),(115,30.8),(116.5,31.6),(118.5,32.4),(120.5,32.6),(121.9,31.8),(121.9,30.8),(121,30.6),(120.2,30.2),(119.5,30.8),(118,30.6),(116.5,29.7),(115.5,29.2),(114,29.4),(113,28.4),(112,28.6),(111.5,29.6)],
  ('东南丘陵', '丘陵'): [(110,25),(111.5,28.5),(113,28.4),(114,29.4),(115.5,29.2),(116.5,29.7),(118,30.6),(119.5,30.8),(120.2,30.2),(121,30.6),(121.9,29.8),(121.5,28),(120,26.5),(119.5,25.5),(117,23.5),(114,22.3),(111,21.5),(109.5,22),(108,22.5),(108.5,24.5)],
  ('横断山脉', '山脉'): [(98,33),(100.5,32.5),(102.5,31.5),(103,30),(102.5,27.5),(101,25.5),(99.5,25),(98.5,25.5),(97.5,28),(97,30.5)],
  ('山东丘陵', '丘陵'): [(116.5,36),(117.5,37.2),(119,37.5),(120.5,37.8),(122.5,37.3),(121,36.5),(120,35.8),(119.3,35),(118,35),(117,35.3)],
  ('准噶尔盆地', '盆地'): [(82.5,45),(84.5,46.5),(86.5,47),(88.5,46.8),(90.5,45.5),(90,44.5),(88,44),(85,44.3),(83,44.5)],
  ('柴达木盆地', '盆地'): [(90.5,37.5),(92.5,38.8),(95,38.5),(97.5,37.5),(98,36.8),(96.5,36),(94,36),(91.5,36.5)],
  ('内蒙古高原', '高原'): [(106,41),(107,42.5),(111,44),(116,45.5),(119.5,47),(120,44.5),(117,42.5),(114,41.5),(112,40.6),(110,40.8),(107.5,40.5)],
  ('珠江三角洲', '三角洲'): [(112.6,22.4),(112.9,23.2),(113.4,23.4),(114.1,23.1),(114.2,22.6),(113.6,22.2),(113.1,22.1)],
  ('成都平原', '平原'): [(103.4,30.3),(103.6,31.1),(104.1,31.3),(104.4,30.9),(104.3,30.4),(103.9,30.1)],
  ('关中平原', '平原'): [(106.8,34.3),(107.5,34.6),(108.8,34.7),(110.2,34.9),(110.3,34.5),(109.2,34.2),(107.8,34.1)],
}
hand_names = {k[0] for k in hand}
for (z, cat), pts in hand.items(): add_poly(cat, z, 3, Polygon(pts))
for f in load('ne_10m_geography_regions_polys'):
    p = f['properties']; fc = p['FEATURECLA']
    if fc not in KEEP or p['SCALERANK'] > 6: continue
    z = LF_FIX.get(p['NAME'], zh(p['NAME_ZH']))
    if not z or z in hand_names: continue
    g = shape(f['geometry'])
    if not g.is_valid: g = g.buffer(0)
    if p['NAME'] == 'NORTH CHINA PLAIN': g = g.intersection(box(100, 32.4, 130, 45))  # NE outline spills south over the Yangtze plain
    w = {0: 6, 1: 5, 2: 4, 3: 3, 4: 2.5}.get(p['SCALERANK'], 1.5)
    add_poly(CAT.get(fc, '地区'), z, w, g)
for z, lon, lat, cat in [('巴颜喀拉山脉', 97.6, 34.1, '山脉'), ('唐古拉山脉', 92.0, 33.0, '山脉'), ('冈底斯山脉', 83.5, 30.9, '山脉'), ('长白山', 128.1, 42.0, '山脉'),
                         ('巴丹吉林沙漠', 101.8, 40.4, '沙漠'), ('腾格里沙漠', 104.4, 38.3, '沙漠'), ('古尔班通古特沙漠', 87.5, 45.6, '沙漠'), ('武陵山', 109.4, 28.6, '山脉'),
                         ('台湾山脉', 121.05, 23.6, '山脉'), ('大巴山', 108.0, 32.2, '山脉'), ('雪峰山', 110.6, 27.4, '山脉'), ('天目山', 119.4, 30.35, '山脉'),
                         ('黄山', 118.17, 30.13, '山'), ('峨眉山', 103.33, 29.52, '山'), ('泰山', 117.1, 36.25, '山'), ('华山', 110.08, 34.48, '山'), ('庐山', 115.98, 29.55, '山'),
                         ('龙门山', 103.6, 31.3, '山脉'), ('邛崃山', 102.9, 30.6, '山脉'), ('四明山', 121.1, 29.7, '山脉'), ('会稽山', 120.6, 29.75, '山脉'),
                         ('莫干山', 119.87, 30.6, '山'), ('西湖', 120.14, 30.25, '湖泊'), ('千岛湖', 118.95, 29.6, '湖泊'), ('钱塘江', 120.2, 30.2, '河流'),
                         ('都江堰', 103.62, 31.0, '水利工程'), ('青城山', 103.57, 30.9, '山')]:
    add_pt(cat, z, 2.2 if cat in ('山', '湖泊', '水利工程') else 2.5, lon, lat)
PK_FIX = FIX['PK_FIX']
for f in load('ne_10m_geography_regions_elevation_points'):
    p = f['properties']
    if p['featurecla'] not in ('mountain', 'volcano') or p['scalerank'] > 8: continue
    z = PK_FIX.get(p['name'], zh(p['name_zh']))
    if not z: continue
    el = 8848.86 if p['name'] == 'Mount Everest' else p['elevation']
    lon, lat = f['geometry']['coordinates']
    add_pt('山峰' if p['featurecla'] == 'mountain' else '火山', z, max(1.2, 4.5 - p['scalerank'] * 0.4) + el / 4000, lon, lat, f'{el:g}' if el else '')
LK_FIX = FIX['LK_FIX']; seen = set()
for f in load('ne_10m_lakes'):
    p = f['properties']
    if p['scalerank'] > 7 or not p['name']: continue
    z = LK_FIX.get(p['name'], zh(p['name_zh']))
    if not z or z in seen: continue
    seen.add(z); g = shape(f['geometry'])
    if not g.is_valid: g = g.buffer(0)
    add_poly('水库' if p['featurecla'] == 'Reservoir' else '湖泊', z, max(1.2, 5 - p['scalerank'] * 0.5), g)
MAR_FIX = FIX['MAR_FIX']
MCAT = {'sea': '海', 'bay': '海湾', 'gulf': '海湾', 'strait': '海峡', 'channel': '海峡', 'sound': '海峡', 'ocean': '大洋', 'lagoon': '潟湖', 'fjord': '峡湾', 'inlet': '海湾', 'reef': '珊瑚礁'}
for f in load('ne_10m_geography_marine_polys'):
    p = f['properties']
    if p['featurecla'] in ('river', 'generic') or p['scalerank'] > 6: continue
    z = MAR_FIX.get(p['name'], zh(p['name_zh']))
    if not z: continue
    g = shape(f['geometry'])
    if not g.is_valid: g = g.buffer(0)
    add_poly(MCAT.get(p['featurecla'], '海域'), z, max(1.5, 6 - p['scalerank'] * 0.6) + (2 if p['featurecla'] == 'ocean' else 0), g)
RV = dict(FIX['RV'])
RV.update({'Fuchun': '富春江', 'Ou': '瓯江', 'Tuo': '沱江', 'Dadu': '大渡河', 'Jialing': '嘉陵江', 'Yalong': '雅砻江', 'Han': '汉江', 'Wu': '乌江', 'Gan': '赣江',
  'Xiang': '湘江', 'Huai': '淮河', 'Songhua': '松花江', 'Nen': '嫩江', 'Liao': '辽河', 'Wei': '渭河', 'Fen': '汾河', 'Luan': '滦河', 'Yuan': '沅江', 'Zi': '资水',
  'Bei': '北江', 'Dong': '东江', 'You': '右江', 'Zuo': '左江', 'Tarim': '塔里木河', 'Hai': '海河', 'Yongding': '永定河', 'Sanggan': '桑干河', 'Jing': '泾河',
  'Wuding': '无定河', 'Liu': '柳江', 'Yu': '郁江', 'Qin': '沁河', 'Daling': '大凌河', 'Xiliao': '西辽河', 'Xar Moron': '西拉木伦河', 'Ussuri': '乌苏里江',
  'Yalu': '鸭绿江', 'Tumen': '图们江', 'Nanpan': '南盘江', 'Hongshui': '红水河', 'Tongtian': '通天河', 'Tuotuo': '沱沱河', 'Ile': '伊犁河', 'Aksu': '阿克苏河',
  'Yarkant': '叶尔羌河', 'Konqi': '孔雀河', 'Ertix': '额尔齐斯河', 'Hailar': '海拉尔河', 'Argun’': '额尔古纳河', 'Mei': '梅江', 'Jiulong': '九龙江',
  'Duliu': '都柳江', 'Rong': '融江', 'Yong': '邕江', 'Xun': '浔江', 'Dan': '丹江', 'Zhang': '漳河', 'Ying': '颍河', 'Yi': '沂河', 'Shandian': '闪电河',
  'Lancang': '澜沧江', 'Nu': '怒江', 'Huang': '黄河', 'Chang Jiang': '长江', 'Yangtze': '长江', 'Jinsha': '金沙江', 'Yarlung': '雅鲁藏布江', 'Hong': '红河', 'Quan': '黔江'})
runs = collections.defaultdict(list); rw = {}
for f in load('ne_10m_rivers_lake_centerlines'):
    p = f['properties']; g = f['geometry']
    if not g or not p['name']: continue
    z = RV.get(p['name'])
    if p['name'] == 'Min': z = '岷江' if g['coordinates'] and (g['coordinates'][0][0] if g['type'] == 'LineString' else g['coordinates'][0][0][0]) < 110 else '闽江'
    if p['name'] == 'Han' and (g['coordinates'][0][0] if g['type'] == 'LineString' else g['coordinates'][0][0][0]) > 120: z = '汉江(朝鲜半岛)'
    if not z: continue
    lines = [g['coordinates']] if g['type'] == 'LineString' else g['coordinates']
    runs[z] += [l for l in lines if len(l) >= 2]
    rw[z] = max(rw.get(z, 0), max(1.2, 6.5 - p['scalerank'] * 0.6))
for z, ls in runs.items(): add_line('河流', z, rw[z], ls)
# notable cities (from the printed labels)
vec = json.load(open('assets/vectors_v3.json'))
for r in vec['labels']:
    if r[0] in ('capital', 'pcap', 'city'):
        add_pt('城市', r[1], 3.0 if r[0] != 'city' else 2.4, r[3], r[4], '首都' if r[0] == 'capital' else ('省会' if r[0] == 'pcap' else ''))
print('feats', len(feats), collections.Counter(f[0] for f in feats))
out = {'ctx': ctxs, 'gaz': rows, 'feats': feats}
raw = json.dumps(out, separators=(',', ':'), ensure_ascii=False).encode()
gzip.open('assets/loc_v4.json.gz', 'wb', 9).write(raw)
print('raw MB', len(raw) / 1e6, 'gz MB', os.path.getsize('assets/loc_v4.json.gz') / 1e6)
