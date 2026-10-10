# Low/medium elevation for progressive loading (v5): box-downsampled metres -> quantised (land 4 m / sea 20 m)
# -> 2D gradient predictor residuals as little-endian int16 -> gzip.  Row 0 = south, same as the 8K asset.
import numpy as np, gzip
h = np.load('data/height_8192.npy').astype(np.float64)
for f in (4, 2):
    H, W = h.shape[0] // f, h.shape[1] // f
    m = h.reshape(H, f, W, f).mean(axis=(1, 3))
    q = np.where(m >= 0, np.round(m / 4), np.round(m / 20)).astype(np.int32)
    p = np.zeros_like(q); p[1:, 1:] = q[1:, :-1] + q[:-1, 1:] - q[:-1, :-1]; p[0, 1:] = q[0, :-1]; p[1:, 0] = q[:-1, 0]
    r = (q - p); assert r.min() >= -32768 and r.max() < 32768
    open(f'assets/height_{W}_pred.i16.gz', 'wb').write(gzip.compress(r.astype('<i2').tobytes(), 9))
    import os; print(W, os.path.getsize(f'assets/height_{W}_pred.i16.gz') / 1e6, 'MB', 'checksum', int((q.ravel()[::997].astype(np.int64)).sum()))
