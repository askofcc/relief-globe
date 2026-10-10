# Builds assets/vectors_v6.json (v3 + English names, more cities, zoom levels) for the v6 web build (China standard map, dense printed-globe labels)
import json, math, subprocess, os
# v6: anchor fixes so famous peaks (e.g. 五台山 3058 m) are not blocked by long range labels
POS_FIX = {'太行山脉': (113.95, 37.25)}
import numpy as np, unicodedata, re, gzip
from pypinyin import lazy_pinyin
from opencc import OpenCC
from shapely.geometry import shape, Point, mapping
from shapely.ops import polylabel, unary_union
from shapely.prepared import prep
cc = OpenCC('t2s')
os.chdir(os.path.dirname(os.path.abspath(__file__)))
D = 'data/'
def load(f): return json.load(open(D + f + '.geojson'))['features']
def zh(s): return cc.convert(s or '').strip()
def R(x, n=3): return round(float(x), n)
def asc(s): return unicodedata.normalize('NFKD', s or '').encode('ascii', 'ignore').decode().replace('  ', ' ').strip()
def tc(s):  # 'HIMALAYAS' -> 'Himalayas', keeps already mixed-case names
    s = asc(s)
    if s.upper() != s: return s
    return ' '.join(w.capitalize() if w not in ('OF', 'DE', 'DEL', 'LA') else w.lower() for w in s.split())
PY_FIX = {'钓鱼岛': 'Diaoyu Dao', '黄岩岛': 'Huangyan Dao', '赤尾屿': 'Chiwei Yu', '香港': 'Hong Kong', '澳门': 'Macao', '台北': 'Taipei', '乌鲁木齐': 'Urumqi', '呼和浩特': 'Hohhot', '拉萨': 'Lhasa', '内蒙古': 'Nei Mongol',
  '西藏': 'Xizang', '陕西': 'Shaanxi', '喀什': 'Kashi', '日喀则': 'Xigaze', '格尔木': 'Golmud', '台湾': 'Taiwan', '哈密': 'Hami', '吐鲁番': 'Turpan'}
def pyn(z):
    if z in PY_FIX: return PY_FIX[z]
    p = lazy_pinyin(z); return ''.join(p).capitalize()

# ------------------------------------------------------------------ countries (China POV)
subprocess.run(['npx', 'mapshaper', D + 'ne_10m_admin_0_countries_chn.geojson',
  '-each', 'cid = (SOV_A3=="CH1" || ADM0_A3=="SCR") ? "156" : (ISO_N3_EH != "-99" ? ISO_N3_EH : ADM0_A3)',
  '-dissolve', 'cid', 'copy-fields=ADM0_A3',
  '-simplify', '18%', 'keep-shapes', '-filter-slivers', 'min-area=2km2',
  '-rename-layers', 'countries', '-o', 'format=topojson', 'id-field=cid', 'quantization=200000', D + 'countries_v3.json'], check=True)
topo = json.load(open(D + 'countries_v3.json'))
C = {f['properties']['ADM0_A3']: f['properties'] for f in load('ne_10m_admin_0_countries_chn')}
cid_of = {}
for a3, p in C.items():
    cid = '156' if (p['SOV_A3'] == 'CH1' or a3 == 'SCR') else (p['ISO_N3_EH'] if p['ISO_N3_EH'] != '-99' else a3)
    cid_of[a3] = cid
NAME_FIX = {'CHN': '中国', 'KOR': '韩国', 'PRK': '朝鲜', 'MNG': '蒙古', 'LAO': '老挝', 'COD': '刚果(金)', 'COG': '刚果(布)',
  'CAF': '中非', 'ARE': '阿联酋', 'BIH': '波黑', 'DOM': '多米尼加', 'FLK': '马尔维纳斯群岛(福克兰群岛)', 'SAH': '西撒哈拉',
  'GRL': '格陵兰岛(丹)', 'ATF': '法属南部领地', 'USA': '美国', 'GBR': '英国', 'CZE': '捷克', 'MKD': '北马其顿', 'SWZ': '斯威士兰',
  'TLS': '东帝汶', 'PSX': '巴勒斯坦', 'GNQ': '赤道几内亚', 'CIV': '科特迪瓦', 'PNG': '巴布亚新几内亚', 'NCL': '新喀里多尼亚(法)',
  'IOT': '', 'IOA': '', 'CSI': '', 'ATC': '', 'ESB': '', 'WSB': '', 'BRT': '', 'BRI': '', 'UMI': '', 'CLP': '', 'HMD': '', 'SGS': '南乔治亚岛(英)',
  'ATA': '南极洲', 'HKG': '', 'MAC': '', 'SCR': '', 'PYF': '法属波利尼西亚', 'PRI': '波多黎各(美)', 'NZL': '新西兰', 'FRO': '法罗群岛(丹)',
  'SVK': '斯洛伐克', 'BLR': '白俄罗斯', 'TTO': '特立尼达和多巴哥'}
EN_FIX = {'CHN': "PEOPLE'S REPUBLIC OF CHINA", 'USA': 'UNITED STATES OF AMERICA', 'RUS': 'RUSSIA', 'GBR': 'UNITED KINGDOM',
  'COD': 'D. R. CONGO', 'CAF': 'CENTRAL AFRICAN REP.', 'SAU': 'SAUDI ARABIA'}
props = {}
for g in topo['objects']['countries']['geometries']:
    a3 = g['properties']['ADM0_A3']; cid = g['id']
    p = C['CHN'] if cid == '156' else C[a3]
    a3 = 'CHN' if cid == '156' else a3
    props[cid] = dict(a3=a3, zh=NAME_FIX.get(a3, zh(p['NAME_ZH'])), en=EN_FIX.get(a3, (p['NAME'] or '').upper()),
                      pop=p['POP_EST'], gdp=p['GDP_MD'], cont=p['CONTINENT'], lx=p['LABEL_X'], ly=p['LABEL_Y'], typ=p['TYPE'])
    g['properties'] = {}
