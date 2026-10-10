// Printed-globe artwork: country fills, linework and a densely packed, collision-free label layout.
// Everything is defined in physical globe units (degrees of arc) so the same design can be rendered
// at base resolution (whole globe) and into a high-resolution "detail window" when zoomed in.
import { geoPath, geoGraticule, geoArea, geoBounds } from 'd3-geo';
import * as topojson from 'topojson-client';

export const BASE_W = 8192;
export const PPD0 = BASE_W / 360; // base pixels per degree
export const FONTS = {
  sans: '"RGSans","PingFang SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif',
  sansB: '"RGSansB","PingFang SC","Microsoft YaHei","Noto Sans CJK SC",sans-serif',
  serifB: '"RGSerifB","Songti SC","SimSun","Noto Serif CJK SC",serif',
};
// vivid "school globe" palette (sRGB)
export const PALETTE = ['#fad545', '#f59ac3', '#a4d65e', '#f8a64c', '#c49fe9', '#78d3c3', '#f68b7b', '#dbe769'];
const FIXED = { '156': 0, '643': 2, '356': 1, '496': 1, '398': 3, '036': 1, '840': 3, '124': 4, '076': 2, '304': 5, '392': 6, '010': -1, '360': 6 };

export function assignColors(topo) {
  const geoms = topo.objects.countries.geometries;
  const feats = topojson.feature(topo, topo.objects.countries).features;
  const nb = topojson.neighbors(geoms);
  const order = feats.map((f, i) => [i, geoArea(f)]).sort((a, b) => b[1] - a[1]).map((a) => a[0]);
  const col = new Array(feats.length).fill(-2);
  feats.forEach((f, i) => { const id = String(f.id); if (FIXED[id] !== undefined) col[i] = FIXED[id]; });
  for (const i of order) {
    if (col[i] !== -2) continue;
    const used = new Set(nb[i].map((j) => col[j]));
    // also avoid colours of neighbours-of-neighbours when possible for a livelier patchwork
    let k = (i * 5 + 3) % PALETTE.length, n = 0;
    while (used.has(k) && n < PALETTE.length) { k = (k + 1) % PALETTE.length; n++; }
    col[i] = k;
  }
  return { feats, col };
}

function shade(hex, f) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return `rgb(${Math.round(r * f)},${Math.round(g * f)},${Math.round(b * f)})`;
}

// ------------------------------------------------------------------ fills (political colours + inner tint band)
export function drawFills(ctx, proj, W, H, ppd, world) {
  const path = geoPath(proj, ctx);
  ctx.clearRect(0, 0, W, H);
  const { feats, col, bboxes } = world;
  const vis = world.visible || (() => true);
  feats.forEach((f, i) => {
    if (!vis(bboxes[i])) return;
    ctx.beginPath(); path(f);
    ctx.fillStyle = col[i] === -1 ? '#f4f7fa' : PALETTE[col[i]];
    ctx.fill();
  });
  // darker band along the inside of every border (classic political-globe look)
  const band = Math.min(0.24 * ppd, 14);
  ctx.lineJoin = 'round';
  feats.forEach((f, i) => {
    if (col[i] < 0 || !vis(bboxes[i])) return;
    ctx.save(); ctx.beginPath(); path(f); ctx.clip();
    ctx.strokeStyle = shade(PALETTE[col[i]], 0.82); ctx.globalAlpha = 0.38; ctx.lineWidth = band * 2; ctx.stroke();
    ctx.strokeStyle = shade(PALETTE[col[i]], 0.74); ctx.globalAlpha = 0.5; ctx.lineWidth = band * 0.8; ctx.stroke();
    ctx.restore();
  });
  ctx.globalAlpha = 1;
}

export function drawIce(ctx, proj, W, H, vec) {
  const path = geoPath(proj, ctx);
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#fff';
  for (const f of vec.glaciers.features) { ctx.beginPath(); path(f); ctx.fill(); }
}

