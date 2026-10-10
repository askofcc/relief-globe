import * as THREE from 'three';
import { geoEquirectangular, geoContains } from 'd3-geo';
import { BASE_W, PPD0, prepareWorld, layoutLabels, drawFills, drawLines, drawLabels, drawGridLabels, drawIce } from './print.js';
import { CURRENTS, currentLabelRows, drawCurrents, drawLegend, legendReserve, legendPanel, LEGEND } from './extras.js';
import { Gazetteer, gpsLocate, ipLocate, hav, bearing, dirName, fmtLL, fmtKm } from './loc.js';

const $ = (id) => document.getElementById(id);
// ---- web build: assets are separate files (Workers static assets limit), fetched with a progress bar
const ASSET = {};
const STAGE = [['正在载入字体', 0.80], ['正在解码', 0.82], ['正在构建高程纹理', 0.88], ['正在排版', 0.91], ['正在印制政区', 0.93], ['正在印制注记', 0.95], ['正在加载卫星', 0.97]];
function setProgress(f) { const b = document.getElementById('lp-bar'), n = document.getElementById('lp-pct'); if (b) b.style.width = (f * 100).toFixed(1) + '%'; if (n) n.textContent = Math.round(f * 100) + '%'; }
const setStatus = (t) => { const el = $('loading-text'); if (el) el.textContent = t; const st = STAGE.find(([k]) => t.startsWith(k)); if (st) setProgress(st[1]); };
async function fetchPart(url, size, onBytes) {
  let lastErr;
  for (let attempt = 0; attempt < 3; attempt++) {
    let counted = 0;
    try {
      const r = await fetch(url); if (!r.ok) throw new Error(`HTTP ${r.status} ${url}`);
      const out = new Uint8Array(size); let off = 0; const rd = r.body.getReader();
      for (;;) {
        const { done, value } = await rd.read(); if (done) break;
        if (off + value.length > out.length) throw new Error('size mismatch ' + url);
        out.set(value, off); off += value.length; counted += value.length; onBytes && onBytes(value.length);
      }
      if (off !== size) throw new Error('size mismatch ' + url);
      return out;
    } catch (e) { lastErr = e; onBytes && onBytes(-counted); await new Promise((r) => setTimeout(r, 800 * (attempt + 1))); }
  }
  throw lastErr;
}
async function fetchAsset(id, onBytes) {
  const m = window.__MANIFEST[id];
  const parts = await Promise.all(m.parts.map(([u, n]) => fetchPart(u, n, onBytes)));
  if (parts.length === 1) return parts[0];
  const all = new Uint8Array(m.size); let o = 0; for (const p of parts) { all.set(p, o); o += p.length; } return all;
}
// first paint only needs the small "core" set (~6 MB); 8K elevation + imagery stream in afterwards
const CORE = ['d-h2k', 'd-font-sans-r', 'd-font-sans-b', 'd-font-serif-b', 'd-loc', 'd-vectors'];
async function preloadAssets() {
  const man = window.__MANIFEST; if (!man) return;
  const total = CORE.reduce((a, id) => a + man[id].size, 0); let got = 0; const t0 = performance.now();
  const mb = (x) => (x / 1048576).toFixed(1);
  const tick = (n) => { got += n; setProgress(0.78 * got / total); const el = document.getElementById('lp-mb'); if (el) el.textContent = `${mb(got)} / ${mb(total)} MB`; };
  setStatus('正在下载地图数据…'); tick(0);
  await Promise.all(CORE.map(async (id) => { ASSET[id] = await fetchAsset(id, tick); }));
  window.__dlSeconds = (performance.now() - t0) / 1000;
}
const assetText = (id) => new TextDecoder().decode(ASSET[id]);
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
const D2R = Math.PI / 180;

