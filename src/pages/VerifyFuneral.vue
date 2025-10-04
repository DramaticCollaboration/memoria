<template>
  <q-page class="q-pa-md">
    <q-form @submit="onSubmit" class="q-gutter-md" style="max-width: 560px; margin: 0 auto;">
      <div class="text-h5 q-mb-md">상조 고객 인증</div>
      <q-select v-model="form.company" :options="companies" label="상조회사" clearable emit-value map-options />
      <q-input v-model="form.customerNo" label="고객 번호" maxlength="32" clearable :rules="[v => !!v || '고객 번호를 입력하세요']" />
      <q-input v-model="form.name" label="이름" maxlength="32" clearable />
      <div class="text-caption text-grey-7">입력하신 정보는 인증에만 사용되며 저장되지 않습니다.</div>

      <div class="row items-center q-gutter-sm">
        <q-btn type="submit" color="primary" label="인증하기" :loading="loading" />
        <q-btn flat to="/plans" label="일반 고객으로 계속" />
      </div>
    </q-form>

    <q-dialog v-model="success">
      <q-card>
        <q-card-section class="row items-center q-gutter-sm">
          <q-icon name="check_circle" color="positive" size="md" />
          <div class="text-h6">Basic 플랜 활성화</div>
        </q-card-section>
        <q-card-section>
          상조 고객 인증이 완료되었습니다. 무료 Basic(10년 보관)이 활성화됩니다. 프리미엄 혜택을 확인해 보세요.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" label="프리미엄 보기" @click="goPlans" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const companies = [
  { label: '메모리아 상조', value: 'memoria' },
  { label: '하늘나래 상조', value: 'sky' },
  { label: '평안 상조', value: 'peace' },
];

const form = reactive({ company: null as string | null, customerNo: '', name: '' });
const loading = ref(false);
const success = ref(false);

function onSubmit () {
  loading.value = true;
  // TODO: integrate with backend API securely (HttpOnly cookies)
  setTimeout(() => {
    loading.value = false;
    success.value = true;
  }, 800);
}

async function goPlans () {
  success.value = false;
  await router.push('/plans');
}
</script>
