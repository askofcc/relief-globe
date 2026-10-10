# v6 gazetteer: loc_v4.json.gz + hand-added North-China mountains (Natural Earth has only ~390 peaks worldwide)
# + fix: the Natural Earth river mapped to "黔江" also contains an unrelated northern part (Henan/Shaanxi), drop it.
# Coordinates/elevations are approximate public-reference values (rounded), good enough for "direction + distance" lists.
import gzip, json
d = json.loads(gzip.open('assets/loc_v4.json.gz').read())
feats = d['feats']
for f in feats:
    if f[1] == '黔江' and f[2] == 1:
        f[4] = [p for p in f[4] if max(p[1::2]) / 100 < 27]
HAND = [  # cat, name, w, lon, lat, elevation (m, '' for ranges)
    ('山峰', '恒山', 2.6, 113.73, 39.67, '2017'),
    ('山峰', '小五台山', 2.8, 115.03, 39.97, '2882'),
    ('山峰', '芦芽山', 2.5, 111.93, 38.73, '2772'),
    ('山峰', '关帝山', 2.5, 111.47, 37.85, '2831'),
    ('山峰', '霍山（太岳山）', 2.5, 112.05, 36.58, '2347'),
    ('山峰', '历山（舜王坪）', 2.5, 111.96, 35.43, '2322'),
    ('山峰', '王屋山', 2.3, 112.27, 35.17, '1715'),
    ('山峰', '嵩山', 2.4, 113.04, 34.48, '1512'),
    ('山峰', '云丘山', 2.0, 110.98, 35.88, '1629'),
    ('山脉', '中条山', 2.5, 111.20, 35.00, ''),
    ('山脉', '太岳山', 2.4, 112.10, 36.55, ''),
]
have = {(f[0], f[1]) for f in feats}
for cat, name, w, lon, lat, e in HAND:
    if (cat, name) not in have: feats.append([cat, name, 0, w, lon, lat, e])
d['feats'] = feats
gzip.open('assets/loc_v6.json.gz', 'wb', 9).write(json.dumps(d, ensure_ascii=False, separators=(',', ':')).encode())
print('feats', len(feats))
