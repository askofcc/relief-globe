// v6 print extras: warm / cold ocean currents (hand-authored courses) and the printed legend panel (图例 LEGEND).
import { geoPath } from 'd3-geo';
import { PPD0, BASE_W, FONTS, marker } from './print.js';

const D2R = Math.PI / 180;
// [zh, en, warm, [[lon,lat],...] (flow direction), label index]
export const CURRENTS = [
  ['墨西哥湾暖流', 'Gulf Stream', 1, [[-81, 24.6], [-79.8, 27.5], [-79.4, 30.5], [-76.5, 34], [-72.5, 36.8], [-66, 39], [-57, 40.8], [-47, 42.5]], 4],
  ['北大西洋暖流', 'North Atlantic Drift', 1, [[-42, 45], [-33, 48.5], [-24, 52], [-15, 56], [-6, 60], [3, 64], [11, 68], [20, 71.2], [32, 72.5]], 3],
  ['加那利寒流', 'Canary Current', 0, [[-13, 41], [-14.5, 35.5], [-17, 29.5], [-19.5, 24], [-22, 18.5], [-24, 14]], 2],
  ['北赤道暖流', 'N. Equatorial Current', 1, [[-24, 13], [-34, 12.5], [-44, 13], [-54, 14], [-62, 15.5]], 2],
  ['南赤道暖流', 'S. Equatorial Current', 1, [[8, -3], [-4, -4], [-16, -5], [-26, -6], [-33, -7.5]], 2],
  ['巴西暖流', 'Brazil Current', 1, [[-34.5, -11], [-37, -16], [-38.8, -21], [-42, -25.5], [-46.5, -30], [-51, -34.5], [-54, -38]], 3],
  ['福克兰寒流', 'Falklands Current', 0, [[-64, -53], [-60.5, -48], [-57.5, -43.5], [-55.5, -40]], 1],
  ['本格拉寒流', 'Benguela Current', 0, [[16.5, -34.5], [14.5, -30], [12.8, -25], [11.2, -20], [9.5, -15], [7, -10.5]], 2],
  ['厄加勒斯暖流', 'Agulhas Current', 1, [[40.8, -15], [40.5, -20], [37.5, -25], [33.5, -29.5], [29.5, -32.8], [25, -35.4], [20.5, -37.2]], 4],
  ['西澳大利亚寒流', 'W. Australian Current', 0, [[113, -36], [111.5, -31], [110.5, -26], [108.5, -21], [105, -17]], 2],
  ['东澳大利亚暖流', 'E. Australian Current', 1, [[154.5, -15], [155, -20], [154.6, -25], [154, -29.5], [153, -33.5], [151.5, -37.5]], 3],
  ['日本暖流', 'Kuroshio', 1, [[122.6, 21.5], [123.2, 24.5], [125.8, 27.8], [129.5, 30.3], [133.5, 32.5], [138, 34.2], [141.5, 36], [146, 38.2]], 4],
  ['千岛寒流', 'Oyashio', 0, [[164, 58], [161, 53.8], [157, 49.5], [152, 45.6], [147, 42.6], [143.8, 40.6]], 2],
  ['北太平洋暖流', 'North Pacific Current', 1, [[152, 40.5], [164, 42], [176, 43], [-172, 44], [-160, 45], [-148, 46], [-137, 47]], 3],
  ['阿拉斯加暖流', 'Alaska Current', 1, [[-136, 50.5], [-138.5, 54.5], [-144, 57.8], [-151, 57.8], [-158, 55.5]], 2],
  ['加利福尼亚寒流', 'California Current', 0, [[-129, 47.5], [-127.5, 43], [-125, 38.5], [-121.5, 33.5], [-117.5, 28], [-114.5, 23.5]], 2],
  ['北赤道暖流', 'N. Equatorial Current', 1, [[-112, 13.5], [-130, 13], [-148, 13], [-166, 13.5], [176, 14], [158, 14.5], [140, 15]], 3],
  ['南赤道暖流', 'S. Equatorial Current', 1, [[-86, -4.5], [-104, -6], [-122, -7], [-140, -8], [-158, -9.5], [-176, -11], [166, -12.5]], 2],
  ['秘鲁寒流', 'Peru Current', 0, [[-76, -45], [-76.5, -38.5], [-74.8, -31], [-74, -23], [-77.5, -15], [-81.5, -8], [-84, -2.5]], 3],
  ['拉布拉多寒流', 'Labrador Current', 0, [[-62, 64.5], [-58.5, 59.5], [-55.5, 54.5], [-52, 50.2], [-49.5, 46.5]], 2],
  ['东格陵兰寒流', 'East Greenland Current', 0, [[-12, 78], [-17.5, 72.5], [-25, 67.8], [-33, 64.5], [-41, 61]], 2],
  ['索马里洋流', 'Somali Current', 1, [[42, -1], [46, 3], [50, 7.5], [53, 11]], 1],
  ['西风漂流', 'West Wind Drift', 0, [[-60, -55], [-30, -51.5], [0, -50], [30, -49.5], [60, -50], [90, -51], [120, -52], [150, -53], [180, -53.5], [-150, -54], [-120, -55], [-90, -56]], 7],
];

