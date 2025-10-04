<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-sm">폐쇄형 보안 및 윤리 고지</div>
    <div class="text-caption text-grey-5 q-mb-md">법률적 안전성을 강조하며 유족 및 가입자만 접속할 수 있는 폐쇄형 서비스입니다.</div>

    <q-card flat bordered class="bg-grey-9 q-mb-md">
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">보안 원칙</div>
        <ul class="q-pl-md text-body2">
          <li>모든 데이터는 전송/저장 시 암호화됩니다.</li>
          <li>유가족(승계자) 명단 기반의 폐쇄형 접근 제어가 적용됩니다.</li>
          <li>정기 무결성 점검 및 이중화 백업을 수행합니다.</li>
        </ul>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">윤리 가이드라인</div>
        <ul class="q-pl-md text-body2">
          <li>AI 페르소나의 응답은 고인의 말투를 모사하지만, 실제 인격이 아닙니다.</li>
          <li>허위 정보/오남용 방지를 위해 대화 로그가 감사 목적으로 보관될 수 있습니다.</li>
          <li>가족의 정서적 안정을 최우선으로 하며, 유해 콘텐츠는 차단됩니다.</li>
        </ul>
        <div class="text-caption text-grey-4 q-mt-sm">이것은 AI이며, 실제 사람이 아님</div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions>
        <q-btn flat color="secondary" label="가족 권한 관리 보기" :to="{ name: 'giver-family-permissions' }" />
        <q-btn flat color="grey-4" label="설정으로 이동" :to="{ name: 'settings' }" />
      </q-card-actions>
    </q-card>

    <q-banner class="bg-grey-9 text-grey-4" rounded>
      <q-icon name="policy" class="q-mr-sm" /> 상세 정책은 서비스 약관 및 개인정보 처리방침을 참조하세요. 문의: support@memoria.app
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
