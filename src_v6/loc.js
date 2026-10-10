// "My location" helpers: offline gazetteer search, reverse lookup, nearby features, auto-location (GPS -> IP)
const D2R = Math.PI / 180, RE = 6371.0;
export const DIRS = ['北', '东北', '东', '东南', '南', '西南', '西', '西北'];
export function hav(lon1, lat1, lon2, lat2) {
  const a = Math.sin((lat2 - lat1) * D2R / 2) ** 2 + Math.cos(lat1 * D2R) * Math.cos(lat2 * D2R) * Math.sin((lon2 - lon1) * D2R / 2) ** 2;
  return 2 * RE * Math.asin(Math.min(1, Math.sqrt(a)));
}
export function bearing(lon1, lat1, lon2, lat2) {
  const y = Math.sin((lon2 - lon1) * D2R) * Math.cos(lat2 * D2R);
  const x = Math.cos(lat1 * D2R) * Math.sin(lat2 * D2R) - Math.sin(lat1 * D2R) * Math.cos(lat2 * D2R) * Math.cos((lon2 - lon1) * D2R);
  return (Math.atan2(y, x) / D2R + 360) % 360;
}
export const dirName = (b) => DIRS[Math.round(b / 45) % 8];
export const fmtLL = (lon, lat) => `${Math.abs(lat).toFixed(2)}°${lat >= 0 ? 'N' : 'S'}, ${Math.abs(lon).toFixed(2)}°${lon >= 0 ? 'E' : 'W'}`;
export const fmtKm = (d) => d < 10 ? `${d.toFixed(1)} km` : `${Math.round(d).toLocaleString('en-US')} km`;
const SUFFIX = /(特别行政区|壮族自治区|回族自治区|维吾尔自治区|自治区|自治州|自治县|地区|新区|林区|特区|盟|省|市|区|县|旗)$/;