# CN population incl. Taiwan/HK/Macao (approx, Natural Earth POP_EST sums)
props['156']['pop'] = sum(C[a]['POP_EST'] for a in ('CHN', 'HKG', 'MAC')) + 23568378
CONT_ZH = {'Asia': '亚洲', 'Europe': '欧洲', 'Africa': '非洲', 'North America': '北美洲', 'South America': '南美洲', 'Oceania': '大洋洲',
           'Antarctica': '南极洲', 'Seven seas (open ocean)': '大洋岛屿'}
for p in props.values(): p['cont'] = CONT_ZH.get(p['cont'], p['cont'])
# geometry areas for size/label decisions
import topojson_feats  # local helper (written below)
feats = topojson_feats.features(topo)
geom = {f['id']: shape(f['geometry']) for f in feats}
def area_km2(gm):
    # rough spherical area from lon/lat polygon (equal-area via cos(lat) scaling)
    tot = 0.0
    polys = gm.geoms if gm.geom_type == 'MultiPolygon' else [gm]
    for pg in polys:
        lat = pg.centroid.y
        tot += pg.area * math.cos(math.radians(lat)) * 111.32 ** 2
    return tot
for cid in props: props[cid]['area'] = round(area_km2(geom[cid])) if cid in geom else 0
props['156']['area'] = 9600000  # official figure incl. Taiwan, South Tibet, Aksai Chin
china = prep(geom['156'])

# ------------------------------------------------------------------ China provinces (inner lines only)
A1 = load('ne_10m_admin_1_states_provinces')
PROV_SHORT = {'Xinjiang': '新疆', 'Xizang': '西藏', 'Inner Mongol': '内蒙古', 'Gansu': '甘肃', 'Yunnan': '云南', 'Heilongjiang': '黑龙江',
  'Jilin': '吉林', 'Liaoning': '辽宁', 'Guangxi': '广西', 'Guangdong': '广东', 'Hainan': '海南', 'Fujian': '福建', 'Zhejiang': '浙江',
  'Shanghai': '上海', 'Jiangsu': '江苏', 'Shandong': '山东', 'Hebei': '河北', 'Tianjin': '天津', 'Beijing': '北京', 'Sichuan': '四川',
  'Chongqing': '重庆', 'Guizhou': '贵州', 'Hunan': '湖南', 'Ningxia': '宁夏', 'Shaanxi': '陕西', 'Qinghai': '青海', 'Shanxi': '山西',
  'Jiangxi': '江西', 'Henan': '河南', 'Hubei': '湖北', 'Anhui': '安徽', 'Paracel Islands': '海南'}
pf = []
for f in A1:
    p = f['properties']; a = p['adm0_a3']
    if a == 'CHN': pv = PROV_SHORT[p['name']]
    elif a == 'TWN': pv = '福建' if p['name'] == 'Kinmen' else '台湾'
    elif a == 'HKG': pv = '香港'
    elif a == 'MAC': pv = '澳门'
    else: continue
    pf.append({'type': 'Feature', 'properties': {'pv': pv}, 'geometry': f['geometry']})
json.dump({'type': 'FeatureCollection', 'features': pf}, open('/tmp/cnprov.geojson', 'w'))
subprocess.run(['npx', 'mapshaper', '/tmp/cnprov.geojson', '-dissolve', 'pv', '-simplify', '15%', '-innerlines',
                '-o', 'format=geojson', 'precision=0.001', '/tmp/cnprov_lines.geojson'], check=True)
provLines = json.load(open('/tmp/cnprov_lines.geojson'))

# ------------------------------------------------------------------ rivers / lakes / glaciers
subprocess.run(['npx', 'mapshaper', D + 'ne_10m_rivers_lake_centerlines.geojson', '-filter', 'scalerank <= 7',
  '-filter-fields', 'scalerank,name', '-simplify', '25%', '-o', 'format=geojson', 'precision=0.002', '/tmp/rivers.geojson'], check=True)
rivers = json.load(open('/tmp/rivers.geojson'))
subprocess.run(['npx', 'mapshaper', D + 'ne_10m_lakes.geojson', '-filter', 'scalerank <= 7', '-filter-fields', 'scalerank',
  '-simplify', '25%', 'keep-shapes', '-o', 'format=geojson', 'precision=0.002', '/tmp/lakes.geojson'], check=True)
lakes = json.load(open('/tmp/lakes.geojson'))
glaciers = json.load(open(D + 'ne_50m_glaciated_areas.geojson'))
for f in glaciers['features']: f['properties'] = {}
nd = load('ne_10m_admin_0_boundary_lines_maritime_indicator_chn')

# ------------------------------------------------------------------ labels
# row: [cls, zh, en, lon, lat, size_deg, rot_deg, spread(0..), rank]
L = []
def add(cls, z, en, lon, lat, size, rot=0, spread=0, rank=0, lvl=0):
    if not z: return
    L.append([cls, z, asc(en or ''), R(lon), R(lat), R(size, 3), R(rot, 1), R(spread, 2), R(rank, 2), lvl])

# continents (red), drawn first
for z, lon, lat, s in [('亚洲', 82, 52, 5.0), ('欧洲', 24, 55, 3.6), ('非洲', 20, 6, 4.6), ('北美洲', -102, 52, 4.4),
                       ('南美洲', -62, -12, 4.0), ('大洋洲', 145, -21, 3.4), ('南极洲', 40, -80, 3.6)]:
    add('cont', z, '', lon, lat, s, 0, 2.2 if len(z) == 2 else 1.4)
# oceans (zh + EN)
for z, en, lon, lat, s in [('太平洋', 'PACIFIC OCEAN', -150, 8, 4.6), ('太平洋', 'PACIFIC OCEAN', 168, 20, 3.8), ('太平洋', 'PACIFIC OCEAN', -125, -32, 4.2),
                           ('大西洋', 'ATLANTIC OCEAN', -42, 30, 4.0), ('大西洋', 'ATLANTIC OCEAN', -18, -22, 3.8), ('印度洋', 'INDIAN OCEAN', 78, -22, 4.4),
                           ('北冰洋', 'ARCTIC OCEAN', -165, 78.5, 1.8), ('南大洋', 'SOUTHERN OCEAN', 105, -60, 2.4), ('南大洋', 'SOUTHERN OCEAN', -95, -61, 2.2)]:
    add('ocean', z, en, lon, lat, s, 0, 1.2)

# countries
def csize(area):
    return max(0.46, min(2.9, 0.62 * 1.66 ** (math.log10(max(area, 1)) - 4)))
