<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <q-banner class="bg-indigo-9 text-white q-mb-md" rounded>
      <div class="row items-center no-wrap">
        <q-icon name="qr_code_2" class="q-mr-sm" />
        <div>
          장례식장 전용 랜딩: 디지털 추모공간으로 연결합니다. 지금 시작하여 지속적인 정서 케어를 받아보세요.
        </div>
      </div>
    </q-banner>

    <q-card flat bordered class="bg-grey-9 q-mb-md">
      <q-card-section>
        <div class="text-h6 q-mb-xs">지금 바로 시작</div>
        <div class="text-caption text-grey-4">최소한의 동의로 간편하게 연결됩니다. 언제든 해지/변경 가능.</div>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <q-checkbox v-model="agree" label="서비스 안내 및 개인정보 처리에 동의합니다" color="primary" />
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" :disable="!agree" label="디지털 추모공간 시작" :to="{ name: 'home' }" />
        <q-btn flat color="secondary" label="상조 고객 인증" :to="{ name: 'funeral-verify' }" />
        <q-btn flat color="grey-4" label="윤리 고지" :to="{ name: 'funeral-security-ethics' }" />
      </q-card-actions>
    </q-card>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section class="row q-col-gutter-md">
        <div class="col-12 col-md-4">
          <q-icon name="psychology" size="md" class="q-mr-sm" />
          AI 대화형 페르소나로 따뜻한 조언을 받으세요.
        </div>
        <div class="col-12 col-md-4">
          <q-icon name="inventory_2" size="md" class="q-mr-sm" />
          상조회사 연계 영구 보관으로 신뢰성 확보.
        </div>
        <div class="col-12 col-md-4">
          <q-icon name="celebration" size="md" class="q-mr-sm" />
          기념일 메시지로 소중한 날을 함께 기억합니다.
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const agree = ref(false);
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
