<template>
  <q-page class="q-pa-xl flex flex-center column">
    <div class="text-h3 text-center q-mb-md">메모리아 Memoria</div>
    <div class="text-subtitle1 text-center q-mb-xl">기억의 저장소, 마음의 영속</div>

    <q-card flat bordered class="q-pa-lg q-mb-xl" style="max-width: 820px; width: 100%">
      <q-card-section class="row items-center justify-around">
        <div class="text-caption text-grey-7">전략적 제휴</div>
        <q-avatar size="56px" color="white" text-color="primary" icon="favorite" class="q-mx-md" />
        <q-avatar size="56px" color="white" text-color="primary" icon="diversity_3" class="q-mx-md" />
        <q-avatar size="56px" color="white" text-color="primary" icon="spa" class="q-mx-md" />
      </q-card-section>
    </q-card>

    <div class="row q-gutter-sm q-mb-lg">
      <q-btn color="primary" unelevated size="lg" label="상조 고객 인증" to="/verify" />
      <q-btn color="secondary" outline size="lg" label="플랜 보기" to="/plans" />
      <q-btn color="dark" flat size="lg" label="디지털 추모공간" to="/memorial" />
    </div>

    <q-separator class="q-my-xl" />

    <div class="row items-stretch q-col-gutter-lg" style="max-width: 980px; width: 100%">
      <div class="col-12 col-md-6">
        <q-card bordered>
          <q-card-section>
            <div class="text-h6">Basic (10년 보관)</div>
            <div class="text-body2 q-mt-sm">기본 추모공간과 데이터 보관을 제공합니다.</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn color="primary" flat label="시작하기" to="/verify" />
          </q-card-actions>
        </q-card>
      </div>
      <div class="col-12 col-md-6">
        <q-card bordered class="bg-primary text-white">
          <q-badge color="amber-5" text-color="black" floating>추천</q-badge>
          <q-card-section>
            <div class="text-h6">Premium (AI 대화, 영구 보관, 기념일 메시지)</div>
            <div class="text-body2 q-mt-sm">고인의 말투 복원과 AI 대화, 영구 보관까지 제공합니다.</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn color="white" text-color="primary" label="업그레이드" to="/plans" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// Landing page (A-1): CTA to verification and plan compare
</script>
