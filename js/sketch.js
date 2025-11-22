let isDrawing = false;

// SVG 패스 데이터 (원본 크기: 314 x 261)
const svgPath = "M2139.14 924.934C2138.53 897.865 2132.59 871.709 2121.72 846.722C2116.69 835.244 2109.79 825.798 2099.02 819.297C2075.46 805.077 2052.05 790.501 2028.13 776.89C2019.85 772.167 2016.25 766.479 2015.49 757.134C2014.32 743.117 2012.54 729.048 2009.6 715.285C2004.11 689.688 1997.26 664.346 1991.52 638.8C1982.99 600.811 1969.07 565.26 1945.87 533.671C1928.04 487.759 1908.59 442.914 1880.82 401.37C1861.32 372.219 1842.73 342.153 1821 314.575C1813.79 305.434 1805.76 297.105 1797.48 289.029C1797.48 288.166 1797.48 287.252 1797.43 286.388C1789.11 276.18 1781.89 265.007 1775.85 253.072C1725.33 200.152 1666.93 161.757 1602.59 131.539C1528.8 82.9862 1448.01 47.5877 1360.26 25.8508C1301.15 11.2241 1240.83 3.55528 1179.89 1.16829C1107.58 -1.67578 1035.37 0.508062 963.767 11.1733C870.686 25.0382 782.277 54.3931 698.743 97.8161C612.415 142.712 536.498 201.828 469.265 271.914C387.914 356.678 327.993 454.341 295.493 567.901C283.458 609.902 272.032 652.005 260.454 694.107C258.372 701.776 254.462 708.124 249.283 714.066C242.427 721.888 235.724 729.912 229.681 738.343C220.642 750.887 212.264 763.838 203.631 776.687C173.569 821.43 146.858 867.951 128.831 919.043C125.987 927.118 121.315 934.228 114.358 939.256C95.8742 952.461 83.3821 970.795 70.9917 989.18C63.3745 1000.45 57.8395 1012.59 56.7223 1026.41C56.1129 1033.77 53.2184 1040.17 47.3278 1044.74C39.3553 1050.99 34.0233 1059.16 30.6718 1068.31C25.4922 1082.42 19.5 1096.65 17.0118 1111.37C10.5118 1150.02 6.90642 1188.87 6.70329 1227.93C2.89474 1233.16 0.508048 1239.81 0.304926 1247.94C-1.32006 1322.95 2.43771 1399.44 32.9061 1469.12C60.3277 1531.84 105.116 1573.33 164.58 1605.23C227.701 1639.05 275.384 1686.28 314.231 1746.06C322.508 1758.76 330.735 1770.74 334.594 1785.57C338.555 1800.81 340.079 1816.6 344.039 1831.84C352.368 1863.99 366.891 1894.36 390.707 1917.67C395.43 1925.69 400.508 1933.51 405.941 1941.23C409.445 1946.16 412.898 1951.09 416.453 1956.01C448.343 1999.99 485.311 2044.64 526.85 2090.85C613.533 2187.35 701.79 2282.37 793.398 2374.19C802.437 2383.23 812.745 2389.73 824.933 2393.19C837.831 2396.9 850.831 2400.35 863.831 2403.75C905.877 2414.82 948.431 2421.53 992.204 2421.17C1033.95 2420.82 1075.69 2420.82 1117.43 2420.82C1121.44 2422.19 1125.96 2422.95 1130.94 2422.95C1163.44 2423.15 1195.94 2422.29 1228.33 2420.56C1229.55 2420.56 1230.82 2420.56 1232.04 2420.56C1274.34 2420.26 1316.69 2421.02 1358.89 2416.45C1401.34 2411.83 1443.54 2406.49 1484.93 2395.27C1537.08 2381.15 1585.07 2358.86 1628.33 2326.2C1667.54 2296.64 1705.67 2265.92 1741.68 2232.5C1790.58 2187.2 1832.22 2136.1 1866.5 2078.97C1877.21 2061.09 1887.21 2042.71 1892.9 2022.54C1901.23 1993.14 1908.95 1963.58 1916.72 1934.02C1919.41 1923.71 1920.88 1922.09 1931.44 1921.22C1933.12 1921.07 1934.85 1920.97 1936.42 1920.51C1956.73 1914.72 1976.99 1908.53 1997.41 1903.09C2007.97 1900.3 2013.1 1893.8 2014.78 1883.49C2016.76 1871.25 2018.89 1858.96 2021.28 1846.77C2028.03 1812.13 2035.39 1777.65 2041.64 1742.91C2049.56 1698.93 2056.72 1654.85 2063.93 1610.76C2078.96 1518.94 2094.6 1427.22 2108.57 1335.19C2116.74 1281.41 2121.67 1227.12 2128.98 1173.23C2135.18 1127.57 2139.75 1081.82 2139.85 1035.7C2139.9 998.779 2139.85 961.806 2139.04 924.934H2139.14ZM1102.09 2077.7C1101.59 2078.82 1100.98 2079.88 1100.06 2080.64C1100.06 2080.64 1100.06 2080.75 1100.06 2080.8V2080.7C1099 2081.56 1097.68 2082.12 1096.05 2082.07C1091.48 2081.91 1086.96 2081.15 1082.39 2081.15C1078.13 2081.15 1073.96 2081.2 1069.8 2080.64C1069.54 2080.64 1069.29 2080.7 1069.04 2080.7H849.206C847.378 2080.7 845.702 2080.49 844.026 2080.24C840.116 2080.24 836.257 2080.24 832.347 2080.7C828.894 2081.05 824.983 2081.91 821.073 2081.86C817.823 2081.86 814.98 2079.48 814.32 2076.38C814.015 2075.62 813.812 2074.75 813.812 2073.94C813.812 2065.36 813.507 2056.83 813.152 2048.24C812.999 2044.33 812.745 2040.42 812.542 2036.46C812.441 2035.04 812.441 2033.56 812.542 2032.09C812.034 2030.72 812.034 2029.25 812.288 2027.78C812.898 2024.22 814.624 2015.94 817.671 2013.96C820.109 2012.34 823.409 2011.68 826.304 2011.22C829.909 2010.66 833.515 2010.36 837.12 2009.95C839.05 2009.7 840.979 2009.54 842.909 2009.39C844.89 2009.03 846.971 2008.83 849.206 2008.83L1069.04 2013.91C1069.34 2013.91 1069.64 2013.96 1069.95 2013.96C1070.56 2013.81 1071.17 2013.71 1071.78 2013.76C1073.5 2013.91 1075.23 2014.16 1076.96 2014.52C1077.62 2014.67 1078.28 2014.82 1078.94 2014.93C1079.04 2014.93 1079.7 2015.08 1080 2015.13C1080.31 2015.13 1080.92 2015.23 1081.02 2015.23C1081.68 2015.23 1082.29 2015.28 1082.95 2015.28C1084.07 2015.28 1085.13 2015.28 1086.25 2015.28C1089.45 2015.28 1092.8 2014.93 1095.7 2015.94C1096.56 2015.74 1097.42 2015.59 1098.39 2015.54C1098.54 2015.54 1098.69 2015.54 1098.84 2015.54C1095.39 2031.43 1101.74 2047.38 1103.01 2063.07C1102.96 2063.83 1102.91 2064.65 1102.86 2065.61C1102.75 2067.69 1103.01 2069.88 1103.06 2072.01C1102.91 2073.94 1102.6 2075.92 1102.2 2077.85L1102.09 2077.7ZM1934.49 1140.12C1932.1 1210.51 1927.23 1280.55 1918.39 1350.43C1907.93 1433.06 1895.19 1515.18 1879.14 1596.9C1867.92 1625.95 1855.22 1654.39 1841.56 1682.37C1841.51 1682.47 1841.41 1682.52 1841.36 1682.63C1810.43 1732.7 1777.43 1781.86 1740.66 1827.88C1703.39 1874.5 1660.88 1902.23 1603.35 1918.18C1489.04 1949.92 1367.37 1976.23 1248.34 1975.36C1246.41 1975.36 1244.74 1975.72 1243.16 1976.23C1207.11 1975.21 1171.1 1973.53 1135.1 1971.86C1129.52 1971.6 1124.64 1972.47 1120.43 1974.14C1119.31 1973.94 1118.14 1973.84 1116.82 1973.94C1111.84 1974.35 1106.92 1974.75 1101.94 1975.11C1101.33 1975.01 1100.72 1974.96 1100.06 1974.86V1776.94C1100.06 1769.83 1098.95 1762.87 1096.91 1756.32C1096.71 1741.89 1096.56 1727.47 1096.3 1713.05C1092.29 1713.3 1088.28 1713.5 1084.27 1713.71C1079.45 1716.2 1074.01 1717.92 1067.87 1718.63C1062.43 1720.67 1056.29 1721.94 1049.38 1721.94C1043.75 1721.94 1038.67 1721.12 1034.05 1719.8C1031.71 1720.26 1029.27 1720.46 1026.79 1720.46C1026.68 1720.46 1026.58 1720.46 1026.48 1720.46C1026.23 1720.46 1025.97 1720.46 1025.72 1720.46C1025.52 1720.46 1025.26 1720.46 1025.06 1720.46C1024.91 1720.46 1024.75 1720.46 1024.6 1720.46C1021.35 1720.46 1018.2 1720.01 1015.16 1719.19L1011.09 1718.63C1011.09 1718.63 1010.64 1718.53 1010.43 1718.48C1009.98 1718.38 1009.57 1718.23 1009.11 1718.08C1008.45 1717.87 1007.74 1717.67 1007.08 1717.47C1006.68 1717.47 1006.27 1717.52 1005.81 1717.52C1002.01 1718.43 997.942 1718.99 993.525 1718.99C986.669 1718.99 980.626 1717.82 975.193 1715.84C897.955 1714.83 820.819 1709.04 743.836 1702.08C634.302 1692.12 523.346 1684.66 418.941 1647.28C417.265 1646.67 415.539 1646.21 413.812 1645.86C413.812 1645.86 413.863 1645.86 413.914 1645.86C410.207 1644.74 406.449 1643.72 402.691 1642.81C370.953 1635.24 338.809 1630.11 309.966 1613.61C305.345 1612.44 300.825 1611.07 296.306 1609.44C289.958 1604.72 283.458 1600.05 277.009 1595.27C268.478 1588.06 259.591 1581.1 250.4 1574.5C232.017 1558.96 215.666 1541.69 205.408 1520.41C204.85 1514.57 204.342 1508.73 203.885 1502.89C203.377 1496.03 203.021 1493.09 199.822 1491.26C199.314 1477.29 196.979 1463.68 193.119 1450.38C191.596 1439.97 189.971 1429.61 188.498 1419.24C182.252 1375.01 175.651 1330.88 169.963 1286.54C164.834 1246.57 161.077 1206.45 156.1 1166.43C152.495 1137.48 147.62 1108.63 143.811 1079.68C142.694 1071.1 142.796 1062.26 143.253 1053.58C143.608 1047.23 146.553 1045.4 152.799 1046.62C158.385 1047.74 164.123 1048.85 169.303 1051.09C184.893 1057.84 200.432 1064.7 216.072 1071.61C218.103 1072.27 220.084 1073.13 221.963 1074.2C224.502 1075.31 227.041 1076.43 229.58 1077.55C235.369 1078.72 241.209 1079.43 246.794 1081.41C256.037 1084.71 261.876 1087.86 268.833 1093.29C277.618 1094.31 285.946 1097.1 293.817 1101.67C294.579 1102.08 295.392 1102.49 296.153 1102.89C310.22 1107.87 324.895 1110.92 339.622 1113.2C344.496 1113.76 349.371 1114.27 354.246 1114.73C354.297 1114.57 354.399 1114.42 354.45 1114.27C355.364 1112.19 356.43 1110.1 357.446 1108.02C358.207 1108.22 358.918 1108.53 359.68 1108.68C365.215 1110.05 370.75 1111.02 376.234 1111.78C385.07 1116.4 394.312 1120.57 403.808 1123.46C422.089 1129.05 441.285 1130.77 459.921 1127.12C462.917 1128.34 465.964 1129.81 469.112 1131.54C469.468 1131.74 469.874 1131.99 470.23 1132.2C472.87 1132.91 475.511 1133.57 478.151 1134.23C509.128 1141.79 540.408 1147.38 571.943 1151.39C572.248 1151.39 572.553 1151.34 572.857 1151.29C586.72 1150.43 600.228 1152.56 613.583 1155.81C617.138 1156.12 620.693 1156.42 624.247 1156.68C686.505 1161.45 748.762 1166.17 810.968 1171.2C834.022 1173.08 857.077 1175.62 880.131 1177.9C882.721 1178.16 885.311 1178.67 887.901 1179.48C895.416 1179.38 902.932 1179.28 910.498 1179.12C913.393 1177.5 916.236 1177.55 919.029 1177.55C940.154 1177.9 961.279 1177.8 982.353 1179.02C1015.87 1181 1049.43 1181.31 1082.95 1181.1C1083.2 1129.71 1085.95 1078.51 1089.96 1027.37C1091.43 997.103 1093.36 966.834 1095.85 936.615C1096.91 923.817 1098.08 911.019 1099.35 898.271C1101.18 662.721 1097.27 426.967 1097.27 191.467C1097.27 190.756 1097.32 190.096 1097.37 189.385C1095.64 163.281 1086.1 119.248 1113.82 103.25C1126.77 95.7846 1141.4 100.762 1155.26 102.031C1167.19 103.149 1179.08 103.758 1190.96 105.129C1275.97 103.149 1360.97 124.53 1441.97 149.974C1521.69 174.962 1601.57 205.586 1667.49 257.237C1671.29 259.116 1675.1 261.096 1678.81 263.28C1690.69 272.473 1702.52 281.614 1714.41 290.807C1718.42 294.87 1722.13 299.085 1725.73 303.402C1741.37 319.248 1758.64 333.417 1772.75 350.786C1793.32 376.129 1810.28 404.875 1828.36 431.944C1836.18 443.625 1843.29 455.611 1849.84 467.749C1860.05 489.892 1869.44 512.442 1878.12 535.194C1883.66 549.669 1888.64 564.346 1893.1 579.176C1902.09 609.14 1909.05 639.663 1914.33 670.491C1926.57 741.796 1933.78 813.863 1934.29 886.184C1934.44 889.637 1934.49 893.091 1934.29 896.595C1934.29 905.33 1934.29 914.015 1934.39 922.75C1934.9 995.173 1937.03 1067.6 1934.59 1139.97L1934.49 1140.12Z";

