<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">D-6-B 라이선스 및 정산 관리</div>

    <q-card flat bordered class="bg-grey-9 q-mb-md">
      <q-card-section class="row items-center q-col-gutter-sm">
        <div class="col-12 col-md-3"><q-input dense filled v-model="filters.partner" label="파트너 검색" /></div>
        <div class="col-12 col-md-3"><q-select dense filled v-model="filters.status" :options="statusOptions" label="상태" clearable /></div>
        <div class="col-12 col-md-3"><q-input dense filled v-model="filters.month" label="정산월 (YYYY-MM)" mask="####-##" /></div>
        <div class="col-auto"><q-btn color="primary" label="필터 적용" @click="applyFilters"/></div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <q-table
          :rows="filteredRows"
          :columns="columns"
          row-key="id"
          flat bordered
          :pagination="{ rowsPerPage: 10 }"
        >
          <template #body-cell-status="props">
            <q-td :props="props">
              <q-chip :color="props.row.status === 'active' ? 'teal' : 'grey'" text-color="white" size="sm">
                {{ props.row.status === 'active' ? '활성' : '중지' }}
              </q-chip>
            </q-td>
          </template>
          <template #body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense flat icon="receipt_long" color="secondary" @click="viewStatement(props.row)" />
              <q-btn dense flat icon="pause" color="warning" @click="toggleStatus(props.row)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

type Row = { id: number; partner: string; licenseKey: string; status: 'active'|'paused'; package: string; month: string; sales: number; commission: number };
const rows = ref<Row[]>([
  { id: 1, partner: '한빛상조', licenseKey: 'HB-2025-001', status: 'active', package: 'Premium Bundle', month: '2025-09', sales: 120000000, commission: 24000000 },
  { id: 2, partner: '정성라이프', licenseKey: 'JS-2025-014', status: 'active', package: 'Basic Resell', month: '2025-09', sales: 62000000, commission: 12400000 },
  { id: 3, partner: '토탈케어', licenseKey: 'TC-2025-007', status: 'paused', package: 'Premium Bundle', month: '2025-08', sales: 18000000, commission: 3600000 },
]);

const columns = [
  { name: 'partner', label: '파트너', field: 'partner', align: 'left' },
  { name: 'licenseKey', label: '라이선스', field: 'licenseKey', align: 'left' },
  { name: 'status', label: '상태', field: 'status', align: 'left' },
  { name: 'package', label: '상품 패키지', field: 'package', align: 'left' },
  { name: 'month', label: '정산월', field: 'month', align: 'left' },
  { name: 'sales', label: '매출', field: 'sales', align: 'right', format: (v: number) => '₩' + v.toLocaleString() },
  { name: 'commission', label: '수수료', field: 'commission', align: 'right', format: (v: number) => '₩' + v.toLocaleString() },
  { name: 'actions', label: '작업', field: 'actions', align: 'right' },
] as never[];

const filters = reactive<{ partner: string; status: string | null; month: string }>(
  { partner: '', status: null, month: '' }
);
const statusOptions = [ { label: '활성', value: 'active' }, { label: '중지', value: 'paused' } ];

const filteredRows = computed(() => rows.value.filter(r => {
  return (
    (!filters.partner || r.partner.includes(filters.partner)) &&
    (!filters.status || r.status === (filters.status as never)) &&
    (!filters.month || r.month === filters.month)
  );
}));

function applyFilters() { /* computed handles it */ }
function viewStatement(r: Row) { /* stub */
  console.log('viewStatement', r);
}
function toggleStatus(r: Row) { r.status = r.status === 'active' ? 'paused' : 'active'; }
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