// ------------------------------------------------------------------ linework
export function drawLines(ctx, proj, W, H, ppd, world, opt) {
  const path = geoPath(proj, ctx);
  const z = ppd / PPD0;
  const lw = (w) => w * Math.pow(z, 0.55) * (W >= 8192 || z > 1 ? 1 : 1); // sub-linear growth when zoomed
  const { vec, topo } = world;
  ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  // lakes
  ctx.beginPath(); for (const f of vec.lakes.features) path(f);
  ctx.fillStyle = '#86cdf0'; ctx.fill();
  ctx.strokeStyle = 'rgba(30,100,190,0.9)'; ctx.lineWidth = lw(0.7); ctx.stroke();
  // rivers by rank
  for (const [maxR, w, a] of [[9, 0.75, 0.75], [5, 1.1, 0.85], [3, 1.5, 0.95]]) {
    ctx.beginPath();
    for (const f of vec.rivers.features) { const r = f.properties.scalerank; if (r <= maxR && (maxR === 9 ? r > 5 : maxR === 5 ? r > 3 : true)) path(f); }
    ctx.strokeStyle = `rgba(28,105,200,${a})`; ctx.lineWidth = lw(w); ctx.stroke();
  }
  // graticule + special parallels
  if (opt.grid) {
    ctx.beginPath(); path(geoGraticule().step([15, 15]).extentMajor([[-180, -80], [180, 80]]).extentMinor([[-180, -80], [180, 80]])());
    ctx.strokeStyle = 'rgba(25,60,135,0.5)'; ctx.lineWidth = lw(0.8); ctx.stroke();
    const par = (lat, col, dash, w) => {
      ctx.beginPath(); path({ type: 'LineString', coordinates: Array.from({ length: 361 }, (_, i) => [-180 + i, lat]) });
      ctx.setLineDash(dash.map((d) => d * z * PPD0 / 22.75)); ctx.strokeStyle = col; ctx.lineWidth = lw(w); ctx.stroke(); ctx.setLineDash([]);
    };
    for (const l of [23.44, -23.44]) par(l, 'rgba(200,35,45,0.9)', [14, 9], 1.7);
    for (const l of [66.56, -66.56]) par(l, 'rgba(30,70,160,0.9)', [14, 9], 1.7);
    // international date line (Natural Earth-like course)
    const IDL = [[180, 90], [180, 75], [-169, 68], [-169, 65.5], [172.5, 60], [172.5, 52], [180, 47.5], [180, -1], [-160, -1], [-160, 6], [-150, 6],
      [-150, -10], [-157, -10], [-172.5, -12], [-172.5, -45], [180, -51], [180, -90]];
    ctx.beginPath(); path({ type: 'LineString', coordinates: IDL });
    ctx.setLineDash([10 * z, 6 * z]); ctx.strokeStyle = 'rgba(40,40,60,0.85)'; ctx.lineWidth = lw(1.5); ctx.stroke(); ctx.setLineDash([]);
  }
  // coastline & borders
  ctx.beginPath(); path(world.coast); ctx.strokeStyle = 'rgba(25,60,115,0.9)'; ctx.lineWidth = lw(1.15); ctx.stroke();
  // provincial boundaries inside China: orange dashes (as printed on the M&G globe)
  ctx.beginPath(); path(vec.provLines); ctx.setLineDash([5 * Math.pow(z, 0.8), 2.6 * Math.pow(z, 0.8)]);
  ctx.strokeStyle = 'rgba(255,250,240,0.55)'; ctx.lineWidth = lw(1.9); ctx.stroke();
  ctx.strokeStyle = 'rgba(236,112,18,0.98)'; ctx.lineWidth = lw(1.15); ctx.stroke(); ctx.setLineDash([]);
  ctx.beginPath(); path(world.borders); ctx.strokeStyle = 'rgba(255,255,255,0.55)'; ctx.lineWidth = lw(2.6); ctx.stroke();
  ctx.strokeStyle = 'rgba(110,30,60,0.95)'; ctx.lineWidth = lw(1.35); ctx.stroke();
  ctx.beginPath(); for (const f of vec.ninedash.features) path(f);
  ctx.strokeStyle = 'rgba(120,25,55,0.95)'; ctx.lineWidth = lw(2.2); ctx.stroke();
  // graduated equator band (black with white ticks every degree)
  if (opt.grid) {
    const p0 = proj([0, 0]); const bh = Math.max(3, Math.min(0.42 * ppd, 0.42 * PPD0 * Math.pow(ppd / PPD0, 0.6)));
    ctx.save();
    const run = (lon0, lon1) => {
      const a = proj([lon0, 0]), b = proj([lon1, 0]);
      if (!a || !b) return; if (b[0] < a[0]) return;
      ctx.fillStyle = 'rgba(20,20,25,0.95)'; ctx.fillRect(a[0], p0[1] - bh / 2, b[0] - a[0], bh);
    };
    for (let lon = -180; lon < 180; lon += 10) run(lon, lon + 10.05);
    ctx.fillStyle = 'rgba(255,255,255,0.95)';
    for (let lon = -180; lon < 180; lon += 1) {
      const a = proj([lon + 0.2, 0]), b = proj([lon + 0.8, 0]); if (!a || !b || b[0] < a[0]) continue;
      ctx.fillRect(a[0], p0[1] - bh * 0.22, b[0] - a[0], bh * 0.44);
    }
    ctx.restore();
  }
}

