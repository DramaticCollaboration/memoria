<template>
  <q-page class="q-pa-md">
    <div class="row items-center q-mb-md">
      <div class="text-h5">페르소나 생성 대시보드</div>
      <q-space/>
      <q-btn color="primary" label="다음: 목소리 녹음" to="/creator/voice" />
    </div>

    <q-card flat bordered class="q-pa-md q-mb-lg" style="max-width: 960px;">
      <div class="text-subtitle2 q-mb-sm">학습 완료율</div>
      <q-linear-progress size="lg" :value="progress" color="primary" track-color="grey-4" class="q-mb-sm"/>
      <div class="text-caption text-grey-7">{{ Math.round(progress*100) }}% 완료</div>
    </q-card>

    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-4">
        <q-card bordered>
          <q-card-section>
            <div class="text-subtitle2">사진 수</div>
            <div class="text-h5">{{ stats.photos }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card bordered>
          <q-card-section>
            <div class="text-subtitle2">녹음 시간</div>
            <div class="text-h5">{{ stats.audioHours }} 시간</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-4">
        <q-card bordered>
          <q-card-section>
            <div class="text-subtitle2">문서/메시지</div>
            <div class="text-h5">{{ stats.documents }} 개</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-separator class="q-my-lg" />

    <div class="row q-gutter-sm">
      <q-btn outline color="primary" label="데이터 연동" to="/creator/sources" />
      <q-btn outline color="primary" label="타임캡슐 예약" to="/creator/timecapsule" />
      <q-btn outline color="primary" label="프리미엄 제작 패키지" to="/creator/premium-package" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
const progress = ref(0.42);
const stats = reactive({ photos: 128, audioHours: 2.5, documents: 57 });
</script>
