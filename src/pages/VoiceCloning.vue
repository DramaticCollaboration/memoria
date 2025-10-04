<template>
  <q-page class="q-pa-md" style="max-width: 820px; margin: 0 auto;">
    <div class="text-h5 q-mb-sm">목소리 클로닝 녹음 가이드</div>
    <div class="text-body2 q-mb-md">조용한 공간에서 1분 이상의 음성 샘플을 녹음하거나 업로드해 주세요.</div>

    <q-card bordered class="q-pa-md q-mb-md">
      <div class="text-subtitle2 q-mb-sm">샘플 업로드</div>
      <q-uploader
        label="음성 파일 업로드 (wav/mp3)"
        accept="audio/*"
        auto-upload="false"
        @added="onAdded"
      />
    </q-card>

    <q-card bordered class="q-pa-md" v-if="previewUrl">
      <div class="text-subtitle2 q-mb-sm">업로드된 샘플</div>
      <audio :src="previewUrl" controls style="width: 100%"/>
      <q-separator class="q-my-md" />
      <div class="text-subtitle2 q-mb-sm">복원된 목소리 미리 듣기 (샘플)</div>
      <audio :src="previewUrl" controls style="width: 100%"/>
      <div class="text-caption text-grey-7 q-mt-sm">실제 복원은 서버에서 처리됩니다.</div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const previewUrl = ref<string | null>(null);

function onAdded (files: readonly File[]) {
  if (files && files.length) {
    previewUrl.value = URL.createObjectURL(files[0]);
  }
}
</script>
