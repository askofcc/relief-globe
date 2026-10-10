import subprocess, os
chars = open('assets/label_chars_v6.txt').read()
extra = ''.join(chr(c) for c in range(0x20, 0x7f)) + '▲★●○◉·°′″—–（）()、，。：0123456789浮雕地球仪政区地形卫星起伏夸张名标注经纬网自动旋转面积人口首都所属大洲万平方公里亿北南东西赤道回归线极圈国际日期变更线'
extra += '本为示意性数字非正式出版局部高精度剖面线终点起点最高最低海拔距离加载中失败使用内置图例首都省级行政中心城市国界省级界河流湖泊山峰暖流寒流海洋深度米千米珊瑚礁洋流'
extra += '墨西哥湾暖流北大西洋暖流日本暖流黑潮北太平洋暖流阿拉斯加暖流东澳大利亚暖流巴西暖流厄加勒斯暖流莫桑比克暖流北赤道暖流南赤道暖流加利福尼亚寒流秘鲁寒流加那利寒流本格拉寒流拉布拉多寒流千岛寒流亲潮西澳大利亚寒流福克兰寒流西风漂流东格陵兰寒流挪威暖流索马里季风洋流'
s = ''.join(sorted(set(chars + extra)))
open('/tmp/subset_chars_v6.txt', 'w').write(s)
for src, idx, out in [('NotoSansCJK-Regular.ttc', 2, 'sans_r'), ('NotoSansCJK-Bold.ttc', 2, 'sans_b'), ('NotoSerifCJK-Bold.ttc', 2, 'serif_b')]:
    subprocess.run(['pyftsubset', '/usr/share/fonts/opentype/noto/' + src, f'--font-number={idx}', '--text-file=/tmp/subset_chars_v6.txt',
                    '--flavor=woff2', '--layout-features=*', '--no-hinting', '--desubroutinize', f'--output-file=assets/font_{out}_v6.woff2'], check=True)
    print(out, os.path.getsize(f'assets/font_{out}_v6.woff2'), os.path.getsize(f'assets/font_{out}.woff2'))
