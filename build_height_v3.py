# v3 height: ETOPO1 2-arcmin -> 8192x4096 (row0 = south), mild unsharp mask for the "molded" look
import netCDF4 as nc, numpy as np, sys
from scipy.ndimage import gaussian_filter, map_coordinates
W=8192; H=4096
a=nc.Dataset('data/etopo1_2m.nc').variables['altitude'][:].astype(np.float32)[:, :10800]  # lat -90..90, lon -180..180
ratio=10800/W
a=gaussian_filter(a, sigma=0.42*ratio, mode=('nearest','wrap'))
step=360/10800
lon=-180+(np.arange(W)+0.5)*360/W; lat=-90+(np.arange(H)+0.5)*180/H
R,C=np.meshgrid((lat+90)/step,(lon+180)/step,indexing='ij')
h=map_coordinates(a,[R,C],order=1,mode='grid-wrap').astype(np.float32)
# unsharp mask (land stronger than sea) -> crisper ridges/valleys
blur=gaussian_filter(h, sigma=3.0, mode=('nearest','wrap'))
amt=np.where(h>0, 0.45, 0.25)
hs=h+amt*(h-blur)
hs=np.where((h>0)!=(hs>0), h, hs)  # never flip land/sea at coasts
np.save('data/height_8192.npy', np.clip(np.round(hs),-11000,9000).astype(np.int16))
print(hs.min(), hs.max())
