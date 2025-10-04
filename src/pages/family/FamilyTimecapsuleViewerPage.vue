<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">타임캡슐 메시지</div>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section class="row items-center q-col-gutter-md">
        <q-icon name="lock_clock" size="32px" class="q-mr-sm" />
        <div>
          <div class="text-subtitle1">오늘 도착한 메시지</div>
          <div class="text-caption text-grey-5">예약된 날짜에 열리는 고인의 영상/음성 메시지입니다.</div>
        </div>
        <q-space />
        <q-chip color="pink-6" text-color="white" icon="favorite">사랑을 담아</q-chip>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <q-video src="https://www.w3schools.com/html/mov_bbb.mp4" :ratio="16/9" />
        <div class="text-caption text-grey-5 q-mt-sm">감정적으로 힘든 순간, 함께 보며 위안을 얻으세요.</div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions align="right">
        <q-btn flat color="secondary" icon="download" label="로컬 저장" />
        <q-btn flat color="primary" icon="share" label="가족과 공유" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
