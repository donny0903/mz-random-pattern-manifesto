let isDrawing = false;  // 그리는 중인지 체크
let currentX = 0;       // 현재 x 위치
let currentY = 0;       // 현재 y 위치
let prevX = 0;          // 이전 x 위치
let prevY = 0;          // 이전 y 위치
let angle = 0;          // 이동 각도
let speed = 10;         // 이동 속도
let bounceCount = 0;    // 튕긴 횟수
let maxBounces = 100;   // 최대 튕김 횟수

// 점 스타일 설정
let dotSize = 6;                    // 점 크기
let dotColor = '#000000';           // 점 색상
let dotOpacityRandomness = 80;      // 투명도 랜덤 정도 (0-100)
let dotShape = 'circle';            // 점 모양

function setup() {
  createCanvas(1200, 800);
  background(255);
  noLoop();
}

function draw() {
  if (isDrawing) {
    // 이전 위치 저장
    prevX = currentX;
    prevY = currentY;
    
    // 진행 방향으로 이동
    let forwardX = cos(angle) * speed;
    let forwardY = sin(angle) * speed;
    
    // 진행 방향에 수직인 방향 (왼쪽/오른쪽 흔들림)
    let perpAngle = angle + HALF_PI; // 90도 회전
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
        angle = PI - angle; // x축 반사
        // 랜덤 각도 추가 (더 드라마틱하게)
        let randomAngle = random(radians(30), radians(150));
        angle += random(-1, 1) * randomAngle * 0.8;
        bounced = true;
        
        // 범위 내로 되돌림
        currentX = constrain(currentX, 0, width);
      } else {
        // 최대 튕김 횟수 도달 시 종료
        isDrawing = false;
        noLoop();
        return;
      }
    }
    
    // 상하 벽 충돌
    if (currentY <= 0 || currentY >= height) {
      if (bounceCount < maxBounces) {
        angle = -angle; // y축 반사
        // 랜덤 각도 추가 (더 드라마틱하게)
        let randomAngle = random(radians(30), radians(150));
        angle += random(-1, 1) * randomAngle * 0.8;
        bounced = true;
        
        // 범위 내로 되돌림
        currentY = constrain(currentY, 0, height);
      } else {
        // 최대 튕김 횟수 도달 시 종료
        isDrawing = false;
        noLoop();
        return;
      }
    }
    
    // 튕김 카운트 증가
    if (bounced) {
      bounceCount++;
      console.log(`튕김 ${bounceCount}회`);
    }
    
    // 점 그리기 (선 대신 점들의 연속)
    drawDot(currentX, currentY);
  }
}

// 버튼 클릭 시 선 그리기 시작
function drawLineAcross() {
  background(255);
  
  // 초기화
  isDrawing = true;
  currentX = 0;
  currentY = height / 2;
  prevX = currentX;
  prevY = currentY;
  
  // 시작 각도 (오른쪽으로, 약간 위아래 랜덤)
  angle = random(-PI/4, PI/4);
  
  bounceCount = 0;
  
  loop();
}

// 점 그리기 함수
function drawDot(x, y) {
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

