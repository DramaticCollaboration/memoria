<template>
  <q-page class="q-pa-lg flex flex-center column">
    <div class="q-mb-lg text-center">
      <q-avatar size="120px" class="q-mb-sm">
        <img :src="avatarUrl" alt="avatar" />
      </q-avatar>
      <div class="text-h5 q-mb-xs">고인 이름</div>
      <div class="text-caption text-grey-6">영원히 기억합니다</div>
    </div>

    <q-btn color="primary" size="lg" icon="smart_toy" label="AI 대화 시작" class="q-mb-xl" to="/chat" />

    <div style="max-width: 900px; width: 100%">
      <div class="text-subtitle1 q-mb-sm">인생 연대기</div>
      <q-timeline color="primary">
        <q-timeline-entry heading>기억의 순간들</q-timeline-entry>
        <q-timeline-entry title="1980" subtitle="탄생" icon="baby_changing_station">
          세상에 나온 날
        </q-timeline-entry>
        <q-timeline-entry title="2004" subtitle="대학 입학" icon="school">
          새로운 도전의 시작
        </q-timeline-entry>
        <q-timeline-entry title="2012" subtitle="결혼" icon="favorite">
          평생의 동반자와 함께
        </q-timeline-entry>
        <q-timeline-entry title="2024" subtitle="사랑을 남기다" icon="spa">
          가족과 지인들에게 수많은 추억을 남기다
        </q-timeline-entry>
      </q-timeline>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
const avatarUrl = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop';

onMounted(() => {
  // Prefer dark mode for memorial ambience
  $q.dark.set(true);
});
</script>