COUNTRY_POS = {'CHN': (104, 35.5), 'RUS': (96, 62), 'USA': (-99, 39.5), 'CAN': (-105, 58), 'BRA': (-53, -10), 'AUS': (134, -25.5), 'IND': (78.5, 21.5),
  'MNG': (103, 46.8), 'KAZ': (67.5, 48.3), 'IDN': (114, -1.5), 'ARG': (-66, -36), 'GRL': (-41, 73), 'NOR': (10, 62), 'JPN': (139, 36.5), 'FRA': (2.5, 46.6),
  'GBR': (-1.8, 52.6), 'CHL': (-71, -30), 'PHL': (122.5, 12.5), 'MYS': (102, 4.2), 'VNM': (106, 15.5), 'KOR': (127.9, 36.3), 'PRK': (126.8, 40.2)}
for cid, p in props.items():
    a3 = p['a3']; area = p['area']
    if not p['zh'] or a3 == 'ATA': continue
    lon, lat = COUNTRY_POS.get(a3, (p['lx'], p['ly']))
    s = csize(area)
    en = p['en'] if area > 12000 else ''
    z = p['zh']
    if a3 == 'CHN': s, z = 2.9, '中华人民共和国'
    sp = 0.12 if len(z) <= 3 else 0.04
    gm = geom.get(cid)
    if gm is not None and area > 400000:
        big = max(gm.geoms, key=lambda x: x.area) if gm.geom_type == 'MultiPolygon' else gm
        b = big.bounds; wdeg = (b[2] - b[0]) * math.cos(math.radians(lat))
        if b[2] - b[0] > 180: wdeg = 60
        sp = max(sp, min(1.6, (0.5 * wdeg / s - len(z)) / max(1, len(z) - 1)))
    add('country', z, en, lon, lat, s, 0, sp, -area)
# China provinces
PROV_POS = {'新疆': (85.5, 42.7), '西藏': (87.5, 31.8), '内蒙古': (112, 43.4), '甘肃': (99.5, 39.3), '青海': (96.5, 35.6), '四川': (102.6, 30.8),
  '云南': (101.5, 24.6), '黑龙江': (128, 47.6), '吉林': (126.5, 43.4), '辽宁': (122.6, 41.5), '河北': (115.3, 38.9), '山西': (112.3, 37.5),
  '陕西': (108.9, 35.3), '宁夏': (106.1, 37.4), '河南': (113.6, 33.7), '山东': (118.2, 36.3), '江苏': (119.6, 33.2), '安徽': (117.1, 31.9),
  '湖北': (112.3, 31.0), '湖南': (111.6, 27.4), '江西': (115.8, 27.4), '浙江': (120.0, 29.2), '福建': (117.9, 26.0), '广东': (113.3, 23.6),
  '广西': (108.6, 23.8), '贵州': (106.8, 26.9), '重庆': (107.9, 30.1), '海南': (109.8, 19.1), '台湾': (120.95, 23.7), '北京': (116.4, 40.6),
  '天津': (117.5, 39.2), '上海': (121.9, 31.0), '香港': (114.25, 22.15), '澳门': (113.45, 22.05)}
for z, (lon, lat) in PROV_POS.items():
    small = z in ('北京', '天津', '上海', '香港', '澳门', '宁夏', '海南', '台湾', '重庆')
    add('prov', z, pyn(z).upper(), lon, lat, 0.62 if small else 0.82, 0, 0.25)
# capitals & cities
PP = load('ne_10m_populated_places')
CAP_FIX = {'Vaduz': '瓦杜兹', 'Tarawa': '塔拉瓦', 'Kigali': '基加利', 'Mbabane': '姆巴巴内', 'Djibouti': '吉布提', 'Banjul': '班珠尔',
  'Managua': '马那瓜', 'Mogadishu': '摩加迪沙', 'San José': '圣何塞', 'Kingston': '金斯敦', 'Guatemala City': '危地马拉城', 'Gaborone': '哈博罗内',
  'Belmopan': '贝尔莫潘', 'Hamilton': '汉密尔顿', 'Victoria': '维多利亚', 'Praia': '普拉亚', 'Dar es Salaam': '达累斯萨拉姆', 'Riyadh': '利雅得',
  'Washington,  D.C.': '华盛顿', 'Nur-Sultan': '阿斯塔纳', 'Bandar Seri Begawan': '斯里巴加湾市', 'Yamoussoukro': '亚穆苏克罗', 'København': '哥本哈根',
  'Andorra': '安道尔城', 'Ahmedabad': '艾哈迈达巴德', 'Auckland': '奥克兰', 'Kyiv': '基辅', 'Lomé': '洛美', 'Bloemfontein': '', 'Pretoria': '比勒陀利亚',
  'Ho Chi Minh City': '胡志明市', 'Frankfurt': '法兰克福', 'Shenyeng': '沈阳', 'Ōsaka': '大阪', 'Chattogram': '吉大港', 'Montréal': '蒙特利尔',
  'Aleppo': '阿勒颇', 'St.  Petersburg': '圣彼得堡', 'Bogota': '波哥大', 'Naypyidaw': '内比都', 'Sucre': '苏克雷', 'La Paz': '拉巴斯', 'Melekeok': '梅莱凯奥克',
  'Ngerulmud': '恩吉鲁穆德', 'Palikir': '帕利基尔', 'Laayoune': '阿尤恩'}
SKIP_CAPS = {'Taipei', 'Hargeisa', 'Pristina', 'Jerusalem', 'Bloemfontein', 'Cape Town'}
CN_CAPS = {'北京': (116.40, 39.90), '天津': (117.20, 39.13), '上海': (121.47, 31.23), '重庆': (106.55, 29.56), '石家庄': (114.51, 38.04), '太原': (112.55, 37.87),
  '呼和浩特': (111.75, 40.84), '沈阳': (123.43, 41.80), '长春': (125.32, 43.82), '哈尔滨': (126.63, 45.75), '南京': (118.80, 32.06), '杭州': (120.16, 30.27),
  '合肥': (117.23, 31.82), '福州': (119.30, 26.08), '南昌': (115.86, 28.68), '济南': (117.00, 36.65), '郑州': (113.63, 34.75), '武汉': (114.30, 30.59),
  '长沙': (112.94, 28.23), '广州': (113.26, 23.13), '南宁': (108.37, 22.82), '海口': (110.35, 20.02), '成都': (104.07, 30.57), '贵阳': (106.63, 26.65),
  '昆明': (102.83, 24.88), '拉萨': (91.13, 29.65), '西安': (108.94, 34.34), '兰州': (103.83, 36.06), '西宁': (101.78, 36.62), '银川': (106.23, 38.49),
  '乌鲁木齐': (87.62, 43.83), '台北': (121.56, 25.04), '香港': (114.17, 22.32), '澳门': (113.54, 22.20)}
