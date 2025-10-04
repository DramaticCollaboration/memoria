<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-sm">목소리 클로닝 녹음 가이드</div>
    <div class="text-caption text-grey q-mb-md">고유의 말투와 목소리를 AI로 복원합니다. 딥러닝 Voice Cloning 기반.</div>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">녹음 가이드</div>
        <ul class="q-pl-md">
          <li>조용한 공간에서 1분 이상 또박또박 읽어주세요.</li>
          <li>마이크와 입 사이 거리는 15~20cm를 유지하세요.</li>
          <li>감정선이 드러나는 다양한 문장을 읽어주세요.</li>
        </ul>
      </q-card-section>
    </q-card>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">음성 샘플 업로드</div>
        <q-uploader flat bordered :auto-upload="false" accept="audio/*" label="여기에 음성 파일을 드래그하거나 선택하세요" />
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">복원된 목소리 미리 듣기</div>
        <div v-if="sampleUrl">
          <audio :src="sampleUrl" controls></audio>
        </div>
        <div v-else class="text-grey-5">샘플이 처리되면 미리 듣기를 제공해 드립니다.</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" label="프리미엄 패키지 보기" :to="{ name: 'giver-premium-packages' }" />
      </q-card-actions>
    </q-card>

    <q-banner class="bg-grey-9 text-grey-3" rounded>
      <q-icon name="security" class="q-mr-sm" /> 업로드된 음성은 암호화되어 보관되며, 서비스 품질 향상을 위한 학습 외의 용도로 사용되지 않습니다.
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const sampleUrl = ref('');
</script>
