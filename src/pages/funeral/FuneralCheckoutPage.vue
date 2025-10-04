<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-sm">결제 / 정기 구독 설정</div>
    <div class="text-caption text-grey-5 q-mb-md">상조 고객의 업그레이드와 일반 고객의 장기 구독을 지원합니다. 스토리지/AI 대화 횟수에 따른 차등 가격이 적용됩니다.</div>

    <q-form @submit="onSubmit" class="q-gutter-md">
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6">
          <q-select v-model="plan" :options="plans" label="플랜" filled />
        </div>
        <div class="col-12 col-md-6">
          <q-select v-model="billing" :options="billings" label="결제 주기" filled />
        </div>
      </div>

      <q-card flat bordered class="bg-grey-9">
        <q-card-section>
          <div class="text-subtitle2 q-mb-sm">결제 정보</div>
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <q-input v-model="cardName" label="카드 소유자명" filled :rules="[req]" />
            </div>
            <div class="col-12 col-md-6">
              <q-input v-model="cardNo" label="카드 번호 (가상)" filled :rules="[req]" />
            </div>
            <div class="col-6 col-md-3">
              <q-input v-model="exp" label="만료 (MM/YY)" filled :rules="[req]" />
            </div>
            <div class="col-6 col-md-3">
              <q-input v-model="cvc" label="CVC" filled :rules="[req]" />
            </div>
            <div class="col-12 col-md-6">
              <q-input v-model="email" label="영수증 이메일" filled :rules="[req]" />
            </div>
          </div>
        </q-card-section>
      </q-card>

      <q-card flat bordered class="bg-grey-9">
        <q-card-section>
          <div class="text-subtitle2 q-mb-sm">요금 요약</div>
          <div>선택한 플랜: {{ plan.label }} ({{ billing.label }})</div>
          <div class="text-grey-5">상조 고객 인증 시 Basic 1년 무료가 적용됩니다.</div>
        </q-card-section>
      </q-card>

      <div class="row items-center q-gutter-sm q-mt-md">
        <q-btn color="primary" type="submit" :loading="loading" label="결제하기" />
        <q-btn flat color="secondary" label="상조 고객 인증" :to="{ name: 'funeral-verify' }" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const route = useRoute();
const plans = [
  { label: 'Basic (10년 보관)', value: 'Basic' },
  { label: 'Premium (영구 보관 + AI 무제한)', value: 'Premium' },
];
const plan = ref(plans[0] as { label: string, value: string });
const billings = [
  { label: '월 결제', value: 'monthly' },
  { label: '연 결제', value: 'yearly' },
];
const billing = ref(billings[0] as { label: string, value: string });
const cardName = ref('');
const cardNo = ref('');
const exp = ref('');
const cvc = ref('');
const email = ref('');
const loading = ref(false);

onMounted(() => {
  const qPlan = route.query.plan as string | undefined;
  if (qPlan) {
    const found = plans.find(p => p.value === qPlan);
    if (found) plan.value = found;
  }
});

function req(v: string) { return !!v || '필수 입력입니다'; }

async function onSubmit() {
  loading.value = true;
  await new Promise(r => setTimeout(r, 800));
  loading.value = false;
  $q.notify({ color: 'primary', message: '결제가 완료되었습니다 (모의)', icon: 'check', timeout: 1500 });
}
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
