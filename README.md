# 浮雕地球仪 v6（Relief Globe 3D）

> 🌐 **在线体验**：[https://earth.srint.cn/](https://earth.srint.cn/) （备用：[https://relief-globe.vercel.app/](https://relief-globe.vercel.app/)）  
> 📦 **项目源码**：[https://github.com/askofcc/relief-globe](https://github.com/askofcc/relief-globe)


一个纯静态的网页 3D 浮雕地球仪：8K 真实高程立体地形、中国标准地图画法（台湾与大陆同色、阿克赛钦与藏南按中国标注、南海九段线）、“我的位置”定位与周边山川、局部高精度地形（联网获取 AWS Terrarium）、剖面线、中英文注记、洋流与图例。

> 本项目是数字示意地球仪，**不是**正式出版地图，没有审图号，也不声称任何官方审核。

## 目录结构

| 路径 | 说明 |
|---|---|
| `dist_v6/` | **已构建好的静态网站**（Vercel 的输出目录，直接部署即可）。`index.html` + `og.jpg` + `assets/`（带哈希的文件名，每个 < 5 MiB）|
| `vercel.json` | Vercel 配置：不安装、不构建，直接发布 `dist_v6/`；`/assets/*` 一年强缓存，首页 5 分钟缓存 |
| `src_v6/` | 前端源码：`main.js`（渲染/交互）、`print.js`（地图印制与注记排版）、`extras.js`（洋流、图例）、`loc.js`（定位、地名库、周边山川）、`template.html` |
| `build_v6.py` | 打包：esbuild 打包 JS → 生成 `dist_v6/` |
| `build_v6_offline.py` | 生成单文件离线版 `relief_globe_v6.html`（约 30 MB，全部数据内嵌） |
| `assets_from_dist.py` | 从 `dist_v6/` 还原 `assets/`（只改前端代码时用，不必重跑数据处理） |
| `prep_*.py`、`build_height_v3.py`、`make_fonts_v6.py`、`topojson_feats.py` | 数据处理脚本（见下文） |
| `static/og.jpg` | 分享预览图（1200×630） |
| `package.json` / `requirements.txt` | Node / Python 依赖 |

## 压缩包说明

为了控制单个文件大小，打包成了两个 zip，**解压到同一个目录**即可得到完整项目：

- `relief-globe-vercel-src.zip`（约 0.35 MB）：源码、脚本、说明、`vercel.json`、`dist_v6/index.html`、`og.jpg`
- `relief-globe-vercel-assets.zip`（约 25 MB）：`dist_v6/assets/`（已构建的高程、影像、字体、地名与矢量数据、JS）

```bash
unzip relief-globe-vercel-src.zip && unzip relief-globe-vercel-assets.zip   # 都会解压到 relief-globe/
```

## 一、直接部署（推荐，不需要构建）

### 方式 A：Vercel CLI

```bash
npm i -g vercel
cd relief-globe            # 本目录（含 vercel.json）
vercel                     # 首次：登录并按提示创建项目（框架选 Other）
vercel --prod              # 发布到生产环境
```

### 方式 B：Git 导入

1. 把本目录推送到 GitHub/GitLab 仓库（**包含 `dist_v6/`**）。
2. 在 Vercel 控制台 “Add New → Project → Import” 选择该仓库。
3. Framework Preset 选 **Other**；`vercel.json` 已设定：Install Command 为空、Build Command 为空、**Output Directory = `dist_v6`**。
4. Deploy。

## 二、绑定域名后要改的地方（og 分享信息）

分享卡片需要绝对地址，目前用占位符 `https://YOUR-PROJECT.vercel.app`。拿到真实域名后改这两个文件（共 3 处：`og:url`、`og:image`、`twitter:image`）：

- `dist_v6/index.html`（第 9、12、14 行左右，直接部署用的就是它）
- `src_v6/template.html`（同样 3 处，供以后重新构建）

一条命令替换（把域名换成你的）：

```bash
sed -i 's#https://YOUR-PROJECT.vercel.app#https://你的域名#g' dist_v6/index.html src_v6/template.html
```

或者重新构建时传入：`SITE_URL=https://你的域名 python3 build_v6.py`。

## 三、修改代码后重新构建

```bash
npm install                      # three、d3-geo、topojson-client、esbuild
pip install -r requirements.txt  # 只改前端时其实只需要 Python 3 标准库
python3 assets_from_dist.py      # 从现有 dist_v6/ 还原 assets/（第一次需要）
python3 build_v6.py              # 生成新的 dist_v6/（会先删除旧目录）
npm run serve                    # 本地预览 http://localhost:8080
```

单文件离线版：`python3 build_v6_offline.py` → `relief_globe_v6.html`（只内嵌 8K 高程；局部高精度地形与剖面仍需联网，离线时自动退回内置 ETOPO1）。

## 四、从原始数据完整重建（可选，较重）

原始下载文件（约 600 MB）没有放进包里，请自行下载到 `data/`：

| 文件（放在 `data/`） | 来源 |
|---|---|
| `etopo1_2m.nc`（ETOPO1 重采样到 2′ 的 netCDF） | NOAA NCEI ETOPO1 Global Relief Model：https://www.ncei.noaa.gov/products/etopo-global-relief-model （下载 ETOPO1 Ice Surface netCDF，再用 GMT/gdal 重采样为 2 弧分） |
| `ne_10m_*.geojson`、`ne_50m_*.geojson`（含 `*_chn` 中国视角版本） | Natural Earth：https://www.naturalearthdata.com/downloads/ （中国视角边界用 Natural Earth 的 “Admin 0 – Countries, point-of-view: CHN” 版本） |
| `countries-50m.json` | world-atlas：https://github.com/topojson/world-atlas |
| `bm_jul.jpg` | NASA Blue Marble Next Generation（7 月）：https://visibleearth.nasa.gov/collection/1484/blue-marble |
| `cities15000.txt`、`admin1CodesASCII.txt`、`countryInfo.txt`、`alternateNamesV2.zip` | GeoNames：https://download.geonames.org/export/dump/ |
| `datav_infos.json` 及各省市边界 | 阿里云 DataV 行政区划：https://datav.aliyun.com/portal/school/atlas/area_selector |

处理顺序（都在本目录下运行）：

1. `python3 build_height_v3.py` → `data/height_8192.npy`（以及 4096 版）
2. `python3 prep_height_v3.py` → `assets/height_8192_resid.webp`、`assets/height_8192_esc.bin.gz`
3. `python3 prep_height_lo.py` → `assets/height_2048_pred.i16.gz`、`assets/height_4096_pred.i16.gz`
4. `python3 prep_assets.py` → `assets/bluemarble_jul_4096.jpg` 等
5. `python3 prep_loc.py` → `assets/loc_v4.json.gz`；`python3 prep_loc_v6.py` → `assets/loc_v6.json.gz`（补充华北名山，修正“黔江”数据）
6. `python3 prep_v6.py` → `assets/vectors_v6.json`、`assets/label_chars_v6.txt`
7. `python3 make_fonts_v6.py` → `assets/font_*_v6.woff2`（需要系统里的 Noto Sans/Serif CJK，路径 `/usr/share/fonts/opentype/noto/`）
8. `python3 build_v6.py`

注：这些脚本是开发过程中逐步写的，个别脚本里的输入文件名或路径可能需要按你的下载结果调整。

## 数据来源与致谢

- 高程：NOAA ETOPO1（重采样为 2′，约 3.7 km 网格）；局部高精度地形：AWS Terrain Tiles（Mapzen Terrarium，运行时联网获取，失败自动退回）
- 矢量与地名：Natural Earth（中国视角）、GeoNames、阿里云 DataV 行政区划
- 卫星影像：NASA Blue Marble
- 字体：Google Noto Sans / Serif CJK（SIL OFL 1.1，按需子集化）
- 库：three.js、d3-geo、topojson-client、esbuild
- 洋流走向为手工绘制的示意线；周边山川中的部分华北山峰为手工补充的近似坐标与海拔

## 许可

见 `LICENSE`（占位，发布前请替换）。第三方数据与字体适用其各自许可。
