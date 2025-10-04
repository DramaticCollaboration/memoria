<template>
  <q-page class="q-pa-md" style="max-width: 820px; margin: 0 auto;">
    <div class="text-h5 q-mb-md">기념일/추모일 알림 설정</div>
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-6">
        <div class="text-subtitle2 q-mb-sm">알림 날짜 선택</div>
        <q-date v-model="date" color="primary" bordered minimal />
        <q-input v-model="label" label="설명 (예: 생일)" class="q-mt-sm" />
        <q-btn color="primary" label="추가" class="q-mt-sm" @click="add" />
      </div>
      <div class="col-12 col-md-6">
        <div class="text-subtitle2 q-mb-sm">알림 목록</div>
        <q-list bordered separator v-if="items.length">
          <q-item v-for="(it, i) in items" :key="i">
            <q-item-section>
              <q-item-label>{{ it.label }}</q-item-label>
              <q-item-label caption>{{ it.date }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn flat dense round icon="delete" @click="remove(i)" />
            </q-item-section>
          </q-item>
        </q-list>
        <div v-else class="text-caption text-grey">등록된 알림이 없습니다.</div>
        <div class="text-caption text-grey-7 q-mt-md">PWA/모바일 앱 빌드 시 푸시 알림(FCM/APNs) 연동을 고려하세요.</div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface NItem { label: string; date: string }
const date = ref('');
const label = ref('');
const items = ref<NItem[]>([]);
function add () { if (date.value && label.value) { items.value.push({ label: label.value, date: date.value }); label.value=''; date.value=''; } }
function remove (i: number) { items.value.splice(i, 1); }
</script>
