let isDrawing = false;

// SVG 패스 데이터 (원본 크기: 314 x 261)
const svgPath = "M210.26 166.38C209.69 166.07 208.76 165.36 208.59 165.51C197.64 175.16 183.9 179.04 170.57 183.58C163.22 186.08 155.54 187.66 147.94 189.34C143.65 190.29 141.03 188.51 140.56 183.75C140.16 179.79 138.87 175.9 138.59 171.94C138.41 169.48 139.38 166.94 140.22 164.52C133.16 135.67 129.78 106.29 135.28 76.6895C143.96 29.9195 182.02 -0.470484 229.87 -0.000484364C234.5 0.0495156 239.13 0.509516 244.57 0.829516C244.25 6.76952 243.95 12.1495 243.66 17.5295C243.85 17.5595 244.03 17.5995 244.22 17.6295C245.06 12.3195 245.9 7.00952 246.93 0.569516C252.2 2.95952 257.52 5.00952 262.4 7.81952C263.73 8.58952 263.58 11.7095 264.39 13.6395C265.14 15.4295 265.81 17.7695 267.27 18.6795C282.95 28.4395 292.41 42.6495 297.31 60.1195C298.17 63.1695 299.37 64.7095 302.71 65.4395C313.13 67.7295 313.82 68.8595 313.85 79.4395C313.85 81.5995 313.78 83.7695 313.65 85.9295C313.303 91.6429 310.25 94.7429 304.49 95.2295C303.2 95.3395 301.91 95.4795 300.07 95.6595C300.07 104.2 299.87 112.49 300.16 120.76C300.29 124.58 299.03 127.26 295.85 129.01C291.2 131.57 287.43 136.55 280.96 134.34C281.76 135.19 282.56 136.05 283.36 136.9C280.69 139.45 278.02 142 275.35 144.55C274.3 144.08 273.26 143.61 272.21 143.13C274.57 146.02 277.01 148.85 279.26 151.83C280.13 152.98 280.81 154.4 281.15 155.8C281.83 158.54 282.31 161.34 282.7 164.14C284 173.54 284.99 183.03 291.88 190.6C284.55 193.09 277.82 194.98 271.4 197.62C255.07 204.34 242.24 216.08 229.46 227.78C215.32 240.71 200.36 252.22 181.17 256.63C177 257.59 172.75 258.19 167.11 259.21C169.78 247.07 172.27 235.97 174.65 224.84C176.31 217.08 176.72 208.88 181.82 202.32C184.24 199.21 187.7 196.9 190.12 193.78C191.65 191.81 192.88 189.04 192.96 186.59C193.2 179.19 196.3 174.41 203.34 171.71C205.99 170.69 208.04 168.11 210.36 166.23C212.48 167.53 215.22 170.4 216.62 169.85C223.61 167.13 230.26 163.5 237.02 160.19C236.84 159.83 236.66 159.47 236.48 159.11C231.64 161.18 226.67 163.01 221.99 165.4C218.08 167.41 214.34 168.11 210.26 166.33V166.38ZM157.49 159.79C157.69 160.04 157.89 160.29 158.09 160.54C167.01 157.42 175.94 154.29 184.87 151.18C188.39 149.96 190.31 147.67 190.42 143.81C190.63 136.32 191.12 128.84 191.28 121.36C191.67 102.23 189.21 82.8395 196.8 64.3395C194.97 67.9595 193.04 71.6095 192.47 75.4495C191.11 84.6395 189.96 93.8995 189.53 103.17C188.92 116.47 189.01 129.81 188.84 143.13C188.79 146.79 186.94 148.83 183.57 150.05C174.84 153.2 166.18 156.54 157.49 159.8V159.79Z M169.01 16.8905C165.52 20.0505 162.1 22.9105 158.94 26.0405C139.93 44.8805 130.59 67.9905 129.33 94.4605C128.91 103.26 129.18 112.12 129.66 120.93C129.86 124.55 128.43 126.03 125.41 126.05C119.67 126.08 113.93 125.68 107.71 125.44C106.05 128.42 103.38 132.12 101.81 136.25C98.12 145.9 91.03 150.78 81.49 154.04C67.02 158.98 52.96 165.11 38.73 170.74C33.57 172.78 27.83 168.05 28.61 162.39C29.19 158.11 29.79 153.83 30.34 149.54C30.42 148.92 30.26 148.27 29.77 147.58C29.19 150.28 28.6 152.97 28.02 155.67C27.7 155.68 27.39 155.69 27.07 155.71C27.07 151.12 27.09 146.53 27.07 141.94C27.03 135.95 29.06 128.56 26.28 124.37C23.53 120.23 15.9 119.35 10.41 117.03C6.91002 115.54 3.42002 114.03 0.0200195 111.59C1.18002 111.46 2.34002 111.23 3.50002 111.23C22.16 111.16 40.82 111.19 59.48 111.03C67.13 110.96 68.49 109.56 69.75 101.29C67.73 110.24 61.07 109.43 54.45 109.37C36.98 109.2 19.51 109.31 1.25002 109.31V71.2505H45.01V70.2105H3.03002C2.90002 69.7805 2.77002 69.3405 2.64002 68.9105C6.92002 66.3005 11.13 63.5505 15.51 61.1205C20.56 58.3205 25.78 55.8305 30.87 53.1005C31.59 52.7105 32.21 51.7505 32.47 50.9305C41.08 24.0405 61.38 10.5405 87.34 4.77046C114.67 -1.29954 141.31 1.37046 166.26 15.1405C167.12 15.6105 167.91 16.1905 169.01 16.8905Z M179.72 183.22C181.57 186.48 183.28 189.5 185.08 192.65C184.64 193 184.33 193.42 183.96 193.5C160.9 198.31 142.99 211.76 125.93 227.11C116.45 235.64 106.16 243.44 95.5 250.44C85.55 256.98 74.01 259.86 60.78 260.79C63.49 248.82 66.49 237.63 68.44 226.26C69.98 217.29 71.8 208.61 77.51 201.32C79.13 199.24 81.61 197.85 83.58 196.02C84.36 195.29 85.23 194.28 85.37 193.29C86.4 186.41 87.85 179.53 88 172.62C88.15 165.87 83.93 160.98 77.32 157.21C82.81 155 87.5 153.41 91.89 151.21C94.25 150.03 96.62 148.16 98.05 145.98C102.14 139.74 105.74 133.18 109.23 127.28H129.54C131.05 136.34 132.68 145.8 134.17 155.29C134.9 159.96 136.02 164.19 135.01 169.49C133.8 175.89 136.59 183.17 138.32 189.89C138.65 191.18 142.28 192.64 144.12 192.35C151.63 191.16 159.07 189.49 166.45 187.64C170.91 186.52 175.21 184.74 179.74 183.21L179.72 183.22Z";
const svgOriginalWidth = 314;
const svgOriginalHeight = 261;