// Catmull-Rom densification in unwrapped longitude (curved courses)
function densify(pts, n = 10) {
  const u = [pts[0].slice()];
  for (let i = 1; i < pts.length; i++) { let lo = pts[i][0]; while (lo - u[i - 1][0] > 180) lo -= 360; while (lo - u[i - 1][0] < -180) lo += 360; u.push([lo, pts[i][1]]); }
  const out = [];
  for (let i = 0; i < u.length - 1; i++) {
    const p0 = u[Math.max(0, i - 1)], p1 = u[i], p2 = u[i + 1], p3 = u[Math.min(u.length - 1, i + 2)];
    for (let j = 0; j < n; j++) {
      const t = j / n, t2 = t * t, t3 = t2 * t;
      out.push([0, 1].map((c) => 0.5 * (2 * p1[c] + (-p0[c] + p2[c]) * t + (2 * p0[c] - 5 * p1[c] + 4 * p2[c] - p3[c]) * t2 + (-p0[c] + 3 * p1[c] - 3 * p2[c] + p3[c]) * t3)));
    }
  }
  out.push(u[u.length - 1]);
  return out;
}
const norm = (lo) => ((lo + 540) % 360) - 180;
const CUR = CURRENTS.map(([zh, en, warm, pts, li]) => {
  const d = densify(pts);
  // cumulative true length (deg)
  const L = [0]; for (let i = 1; i < d.length; i++) { const cl = Math.cos((d[i][1] + d[i - 1][1]) / 2 * D2R); L.push(L[i - 1] + Math.hypot((d[i][0] - d[i - 1][0]) * cl, d[i][1] - d[i - 1][1])); }
  return { zh, en, warm, d, L, li, pts };
});
// label rows for the label layout (italic red/blue names next to the arrows)
export function currentLabelRows() {
  return CUR.map((c) => {
    const p = c.pts[Math.min(c.li, c.pts.length - 1)], q = c.pts[Math.min(c.li + 1, c.pts.length - 1)], o = c.pts[Math.max(0, c.li - 1)];
    const cl = Math.cos(p[1] * D2R);
    let ang = Math.atan2(q[1] - o[1], norm(q[0] - o[0]) * cl) / D2R; if (ang > 90) ang -= 180; if (ang < -90) ang += 180;
    if (Math.abs(ang) > 60) ang = 0; // steep courses: keep the text horizontal beside the line
    const off = 0.75; const nx = -Math.sin(ang * D2R), ny = Math.cos(ang * D2R);
    return [c.warm ? 'curw' : 'curc', c.zh, '', norm(p[0] + nx * off / cl), p[1] + ny * off, 0.40, -ang, 0.05, 0, 0];
  });
}
// warm = red, cold = blue: a chain of short arrows along the course (classic printed-atlas style)
export function drawCurrents(ctx, proj, ppd) {
  const path = geoPath(proj, ctx);
  const z = ppd / PPD0, lw = 3.4 * Math.pow(z, 0.5), a = 0.62 * PPD0 * Math.pow(z, 0.55); // arrow head length px
  const SEG = 3.6, GAP = 1.1; // true degrees
  ctx.save(); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const at = (c, tgt) => { let i = 1; while (i < c.L.length - 1 && c.L[i] < tgt) i++; const t = THREE_clamp((tgt - c.L[i - 1]) / Math.max(1e-9, c.L[i] - c.L[i - 1]));
    return { i, lo: c.d[i - 1][0] + (c.d[i][0] - c.d[i - 1][0]) * t, la: c.d[i - 1][1] + (c.d[i][1] - c.d[i - 1][1]) * t }; };
  for (const c of CUR) {
    const col = c.warm ? 'rgb(226,20,20)' : 'rgb(16,58,210)';
    const total = c.L[c.L.length - 1], n = Math.max(1, Math.round(total / (SEG + GAP))), step = total / n;
    for (let s = 0; s < n; s++) {
      const t0 = s * step + GAP * 0.5, t1 = (s + 1) * step - GAP * 0.5;
      const p0 = at(c, t0), p1 = at(c, t1);
      const pts = [[p0.lo, p0.la]]; for (let i = p0.i; i < p1.i; i++) pts.push(c.d[i]); pts.push([p1.lo, p1.la]);
      // shaft (stops short of the head)
      ctx.beginPath(); path({ type: 'LineString', coordinates: pts.map(([lo, la]) => [norm(lo), la]) });
      ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = lw * 1.8; ctx.stroke();
      ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.stroke();
      // head at the end, oriented along the course (true frame, stretched by 1/cos(lat) in x)
      const q = at(c, Math.max(0, t1 - 0.3)), cl = Math.cos(p1.la * D2R);
      let dx = norm(p1.lo - q.lo) * cl, dy = p1.la - q.la; const dl = Math.hypot(dx, dy) || 1; dx /= dl; dy /= dl;
      const P = proj([norm(p1.lo), p1.la]); if (!P) continue;
      const k = 1 / Math.max(0.2, cl);
      const tri = [[a * 0.35, 0], [-a * 0.75, a * 0.5], [-a * 0.45, 0], [-a * 0.75, -a * 0.5]];
      ctx.beginPath();
      tri.forEach(([u, v], j) => { const ex = u * dx - v * dy, ey = u * dy + v * dx; const X = P[0] + ex * k, Y = P[1] - ey; if (j) ctx.lineTo(X, Y); else ctx.moveTo(X, Y); });
      ctx.closePath(); ctx.fillStyle = col; ctx.strokeStyle = 'rgba(255,255,255,0.45)'; ctx.lineWidth = lw * 0.5; ctx.stroke(); ctx.fill();
    }
  }
  ctx.restore();
}
const THREE_clamp = (x) => Math.max(0, Math.min(1, x));