const svgOriginalWidth = 2116;
const svgOriginalHeight = 2402;

// SVG 스케일 및 위치 설정
const svgScale = 0.35;  // SVG 확대 비율
const svgBorderWidth = 16;  // SVG 테두리 두께
let svgOffsetX = 0;
let svgOffsetY = 0;

// 첫 번째 점
let currentX1 = 0;
let currentY1 = 0;
let prevX1 = 0;
let prevY1 = 0;
let angle1 = 0;
let bounceCount1 = 0;

// 두 번째 점
let currentX2 = 0;
let currentY2 = 0;
let prevX2 = 0;
let prevY2 = 0;
let angle2 = 0;
let bounceCount2 = 0;

// 세 번째 점
let currentX3 = 0;
let currentY3 = 0;
let prevX3 = 0;
let prevY3 = 0;
let angle3 = 0;
let bounceCount3 = 0;

// 네 번째 점
let currentX4 = 0;
let currentY4 = 0;
let prevX4 = 0;
let prevY4 = 0;
let angle4 = 0;
let bounceCount4 = 0;

// 다섯 번째 점
let currentX5 = 0;
let currentY5 = 0;
let prevX5 = 0;
let prevY5 = 0;
let angle5 = 0;
let bounceCount5 = 0;

// 여섯 번째 점
let currentX6 = 0;
let currentY6 = 0;
let prevX6 = 0;
let prevY6 = 0;
let angle6 = 0;
let bounceCount6 = 0;

