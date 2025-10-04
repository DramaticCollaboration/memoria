<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-md">Giver 설정 대시보드</div>

    <q-banner class="bg-indigo-9 text-white q-mb-md" rounded>
      <div class="row items-center no-wrap">
        <q-icon name="psychology" class="q-mr-sm" />
        <div>
          당신의 삶과 가치를 디지털 유산으로 남겨 보세요. AI가 더 잘 배우도록 안내해드립니다.
        </div>
      </div>
    </q-banner>

    <q-list bordered class="rounded-borders">
      <q-item clickable v-ripple :to="{ name: 'giver-persona' }">
        <q-item-section avatar><q-icon name="hub" /></q-item-section>
        <q-item-section>
          <q-item-label>페르소나 생성 대시보드</q-item-label>
          <q-item-label caption>학습 진행률과 데이터 통계를 확인하세요</q-item-label>
        </q-item-section>
        <q-item-section side><q-icon name="chevron_right" /></q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: 'giver-data-sources' }">
        <q-item-section avatar><q-icon name="cloud_sync" /></q-item-section>
        <q-item-section>
          <q-item-label>다중 데이터 연동 설정</q-item-label>
          <q-item-label caption>SNS/메일/메신저 데이터를 안전하게 연동</q-item-label>
        </q-item-section>
        <q-item-section side><q-icon name="chevron_right" /></q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: 'giver-qa-interview' }">
        <q-item-section avatar><q-icon name="forum" /></q-item-section>
        <q-item-section>
          <q-item-label>Q&A 인터뷰/가치관 입력</q-item-label>
          <q-item-label caption>당신의 말투와 철학을 학습합니다</q-item-label>
        </q-item-section>
        <q-item-section side><q-icon name="chevron_right" /></q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: 'giver-voice-cloning' }">
        <q-item-section avatar><q-icon name="graphic_eq" /></q-item-section>
        <q-item-section>
          <q-item-label>목소리 클로닝 녹음 가이드</q-item-label>
          <q-item-label caption>음성 샘플 업로드 및 복원 미리 듣기</q-item-label>
        </q-item-section>
        <q-item-section side><q-icon name="chevron_right" /></q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item clickable v-ripple :to="{ name: 'giver-premium-packages' }">
        <q-item-section avatar><q-icon name="workspace_premium" /></q-item-section>
        <q-item-section>
          <q-item-label>프리미엄 제작 패키지 구매</q-item-label>
          <q-item-label caption>전문 인터뷰/고화질 기록/정밀 페르소나</q-item-label>
        </q-item-section>
        <q-item-section side><q-icon name="chevron_right" /></q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: 'giver-timecapsule' }">
        <q-item-section avatar><q-icon name="schedule_send" /></q-item-section>
        <q-item-section>
          <q-item-label>타임캡슐 메시지 발송 예약</q-item-label>
          <q-item-label caption>특정 날짜/조건에 메시지 예약 발송</q-item-label>
        </q-item-section>
        <q-item-section side><q-icon name="chevron_right" /></q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: 'giver-content-upload' }">
        <q-item-section avatar><q-icon name="upload_file" /></q-item-section>
        <q-item-section>
          <q-item-label>콘텐츠 직접 입력/업로드</q-item-label>
          <q-item-label caption>일기/메모/음성/사진/동영상/편지</q-item-label>
        </q-item-section>
        <q-item-section side><q-icon name="chevron_right" /></q-item-section>
      </q-item>

      <q-separator spaced />

      <q-item clickable v-ripple :to="{ name: 'giver-permanent-storage' }">
        <q-item-section avatar><q-icon name="inventory_2" /></q-item-section>
        <q-item-section>
          <q-item-label>데이터 영구 보존 안내</q-item-label>
          <q-item-label caption>상조회사 연계로 안전하고 장기 보관</q-item-label>
        </q-item-section>
        <q-item-section side><q-icon name="chevron_right" /></q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: 'giver-family-permissions' }">
        <q-item-section avatar><q-icon name="group" /></q-item-section>
        <q-item-section>
          <q-item-label>가족 권한 관리</q-item-label>
          <q-item-label caption>업로드/다운로드/대화 권한 설정</q-item-label>
        </q-item-section>
        <q-item-section side><q-icon name="chevron_right" /></q-item-section>
      </q-item>

      <q-item clickable v-ripple :to="{ name: 'giver-privacy-ethics' }">
        <q-item-section avatar><q-icon name="policy" /></q-item-section>
        <q-item-section>
          <q-item-label>프라이버시 및 윤리 설정</q-item-label>
          <q-item-label caption>데이터 활용 범위와 공개 수준 관리</q-item-label>
        </q-item-section>
        <q-item-section side><q-icon name="chevron_right" /></q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup lang="ts"></script>
