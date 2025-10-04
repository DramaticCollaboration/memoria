<template>
  <q-page class="q-pa-md" style="max-width: 820px; margin: 0 auto;">
    <div class="text-h5 q-mb-md">타임캡슐 메시지 예약</div>

    <div class="row q-col-gutter-lg q-mb-md">
      <div class="col-12 col-md-6">
        <q-input v-model="message.title" label="제목" />
        <q-input v-model="message.text" type="textarea" label="메시지 내용" class="q-mt-sm" />
        <q-input v-model="message.mediaUrl" label="영상/음성 URL (선택)" class="q-mt-sm" />
      </div>
      <div class="col-12 col-md-6">
        <div class="text-subtitle2 q-mb-sm">발송 날짜 선택</div>
        <q-date v-model="message.date" color="primary" bordered minimal />
      </div>
    </div>

    <q-btn color="primary" label="예약 추가" @click="addSchedule" />

    <q-separator class="q-my-lg" />

    <div class="text-subtitle2 q-mb-sm">예약 목록</div>
    <q-list bordered v-if="schedules.length">
      <q-item v-for="(s, i) in schedules" :key="i">
        <q-item-section>
          <q-item-label>{{ s.title }} - {{ s.date }}</q-item-label>
          <q-item-label caption>{{ s.text }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn icon="delete" flat round @click="remove(i)" />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-else class="text-caption text-grey">아직 예약된 메시지가 없습니다.</div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

interface SItem { title: string; text: string; mediaUrl?: string; date: string }
const message = reactive<SItem>({ title: '', text: '', mediaUrl: '', date: '' });
const schedules = ref<SItem[]>([]);

function addSchedule () {
  if (!message.title || !message.date) return;
  schedules.value.push({ ...message });
  message.title = '';
  message.text = '';
  message.mediaUrl = '';
  message.date = '';
  // TODO: send to backend scheduler (Cron/Cloud Scheduler)
}
function remove (i: number) { schedules.value.splice(i, 1); }
</script>