// 일곱 번째 점
let currentX7 = 0;
let currentY7 = 0;
let prevX7 = 0;
let prevY7 = 0;
let angle7 = 0;
let bounceCount7 = 0;

// 여덟 번째 점
let currentX8 = 0;
let currentY8 = 0;
let prevX8 = 0;
let prevY8 = 0;
let angle8 = 0;
let bounceCount8 = 0;

// 아홉 번째 점
let currentX9 = 0;
let currentY9 = 0;
let prevX9 = 0;
let prevY9 = 0;
let angle9 = 0;
let bounceCount9 = 0;

// 열 번째 점
let currentX10 = 0;
let currentY10 = 0;
let prevX10 = 0;
let prevY10 = 0;
let angle10 = 0;
let bounceCount10 = 0;

// 열한 번째 점
let currentX11 = 0;
let currentY11 = 0;
let prevX11 = 0;
let prevY11 = 0;
let angle11 = 0;
let bounceCount11 = 0;

// 열두 번째 점
let currentX12 = 0;
let currentY12 = 0;
let prevX12 = 0;
let prevY12 = 0;
let angle12 = 0;
let bounceCount12 = 0;

// 첫 번째 점 설정 (회색 네모)
let speed1 = 10;
let maxBounces1 = 40;
let dotSize1 = 3 ;
let dotColor1 = '#D4DDEF';
let dotOpacityRandomness1 = 80;
let dotShape1 = 'square';

