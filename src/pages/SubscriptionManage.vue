<template>
  <q-page class="q-pa-md" style="max-width: 820px; margin: 0 auto;">
    <div class="text-h5 q-mb-md">구독 관리</div>
    <q-card bordered class="q-pa-md q-mb-md">
      <div class="row items-center">
        <div class="col">
          <div class="text-subtitle1">현재 플랜: {{ plan }}</div>
          <div class="text-caption text-grey-7">남은 기간: {{ remaining }} · 다음 결제일: {{ nextBilling }}</div>
        </div>
        <div class="col-auto">
          <q-btn outline color="primary" label="플랜 변경" to="/plans"/>
          <q-btn flat color="negative" label="구독 취소" class="q-ml-sm" @click="openCancel"/>
        </div>
      </div>
    </q-card>

    <q-dialog v-model="askCancel">
      <q-card>
        <q-card-section class="row items-center q-gutter-sm">
          <q-icon name="warning" color="warning"/>
          <div class="text-h6">잠시만요, 정말 취소하시겠어요?</div>
        </q-card-section>
        <q-card-section>
          <div class="q-mb-sm">구독 해지 시 다음 혜택을 잃게 됩니다:</div>
          <ul class="q-pl-md">
            <li>AI 대화 및 목소리 클로닝 기능</li>
            <li>영구 보관 및 다중 백업</li>
            <li>기념일 자동 메시지 발송</li>
          </ul>
          <div class="q-mt-sm">대신 <b>3개월 50% 할인</b> 혜택으로 계속 이용해 보시겠어요?</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="계속 이용 (할인 적용)" color="primary" @click="stay" />
          <q-btn flat label="정말 취소" color="negative" @click="confirmCancel" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const plan = 'Premium';
const remaining = '8개월';
const nextBilling = '2026-02-14';
const askCancel = ref(false);
function openCancel () { askCancel.value = true; }
function stay () { askCancel.value = false; }
function confirmCancel () { askCancel.value = false; alert('취소가 접수되었습니다 (데모)'); }
</script>
