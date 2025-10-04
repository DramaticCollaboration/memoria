<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-sm">타임캡슐 메시지 발송 예약</div>
    <div class="text-caption text-grey q-mb-md">특정 날짜나 의미 있는 순간에 영상/음성/텍스트 메시지를 예약 발송합니다.</div>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">발송 날짜 선택</div>
            <q-date v-model="date" landscape minimal />
          </div>
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">메시지 작성/첨부</div>
            <q-input v-model="title" label="제목" filled class="q-mb-sm" />
            <q-input v-model="message" type="textarea" autogrow filled label="메시지 내용 (선택)" class="q-mb-sm" />
            <q-uploader flat bordered :auto-upload="false" label="영상/음성/이미지 첨부 (선택)" />
          </div>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions align="right">
        <q-btn color="primary" label="예약 발송" @click="schedule" />
      </q-card-actions>
    </q-card>

    <q-banner class="bg-grey-9 text-grey-3" rounded>
      <q-icon name="event" class="q-mr-sm" /> 예: 자녀 결혼식, 특정 나이 도달 등 중요한 날에 타임캡슐을 전하세요.
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const date = ref<string>('');
const title = ref<string>('');
const message = ref<string>('');

function schedule() {
  // stub
}
</script>
