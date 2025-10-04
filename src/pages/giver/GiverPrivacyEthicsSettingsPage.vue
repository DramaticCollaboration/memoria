<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-sm">프라이버시 및 윤리 설정</div>
    <div class="text-caption text-grey q-mb-md">데이터 연동과 AI 활용 범위를 투명하게 관리하세요.</div>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">데이터 활용</div>
        <q-toggle v-model="useForTraining" color="primary" label="AI 학습에 내 데이터 사용" />
        <q-toggle v-model="anonymizeForResearch" color="primary" label="익명화된 형태로 연구 목적으로 활용 허용" />
        <q-toggle v-model="shareWithFamily" color="primary" label="가족에게 일부 데이터 공유 허용" />
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">사망 후 공개 수준</div>
        <q-select v-model="posthumousVisibility" :options="visibilityOptions" label="공개 수준" filled />
        <div class="text-caption text-grey q-mt-sm">이 설정은 유가족 접근 범위와 공개 정책에 반영됩니다.</div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions align="right">
        <q-btn color="primary" label="저장" @click="save" />
      </q-card-actions>
    </q-card>

    <q-banner class="bg-grey-9 text-grey-3" rounded>
      <q-icon name="policy" class="q-mr-sm" /> 개인정보는 투명하게 관리되며, 언제든 변경/철회할 수 있습니다.
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const useForTraining = ref(true);
const anonymizeForResearch = ref(false);
const shareWithFamily = ref(true);
const visibilityOptions = [
  { label: '비공개 (가족만)', value: 'private' },
  { label: '가족 + 지정 인원', value: 'restricted' },
  { label: '일부 공개 (선택 항목)', value: 'partial' },
];
const posthumousVisibility = ref(visibilityOptions[0]);

function save() {
  // stub
}
</script>
