let isDrawing = false;  // 그리는 중인지 체크

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

// 첫 번째 점 설정
let speed1 = 10;
let maxBounces1 = 100;
let dotSize1 = 6;
let dotColor1 = '#D4DDEF';
let dotOpacityRandomness1 = 80;
let dotShape1 = 'square';

// 두 번째 점 설정
let speed2 = 10;
let maxBounces2 = 100;
let dotSize2 = 6;
let dotColor2 = '#F5EA7A';
let dotOpacityRandomness2 = 80;
let dotShape2 = 'circle';

function setup() {
  createCanvas(1200, 800);
  background(0);  // 검은색 배경
  noLoop();
}

function draw() {
  if (isDrawing) {
    // 첫 번째 점 업데이트
    updateDot(1);
    
    // 두 번째 점 업데이트
    updateDot(2);
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
  } else {
    currentX = currentX2;
    currentY = currentY2;
    prevX = prevX2;
    prevY = prevY2;
    angle = angle2;
    bounceCount = bounceCount2;
    speed = speed2;
    maxBounces = maxBounces2;
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
  } else {
    currentX2 = currentX;
    currentY2 = currentY;
    prevX2 = prevX;
    prevY2 = prevY;
    angle2 = angle;
    bounceCount2 = bounceCount;
  }
  
  // 점 그리기
  drawDot(currentX, currentY, dotNumber);
}

// 버튼 클릭 시 선 그리기 시작
function drawLineAcross() {
  background(0);  // 검은색 배경
  
  // 초기화
  isDrawing = true;
  
  // 첫 번째 점 초기화
  currentX1 = 0;
  currentY1 = height / 2;
  prevX1 = currentX1;
  prevY1 = currentY1; 
  angle1 = random(-PI/4, PI/4);
  bounceCount1 = 0;
  
  // 두 번째 점 초기화 (다른 위치와 각도)
  currentX2 = width;
  currentY2 = height / 2;
  prevX2 = currentX2;
  prevY2 = currentY2;
  angle2 = random(PI - PI/4, PI + PI/4); // 왼쪽 방향
  bounceCount2 = 0;
  
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
  } else {
    dotColor = dotColor2;
    dotOpacityRandomness = dotOpacityRandomness2;
    dotSize = dotSize2;
    dotShape = dotShape2;
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