// ------------------------------------------------------------------ label styles
// size: font size in degrees (em). colours sRGB.
const ST = {
  cont: { font: 'serifB', fill: 'rgba(222,28,34,0.92)', halo: 'rgba(255,255,255,0.7)', hw: 0.07 },
  ocean: { font: 'serifB', fill: 'rgba(22,58,140,0.72)', halo: null, enFont: 'serifB', enFill: 'rgba(18,42,110,0.78)', enK: 0.36, enSp: 0.6 },
  country: { font: 'sansB', fill: '#15171c', halo: 'rgba(255,255,255,0.6)', hw: 0.13, enFont: 'sansB', enFill: '#2c2f36', enK: 0.30, enSp: 0.22, enMin: 0.3 },
  prov: { font: 'sans', fill: '#5b3d2a', halo: 'rgba(255,255,255,0.55)', hw: 0.14, enFont: 'sans', enFill: '#6a4a33', enK: 0.36, enSp: 0.12 },
  capital: { font: 'sansB', fill: '#15171c', halo: 'rgba(255,255,255,0.7)', hw: 0.18, enFont: 'sans', enFill: '#25282e', enK: 0.66 },
  pcap: { font: 'sansB', fill: '#1d1f24', halo: 'rgba(255,255,255,0.7)', hw: 0.18, enFont: 'sans', enFill: '#25282e', enK: 0.66 },
  city: { font: 'sans', fill: '#202328', halo: 'rgba(255,255,255,0.6)', hw: 0.16, enFont: 'sans', enFill: '#2b2e34', enK: 0.68 },
  sea: { font: 'serifB', fill: 'rgba(20,62,150,0.85)', halo: null, it: true, enFont: 'sans', enFill: 'rgba(20,62,150,0.85)', enK: 0.5, enIt: true },
  island_cn: { font: 'sans', fill: '#1d1f24', halo: 'rgba(255,255,255,0.6)', hw: 0.16, enFont: 'sans', enFill: '#2b2e34', enK: 0.66 },
  range: { font: 'sansB', fill: '#733812', halo: 'rgba(255,245,225,0.55)', hw: 0.14, enFont: 'sans', enFill: '#7a4320', enK: 0.5, enIt: true },
  land: { font: 'sansB', fill: '#7d4a1e', halo: 'rgba(255,245,225,0.5)', hw: 0.14, enFont: 'sans', enFill: '#80502a', enK: 0.5, enIt: true },
  peak: { font: 'sans', fill: '#4a2a12', halo: 'rgba(255,255,255,0.6)', hw: 0.16, enFont: 'sans', enFill: '#5a2c0e', enK: 0.8 },
  island: { font: 'sans', fill: '#2a2d33', halo: 'rgba(255,255,255,0.5)', hw: 0.14, enFont: 'sans', enFill: '#2a2d33', enK: 0.62, enIt: true },
  lake: { font: 'sans', fill: '#1452a8', halo: 'rgba(255,255,255,0.55)', hw: 0.14, it: true, enFont: 'sans', enFill: '#1452a8', enK: 0.64, enIt: true },
  river: { font: 'sans', fill: '#1452a8', halo: 'rgba(255,255,255,0.55)', hw: 0.14, it: true, enFont: 'sans', enFill: '#1452a8', enK: 0.64, enIt: true },
  curw: { font: 'sans', fill: 'rgba(200,30,30,0.95)', halo: 'rgba(255,255,255,0.45)', hw: 0.12, it: true },
  curc: { font: 'sans', fill: 'rgba(25,60,190,0.95)', halo: 'rgba(255,255,255,0.45)', hw: 0.12, it: true },
};
const ORDER = ['cont', 'ocean', 'country', 'capital', 'peak', 'prov', 'pcap', 'island_cn', 'sea', 'range', 'land', 'curw', 'curc', 'city', 'island', 'lake', 'river'];
const MARKER = { capital: 0.46, pcap: 0.34, city: 0.2, peak: 0.32 };

