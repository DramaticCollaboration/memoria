<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">구독 관리 및 유료 전환</div>

    <q-card flat bordered class="bg-grey-9 q-mb-md">
      <q-card-section class="row items-center">
        <q-icon name="workspace_premium" size="28px" class="q-mr-sm" />
        <div>
          <div class="text-subtitle1">현재 플랜: {{ plan }}</div>
          <div class="text-caption text-grey-5">다음 결제일: {{ nextBilling }} · 남은 기간: {{ remainingDays }}일</div>
        </div>
        <q-space />
        <q-btn color="primary" label="플랜 변경" @click="changePlan" />
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">플랜 비교</div>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-card flat bordered class="bg-grey-10">
              <q-card-section>
                <div class="text-h6">Basic</div>
                <ul class="q-mt-sm text-body2">
                  <li>스토리지 10GB</li>
                  <li>AI 대화 월 30회</li>
                  <li>표준 품질 갤러리</li>
                </ul>
              </q-card-section>
              <q-separator dark />
              <q-card-actions align="between">
                <div class="text-subtitle2">월 4,900원</div>
                <q-btn outline color="primary" label="선택" />
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-12 col-md-6">
            <q-card flat bordered class="bg-grey-10">
              <q-card-section>
                <div class="text-h6">Premium</div>
                <ul class="q-mt-sm text-body2">
                  <li>스토리지 1TB</li>
                  <li>AI 대화 무제한</li>
                  <li>고화질 갤러리/영상</li>
                </ul>
              </q-card-section>
              <q-separator dark />
              <q-card-actions align="between">
                <div class="text-subtitle2">월 19,900원</div>
                <q-btn color="amber-8" text-color="black" label="업그레이드" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const plan = ref<'Basic'|'Premium'>('Basic');
const nextBilling = ref('2025-11-01');
const remainingDays = ref(28);

function changePlan() {
  // Placeholder for plan change flow
}
</script>