// SVG 스케일 및 위치 설정
const svgScale = 2;  // SVG 확대 비율
const svgBorderWidth = 2;  // SVG 테두리 두께
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

// 첫 번째 점 설정 (회색 네모)
let speed1 = 10;
let maxBounces1 = 40;
let dotSize1 = 5 ;
let dotColor1 = '#D4DDEF';
let dotOpacityRandomness1 = 80;
let dotShape1 = 'square';

// 두 번째 점 설정 (노란색 원)
let speed2 = 10;
let maxBounces2 = 40;
let dotSize2 = 5 ;
let dotColor2 = '#F5EA7A';
let dotOpacityRandomness2 = 80;
let dotShape2 = 'circle';

// 세 번째 점 설정 (회색 네모)
let speed3 = 10;
let maxBounces3 = 40;
let dotSize3 = 5 ;
let dotColor3 = '#D4DDEF';
let dotOpacityRandomness3 = 80;
let dotShape3 = 'square';

// 네 번째 점 설정 (노란색 원)
let speed4 = 10;
let maxBounces4 = 40;
let dotSize4 = 5 ;
let dotColor4 = '#F5EA7A';
let dotOpacityRandomness4 = 80;
let dotShape4 = 'circle';

// 다섯 번째 점 설정 (회색 네모)
let speed5 = 10;
let maxBounces5 = 40;
let dotSize5 = 5 ;
let dotColor5 = '#D4DDEF';
let dotOpacityRandomness5 = 80;
let dotShape5 = 'square';

// 여섯 번째 점 설정 (노란색 원)
let speed6 = 10;
let maxBounces6 = 40;
let dotSize6 = 5 ;
let dotColor6 = '#F5EA7A';
let dotOpacityRandomness6 = 80;
let dotShape6 = 'circle';

// 일곱 번째 점 설정 (회색 네모)
let speed7 = 10;
let maxBounces7 = 40;
let dotSize7 = 5;
let dotColor7 = '#D4DDEF';
let dotOpacityRandomness7 = 80;
let dotShape7 = 'square';

// 여덟 번째 점 설정 (노란색 원)
let speed8 = 10;
let maxBounces8 = 40;
let dotSize8 = 5;
let dotColor8 = '#F5EA7A';
let dotOpacityRandomness8 = 80;
let dotShape8 = 'circle';

// 5가지 시드값 (5가지 다른 움직임 패턴)
const seeds = [11111, 22222, 33333, 44444, 55555];

function setup() {
  // A2 비율 유지하면서 작은 크기 (약 70% 크기)
  let canvas = createCanvas(800, 1131);
  canvas.parent('canvas-container');
  background(0);
  noLoop();
  
  // SVG를 캔버스 중앙에 배치하기 위한 오프셋 계산
  svgOffsetX = (width - svgOriginalWidth * svgScale) / 2;
  svgOffsetY = (height - svgOriginalHeight * svgScale) / 2;
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
  } else {
    currentX = currentX8;
    currentY = currentY8;
    prevX = prevX8;
    prevY = prevY8;
    angle = angle8;
    bounceCount = bounceCount8;
    speed = speed8;
    maxBounces = maxBounces8;
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
  } else {
    currentX8 = currentX;
    currentY8 = currentY;
    prevX8 = prevX;
    prevY8 = prevY;
    angle8 = angle;
    bounceCount8 = bounceCount;
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
  } else {
    dotColor = dotColor8;
    dotOpacityRandomness = dotOpacityRandomness8;
    dotSize = dotSize8;
    dotShape = dotShape8;
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
  
  if (dotShape === 'circle') {
    circle(x, y, dotSize);
  } else if (dotShape === 'square') {
    rectMode(CENTER);
    square(x, y, dotSize);
  }
}

// DOM 로드 후 버튼에 이벤트 연결
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('drawLine').addEventListener('click', drawLineAcross);
});