// glyph-width cache (font em units)
const wcache = new Map();
let mctx = null;
function cw(font, ch) {
  const key = font + ch; let w = wcache.get(key);
  if (w === undefined) {
    if (!mctx) mctx = document.createElement('canvas').getContext('2d');
    mctx.font = `100px ${FONTS[font]}`; w = mctx.measureText(ch).width / 100; wcache.set(key, w);
  }
  return w;
}
// layout of one text run: char centre offsets (em units) along the baseline
function runLayout(font, text, sp) {
  const ws = [...text].map((c) => cw(font, c));
  const total = ws.reduce((a, b) => a + b, 0) + sp * Math.max(0, ws.length - 1);
  let x = -total / 2; const cx = [];
  ws.forEach((w) => { cx.push(x + w / 2); x += w + sp; });
  return { ws, cx, total };
}

// ------------------------------------------------------------------ collision grid (base pixel space, x wraps)
class Grid {
  constructor(W, H, cell = 48) { this.W = W; this.H = H; this.c = cell; this.m = new Map(); }
  *cells(b) {
    const c = this.c;
    for (let gy = Math.floor(b[1] / c); gy <= Math.floor(b[3] / c); gy++)
      for (let gx = Math.floor(b[0] / c); gx <= Math.floor(b[2] / c); gx++) yield ((gx % (this.W / c)) + this.W / c) % (this.W / c) + gy * 100000;
  }
  norm(b) { // shift so x0 within [0,W)
    const s = Math.floor(b[0] / this.W) * this.W; return [b[0] - s, b[1], b[2] - s, b[3]];
  }
  hit(boxes) {
    for (let b of boxes) {
      b = this.norm(b);
      for (const k of this.cells(b)) {
        const arr = this.m.get(k); if (!arr) continue;
        for (const o of arr) {
          // compare with wrap: try shifts
          for (const s of [0, this.W, -this.W]) if (b[0] < o[2] + s && b[2] > o[0] + s && b[1] < o[3] && b[3] > o[1]) return true;
        }
      }
    }
    return false;
  }
  add(boxes) {
    for (let b of boxes) { b = this.norm(b); for (const k of this.cells(b)) { let a = this.m.get(k); if (!a) this.m.set(k, a = []); a.push(b); } }
  }
}

// boxes for a run placed at base px centre (x,y), size S px, stretch k, rotation rad, extra spacing
function runBoxes(x, y, S, k, rot, lay, pad) {
  const out = [];
  const c = Math.cos(rot), s = Math.sin(rot);
  if (Math.abs(rot) < 1e-3 && lay.total * S < 30 * S) {
    const hw = lay.total * S / 2 + pad, hh = S * 0.55 + pad;
    out.push([x - hw * k, y - hh, x + hw * k, y + hh]);
    return out;
  }
  lay.cx.forEach((cx, i) => {
    const lx = cx * S, w = lay.ws[i] * S;
    const px = x + k * (lx * c), py = y + lx * s;
    const ex = (Math.abs(c) * w + Math.abs(s) * S) / 2 + pad, ey = (Math.abs(s) * w + Math.abs(c) * S) / 2 + pad;
    out.push([px - ex * k, py - ey, px + ex * k, py + ey]);
  });
  return out;
}

