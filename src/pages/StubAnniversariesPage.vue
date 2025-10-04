<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">기념일 및 알림 설정</div>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card flat bordered class="bg-grey-9">
          <q-card-section>
            <div class="text-subtitle2 q-mb-sm">날짜 선택</div>
            <q-date v-model="date" minimal :events="eventDates" color="secondary" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-6">
        <q-card flat bordered class="bg-grey-9">
          <q-card-section>
            <div class="text-subtitle2 q-mb-sm">알림 목록</div>
            <q-list bordered separator class="rounded-borders bg-grey-10">
              <q-item v-for="(item, i) in reminders" :key="i">
                <q-item-section avatar><q-icon :name="item.icon" /></q-item-section>
                <q-item-section>
                  <q-item-label>{{ item.title }}</q-item-label>
                  <q-item-label caption>{{ item.date }} · {{ item.repeat }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-toggle v-model="item.enabled" color="primary" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-separator dark />
          <q-card-actions align="right">
            <q-btn flat color="secondary" icon="add_alert" label="알림 추가" @click="addReminder" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const date = ref<string>('');
const reminders = ref([
  { title: '기일', date: '10-21', repeat: '매년 반복', icon: 'event', enabled: true },
  { title: '생일', date: '12-03', repeat: '매년 반복', icon: 'cake', enabled: true },
]);
const eventDates = ref(['2025/10/21', '2025/12/03']);

function addReminder() {
  // Placeholder: In real app open dialog
}
</script>
