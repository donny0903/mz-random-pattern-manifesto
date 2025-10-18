let isDrawing = false;  // 그리는 중인지 체크
let currentX = 0;       // 현재 선의 x 위치
let currentY = 0;       // 현재 선의 y 위치
let prevY = 0;          // 이전 y 위치

function setup() {
  // 캔버스 생성 (600x600)
  createCanvas(1200, 800);
  background(255); // 흰색 배경
  noLoop(); // 기본적으로 draw 멈춤
}

function draw() {
  if (isDrawing) {
    stroke(0); // 검은색
    strokeWeight(2); // 선 두께
    
    // y 좌표를 랜덤하게 변화
    currentY = prevY + random(-20, 20);
    
    // 캔버스 범위 안에 유지
    currentY = constrain(currentY, 0, height);
    
    // 이전 위치에서 현재 위치까지 선 그리기
    if (currentX > 0) {
      line(currentX - 5, prevY, currentX, currentY);
    }
    
    // 현재 y를 다음 프레임의 이전 y로 저장
    prevY = currentY;
    
    // x 위치 증가
    currentX += 5;
    
    // 끝까지 도달하면 멈춤
    if (currentX >= width) {
      isDrawing = false;
      noLoop();
    }
  }
}

// 버튼 클릭 시 선 그리기 시작
function drawLineAcross() {
  // 캔버스 초기화
  background(255);
  
  // 그리기 시작
  isDrawing = true;
  currentX = 0;
  currentY = height / 2; // 중앙에서 시작
  prevY = currentY;
  loop(); // draw 함수 반복 시작
}

// DOM 로드 후 버튼에 이벤트 연결
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('drawLine').addEventListener('click', drawLineAcross);
});

