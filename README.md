# Memoria (memoria)

AI 기술을 통해 고인의 '디지털 페르소나'를 구현하고 유가족에게 따뜻한 마음과 추억을 전달하여, 상조회사와의 전략적 연계를 통해 장기적인 정서적 위안과 구독 기반의 영속적 수익을 창출하는 디지털 영속 콘텐츠 서비스입니다

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

# Memoria (memoria)

AI 기술을 통해 고인의 '디지털 페르소나'를 구현하고 유가족에게 따뜻한 마음과 추억을 전달하여, 상조회사와의 전략적 연계를 통해 장기적인 정서적 위안과 구독 기반의 영속적 수익을 창출하는 디지털 영속 콘텐츠 서비스입니다

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

---

## App Routes (per 기획서/디자인/화면 목록)

- A. 초기 진입/가입
  - / (A-1) 랜딩
  - /verify (A-3) 상조 고객 인증
  - /plans (A-4) 상품/플랜 비교
  - /checkout (A-5) 결제/구독 설정
- B. 콘텐츠 생성/페르소나 구축
  - /creator/dashboard (B-1) 페르소나 대시보드
  - /creator/sources (B-2) 데이터 연동 설정
  - /creator/voice (B-4) 목소리 클로닝 가이드
  - /creator/timecapsule (B-5) 타임캡슐 예약
  - /creator/premium-package (B-6) 프리미엄 제작 패키지
- C. 추모 및 대화 공간
  - /memorial (C-1) 디지털 추모 공간
  - /chat (C-2) AI 대화
  - /gallery (C-3) 자동 생성 콘텐츠 갤러리
  - /timecapsule/view (C-5) 타임캡슐 메시지 열람
  - /family/upload (C-6) 가족 공동 업로드
- D. 관리/보안
  - /manage/subscription (D-1) 구독 관리
  - /manage/preservation (D-2) 데이터 영구 보존 안내
  - /manage/family-roles (D-4) 가족 권한 관리
  - /manage/notifications (D-7) 기념일/추모일 알림

## Backend integration notes

- 본 저장소에는 프런트엔드 구현만 포함되어 있으며, 다음 영역은 서버 연동이 필요합니다.
  - 상조 고객 인증 API (HttpOnly Cookie 기반 세션)
  - 결제 모듈 연동 (정기 구독; 월/연 토글)
  - AI 대화 스트리밍 (WebSocket/SSE)
  - 타임캡슐 예약/발송 스케줄러 (Cron/Cloud Scheduler)
  - 파일 업로드 저장소 및 접근 제어 (역할 기반)
- 각 화면 코드에 TODO 주석으로 연동 지점을 표시했습니다.

## Design/UX

- C-1(추모 공간) 진입 시 다크 모드를 선호하도록 설정하여 차분한 분위기를 제공합니다.
- A-4(플랜 비교)에서 Premium 플랜을 강조(추천 배지, 강조 색)하여 업셀링을 유도합니다.
