<template>
  <q-page class="q-pa-md flex flex-center column">
    <div class="intro q-mb-lg">그리운 마음을 전하며, 메시지를 열어봅니다...</div>
    <q-card bordered style="max-width: 900px;" class="full-width">
      <q-card-section>
        <div class="text-h6">타임캡슐 메시지</div>
        <div class="text-caption text-grey-7">특별한 날에 도착한 영상/음성/텍스트</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-video src="https://www.w3schools.com/html/mov_bbb.mp4" style="width: 100%"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
// Simple intro animation using CSS below
</script>

<style scoped>
.intro {
  opacity: 0;
  animation: fadeIn 1.2s ease forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