// 두 번째 점 설정 (노란색 원)
let speed2 = 10;
let maxBounces2 = 40;
let dotSize2 = 3 ;
let dotColor2 = '#F5EA7A';
let dotOpacityRandomness2 = 80;
let dotShape2 = 'circle';

// 세 번째 점 설정 (회색 네모)
let speed3 = 10;
let maxBounces3 = 40;
let dotSize3 = 3 ;
let dotColor3 = '#D4DDEF';
let dotOpacityRandomness3 = 80;
let dotShape3 = 'square';

// 네 번째 점 설정 (노란색 원)
let speed4 = 10;
let maxBounces4 = 40;
let dotSize4 = 3 ;
let dotColor4 = '#F5EA7A';
let dotOpacityRandomness4 = 80;
let dotShape4 = 'circle';

// 다섯 번째 점 설정 (회색 네모)
let speed5 = 10;
let maxBounces5 = 40;
let dotSize5 = 3 ;
let dotColor5 = '#D4DDEF';
let dotOpacityRandomness5 = 80;
let dotShape5 = 'square';

// 여섯 번째 점 설정 (노란색 원)
let speed6 = 10;
let maxBounces6 = 40;
let dotSize6 = 3 ;
let dotColor6 = '#F5EA7A';
let dotOpacityRandomness6 = 80;
let dotShape6 = 'circle';

// 일곱 번째 점 설정 (회색 네모)
let speed7 = 10;
let maxBounces7 = 40;
let dotSize7 = 3;
let dotColor7 = '#D4DDEF';
let dotOpacityRandomness7 = 80;
let dotShape7 = 'square';

// 여덟 번째 점 설정 (노란색 원)
let speed8 = 10;
let maxBounces8 = 40;
let dotSize8 = 3;
let dotColor8 = '#F5EA7A';
let dotOpacityRandomness8 = 80;
let dotShape8 = 'circle';

// 아홉 번째 점 설정 (회색 네모)
let speed9 = 10;
let maxBounces9 = 40;
let dotSize9 = 3;
let dotColor9 = '#D4DDEF';
let dotOpacityRandomness9 = 80;
let dotShape9 = 'square';

// 열 번째 점 설정 (노란색 원)
let speed10 = 10;
let maxBounces10 = 40;
let dotSize10 = 3;
let dotColor10 = '#F5EA7A';
let dotOpacityRandomness10 = 80;
let dotShape10 = 'circle';

