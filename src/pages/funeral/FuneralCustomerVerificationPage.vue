<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-sm">상조 고객 인증</div>
    <div class="text-caption text-grey-5 q-mb-md">상조회사 고객이신가요? 인증 후 무료 1년 Basic 이용 혜택을 활성화하고, 프리미엄 혜택을 확인하세요.</div>

    <q-form @submit="onSubmit" class="q-gutter-md">
      <q-select
        v-model="company"
        :options="companies"
        label="상조회사 선택"
        filled
        :rules="[val => !!val || '상조회사를 선택하세요']"
      />
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6">
          <q-input v-model="customerNo" label="고객 번호" filled :rules="[req]" />
        </div>
        <div class="col-12 col-md-6">
          <q-input v-model="certificateNo" label="증서 번호" filled :rules="[req]" />
        </div>
      </div>

      <div class="row items-center q-col-gutter-sm">
        <div class="col-auto">
          <q-checkbox v-model="agree" label="개인정보 처리 및 서비스 이용 약관에 동의" color="primary" />
        </div>
        <div class="col-auto text-caption text-grey-5">(간편 인증을 위해 최소 정보만 사용합니다)</div>
      </div>

      <div class="row items-center q-gutter-sm">
        <q-btn color="primary" label="인증하기" type="submit" :disable="!agree" :loading="submitting" />
        <q-btn flat color="secondary" label="플랜 비교 보기" :to="{ name: 'funeral-plans' }" />
      </div>
    </q-form>

    <q-banner v-if="verified" class="bg-teal-9 text-white q-mt-lg" rounded>
      <div class="row items-center no-wrap">
        <q-icon name="verified" class="q-mr-sm" />
        <div>
          인증이 완료되었습니다. Basic 플랜(1년 무료)이 활성화되었습니다.
          지금 프리미엄 옵션으로 업그레이드하여 AI 대화형 페르소나와 영구 보관을 이용해 보세요.
        </div>
        <q-space />
        <q-btn color="amber-8" text-color="black" label="프리미엄 옵션 보기" :to="{ name: 'funeral-plans' }" />
      </div>
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const companies = ['메모리아 상조', '평안 상조', '한빛 상조', '세림 상조'];
const company = ref<string | null>(null);
const customerNo = ref('');
const certificateNo = ref('');
const agree = ref(false);
const submitting = ref(false);
const verified = ref(false);

function req(v: string) { return !!v || '필수 입력입니다'; }

async function onSubmit() {
  if (!company.value || !customerNo.value || !certificateNo.value || !agree.value) return;
  submitting.value = true;
  await new Promise(r => setTimeout(r, 600));
  submitting.value = false;
  verified.value = true;
  $q.notify({ color: 'teal-8', message: '인증 성공: Basic 1년 무료 혜택이 적용되었습니다', icon: 'verified', timeout: 1500 });
}
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
