let isDrawing = false;

// SVG 패스 데이터 (원본 크기: 711 x 812)
const svgPath = "M124 626C120 617.2 111.333 569.333 107.5 546.5C48 522.5 0 475 0 398.5C0 322 28.5 330 41 294.5C51 266.1 77.1667 228.333 89 213C95.1667 186.833 111.8 128.3 129 103.5C150.5 72.5 185.5 0 385.5 0C584.373 0 628.505 115.191 640.303 145.985L640.5 146.5C652 176.5 628.5 225 672.5 235.5C716.5 246 714 306 706.5 385.5C700.5 449.1 678.667 574.667 668.5 629.5C660.667 615.167 643.8 597.2 639 640C633 693.5 577 752 535 782.5C493 813 408.5 812 379.5 812C350.5 812 279 803.5 267 796C255 788.5 129 637 124 626Z";
const svgOriginalWidth = 711;
const svgOriginalHeight = 812;

// SVG 스케일 및 위치 설정
const svgScale = 1;  // SVG 확대 비율
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

// 첫 번째 점 설정 (회색 네모)
let speed1 = 10;
let maxBounces1 = 100;
let dotSize1 = 5;
let dotColor1 = '#D4DDEF';
let dotOpacityRandomness1 = 80;
let dotShape1 = 'square';

// 두 번째 점 설정 (노란색 원)
let speed2 = 10;
let maxBounces2 = 100;
let dotSize2 = 5;
let dotColor2 = '#F5EA7A';
let dotOpacityRandomness2 = 80;
let dotShape2 = 'circle';

// 세 번째 점 설정 (회색 네모)
let speed3 = 10;
let maxBounces3 = 100;
let dotSize3 = 5;
let dotColor3 = '#D4DDEF';
let dotOpacityRandomness3 = 80;
let dotShape3 = 'square';

// 네 번째 점 설정 (노란색 원)
let speed4 = 10;
let maxBounces4 = 100;
let dotSize4 = 5;
let dotColor4 = '#F5EA7A';
let dotOpacityRandomness4 = 80;
let dotShape4 = 'circle';

// 다섯 번째 점 설정 (회색 네모)
let speed5 = 10;
let maxBounces5 = 100;
let dotSize5 = 5;
let dotColor5 = '#D4DDEF';
let dotOpacityRandomness5 = 80;
let dotShape5 = 'square';

// 여섯 번째 점 설정 (노란색 원)
let speed6 = 10;
let maxBounces6 = 100;
let dotSize6 = 5;
let dotColor6 = '#F5EA7A';
let dotOpacityRandomness6 = 80;
let dotShape6 = 'circle';

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
    // SVG 클리핑 적용 (스케일 및 중앙 배치)
    drawingContext.save();
    drawingContext.translate(svgOffsetX, svgOffsetY);
    drawingContext.scale(svgScale, svgScale);
    let path = new Path2D(svgPath);
    drawingContext.clip(path);
    
    // 모든 점 업데이트
    updateDot(1);
    updateDot(2);
    updateDot(3);
    updateDot(4);
    updateDot(5);
    updateDot(6);
    
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
  } else {
    currentX = currentX6;
    currentY = currentY6;
    prevX = prevX6;
    prevY = prevY6;
    angle = angle6;
    bounceCount = bounceCount6;
    speed = speed6;
    maxBounces = maxBounces6;
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
  
  // 벽 충돌 체크 및 반사
  let bounced = false;
  
  // 좌우 벽 충돌
  if (currentX <= 0 || currentX >= width) {
    if (bounceCount < maxBounces) {
      angle = PI - angle;
      let randomAngle = random(radians(30), radians(150));
      angle += random(-1, 1) * randomAngle * 0.8;
      bounced = true;
      currentX = constrain(currentX, 0, width);
    } else {
      return; // 이 점은 멈춤
    }
  }
  
  // 상하 벽 충돌
  if (currentY <= 0 || currentY >= height) {
    if (bounceCount < maxBounces) {
      angle = -angle;
      let randomAngle = random(radians(30), radians(150));
      angle += random(-1, 1) * randomAngle * 0.8;
      bounced = true;
      currentY = constrain(currentY, 0, height);
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
  } else {
    currentX6 = currentX;
    currentY6 = currentY;
    prevX6 = prevX;
    prevY6 = prevY;
    angle6 = angle;
    bounceCount6 = bounceCount;
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
  drawingContext.strokeStyle = '#333333';
  drawingContext.lineWidth = 2;
  drawingContext.stroke(path);
  drawingContext.restore();
  
  // 5가지 시드 중 랜덤하게 선택
  let selectedSeed = random(seeds);
  console.log('선택된 시드:', selectedSeed);
  
  // 선택된 시드로 랜덤 시드 설정
  randomSeed(selectedSeed);
  
  // 초기화
  isDrawing = true;
  
  // 첫 번째 점 초기화 (왼쪽)
  currentX1 = 0;
  currentY1 = height / 2;
  prevX1 = currentX1;
  prevY1 = currentY1; 
  angle1 = random(-PI/4, PI/4);
  bounceCount1 = 0;
  
  // 두 번째 점 초기화 (오른쪽)
  currentX2 = width;
  currentY2 = height / 2;
  prevX2 = currentX2;
  prevY2 = currentY2;
  angle2 = random(PI - PI/4, PI + PI/4);
  bounceCount2 = 0;
  
  // 세 번째 점 초기화 (위쪽)
  currentX3 = width / 2;
  currentY3 = 0;
  prevX3 = currentX3;
  prevY3 = currentY3;
  angle3 = random(PI/4, PI - PI/4);
  bounceCount3 = 0;
  
  // 네 번째 점 초기화 (아래쪽)
  currentX4 = width / 2;
  currentY4 = height;
  prevX4 = currentX4;
  prevY4 = currentY4;
  angle4 = random(-PI + PI/4, -PI/4);
  bounceCount4 = 0;
  
  // 다섯 번째 점 초기화 (왼쪽 위 대각선)
  currentX5 = 0;
  currentY5 = height / 3;
  prevX5 = currentX5;
  prevY5 = currentY5;
  angle5 = random(0, PI/2);
  bounceCount5 = 0;
  
  // 여섯 번째 점 초기화 (오른쪽 아래 대각선)
  currentX6 = width;
  currentY6 = height * 2 / 3;
  prevX6 = currentX6;
  prevY6 = currentY6;
  angle6 = random(PI, PI + PI/2);
  bounceCount6 = 0;
  
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
  } else {
    dotColor = dotColor6;
    dotOpacityRandomness = dotOpacityRandomness6;
    dotSize = dotSize6;
    dotShape = dotShape6;
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

