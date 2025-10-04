<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-md">플랜 비교 및 선택</div>
    <div class="row q-col-gutter-lg">
      <div class="col-12 col-md-6">
        <q-card bordered>
          <q-card-section>
            <div class="row items-center">
              <q-icon name="inventory_2" class="q-mr-sm" />
              <div class="text-h6">Basic</div>
            </div>
            <div class="text-caption text-grey-7">10년 보관</div>
          </q-card-section>
          <q-separator />
          <q-list dense>
            <q-item><q-item-section>디지털 추모공간</q-item-section></q-item>
            <q-item><q-item-section>사진/영상 업로드</q-item-section></q-item>
            <q-item><q-item-section>기본 백업</q-item-section></q-item>
          </q-list>
          <q-card-actions align="right">
            <q-btn color="primary" outline label="Basic 선택" @click="choose('basic')" />
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-12 col-md-6">
        <q-card bordered class="bg-primary text-white">
          <q-badge color="amber-5" text-color="black" floating>추천</q-badge>
          <q-card-section>
            <div class="row items-center">
              <q-icon name="auto_awesome" class="q-mr-sm" />
              <div class="text-h6">Premium</div>
            </div>
            <div class="text-caption">AI 대화, 영구 보관, 기념일 메시지</div>
          </q-card-section>
          <q-separator color="white" />
          <q-list dense class="bg-primary text-white">
            <q-item><q-item-section>고인의 말투/가치관 기반 AI 대화</q-item-section></q-item>
            <q-item><q-item-section>음성 클로닝</q-item-section></q-item>
            <q-item><q-item-section>영구 보관 + 다중 백업</q-item-section></q-item>
            <q-item><q-item-section>타임캡슐 메시지 예약/전송</q-item-section></q-item>
          </q-list>
          <q-card-actions align="right">
            <q-btn color="white" text-color="primary" label="Premium 선택" @click="choose('premium')" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function choose (plan: 'basic'|'premium') {
  void router.push({ path: '/checkout', query: { plan } });
}
</script>