cap_of = {}
for f in PP:
    p = f['properties']
    if p['ADM0CAP'] != 1 or p['NAME'] in SKIP_CAPS or p['ADM0_A3'] in ('CHN', 'TWN', 'HKG', 'MAC'): continue
    if p['FEATURECLA'] not in ('Admin-0 capital',): continue
    z = CAP_FIX.get(p['NAME'], zh(p['NAME_ZH']))
    if not z: continue
    lon, lat = f['geometry']['coordinates']
    add('capital', z, p['NAME_EN'] or p['NAME'], lon, lat, 0.46, 0, 0, -p['POP_MAX'])
    cid = cid_of.get(p['ADM0_A3'])
    if cid and cid not in cap_of: cap_of[cid] = z
cap_of['156'] = '北京'
cap_of[cid_of['ZAF']] = '比勒陀利亚'
cap_of[cid_of['BOL']] = '苏克雷'
cap_of[cid_of['ISR']] = ''
for cid, p in props.items(): p['cap'] = cap_of.get(cid, '')
add('capital', '北京', 'Beijing', 116.40, 39.90, 0.56, 0, 0, -1e9)
for z, (lon, lat) in CN_CAPS.items():
    if z != '北京': add('pcap', z, pyn(z), lon, lat, 0.44, 0, 0, 0)
seen = set(CN_CAPS)
cities = []
for f in PP:
    p = f['properties']
    if p['ADM0CAP'] == 1 and p['NAME'] not in ('Jerusalem', 'Cape Town', 'Bloemfontein'): continue
    if p['POP_MAX'] < 600000 and p['SCALERANK'] > 2: continue
    z = CAP_FIX.get(p['NAME'], zh(p['NAME_ZH']))
    if not z or z in seen: continue
    lon, lat = f['geometry']['coordinates']
    if p['ADM0_A3'] not in ('CHN', 'TWN', 'HKG', 'MAC') and china.contains(Point(lon, lat)): continue  # e.g. places in 藏南 listed under India
    seen.add(z); cities.append((p['POP_MAX'], z, lon, lat, (pyn(z) if p['ADM0_A3'] in ('CHN', 'TWN', 'HKG', 'MAC') else (p['NAME_EN'] or p['NAME']))))
cities.sort(reverse=True)
for pop, z, lon, lat, en in cities[:420]:
    add('city', z, en, lon, lat, 0.36 if pop > 3e6 else 0.33, 0, 0, -pop)
for pop, z, lon, lat, en in cities[420:900]:
    add('city', z, en, lon, lat, 0.30, 0, 0, -pop, 1)

# marine names
MAR_FIX = {'Bahía de Campeche': '坎佩切湾', 'Gulf of Tonkin': '北部湾', 'Bosporus': '博斯普鲁斯海峡', 'Inner Seas': '', 'Inner Sea': '濑户内海',
  'The North Western Passages': '', 'Río de la Plata': '拉普拉塔河口', 'Great Australian Bight': '大澳大利亚湾', 'Hudson Bay': '哈得孙湾',
  'Gulf of Saint Lawrence': '圣劳伦斯湾', 'Amazon River': '', 'Yangtze River': '', 'Columbia River': '', 'Great Barrier Reef': '大堡礁'}
for f in load('ne_10m_geography_marine_polys'):
    p = f['properties']
    if p['featurecla'] in ('ocean', 'river', 'lagoon', 'fjord', 'generic') or p['scalerank'] > 5: continue
    z = MAR_FIX.get(p['name'], zh(p['name_zh']))
    if not z: continue
    g = shape(f['geometry'])
    if not g.is_valid: g = g.buffer(0)
    gg = max(g.geoms, key=lambda x: x.area) if g.geom_type == 'MultiPolygon' else g
    try: pt = polylabel(gg, tolerance=0.05)
    except Exception: pt = gg.representative_point()
    a = gg.area * math.cos(math.radians(pt.y))
    narrow = p['featurecla'] in ('strait', 'channel', 'sound')
    s = 0.38 if narrow else max(0.45, min(1.35, 0.30 * a ** 0.3))
    add('sea', z, p['name'], pt.x, pt.y, s, 0, 0.35 if not narrow else 0.05, p['scalerank'] - a / 1e4)
# Chinese islands / reefs (standard map)
for z, lon, lat in [('南海诸岛', 114.5, 13.2), ('西沙群岛', 112.0, 16.3), ('南沙群岛', 114.2, 9.6), ('中沙群岛', 114.5, 15.6), ('东沙群岛', 116.8, 20.9),
                    ('钓鱼岛', 123.5, 25.75), ('黄岩岛', 117.75, 15.15), ('赤尾屿', 124.56, 25.92)]:
    add('island_cn', z, pyn(z.replace('群岛', '')) + (' Qundao' if '群岛' in z else ''), lon, lat, 0.34, 0, 0, 0)

