<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">D-6-A B2B 종합 대시보드</div>
    <div class="row q-col-gutter-md q-mb-md">
      <div class="col-12 col-md-3" v-for="card in kpis" :key="card.key">
        <q-card flat bordered class="bg-grey-9">
          <q-card-section>
            <div class="row items-center no-wrap">
              <q-icon :name="card.icon" class="q-mr-sm"/>
              <div class="text-subtitle2">{{ card.title }}</div>
            </div>
            <div class="text-h5 q-mt-sm">{{ card.value }}</div>
            <q-linear-progress :value="card.progress" color="primary" track-color="grey-8" rounded class="q-mt-sm"/>
            <div class="text-caption text-grey-5 q-mt-xs">전주 대비 {{ card.delta > 0 ? '+' : '' }}{{ Math.round(card.delta * 100) }}%</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card flat bordered class="bg-grey-9">
          <q-card-section>
            <div class="text-subtitle1"><q-icon name="trending_up" class="q-mr-sm"/>프리미엄 전환율 추이</div>
          </q-card-section>
          <q-separator dark />
          <q-card-section>
            <div class="chart-placeholder">
              <div v-for="(p,i) in premSpark" :key="i" class="bar" :style="{height: 20 + p*60 + 'px'}"></div>
            </div>
            <div class="text-caption text-grey-5 q-mt-sm">간이 차트 (의존성 없이 스파크라인 표현)</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-6">
        <q-card flat bordered class="bg-grey-9">
          <q-card-section>
            <div class="text-subtitle1"><q-icon name="account_tree" class="q-mr-sm"/>상조 채널 유입</div>
          </q-card-section>
          <q-separator dark />
          <q-card-section>
            <q-list dense class="bg-grey-10 rounded-borders" bordered>
              <q-item v-for="(c, i) in channels" :key="i">
                <q-item-section>{{ c.name }}</q-item-section>
                <q-item-section side>{{ c.count.toLocaleString() }}</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12">
        <q-card flat bordered class="bg-grey-9 q-mt-md">
          <q-card-section>
            <div class="text-subtitle1"><q-icon name="payments" class="q-mr-sm"/>B2B 라이선스 수익 정산 요약</div>
          </q-card-section>
          <q-separator dark />
          <q-card-section>
            <q-table :rows="settlements" :columns="columns" row-key="id" flat bordered dense :pagination="{ rowsPerPage: 5 }"/>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const kpis = ref([
  { key: 'conv', title: '프리미엄 전환율', icon: 'workspace_premium', value: '18.4%', progress: 0.184, delta: 0.024 },
  { key: 'ret', title: '구독 유지율', icon: 'repeat', value: '92.1%', progress: 0.921, delta: 0.006 },
  { key: 'acq', title: '상조 채널 유입', icon: 'group_add', value: '1,284', progress: 0.64, delta: 0.12 },
  { key: 'rev', title: '라이선스 정산(월)', icon: 'payments', value: '₩38,400,000', progress: 0.76, delta: 0.03 },
]);

const premSpark = ref([0.4,0.42,0.38,0.45,0.5,0.48,0.52,0.55,0.53,0.58]);

const settlements = ref([
  { id: 1, partner: '한빛상조', month: '2025-09', sales: 120000000, commission: 24000000, payout: 24000000 },
  { id: 2, partner: '정성라이프', month: '2025-09', sales: 62000000, commission: 12400000, payout: 12400000 },
]);

const columns = [
  { name: 'partner', label: '파트너', field: 'partner', align: 'left' },
  { name: 'month', label: '정산월', field: 'month', align: 'left' },
  { name: 'sales', label: '매출', field: 'sales', align: 'right', format: (v: number) => '₩' + v.toLocaleString() },
  { name: 'commission', label: '수수료', field: 'commission', align: 'right', format: (v: number) => '₩' + v.toLocaleString() },
  { name: 'payout', label: '지급액', field: 'payout', align: 'right', format: (v: number) => '₩' + v.toLocaleString() },
] as never[];

const channels = [] as {name: string, count: number}[];
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
.chart-placeholder { display: flex; align-items: flex-end; height: 120px; gap: 6px; }
.chart-placeholder .bar { width: 12px; background: #607d8b; border-radius: 3px 3px 0 0; }
</style>