const D2R = Math.PI / 180;
// Label layout for one zoom level. gL scales every label (gL < 1 = smaller text relative to the map, used for the
// zoomed-in detail window) so more names fit without overlap; rows carry a minimum level (r[9]).
// reserve: boxes (base px) kept free, e.g. the printed legend panel.
export function layoutLabels(rows, gL = 1, maxLvl = 0, reserve = []) {
  const W = BASE_W, H = BASE_W / 2;
  const grid = new Grid(W, H, 48);
  grid.add(reserve);
  const P = (lon, lat) => [(lon + 180) / 360 * W, (90 - lat) / 180 * H];
  const items = rows.filter((r) => (r[9] || 0) <= maxLvl).map((r) => ({ cls: r[0], zh: r[1], en: r[2], lon: r[3], lat: r[4], size: r[5], rot: r[6], sp: r[7], rank: r[8] }));
  items.sort((a, b) => (ORDER.indexOf(a.cls) - ORDER.indexOf(b.cls)) || (a.rank - b.rank));
  const placed = [];
  for (const it of items) {
    const st = ST[it.cls]; if (!st) continue;
    const k = 1 / Math.max(0.2, Math.cos(it.lat * D2R));
    const big = it.cls === 'cont' || it.cls === 'ocean' || (it.cls === 'country' && it.size > 1.25);
    const g = big ? Math.max(gL, 0.8) : gL;
    if (gL < 0.8 && (it.cls === 'cont' || (it.cls === 'country' && it.size > 1.25))) continue; // drawn by the base print only
    const S = it.size * PPD0 * g;
    const [x0, y0] = P(it.lon, it.lat);
    const rot = it.rot * D2R;
    const lay = runLayout(st.font, it.zh, it.sp);
    const pad = S * 0.08;
    const enLay = it.en && st.enFont ? runLayout(st.enFont, it.en, st.enSp || 0) : null;
    const enS = Math.max(S * (st.enK || 0.4), st.enMin ? st.enMin * PPD0 * g : 0);
    if (it.cls in MARKER) {
      const m = MARKER[it.cls] * PPD0 * g;
      const mb = [[x0 - m * 0.6 * k, y0 - m * 0.6, x0 + m * 0.6 * k, y0 + m * 0.6]];
      const must = it.cls === 'capital' || it.cls === 'pcap';
      if (!must && grid.hit(mb)) continue;
      const tw = lay.total * S, ew = enLay ? enLay.total * enS : 0, bw = Math.max(tw, ew), gap = m * 0.55 + S * 0.15;
      const eDy = S * 0.5 + enS * 0.62; // English line centre below the Chinese line
      // candidate block positions (zh centre); English line below, both centred on the block
      const cands = [[1, 0], [-1, 0], [0, -1], [0, 1], [1, -0.8], [1, 0.8], [-1, -0.8], [-1, 0.8]];
      let ok = null;
      for (const [dx, dy] of cands) {
        const cx = x0 + dx * (gap + bw / 2) * k;
        let cy = y0;
        if (dy < 0) cy = y0 - (m * 0.5 + S * 0.15) - (enLay ? eDy : 0) - S * 0.5 * (dx === 0 ? 1 : 0.4);
        else if (dy > 0) cy = y0 + (m * 0.5 + S * 0.15) + S * 0.5 * (dx === 0 ? 1 : 0.4);
        let bx = runBoxes(cx, cy, S, k, 0, lay, pad);
        if (enLay) bx = bx.concat(runBoxes(cx, cy + eDy, enS, k, 0, enLay, enS * 0.06));
        if (!grid.hit(bx)) { ok = { cx, cy, bx }; break; }
      }
      if (!ok && !must) continue;
      grid.add(mb);
      if (ok) grid.add(ok.bx);
      placed.push({ ...it, k, S, x: x0, y: y0, lx: ok ? ok.cx : null, ly: ok ? ok.cy : null, lay, enLay, enS, eDy });
      continue;
    }
    const eDy = S * 0.62 + enS * 0.75;
    const blockBoxes = (cx, cy) => {
      let bx = runBoxes(cx, cy, S, k, rot, lay, pad);
      if (enLay) {
        // rotated names (rivers, ranges): English follows the same angle, offset along the normal
        const ox = -Math.sin(rot) * eDy * k, oy = Math.cos(rot) * eDy;
        bx = bx.concat(runBoxes(cx + ox, cy + oy, enS, k, rot, enLay, enS * 0.1));
      }
      return bx;
    };
    const force = it.cls === 'cont' || it.cls === 'ocean' || (it.cls === 'country' && -it.rank > 250000) || it.cls === 'prov';
    let ok = null;
    const offs = [[0, 0], [0, -0.7], [0, 0.7], [0.6, 0], [-0.6, 0], [0, -1.3], [0, 1.3]];
    for (const [dx, dy] of offs) {
      const cx = x0 + dx * lay.total * S * k, cy = y0 + dy * S;
      const bx = blockBoxes(cx, cy);
      if (!grid.hit(bx)) { ok = { cx, cy, bx, en: true }; break; }
    }
    // second chance without the English line
    if (!ok && enLay && !force) {
      const bx = runBoxes(x0, y0, S, k, rot, lay, pad);
      if (!grid.hit(bx)) ok = { cx: x0, cy: y0, bx, en: false };
    }
    if (!ok) { if (!force) continue; ok = { cx: x0, cy: y0, bx: blockBoxes(x0, y0), en: true }; }
    grid.add(ok.bx);
    placed.push({ ...it, k, S, x: x0, y: y0, lx: ok.cx, ly: ok.cy, lay, enLay: ok.en ? enLay : null, enS, eDy });
  }
  return placed;
}