# landforms
LF_FIX = {'ANDES': '安第斯山脉', 'ROCKY MOUNTAINS': '落基山脉', 'GOBI DESERT': '戈壁', 'ETHIOPIAN HIGHLANDS': '埃塞俄比亚高原', 'ZAGROS MOUNTAINS': '扎格罗斯山脉',
  'DESIERTO DE ATACAMA': '阿塔卡马沙漠', 'KALAHARI DESERT': '卡拉哈里沙漠', 'INDOCHINA PENINSULA': '中南半岛', 'INDIA': '印度半岛', 'AMAZON BASIN': '亚马孙平原',
  'Mu Us Desert': '毛乌素沙地', 'GANGES PLAIN': '恒河平原', 'FLORIDA': '佛罗里达半岛', 'NORTHERN EUROPEAN PLAIN': '波德平原', 'ALPS': '阿尔卑斯山脉',
  'PLATEAU OF TIBET': '青藏高原', 'SAHEL': '萨赫勒', 'PAMPAS': '潘帕斯草原', 'APPENNINI': '亚平宁山脉', 'CORD. CENTRAL': '', 'CORDILLERA OCCIDENTAL': '',
  'CORD. OCCIDENTAL': '', 'CORDILLERA ORIENTAL': '', 'CORDILLERA  REAL': '', 'COASTAL PLAIN': '', 'CENTRAL LOWLAND': '中央低地', 'Siwalik Hills': '',
  'GREAT RIFT VALLEY': '东非大裂谷', 'WESTERN PLATEAU': '西澳大利亚高原', 'PENÍNSULA IBÉRICA': '伊比利亚半岛', 'CAATINGAS': '', 'SELVAS': '',
  'BARREN GROUNDS': '', 'KNUD RASMUSSEN LAND': '', 'PUNJAB': '', 'Hadhramaut': '哈德拉毛', 'CENTRAL AMERICA': '', 'ALASKA': '', 'SIBERIA': '西伯利亚',
  'COAST RANGES': '海岸山脉', 'LLANOS': '奥里诺科平原', 'GRAN CHACO': '格兰查科', 'PLANALTO CENTRAL': '', 'GUIANA SHIELD': '圭亚那高原', 'GUIANA HIGHLANDS': '',
  'TURAN LOWLAND': '图兰低地', 'MANCHURIAN PLAIN': '东北平原', 'NORTH CHINA PLAIN': '华北平原', 'SCANDINAVIA': '斯堪的纳维亚半岛', 'KJØLEN MOUNTAINS': '斯堪的纳维亚山脉',
  'PONTIC STEPPE': '', 'CANADIAN SHIELD': '', 'Polar Plateau': '南极高原', 'Transantarctic Mountains': '横贯南极山脉', 'GREAT ARTESIAN BASIN': '大自流盆地',
  'CENTRAL SIBERIAN PLATEAU': '中西伯利亚高原', 'WESTERN SIBERIAN PLAIN': '西西伯利亚平原', 'Tsangpo Gorge': '雅鲁藏布大峡谷', 'HIMALAYAS': '喜马拉雅山脉',
  'Dome A (Argus)': '冰穹A', 'Fergana Valley': '费尔干纳盆地', 'Loess Plateau': '黄土高原', 'YUNGUI PLATEAU': '云贵高原', 'SICHUAN BASIN': '四川盆地',
  'TARIM BASIN': '塔里木盆地', 'Taihang Mts.': '太行山脉', 'Qinling Mountains': '秦岭', 'QUILIAN MOUNTAINS': '祁连山脉', 'Yin Mts.': '阴山山脉',
  'Nan Ling Mts.': '南岭', 'TIAN SHAN': '天山山脉', 'KUNLUN MOUNTAINS': '昆仑山脉', 'ALTAY MOUNTAINS': '阿尔泰山脉', 'KARAKORAM RA.': '喀喇昆仑山脉',
  'GREATER KHINGAN RANGE': '大兴安岭', 'Lesser Khingan Range': '小兴安岭', 'STANOVOY RANGE': '外兴安岭', 'Wuyi Mts.': '武夷山脉', 'Dabie Mts.': '大别山',
  'ALTUN MTS.': '阿尔金山脉'}
KEEP = {'Range/mtn', 'Plateau', 'Desert', 'Plain', 'Basin', 'Depression', 'Lowland', 'Peninsula', 'Pen/cape', 'Valley', 'Gorge', 'Isthmus', 'Wetlands', 'Delta', 'Tundra', 'Geoarea'}
for f in load('ne_10m_geography_regions_polys'):
    p = f['properties']; fc = p['FEATURECLA']
    if fc not in KEEP or p['SCALERANK'] > 4: continue
    if fc in ('Geoarea',) and p['NAME'] not in ('SIBERIA', 'ANATOLIA', 'PATAGONIA', 'Mesopotamia', 'Hexi Corridor'): continue
    if fc == 'Delta' and p['SCALERANK'] > 3: continue
    z = LF_FIX.get(p['NAME'], zh(p['NAME_ZH']))
    if not z: continue
    g = shape(f['geometry']);
    if not g.is_valid: g = g.buffer(0)
    gg = max(g.geoms, key=lambda x: x.area) if g.geom_type == 'MultiPolygon' else g
    c = gg.centroid
    if fc in ('Range/mtn',) or (fc in ('Peninsula', 'Pen/cape', 'Valley', 'Gorge', 'Isthmus') ):
        # orientation of the range: principal axis of its outline in locally-scaled coordinates
        xy = np.array(gg.exterior.coords); k = math.cos(math.radians(c.y))
        X = np.c_[(xy[:, 0] - c.x) * k, xy[:, 1] - c.y]
        w, v = np.linalg.eigh(np.cov(X.T)); ax = v[:, 1]
        length = 4 * math.sqrt(w[1]); elong = math.sqrt(w[1] / max(w[0], 1e-9))
        ang = math.degrees(math.atan2(ax[1], ax[0]))
        if ang > 90: ang -= 180
        if ang < -90: ang += 180
        if elong < 1.8: ang = 0
        rot = -ang if fc == 'Range/mtn' else 0
        try: pt = polylabel(gg, tolerance=0.05)
        except Exception: pt = gg.representative_point()
        if fc == 'Range/mtn': pt = c if gg.contains(c) else pt
        s = max(0.40, min(1.05, 0.22 * length ** 0.55))
        spread = min(2.2, max(0.15, (length / max(len(z), 1) / s - 1.0) * 0.55)) if fc == 'Range/mtn' else 0.15
        if z in POS_FIX: pt = type('P', (), {'x': POS_FIX[z][0], 'y': POS_FIX[z][1]})()
        add('range' if fc == 'Range/mtn' else 'land', z, tc(p['NAME']), pt.x, pt.y, s, rot, spread, p['SCALERANK'])
    else:
        try: pt = polylabel(gg, tolerance=0.05)
        except Exception: pt = gg.representative_point()
        a = gg.area * math.cos(math.radians(pt.y))
        s = max(0.40, min(1.15, 0.30 * a ** 0.28))
        add('land', z, tc(p['NAME']), pt.x, pt.y, s, 0, 0.45, p['SCALERANK'])
