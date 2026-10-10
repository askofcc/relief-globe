# minimal TopoJSON -> GeoJSON features (for Python-side area/centroid use)
def features(topo, obj='countries'):
    tr = topo.get('transform'); arcs = []
    for a in topo['arcs']:
        x = y = 0; pts = []
        for p in a:
            if tr:
                x += p[0]; y += p[1]
                pts.append([x * tr['scale'][0] + tr['translate'][0], y * tr['scale'][1] + tr['translate'][1]])
            else: pts.append(p)
        arcs.append(pts)
    def arc(i): return arcs[i] if i >= 0 else arcs[~i][::-1]
    def ring(r):
        out = []
        for i in r:
            a = arc(i); out.extend(a if not out else a[1:])
        return out
    feats = []
    for g in topo['objects'][obj]['geometries']:
        if g['type'] == 'Polygon': geom = {'type': 'Polygon', 'coordinates': [ring(r) for r in g['arcs']]}
        elif g['type'] == 'MultiPolygon': geom = {'type': 'MultiPolygon', 'coordinates': [[ring(r) for r in p] for p in g['arcs']]}
        else: continue
        feats.append({'type': 'Feature', 'id': g.get('id'), 'properties': g.get('properties', {}), 'geometry': geom})
    return feats
