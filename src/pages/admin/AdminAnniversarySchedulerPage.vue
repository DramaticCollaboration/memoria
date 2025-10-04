<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">D-7-M 기념일 알림 스케줄러</div>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <q-table :rows="jobs" :columns="columns" row-key="id" flat bordered :pagination="{ rowsPerPage: 10 }">
          <template #body-cell-status="props">
            <q-td :props="props">
              <q-chip :color="props.row.status==='ok' ? 'teal' : props.row.status==='retry' ? 'orange' : 'red'" text-color="white" size="sm">
                {{ statusLabel(props.row.status) }}
              </q-chip>
            </q-td>
          </template>
          <template #body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense flat icon="refresh" color="warning" label="재시도" @click="retry(props.row)"/>
              <q-btn dense flat icon="subject" color="secondary" label="로그" @click="viewLogs(props.row)"/>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="logDialog">
      <q-card class="bg-grey-10 text-white" style="min-width: 520px">
        <q-card-section class="text-subtitle1">실패 로그</q-card-section>
        <q-card-section>
          <q-list bordered class="bg-grey-9 rounded-borders">
            <q-item v-for="(l,i) in currentLogs" :key="i">
              <q-item-section>{{ l.time }}</q-item-section>
              <q-item-section>{{ l.message }}</q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="닫기" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type Job = { id: number; type: string; next: string; last: string; failures: number; status: 'ok'|'retry'|'failed'; logs: { time: string; message: string }[] };
const jobs = ref<Job[]>([
  { id: 1, type: '생일 메시지 생성/발송', next: '2025-10-21 09:00', last: '2025-09-21 09:00', failures: 0, status: 'ok', logs: [] },
  { id: 2, type: '기일 추모 메시지', next: '2025-10-05 09:00', last: '2025-09-05 09:00', failures: 1, status: 'retry', logs: [ { time: '2025-09-05 09:03', message: 'Push 발송 실패: APNS 타임아웃' } ] },
  { id: 3, type: '프리미엄 영상 렌더링', next: '2025-10-10 12:00', last: '2025-09-10 12:00', failures: 2, status: 'failed', logs: [ { time: '2025-09-10 12:20', message: 'FFmpeg 메모리 초과' } ] },
]);

const columns = [
  { name: 'type', label: '작업', field: 'type', align: 'left' },
  { name: 'next', label: '다음 실행', field: 'next', align: 'left' },
  { name: 'last', label: '마지막 실행', field: 'last', align: 'left' },
  { name: 'failures', label: '실패 횟수', field: 'failures', align: 'right' },
  { name: 'status', label: '상태', field: 'status', align: 'left' },
  { name: 'actions', label: '작업', field: 'actions', align: 'right' },
] as never[];

function statusLabel(s: Job['status']) { return s === 'ok' ? '정상' : s === 'retry' ? '재시도 예정' : '실패'; }

const logDialog = ref(false);
const currentLogs = ref<Job['logs']>([]);
function viewLogs(j: Job) { currentLogs.value = j.logs; logDialog.value = true; }
function retry(j: Job) { j.status = 'retry'; }
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