HAND_EN = {'中条山': 'Zhongtiao Shan', '太岳山': 'Taiyue Shan', '内蒙古高原': 'Nei Mongol Plateau', '横断山脉': 'Hengduan Shan', '唐古拉山脉': 'Tanggula Shan', '冈底斯山脉': 'Gangdise Shan', '巴颜喀拉山脉': 'Bayan Har Shan',
  '长白山': 'Changbai Shan', '长江中下游平原': 'Middle-Lower Changjiang Plain', '巴丹吉林沙漠': 'Badain Jaran Desert', '腾格里沙漠': 'Tengger Desert',
  '古尔班通古特沙漠': 'Gurbantunggut Desert', '东欧平原': 'East European Plain', '西西伯利亚平原': 'West Siberian Plain', '亚马孙平原': 'Amazon Plain',
  '大兴安岭': 'Da Hinggan Ling', '伊朗高原': 'Iranian Plateau', '珠江三角洲': 'Zhujiang Delta', '台湾山脉': 'Taiwan Shan', '武陵山': 'Wuling Shan',
  '东非高原': 'East African Plateau', '南非高原': 'South African Plateau', '拉普拉塔平原': 'La Plata Plain', '墨西哥高原': 'Mexican Plateau'}
# hand-curated landforms missing from Natural Earth (China focus)
for z, lon, lat, s, rot, sp in [('内蒙古高原', 111, 42.6, 0.8, 0, 0.5), ('横断山脉', 99.3, 28.0, 0.6, -80, 0.6), ('唐古拉山脉', 92.0, 33.0, 0.5, -4, 0.6),
    ('冈底斯山脉', 83.5, 30.9, 0.5, -10, 0.6), ('巴颜喀拉山脉', 97.6, 34.1, 0.48, -12, 0.3), ('长白山', 128.1, 42.0, 0.45, 40, 0.2),
    ('长江中下游平原', 116.0, 30.4, 0.48, 0, 0.1), ('巴丹吉林沙漠', 101.8, 40.4, 0.45, 0, 0.1), ('腾格里沙漠', 104.4, 38.3, 0.45, 0, 0.1),
    ('古尔班通古特沙漠', 87.5, 45.6, 0.42, 0, 0.0), ('东欧平原', 38, 55, 0.95, 0, 0.6), ('西西伯利亚平原', 74, 60, 0.95, 0, 0.5),
    ('亚马孙平原', -62, -4, 1.0, 0, 0.5), ('大兴安岭', 121.3, 49.0, 0.55, -65, 0.5), ('伊朗高原', 57, 32.5, 0.9, 0, 0.5),
    ('珠江三角洲', 113.3, 22.75, 0.34, 0, 0.0), ('台湾山脉', 121.05, 23.6, 0.32, -72, 0.0), ('武陵山', 109.4, 28.6, 0.38, -45, 0.2),
    ('中条山', 111.25, 35.05, 0.30, -22, 0.2), ('太岳山', 112.15, 36.45, 0.30, -70, 0.2), ('东非高原', 35, -2, 0.85, 0, 0.5), ('南非高原', 24, -26, 0.9, 0, 0.5), ('拉普拉塔平原', -60, -30, 0.8, 0, 0.3), ('墨西哥高原', -102.5, 24, 0.7, 0, 0.2)]:
    add('range' if '山' in z else 'land', z, HAND_EN.get(z, ''), lon, lat, s, rot, sp, 0)

# peaks
PK_FIX = {'Mount Washington': '华盛顿山', 'Denali': '德纳里峰', 'Mount Everest': '珠穆朗玛峰', 'K2': '乔戈里峰', 'Cerro Aconcagua': '阿空加瓜山'}
for f in load('ne_10m_geography_regions_elevation_points'):
    p = f['properties']
    if p['featurecla'] not in ('mountain',) or p['scalerank'] > 4: continue
    z = PK_FIX.get(p['name'], zh(p['name_zh']))
    if not z: continue
    el = 8848.86 if p['name'] == 'Mount Everest' else p['elevation']
    lon, lat = f['geometry']['coordinates']
    add('peak', z, f'{el:g}', lon, lat, 0.36 if p['scalerank'] > 1 else 0.42, 0, 0, p['scalerank'] - el / 1e4)

# islands
IS_FIX = {'TAIWAN': '台湾岛', 'LUZON': '吕宋岛', 'MINDANAO': '棉兰老岛', 'SUMATRA': '苏门答腊岛', 'BORNEO': '加里曼丹岛', 'NEW GUINEA': '新几内亚岛',
  'HONSHÜ': '本州岛', 'KYÜSHÜ': '九州岛', 'SHIKOKU': '四国岛', 'HOKKAIDÖ': '北海道岛', 'SAKHALIN': '库页岛', 'Tahiti': '塔希提岛', 'Myeik Arch.': '丹老群岛',
  'GREENLAND': '格陵兰岛', 'ICELAND': '冰岛', 'PHILIPPINES': '菲律宾群岛', 'JAPAN': '日本群岛', 'KIRIBATI': '', 'MELANESIA': '美拉尼西亚', 'POLYNESIA': '波利尼西亚',
  'MICRONESIA': '密克罗尼西亚', 'Spratly Islands': '', 'ARCHIPEL DES COMORES': '科摩罗群岛', 'SEYCHELLES': '塞舌尔群岛', 'Hawai‘i': '', 'FALKLAND IS.': '',
  'NEW ZEALAND': '', 'ARCTIC ARCHIPELAGO': '北极群岛', 'WEST INDIES': '西印度群岛', 'LABRADOR': '拉布拉多半岛', 'Nova Scotia': '', 'SVALBARD': '斯瓦尔巴群岛',
  'NEW BRITAIN': '新不列颠岛', 'Sicilia': '西西里岛', 'SRI LANKA': '', 'MADAGASCAR': '马达加斯加岛', 'TIERRA DEL FUEGO': '火地岛', 'RYÜKYÜ ISLANDS': '琉球群岛'}
