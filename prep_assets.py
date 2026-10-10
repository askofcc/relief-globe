import numpy as np, gzip, json
from PIL import Image
h=np.load('data/height_4096.npy').astype(np.int32)   # row0 = south, 4096x2048
q=np.where(h>=0, np.round(h/4), np.round(h/20)).astype(np.int32)
p=np.zeros_like(q); p[1:,1:]=q[1:,:-1]+q[:-1,1:]-q[:-1,:-1]; p[0,1:]=q[0,:-1]; p[1:,0]=q[:-1,0]
r=(q-p).astype('<i2')
open('assets/height_4096x2048_pred2d_i16.gz','wb').write(gzip.compress(r.tobytes(),9))
Image.open('data/bm_jul.jpg').convert('RGB').resize((4096,2048),Image.LANCZOS).save('assets/bluemarble_jul_4096.jpg',quality=86,optimize=True)
def rnd(c):
    if isinstance(c,(int,float)): return round(c,2)
    return [rnd(x) for x in c]
def slim(fn,keep):
    g=json.load(open(fn)); out=[]
    for f in g['features']:
        if not f.get('geometry'): continue
        out.append({'type':'Feature','properties':{k:f['properties'].get(k) for k in keep},'geometry':{'type':f['geometry']['type'],'coordinates':rnd(f['geometry']['coordinates'])}})
    return {'type':'FeatureCollection','features':out}
vec={'countries':json.load(open('data/countries-50m.json')),
     'lakes':slim('data/ne_50m_lakes.geojson',['scalerank']),
     'rivers':slim('data/ne_50m_rivers_lake_centerlines.geojson',['scalerank']),
     'glaciers':slim('data/ne_50m_glaciated_areas.geojson',[])}
json.dump(vec,open('assets/vectors.json','w'),separators=(',',':'))
