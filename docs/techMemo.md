
## 기술 메모
- CDN(Content Delivery Network)
    - 라이브러리를 직접 다운로드하지 않고 인터넷에서 바로 불러와 사용하는 방식.
    - 버전 관리, 로딩이 용이하다. 하지만, CDN 서버 혹은 인터넷이 안 될 경우 제한이 생긴다.
    - 웹폰트와 동일한 개념이다.

- Random
    - 기본 개념
        - 난수(Random Number)는 자연적 우연이 아닌 무작위처럼 보이도록 설계된 알고리즘임.
        - 컴퓨터는 완전히 결정적인(Deterministic) 구조임.
        - 아래 열거되는 모든 PRNG는 100% 반복됨.

    - PRNG(Pseudo-Random Number Generator, 무작위 패턴)
        - Uniformity : 고르게 퍼져야함.
        - Independence : 이전 값과 상관이 없어야함.
        - Period : 반복되는 시퀀스가 길어야함.
        - Deterministic : seed가 같으면 값이 같아야함.
        - Speed : 실시간 계산이 가능한 속도여야함.

    - LCG(Linear Congruential Generator, 1951)
        - Xₙ₊₁ = (aXₙ + c) mod m
        - 역사적으로 가장 전통적인 공식임.
        - 하지만, 대규모 시뮬레이션에서는 부족함을 보임.

    - 더 나은 PRNG들
        - Mersenne Twister(1997)
        - Xorshift(2003)
        - 과학, ML, 게임 연산에 적합한 개선 버전들이 발명됨.

    - 실제 사용은?
        - JavaScript(ES6+, Web) : 브라우저마다 다름.
        - p5.js : LCG, seed 고정이 중요함.

    - 컴퓨터는 완전 무결한가?
        - Deterministic은 조심해야되는 발언임.
    
    - 완결성에 정도가 있음.
        - math-level : pure in/output
        - system-level : OS, scheduling, distributed infra
        - observably : 유저, 서비스단
    
    - 재현성이 흔들리는 예시들
        - Network Jitter / OS Scheduler / Thread race
            - 패킷 지연, 스케줄러 선점, 타이밍 비결정성임.
        - Eventual Consistency
            - 분산 DB, CAP 이론에 근거함.
            - 바로 업데이트 안되는 이유.
        - UUID
            - UUID v4는 보안이 목적임, 재현성을 죽여야함.
            - OS 엔트로피 풀에 따라 값이 매번 달라짐.
        - 통밥(Heuristic)
            - 가중치에 인간이 개입함.
    
    - 자연의 Random
        - 예측이 어려우며 현대 물리학에서는 deterministic chaos로 부름.
        - 철학적으로는 완전 결정론일수도 있음.
    
    - 양자(Quantum) Random
        - 재현도 예측도 불가능함. 확률 분포만 있음.


- QR & AR Marker
    - URL을 어떻게 전달하는가?
        - OS 기본 카메라로 인식시키려면 QR 코드를 써야한다. 접근성이 좋다.
        - 포스터 자체를 인식 시키려면 별도 AR Marker 인식 앱이 필요하다.
    
    - 웹에서의 카메라 제어
        - 웹에서는 카메라를 키는 지시 정도만 시킬 수 있다.
        - AR 인식은 별도의 앱을 사용해야한다.
    
    - 이미 있는 솔루션
        - 이건 앱을 다운로드 받아야함.
    
    - Web AR
        - 웹에서 카메라로 실시간으로 볼 수 있다고 한다.


- pseudo-random
    - 컴퓨터의 랜덤은 의사 랜덤임.
    - 공식의 시작점을 randomSeed로 설정할 수 있음.
    - 재현이 가능하는 점이 자연의 랜덤과 가장 큰 차이임.


- local host
    - 일반 와이파이 같은 경우는 공통으로 접속한 와이파이의 IP에 포트 넘버를 입력하면 됨.
    - 학교 와이파이, 공공 와이파이는 보안을 이유로 AP Isolation(클라이언트 격리)을 한다.
    - 로컬 서버 실행 - 터널 생성 - 외부 공개 서버와 연결 - 리버스 프록시.
    - Localtunnel은 주기적으로 타임아웃이 일어난다.


## 구조 변화
- HTML - Canvas - p5.js - sketch.js
- p5.js는 CDN으로 불러옴. js로 통제하는 구조임.


## 스토리텔링
- LCG를 가만히 보면 Daft Punk가 생각든다.
- 인간이 되고싶은 기계.
- 실수와 우연, 랜덤을 표현하고 싶지만, 수학적 완결함이 그 기반이다.


## 스토리텔링 - 심화
- 4집 Random Access Memory을 한 줄로 표현한다먄?
    - 가장 인간적인 기계음악.
- 인간과 기계
    - 인간성은 랜덤
    - 기계는 패턴
- 세부 기획
    - random을 쓰면 말 그대로 랜덤해보인다. (인간의 것)
    - 하지만 seed가 박혀있고 반복되는 랜덤이다. (기계의 한계)
    - 인간의 소리를 만들지만, 본질적으로는 기계일 수 밖에 없는 그들의 처지를 표현하고 싶었다.