// ------------------------------------------------------------------ legend panel (图例), printed in the South Pacific
export const LEGEND = { lon: -113, lat: -47, w: 15.5, h: 15.6 }; // centre, size in true degrees
export function legendReserve() {
  const { lon, lat, w, h } = LEGEND, k = 1 / Math.cos((lat - h / 2) * D2R);
  const x0 = (lon - w * k / 2 + 180) / 360 * BASE_W, x1 = (lon + w * k / 2 + 180) / 360 * BASE_W;
  const y0 = (90 - (lat + h / 2)) / 180 * BASE_W / 2, y1 = (90 - (lat - h / 2)) / 180 * BASE_W / 2;
  return [[x0, y0, x1, y1]];
}
const OCEAN_STOPS = [[0, '#bdeffa'], [110, '#80dbf5'], [650, '#45b5f0'], [2800, '#2b99eb'], [5000, '#2180e0'], [7200, '#1a66cc'], [10500, '#0f4299']];
const panelCache = new Map();
export function legendPanel(s) { // s = px per degree
  s = Math.max(12, Math.min(140, Math.round(s)));
  if (panelCache.has(s)) return panelCache.get(s);
  const { w, h } = LEGEND, W = Math.round(w * s), H = Math.round(h * s);
  const c = document.createElement('canvas'); c.width = W; c.height = H; const x = c.getContext('2d');
  const u = s; // 1 degree
  x.fillStyle = 'rgba(250,252,253,0.94)'; x.strokeStyle = 'rgba(30,50,90,0.9)'; x.lineWidth = Math.max(1, u * 0.08);
  x.beginPath(); x.roundRect ? x.roundRect(u * 0.1, u * 0.1, W - u * 0.2, H - u * 0.2, u * 0.35) : x.rect(u * 0.1, u * 0.1, W - u * 0.2, H - u * 0.2); x.fill(); x.stroke();
  x.strokeStyle = 'rgba(30,50,90,0.45)'; x.lineWidth = Math.max(0.5, u * 0.03); x.strokeRect(u * 0.35, u * 0.35, W - u * 0.7, H - u * 0.7);
  const txt = (t, X, Y, size, font = 'sans', col = '#1c2230', align = 'left') => { x.font = `${size * u}px ${FONTS[font]}`; x.fillStyle = col; x.textAlign = align; x.textBaseline = 'middle'; x.fillText(t, X, Y); };
  txt('图  例', W * 0.36, u * 1.25, 0.95, 'serifB', '#1c2230', 'center'); txt('LEGEND', W * 0.66, u * 1.3, 0.62, 'sansB', '#1c2230', 'center');
  x.fillStyle = 'rgba(30,50,90,0.5)'; x.fillRect(u * 0.8, u * 2.05, W - u * 1.6, Math.max(0.6, u * 0.04));
  const rows = [
    ['capital', '首都', 'Capital'], ['pcap', '省级行政中心', 'Provincial capital'], ['city', '城市', 'City'], ['peak', '山峰', 'Peak (m)'],
    ['border', '国界', 'International boundary'], ['prov', '省级界', 'Provincial boundary'], ['river', '河流', 'River'], ['lake', '湖泊', 'Lake'],
    ['warm', '暖流', 'Warm current'], ['cold', '寒流', 'Cold current'], ['tropic', '回归线 / 极圈', 'Tropic / Polar circle'], ['idl', '国际日期变更线', 'Date line'],
  ];
  const colW = (W - u * 1.4) / 2, rowH = u * 1.42, y0 = u * 2.9;
  rows.forEach(([kind, zh, en], i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const X = u * 0.75 + col * colW, Y = y0 + row * rowH, sx = X + u * 0.75, sw = u * 1.2;
    x.save();
    if (['capital', 'pcap', 'city', 'peak'].includes(kind)) marker(x, kind, sx, Y, u * (kind === 'capital' ? 0.95 : kind === 'pcap' ? 0.8 : kind === 'city' ? 0.6 : 0.75), 1);
    else if (kind === 'lake') { x.fillStyle = '#86cdf0'; x.strokeStyle = 'rgba(30,100,190,0.9)'; x.lineWidth = u * 0.06; x.beginPath(); x.ellipse(sx, Y, sw * 0.5, u * 0.32, 0, 0, 7); x.fill(); x.stroke(); }
    else {
      x.beginPath(); x.lineCap = 'round';
      if (kind === 'river') { x.moveTo(sx - sw / 2, Y + u * 0.15); x.bezierCurveTo(sx - sw / 6, Y - u * 0.35, sx + sw / 6, Y + u * 0.35, sx + sw / 2, Y - u * 0.15); }
      else { x.moveTo(sx - sw / 2, Y); x.lineTo(sx + sw / 2, Y); }
      const st = { border: ['rgba(110,30,60,0.95)', 0.1, null], prov: ['rgba(236,112,18,0.98)', 0.09, [0.22, 0.12]], river: ['rgba(28,105,200,0.95)', 0.08, null],
        warm: ['rgba(214,32,32,0.92)', 0.07, [0.3, 0.13]], cold: ['rgba(28,72,205,0.92)', 0.07, [0.3, 0.13]], tropic: ['rgba(200,35,45,0.9)', 0.08, [0.3, 0.2]], idl: ['rgba(40,40,60,0.85)', 0.08, [0.4, 0.24]] }[kind];
      x.strokeStyle = st[0]; x.lineWidth = u * st[1]; if (st[2]) x.setLineDash(st[2].map((d) => d * u)); x.stroke(); x.setLineDash([]);
      if (kind === 'warm' || kind === 'cold') { x.fillStyle = st[0]; x.beginPath(); x.moveTo(sx + sw / 2 + u * 0.2, Y); x.lineTo(sx + sw / 2 - u * 0.2, Y - u * 0.2); x.lineTo(sx + sw / 2 - u * 0.2, Y + u * 0.2); x.closePath(); x.fill(); }
    }
    x.restore();
    txt(zh, X + u * 1.65, Y - u * 0.22, 0.52); txt(en, X + u * 1.65, Y + u * 0.36, 0.34, 'sans', '#3a4252');
  });
  // ocean depth bar
  const by = y0 + 6 * rowH + u * 0.25, bx0 = u * 1.0, bw = W - u * 2.0, bh = u * 0.55;
  txt('海洋深度', bx0, by, 0.52); txt('DEPTH (m)', bx0 + u * 2.4, by + u * 0.03, 0.36, 'sans', '#3a4252');
  const g = x.createLinearGradient(bx0, 0, bx0 + bw, 0);
  const pos = (d) => Math.log(1 + d / 60) / Math.log(1 + 10500 / 60);
  for (const [d, cc] of OCEAN_STOPS) g.addColorStop(pos(d), cc);
  x.fillStyle = g; x.fillRect(bx0, by + u * 0.55, bw, bh); x.strokeStyle = 'rgba(30,50,90,0.6)'; x.lineWidth = u * 0.03; x.strokeRect(bx0, by + u * 0.55, bw, bh);
  for (const d of [0, 200, 1000, 3000, 6000]) { const X = bx0 + pos(d) * bw; x.fillStyle = '#1c2230'; x.fillRect(X - u * 0.015, by + u * 0.55 + bh, u * 0.03, u * 0.15); txt(String(d), X, by + u * 1.45 + bh * 0.5, 0.34, 'sans', '#1c2230', 'center'); }
  txt('本图为示意性数字地球仪，非正式出版地图', W / 2, H - u * 0.7, 0.32, 'sans', '#5a6272', 'center');
  panelCache.set(s, c); return c;
}
// draw the panel conformally on the globe: one strip per row, stretched by 1/cos(lat)
export function drawLegend(ctx, proj, ppd) {
  const { lon, lat, w, h } = LEGEND;
  const src = legendPanel(ppd), s = src.width / w, n = src.height;
  const strip = Math.max(1, Math.round(n / 160));
  for (let j = 0; j < n; j += strip) {
    const la = lat + h / 2 - (j + strip / 2) / s, k = 1 / Math.cos(la * D2R);
    const a = proj([lon - w * k / 2, lat + h / 2 - j / s]), b = proj([lon + w * k / 2, lat + h / 2 - (j + strip) / s]);
    if (!a || !b || b[0] < a[0]) continue;
    ctx.drawImage(src, 0, j, src.width, Math.min(strip, n - j), a[0], a[1], b[0] - a[0], b[1] - a[1] + 0.6);
  }
}