// 열한 번째 점 설정 (회색 네모)
let speed11 = 10;
let maxBounces11 = 40;
let dotSize11 = 3;
let dotColor11 = '#D4DDEF';
let dotOpacityRandomness11 = 80;
let dotShape11 = 'square';

// 열두 번째 점 설정 (노란색 원)
let speed12 = 10;
let maxBounces12 = 40;
let dotSize12 = 3;
let dotColor12 = '#F5EA7A';
let dotOpacityRandomness12 = 80;
let dotShape12 = 'circle';

// 5가지 시드값 (5가지 다른 움직임 패턴)
const seeds = [11497110100111109,11411198111116, 10411710997110, 10911711510599, 108111118101];

// 전역 점 크기 설정 (모든 점에 적용)
const globalDotSize = 4.3;

function setup() {
  // A2 비율 유지하면서 작은 크기 (약 70% 크기)
  let canvas = createCanvas(800, 1131);
  canvas.parent('canvas-container');
  background(0);
  noLoop();
  
  // SVG를 캔버스 중앙에 배치하기 위한 오프셋 계산
  svgOffsetX = (width - svgOriginalWidth * svgScale) / 2;
  svgOffsetY = (height - svgOriginalHeight * svgScale) / 2;
  
  // 페이지 로드 시 자동으로 패턴 그리기 시작
  drawLineAcross();
}

function draw() {
  if (isDrawing) {
    // SVG 클리핑 적용 (캔버스 좌표계)
    drawingContext.save();
    
    // SVG 위치와 크기에 맞춰 변환 적용
    drawingContext.translate(svgOffsetX, svgOffsetY);
    drawingContext.scale(svgScale, svgScale);
    
    // 클리핑 패스 생성 및 적용
    let path = new Path2D(svgPath);
    drawingContext.clip(path);
    
    // 변환 취소 (점을 캔버스 좌표계로 그리기 위해)
    drawingContext.scale(1/svgScale, 1/svgScale);
    drawingContext.translate(-svgOffsetX, -svgOffsetY);
    
    // 모든 점 업데이트
    updateDot(1);
    updateDot(2);
    updateDot(3);
    updateDot(4);
    updateDot(5);
    updateDot(6);
    updateDot(7);
    updateDot(8);
    updateDot(9);
    updateDot(10);
    updateDot(11);
    updateDot(12);
    
    drawingContext.restore();
    
    // SVG 윤곽선을 최상단에 그리기
    drawingContext.save();
    drawingContext.translate(svgOffsetX, svgOffsetY);
    drawingContext.scale(svgScale, svgScale);
    let svgPath2 = new Path2D(svgPath);
    drawingContext.strokeStyle = '#000000';
    drawingContext.lineWidth = svgBorderWidth;
    drawingContext.lineCap = 'round';
    drawingContext.lineJoin = 'round';
    drawingContext.stroke(svgPath2);
    drawingContext.restore();
  }
}