// ------------------------------------------------------------------ label rendering
// toPx(lon,lat) -> [x,y] in target canvas; f = target px per base px
function drawRun(ctx, x, y, S, k, rot, font, text, lay, fill, halo, hw, italic) {
  ctx.save(); ctx.translate(x, y); ctx.scale(k, 1); if (rot) ctx.rotate(rot);
  ctx.font = `${italic ? 'italic ' : ''}${S}px ${FONTS[font]}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const chars = [...text];
  if (halo) {
    ctx.strokeStyle = halo; ctx.lineWidth = S * (hw || 0.15); ctx.lineJoin = 'round';
    chars.forEach((c, i) => ctx.strokeText(c, lay.cx[i] * S, 0));
  }
  ctx.fillStyle = fill; chars.forEach((c, i) => ctx.fillText(c, lay.cx[i] * S, 0));
  ctx.restore();
}
function star(ctx, x, y, r, k) {
  ctx.save(); ctx.translate(x, y); ctx.scale(k, 1); ctx.beginPath();
  for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r; ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); }
  ctx.closePath(); ctx.fillStyle = '#e3141b'; ctx.fill(); ctx.lineWidth = r * 0.22; ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.stroke(); ctx.fill();
  ctx.restore();
}
export function marker(ctx, cls, X, Y, m, k) {
  if (cls === 'capital') star(ctx, X, Y, m * 0.62, k);
  else if (cls === 'pcap') {
    ctx.save(); ctx.translate(X, Y); ctx.scale(k, 1);
    ctx.beginPath(); ctx.arc(0, 0, m * 0.5, 0, 2 * Math.PI); ctx.fillStyle = '#fff'; ctx.fill(); ctx.lineWidth = m * 0.16; ctx.strokeStyle = '#1b1b1f'; ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, m * 0.2, 0, 2 * Math.PI); ctx.fillStyle = '#d01818'; ctx.fill(); ctx.restore();
  } else if (cls === 'city') {
    ctx.save(); ctx.translate(X, Y); ctx.scale(k, 1); ctx.beginPath(); ctx.arc(0, 0, m * 0.46, 0, 2 * Math.PI);
    ctx.fillStyle = '#fbfbf7'; ctx.fill(); ctx.lineWidth = m * 0.22; ctx.strokeStyle = '#1b1b1f'; ctx.stroke(); ctx.restore();
  } else if (cls === 'peak') {
    ctx.save(); ctx.translate(X, Y); ctx.scale(k, 1); ctx.beginPath();
    ctx.moveTo(0, -m * 0.55); ctx.lineTo(m * 0.5, m * 0.38); ctx.lineTo(-m * 0.5, m * 0.38); ctx.closePath();
    ctx.fillStyle = '#5a2c0e'; ctx.fill(); ctx.restore();
  }
}
// g: draw scale relative to the layout (<= 1 keeps the collision-free layout valid)
export function drawLabels(ctx, placed, toPx, f, vis, W, g = 1, enOn = true) {
  // draw low priority first so important names end up on top
  for (let i = placed.length - 1; i >= 0; i--) {
    const it = placed[i];
    if (vis && !vis(it.lon, it.lat)) continue;
    const st = ST[it.cls];
    const p = toPx(it.lon, it.lat); if (!p) continue;
    const reps = W ? [0, ...(p[0] < W * 0.06 ? [W] : []), ...(p[0] > W * 0.94 ? [-W] : [])] : [0];
    for (const sh of reps) {
      const X = p[0] + sh, Y = p[1];
      const S = it.S * f * g, k = it.k, fg = f * g;
      if (S < 1.2) continue;
      const enS = it.enS * fg, showEn = enOn && it.enLay && enS >= 2.2;
      if (it.cls in MARKER) {
        marker(ctx, it.cls, X, Y, MARKER[it.cls] * PPD0 * fg * (it.S / (it.size * PPD0)), k);
        if (it.lx == null) continue;
        const lx = X + (it.lx - it.x) * fg, ly = Y + (it.ly - it.y) * fg;
        drawRun(ctx, lx, ly, S, k, 0, st.font, it.zh, it.lay, st.fill, st.halo, st.hw, st.it);
        if (showEn) drawRun(ctx, lx, ly + it.eDy * fg, enS, k, 0, st.enFont, it.en, it.enLay, st.enFill, st.halo, st.hw, st.enIt);
        continue;
      }
      const lx = X + (it.lx - it.x) * fg, ly = Y + (it.ly - it.y) * fg, rot = it.rot * D2R;
      drawRun(ctx, lx, ly, S, k, rot, st.font, it.zh, it.lay, st.fill, st.halo, st.hw, st.it);
      if (showEn) {
        const e = it.eDy * fg;
        drawRun(ctx, lx - Math.sin(rot) * e * k, ly + Math.cos(rot) * e, enS, k, rot, st.enFont, it.en, it.enLay, st.enFill, st.halo, st.hw, st.enIt);
      }
    }
  }
}

// degree numbers along the equator and a few meridians (printed graticule labels)
export function drawGridLabels(ctx, toPx, f, vis, W) {
  const S = 0.42 * PPD0 * f; if (S < 1.5) return;
  const put = (t, lon, lat, dy) => {
    if (vis && !vis(lon, lat)) return;
    const p = toPx(lon, lat); if (!p) return;
    const k = 1 / Math.max(0.2, Math.cos(lat * D2R));
    const lay = runLayout('sans', t, 0);
    const reps = W ? [0, ...(p[0] < W * 0.03 ? [W] : []), ...(p[0] > W * 0.97 ? [-W] : [])] : [0];
    for (const sh of reps) drawRun(ctx, p[0] + sh + lay.total * S * 0.5 * k + S * 0.2, p[1] + dy * S, S, k, 0, 'sans', t, lay, 'rgba(25,55,125,0.9)', 'rgba(255,255,255,0.5)', 0.14);
  };
  for (let lon = -165; lon <= 180; lon += 15) {
    const t = lon === 0 ? '0°' : lon === 180 ? '180°' : `${Math.abs(lon)}°${lon > 0 ? 'E' : 'W'}`;
    put(t, lon, 0, -0.95);
  }
  for (const lon of [-150, -60, 30, 120]) for (let lat = -75; lat <= 75; lat += 15) {
    if (lat === 0) continue; put(`${Math.abs(lat)}°${lat > 0 ? 'N' : 'S'}`, lon, lat, -0.6);
  }
  const lineName = (t, lon, lat) => put(t, lon, lat, -0.7);
  for (const lon of [-100, 15, 140]) { lineName('北回归线', lon, 23.44); lineName('南回归线', lon, -23.44); }
  for (const lon of [-30, 100]) { lineName('北极圈', lon, 66.56); lineName('南极圈', lon, -66.56); }
  for (const lon of [-45, 75, 165]) lineName('赤道', lon + 7, 0);
}

// d3 treats rings by spherical winding; make sure every polygon is the "small" side
function fixWinding(fc) {
  for (const f of fc.features) {
    const g = f.geometry; if (!g) continue;
    const polys = g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
    for (const p of polys) {
      if (geoArea({ type: 'Polygon', coordinates: [p[0]] }) > 2 * Math.PI) for (const r of p) r.reverse();
    }
  }
}
export function prepareWorld(vec) {
  fixWinding(vec.lakes); fixWinding(vec.glaciers);
  const topo = vec.countries;
  const { feats, col } = assignColors(topo);
  const bboxes = feats.map((f) => geoBounds(f));
  return {
    vec, topo, feats, col, bboxes,
    borders: topojson.mesh(topo, topo.objects.countries, (a, b) => a !== b),
    coast: topojson.mesh(topo, topo.objects.countries, (a, b) => a === b),
  };
}
