<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">D-5-S 데이터 영구 보존 시스템 모니터링</div>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4" v-for="card in cards" :key="card.key">
        <q-card flat bordered class="bg-grey-9">
          <q-card-section>
            <div class="row items-center no-wrap">
              <q-icon :name="card.icon" class="q-mr-sm"/>
              <div class="text-subtitle2">{{ card.title }}</div>
            </div>
            <div class="q-mt-sm">
              <q-linear-progress :value="card.value" :color="card.color" track-color="grey-8" rounded />
              <div class="text-caption text-grey-5 q-mt-xs">{{ card.caption }}</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-card flat bordered class="bg-grey-9 q-mt-md">
      <q-card-section>
        <div class="text-subtitle1"><q-icon name="schedule" class="q-mr-sm"/>백업 상태</div>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <q-list bordered class="bg-grey-10 rounded-borders">
          <q-item v-for="(b, i) in backups" :key="i">
            <q-item-section>{{ b.region }}</q-item-section>
            <q-item-section>{{ b.type }}</q-item-section>
            <q-item-section side>
              <q-chip :color="b.ok ? 'teal' : 'red'" text-color="white" size="sm">{{ b.ok ? '정상' : '오류' }}</q-chip>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-9 q-mt-md">
      <q-card-section>
        <div class="text-subtitle1"><q-icon name="lock" class="q-mr-sm"/>접근 로그 (최근)</div>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <q-table :rows="logs" :columns="logCols" row-key="id" flat bordered dense :pagination="{ rowsPerPage: 5 }" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cards = ref([
  { key: 'enc', title: '암호화 상태', icon: 'enhanced_encryption', value: 1, color: 'teal', caption: '전송/저장 데이터 100% 암호화' },
  { key: 'cap', title: '저장 용량 사용률', icon: 'sd_storage', value: 0.42, color: 'indigo', caption: '42% 사용 중 (증설 여유 있음)' },
  { key: 'health', title: '시스템 안정성', icon: 'health_and_safety', value: 0.98, color: 'green', caption: '최근 30일 가용성 99.8%' },
]);

const backups = ref([
  { region: '서울-1', type: '핫 백업', ok: true },
  { region: '부산-2', type: '콜드 백업', ok: true },
  { region: '오프사이트 보관', type: '테이프', ok: true },
]);

const logs = ref([
  { id: 1, time: '2025-10-04 19:22', actor: 'system', action: 'backup-verify', result: 'ok' },
  { id: 2, time: '2025-10-04 18:50', actor: 'admin@partner.co', action: 'export-request', result: 'approved' },
  { id: 3, time: '2025-10-04 17:10', actor: 'monitor', action: 'integrity-check', result: 'ok' },
]);

const logCols = [
  { name: 'time', label: '시간', field: 'time', align: 'left' },
  { name: 'actor', label: '주체', field: 'actor', align: 'left' },
  { name: 'action', label: '행동', field: 'action', align: 'left' },
  { name: 'result', label: '결과', field: 'result', align: 'left' },
] as never[];
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
