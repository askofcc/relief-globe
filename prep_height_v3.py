# Encode the 8192x4096 height for v3: quantise (land 4 m, sea 20 m), 2D gradient predictor,
# residual+128 as lossless grayscale WebP (browser-native decoder) + gz list of escapes (|r|>127).
import numpy as np, io, gzip
from PIL import Image
h=np.load('data/height_8192.npy').astype(np.int32)   # row0 = south
q=np.where(h>=0,np.round(h/4),np.round(h/20)).astype(np.int32)
p=np.zeros_like(q); p[1:,1:]=q[1:,:-1]+q[:-1,1:]-q[:-1,:-1]; p[0,1:]=q[0,:-1]; p[1:,0]=q[:-1,0]
r=q-p
g=np.clip(r+128,0,255).astype(np.uint8)
Image.fromarray(g).save('assets/height_8192_resid.webp','WEBP',lossless=True,method=6,quality=100)
idx=np.flatnonzero((r<-128)|(r>127)).astype(np.int64)
vals=r.ravel()[idx].astype(np.int32)
d=np.diff(idx,prepend=0).astype('<u4')
blob=np.concatenate([np.array([len(idx)],dtype='<u4'),d,vals.astype('<i4').view('<u4')]).astype('<u4').tobytes()
open('assets/height_8192_esc.bin.gz','wb').write(gzip.compress(blob,9))
# verify roundtrip
g2=np.array(Image.open('assets/height_8192_resid.webp').convert('L')).astype(np.int32)-128
rr=g2.ravel().copy(); rr[idx]=vals; rr=rr.reshape(q.shape)
assert (rr==r).all(), 'mismatch'
print('ok', len(idx))
