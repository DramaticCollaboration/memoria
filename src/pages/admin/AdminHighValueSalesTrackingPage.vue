<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">D-6-C 고가 프리미엄 패키지 판매 추적</div>

    <q-card flat bordered class="bg-grey-9 q-mb-md">
      <q-card-section class="row items-center q-col-gutter-sm">
        <div class="col-12 col-md-3"><q-input dense filled v-model="search" label="리드 검색 (이름/연락처)"/></div>
        <div class="col-12 col-md-3"><q-select dense filled v-model="stageFilter" :options="stageOptions" label="진행 단계" clearable/></div>
        <div class="col-auto"><q-btn color="primary" label="필터"/></div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <q-table :rows="filteredLeads" :columns="columns" row-key="id" flat bordered :pagination="{ rowsPerPage: 10 }">
          <template #body-cell-price="props">
            <q-td :props="props">₩{{ props.row.price.toLocaleString() }}</q-td>
          </template>
          <template #body-cell-rep="props">
            <q-td :props="props">
              <q-select dense outlined v-model="props.row.rep" :options="reps" emit-value map-options style="min-width: 140px"/>
            </q-td>
          </template>
          <template #body-cell-stage="props">
            <q-td :props="props">
              <q-select dense outlined v-model="props.row.stage" :options="stageOptions" emit-value map-options style="min-width: 140px"/>
            </q-td>
          </template>
          <template #body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense flat icon="schedule_send" color="secondary" @click="schedule(props.row)" />
              <q-btn dense flat icon="done" color="positive" @click="markWon(props.row)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="scheduleDialog">
      <q-card class="bg-grey-10 text-white" style="min-width: 360px">
        <q-card-section>
          <div class="text-subtitle1">후속 일정 스케줄</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="dialogLead.next" label="다음 액션 (예: 전화 상담)" filled dense class="q-mb-sm"/>
          <q-input v-model="dialogLead.nextDate" label="다음 일정 (YYYY-MM-DD)" mask="####-##-##" filled dense/>
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
import { computed, reactive, ref } from 'vue';

type Lead = { id: number; name: string; contact: string; package: string; price: number; rep: string; stage: string; next: string; nextDate: string };
const leads = ref<Lead[]>([
  { id: 1, name: '김민수', contact: '010-1234-5678', package: 'Signature Plus', price: 5200000, rep: 'lee', stage: 'contacted', next: '추가 자료 발송', nextDate: '2025-10-06' },
  { id: 2, name: '박지현', contact: '010-8888-2222', package: 'Signature Plus', price: 6800000, rep: 'kim', stage: 'proposal', next: '견적 재조정', nextDate: '2025-10-05' },
  { id: 3, name: '정우성', contact: '010-7777-9999', package: 'Legacy Film', price: 5100000, rep: 'none', stage: 'new', next: '초기 상담 배정', nextDate: '' },
]);

const reps = [
  { label: '미배정', value: 'none' },
  { label: '김상담', value: 'kim' },
  { label: '이상담', value: 'lee' },
  { label: '최상담', value: 'choi' },
];

const stageOptions = [
  { label: '신규', value: 'new' },
  { label: '연락완료', value: 'contacted' },
  { label: '제안서', value: 'proposal' },
  { label: '진행중', value: 'negotiation' },
  { label: '수주', value: 'won' },
  { label: '상실', value: 'lost' },
];

const columns = [
  { name: 'name', label: '고객', field: 'name', align: 'left' },
  { name: 'contact', label: '연락처', field: 'contact', align: 'left' },
  { name: 'package', label: '패키지', field: 'package', align: 'left' },
  { name: 'price', label: '예상 금액', field: 'price', align: 'right' },
  { name: 'rep', label: '담당자', field: 'rep', align: 'left' },
  { name: 'stage', label: '진행 단계', field: 'stage', align: 'left' },
  { name: 'next', label: '다음 액션', field: 'next', align: 'left' },
  { name: 'nextDate', label: '다음 일정', field: 'nextDate', align: 'left' },
  { name: 'actions', label: '작업', field: 'actions', align: 'right' },
] as never[];

const search = ref('');
const stageFilter = ref<string|undefined>();

const filteredLeads = computed(() => leads.value.filter(l =>
  (!search.value || l.name.includes(search.value) || l.contact.includes(search.value)) &&
  (!stageFilter.value || l.stage === stageFilter.value)
));

const scheduleDialog = ref(false);
const dialogLead = reactive<Lead>({ id: 0, name: '', contact: '', package: '', price: 0, rep: 'none', stage: 'new', next: '', nextDate: '' });

function schedule(l: Lead) {
  Object.assign(dialogLead, l);
  scheduleDialog.value = true;
}
function markWon(l: Lead) { l.stage = 'won'; }
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
