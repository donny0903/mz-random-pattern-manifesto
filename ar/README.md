# WebAR 설정 가이드

## 1. 이미지 타겟 만들기

포스터 이미지를 AR 마커로 변환해야 합니다.

### 단계:

1. **포스터 이미지 준비**
   - 패턴 생성기로 마음에 드는 패턴 생성
   - 스크린샷 또는 고해상도로 저장
   - `poster/poster.jpg` 또는 `poster.png`로 저장

2. **MindAR 컴파일러 사용**
   - 웹사이트 방문: https://hiukim.github.io/mind-ar-js-doc/tools/compile
   - 포스터 이미지 업로드
   - "Start" 클릭
   - `targets.mind` 파일 다운로드

3. **파일 배치**
   ```
   ar/
   ├── index.html
   └── targets/
       └── poster.mind  ← 여기에 다운로드한 파일 배치
   ```

## 2. 테스트 방법

### 로컬 서버 실행 (필수!)

WebAR은 HTTPS가 필요하므로 로컬 서버를 실행해야 합니다.

#### 방법 1: Python
```bash
# 프로젝트 루트에서
python3 -m http.server 8000

# 브라우저에서 접속
# http://localhost:8000/ar/
```

#### 방법 2: Node.js
```bash
npx http-server -p 8000

# 브라우저에서 접속
# http://localhost:8000/ar/
```

#### 방법 3: VS Code Live Server
- VS Code 확장 프로그램 "Live Server" 설치
- HTML 파일 우클릭 → "Open with Live Server"

### 핸드폰에서 테스트

1. **같은 Wi-Fi 연결**
   - 컴퓨터와 핸드폰을 같은 Wi-Fi에 연결

2. **컴퓨터 IP 확인**
   - Mac: `시스템 설정 > 네트워크`
   - 예: `192.168.0.10`

3. **핸드폰 브라우저로 접속**
   - `http://192.168.0.10:8000/ar/`

4. **카메라 권한 허용**

5. **포스터를 프린트하거나 다른 화면에 띄워서 테스트**

## 3. AR 콘텐츠 커스터마이징

### 텍스트 변경
```html
<a-text 
    value="원하는 텍스트" 
    position="0 0.8 0" 
    color="#FFFFFF">
</a-text>
```

### 색상 변경
```html
<a-box color="#FF0000"></a-box>
```

### 링크 변경
```javascript
document.getElementById('link-button').addEventListener('click', () => {
    window.location.href = 'https://your-website.com';
});
```

### 3D 모델 추가
```html
<a-gltf-model 
    src="./assets/model.gltf" 
    position="0 0 0" 
    scale="0.5 0.5 0.5">
</a-gltf-model>
```

## 4. 배포하기

### Netlify (추천)
```bash
# 1. GitHub에 푸시
git add .
git commit -m "Add WebAR"
git push

# 2. Netlify 접속 (netlify.com)
# 3. "New site from Git" 클릭
# 4. GitHub 저장소 선택
# 5. 자동 배포됨!
```

### Vercel
```bash
npm i -g vercel
vercel
```

### GitHub Pages
```bash
# Settings > Pages > Source: main branch
# https://username.github.io/random-pattern-manifesto/ar/
```

## 5. 포스터 제작

### QR 코드 추가
```
┌─────────────────────────┐
│                         │
│   [Random Pattern]      │  ← 생성된 패턴
│                         │
│                         │
│       [QR Code]         │  ← WebAR 페이지 링크
│                         │
│    art.work/scan        │  ← 짧은 URL
└─────────────────────────┘
```

### 이미지 품질
- **최소 1000x1000px** 이상
- 특징이 많은 이미지가 인식률 높음
- 단순한 색 블록보다 복잡한 패턴이 좋음

## 6. 문제 해결

### 포스터가 인식 안 됨
- 이미지 특징이 너무 단순함 → 더 복잡한 패턴 사용
- 조명이 어두움 → 밝은 곳에서 테스트
- 거리가 너무 멀거나 가까움 → 30cm~1m 거리 유지

### 카메라 권한 오류
- HTTPS 필수 (http는 안 됨)
- 브라우저 설정에서 카메라 허용 확인

### AR 콘텐츠가 안 보임
- 개발자 도구 콘솔 확인
- `targets/poster.mind` 경로 확인
- 브라우저 호환성 확인 (Safari 11+, Chrome 67+)

## 7. 참고 자료

- MindAR 문서: https://hiukim.github.io/mind-ar-js-doc/
- A-Frame 문서: https://aframe.io/docs/
- 예제: https://github.com/hiukim/mind-ar-js

