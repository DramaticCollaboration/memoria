<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-sm">상조회사 관리자 대시보드</div>
    <div class="text-caption text-grey q-mb-md">B2B 성과 및 라이선스 현황을 확인하세요.</div>

    <div class="row q-col-gutter-md q-mb-md">
      <div class="col-12 col-md-3">
        <q-card>
          <q-card-section>
            <div class="text-subtitle2">신규 가입 (월)</div>
            <div class="text-h6">{{ kpi.newSignups }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3">
        <q-card>
          <q-card-section>
            <div class="text-subtitle2">프리미엄 전환율</div>
            <q-linear-progress :value="kpi.premiumConv" color="amber" rounded size="lg" />
            <div class="text-caption q-mt-xs">{{ (kpi.premiumConv*100).toFixed(1) }}%</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3">
        <q-card>
          <q-card-section>
            <div class="text-subtitle2">구독 유지율</div>
            <q-linear-progress :value="kpi.retention" color="teal" rounded size="lg" />
            <div class="text-caption q-mt-xs">{{ (kpi.retention*100).toFixed(1) }}%</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-md-3">
        <q-card>
          <q-card-section>
            <div class="text-subtitle2">콘텐츠 생성률</div>
            <q-linear-progress :value="kpi.contentCreation" color="indigo" rounded size="lg" />
            <div class="text-caption q-mt-xs">{{ (kpi.contentCreation*100).toFixed(1) }}%</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">B2B 라이선스 / 수익 정산</div>
        <q-table :rows="settlements" :columns="columns" row-key="id" flat :pagination="{ rowsPerPage: 5 }" />
      </q-card-section>
    </q-card>

    <q-banner class="bg-grey-9 text-grey-3" rounded>
      <q-icon name="shield" class="q-mr-sm" /> 데이터 보안 및 영구 보존 정책은 <router-link to="/funeral/permanent-storage">여기</router-link>에서 확인할 수 있습니다.
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type Settlement = { id: number; period: string; newSignups: number; premiumRate: string; revenue: string };
const columns = [
  { name: 'period', label: '정산 기간', field: 'period', align: 'left' },
  { name: 'newSignups', label: '신규 가입', field: 'newSignups', align: 'right' },
  { name: 'premiumRate', label: '프리미엄 전환율', field: 'premiumRate', align: 'right' },
  { name: 'revenue', label: '수익 정산(₩)', field: 'revenue', align: 'right' },
] as never[];
const settlements = ref<Settlement[]>([
  { id: 1, period: '2025-07', newSignups: 182, premiumRate: '34%', revenue: '12,450,000' },
  { id: 2, period: '2025-08', newSignups: 201, premiumRate: '36%', revenue: '13,980,000' },
  { id: 3, period: '2025-09', newSignups: 194, premiumRate: '38%', revenue: '14,320,000' },
]);

const kpi = ref({ newSignups: 194, premiumConv: 0.38, retention: 0.86, contentCreation: 0.62 });
</script>
