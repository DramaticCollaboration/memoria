<template>
  <q-page class="q-pa-md" style="max-width: 720px; margin: 0 auto;">
    <div class="text-h5 q-mb-md">결제 / 정기 구독 설정</div>
    <q-card bordered>
      <q-card-section>
        <div class="text-subtitle1">선택한 플랜: {{ planLabel }}</div>
        <div class="row items-center q-gutter-md q-mt-sm">
          <div class="text-caption">청구 주기</div>
          <q-toggle v-model="yearly" color="primary" label="연간 (2개월 할인)" />
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section class="q-gutter-sm">
        <q-input v-model="billing.name" label="결제자 이름" />
        <q-input v-model="billing.email" label="이메일" type="email" />
        <q-input v-model="billing.card" label="카드 번호 (가상)" mask="#### #### #### ####" />
        <div class="text-caption text-grey-7">결제는 안전하게 처리되며, 인증 토큰은 HttpOnly Cookie 로 보호됩니다.</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat to="/plans" label="뒤로" />
        <q-btn color="primary" :loading="loading" label="결제하기" @click="pay" />
      </q-card-actions>
    </q-card>

    <q-dialog v-model="paid">
      <q-card>
        <q-card-section class="row items-center q-gutter-sm">
          <q-icon name="celebration" color="primary" />
          <div class="text-h6">구독이 활성화되었습니다</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" label="페르소나 만들기" to="/creator/dashboard" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const yearly = ref(false);
const loading = ref(false);
const paid = ref(false);
const billing = reactive({ name: '', email: '', card: '' });
const planLabel = computed(() => route.query.plan === 'premium' ? 'Premium' : 'Basic');

function pay () {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    paid.value = true;
  }, 1000);
}
</script>