// 개별 점 업데이트 함수
function updateDot(dotNumber) {
  let currentX, currentY, prevX, prevY, angle, bounceCount;
  let speed, maxBounces;
  
  // 점 번호에 따라 변수 선택
  if (dotNumber === 1) {
    currentX = currentX1;
    currentY = currentY1;
    prevX = prevX1;
    prevY = prevY1;
    angle = angle1;
    bounceCount = bounceCount1;
    speed = speed1;
    maxBounces = maxBounces1;
  } else if (dotNumber === 2) {
    currentX = currentX2;
    currentY = currentY2;
    prevX = prevX2;
    prevY = prevY2;
    angle = angle2;
    bounceCount = bounceCount2;
    speed = speed2;
    maxBounces = maxBounces2;
  } else if (dotNumber === 3) {
    currentX = currentX3;
    currentY = currentY3;
    prevX = prevX3;
    prevY = prevY3;
    angle = angle3;
    bounceCount = bounceCount3;
    speed = speed3;
    maxBounces = maxBounces3;
  } else if (dotNumber === 4) {
    currentX = currentX4;
    currentY = currentY4;
    prevX = prevX4;
    prevY = prevY4;
    angle = angle4;
    bounceCount = bounceCount4;
    speed = speed4;
    maxBounces = maxBounces4;
  } else if (dotNumber === 5) {
    currentX = currentX5;
    currentY = currentY5;
    prevX = prevX5;
    prevY = prevY5;
    angle = angle5;
    bounceCount = bounceCount5;
    speed = speed5;
    maxBounces = maxBounces5;
  } else if (dotNumber === 6) {
    currentX = currentX6;
    currentY = currentY6;
    prevX = prevX6;
    prevY = prevY6;
    angle = angle6;
    bounceCount = bounceCount6;
    speed = speed6;
    maxBounces = maxBounces6;
  } else if (dotNumber === 7) {
    currentX = currentX7;
    currentY = currentY7;
    prevX = prevX7;
    prevY = prevY7;
    angle = angle7;
    bounceCount = bounceCount7;
    speed = speed7;
    maxBounces = maxBounces7;
  } else if (dotNumber === 8) {
    currentX = currentX8;
    currentY = currentY8;
    prevX = prevX8;
    prevY = prevY8;
    angle = angle8;
    bounceCount = bounceCount8;
    speed = speed8;
    maxBounces = maxBounces8;
  } else if (dotNumber === 9) {
    currentX = currentX9;
    currentY = currentY9;
    prevX = prevX9;
    prevY = prevY9;
    angle = angle9;
    bounceCount = bounceCount9;
    speed = speed9;
    maxBounces = maxBounces9;
  } else if (dotNumber === 10) {
    currentX = currentX10;
    currentY = currentY10;
    prevX = prevX10;
    prevY = prevY10;
    angle = angle10;
    bounceCount = bounceCount10;
    speed = speed10;
    maxBounces = maxBounces10;
  } else if (dotNumber === 11) {
    currentX = currentX11;
    currentY = currentY11;
    prevX = prevX11;
    prevY = prevY11;
    angle = angle11;
    bounceCount = bounceCount11;
    speed = speed11;
    maxBounces = maxBounces11;
  } else {
    currentX = currentX12;
    currentY = currentY12;
    prevX = prevX12;
    prevY = prevY12;
    angle = angle12;
    bounceCount = bounceCount12;
    speed = speed12;
    maxBounces = maxBounces12;
  }
  
  // 이전 위치 저장
  prevX = currentX;
  prevY = currentY;
  
  // 진행 방향으로 이동
  let forwardX = cos(angle) * speed;
  let forwardY = sin(angle) * speed;
  
  // 진행 방향에 수직인 방향 (왼쪽/오른쪽 흔들림)
  let perpAngle = angle + HALF_PI;
  let wiggle = random(-speed*2, speed*2);
  let wiggleX = cos(perpAngle) * wiggle;
  let wiggleY = sin(perpAngle) * wiggle;
  
  // 최종 위치 = 앞으로 이동 + 좌우 흔들림
  currentX += forwardX + wiggleX;
  currentY += forwardY + wiggleY;
  
  // SVG 클리핑 영역을 반사 영역으로 사용
  let bounceLeft = svgOffsetX;
  let bounceRight = svgOffsetX + svgOriginalWidth * svgScale;
  let bounceTop = svgOffsetY;
  let bounceBottom = svgOffsetY + svgOriginalHeight * svgScale;
  
  // 벽 충돌 체크 및 반사 (SVG 영역)
  let bounced = false;
  
  // 좌우 벽 충돌
  if (currentX <= bounceLeft || currentX >= bounceRight) {
    if (bounceCount < maxBounces) {
      angle = PI - angle;
      let randomAngle = random(radians(30), radians(150));
      angle += random(-1, 1) * randomAngle * 0.8;
      bounced = true;
      currentX = constrain(currentX, bounceLeft, bounceRight);
    } else {
      return; // 이 점은 멈춤
    }
  }
  
  // 상하 벽 충돌
  if (currentY <= bounceTop || currentY >= bounceBottom) {
    if (bounceCount < maxBounces) {
      angle = -angle;
      let randomAngle = random(radians(30), radians(150));
      angle += random(-1, 1) * randomAngle * 0.8;
      bounced = true;
      currentY = constrain(currentY, bounceTop, bounceBottom);
    } else {
      return; // 이 점은 멈춤
    }
  }
  
  // 튕김 카운트 증가
  if (bounced) {
    bounceCount++;
  }
  
  // 변수 업데이트
  if (dotNumber === 1) {
    currentX1 = currentX;
    currentY1 = currentY;
    prevX1 = prevX;
    prevY1 = prevY;
    angle1 = angle;
    bounceCount1 = bounceCount;
  } else if (dotNumber === 2) {
    currentX2 = currentX;
    currentY2 = currentY;
    prevX2 = prevX;
    prevY2 = prevY;
    angle2 = angle;
    bounceCount2 = bounceCount;
  } else if (dotNumber === 3) {
    currentX3 = currentX;
    currentY3 = currentY;
    prevX3 = prevX;
    prevY3 = prevY;
    angle3 = angle;
    bounceCount3 = bounceCount;
  } else if (dotNumber === 4) {
    currentX4 = currentX;
    currentY4 = currentY;
    prevX4 = prevX;
    prevY4 = prevY;
    angle4 = angle;
    bounceCount4 = bounceCount;
  } else if (dotNumber === 5) {
    currentX5 = currentX;
    currentY5 = currentY;
    prevX5 = prevX;
    prevY5 = prevY;
    angle5 = angle;
    bounceCount5 = bounceCount;
  } else if (dotNumber === 6) {
    currentX6 = currentX;
    currentY6 = currentY;
    prevX6 = prevX;
    prevY6 = prevY;
    angle6 = angle;
    bounceCount6 = bounceCount;
  } else if (dotNumber === 7) {
    currentX7 = currentX;
    currentY7 = currentY;
    prevX7 = prevX;
    prevY7 = prevY;
    angle7 = angle;
    bounceCount7 = bounceCount;
  } else if (dotNumber === 8) {
    currentX8 = currentX;
    currentY8 = currentY;
    prevX8 = prevX;
    prevY8 = prevY;
    angle8 = angle;
    bounceCount8 = bounceCount;
  } else if (dotNumber === 9) {
    currentX9 = currentX;
    currentY9 = currentY;
    prevX9 = prevX;
    prevY9 = prevY;
    angle9 = angle;
    bounceCount9 = bounceCount;
  } else if (dotNumber === 10) {
    currentX10 = currentX;
    currentY10 = currentY;
    prevX10 = prevX;
    prevY10 = prevY;
    angle10 = angle;
    bounceCount10 = bounceCount;
  } else if (dotNumber === 11) {
    currentX11 = currentX;
    currentY11 = currentY;
    prevX11 = prevX;
    prevY11 = prevY;
    angle11 = angle;
    bounceCount11 = bounceCount;
  } else {
    currentX12 = currentX;
    currentY12 = currentY;
    prevX12 = prevX;
    prevY12 = prevY;
    angle12 = angle;
    bounceCount12 = bounceCount;
  }
  
  // 점 그리기
  drawDot(currentX, currentY, dotNumber);
}