for f in load('ne_10m_geography_regions_polys'):
    p = f['properties']
    if p['FEATURECLA'] not in ('Island', 'Island group') or p['SCALERANK'] > 3: continue
    z = IS_FIX.get(p['NAME'], zh(p['NAME_ZH']))
    if not z or z in ('南岛', '北岛'): continue
    g = shape(f['geometry']);
    if not g.is_valid: g = g.buffer(0)
    gg = max(g.geoms, key=lambda x: x.area) if g.geom_type == 'MultiPolygon' else g
    try: pt = polylabel(gg, tolerance=0.05)
    except Exception: pt = gg.representative_point()
    a = g.area * math.cos(math.radians(pt.y))
    s = max(0.36, min(0.95, 0.30 * a ** 0.25)) if p['FEATURECLA'] == 'Island group' else max(0.34, min(0.8, 0.28 * a ** 0.25))
    add('island', z, tc(p['NAME']), pt.x, pt.y, s, 0, 0.3 if p['FEATURECLA'] == 'Island group' else 0.05, p['SCALERANK'] - a / 100)

# lakes
LK_FIX = {'McLeod Bay': '', 'Whitefish Bay': '', 'Saginaw Bay': '', 'North Channel': '', 'Lake Tanganyika': '坦噶尼喀湖', 'Lake Geneva': '日内瓦湖',
  'Lough Neagh': '内伊湖', 'South Aral Sea': '咸海', 'North Aral Sea': '', 'Réservoir Manicouagan': '马尼夸根水库', 'Lake Zaysan': '斋桑湖', 'Lake Eyre North': '艾尔湖',
  'Hulun Nuur': '呼伦湖', 'Lake Chany': '', 'St. Marys River': '', 'Kaliningradskiy Zaliv': '', 'Zalew Wislany': '', 'Syvash': '', 'Laguna Madre': '',
  'Lake Manitoba': '马尼托巴湖', 'Ozero Yarroto Vtoroye': '', 'Ozero Yarroto Pervoye': '', 'Ozero Nerpich\'ye': '', 'Ozero Neyto': '', 'Ozero Yambuto': ''}
seenl = set()
for f in load('ne_10m_lakes'):
    p = f['properties']
    if p['scalerank'] > 4 or not p['name'] or p['featurecla'] == 'Reservoir' and p['scalerank'] > 2: continue
    z = LK_FIX.get(p['name'], zh(p['name_zh']))
    if not z or z in seenl: continue
    seenl.add(z)
    g = shape(f['geometry']);
    if not g.is_valid: g = g.buffer(0)
    gg = max(g.geoms, key=lambda x: x.area) if g.geom_type == 'MultiPolygon' else g
    try: pt = polylabel(gg, tolerance=0.02)
    except Exception: pt = gg.representative_point()
    add('lake', z, p['name'], pt.x, pt.y, 0.34 if p['scalerank'] > 1 else 0.40, 0, 0, p['scalerank'])
for z, lon, lat in [('洞庭湖', 112.9, 29.3), ('巢湖', 117.6, 31.55)]:
    add('lake', z, pyn(z[:-1]) + ' Hu', lon, lat, 0.34, 0, 0, 3)

# rivers: one label per named river, at the middle of its longest run, rotated along the course
RV = {'Chang Jiang': '长江', 'Yangtze': '长江', 'Jinsha': '金沙江', 'Huang': '黄河', 'Lancang': '澜沧江', 'Mekong': '湄公河', 'Yarlung': '雅鲁藏布江',
  'Brahmaputra': '布拉马普特拉河', 'Nu': '怒江', 'Salween': '萨尔温江', 'Ganges': '恒河', 'Indus': '印度河', 'Heilong Jiang': '黑龙江', 'Amur': '阿穆尔河',
  'Ertix': '额尔齐斯河', 'Irtysh': '额尔齐斯河', 'Ob': '鄂毕河', 'Yenisey': '叶尼塞河', 'Lena': '勒拿河', 'Volga': '伏尔加河', 'Danube': '多瑙河', 'Donau': '多瑙河',
  'Rhine': '莱茵河', 'Rhein': '莱茵河', 'Dnipro': '第聂伯河', 'Ural': '乌拉尔河', 'Amu  Darya': '阿姆河', 'Syr  Darya': '锡尔河', 'Euphrates': '幼发拉底河',
  'Tigris': '底格里斯河', 'Nile': '尼罗河', 'Congo': '刚果河', 'Niger': '尼日尔河', 'Zambezi': '赞比西河', 'Orange': '奥兰治河', 'Amazonas': '亚马孙河',
  'Paraná': '巴拉那河', 'Mississippi': '密西西比河', 'Missouri': '密苏里河', 'Ohio': '俄亥俄河', 'St. Lawrence': '圣劳伦斯河', 'Mackenzie': '马更些河',
  'Yukon': '育空河', 'Colorado': '科罗拉多河', 'Rio Grande': '格兰德河', 'Murray': '墨累河', 'Darling': '达令河', 'Orinoco': '奥里诺科河', 'Ayeyarwady': '伊洛瓦底江',
  'Kolyma': '科雷马河', 'Angara': '安加拉河', 'Selenga': '色楞格河', 'Columbia': '哥伦比亚河', 'Nelson': '纳尔逊河', 'Vistula': '维斯瓦河', 'Elbe': '易北河',
  'Loire': '卢瓦尔河', 'Godävari': '戈达瓦里河', 'Xi': '西江', 'Tocantins': '托坎廷斯河', 'São  Francisco': '圣弗朗西斯科河', 'Madeira': '马代拉河',
  'Negro': '内格罗河', 'Ucayali': '乌卡亚利河', 'Lualaba': '卢阿拉巴河', 'Ubangi': '乌班吉河', 'Benue': '贝努埃河', 'Sénégal': '塞内加尔河', 'Volta': '沃尔特河',
  'Tobol': '托博尔河', 'Pechora': '伯朝拉河', 'Severnaya Dvina': '北德维纳河', 'Oder': '奥得河', 'Snake': '斯内克河', 'Arkansas': '阿肯色河', 'Peace': '皮斯河',
  'Athabasca': '阿萨巴斯卡河', 'Saskatchewan': '萨斯喀彻温河', 'Fraser': '弗雷泽河', 'Indigirka': '因迪吉尔卡河', 'Aldan': '阿尔丹河', 'Lower Tunguska': '下通古斯卡河',
  'Hongshui': '红水河', 'Tongtian': '通天河', 'Abay': '青尼罗河', 'El Bahr el Azraq': '青尼罗河', 'El Bahr el Abyad': '白尼罗河', 'Xingu': '欣古河', 'Tapajós': '塔帕若斯河',
  'Magdalena': '马格达莱纳河', 'Tennessee': '田纳西河', 'Seine': '塞纳河', 'Tajo': '塔霍河', 'Ebro': '埃布罗河', 'Neva': '涅瓦河', 'Kasai': '开赛河', 'Vaal': '瓦尔河'}
