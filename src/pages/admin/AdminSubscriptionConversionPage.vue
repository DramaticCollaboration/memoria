<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">D-4-M 구독 유료 전환 관리</div>

    <q-card flat bordered class="bg-grey-9 q-mb-md">
      <q-card-section class="row items-center q-col-gutter-sm">
        <div class="col-12 col-md-3"><q-input dense filled v-model="search" label="고객명/이메일 검색"/></div>
        <div class="col-12 col-md-3"><q-select dense filled v-model="tierFilter" :options="tierOptions" label="권장 플랜" clearable/></div>
        <div class="col-12 col-md-3"><q-input dense filled v-model="endBefore" label="무료 종료일 이전 (YYYY-MM-DD)" mask="####-##-##"/></div>
        <div class="col-auto"><q-btn color="primary" label="필터"/></div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <q-table :rows="filtered" :columns="columns" row-key="id" flat bordered :pagination="{ rowsPerPage: 10 }">
          <template #body-cell-usage="props">
            <q-td :props="props">
              <q-chip size="sm" color="blue-grey-7" text-color="white">스토리지 {{ props.row.usage.storage }}GB</q-chip>
              <q-chip size="sm" color="deep-purple" text-color="white" class="q-ml-xs">AI 대화 {{ props.row.usage.chats }}/월</q-chip>
            </q-td>
          </template>
          <template #body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense flat icon="notifications_active" color="secondary" label="알림 예약" @click="openSchedule(props.row)"/>
              <q-btn dense flat icon="upgrade" color="positive" label="플랜 제안" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="dialog">
      <q-card class="bg-grey-10 text-white" style="min-width: 360px">
        <q-card-section class="text-subtitle1">마케팅 알림 스케줄링</q-card-section>
        <q-card-section>
          <q-input filled dense v-model="selected.email" label="대상" disable class="q-mb-sm"/>
          <q-input filled dense v-model="scheduleDate" label="발송일 (YYYY-MM-DD)" mask="####-##-##"/>
          <q-select filled dense v-model="channel" :options="channels" label="채널" class="q-mt-sm"/>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="취소" v-close-popup/>
          <q-btn color="primary" label="예약" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

type Row = { id: number; name: string; email: string; freeEnd: string; usage: { storage: number; chats: number }; recommended: 'Basic'|'Premium' };
const rows = ref<Row[]>([
  { id: 1, name: '홍길동', email: 'hong@example.com', freeEnd: '2025-10-20', usage: { storage: 8, chats: 28 }, recommended: 'Premium' },
  { id: 2, name: '김영희', email: 'kim@example.com', freeEnd: '2025-10-11', usage: { storage: 2, chats: 12 }, recommended: 'Basic' },
]);

const columns = [
  { name: 'name', label: '고객', field: 'name', align: 'left' },
  { name: 'email', label: '이메일', field: 'email', align: 'left' },
  { name: 'freeEnd', label: '무료 종료일', field: 'freeEnd', align: 'left' },
  { name: 'usage', label: '사용량', field: 'usage', align: 'left' },
  { name: 'recommended', label: '권장 플랜', field: 'recommended', align: 'left' },
  { name: 'actions', label: '작업', field: 'actions', align: 'right' },
] as never[];

const search = ref('');
const tierFilter = ref<string|undefined>();
const tierOptions = [ { label: 'Basic', value: 'Basic' }, { label: 'Premium', value: 'Premium' } ];
const endBefore = ref('');

const filtered = computed(() => rows.value.filter(r =>
  (!search.value || r.name.includes(search.value) || r.email.includes(search.value)) &&
  (!tierFilter.value || r.recommended === tierFilter.value) &&
  (!endBefore.value || r.freeEnd <= endBefore.value)
));

const dialog = ref(false);
const selected = reactive<Row>({ id: 0, name: '', email: '', freeEnd: '', usage: { storage: 0, chats: 0 }, recommended: 'Basic' });
const scheduleDate = ref('');
const channel = ref('email');
const channels = [ { label: '이메일', value: 'email' }, { label: '문자', value: 'sms' }, { label: '앱 푸시', value: 'push' } ];

function openSchedule(r: Row) {
  Object.assign(selected, r);
  scheduleDate.value = r.freeEnd;
  dialog.value = true;
}
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