// 버튼 클릭 시 선 그리기 시작
function drawLineAcross() {
  background(0);
  
  // SVG 형태 윤곽선 그리기 (스케일 및 중앙 배치)
  drawingContext.save();
  drawingContext.translate(svgOffsetX, svgOffsetY);
  drawingContext.scale(svgScale, svgScale);
  let path = new Path2D(svgPath);
  drawingContext.strokeStyle = '#FFFFFF';
  drawingContext.lineWidth = svgBorderWidth;
  drawingContext.lineCap = 'round';
  drawingContext.lineJoin = 'round';
  drawingContext.stroke(path);
  drawingContext.restore();
  
  // 5가지 시드 중 랜덤하게 선택
  let selectedSeed = random(seeds);
  console.log('선택된 시드:', selectedSeed);
  
  // 선택된 시드로 랜덤 시드 설정
  randomSeed(selectedSeed);
  
  // 초기화
  isDrawing = true;
  
  // SVG 영역 중앙 계산
  let svgCenterX = svgOffsetX + (svgOriginalWidth * svgScale) / 2;
  let svgCenterY = svgOffsetY + (svgOriginalHeight * svgScale) / 2;
  let startRadius = 50; // 중앙에서의 시작 반경
  
  // 첫 번째 점 초기화 (SVG 중앙 왼쪽)
  currentX1 = svgCenterX - startRadius;
  currentY1 = svgCenterY;
  prevX1 = currentX1;
  prevY1 = currentY1; 
  angle1 = random(-PI/4, PI/4);
  bounceCount1 = 0;
  
  // 두 번째 점 초기화 (SVG 중앙 오른쪽)
  currentX2 = svgCenterX + startRadius;
  currentY2 = svgCenterY;
  prevX2 = currentX2;
  prevY2 = currentY2;
  angle2 = random(PI - PI/4, PI + PI/4);
  bounceCount2 = 0;
  
  // 세 번째 점 초기화 (SVG 중앙 위쪽)
  currentX3 = svgCenterX;
  currentY3 = svgCenterY - startRadius;
  prevX3 = currentX3;
  prevY3 = currentY3;
  angle3 = random(PI/4, PI - PI/4);
  bounceCount3 = 0;
  
  // 네 번째 점 초기화 (SVG 중앙 아래쪽)
  currentX4 = svgCenterX;
  currentY4 = svgCenterY + startRadius;
  prevX4 = currentX4;
  prevY4 = currentY4;
  angle4 = random(-PI + PI/4, -PI/4);
  bounceCount4 = 0;
  
  // 다섯 번째 점 초기화 (SVG 중앙 왼쪽 위 대각선)
  currentX5 = svgCenterX - startRadius * 0.7;
  currentY5 = svgCenterY - startRadius * 0.7;
  prevX5 = currentX5;
  prevY5 = currentY5;
  angle5 = random(0, PI/2);
  bounceCount5 = 0;
  
  // 여섯 번째 점 초기화 (SVG 중앙 오른쪽 아래 대각선)
  currentX6 = svgCenterX + startRadius * 0.7;
  currentY6 = svgCenterY + startRadius * 0.7;
  prevX6 = currentX6;
  prevY6 = currentY6;
  angle6 = random(PI, PI + PI/2);
  bounceCount6 = 0;
  
  // 일곱 번째 점 초기화 (SVG 중앙 오른쪽 위 대각선)
  currentX7 = svgCenterX + startRadius * 0.7;
  currentY7 = svgCenterY - startRadius * 0.7;
  prevX7 = currentX7;
  prevY7 = currentY7;
  angle7 = random(0, PI);
  bounceCount7 = 0;
  
  // 여덟 번째 점 초기화 (SVG 중앙 왼쪽 아래 대각선)
  currentX8 = svgCenterX - startRadius * 0.7;
  currentY8 = svgCenterY + startRadius * 0.7;
  prevX8 = currentX8;
  prevY8 = currentY8;
  angle8 = random(PI, TWO_PI);
  bounceCount8 = 0;
  
  // 아홉 번째 점 초기화 (랜덤 위치)
  currentX9 = svgCenterX + random(-startRadius, startRadius);
  currentY9 = svgCenterY + random(-startRadius, startRadius);
  prevX9 = currentX9;
  prevY9 = currentY9;
  angle9 = random(TWO_PI);
  bounceCount9 = 0;
  
  // 열 번째 점 초기화 (랜덤 위치)
  currentX10 = svgCenterX + random(-startRadius, startRadius);
  currentY10 = svgCenterY + random(-startRadius, startRadius);
  prevX10 = currentX10;
  prevY10 = currentY10;
  angle10 = random(TWO_PI);
  bounceCount10 = 0;
  
  // 열한 번째 점 초기화 (랜덤 위치)
  currentX11 = svgCenterX + random(-startRadius, startRadius);
  currentY11 = svgCenterY + random(-startRadius, startRadius);
  prevX11 = currentX11;
  prevY11 = currentY11;
  angle11 = random(TWO_PI);
  bounceCount11 = 0;
  
  // 열두 번째 점 초기화 (랜덤 위치)
  currentX12 = svgCenterX + random(-startRadius, startRadius);
  currentY12 = svgCenterY + random(-startRadius, startRadius);
  prevX12 = currentX12;
  prevY12 = currentY12;
  angle12 = random(TWO_PI);
  bounceCount12 = 0;
  
  loop();
}

