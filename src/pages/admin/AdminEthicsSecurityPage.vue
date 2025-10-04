<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">D-8-E 윤리 및 폐쇄형 보안 관리</div>

    <q-card flat bordered class="bg-grey-9 q-mb-md">
      <q-card-section class="row items-center q-col-gutter-sm">
        <div class="col">
          <q-toggle v-model="aiDisclaimerEnforced" color="primary" label="모든 대화에 '이것은 AI이며, 실제 사람이 아님' 고지 표시 강제" />
        </div>
        <div class="col-auto">
          <q-chip :color="aiDisclaimerEnforced ? 'teal' : 'grey'" text-color="white">준수 {{ aiDisclaimerEnforced ? 'ON' : 'OFF' }}</q-chip>
        </div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <div class="text-subtitle1"><q-icon name="report" class="q-mr-sm"/>AI 윤리 위반 로그</div>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <q-table :rows="filtered" :columns="columns" row-key="id" flat bordered dense :pagination="{ rowsPerPage: 10 }">
          <template #top>
            <div class="row items-center q-col-gutter-sm full-width">
              <div class="col-12 col-md-3"><q-input dense filled v-model="search" label="규칙/내용 검색"/></div>
              <div class="col-12 col-md-3"><q-select dense filled v-model="statusFilter" :options="statusOptions" label="상태" clearable/></div>
            </div>
          </template>
          <template #body-cell-severity="props">
            <q-td :props="props"><q-chip :color="sevColor(props.row.severity)" text-color="white" size="sm">{{ props.row.severity }}</q-chip></q-td>
          </template>
          <template #body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense flat icon="check" color="positive" @click="resolve(props.row)" />
              <q-btn dense flat icon="assignment" color="secondary" @click="review(props.row)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="reviewDialog">
      <q-card class="bg-grey-10 text-white" style="min-width: 420px">
        <q-card-section class="text-subtitle1">리뷰 및 조치 기록</q-card-section>
        <q-card-section>
          <q-input v-model="note" type="textarea" autogrow filled label="조치 내용"/>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="취소" v-close-popup/>
          <q-btn color="primary" label="저장" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

type Log = { id: number; time: string; rule: string; severity: 'low'|'medium'|'high'; excerpt: string; status: 'open'|'resolved' };
const logs = ref<Log[]>([
  { id: 1, time: '2025-10-04 18:22', rule: '정체성 오인 고지 누락', severity: 'medium', excerpt: '고지 문구가 표시되지 않음', status: 'open' },
  { id: 2, time: '2025-10-04 16:10', rule: '민감 주제 대응 가이드 위반', severity: 'high', excerpt: '자살 관련 부적절한 조언', status: 'open' },
]);

const columns = [
  { name: 'time', label: '시간', field: 'time', align: 'left' },
  { name: 'rule', label: '규칙', field: 'rule', align: 'left' },
  { name: 'severity', label: '심각도', field: 'severity', align: 'left' },
  { name: 'excerpt', label: '요약', field: 'excerpt', align: 'left' },
  { name: 'status', label: '상태', field: 'status', align: 'left' },
  { name: 'actions', label: '작업', field: 'actions', align: 'right' },
] as never[];

const aiDisclaimerEnforced = ref(true);
const search = ref('');
const statusFilter = ref<string|undefined>();
const statusOptions = [ { label: '열림', value: 'open' }, { label: '해결', value: 'resolved' } ];

const filtered = computed(() => logs.value.filter(l =>
  (!search.value || l.rule.includes(search.value) || l.excerpt.includes(search.value)) &&
  (!statusFilter.value || l.status === statusFilter.value)
));

function sevColor(s: Log['severity']) { return s === 'high' ? 'red-7' : s === 'medium' ? 'orange' : 'teal'; }
function resolve(l: Log) { l.status = 'resolved'; }
const reviewDialog = ref(false);
const note = ref('');
function review(l: Log) {
  reviewDialog.value = true;
  console.log('review', l);
}
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