function b64ToBytes(id) {
  if (ASSET[id]) return ASSET[id];
  const bin = atob($(id).textContent.trim());
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
async function gunzip(bytes) {
  const ds = new DecompressionStream('gzip');
  return new Response(new Blob([bytes]).stream().pipeThrough(ds)).arrayBuffer();
}
async function loadFonts() {
  const list = [['RGSans', 'd-font-sans-r', 400], ['RGSansB', 'd-font-sans-b', 700], ['RGSerifB', 'd-font-serif-b', 700]];
  await Promise.all(list.map(async ([fam, id, w]) => {
    try {
      const ff = new FontFace(fam, b64ToBytes(id).buffer, { weight: String(w) });
      await ff.load(); document.fonts.add(ff);
    } catch (e) { console.warn('font', fam, e); }
  }));
}

// ---------------------------------------------------------------- height (8192 x 4096, lossless)
let HW = 8192, HH = 4096;
// Height decoding + half-float mip building runs in a Web Worker so the page stays responsive.
const HEIGHT_WORKER = `
const toHalf = (() => { const f = new Float32Array(1), u = new Uint32Array(f.buffer);
  return (v) => { f[0] = v; const x = u[0], s = (x >>> 16) & 0x8000; let e = ((x >>> 23) & 0xff) - 112, m = x & 0x7fffff;
    if (e <= 0) return s; if (e > 30) return s | 0x7c00; return s | (e << 10) | ((m + 0x1000) >>> 13); }; })();
function unpredict(q, W, H) { for (let y = 0; y < H; y++) { const o = y * W; for (let x = 0; x < W; x++) { let p;
  if (y === 0) p = x === 0 ? 0 : q[o + x - 1]; else if (x === 0) p = q[o - W]; else p = q[o + x - 1] + q[o - W + x] - q[o - W + x - 1]; q[o + x] += p; } } }
async function gunzip(b) { return new Response(new Blob([b]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer(); }
onmessage = async (ev) => { try {
  const { kind, W, H, bytes, esc, maxTex } = ev.data; let q;
  if (kind === 'i16') { q = new Int16Array(await gunzip(bytes)); }
  else {
    const bmp = await createImageBitmap(new Blob([bytes], { type: 'image/webp' }), { colorSpaceConversion: 'none', premultiplyAlpha: 'none' });
    const cv = new OffscreenCanvas(W, H); const cx = cv.getContext('2d', { willReadFrequently: true }); cx.drawImage(bmp, 0, 0); bmp.close();
    const px = cx.getImageData(0, 0, W, H).data; q = new Int16Array(W * H); for (let i = 0, j = 0; i < q.length; i++, j += 4) q[i] = px[j] - 128;
    const e = new Uint32Array(await gunzip(esc)); const n = e[0]; let idx = 0; const vals = new Int32Array(e.buffer, 4 + n * 4, n);
    for (let i = 0; i < n; i++) { idx += e[1 + i]; q[idx] = vals[i]; }
  }
  unpredict(q, W, H);
  let sum = 0; for (let i = 0; i < q.length; i += 997) sum = (sum + q[i] * 31 + 7) | 0;
  // half-float mip chain (levels larger than maxTex are skipped)
  let w = W, h = H, cur = new Float32Array(w * h); for (let i = 0; i < cur.length; i++) { const v = q[i]; cur[i] = v >= 0 ? v * 4 : v * 20; }
  let skip = 0; while ((W >> skip) > maxTex) skip++;
  const mips = [];
  for (;;) {
    if (skip === 0) { const hf = new Uint16Array(w * h); for (let i = 0; i < cur.length; i++) hf[i] = toHalf(cur[i]); mips.push({ data: hf, width: w, height: h }); }
    if (w === 1 && h === 1) break;
    const nw = Math.max(1, w >> 1), nh = Math.max(1, h >> 1), nx = new Float32Array(nw * nh);
    for (let y = 0; y < nh; y++) { const y0 = Math.min(h - 1, y * 2) * w, y1 = Math.min(h - 1, y * 2 + 1) * w;
      for (let x = 0; x < nw; x++) { const x0 = Math.min(w - 1, x * 2), x1 = Math.min(w - 1, x * 2 + 1); nx[y * nw + x] = 0.25 * (cur[y0 + x0] + cur[y0 + x1] + cur[y1 + x0] + cur[y1 + x1]); } }
    cur = nx; w = nw; h = nh; if (skip > 0) skip--;
  }
  postMessage({ q, mips, W, H, sum }, [q.buffer, ...mips.map((m) => m.data.buffer)]);
} catch (e) { postMessage({ error: String(e && e.message || e) }); } };
`;
function decodeHeight(job) {
  return new Promise((res, rej) => {
    const url = URL.createObjectURL(new Blob([HEIGHT_WORKER], { type: 'text/javascript' }));
    const w = new Worker(url); URL.revokeObjectURL(url);
    w.onmessage = (e) => { w.terminate(); if (e.data.error) rej(new Error(e.data.error)); else res(e.data); };
    w.onerror = (e) => { w.terminate(); rej(new Error(e.message || 'worker error')); };
    const tr = [job.bytes.buffer]; if (job.esc) tr.push(job.esc.buffer);
    w.postMessage(job, tr);
  });
}
function heightTexture(mips) {
  const tex = new THREE.DataTexture(mips[0].data, mips[0].width, mips[0].height, THREE.RedFormat, THREE.HalfFloatType);
  tex.mipmaps = mips; tex.generateMipmaps = false;
  tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter;
  tex.wrapS = THREE.RepeatWrapping; tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.colorSpace = THREE.NoColorSpace; tex.needsUpdate = true;
  return { tex, w: mips[0].width, h: mips[0].height };
}

function makeCanvas(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function canvasTex(c, renderer, srgb = true, premul = true, wrap = true) {
  const t = new THREE.CanvasTexture(c);
  t.premultiplyAlpha = premul;
  t.wrapS = wrap ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping; t.wrapT = THREE.ClampToEdgeWrapping;
  t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.minFilter = THREE.LinearMipmapLinearFilter; t.generateMipmaps = true;
  return t;
}
const baseProj = (W) => geoEquirectangular().scale(W / (2 * Math.PI)).translate([W / 2, W / 4]).precision(0.08);

// ---------------------------------------------------------------- procedural studio environment
function studioEnv(renderer) {
  const s = new THREE.Scene();
  const room = new THREE.Mesh(new THREE.SphereGeometry(20, 64, 32), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: `varying vec3 vP; void main(){ float y = normalize(vP).y;
      vec3 top = vec3(0.95,0.93,0.90), mid = vec3(0.62,0.58,0.53), flo = vec3(0.30,0.24,0.18);
      vec3 c = y > 0.0 ? mix(mid, top, pow(y, 0.7)) : mix(mid, flo, pow(-y, 0.6));
      gl_FragColor = vec4(c * 0.85, 1.0); }`,
  }));
  s.add(room);
  const box = (w, h, x, y, z, I, col = 0xffffff) => {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(I), side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.lookAt(0, 0, 0); s.add(m);
  };
  box(9, 6, -9, 8, 9, 8.5, 0xfff4e6);     // big key softbox (upper left front)
  box(2.2, 10, 12, 2, 5, 2.6, 0xeaf2ff);  // strip light right
  box(14, 4, 0, 14, -2, 1.6);             // ceiling bounce
  box(6, 5, 3, 3, -14, 1.2, 0xfff0e0);    // window behind
  const pm = new THREE.PMREMGenerator(renderer);
  const env = pm.fromScene(s, 0.035).texture; pm.dispose();
  return env;
}
// soft blurred "classroom" backdrop painted procedurally (CSS background)
function paintBackdrop() {
  const W = 1600, H = 1000, c = makeCanvas(W, H), x = c.getContext('2d');
  let g = x.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#d9d2c4'); g.addColorStop(0.55, '#e9e2d5'); g.addColorStop(1, '#cdbba0');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  // chalkboard-green blur and warm window light, bokeh discs
  const blob = (cx, cy, r, col) => { const gg = x.createRadialGradient(cx, cy, 0, cx, cy, r); gg.addColorStop(0, col); gg.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = gg; x.fillRect(cx - r, cy - r, 2 * r, 2 * r); };
  blob(1250, 260, 520, 'rgba(70,95,85,0.38)'); blob(1350, 380, 360, 'rgba(60,85,75,0.30)');
  blob(230, 230, 480, 'rgba(255,248,228,0.85)'); blob(560, 120, 320, 'rgba(255,250,235,0.6)');
  blob(150, 700, 420, 'rgba(185,140,90,0.35)');
  const rnd = (s => () => (s = (s * 16807) % 2147483647) / 2147483647)(7);
  for (let i = 0; i < 26; i++) { const r = 20 + rnd() * 60; blob(rnd() * W, rnd() * H * 0.62, r, `rgba(255,${235 + rnd() * 20 | 0},${200 + rnd() * 40 | 0},${0.12 + rnd() * 0.16})`); }
  return c.toDataURL('image/jpeg', 0.9);
}
function woodTexture() {
  const W = 2048, H = 1024, c = makeCanvas(W, H), x = c.getContext('2d');
  x.fillStyle = '#c99d6c'; x.fillRect(0, 0, W, H);
  const rnd = (s => () => (s = (s * 16807) % 2147483647) / 2147483647)(11);
  for (let i = 0; i < 520; i++) {
    const y = rnd() * H, a = 0.03 + rnd() * 0.07, w = 1 + rnd() * 5;
    x.strokeStyle = rnd() < 0.5 ? `rgba(120,75,35,${a})` : `rgba(240,205,160,${a})`; x.lineWidth = w;
    x.beginPath(); x.moveTo(0, y);
    for (let X = 0; X <= W; X += 64) x.lineTo(X, y + Math.sin(X * 0.004 + i) * 6 + Math.sin(X * 0.019 + i * 3) * 2);
    x.stroke();
  }
  // plank seams
  x.fillStyle = 'rgba(90,55,25,0.35)'; for (const y of [250, 520, 790]) x.fillRect(0, y, W, 3);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  return t;
}
// meridian ring graduation texture (u: 0..1 along 180 deg from N pole to S pole, v across the band)
function ringTexture() {
  const W = 4096, H = 160, c = makeCanvas(W, H), x = c.getContext('2d');
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, W, H);
  x.fillStyle = '#3a3f46'; x.strokeStyle = '#3a3f46';
  for (let d = 0; d <= 180; d++) {
    const u = d / 180 * W; const lat = 90 - d; const L = lat % 10 === 0 ? 0.42 : lat % 5 === 0 ? 0.28 : 0.16;
    x.fillRect(u - (lat % 10 === 0 ? 2.2 : 1.3), H - L * H, lat % 10 === 0 ? 4.4 : 2.6, L * H);
  }
  x.font = `bold ${H * 0.36}px Arial, sans-serif`; x.textAlign = 'center'; x.textBaseline = 'middle';
  for (let d = 0; d <= 180; d += 10) {
    const lat = Math.abs(90 - d); if (lat === 90) continue;
    x.save(); x.translate(d / 180 * W, H * 0.30); x.fillText(String(lat), 0, 0); x.restore();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

// ---------------------------------------------------------------- app
const params = { exag: 40, mode: 0, labels: true, grid: true, autoRotate: true, en: true, extras: true, local: true };
// adaptive quality: phones / low-memory devices get smaller textures, capped pixel ratio and no 8K upgrade
const QUALITY = (() => {
  const forced = (location.search.match(/[?&]q=(low|med|high)/) || [])[1];
  const mobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || (matchMedia('(pointer: coarse)').matches && Math.min(screen.width, screen.height) < 820);
  const mem = navigator.deviceMemory || 8;
  let tier = forced || (mem <= 2 ? 'low' : (mobile || mem <= 4) ? 'med' : 'high');
  return { tier, mobile, dpr: tier === 'high' ? 2 : tier === 'med' ? 1.5 : 1, height: tier === 'high' ? 'd-h8k' : tier === 'med' ? 'd-h4k' : null,
    overlay: tier === 'high' ? 8192 : 4096, win: tier === 'high' ? 4096 : 2048, seg: tier === 'high' ? [1024, 512] : tier === 'med' ? [768, 384] : [512, 256], shadow: tier === 'high' ? 2048 : 1024 };
})();
window.__quality = QUALITY;

async function main() {
  const canvas = $('c');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, QUALITY.dpr));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.toneMapping = THREE.NeutralToneMapping; renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  document.body.style.backgroundImage = `url(${paintBackdrop()})`;

  const scene = new THREE.Scene();
  scene.environment = studioEnv(renderer);
  const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.02, 100);
  const key = new THREE.DirectionalLight(0xfff1dc, 2.1); scene.add(key); scene.add(key.target);
  key.castShadow = true; key.shadow.mapSize.set(QUALITY.shadow, QUALITY.shadow); key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02; key.shadow.radius = 6;
  Object.assign(key.shadow.camera, { left: -2.6, right: 2.6, top: 2.6, bottom: -2.6, near: 0.5, far: 16 });
  const fill = new THREE.DirectionalLight(0xdce8ff, 0.6); scene.add(fill);
  const rim = new THREE.DirectionalLight(0xffffff, 0.55); scene.add(rim);
  scene.add(new THREE.HemisphereLight(0xf2f4ff, 0x9a8466, 0.35));

  await preloadAssets();
  setStatus('正在载入字体…'); await loadFonts(); await nextFrame();
  setStatus('正在解码高程数据…'); await nextFrame();
  const maxTex = renderer.capabilities.maxTextureSize;
  HW = 2048; HH = 1024;
  const lo = await decodeHeight({ kind: 'i16', W: 2048, H: 1024, bytes: ASSET['d-h2k'], maxTex: Math.min(8192, maxTex) });
  delete ASSET['d-h2k'];
  let H8 = heightTexture(lo.mips);
  let heightTex = H8.tex;
  let Hq = lo.q; // quantised heights kept for CPU look-ups (pin height, elevation read-out)
  window.__hres = 2048;

  setStatus('正在排版地图注记…'); await nextFrame();
  const vec = JSON.parse(assetText('d-vectors'));
  const gaz = new Gazetteer(JSON.parse(new TextDecoder().decode(await gunzip(b64ToBytes('d-loc')))));
  const world = prepareWorld(vec);
  // label layouts per zoom level (smaller text relative to the map => more names fit without overlap)
  const LROWS = vec.labels.concat(currentLabelRows());
  const LEVELS = [{ g: 1, lvl: 0 }, { g: 0.75, lvl: 0 }, { g: 0.55, lvl: 1 }, { g: 0.4, lvl: 2 }];
  const layouts = [];
  const getLayout = (i) => layouts[i] || (layouts[i] = layoutLabels(LROWS, LEVELS[i].g, LEVELS[i].lvl, legendReserve()));
  const placed = getLayout(0);
  window.__labelsPlaced = placed.length;

  setStatus('正在印制政区底图…'); await nextFrame();
  const OW = Math.min(QUALITY.overlay, maxTex), OH = OW / 2, FW = Math.min(4096, maxTex), FH = FW / 2;
  const fillC = makeCanvas(FW, FH);
  drawFills(fillC.getContext('2d'), baseProj(FW), FW, FH, FW / 360, world);
  const fillTex = canvasTex(fillC, renderer, true, true);
  const iceC = makeCanvas(2048, 1024); drawIce(iceC.getContext('2d'), baseProj(2048), 2048, 1024, vec);
  const iceTex = canvasTex(iceC, renderer, false, false);
  const overC = makeCanvas(OW, OH);
  const drawOverlayBase = () => {
    const ctx = overC.getContext('2d'); ctx.clearRect(0, 0, OW, OH);
    const proj = baseProj(OW); const f = OW / BASE_W;
    drawLines(ctx, proj, OW, OH, OW / 360, world, { grid: params.grid });
    if (params.extras) drawCurrents(ctx, proj, OW / 360);
    if (params.grid) drawGridLabels(ctx, (lon, lat) => proj([lon, lat]), f, null, OW);
    if (params.labels) drawLabels(ctx, placed.filter((it) => params.extras || !it.cls.startsWith('cur')), (lon, lat) => proj([lon, lat]), f, null, OW, 1, params.en);
    if (params.extras) drawLegend(ctx, proj, OW / 360);
  };
  setStatus('正在印制注记…'); await nextFrame();
  drawOverlayBase();
  const overTex = canvasTex(overC, renderer, true, true);

  setStatus('正在加载卫星影像…'); await nextFrame();
  const satTex = new THREE.Texture(makeCanvas(1, 1)); satTex.colorSpace = THREE.SRGBColorSpace; satTex.needsUpdate = true;
  const loadSat = async () => { // satellite imagery is only needed for the 卫星 mode: fetched in the background
    try { const b = await fetchAsset('d-sat'); const img = new Image(); img.src = URL.createObjectURL(new Blob([b], { type: 'image/jpeg' })); await img.decode();
      satTex.dispose(); satTex.image = img; satTex.wrapS = THREE.RepeatWrapping; satTex.anisotropy = 8; satTex.needsUpdate = true; } catch (e) { console.warn('sat', e); }
  };

  // detail window (re-rendered at high resolution for the visible region when zoomed in)
  const WIN = QUALITY.win, WINF = QUALITY.win / 2;
  // one staging canvas pair, two GPU texture pairs: the new window cross-fades over the previous one (no pop when zooming)
  const winOverC = makeCanvas(WIN, WIN), winFillC = makeCanvas(WINF, WINF);
  const WSETS = [0, 1].map(() => ({ ot: canvasTex(winOverC, renderer, true, true, false), ft: canvasTex(winFillC, renderer, true, true, false), rect: new THREE.Vector4(0, 0, 1, 1) }));
  let wCur = 0; const winFade = { want: 0 };
  const winOverTex = WSETS[0].ot, winFillTex = WSETS[0].ft;

  // ------------------------------------------------ globe material
  const uniforms = {
    uHeight: { value: heightTex }, uFill: { value: fillTex }, uOver: { value: overTex }, uIce: { value: iceTex }, uSat: { value: satTex },
    uWinOver: { value: winOverTex }, uWinFill: { value: winFillTex }, uWin: { value: WSETS[0].rect }, uWinOn: { value: 0 },
    uWinOver2: { value: WSETS[1].ot }, uWinFill2: { value: WSETS[1].ft }, uWin2: { value: WSETS[1].rect }, uWinOn2: { value: 0 },
    uExag: { value: params.exag / 6371000 }, uOcean: { value: 0.30 }, uShade: { value: 2.6 }, uCav: { value: 0.75 }, uShadow: { value: 0.85 },
    uMode: { value: 0 }, uVLod: { value: 0.6 }, uTexel: { value: new THREE.Vector2(1 / H8.w, 1 / H8.h) }, uHSize: { value: new THREE.Vector2(H8.w, H8.h) },
    uKeyDir: { value: new THREE.Vector3(0, 0, 1) },
    uPinDir: { value: new THREE.Vector3(0, 1, 0) }, uPinE: { value: new THREE.Vector3(1, 0, 0) }, uPinN: { value: new THREE.Vector3(0, 0, 1) },
    uPinOn: { value: 0 }, uPinT: { value: 0 }, uKmPx: { value: 10 }, uRingsOn: { value: 1 },
    // v6: local high-resolution terrain (AWS Terrarium tiles) around the pin + profile line
    uLH: { value: (() => { const t = new THREE.DataTexture(new Uint16Array(1), 1, 1, THREE.RedFormat, THREE.HalfFloatType); t.needsUpdate = true; return t; })() },
    uL: { value: new THREE.Vector4(0, 0, 1e-3, 1e-3) }, uLOn: { value: 0 }, uLTexel: { value: new THREE.Vector2(1, 1) }, uLGain: { value: 0.55 },
    uLeg: { value: (() => { const k = 1 / Math.cos((LEGEND.lat - LEGEND.h / 2) * D2R); return new THREE.Vector4((LEGEND.lon - LEGEND.w * k / 2 + 180) / 360, (LEGEND.lat - LEGEND.h / 2 + 90) / 180, LEGEND.w * k / 360, LEGEND.h / 180); })() }, uLegOn: { value: 1 },
    uProfA: { value: new THREE.Vector3(0, 1, 0) }, uProfB: { value: new THREE.Vector3(0, 1, 0) }, uProfOn: { value: 0 }, uProfP: { value: new THREE.Vector3(0, 1, 0) }, uProfPOn: { value: 0 },
  };
  const mat = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.5, metalness: 0, clearcoat: 1.0, clearcoatRoughness: 0.065, envMapIntensity: 0.8, specularIntensity: 0.6 });
  mat.onBeforeCompile = (sh) => {
    Object.assign(sh.uniforms, uniforms);
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', `#include <common>
        uniform sampler2D uHeight; uniform float uExag; uniform float uOcean; uniform float uVLod;
        varying vec2 vHUv; varying vec3 vEastV; varying vec3 vNorthV;`)
      .replace('#include <begin_vertex>', `
        vHUv = uv;
        float hm = textureLod(uHeight, uv, uVLod).r;
        hm = hm > 0.0 ? hm : hm * uOcean;
        vec3 transformed = normalize(position) * (1.0 + clamp(hm * uExag, -0.03, 0.062));
        float aa = uv.x * 6.28318530718;
        vec3 upO = normalize(position);
        vec3 eastO = vec3(sin(aa), 0.0, cos(aa));
        vec3 northO = normalize(cross(upO, eastO));
        vEastV = normalize(normalMatrix * eastO);
        vNorthV = normalize(normalMatrix * northO);`);
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', `#include <common>
        uniform sampler2D uHeight, uFill, uOver, uIce, uSat, uWinOver, uWinFill, uWinOver2, uWinFill2;
        uniform vec4 uWin, uWin2; uniform float uWinOn, uWinOn2;
        uniform float uExag, uOcean, uShade, uMode, uCav, uShadow;
        uniform vec2 uTexel, uHSize; uniform vec3 uKeyDir;
        uniform vec3 uPinDir, uPinE, uPinN; uniform float uPinOn, uPinT, uKmPx, uRingsOn;
        uniform vec4 uLeg; uniform float uLegOn;
        uniform sampler2D uLH; uniform vec4 uL; uniform float uLOn, uLGain; uniform vec2 uLTexel;
        uniform vec3 uProfA, uProfB, uProfP; uniform float uProfOn, uProfPOn;
        varying vec2 vHUv; varying vec3 vEastV; varying vec3 vNorthV;
        float gH(float h){ return h > 0.0 ? h : h * uOcean; }
        float gLw; vec2 gLq;
        vec3 s2l(vec3 c){ return pow(c, vec3(2.2)); }
        vec3 oceanCol(float d){
          float x = clamp(-d, 0.0, 11000.0);
          vec3 c = vec3(0.74,0.94,0.98);
          c = mix(c, vec3(0.50,0.86,0.96), smoothstep(0.0, 110.0, x));
          c = mix(c, vec3(0.27,0.71,0.94), smoothstep(90.0, 650.0, x));
          c = mix(c, vec3(0.17,0.60,0.92), smoothstep(650.0, 2800.0, x));
          c = mix(c, vec3(0.13,0.50,0.88), smoothstep(2800.0, 5000.0, x));
          c = mix(c, vec3(0.10,0.40,0.80), smoothstep(5000.0, 7200.0, x));
          c = mix(c, vec3(0.06,0.26,0.60), smoothstep(7200.0, 10500.0, x));
          return s2l(c);
        }
        vec3 hypso(float h){
          vec3 c = vec3(0.36,0.62,0.36);
          c = mix(c, vec3(0.56,0.74,0.42), smoothstep(0.0, 300.0, h));
          c = mix(c, vec3(0.86,0.84,0.55), smoothstep(250.0, 900.0, h));
          c = mix(c, vec3(0.86,0.67,0.42), smoothstep(900.0, 1900.0, h));
          c = mix(c, vec3(0.70,0.47,0.30), smoothstep(1900.0, 3300.0, h));
          c = mix(c, vec3(0.58,0.45,0.38), smoothstep(3300.0, 4700.0, h));
          c = mix(c, vec3(0.95,0.95,0.97), smoothstep(4900.0, 6000.0, h));
          return s2l(c);
        }
        float gSlope; float gLand; float gH0; float gAO; float gShadowF; float gLod;
        vec2 gGx, gGy;
        vec4 tS(sampler2D t, vec2 p){ return textureGrad(t, p, gGx, gGy); }`)
      .replace('#include <map_fragment>', `
        {
          vec2 uvh = vHUv;
          float cl0 = max(cos((uvh.y - 0.5) * PI), 0.04);
          gGx = dFdx(uvh); gGy = dFdy(uvh); gGx.x *= cl0; gGy.x *= cl0;
          vec2 fwp = fwidth(uvh) * uHSize; gLod = max(0.0, log2(max(fwp.x * cl0, fwp.y)));
          float hRaw = texture(uHeight, uvh).r;
          gLw = 0.0;
          if (uLOn > 0.001) {
            gLq = vec2(fract(uvh.x - uL.x) / uL.z, (uvh.y - uL.y) / uL.w);
            if (gLq.x > 0.0 && gLq.x < 1.0 && gLq.y > 0.0 && gLq.y < 1.0) {
              float e = min(min(gLq.x, 1.0 - gLq.x), min(gLq.y, 1.0 - gLq.y));
              gLw = smoothstep(0.0, 0.1, e) * uLOn;
              hRaw = mix(hRaw, texture(uLH, gLq).r, gLw);
            }
          }
          gH0 = hRaw;
          vec4 fl = tS(uFill, uvh), ov = tS(uOver, uvh);
          if (uWinOn2 > 0.001) {
            vec2 wq = vec2(fract(uvh.x - uWin2.x) / uWin2.z, (uvh.y - uWin2.y) / uWin2.w);
            if (wq.x > 0.0 && wq.x < 1.0 && wq.y > 0.0 && wq.y < 1.0) {
              float e = min(min(wq.x, 1.0 - wq.x), min(wq.y, 1.0 - wq.y));
              float w = smoothstep(0.0, 0.04, e) * uWinOn2;
              vec2 gx = gGx / uWin2.zw, gy = gGy / uWin2.zw;
              fl = mix(fl, textureGrad(uWinFill2, wq, gx, gy), w);
              ov = mix(ov, textureGrad(uWinOver2, wq, gx, gy), w);
            }
          }
          if (uWinOn > 0.001) {
            vec2 wq = vec2(fract(uvh.x - uWin.x) / uWin.z, (uvh.y - uWin.y) / uWin.w);
            if (wq.x > 0.0 && wq.x < 1.0 && wq.y > 0.0 && wq.y < 1.0) {
              float e = min(min(wq.x, 1.0 - wq.x), min(wq.y, 1.0 - wq.y));
              float w = smoothstep(0.0, 0.04, e) * uWinOn;
              vec2 gx = gGx / uWin.zw, gy = gGy / uWin.zw;
              fl = mix(fl, textureGrad(uWinFill, wq, gx, gy), w);
              ov = mix(ov, textureGrad(uWinOver, wq, gx, gy), w);
            }
          }
          float ice = tS(uIce, uvh).r;
          float land = smoothstep(0.3, 0.7, fl.a);
          gLand = land;
          vec3 oc = oceanCol(min(hRaw, -1.0));
          vec3 col;
          if (uMode < 0.5) {
            vec3 lc = fl.rgb / max(fl.a, 0.001);
            lc = mix(lc, vec3(0.96,0.97,1.0), ice * 0.30);
            col = mix(oc, lc, land);
          } else if (uMode < 1.5) {
            vec3 lc = mix(hypso(hRaw), vec3(0.93,0.95,1.0), ice);
            col = mix(oc, lc, land);
          } else {
            col = mix(oc * vec3(0.62, 0.72, 0.88), tS(uSat, uvh).rgb, land);
          }
          col = col * (1.0 - ov.a) + ov.rgb;
          if (uPinOn > 0.5) {
            // "my location": terrain-conforming distance rings + pulsing beacon (drawn in the print layer)
            float phi = uvh.x * 6.28318530718, la = (uvh.y - 0.5) * PI;
            vec3 Q = vec3(-cos(phi) * cos(la), sin(la), sin(phi) * cos(la));
            float dk = 2.0 * asin(clamp(length(Q - uPinDir) * 0.5, 0.0, 1.0)) * 6371.0;
            float aa = max(fwidth(dk), 1e-4);
            float px = dk / uKmPx;
            if (uRingsOn > 0.5 && dk < 1100.0) {
              vec3 tq = Q - uPinDir * dot(Q, uPinDir);
              float az = atan(dot(tq, uPinE), dot(tq, uPinN));
              for (int i = 0; i < 4; i++) {
                float R = i == 0 ? 100.0 : i == 1 ? 250.0 : i == 2 ? 500.0 : 1000.0;
                float rpx = R / uKmPx;
                float vis = smoothstep(45.0, 85.0, rpx) * (1.0 - smoothstep(1500.0, 2600.0, rpx));
                if (vis <= 0.0) continue;
                float e = abs(dk - R);
                float lw = 0.9 * uKmPx;
                float core = 1.0 - smoothstep(lw - aa * 0.5, lw + aa * 0.5, e);
                float halo = 1.0 - smoothstep(lw + uKmPx * 1.3 - aa * 0.5, lw + uKmPx * 1.3 + aa * 0.5, e);
                float nd = max(12.0, floor(R * 6.2831853 / (uKmPx * 13.0)));
                float dash = smoothstep(0.66, 0.6, fract(az / 6.2831853 * nd));
                col = mix(col, vec3(0.01, 0.03, 0.09), halo * 0.42 * vis * dash);
                col = mix(col, vec3(1.0), core * 0.95 * vis * dash);
              }
            }
            if (uProfOn > 0.5) {
              vec3 pn = normalize(cross(uProfA, uProfB));
              float dkm = abs(asin(clamp(dot(Q, pn), -1.0, 1.0))) * 6371.0;
              if (dot(cross(uProfA, Q), pn) > 0.0 && dot(cross(Q, uProfB), pn) > 0.0 && dot(Q, uProfA) > 0.0) {
                float a2 = max(fwidth(dkm), 1e-4), lw = 1.7 * uKmPx;
                float core = 1.0 - smoothstep(lw - a2 * 0.5, lw + a2 * 0.5, dkm);
                float halo = 1.0 - smoothstep(lw + uKmPx * 1.8 - a2 * 0.5, lw + uKmPx * 1.8 + a2 * 0.5, dkm);
                col = mix(col, vec3(0.08, 0.03, 0.0), halo * 0.55);
                col = mix(col, vec3(1.0, 0.42, 0.0), core);
              }
              float dbp = 2.0 * asin(clamp(length(Q - uProfB) * 0.5, 0.0, 1.0)) * 6371.0 / uKmPx;
              col = mix(col, vec3(0.08, 0.03, 0.0), (1.0 - smoothstep(7.0, 8.5, dbp)) * 0.6);
              col = mix(col, vec3(1.0, 0.42, 0.0), 1.0 - smoothstep(5.5, 6.8, dbp));
              col = mix(col, vec3(1.0), 1.0 - smoothstep(2.2, 3.2, dbp));
              if (uProfPOn > 0.5) {
                float dpp = 2.0 * asin(clamp(length(Q - uProfP) * 0.5, 0.0, 1.0)) * 6371.0 / uKmPx;
                col = mix(col, vec3(1.0), 1.0 - smoothstep(5.0, 6.2, dpp));
                col = mix(col, vec3(0.85, 0.12, 0.0), 1.0 - smoothstep(3.0, 4.2, dpp));
              }
            }
            for (int k = 0; k < 2; k++) {
              float ph = fract(uPinT / 2.4 + float(k) * 0.5);
              float rr = 5.0 + ph * 44.0;
              float a = (1.0 - smoothstep(1.0, 2.6, abs(px - rr))) * pow(1.0 - ph, 1.5) * 0.9;
              col = mix(col, vec3(1.0, 0.10, 0.05), a);
            }
            col = mix(col, vec3(1.0, 0.16, 0.06), exp(-px * px / 40.0) * 0.6);
          }
          diffuseColor.rgb *= col;
        }`)
      .replace('#include <roughnessmap_fragment>', `
        float roughnessFactor = mix(0.34, 0.52, gLand);
        if (uMode > 1.5) roughnessFactor = mix(0.40, 0.62, gLand);`)
      .replace('#include <normal_fragment_maps>', `
        {
          vec2 uvh = vHUv;
          vec2 fw = fwidth(uvh);
          float du = max(uTexel.x, min(fw.x, 0.01));
          float dv = max(uTexel.y, min(fw.y, 0.01));
          float hE = gH(texture(uHeight, uvh + vec2(du, 0.0)).r), hW = gH(texture(uHeight, uvh - vec2(du, 0.0)).r);
          float hN = gH(texture(uHeight, uvh + vec2(0.0, dv)).r), hS = gH(texture(uHeight, uvh - vec2(0.0, dv)).r);
          float lat = (uvh.y - 0.5) * PI;
          float cl = max(cos(lat), 0.03);
          float polar = 1.0 - smoothstep(1.40, 1.50, abs(lat));
          float k = uExag * uShade * polar;
          float legM = 0.0;
          { // the printed legend panel sits on a smooth patch of ocean
            vec2 lq = (uvh - uLeg.xy) / uLeg.zw;
            float e = min(min(lq.x, 1.0 - lq.x), min(lq.y, 1.0 - lq.y));
            legM = uLegOn * smoothstep(-0.03, 0.02, e);
            k *= 1.0 - 0.97 * legM;
          }
          float sE = (hE - hW) * k / (2.0 * du * 2.0 * PI * cl);
          float sN = (hN - hS) * k / (2.0 * dv * PI);
          if (gLw > 0.0) {
            // ~1 km Terrarium heights: finer slopes (gain-limited so the exaggerated relief does not turn harsh)
            vec2 lfw = fw / uL.zw;
            float lu = max(uLTexel.x, min(lfw.x, 0.01 / uL.z)), lv = max(uLTexel.y, min(lfw.y, 0.01 / uL.w));
            float lE = gH(texture(uLH, gLq + vec2(lu, 0.0)).r), lW = gH(texture(uLH, gLq - vec2(lu, 0.0)).r);
            float lN = gH(texture(uLH, gLq + vec2(0.0, lv)).r), lS = gH(texture(uLH, gLq - vec2(0.0, lv)).r);
            float kl = k * uLGain;
            float sE2 = (lE - lW) * kl / (2.0 * lu * uL.z * 2.0 * PI * cl), sN2 = (lN - lS) * kl / (2.0 * lv * uL.w * PI);
            sE = mix(sE, sE2, gLw); sN = mix(sN, sN2, gLw);
          }
          gSlope = length(vec2(sE, sN));
          vec3 eV = normalize(vEastV), nV = normalize(vNorthV);
          vec3 upV = normalize(cross(eV, nV));
          normal = normalize(normal - sE * eV - sN * nV);
          // multi-scale cavity: local height vs. blurred surroundings (ridges bright, valleys dark)
          float h0 = gH(gH0);
          float b1 = gH(textureLod(uHeight, uvh, gLod + 2.0).r), b2 = gH(textureLod(uHeight, uvh, gLod + 4.0).r);
          float cav = (h0 - (0.55 * b1 + 0.45 * b2)) * uExag * 6371000.0 / 40.0 / 900.0;
          gAO = clamp(1.0 + uCav * cav * polar * (1.0 - legM), 0.45, 1.3);
          // self-shadowing: short horizon march towards the key light
          gShadowF = 1.0;
          {
            vec3 L = normalize(uKeyDir);
            float lE = dot(L, eV), lN = dot(L, nV), lU = dot(L, upV);
            float dl = length(vec2(lE, lN));
            if (lU > 0.02 && dl > 1e-3 && polar > 0.0) {
              vec2 d = vec2(lE, lN) / dl; float tanE = lU / dl;
              float kk = uExag * uShade * 0.55;
              float occ = 0.0;
              float t0 = max(PI * uTexel.y * 1.5, PI * fw.y * 1.2);
              for (int i = 0; i < 6; i++) {
                float t = t0 * pow(2.0, float(i));
                vec2 off = vec2(d.x * t / (2.0 * PI * cl), d.y * t / PI);
                float hs = gH(textureLod(uHeight, uvh + off, gLod + float(i) * 0.8).r);
                occ = max(occ, ((hs - h0) * kk - t * tanE) / t);
              }
              gShadowF = 1.0 - smoothstep(0.0, 0.35, occ) * polar * (1.0 - legM);
            }
          }
        }`)
      .replace('#include <clearcoat_normal_fragment_begin>', `
        #ifdef USE_CLEARCOAT
          vec3 clearcoatNormal = normalize(mix(nonPerturbedNormal, normal, 0.35));
        #endif`)
      .replace('#include <aomap_fragment>', `#include <aomap_fragment>
        {
          float sh = mix(1.0, gShadowF, uShadow);
          reflectedLight.directDiffuse *= sh * gAO;
          reflectedLight.directSpecular *= sh * min(gAO, 1.0);
          reflectedLight.indirectDiffuse *= gAO;
          #ifdef USE_CLEARCOAT
            clearcoatSpecularDirect *= mix(1.0, sh, 0.8);
          #endif
        }`);
  };
  const globeGeo = new THREE.SphereGeometry(1, QUALITY.seg[0], QUALITY.seg[1]);
  const globe = new THREE.Mesh(globeGeo, mat);
  globe.castShadow = true; globe.receiveShadow = false;

  // ------------------------------------------------ hardware
  const chrome = new THREE.MeshStandardMaterial({ color: 0xf2f4f7, metalness: 1.0, roughness: 0.12, envMapIntensity: 1.35 });
  const darkChrome = new THREE.MeshStandardMaterial({ color: 0xbfc5cc, metalness: 1.0, roughness: 0.22, envMapIntensity: 1.2 });
  const ringFace = new THREE.MeshStandardMaterial({ color: 0xffffff, map: ringTexture(), metalness: 1.0, roughness: 0.16, envMapIntensity: 1.35 });
  const basePlastic = new THREE.MeshPhysicalMaterial({ color: 0xf6f7f9, roughness: 0.22, metalness: 0, clearcoat: 1.0, clearcoatRoughness: 0.06, envMapIntensity: 0.9 });
  const blueCap = new THREE.MeshPhysicalMaterial({ color: 0x1f63c9, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.08 });

  const TILT = 23.44 * D2R;
  const RIN = 1.072, ROUT = 1.112, RT = 0.010; // meridian band radii / thickness
  const RING_R = (RIN + ROUT) / 2;
  const assembly = new THREE.Group(); scene.add(assembly);
  const tilt = new THREE.Group(); tilt.rotation.z = TILT; assembly.add(tilt);
  const spin = new THREE.Group(); tilt.add(spin); spin.add(globe);
  {
    // flat graduated half-annulus (front & back faces textured) + chrome edges
    const seg = 360;
    const face = (z, flip) => {
      const pos = [], uv = [], idx = [];
      for (let i = 0; i <= seg; i++) {
        const a = Math.PI / 2 + i / seg * Math.PI; const c = Math.cos(a), s = Math.sin(a);
        pos.push(c * RIN, s * RIN, z, c * ROUT, s * ROUT, z); uv.push(i / seg, 0, i / seg, 1);
        if (i < seg) { const b = i * 2; if (flip) idx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3); else idx.push(b, b + 1, b + 2, b + 1, b + 3, b + 2); }
      }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals(); return g;
    };
    const f1 = new THREE.Mesh(face(RT / 2, false), ringFace), f2 = new THREE.Mesh(face(-RT / 2, true), ringFace);
    f1.castShadow = f2.castShadow = true; tilt.add(f1, f2);
    const edge = (r, flip) => {
      const pos = [], idx = [];
      for (let i = 0; i <= seg; i++) {
        const a = Math.PI / 2 + i / seg * Math.PI; const c = Math.cos(a), s = Math.sin(a);
        pos.push(c * r, s * r, RT / 2, c * r, s * r, -RT / 2);
        if (i < seg) { const b = i * 2; if (flip) idx.push(b, b + 1, b + 2, b + 1, b + 3, b + 2); else idx.push(b, b + 2, b + 1, b + 1, b + 2, b + 3); }
      }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); return g;
    };
    const eo = new THREE.Mesh(edge(ROUT, false), chrome), ei = new THREE.Mesh(edge(RIN, true), chrome);
    eo.material.side = THREE.DoubleSide; tilt.add(eo, ei);
    for (const sgn of [1, -1]) {
      const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03, 32), sgn > 0 ? blueCap : chrome);
      cap.position.set(0, sgn * (ROUT + 0.004), 0); tilt.add(cap);
      const nut = new THREE.Mesh(new THREE.SphereGeometry(0.016, 20, 12), chrome); nut.position.set(0, sgn * (ROUT + 0.022), 0); tilt.add(nut);
      const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, RIN - 0.98, 16), darkChrome);
      pin.position.set(0, sgn * (0.98 + RIN) / 2, 0); tilt.add(pin);
      const cup = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.018, 0.010, 24), darkChrome); cup.position.set(0, sgn * 1.0, 0); tilt.add(cup);
    }
  }
  const hardware = tilt.children.filter((o) => o !== spin); // meridian ring etc. (hidden at regional zoom so it never blocks the view)
  const ringBottomY = -ROUT - 0.004; // after tilt the lowest point of the ring is near the bottom (approx.)
  const baseTopY = -1.66;
  let deskY = 0;
  {
    // the ring is tilted; its lowest point:
    const lowA = Math.PI * 1.5 - TILT; // angle on ring whose world y is minimal
    const lowP = new THREE.Vector3(Math.cos(lowA) * RING_R, Math.sin(lowA) * RING_R, 0).applyAxisAngle(new THREE.Vector3(0, 0, 1), TILT);
    const stemTop = lowP.y - 0.01;
    const stemH = stemTop - baseTopY;
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.036, stemH, 40), chrome);
    stem.position.set(lowP.x, baseTopY + stemH / 2, 0); stem.castShadow = true; assembly.add(stem);
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.044, 0.06, 40), chrome);
    collar.position.set(lowP.x, stemTop, 0); assembly.add(collar);
    const collar2 = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.085, 0.07, 48), chrome);
    collar2.position.set(lowP.x, baseTopY + 0.035, 0); assembly.add(collar2);
    // base: flat glossy white disc with a chrome side band
    const R0 = 0.72, Hb = 0.13;
    const prof = [new THREE.Vector2(0, 0)];
    for (let i = 0; i <= 10; i++) { const a = -Math.PI / 2 + i / 10 * Math.PI / 2; prof.push(new THREE.Vector2(R0 - 0.02 + Math.cos(a) * 0.02, 0.02 + Math.sin(a) * 0.02)); }
    prof.push(new THREE.Vector2(R0, Hb * 0.6));
    for (let i = 0; i <= 16; i++) { const a = i / 16 * Math.PI / 2; prof.push(new THREE.Vector2(R0 - 0.07 + Math.cos(a) * 0.07, Hb * 0.6 + Math.sin(a) * Hb * 0.4)); }
    prof.push(new THREE.Vector2(0, Hb));
    const base = new THREE.Mesh(new THREE.LatheGeometry(prof, 160), basePlastic);
    base.position.set(lowP.x, baseTopY - Hb, 0); base.castShadow = true; base.receiveShadow = true; assembly.add(base);
    const band = new THREE.Mesh(new THREE.CylinderGeometry(R0 + 0.004, R0 + 0.004, Hb * 0.42, 160, 1, true), chrome);
    band.position.set(lowP.x, baseTopY - Hb + Hb * 0.3, 0); assembly.add(band);
    deskY = baseTopY - Hb;
  }
  // desk
  const desk = new THREE.Mesh(new THREE.PlaneGeometry(14, 7), new THREE.MeshStandardMaterial({ map: woodTexture(), roughness: 0.55, metalness: 0, envMapIntensity: 0.4, transparent: true }));
  {
    // fade the far edge of the desk into the backdrop
    const c = makeCanvas(4, 256), x = c.getContext('2d'); const g = x.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, '#000'); g.addColorStop(0.35, '#fff'); g.addColorStop(1, '#fff'); x.fillStyle = g; x.fillRect(0, 0, 4, 256);
    desk.material.alphaMap = new THREE.CanvasTexture(c);
  }
  desk.material.map.repeat.set(2.2, 1.1);
  desk.rotation.x = -Math.PI / 2; desk.position.set(0, deskY - 0.001, 1.2); desk.receiveShadow = true; assembly.add(desk);

  // ------------------------------------------------ interaction / camera
  let myLoc = null, pickMode = false;
  const OBL_MAX = 0.42;
  const DIST_MIN = 1.12, DIST_MAX = 13;
  let DIST_DEF = 5.5;
  const distDefault = () => { const a = window.innerWidth / window.innerHeight; return Math.max(5.5, 1.12 / (Math.tan(15 * D2R) * a)); };
  DIST_DEF = distDefault();
  const view = { spin: 0, spinVel: 0, pitch: 0.13, pitchT: 0.13, dist: DIST_DEF, distT: DIST_DEF, lastInput: -1e9 };
  const lonToSpin = (lon) => -Math.PI / 2 - lon * D2R;
  view.spin = lonToSpin(100);
  const pointers = new Map(); let pinchD = 0; let lastX = 0, lastY = 0, lastT = 0, downX = 0, downY = 0, downT = 0;
  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId); pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    lastX = downX = e.clientX; lastY = downY = e.clientY; lastT = downT = performance.now(); view.spinVel = 0; view.lastInput = performance.now(); view.fly = null;
    if (pointers.size === 2) { const [a, b] = [...pointers.values()]; pinchD = Math.hypot(a.x - b.x, a.y - b.y); }
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY }); view.lastInput = performance.now();
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()]; const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchD > 0) view.distT = THREE.MathUtils.clamp(view.distT * pinchD / d, DIST_MIN, DIST_MAX);
      pinchD = d; return;
    }
    const now = performance.now(), dt = Math.max(1, now - lastT);
    const dx = e.clientX - lastX, dy = e.clientY - lastY;
    const k = 2.4 * (view.dist - 0.95) / (window.innerHeight * 3.4);
    view.spin += dx * k; view.spinVel = 0.8 * view.spinVel + 0.2 * (dx * k / dt * 1000);
    view.pitchT = THREE.MathUtils.clamp(view.pitchT + dy * k, -1.25, 1.3);
    lastX = e.clientX; lastY = e.clientY; lastT = now;
  });
  const up = (e) => {
    pointers.delete(e.pointerId); pinchD = 0; if (performance.now() - lastT > 80) view.spinVel = 0;
    if (Math.hypot(e.clientX - downX, e.clientY - downY) < 5 && performance.now() - downT < 450) { if (pickMode) placeByClick(e.clientX, e.clientY); else pick(e.clientX, e.clientY); }
  };
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', (e) => { pointers.delete(e.pointerId); pinchD = 0; });
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault(); view.lastInput = performance.now(); view.fly = null;
    view.distT = THREE.MathUtils.clamp(view.distT * Math.exp(e.deltaY * 0.0012), DIST_MIN, DIST_MAX);
  }, { passive: false });

  // ------------------------------------------------ picking + info card
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  const sphereHit = (sx, sy, rad = 1.0) => {
    ndc.set(sx / window.innerWidth * 2 - 1, -(sy / window.innerHeight) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const inv = new THREE.Matrix4().copy(globe.matrixWorld).invert();
    const o = ray.ray.origin.clone().applyMatrix4(inv), d = ray.ray.direction.clone().transformDirection(inv);
    const b = o.dot(d), c = o.dot(o) - rad * rad, disc = b * b - c; if (disc < 0) return null;
    const t = -b - Math.sqrt(disc); if (t < 0) return null;
    const p = o.add(d.multiplyScalar(t)).normalize();
    const lat = Math.asin(THREE.MathUtils.clamp(p.y, -1, 1)) / D2R;
    let u = Math.atan2(p.z, -p.x) / (2 * Math.PI); u = ((u % 1) + 1) % 1;
    return [u * 360 - 180, lat];
  };
  const fmtArea = (a) => a >= 1e6 ? `${(a / 1e4).toFixed(0)} 万平方千米` : a >= 1e4 ? `${(a / 1e4).toFixed(1)} 万平方千米` : `${Math.round(a).toLocaleString()} 平方千米`;
  const fmtPop = (p) => p >= 1e8 ? `${(p / 1e8).toFixed(2)} 亿` : p >= 1e4 ? `${(p / 1e4).toFixed(0)} 万` : `${p}`;
  function pick(sx, sy) {
    const ll = sphereHit(sx, sy); const card = $('card');
    if (!ll) { card.classList.remove('on'); return; }
    let hit = null;
    for (let i = 0; i < world.feats.length; i++) {
      const b = world.bboxes[i];
      if (ll[1] < b[0][1] - 0.5 || ll[1] > b[1][1] + 0.5) continue;
      if (geoContains(world.feats[i], ll)) { hit = world.feats[i]; break; }
    }
    if (!hit) { card.classList.remove('on'); return; }
    const p = vec.props[hit.id]; if (!p) return;
    $('card-name').textContent = p.zh || p.en;
    $('card-en').textContent = p.a3 === 'CHN' ? "People's Republic of China" : (p.en || '').toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());
    const rows = [['所属大洲', p.cont], ['首都', p.cap || '—'], ['面积', p.area ? fmtArea(p.area) : '—'], ['人口', p.pop > 0 ? fmtPop(p.pop) : '—']];
    $('card-body').innerHTML = rows.map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join('');
    card.style.left = Math.min(window.innerWidth - 250, sx + 16) + 'px'; card.style.top = Math.min(window.innerHeight - 190, sy + 10) + 'px';
    card.classList.add('on');
  }
  $('card').addEventListener('click', () => $('card').classList.remove('on'));

  // ------------------------------------------------ detail window (crisp print when zoomed in)
  let winState = null, winDirty = 0, lastViewKey = '';
  function visibleRegion() {
    const W = window.innerWidth, H = window.innerHeight;
    const c = sphereHit(W / 2, H / 2);
    if (!c) return null;
    const N = 10; let minLat = 90, maxLat = -90, maxDl = 0, miss = 0;
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
      const ll = sphereHit(i / N * W, j / N * H); if (!ll) { miss++; continue; }
      minLat = Math.min(minLat, ll[1]); maxLat = Math.max(maxLat, ll[1]);
      let dl = ll[0] - c[0]; dl = ((dl + 540) % 360) - 180; maxDl = Math.max(maxDl, Math.abs(dl));
    }
    // screen px per degree at the centre
    const a = sphereHit(W / 2 - 20, H / 2), b = sphereHit(W / 2 + 20, H / 2);
    let ppdScreen = 0;
    if (a && b) { let dl = b[0] - a[0]; dl = ((dl + 540) % 360) - 180; const deg = Math.hypot(dl * Math.cos(c[1] * D2R), b[1] - a[1]); ppdScreen = 40 / Math.max(deg, 1e-6); }
    return { c, minLat, maxLat, maxDl, miss, ppdScreen: ppdScreen * renderer.getPixelRatio() };
  }
  function updateWindow(force) {
    const r = visibleRegion();
    const need = r && r.ppdScreen > PPD0 * 0.85;
    if (!need) { winFade.want = 0; winState = null; return; }
    const latSpan = (r.maxLat - r.minLat) * 1.25 + 2, lonSpan = 2 * r.maxDl * 1.25 + 2;
    const ppd = Math.min(WIN / Math.min(359, lonSpan), WIN / Math.min(179, latSpan), Math.max(PPD0 * 1.5, r.ppdScreen * 1.4), 420);
    if (ppd < PPD0 * 1.15) { winFade.want = 0; winState = null; return; }
    const spanDeg = WIN / ppd;
    const latC = THREE.MathUtils.clamp((r.maxLat + r.minLat) / 2, -90 + spanDeg / 2, 90 - spanDeg / 2);
    const latTop = latC + spanDeg / 2, lonC = r.c[0];
    if (!force && winState && Math.abs(winState.ppd - ppd) / ppd < 0.2 && Math.abs(((lonC - winState.lonC + 540) % 360) - 180) < spanDeg * 0.12 && Math.abs(latC - winState.latC) < spanDeg * 0.12) return;
    winState = { ppd, lonC, latC };
    const proj = geoEquirectangular().rotate([-lonC, 0]).scale(ppd * 180 / Math.PI).translate([WIN / 2, latTop * ppd]).precision(0.05);
    const lon0 = lonC - spanDeg / 2, lat0 = latTop - spanDeg;
    const inWin = (lon, lat) => { let d = ((lon - lonC + 540) % 360) - 180; return Math.abs(d) < spanDeg * 0.6 && lat > lat0 - 3 && lat < latTop + 3; };
    const bbVis = (b) => {
      if (b[0][1] > latTop + 1 || b[1][1] < lat0 - 1) return false;
      if (b[1][0] - b[0][0] > 300 || b[0][0] > b[1][0]) return true;
      const a0 = ((b[0][0] - lonC + 540) % 360) - 180, a1 = a0 + (b[1][0] - b[0][0]);
      return a1 > -spanDeg * 0.6 && a0 < spanDeg * 0.6;
    };
    const t0 = performance.now();
    // fills at half resolution
    const fproj = geoEquirectangular().rotate([-lonC, 0]).scale(ppd / 2 * 180 / Math.PI).translate([WINF / 2, latTop * ppd / 2]).precision(0.05);
    drawFills(winFillC.getContext('2d'), fproj, WINF, WINF, ppd / 2, { ...world, visible: bbVis });
    const ctx = winOverC.getContext('2d'); ctx.clearRect(0, 0, WIN, WIN);
    drawLines(ctx, proj, WIN, WIN, ppd, world, { grid: params.grid });
    if (params.extras) drawCurrents(ctx, proj, ppd);
    const f = ppd / PPD0;
    if (params.grid) drawGridLabels(ctx, (lon, lat) => proj([lon, lat]), f, inWin, 0);
    if (params.labels) {
      // pick the densest layout whose text size is >= the size we draw at (keeps it collision-free)
      const g = Math.min(1, Math.pow(2.2 * PPD0 / ppd, 0.55));
      let li = 0; for (let i = 0; i < LEVELS.length; i++) if (LEVELS[i].g >= g - 1e-6) li = i;
      const lay = getLayout(li); window.__winLevel = li;
      drawLabels(ctx, params.extras ? lay : lay.filter((it) => !it.cls.startsWith('cur')), (lon, lat) => proj([lon, lat]), f, inWin, 0, g / LEVELS[li].g, params.en);
    }
    if (params.extras && Math.abs(((LEGEND.lon - lonC + 540) % 360) - 180) < spanDeg * 0.6 + 20 && LEGEND.lat + LEGEND.h > lat0 && LEGEND.lat - LEGEND.h < latTop) drawLegend(ctx, proj, ppd);
    // swap: the shown window becomes "previous" and the new one fades in over it
    const prevOn = uniforms.uWinOn.value;
    const nxt = WSETS[1 - wCur], old = WSETS[wCur]; wCur = 1 - wCur;
    nxt.ft.needsUpdate = true; nxt.ot.needsUpdate = true;
    nxt.rect.set((((lon0 + 180) / 360) % 1 + 1) % 1, (lat0 + 90) / 180, spanDeg / 360, spanDeg / 180);
    uniforms.uWinOver.value = nxt.ot; uniforms.uWinFill.value = nxt.ft; uniforms.uWin.value = nxt.rect;
    uniforms.uWinOver2.value = old.ot; uniforms.uWinFill2.value = old.ft; uniforms.uWin2.value = old.rect;
    uniforms.uWinOn2.value = prevOn; uniforms.uWinOn.value = 0; winFade.want = 1;
    window.__winMs = performance.now() - t0;
  }

  // ------------------------------------------------ UI
  const exagEl = $('exag'), exagVal = $('exag-val');
  const setExag = (v) => { params.exag = v; uniforms.uExag.value = v / 6371000; exagVal.textContent = `×${v}`; exagEl.value = v; };
  exagEl.addEventListener('input', () => setExag(+exagEl.value));
  const setMode = (m) => {
    params.mode = m; uniforms.uMode.value = m;
    document.querySelectorAll('[data-mode]').forEach((b) => b.classList.toggle('on', +b.dataset.mode === m));
    const lm = document.getElementById('lc-mode'); if (lm) lm.textContent = m === 1 ? '切换回政区配色' : '切换为地形配色（看清高低起伏）';
  };
  document.querySelectorAll('[data-mode]').forEach((b) => b.addEventListener('click', () => setMode(+b.dataset.mode)));
  const reprint = async () => {
    setStatus('正在重新印制…'); $('busy').classList.add('on'); await nextFrame();
    drawOverlayBase(); overTex.needsUpdate = true; winState = null; updateWindow(true); $('busy').classList.remove('on');
  };
  const bindToggle = (id, fn) => { const el = $(id); el.addEventListener('change', () => fn(el.checked)); };
  bindToggle('t-labels', (v) => { params.labels = v; reprint(); });
  bindToggle('t-grid', (v) => { params.grid = v; reprint(); });
  bindToggle('t-en', (v) => { params.en = v; reprint(); });
  bindToggle('t-extras', (v) => { params.extras = v; uniforms.uLegOn.value = v ? 1 : 0; reprint(); });
  bindToggle('t-rotate', (v) => { params.autoRotate = v; });
  setExag(params.exag); setMode(params.mode);

  // ------------------------------------------------ my location (我的位置)
  const hAt = (x, y) => { x = ((x % HW) + HW) % HW; y = Math.max(0, Math.min(HH - 1, y)); const v = Hq[y * HW + x]; return v >= 0 ? v * 4 : v * 20; };
  const elevAt = (lon, lat) => { // bilinear, metres
    const fx = (lon + 180) / 360 * HW - 0.5, fy = (lat + 90) / 180 * HH - 0.5; const x0 = Math.floor(fx), y0 = Math.floor(fy), tx = fx - x0, ty = fy - y0;
    return (hAt(x0, y0) * (1 - tx) + hAt(x0 + 1, y0) * tx) * (1 - ty) + (hAt(x0, y0 + 1) * (1 - tx) + hAt(x0 + 1, y0 + 1) * tx) * ty;
  };
  const smoothElev = (lon, lat) => { // ~ what the vertex shader sees (mip level 2.6 = ~6 texel footprint)
    const fx = Math.round((lon + 180) / 360 * HW - 0.5), fy = Math.round((lat + 90) / 180 * HH - 0.5); let s = 0, n = 0; const R = Math.max(1, Math.round(3 * HW / 8192));
    for (let dy = -R; dy <= R; dy++) for (let dx = -R; dx <= R; dx++) { s += hAt(fx + dx, fy + dy); n++; }
    return s / n;
  };
  const llDir = (lon, lat, out = new THREE.Vector3()) => { const ph = (lon + 180) * D2R, la = lat * D2R; return out.set(-Math.cos(ph) * Math.cos(la), Math.sin(la), Math.sin(ph) * Math.cos(la)); };
  const radiusAt = (hm) => 1 + THREE.MathUtils.clamp((hm > 0 ? hm : hm * uniforms.uOcean.value) * uniforms.uExag.value, -0.03, 0.062);
  // 3D pin: chrome needle + glossy red head, standing on the exaggerated relief
  const pin = new THREE.Group(); pin.visible = false; spin.add(pin);
  {
    const needleM = new THREE.MeshStandardMaterial({ color: 0xdfe3e8, metalness: 1, roughness: 0.18, envMapIntensity: 1.3 });
    const headM = new THREE.MeshPhysicalMaterial({ color: 0xe8261c, roughness: 0.25, clearcoat: 1, clearcoatRoughness: 0.06, emissive: 0x5a0500, envMapIntensity: 1.0 });
    const needle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.008, 1.0, 16), needleM); needle.position.y = 0.5;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.26, 32, 20), headM); head.position.y = 1.12;
    const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.16, 0.12, 24), headM); collar.position.y = 0.86;
    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.02, 20), new THREE.MeshBasicMaterial({ color: 0x400000 })); base.position.y = 0.0;
    pin.add(needle, collar, head, base);
  }
  const pinState = { dir: new THREE.Vector3(), hm: 0 };
  const LS_KEY = 'reliefGlobe.myLocation.v1';
  const METHOD = { gps: '浏览器定位（GPS/Wi-Fi）', ip: '网络 IP 定位（城市级，可能偏差数十公里）', search: '城市搜索', click: '在地球上点选', coord: '输入坐标', share: '他人分享的链接', saved: '' };
  const locStatus = (t, cls = '') => { const el = $('loc-status'); el.innerHTML = t; el.className = cls; };
  function setPinUniforms() {
    const d = pinState.dir; uniforms.uPinDir.value.copy(d);
    const la = myLoc.lat * D2R, ph = (myLoc.lon + 180) * D2R;
    uniforms.uPinE.value.set(Math.sin(ph), 0, Math.cos(ph));
    uniforms.uPinN.value.set(Math.cos(ph) * Math.sin(la), Math.cos(la), -Math.sin(ph) * Math.sin(la));
    uniforms.uPinOn.value = 1;
  }
  function setLocation(loc, opts = {}) {
    // loc: {lon, lat, name?, ctx?, method, src?, acc?}
    let lon = ((loc.lon + 540) % 360) - 180, lat = THREE.MathUtils.clamp(loc.lat, -89.9, 89.9);
    const desc = loc.name ? { name: loc.name, ctx: loc.ctx || '' } : gaz.describe(lon, lat);
    myLoc = { lon, lat, name: desc.name, ctx: desc.ctx, method: loc.method, src: loc.src || '', acc: loc.acc || 0, t: Date.now() };
    if (opts.save !== false) try { localStorage.setItem(LS_KEY, JSON.stringify(myLoc)); } catch (e) { /* storage unavailable */ }
    applyLocation(opts);
  }
  function applyLocation(opts = {}) {
    if (prof) clearProfile();
    llDir(myLoc.lon, myLoc.lat, pinState.dir); pinState.hm = smoothElev(myLoc.lon, myLoc.lat);
    pin.visible = true; setPinUniforms();
    $('pin-name').textContent = myLoc.name;
    $('b-fly').disabled = false; $('b-clear').style.display = '';
    $('prompt').classList.remove('on');
    const how = myLoc.method === 'saved' ? '' : (METHOD[myLoc.method] || '');
    locStatus(`<b>${myLoc.name}</b>${myLoc.ctx ? `<i>${myLoc.ctx}</i>` : ''}<small>${fmtLL(myLoc.lon, myLoc.lat)}${how ? ' · ' + how : ''}</small>`, 'set');
    fillLocCard();
    if (opts.fly !== false) flyToMe(opts.instant);
  }
  function fillLocCard() {
    const eL = localElev(myLoc.lon, myLoc.lat), e = eL != null ? eL : elevAt(myLoc.lon, myLoc.lat);
    const elev = e >= 0 ? `约 ${Math.round(e).toLocaleString()} 米` : (smoothElev(myLoc.lon, myLoc.lat) < -30 ? `水深约 ${Math.round(-e).toLocaleString()} 米` : `约 ${Math.round(e)} 米`);
    const nb = gaz.nearby(myLoc.lon, myLoc.lat);
    $('lc-name').textContent = myLoc.name; $('lc-ctx').textContent = myLoc.ctx || '';
    const how = { gps: '浏览器定位', ip: 'IP 定位（近似）', search: '城市搜索', click: '地球点选', coord: '输入坐标', share: '分享链接' }[myLoc.method] || '已保存';
    const ins = nb.inside.map((x) => `${x.name}<em>${x.cat}</em>`).join('、');
    const near = nb.near.map((x, i) => `<li class="pf${prof && prof.name === x.name ? ' sel' : ''}" data-i="${i}" title="查看从我的位置到${x.name}的地形剖面"><span class="dir">${dirName(x.b)} ${fmtKm(x.d)}</span><span class="nm">${x.name}${x.extra && x.cat === '山峰' ? ` <small>${(+x.extra).toLocaleString()} m</small>` : ''}</span><em${x.top ? ' class="top"' : ''}>${x.top || x.cat}</em><span class="chip">剖面</span></li>`).join('');
    $('lc-body').innerHTML = `<div class="kv"><span>坐标</span><b>${fmtLL(myLoc.lon, myLoc.lat)}</b></div>
      <div class="kv"><span>海拔</span><b>${elev}<small>${eL != null ? `（AWS Terrarium z${LT.z}，约 ${LT.km.toFixed(1)} km 网格）` : '（ETOPO1 约 3.7 km 网格，近似）'}</small></b></div>
      <div class="kv"><span>定位方式</span><b>${how}${myLoc.method === 'ip' ? '<small>（城市级，可搜索或点选修正）</small>' : ''}</b></div>
      ${ins ? `<div class="kv"><span>所在地形</span><b>${ins}</b></div>` : ''}
      <div class="lt" id="lc-lt">${ltText()}</div>
      <div class="nearh" style="display:flex;justify-content:space-between;align-items:center">周边山川 · 方向与直线距离<small style="font-weight:400;color:#999;font-size:10.5px">点一项看剖面</small></div><ul class="near">${near || '<li>周边无收录的主要地理要素</li>'}</ul>
      <div id="lc-prof"></div>
      <div class="btns" style="margin-top:9px"><button class="btn" id="lc-share">分享这个位置</button><button class="btn" id="lc-mode2">${params.mode === 1 ? '政区配色' : '地形配色'}</button></div>
      <button class="btn" id="lc-mode" style="display:none">${params.mode === 1 ? '切换回政区配色' : '切换为地形配色（看清高低起伏）'}</button>`;
    $('lc-mode').onclick = () => { setMode(params.mode === 1 ? 0 : 1); fillLocCard(); };
    $('lc-mode2').onclick = () => { setMode(params.mode === 1 ? 0 : 1); fillLocCard(); };
    $('lc-share').onclick = () => shareLoc();
    document.querySelectorAll('#lc-body li.pf').forEach((li) => { li.onclick = () => { const x = nb.near[+li.dataset.i]; if (prof && prof.name === x.name) clearProfile(); else showProfile(x); }; });
    window.__nearby = nb;
    if (prof) renderProfile();
  }

  // ------------------------------------------------ v6: local high-resolution terrain (AWS Terrarium tiles, fetched on demand)
  const LT = { cache: new Map(), state: 'idle', msg: '', req: 0, grid: null, N: 0, lon0: 0, lat0: 0, dLon: 0, dLat: 0, z: 0, km: 0, want: 0, key: '' };
  const LT_N = QUALITY.tier === 'high' ? 1536 : QUALITY.tier === 'med' ? 1024 : 768;
  const LT_URL = (z, x, y) => `https://s3.amazonaws.com/elevation-tiles-prod/terrarium/${z}/${x}/${y}.png`;
  const mercY = (lat) => { const r = THREE.MathUtils.clamp(lat, -85, 85) * D2R; return (1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2; };
  window.__ltTimeout = 10000;
  function ltText() {
    if (!params.local) return '局部高精度地形：已关闭';
    if (LT.state === 'loading') return `<span class="spin"></span>局部高精度地形：正在下载 ${LT.msg}`;
    if (LT.state === 'ok') return `局部高精度地形：<b>已加载</b>（AWS Terrarium z${LT.z}，约 ${LT.km.toFixed(1)} km，${LT.msg}）`;
    if (LT.state === 'fail') return `局部高精度地形：<i>${LT.msg}</i>，继续使用内置 ETOPO1 地形`;
    return '局部高精度地形：飞到位置后自动从网络加载';
  }
  const ltRefresh = () => { const el = $('lc-lt'); if (el) el.innerHTML = ltText(); };
  const LT_WORKER = `
const toHalf = (() => { const f = new Float32Array(1), u = new Uint32Array(f.buffer);
  return (v) => { f[0] = v; const x = u[0], s = (x >>> 16) & 0x8000; let e = ((x >>> 23) & 0xff) - 112, m = x & 0x7fffff;
    if (e <= 0) return s; if (e > 30) return s | 0x7c00; return s | (e << 10) | ((m + 0x1000) >>> 13); }; })();
const cache = new Map(); let cur = 0;
const mercY = (lat) => { const r = Math.max(-85, Math.min(85, lat)) * Math.PI / 180; return (1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2; };
async function tile(z, x, y, tmo) {
  const key = z + '/' + x + '/' + y; if (cache.has(key)) return cache.get(key);
  const ac = new AbortController(); const to = setTimeout(() => ac.abort(), tmo);
  try {
    const r = await fetch('https://s3.amazonaws.com/elevation-tiles-prod/terrarium/' + key + '.png', { mode: 'cors', signal: ac.signal });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const blob = await r.blob(); clearTimeout(to);
    const bmp = await createImageBitmap(blob, { colorSpaceConversion: 'none', premultiplyAlpha: 'none' });
    const c = new OffscreenCanvas(256, 256), cx = c.getContext('2d', { willReadFrequently: true }); cx.drawImage(bmp, 0, 0); bmp.close();
    const px = cx.getImageData(0, 0, 256, 256).data, out = new Float32Array(65536);
    for (let i = 0, j = 0; i < 65536; i++, j += 4) out[i] = px[j] * 256 + px[j + 1] + px[j + 2] / 256 - 32768;
    if (cache.size > 160) cache.delete(cache.keys().next().value);
    cache.set(key, out); return out;
  } finally { clearTimeout(to); }
}
onmessage = async (ev) => {
  const q = ev.data; cur = q.id;
  const { id, z, n, x0, x1, y0, y1, lon0, lat0, dLon, dLat, N, timeout } = q;
  const TW = (x1 - x0 + 1) * 256, TH = (y1 - y0 + 1) * 256, mosaic = new Float32Array(TW * TH).fill(NaN);
  const jobs = []; for (let ty = y0; ty <= y1; ty++) for (let tx = x0; tx <= x1; tx++) jobs.push([tx, ty, 0]);
  let done = 0, ok = 0, fails = 0, hard = 0, tmo = 0, lastErr = '';
  const run = async () => {
    while (jobs.length && cur === id) {
      const [tx, ty, tries] = jobs.shift();
      if ((hard >= 3 || tmo >= 6) && ok === 0) { fails++; done++; lastErr = lastErr || '请求超时'; continue; } // blocked / unreachable / hanging
      try {
        const t = await tile(z, ((tx % n) + n) % n, ty, timeout * (1 + tries)); ok++;
        const ox = (tx - x0) * 256, oy = (ty - y0) * 256;
        for (let r = 0; r < 256; r++) mosaic.set(t.subarray(r * 256, r * 256 + 256), (oy + r) * TW + ox);
      } catch (e) {
        const isT = e && e.name === 'AbortError'; if (isT) tmo++; else hard++;
        if (isT && tries < 1) { jobs.push([tx, ty, tries + 1]); continue; }
        fails++; lastErr = isT ? '请求超时' : '无法访问 AWS 地形服务';
      }
      done++; postMessage({ id, progress: true, done });
    }
  };
  await Promise.all([0, 1, 2, 3, 4, 5].map(run));
  if (cur !== id) return;
  const grid = new Float32Array(N * N), hf = new Uint16Array(N * N);
  if (ok > 0) for (let j = 0; j < N; j++) {
    const la = lat0 + (j + 0.5) * dLat, fy = (mercY(la) * n - y0) * 256 - 0.5, iy = Math.floor(fy), ty = fy - iy;
    const r0 = Math.max(0, Math.min(TH - 1, iy)) * TW, r1 = Math.max(0, Math.min(TH - 1, iy + 1)) * TW;
    for (let i = 0; i < N; i++) {
      const lo = lon0 + (i + 0.5) * dLon, fx = ((lo + 180) / 360 * n - x0) * 256 - 0.5, ix = Math.floor(fx), tx = fx - ix;
      const c0 = Math.max(0, Math.min(TW - 1, ix)), c1 = Math.max(0, Math.min(TW - 1, ix + 1));
      const v = (mosaic[r0 + c0] * (1 - tx) + mosaic[r0 + c1] * tx) * (1 - ty) + (mosaic[r1 + c0] * (1 - tx) + mosaic[r1 + c1] * tx) * ty;
      grid[j * N + i] = v; hf[j * N + i] = v === v ? toHalf(v) : 0;
    }
  }
  postMessage({ id, ok, fails, lastErr, grid, hf }, [grid.buffer, hf.buffer]);
};`;
  let ltW = null;
  function ltWorkerRun(job, onProgress) {
    if (!ltW) { const url = URL.createObjectURL(new Blob([LT_WORKER], { type: 'text/javascript' })); ltW = new Worker(url); URL.revokeObjectURL(url); }
    return new Promise((res, rej) => {
      ltW.onmessage = (e) => { const d = e.data; if (d.id !== job.id) return; if (d.progress) onProgress(d); else res(d); };
      ltW.onerror = (e) => { rej(new Error(e.message || 'worker error')); };
      ltW.postMessage(job);
    });
  }
  async function loadLocalTerrain(lon, lat) {
    if (!params.local) return;
    const key = `${lon.toFixed(3)},${lat.toFixed(3)}`; if (LT.key === key && (LT.state === 'ok' || LT.state === 'loading')) return;
    const id = ++LT.req; LT.key = key;
    if (navigator.onLine === false) { LT.state = 'fail'; LT.msg = '当前离线'; ltRefresh(); return; }
    const halfLat = 5.5, halfLon = Math.min(45, halfLat / Math.max(0.12, Math.cos(lat * D2R)));
    const lat0 = THREE.MathUtils.clamp(lat - halfLat, -84, 84 - 2 * halfLat), lon0 = lon - halfLon, N = LT_N;
    const dLon = 2 * halfLon / N, dLat = 2 * halfLat / N;
    let z = THREE.MathUtils.clamp(Math.floor(Math.log2(360 / (256 * dLon))), 3, 9), tiles;
    const tileRange = (z) => { const n = 2 ** z; const x0 = Math.floor((lon0 + 180) / 360 * n), x1 = Math.floor((lon0 + 2 * halfLon + 180) / 360 * n);
      const y0 = Math.floor(mercY(lat0 + 2 * halfLat) * n), y1 = Math.floor(mercY(lat0) * n); return { n, x0, x1, y0, y1, count: (x1 - x0 + 1) * (y1 - y0 + 1) }; };
    while ((tiles = tileRange(z)).count > (QUALITY.mobile ? 20 : 42) && z > 3) z--;
    LT.state = 'loading'; LT.msg = `0/${tiles.count}`; ltRefresh();
    const { n, x0, x1, y0, y1 } = tiles;
    // tiles are fetched, decoded and resampled in a Web Worker (keeps timeouts honest and the page smooth)
    const r = await ltWorkerRun({ id, z, n, x0, x1, y0, y1, lon0, lat0, dLon, dLat, N, timeout: window.__ltTimeout },
      (d) => { if (id === LT.req) { LT.msg = `${d.done}/${tiles.count}`; ltRefresh(); } });
    if (id !== LT.req) return;
    const { ok, fails, lastErr, grid, hf } = r;
    if (ok === 0) { LT.state = 'fail'; LT.msg = lastErr || '加载失败'; LT.key = ''; ltRefresh(); window.__lt = 'fail'; return; }
    for (let j = 0, q = 0; j < N; j++) for (let i = 0; i < N; i++, q++) {
      if (grid[q] === grid[q]) continue; // tile missing -> built-in ETOPO1
      const v = elevAt(lon0 + (i + 0.5) * dLon, lat0 + (j + 0.5) * dLat); grid[q] = v; hf[q] = THREE.DataUtils.toHalfFloat(v);
    }
    if (id !== LT.req) return;
    const tex = new THREE.DataTexture(hf, N, N, THREE.RedFormat, THREE.HalfFloatType);
    tex.generateMipmaps = true; tex.minFilter = THREE.LinearMipmapLinearFilter; tex.magFilter = THREE.LinearFilter;
    tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping; tex.colorSpace = THREE.NoColorSpace; tex.needsUpdate = true;
    const old = uniforms.uLH.value; uniforms.uLOn.value = 0;
    uniforms.uLH.value = tex; old.dispose();
    uniforms.uL.value.set((((lon0 + 180) / 360) % 1 + 1) % 1, (lat0 + 90) / 180, 2 * halfLon / 360, 2 * halfLat / 180);
    uniforms.uLTexel.value.set(1 / N, 1 / N);
    Object.assign(LT, { state: 'ok', grid, N, lon0, lat0, dLon, dLat, z, km: 40075 * Math.cos(lat * D2R) / (256 * n), want: 1, msg: `${ok} 块瓦片${fails ? `，${fails} 块失败` : ''}` });
    window.__lt = 'ok';
    if (myLoc) { fillLocCard(); }
  }
  function localElev(lon, lat) {
    if (LT.state !== 'ok' || !LT.grid || !params.local) return null;
    let dl = ((lon - LT.lon0) % 360 + 360) % 360;
    const fx = dl / LT.dLon - 0.5, fy = (lat - LT.lat0) / LT.dLat - 0.5, N = LT.N;
    if (fx < 1 || fy < 1 || fx > N - 2 || fy > N - 2) return null;
    const x0 = Math.floor(fx), y0 = Math.floor(fy), tx = fx - x0, ty = fy - y0, g = LT.grid;
    return (g[y0 * N + x0] * (1 - tx) + g[y0 * N + x0 + 1] * tx) * (1 - ty) + (g[(y0 + 1) * N + x0] * (1 - tx) + g[(y0 + 1) * N + x0 + 1] * tx) * ty;
  }
  const bestElev = (lon, lat) => { const v = localElev(lon, lat); return v != null ? v : elevAt(lon, lat); };

  // ------------------------------------------------ v6: elevation profile from the pin to a nearby feature
  let prof = null;
  function showProfile(x) {
    prof = { name: x.name, cat: x.cat, lon: x.tlon, lat: x.tlat };
    uniforms.uProfA.value.copy(llDir(myLoc.lon, myLoc.lat, new THREE.Vector3())); uniforms.uProfB.value.copy(llDir(prof.lon, prof.lat, new THREE.Vector3()));
    uniforms.uProfOn.value = 1;
    document.querySelectorAll('#lc-body li.pf').forEach((li) => li.classList.toggle('sel', +li.dataset.i === window.__nearby.near.indexOf(x)));
    renderProfile(); const el = $('lc-prof'); if (el && el.scrollIntoView) el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
  function clearProfile() { prof = null; uniforms.uProfOn.value = 0; uniforms.uProfPOn.value = 0; const el = $('lc-prof'); if (el) el.innerHTML = ''; document.querySelectorAll('#lc-body li.pf').forEach((li) => li.classList.remove('sel')); }
  function renderProfile() {
    const box = $('lc-prof'); if (!box || !prof || !myLoc) return;
    const A = llDir(myLoc.lon, myLoc.lat, new THREE.Vector3()), B = llDir(prof.lon, prof.lat, new THREE.Vector3());
    const om = A.angleTo(B), D = om * 6371, M = 240, pts = [];
    let src = 'ETOPO1 约 3.7 km', anyLocal = false;
    for (let i = 0; i <= M; i++) {
      const t = i / M, s0 = Math.sin((1 - t) * om), s1 = Math.sin(t * om), so = Math.sin(om) || 1;
      const P = om < 1e-6 ? A.clone() : A.clone().multiplyScalar(s0 / so).add(B.clone().multiplyScalar(s1 / so));
      const la = Math.asin(THREE.MathUtils.clamp(P.y, -1, 1)) / D2R; const u = Math.atan2(P.z, -P.x) / (2 * Math.PI); const lo = ((u * 360 + 720) % 360) - 180;
      const lv = localElev(lo, la); if (lv != null) anyLocal = true;
      pts.push({ t, d: t * D, e: lv != null ? lv : elevAt(lo, la), P });
    }
    if (anyLocal) src = `AWS Terrarium z${LT.z} 约 ${LT.km.toFixed(1)} km`;
    let mn = Math.min(...pts.map((p) => p.e)), mx = Math.max(...pts.map((p) => p.e));
    const hi = pts.reduce((a, b) => (b.e > a.e ? b : a)); let up = 0; for (let i = 1; i < pts.length; i++) up += Math.max(0, pts[i].e - pts[i - 1].e);
    const lo0 = Math.min(mn, 0) - (mx - mn) * 0.08 - 20, hi0 = mx + (mx - mn) * 0.12 + 20;
    const W = 280, H = 104, L = 34, R = 6, T = 8, Bm = 18;
    const X = (d) => L + (W - L - R) * d / Math.max(D, 1e-6), Y = (e) => T + (H - T - Bm) * (1 - (e - lo0) / (hi0 - lo0));
    const line = pts.map((p, i) => `${i ? 'L' : 'M'}${X(p.d).toFixed(1)},${Y(p.e).toFixed(1)}`).join('');
    const area = `${line}L${X(D).toFixed(1)},${(H - Bm).toFixed(1)}L${X(0).toFixed(1)},${(H - Bm).toFixed(1)}Z`;
    const sea = mn < 0 ? `<line x1="${L}" x2="${W - R}" y1="${Y(0).toFixed(1)}" y2="${Y(0).toFixed(1)}" stroke="#2f6fd0" stroke-dasharray="3 2" stroke-width="0.8"/>` : '';
    const fm = (e) => `${Math.round(e).toLocaleString()}`;
    box.innerHTML = `<div class="prof"><div class="ph"><span>地形剖面：我的位置 → ${prof.name}</span><button class="px" title="关闭剖面">×</button></div>
      <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><defs><linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c8743a" stop-opacity="0.85"/><stop offset="1" stop-color="#f2d29b" stop-opacity="0.55"/></linearGradient></defs>
      <rect x="${L}" y="${T}" width="${W - L - R}" height="${H - T - Bm}" fill="rgba(255,255,255,0.6)"/>${sea}
      <path d="${area}" fill="url(#pg)"/><path d="${line}" fill="none" stroke="#b24a00" stroke-width="1.3"/>
      <text x="${L - 3}" y="${Y(mx) + 3}" font-size="9" text-anchor="end" fill="#555">${fm(mx)}</text><text x="${L - 3}" y="${Y(Math.max(mn, lo0)) + 3}" font-size="9" text-anchor="end" fill="#555">${fm(mn)}</text>
      <text x="${L}" y="${H - 5}" font-size="9" fill="#555">0</text><text x="${W - R}" y="${H - 5}" font-size="9" text-anchor="end" fill="#555">${fmtKm(D)}</text>
      <text x="${(L + W) / 2}" y="${H - 5}" font-size="9" text-anchor="middle" fill="#999">海拔 m / 距离</text>
      <line id="pf-cur" x1="0" x2="0" y1="${T}" y2="${H - Bm}" stroke="#d0231a" stroke-width="1" visibility="hidden"/><circle id="pf-dot" r="2.6" fill="#d0231a" visibility="hidden"/></svg>
      <div class="pv" id="pf-v">最高 ${fm(hi.e)} m（距起点 ${fmtKm(hi.d)}）· 最低 ${fm(mn)} m · 累计爬升约 ${fm(up)} m</div>
      <div class="lt">直线距离 ${fmtKm(D)} · 高程：${src}</div></div>`;
    box.querySelector('.px').onclick = (e) => { e.stopPropagation(); clearProfile(); };
    const svg = box.querySelector('svg'), cur = box.querySelector('#pf-cur'), dot = box.querySelector('#pf-dot'), pv = box.querySelector('#pf-v');
    const base = pv.textContent;
    const move = (ev) => {
      const r = svg.getBoundingClientRect(); const xs = (ev.clientX - r.left) / r.width * W; const d = THREE.MathUtils.clamp((xs - L) / (W - L - R), 0, 1) * D;
      const p = pts[Math.round(d / Math.max(D, 1e-6) * M)];
      cur.setAttribute('x1', X(p.d)); cur.setAttribute('x2', X(p.d)); cur.setAttribute('visibility', 'visible');
      dot.setAttribute('cx', X(p.d)); dot.setAttribute('cy', Y(p.e)); dot.setAttribute('visibility', 'visible');
      pv.textContent = `距起点 ${fmtKm(p.d)} · 海拔 ${fm(p.e)} m`;
      uniforms.uProfP.value.copy(p.P); uniforms.uProfPOn.value = 1;
    };
    const leave = () => { cur.setAttribute('visibility', 'hidden'); dot.setAttribute('visibility', 'hidden'); pv.textContent = base; uniforms.uProfPOn.value = 0; };
    svg.addEventListener('pointermove', move); svg.addEventListener('pointerdown', move); svg.addEventListener('pointerleave', leave);
    window.__profile = { name: prof.name, D, mx, mn, src, n: pts.length };
  }
  function clearLocation() {
    myLoc = null; pin.visible = false; uniforms.uPinOn.value = 0; try { localStorage.removeItem(LS_KEY); } catch (e) { }
    $('b-fly').disabled = true; $('b-clear').style.display = 'none'; $('loc-card').classList.remove('on');
    locStatus('尚未设置 · 可自动定位、搜索城市或在地球上点选'); $('prompt').classList.add('on');
  }
  // camera flight: centre the pin at a regional zoom (~1,200 km tall view)
  const TILT_T = Math.tan(TILT);
  function viewFor(lon, lat) {
    const P = llDir(lon, lat, new THREE.Vector3());
    const r = Math.cos(lat * D2R);
    let qx = Math.sin(lat * D2R) * TILT_T; qx = THREE.MathUtils.clamp(qx, -r * 0.985, r * 0.985);
    const qz = Math.sqrt(Math.max(0, r * r - qx * qx));
    const spinA = Math.atan2(qx, qz) - Math.atan2(P.x, P.z);
    const wy = qx * Math.sin(TILT) + P.y * Math.cos(TILT);
    return { spin: spinA, pitch: Math.atan2(wy, qz * 1.0 + 1e-9) };
  }
  const FLY_DIST = 1.36;
  function flyToMe(instant) {
    if (!myLoc) return;
    params.autoRotate = false; $('t-rotate').checked = false;
    const v = viewFor(myLoc.lon, myLoc.lat);
    let ds = v.spin - view.spin; ds = Math.atan2(Math.sin(ds), Math.cos(ds));
    const to = { spin: view.spin + ds, pitch: v.pitch, dist: FLY_DIST };
    if (instant) { view.fly = null; view.spin = to.spin; view.spinVel = 0; view.pitch = view.pitchT = to.pitch; view.dist = view.distT = to.dist; flyDone(); return; }
    const ang = Math.hypot(ds, v.pitch - view.pitch);
    view.fly = { t0: performance.now(), dur: 1400 + 900 * Math.min(1, ang / 2), from: { spin: view.spin, pitch: view.pitch, dist: view.dist }, to, bump: Math.min(1.6, ang * 0.9) * (view.dist < 3 ? 1 : 0.3) };
    view.spinVel = 0;
  }
  function flyDone() { view.lastInput = performance.now(); $('loc-card').classList.add('on'); winState = null; if (myLoc) loadLocalTerrain(myLoc.lon, myLoc.lat).catch((e) => { console.warn('local terrain', e); LT.state = 'fail'; LT.msg = '处理失败'; ltRefresh(); }); }
  function placeByClick(sx, sy) {
    let ll = sphereHit(sx, sy); if (!ll) return;
    for (let k = 0; k < 2; k++) { const r2 = radiusAt(smoothElev(ll[0], ll[1])); const l2 = sphereHit(sx, sy, r2); if (l2) ll = l2; }
    setPickMode(false); setLocation({ lon: ll[0], lat: ll[1], method: 'click' }, { fly: false }); $('loc-card').classList.add('on');
    if (view.dist < 2.4) loadLocalTerrain(ll[0], ll[1]).catch((e) => console.warn('local terrain', e));
  }
  function setPickMode(v) { pickMode = v; $('b-pick').classList.toggle('on', v); canvas.style.cursor = v ? 'crosshair' : ''; $('pick-hint').classList.toggle('on', v); }
  // auto location: browser geolocation first; network IP lookup as fallback (and quick first guess)
  let locating = false;
  async function autoLocate(reason) {
    if (locating) return; locating = true; $('b-locate').disabled = true;
    locStatus('<span class="spin"></span>正在通过浏览器定位…', 'busy');
    let ipP = null, ipDone = null;
    const startIP = () => { if (!ipP) { ipP = ipLocate(gaz); ipP.then((r) => { ipDone = r; }, () => { }); } return ipP; };
    const gpsP = gpsLocate(15000);
    const quick = await Promise.race([gpsP.then((r) => ({ gps: r }), (e) => ({ gpsErr: e })), new Promise((r) => setTimeout(() => r({ slow: true }), 2500))]);
    let msgGps = '';
    if (quick.gps) { setLocation({ ...quick.gps, method: 'gps' }); }
    else {
      msgGps = quick.gpsErr ? quick.gpsErr.message : '浏览器定位未响应';
      locStatus(`<span class="spin"></span>${msgGps}，改用网络 IP 定位…`, 'busy');
      try {
        const ip = await startIP();
        const d = gaz.describe(ip.lon, ip.lat);
        setLocation({ lon: ip.lon, lat: ip.lat, name: d.name, ctx: d.ctx, method: 'ip', src: ip.src });
        toast(`已通过网络 IP 定位到 <b>${d.name}</b>（城市级，近似）。不准？可搜索城市或在地球上点选修正。`);
      } catch (e) {
        locStatus(`自动定位失败：${msgGps}；${e.message}。<br>请在下方搜索城市，或点“在地球上点选”。`, 'err');
        $('prompt').classList.add('on');
      }
      // a late browser fix (user granted permission after a while) upgrades the IP guess
      if (quick.slow) gpsP.then((r) => { if (!myLoc || myLoc.method === 'ip') { setLocation({ ...r, method: 'gps' }); toast('已获得浏览器精确定位，位置已更新。'); } }, () => { });
    }
    locating = false; $('b-locate').disabled = false;
  }
  function shareLink() { return `${location.origin}${location.pathname}#loc=${myLoc.lat.toFixed(4)},${myLoc.lon.toFixed(4)},${encodeURIComponent(myLoc.name)}`; }
  async function shareLoc() {
    if (!myLoc) return; const url = shareLink();
    try { if (navigator.share && QUALITY.mobile) { await navigator.share({ title: `浮雕地球仪 · ${myLoc.name}`, text: `看看${myLoc.name}周边的山川地形`, url }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
    try { await navigator.clipboard.writeText(url); toast(`分享链接已复制：<br><b>${url.replace(/</g, '&lt;')}</b>`); }
    catch (e) { prompt('复制这个链接分享给朋友：', url); }
  }
  let toastT = 0;
  function toast(html) { const el = $('toast'); el.innerHTML = html; el.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('on'), 6500); }
  // search box with offline autocomplete
  const qEl = $('loc-q'), sug = $('loc-sug'); let sugItems = [], sugSel = -1;
  const renderSug = () => {
    sug.innerHTML = sugItems.map((it, i) => `<div class="s${i === sugSel ? ' sel' : ''}" data-i="${i}"><b>${it.name}</b><span>${it.ctx || ''}</span></div>`).join('');
    sug.classList.toggle('on', sugItems.length > 0);
  };
  const choose = (it) => {
    sugItems = []; renderSug(); qEl.value = ''; qEl.blur();
    if (it.coord) setLocation({ lon: it.lon, lat: it.lat, method: 'coord' }); else setLocation({ lon: it.lon, lat: it.lat, name: it.name, ctx: it.ctx, method: 'search' });
  };
  qEl.addEventListener('input', () => { sugItems = gaz.search(qEl.value, 8); sugSel = sugItems.length ? 0 : -1; renderSug(); });
  qEl.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { sugSel = Math.min(sugItems.length - 1, sugSel + 1); renderSug(); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { sugSel = Math.max(0, sugSel - 1); renderSug(); e.preventDefault(); }
    else if (e.key === 'Enter' && sugItems[sugSel]) choose(sugItems[sugSel]);
    else if (e.key === 'Escape') { sugItems = []; renderSug(); }
  });
  sug.addEventListener('pointerdown', (e) => { const d = e.target.closest('.s'); if (d) { e.preventDefault(); choose(sugItems[+d.dataset.i]); } });
  qEl.addEventListener('blur', () => setTimeout(() => { sugItems = []; renderSug(); }, 150));
  $('b-locate').addEventListener('click', () => autoLocate('manual'));
  $('b-pick').addEventListener('click', () => setPickMode(!pickMode));
  $('b-fly').addEventListener('click', () => flyToMe(false));
  $('b-clear').addEventListener('click', clearLocation);
  $('lc-close').addEventListener('click', () => $('loc-card').classList.remove('on'));
  $('prompt').addEventListener('click', () => { $('prompt').classList.remove('on'); qEl.focus(); });
  bindToggle('t-rings', (v) => { uniforms.uRingsOn.value = v ? 1 : 0; });
  bindToggle('t-local', (v) => { params.local = v; LT.want = v && LT.state === 'ok' ? 1 : 0; if (v && myLoc && LT.state !== 'ok') loadLocalTerrain(myLoc.lon, myLoc.lat).catch(() => { }); if (myLoc) fillLocCard(); });
  // HTML labels that follow the pin / rings
  const pinLbl = $('pin-label'), ringLbls = [100, 250, 500, 1000].map((r) => { const d = document.createElement('div'); d.className = 'ring-lbl'; d.textContent = `${r} km`; document.body.appendChild(d); return { r, el: d }; });
  const tmpP = new THREE.Vector3(), tmpC = new THREE.Vector3();
  const destPt = (lon, lat, brg, km) => { const dr = km / 6371, la = lat * D2R, b = brg * D2R; const la2 = Math.asin(Math.sin(la) * Math.cos(dr) + Math.cos(la) * Math.sin(dr) * Math.cos(b)); const lo2 = lon * D2R + Math.atan2(Math.sin(b) * Math.sin(dr) * Math.cos(la), Math.cos(dr) - Math.sin(la) * Math.sin(la2)); return [lo2 / D2R, la2 / D2R]; };
  const screenOf = (local, out) => { tmpP.copy(local).applyMatrix4(spin.matrixWorld); const vis = tmpP.dot(tmpC.copy(camera.position).sub(tmpP)) > 0; tmpP.project(camera); out.x = (tmpP.x * 0.5 + 0.5) * window.innerWidth; out.y = (-tmpP.y * 0.5 + 0.5) * window.innerHeight; out.vis = vis && tmpP.z < 1; return out; };
  const sp = {};
  function updatePin(now) {
    if (!myLoc) { pinLbl.classList.remove('on'); ringLbls.forEach((r) => r.el.classList.remove('on')); return; }
    const r = radiusAt(pinState.hm);
    pin.position.copy(pinState.dir).multiplyScalar(r - 0.0015);
    pin.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), pinState.dir);
    pin.updateMatrixWorld(true);
    const wp = pin.getWorldPosition(new THREE.Vector3()); const L = wp.distanceTo(camera.position);
    const s = Math.min(0.021 * L, 0.085); pin.scale.setScalar(s);
    const H = window.innerHeight; uniforms.uKmPx.value = 2 * L * Math.tan(camera.fov * D2R / 2) / H * 6371;
    uniforms.uPinT.value = now / 1000;
    screenOf(tmpC.copy(pinState.dir).multiplyScalar(r), sp); const baseVis = sp.vis;
    const tip = pinState.dir.clone().multiplyScalar(r + s * 1.45);
    screenOf(tip, sp);
    pinLbl.classList.toggle('on', baseVis); pinLbl.style.transform = `translate(${sp.x.toFixed(1)}px, ${sp.y.toFixed(1)}px)`;
    const kmpx = uniforms.uKmPx.value;
    for (const rl of ringLbls) {
      const rpx = rl.r / kmpx; const show = uniforms.uRingsOn.value > 0.5 && rpx > 90 && rpx < 1500;
      if (!show) { rl.el.classList.remove('on'); continue; }
      const [lo, la] = destPt(myLoc.lon, myLoc.lat, 0, rl.r);
      const p3 = llDir(lo, la, new THREE.Vector3()); p3.multiplyScalar(radiusAt(smoothElev(lo, la)));
      screenOf(p3, sp);
      rl.el.classList.toggle('on', sp.vis); rl.el.style.transform = `translate(${sp.x.toFixed(1)}px, ${sp.y.toFixed(1)}px)`;
    }
  }

  // ---- mobile bottom sheet
  const panel = $('panel');
  $('sheet-handle').addEventListener('click', () => panel.classList.toggle('open'));
  $('m-fly').addEventListener('click', (e) => { e.stopPropagation(); if (myLoc) flyToMe(false); else { panel.classList.add('open'); $('loc-q').focus(); } });
  $('m-loc').addEventListener('click', (e) => { e.stopPropagation(); panel.classList.add('open'); });
  canvas.addEventListener('pointerdown', () => { if (QUALITY.mobile || window.innerWidth <= 700) panel.classList.remove('open'); });
  const syncMbar = () => { $('m-loc').textContent = myLoc ? `我的位置：${myLoc.name}` : '设置我的位置'; requestAnimationFrame(() => {}); };
  setInterval(syncMbar, 1000); syncMbar();
  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    const nd = distDefault(); if (Math.abs(view.distT - DIST_DEF) < 0.05 && !view.fly) { view.distT = nd; } DIST_DEF = nd;
  }
  window.addEventListener('resize', resize); resize();

  window.globe = {
    lookAt(lon, lat = 15, dist) { view.spin = lonToSpin(lon); view.spinVel = 0; view.pitchT = view.pitch = lat * D2R; if (dist) view.dist = view.distT = dist; view.lastInput = performance.now(); },
    raw(spinR, pitchR, dist) { view.spin = spinR; view.spinVel = 0; view.pitch = view.pitchT = pitchR; if (dist) view.dist = view.distT = dist; view.lastInput = performance.now(); },
    setMode, setExag,
    setAutoRotate(v) { $('t-rotate').checked = v; params.autoRotate = v; },
    setLabels(v) { if (params.labels !== v) { $('t-labels').checked = v; params.labels = v; drawOverlayBase(); overTex.needsUpdate = true; winState = null; } },
    renderNow() { tick(performance.now(), true); updateWindow(true); tick(performance.now(), true); },
    renderOnce(force = true) { skipRender = true; tick(performance.now(), force); skipRender = false; updateWindow(force); tick(performance.now(), force); }, // frame capture: one GPU render per frame
    pickAt(x, y) { pick(x, y); },
    freeze(v) { renderer.setAnimationLoop(v ? null : () => tick(performance.now())); },
    setLocation: (lon, lat, name, ctx, method = 'coord') => setLocation({ lon, lat, name, ctx, method }, { fly: false }),
    flyToMe: (instant) => flyToMe(instant), clearLocation, autoLocate: () => autoLocate('api'), search: (t) => gaz.search(t),
    showLocCard: (v) => $('loc-card').classList.toggle('on', v), setPickMode, get myLoc() { return myLoc; }, elevAt,
        view, uniforms, ready: false, get LT() { return LT; }, showProfileIdx: (i) => showProfile(window.__nearby.near[i]), clearProfile, loadLocalTerrain, getLayout,
  };

  let prev = performance.now(), viewShift = 0, skipRender = false;
  const target = new THREE.Vector3(), tmpV = new THREE.Vector3();
  function tick(now, force) {
    const dt = Math.min(0.05, (now - prev) / 1000); prev = now;
    const idle = now - view.lastInput > 3000 && pointers.size === 0;
    if (pointers.size === 0) {
      view.spin += view.spinVel * dt; view.spinVel *= Math.exp(-dt * 2.2);
      if (params.autoRotate && idle) view.spin += dt * 0.06 * Math.min(1, (now - view.lastInput - 3000) / 3000);
    }
    if (view.fly) {
      const f = view.fly; let t = Math.min(1, (now - f.t0) / f.dur); const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      view.spin = f.from.spin + (f.to.spin - f.from.spin) * e; view.spinVel = 0;
      view.pitch = view.pitchT = f.from.pitch + (f.to.pitch - f.from.pitch) * e;
      view.dist = view.distT = Math.exp(Math.log(f.from.dist) + (Math.log(f.to.dist) - Math.log(f.from.dist)) * e) * (1 + f.bump * Math.sin(Math.PI * e));
      view.lastInput = now;
      if (t >= 1) { view.fly = null; flyDone(); }
    }
    view.pitch += (view.pitchT - view.pitch) * Math.min(1, dt * 8);
    view.dist += (view.distT - view.dist) * Math.min(1, dt * 7);
    if (force) { view.pitch = view.pitchT; view.dist = view.distT; }
    spin.rotation.y = view.spin;
    // product framing when far; globe-centred when zoomed in
    const zt = THREE.MathUtils.smoothstep(view.dist, 2.6, DIST_DEF);
    // regional zoom: orbit a surface point and tilt the camera (looking north) so the relief reads in 3D
    const obl = OBL_MAX * (1 - THREE.MathUtils.smoothstep(view.dist, 1.45, 2.4));
    if (obl > 1e-4) {
      target.set(0, Math.sin(view.pitch), Math.cos(view.pitch)); const h = view.dist - 1;
      camera.position.set(0, Math.sin(view.pitch - obl) * h, Math.cos(view.pitch - obl) * h).add(target);
    } else {
      const portrait = window.innerWidth < window.innerHeight * 0.8;
      target.set(0, (portrait ? -0.62 : -0.36) * zt, 0);
      camera.position.set(0, Math.sin(view.pitch) * view.dist, Math.cos(view.pitch) * view.dist).add(target);
    }
    camera.lookAt(target);
    const cq = camera.quaternion;
    key.position.copy(tmpV.set(-3.6, 3.4, 3.0).applyQuaternion(cq)); key.target.position.set(0, -0.4, 0);
    fill.position.set(3.5, -0.2, 2.2).applyQuaternion(cq);
    rim.position.set(1.8, 2.6, -3.5).applyQuaternion(cq);
    scene.updateMatrixWorld();
    uniforms.uKeyDir.value.copy(key.position).sub(key.target.position).normalize().transformDirection(camera.matrixWorldInverse);
    // detail window bookkeeping: refresh once the view has settled
    const vk = `${view.spin.toFixed(3)}|${view.pitch.toFixed(3)}|${view.dist.toFixed(3)}`;
    if (vk !== lastViewKey) { lastViewKey = vk; winDirty = now; }
    else if (winDirty && now - winDirty > 220) { winDirty = 0; updateWindow(false); }
    { const hv = view.dist > 1.9; if (hardware[0].visible !== hv) hardware.forEach((o) => { o.visible = hv; }); }
    { // phones: when the location card covers the top, shift the view so the pin sits in the lower half
      const W = window.innerWidth, H = window.innerHeight;
      const want = (W < 700 && $('loc-card').classList.contains('on') && view.dist < 2.4) ? H * 0.16 : 0;
      viewShift += (want - viewShift) * Math.min(1, dt * 6); if (force) viewShift = want;
      if (viewShift > 0.5) camera.setViewOffset(W, H, 0, -viewShift, W, H); else if (camera.view && camera.view.enabled) camera.clearViewOffset();
    }
    { const t = LT.want && params.local ? 1 : 0, u = uniforms.uLOn; u.value += THREE.MathUtils.clamp(t - u.value, -dt / 0.5, dt / 0.5); if (force) u.value = t; }
    { // detail-window cross-fade (~0.3 s): new window in, then the previous one out
      const a = uniforms.uWinOn, b = uniforms.uWinOn2, sp = force ? 1 : dt / 0.3;
      if (winFade.want > a.value) a.value = Math.min(1, a.value + sp); else if (winFade.want < a.value) a.value = Math.max(0, a.value - sp);
      if (a.value >= 1 || winFade.want === 0) b.value = Math.max(0, b.value - sp);
    }
    updatePin(now);
    if (!skipRender) renderer.render(scene, camera);
  }
  renderer.setAnimationLoop(() => tick(performance.now()));
  tick(performance.now(), true);
  window.__dbg = { fillC, overC, iceC, legend: (k) => legendPanel(k).toDataURL() };
  if (!/debug/.test(location.hash)) for (const t of [fillTex, iceTex]) { renderer.initTexture(t); if (t.image && t.image.width > 1) { t.image.width = 1; t.image.height = 1; } }
  setProgress(1); $('loading').classList.add('gone');
  window.globe.ready = true;
  // ---- progressive upgrade: satellite imagery + full-resolution elevation in the background
  setTimeout(loadSat, 1500);
  async function upgradeHeight() {
    let id = QUALITY.height; if (!id) { window.__hq = 'skipped'; return; }
    if (!window.__MANIFEST[id]) id = 'd-h8k'; // offline single-file build ships only the 8K set
    const pill = $('hq'), man = window.__MANIFEST; const is8 = id === 'd-h8k';
    const total = man[id].size + (is8 ? man['d-hesc'].size : 0); let got = 0;
    const label = is8 ? '8K' : '4K';
    pill.classList.add('on'); pill.textContent = `正在加载${label}高精度地形 0%`;
    const tick = (n) => { got += n; pill.textContent = `正在加载${label}高精度地形 ${Math.round(got / total * 100)}%`; };
    try {
      const [bytes, esc] = await Promise.all([fetchAsset(id, tick), is8 ? fetchAsset('d-hesc', tick) : null]);
      pill.textContent = `正在解码${label}地形…`;
      const W = is8 ? 8192 : 4096, H = W / 2;
      const r = await decodeHeight({ kind: is8 ? 'webp' : 'i16', W, H, bytes, esc, maxTex: Math.min(8192, maxTex) });
      if (is8) window.__hcheck = r.sum;
      const T = heightTexture(r.mips); const old = uniforms.uHeight.value;
      uniforms.uHeight.value = T.tex; uniforms.uTexel.value.set(1 / T.w, 1 / T.h); uniforms.uHSize.value.set(T.w, T.h);
      uniforms.uVLod.value = Math.max(0, 2.6 - Math.log2(8192 / T.w)); old.dispose();
      HW = r.W; HH = r.H; Hq = r.q; window.__hres = T.w;
      if (myLoc) { pinState.hm = smoothElev(myLoc.lon, myLoc.lat); fillLocCard(); }
      pill.textContent = `已升级为 ${label} 高精度地形`; setTimeout(() => pill.classList.remove('on'), 2500);
    } catch (e) { console.warn('height upgrade failed', e); pill.textContent = '高精度地形加载失败，继续使用标准精度'; setTimeout(() => pill.classList.remove('on'), 4000); }
    window.__hq = 'done';
  }
  setTimeout(upgradeHeight, 300);
  {
    let saved = null; try { saved = JSON.parse(localStorage.getItem(LS_KEY) || 'null'); } catch (e) { }
    const sh = decodeURIComponent(location.hash).match(/loc=(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)(?:,([^&]*))?/);
    if (sh && Math.abs(+sh[1]) <= 90 && Math.abs(+sh[2]) <= 180) {
      const d = gaz.describe(+sh[2], +sh[1]);
      setLocation({ lon: +sh[2], lat: +sh[1], name: (sh[3] || '').slice(0, 40) || d.name, ctx: sh[3] ? '' : d.ctx, method: 'share' }, { save: false, fly: !/nofly/.test(location.hash) });
      toast('正在查看分享的位置。点“重新定位”可切换到你自己的位置。');
    } else if (saved && isFinite(saved.lon) && isFinite(saved.lat)) { myLoc = saved; applyLocation({ fly: !/nofly/.test(location.hash) }); }
    else if (!/noauto/.test(location.hash)) { $('prompt').classList.add('on'); autoLocate('startup'); }
    else { clearLocation(); }
  }
}

main().catch((e) => { console.error(e); setStatus('加载失败：' + e.message); });