# a few major Chinese rivers are not named in the 10m centreline layer; add explicit label points
runs = {}
for f in json.load(open(D + 'ne_10m_rivers_lake_centerlines.geojson'))['features']:
    p = f['properties']; z = RV.get(p['name'] or '')
    if not z or p['scalerank'] > 6: continue
    gm = f['geometry']; lines = gm['coordinates'] if gm['type'] == 'MultiLineString' else [gm['coordinates']]
    for ln in lines:
        ln = np.array(ln)
        if len(ln) < 4: continue
        k = np.cos(np.radians(ln[:, 1].mean()))
        seg = np.hypot(np.diff(ln[:, 0]) * k, np.diff(ln[:, 1])); L_ = seg.sum()
        if L_ > runs.get(z, (0,))[0]: runs[z] = (L_, ln, seg, p['scalerank'], p['name'])
for z, (L_, ln, seg, sr, rname) in runs.items():
    if L_ < 2.5: continue
    cs = np.cumsum(seg); i = int(np.searchsorted(cs, L_ * 0.5))
    j0 = max(0, i - 6); j1 = min(len(ln) - 1, i + 6)
    k = math.cos(math.radians(ln[i, 1]))
    ang = math.degrees(math.atan2(ln[j1, 1] - ln[j0, 1], (ln[j1, 0] - ln[j0, 0]) * k))
    if ang > 90: ang -= 180
    if ang < -90: ang += 180
    # offset label slightly to the side of the river so it doesn't sit on the line
    nx, ny = -math.sin(math.radians(ang)), math.cos(math.radians(ang))
    s = 0.40 if sr <= 2 else 0.34
    add('river', z, {'长江': 'Chang Jiang', '黄河': 'Huang He', '金沙江': 'Jinsha Jiang', '澜沧江': 'Lancang Jiang', '雅鲁藏布江': 'Yarlung Zangbo Jiang', '怒江': 'Nu Jiang',
        '黑龙江': 'Heilong Jiang', '额尔齐斯河': 'Ertix He', '西江': 'Xi Jiang', '红水河': 'Hongshui He', '通天河': 'Tongtian He'}.get(z, rname), ln[i, 0] + nx * s * 0.75 / k, ln[i, 1] + ny * s * 0.75, s, -ang, 0.25, sr - L_ / 100)
for z, lon, lat, rot in [('珠江', 113.6, 22.95, 0), ('淮河', 116.5, 32.9, -10), ('松花江', 127.5, 46.3, 15), ('辽河', 122.5, 42.6, 60), ('嫩江', 124.3, 48.0, -75),
                         ('塔里木河', 84.0, 41.1, 5), ('海河', 117.0, 39.3, 0), ('汉江', 110.8, 32.6, 20), ('嘉陵江', 106.0, 31.3, -70), ('乌苏里江', 133.5, 46.5, -60),
                         ('鸭绿江', 125.2, 40.7, 40), ('雅砻江', 101.3, 29.5, -80)]:
    add('river', z, pyn(z[:-1]) + (' Jiang' if z.endswith('江') else ' He'), lon, lat, 0.32, rot, 0.2, 5)

# ---- v6: denser Chinese cities from the DataV admin list (pop from GeoNames via loc_v4)
gz = json.load(gzip.open('assets/loc_v4.json.gz'))['gaz']
have = set(r[1] for r in L if r[0] in ('city', 'capital', 'pcap'))
def short(n): return re.sub(r'(市)$', '', n)
ncn = 0
for r in gz:
    nm, pyk, ci, lon, lat, t, pop = r[:7]
    if t not in (1, 2) or not nm.endswith('市'): continue
    z = short(nm)
    if z in have or len(z) > 4: continue
    if t == 2 and pop < 150000: continue
    have.add(z)
    add('city', z, pyn(z), lon, lat, 0.30 if t == 1 else 0.28, 0, 0, -(pop or (300000 if t == 1 else 100000)) / (1 if t == 1 else 3), 0 if t == 1 else 1); ncn += 1
# world cities > 400k (GeoNames, zh names) for deeper zoom levels
nw = 0
for r in gz:
    if r[5] not in (3, 4) or r[6] < 400000 or len(r) < 8: continue
    z = r[0]
    if z in have or not re.search(r'[\u4e00-\u9fff]', z) or len(z) > 6: continue
    if any(abs(q[3] - r[3]) < 0.3 and abs(q[4] - r[4]) < 0.3 for q in L if q[0] in ('city', 'capital', 'pcap')): continue
    have.add(z); add('city', z, r[7], r[3], r[4], 0.28, 0, 0, -r[6], 1 if r[6] > 1e6 else 2); nw += 1
print('extra cn cities', ncn, 'world', nw)
vec = {
  'countries': topo, 'props': props,
  'provLines': provLines,
  'rivers': rivers, 'lakes': lakes, 'glaciers': glaciers,
  'ninedash': {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'properties': {}, 'geometry': f['geometry']} for f in nd]},
  'labels': L,
}
json.dump(vec, open('assets/vectors_v6.json', 'w'), separators=(',', ':'), ensure_ascii=False)
import collections
print('labels', len(L), collections.Counter(r[0] for r in L))
print('size MB', os.path.getsize('assets/vectors_v6.json') / 1e6)
chars = set(''.join(r[1] + r[2] for r in L) + ''.join(p['zh'] + p['cap'] + p['cont'] for p in props.values()))
open('assets/label_chars_v6.txt', 'w').write(''.join(sorted(chars)))
print('unique chars', len(chars))
