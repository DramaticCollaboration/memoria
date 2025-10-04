<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">A-3-M 상조 고객 인증 관리</div>

    <q-card flat bordered class="bg-grey-9 q-mb-md">
      <q-card-section class="row items-center q-col-gutter-sm">
        <div class="col-12 col-md-3"><q-input dense filled v-model="search" label="고객번호/이름 검색"/></div>
        <div class="col-12 col-md-3"><q-select dense filled v-model="company" :options="companies" label="상조회사" clearable/></div>
        <div class="col-auto"><q-btn color="primary" label="검색"/></div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <q-table :rows="filtered" :columns="columns" row-key="id" flat bordered :pagination="{ rowsPerPage: 10 }">
          <template #body-cell-plan="props">
            <q-td :props="props">
              <q-chip square color="grey-7" text-color="white" size="sm">Basic (무료)</q-chip>
            </q-td>
          </template>
          <template #body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense flat color="positive" icon="verified" label="Basic 활성화" @click="activate(props.row)" />
              <q-btn dense flat color="amber-8" text-color="black" icon="workspace_premium" label="업셀링" @click="upsell(props.row)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

type Row = { id: number; company: string; customerNo: string; name: string; product: string; error: string; status: string };
const rows = ref<Row[]>([
  { id: 1, company: '한빛상조', customerNo: 'HB-918273', name: '이수연', product: '프리미엄 상조', error: '고객번호 불일치', status: 'pending' },
  { id: 2, company: '정성라이프', customerNo: 'JS-445566', name: '최윤호', product: '기본 상조', error: '가입일자 오류', status: 'pending' },
]);

const columns = [
  { name: 'company', label: '상조회사', field: 'company', align: 'left' },
  { name: 'customerNo', label: '고객번호', field: 'customerNo', align: 'left' },
  { name: 'name', label: '이름', field: 'name', align: 'left' },
  { name: 'product', label: '상조 상품', field: 'product', align: 'left' },
  { name: 'error', label: '오류 사유', field: 'error', align: 'left' },
  { name: 'plan', label: '플랜', field: 'plan', align: 'left' },
  { name: 'actions', label: '작업', field: 'actions', align: 'right' },
] as never[];

const search = ref('');
const company = ref<string|undefined>();
const companies = [ '한빛상조', '정성라이프', '토탈케어' ];

const filtered = computed(() => rows.value.filter(r =>
  (!search.value || r.customerNo.includes(search.value) || r.name.includes(search.value)) &&
  (!company.value || r.company === company.value)
));

function activate(r: Row) { r.status = 'basic_activated'; }
function upsell(r: Row) { r.status = 'upsell_contacted'; }
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