// 점 그리기 함수
function drawDot(x, y, dotNumber) {
  // 점 번호에 따라 스타일 선택
  let dotColor, dotOpacityRandomness, dotSize, dotShape;
  
  if (dotNumber === 1) {
    dotColor = dotColor1;
    dotOpacityRandomness = dotOpacityRandomness1;
    dotSize = dotSize1;
    dotShape = dotShape1;
  } else if (dotNumber === 2) {
    dotColor = dotColor2;
    dotOpacityRandomness = dotOpacityRandomness2;
    dotSize = dotSize2;
    dotShape = dotShape2;
  } else if (dotNumber === 3) {
    dotColor = dotColor3;
    dotOpacityRandomness = dotOpacityRandomness3;
    dotSize = dotSize3;
    dotShape = dotShape3;
  } else if (dotNumber === 4) {
    dotColor = dotColor4;
    dotOpacityRandomness = dotOpacityRandomness4;
    dotSize = dotSize4;
    dotShape = dotShape4;
  } else if (dotNumber === 5) {
    dotColor = dotColor5;
    dotOpacityRandomness = dotOpacityRandomness5;
    dotSize = dotSize5;
    dotShape = dotShape5;
  } else if (dotNumber === 6) {
    dotColor = dotColor6;
    dotOpacityRandomness = dotOpacityRandomness6;
    dotSize = dotSize6;
    dotShape = dotShape6;
  } else if (dotNumber === 7) {
    dotColor = dotColor7;
    dotOpacityRandomness = dotOpacityRandomness7;
    dotSize = dotSize7;
    dotShape = dotShape7;
  } else if (dotNumber === 8) {
    dotColor = dotColor8;
    dotOpacityRandomness = dotOpacityRandomness8;
    dotSize = dotSize8;
    dotShape = dotShape8;
  } else if (dotNumber === 9) {
    dotColor = dotColor9;
    dotOpacityRandomness = dotOpacityRandomness9;
    dotSize = dotSize9;
    dotShape = dotShape9;
  } else if (dotNumber === 10) {
    dotColor = dotColor10;
    dotOpacityRandomness = dotOpacityRandomness10;
    dotSize = dotSize10;
    dotShape = dotShape10;
  } else if (dotNumber === 11) {
    dotColor = dotColor11;
    dotOpacityRandomness = dotOpacityRandomness11;
    dotSize = dotSize11;
    dotShape = dotShape11;
  } else {
    dotColor = dotColor12;
    dotOpacityRandomness = dotOpacityRandomness12;
    dotSize = dotSize12;
    dotShape = dotShape12;
  }
  
  // 점 색상 설정
  let c = color(dotColor);
  
  // 투명도 계산: randomness에 따라 변화
  let baseOpacity = 255;
  let opacityVariation = map(dotOpacityRandomness, 0, 100, 0, 255);
  let opacity = baseOpacity - random(opacityVariation);
  
  c.setAlpha(opacity);
  
  noStroke();
  fill(c);
  
  // 전역 크기 사용
  if (dotShape === 'circle') {
    circle(x, y, globalDotSize);
  } else if (dotShape === 'square') {
    rectMode(CENTER);
    square(x, y, globalDotSize);
  }
}

// DOM 로드 후 버튼에 이벤트 연결
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('drawLine').addEventListener('click', drawLineAcross);
});

