let isDrawing = false;  // 그리는 중인지 체크
let currentX = 0;       // 현재 선의 x 위치

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
    
    let y = height / 2; // 중앙 y 좌표
    
    // 이전 위치에서 현재 위치까지 선 그리기
    if (currentX > 0) {
      line(currentX - 5, y, currentX, y);
    }
    
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
  loop(); // draw 함수 반복 시작
}

// DOM 로드 후 버튼에 이벤트 연결
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('drawLine').addEventListener('click', drawLineAcross);
});