export class Gazetteer {
  constructor(data) {
    this.ctx = data.ctx; this.rows = data.gaz; this.feats = data.feats;
    this.n = this.rows.length;
    this.keyZh = this.rows.map((r) => r[0]);
    this.keyZh2 = this.rows.map((r) => r[0].replace(SUFFIX, '') || r[0]);
    this.keyEn = this.rows.map((r) => (r[1] || '').toLowerCase());
    this.keyEn2 = this.rows.map((r) => (r[7] || '').toLowerCase());
    // feature bboxes for fast distance pruning
    this.fb = this.feats.map((f) => {
      if (f[2] === 0) return [f[4], f[5], f[4], f[5]];
      let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
      for (const part of f[4]) for (let i = 0; i < part.length; i += 2) { const x = part[i] / 100, y = part[i + 1] / 100; if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
      return [x0, y0, x1, y1];
    });
  }
  item(i) {
    const r = this.rows[i];
    let name = r[0], ctx = this.ctx[r[2]];
    return { i, name, ctx, lon: r[3], lat: r[4], type: r[5], pop: r[6], en: r[7] || '' };
  }
  // display label for a gazetteer row (Chinese districts get their prefecture prefix)
  label(it) {
    if (it.type === 2) { const parts = it.ctx.split(' · '); const city = parts[parts.length - 1]; return { name: city !== it.name ? city + it.name : it.name, ctx: parts.slice(0, -1).join(' · ') || parts[0] }; }
    return { name: it.name, ctx: it.ctx };
  }
  search(qs, max = 8) {
    const q = qs.trim(); if (!q) return [];
    const ll = parseLatLon(q); const out = [];
    if (ll) out.push({ coord: true, lon: ll[1], lat: ll[0], name: `坐标 ${fmtLL(ll[1], ll[0])}`, ctx: '按“纬度,经度”定位', score: 1e9 });
    const ql = q.toLowerCase().replace(/\s+/g, ' '), qz = q.replace(SUFFIX, '') || q, cjk = /[\u4e00-\u9fff]/.test(q);
    const cand = [];
    for (let i = 0; i < this.n; i++) {
      let s = 0;
      if (cjk) {
        const a = this.keyZh[i], b = this.keyZh2[i];
        if (a === q || b === q || b === qz) s = 100; else if (a.startsWith(q) || b.startsWith(qz)) s = 75; else if (q.length >= 2 && a.includes(q)) s = 45;
        else { const c = this.ctx[this.rows[i][2]]; if (q.length >= 2 && (a + c).includes(q) && this.rows[i][5] <= 1) s = 20; }
      } else {
        const a = this.keyEn[i], b = this.keyEn2[i];
        if (a === ql || b === ql) s = 95; else if (a.startsWith(ql) || b.startsWith(ql)) s = 70; else if (ql.length >= 3 && (a.includes(ql) || b.includes(ql))) s = 35;
      }
      if (!s) continue;
      const r = this.rows[i];
      if (!cjk && r[5] === 2) s = Math.min(s, 55);
      s += [9, 12, 3, 0, 8][r[5]] + (r[6] > 0 ? Math.min(10, Math.log10(r[6]) * 1.4) : (r[5] === 1 ? 8 : r[5] === 2 ? 4 : 0));
      if (/[\u4e00-\u9fff]/.test(r[0])) s += 3;
      cand.push([s, i]);
    }
    cand.sort((a, b) => b[0] - a[0]);
    for (const [s, i] of cand.slice(0, max)) { const it = this.item(i); const lb = this.label(it); out.push({ ...it, name: lb.name, ctx: lb.ctx, score: s }); }
    return out.slice(0, max);
  }
  nearest(lon, lat, filter) {
    let best = -1, bd = 1e9; const cl = Math.cos(lat * D2R);
    for (let i = 0; i < this.n; i++) {
      const r = this.rows[i]; if (filter && !filter(r)) continue;
      let dx = r[3] - lon; dx = ((dx + 540) % 360) - 180; dx *= cl; const dy = r[4] - lat; const d = dx * dx + dy * dy;
      if (d < bd) { bd = d; best = i; }
    }
    if (best < 0) return null;
    const it = this.item(best); it.dist = hav(lon, lat, it.lon, it.lat); return it;
  }
  // human name for an arbitrary coordinate
  describe(lon, lat) {
    const nCity = this.nearest(lon, lat, (r) => r[5] !== 0);
    if (nCity && nCity.dist < 25) { const lb = this.label(nCity); return { name: lb.name, ctx: lb.ctx, near: nCity.dist > 6 ? `${lb.name}附近` : null }; }
    const big = this.nearest(lon, lat, (r) => r[5] === 1 || r[5] === 4 || r[6] > 300000);
    if (big && big.dist < 400) { const lb = this.label(big); return { name: `${lb.name}${dirName(bearing(big.lon, big.lat, lon, lat))} ${Math.round(big.dist)} km`, ctx: lb.ctx }; }
    return { name: fmtLL(lon, lat), ctx: '' };
  }
  findByNames(prov, city) {
    // used for IP results that come back with Chinese names, e.g. ['中国','浙江','杭州']
    const strip = (s) => (s || '').replace(SUFFIX, '');
    const c = strip(city), p = strip(prov);
    let best = null, bs = 0;
    for (let i = 0; i < this.n; i++) {
      const r = this.rows[i]; if (r[5] > 2) continue;
      const nm = strip(r[0]), ctx = this.ctx[r[2]];
      let s = 0;
      if (c && nm === c) s = r[5] === 1 ? 10 : 6; else if (!c && p && nm === p && r[5] === 0) s = 5;
      if (s && p && ctx.includes(p)) s += 3;
      if (s > bs) { bs = s; best = i; }
    }
    if (best == null) return null;
    const it = this.item(best); if (it.type === 0) { /* province: use its capital-ish centre */ }
    return it;
  }
  // ---------------------------------------------------------------- nearby notable features
  nearby(lon, lat) {
    const cl = Math.cos(lat * D2R), K = 111.195;
    const proj = (x, y) => { let dx = x - lon; dx = ((dx + 540) % 360) - 180; return [dx * cl * K, (y - lat) * K]; };
    const inside = [], near = [];
    for (let fi = 0; fi < this.feats.length; fi++) {
      const f = this.feats[fi], [cat, name, kind, w] = f, bb = this.fb[fi];
      const maxR = cat === '城市' ? 380 : (kind === 1 ? 140 + w * 70 : 140 + w * 150);
      // bbox prune (degrees)
      const padLat = maxR / K, padLon = maxR / (K * Math.max(cl, 0.05));
      if (lat < bb[1] - padLat || lat > bb[3] + padLat) continue;
      if (bb[2] - bb[0] < 300) { let a0 = ((bb[0] - lon + 540) % 360) - 180; if (a0 > padLon || a0 + (bb[2] - bb[0]) < -padLon) continue; }
      let d = 1e9, px = 0, py = 0;
      if (kind === 0) { d = hav(lon, lat, f[4], f[5]); const b = bearing(lon, lat, f[4], f[5]); px = Math.sin(b * D2R); py = Math.cos(b * D2R); }
      else {
        let inPoly = false;
        for (const part of f[4]) {
          let ax, ay; let crossing = false;
          for (let i = 0; i < part.length; i += 2) {
            const [bx, by] = proj(part[i] / 100, part[i + 1] / 100);
            if (i > 0) {
              // segment a-b distance to origin
              const vx = bx - ax, vy = by - ay, l2 = vx * vx + vy * vy;
              let t = l2 > 0 ? -(ax * vx + ay * vy) / l2 : 0; t = Math.max(0, Math.min(1, t));
              const cx = ax + vx * t, cy = ay + vy * t, dd = Math.hypot(cx, cy);
              if (dd < d) { d = dd; px = cx; py = cy; }
              if (kind === 2 && Math.abs(vx) < 15000 && ((ay > 0) !== (by > 0))) { const xi = ax + (0 - ay) * vx / (by - ay); if (xi > 0) crossing = !crossing; }
            }
            ax = bx; ay = by;
          }
          if (crossing) inPoly = true;
        }
        if (inPoly) { inside.push({ cat, name, w, d: 0 }); continue; }
      }
      if (d > maxR) continue;
      if (cat === '城市' && d < 20) continue;
      const b = (Math.atan2(px, py) / D2R + 360) % 360;
      near.push({ cat, name, w, d, b, extra: f[6] || '', score: (d + 25) / Math.pow(w, 1.1), tlon: kind === 0 ? f[4] : ((lon + px / (K * Math.max(cl, 0.05)) + 540) % 360) - 180, tlat: kind === 0 ? f[5] : lat + py / K });
    }
    // de-duplicate by name, keep best
    const uniq = (arr, key) => { const m = new Map(); for (const x of arr) { const o = m.get(x.name); if (!o || key(x) < key(o)) m.set(x.name, x); } return [...m.values()]; };
    const ins = uniq(inside, (x) => -x.w).filter((x) => !['大洋', '地区'].includes(x.cat) || inside.length < 2).sort((a, b) => b.w - a.w);
    const insNames = new Set(ins.map((x) => x.name));
    const grp = (c) => (c === '山峰' || c === '山' || c === '火山' || c === '山脉') ? '山' : (c === '湖泊' || c === '水库') ? '湖' : (/海|洋|湾|峡/.test(c) ? '海' : c);
    const cap = { 山: 4, 河流: 3, 湖: 2, 海: 2, 城市: 2 };
    const cnt = {}, picked = [];
    for (const x of uniq(near, (x) => x.score).filter((x) => !insNames.has(x.name)).sort((a, b) => a.score - b.score)) {
      const g = grp(x.cat); if ((cnt[g] || 0) >= (cap[g] || 2)) continue;
      cnt[g] = (cnt[g] || 0) + 1; picked.push(x); if (picked.length >= 9) break;
    }
    picked.sort((a, b) => a.d - b.d);
    // v6: the two highest named peaks within 500 km (with elevation) are always listed, flagged as regional highs
    const peaks = [];
    for (const f of this.feats) {
      if (f[0] !== '山峰' || f[2] !== 0 || !(+f[6] > 0) || Math.abs(f[5] - lat) > 5) continue;
      const d = hav(lon, lat, f[4], f[5]); if (d <= 500 && d > 0.5) peaks.push([f, d]);
    }
    peaks.sort((a, b) => +b[0][6] - +a[0][6]);
    peaks.slice(0, 2).forEach(([f, d], k) => {
      const tag = k === 0 ? '500 km 内最高峰' : '区域高峰';
      const ex = picked.find((x) => x.name === f[1]);
      if (ex) ex.top = tag;
      else picked.push({ cat: f[0], name: f[1], w: f[3], d, b: bearing(lon, lat, f[4], f[5]), extra: f[6], score: 0, tlon: f[4], tlat: f[5], top: tag });
    });
    return { inside: ins.slice(0, 3), near: picked };
  }
}
export function parseLatLon(s) {
  const m = s.trim().match(/^([+-]?\d+(?:\.\d+)?)\s*°?\s*([NSns北南])?\s*[,，\s]\s*([+-]?\d+(?:\.\d+)?)\s*°?\s*([EWew东西])?$/);
  if (!m) return null;
  let lat = +m[1], lon = +m[3];
  if (m[2] && /[Ss南]/.test(m[2])) lat = -lat; if (m[4] && /[Ww西]/.test(m[4])) lon = -lon;
  if (Math.abs(lat) > 90 && Math.abs(lon) <= 90) [lat, lon] = [lon, lat];
  if (Math.abs(lat) > 90 || Math.abs(lon) > 180) return null;
  return [lat, lon];
}

// ---------------------------------------------------------------- auto location
const withTimeout = (p, ms, msg) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(msg || 'timeout')), ms))]);
export function gpsLocate(timeoutMs = 12000) {
  return new Promise((res, rej) => {
    if (!('geolocation' in navigator)) return rej(new Error('浏览器不支持定位'));
    let done = false;
    const t = setTimeout(() => { if (!done) { done = true; rej(new Error('浏览器定位无响应')); } }, timeoutMs);
    try {
      navigator.geolocation.getCurrentPosition((p) => { if (done) return; done = true; clearTimeout(t); res({ lon: p.coords.longitude, lat: p.coords.latitude, acc: p.coords.accuracy }); },
        (e) => { if (done) return; done = true; clearTimeout(t); rej(new Error(e.code === 1 ? '定位权限被拒绝' : e.code === 2 ? '无法获取位置' : e.code === 3 ? '定位超时' : (e.message || '定位失败'))); },
        { enableHighAccuracy: false, timeout: timeoutMs, maximumAge: 10 * 60 * 1000 });
    } catch (e) { done = true; clearTimeout(t); rej(e); }
  });
}
async function getJSON(url, ms) {
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), ms);
  try { const r = await fetch(url, { signal: ctl.signal, cache: 'no-store', credentials: 'omit' }); if (!r.ok) throw new Error('HTTP ' + r.status); return await r.json(); }
  finally { clearTimeout(t); }
}
// Several free, key-less HTTPS endpoints raced in parallel; first usable answer wins.
export function ipLocate(gaz, ms = 6000) {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return Promise.reject(new Error('当前处于离线状态，无法进行网络 IP 定位'));
  const num = (v) => (v === null || v === undefined || v === '' ? NaN : +v);
  const ok = (lon, lat) => isFinite(lon) && isFinite(lat) && !(lon === 0 && lat === 0);
  const tries = [
    ['ipip.net', async () => { // mainland-friendly, Chinese names only -> resolve with the offline gazetteer
      const j = await getJSON('https://myip.ipip.net/json', ms); const loc = j && j.data && j.data.location; if (!loc) throw 0;
      if (loc[0] !== '中国' || !(loc[2] || loc[1])) throw new Error('not CN');
      const it = gaz.findByNames(loc[1], loc[2]); if (!it) throw new Error('no match');
      return { lon: it.lon, lat: it.lat, city: loc[2] || loc[1] };
    }],
    ['ipwho.is', async () => { const j = await getJSON('https://ipwho.is/', ms); if (j.success === false) throw 0; const lon = num(j.longitude), lat = num(j.latitude); if (!ok(lon, lat)) throw 0; return { lon, lat, city: j.city }; }],
    ['geojs.io', async () => { const j = await getJSON('https://get.geojs.io/v1/ip/geo.json', ms); const lon = num(j.longitude), lat = num(j.latitude); if (!ok(lon, lat)) throw 0; return { lon, lat, city: j.city }; }],
    ['ipinfo.io', async () => { const j = await getJSON('https://ipinfo.io/json', ms); const [lat, lon] = (j.loc || '').split(',').map(Number); if (!ok(lon, lat)) throw 0; return { lon, lat, city: j.city }; }],
    ['bigdatacloud', async () => { const j = await getJSON('https://api.bigdatacloud.net/data/reverse-geocode-client?localityLanguage=zh', ms); const lon = num(j.longitude), lat = num(j.latitude); if (!ok(lon, lat)) throw 0; return { lon, lat, city: j.city }; }],
  ];
  // two stages (fewer failed requests in restricted networks): mainland-friendly + one global service first, then the others
  const race = (list) => withTimeout(Promise.any(list.map(async ([src, fn]) => ({ ...(await fn()), src }))), ms + 500, 'IP 定位超时');
  return race(tries.slice(0, 2)).catch(() => race(tries.slice(2)))
    .catch((e) => { throw new Error(e instanceof AggregateError || /超时/.test(e.message) ? '网络 IP 定位不可用（可能处于离线状态）' : (e.message || 'IP 定位失败')); });
}
