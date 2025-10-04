<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-sm">페르소나 생성 대시보드</div>
    <div class="text-caption text-grey q-mb-md">웰다잉 트렌드 기반의 자기 정리. 학습 진행 상황을 확인하세요.</div>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="row items-center q-col-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">학습 완료율</div>
            <q-linear-progress :value="progress" color="primary" size="lg" track-color="grey-8" rounded />
            <div class="text-caption q-mt-xs">{{ Math.round(progress * 100) }}%</div>
          </div>
          <div class="col-12 col-md-6 flex flex-center">
            <q-circular-progress show-value :value="Math.round(progress * 100)" size="80px" :thickness="0.2" color="primary" center-color="grey-10" track-color="grey-8" />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">데이터 통계</div>
        <div class="row q-col-gutter-sm">
          <div class="col-auto"><q-chip icon="photo" color="secondary" text-color="white">사진 {{ stats.photos }}장</q-chip></div>
          <div class="col-auto"><q-chip icon="mic" color="teal" text-color="white">녹음 {{ stats.audioHours }}시간</q-chip></div>
          <div class="col-auto"><q-chip icon="description" color="purple" text-color="white">문서 {{ stats.docs }}개</q-chip></div>
          <div class="col-auto"><q-chip icon="forum" color="orange" text-color="white">대화 {{ stats.chatCount }}건</q-chip></div>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions align="right">
        <q-btn color="primary" label="다음 단계: 데이터 연동" :to="{ name: 'giver-data-sources' }" />
      </q-card-actions>
    </q-card>

    <q-banner class="bg-grey-9 text-grey-3" rounded>
      <q-icon name="lock" class="q-mr-sm" /> 당신의 데이터는 안전하게 암호화 보관되며 AI 학습에만 사용됩니다.
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const progress = ref(0.42);
const stats = ref({ photos: 124, audioHours: 3.5, docs: 28, chatCount: 412 });
</script>
