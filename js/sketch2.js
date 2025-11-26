let isDrawing = false;

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

 // random, robot, human, music, love
// 5가지 시드값 (5가지 다른 움직임 패턴)
const seeds = [11497110100111109,11411198111116, 10411710997110, 10911711510599, 108111118101];

// 전역 점 크기 설정 (모든 점에 적용)
const globalDotSize = 4.3;

function setup() {
  // 전체 화면 크기로 캔버스 생성
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('landing-background');
  canvas.style('position', 'fixed');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('z-index', '-1');
  background(0);
  noLoop();
  
  // 페이지 로드 시 자동으로 패턴 그리기 시작
  drawLineAcross();
}

// 윈도우 리사이즈 처리
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  if (isDrawing) {
    drawLineAcross();
  }
}

function draw() {
  if (isDrawing) {
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
  
  // 전체 화면 영역을 반사 영역으로 사용
  let bounceLeft = 0;
  let bounceRight = width;
  let bounceTop = 0;
  let bounceBottom = height;
  
  // 벽 충돌 체크 및 반사
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

// 패턴 그리기 시작
function drawLineAcross() {
  background(0);
  
  // 5가지 시드 중 랜덤하게 선택
  let selectedSeed = random(seeds);
  console.log('선택된 시드:', selectedSeed);
  
  // 선택된 시드로 랜덤 시드 설정
  randomSeed(selectedSeed);
  
  // 초기화
  isDrawing = true;
  
  // 화면 중앙 계산
  let centerX = width / 2;
  let centerY = height / 2;
  let startRadius = 50; // 중앙에서의 시작 반경
  
  // 첫 번째 점 초기화 (화면 중앙 왼쪽)
  currentX1 = centerX - startRadius;
  currentY1 = centerY;
  prevX1 = currentX1;
  prevY1 = currentY1; 
  angle1 = random(-PI/4, PI/4);
  bounceCount1 = 0;
  
  // 두 번째 점 초기화 (화면 중앙 오른쪽)
  currentX2 = centerX + startRadius;
  currentY2 = centerY;
  prevX2 = currentX2;
  prevY2 = currentY2;
  angle2 = random(PI - PI/4, PI + PI/4);
  bounceCount2 = 0;
  
  // 세 번째 점 초기화 (화면 중앙 위쪽)
  currentX3 = centerX;
  currentY3 = centerY - startRadius;
  prevX3 = currentX3;
  prevY3 = currentY3;
  angle3 = random(PI/4, PI - PI/4);
  bounceCount3 = 0;
  
  // 네 번째 점 초기화 (화면 중앙 아래쪽)
  currentX4 = centerX;
  currentY4 = centerY + startRadius;
  prevX4 = currentX4;
  prevY4 = currentY4;
  angle4 = random(-PI + PI/4, -PI/4);
  bounceCount4 = 0;
  
  // 다섯 번째 점 초기화 (화면 중앙 왼쪽 위 대각선)
  currentX5 = centerX - startRadius * 0.7;
  currentY5 = centerY - startRadius * 0.7;
  prevX5 = currentX5;
  prevY5 = currentY5;
  angle5 = random(0, PI/2);
  bounceCount5 = 0;
  
  // 여섯 번째 점 초기화 (화면 중앙 오른쪽 아래 대각선)
  currentX6 = centerX + startRadius * 0.7;
  currentY6 = centerY + startRadius * 0.7;
  prevX6 = currentX6;
  prevY6 = currentY6;
  angle6 = random(PI, PI + PI/2);
  bounceCount6 = 0;
  
  // 일곱 번째 점 초기화 (화면 중앙 오른쪽 위 대각선)
  currentX7 = centerX + startRadius * 0.7;
  currentY7 = centerY - startRadius * 0.7;
  prevX7 = currentX7;
  prevY7 = currentY7;
  angle7 = random(0, PI);
  bounceCount7 = 0;
  
  // 여덟 번째 점 초기화 (화면 중앙 왼쪽 아래 대각선)
  currentX8 = centerX - startRadius * 0.7;
  currentY8 = centerY + startRadius * 0.7;
  prevX8 = currentX8;
  prevY8 = currentY8;
  angle8 = random(PI, TWO_PI);
  bounceCount8 = 0;
  
  // 아홉 번째 점 초기화 (랜덤 위치)
  currentX9 = centerX + random(-startRadius, startRadius);
  currentY9 = centerY + random(-startRadius, startRadius);
  prevX9 = currentX9;
  prevY9 = currentY9;
  angle9 = random(TWO_PI);
  bounceCount9 = 0;
  
  // 열 번째 점 초기화 (랜덤 위치)
  currentX10 = centerX + random(-startRadius, startRadius);
  currentY10 = centerY + random(-startRadius, startRadius);
  prevX10 = currentX10;
  prevY10 = currentY10;
  angle10 = random(TWO_PI);
  bounceCount10 = 0;
  
  // 열한 번째 점 초기화 (랜덤 위치)
  currentX11 = centerX + random(-startRadius, startRadius);
  currentY11 = centerY + random(-startRadius, startRadius);
  prevX11 = currentX11;
  prevY11 = currentY11;
  angle11 = random(TWO_PI);
  bounceCount11 = 0;
  
  // 열두 번째 점 초기화 (랜덤 위치)
  currentX12 = centerX + random(-startRadius, startRadius);
  currentY12 = centerY + random(-startRadius, startRadius);
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

// DOM 로드 후 자동 시작
window.addEventListener('DOMContentLoaded', () => {
  // 버튼이 있으면 이벤트 연결
  const drawButton = document.getElementById('drawLine');
  if (drawButton) {
    drawButton.addEventListener('click', drawLineAcross);
  }
});


