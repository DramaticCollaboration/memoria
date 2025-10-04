<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-sm">상품 선택 및 플랜 비교</div>
    <div class="text-caption text-grey-5 q-mb-md">Basic(10년 보관)과 Premium(영구 보관·AI 대화형 페르소나)의 차이를 비교하고 최적의 플랜을 선택하세요.</div>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card flat bordered class="bg-grey-9">
          <q-card-section>
            <div class="row items-center">
              <div class="col">
                <div class="text-h6">Basic</div>
              </div>
              <div class="col-auto">
                <q-chip color="grey-7" text-color="white">10년 보관</q-chip>
              </div>
            </div>
            <ul class="q-mt-sm text-body2">
              <li>안전한 보관(10년)</li>
              <li>기본 갤러리/열람</li>
              <li>AI 대화 월 30회</li>
            </ul>
          </q-card-section>
          <q-separator dark />
          <q-card-actions align="between">
            <div>
              <div class="text-subtitle2">월 ₩4,900</div>
              <div class="text-caption text-grey-5">또는 연 ₩49,000</div>
            </div>
            <q-btn outline color="primary" label="선택" :to="{ name: 'funeral-checkout', query: { plan: 'Basic' } }" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat bordered class="bg-grey-9">
          <q-card-section>
            <div class="row items-center">
              <div class="col">
                <div class="text-h6">Premium</div>
              </div>
              <div class="col-auto">
                <q-chip color="amber-8" text-color="black" icon="military_tech">추천</q-chip>
                <q-chip color="teal-8" text-color="white" icon="verified">영구 보관</q-chip>
              </div>
            </div>
            <ul class="q-mt-sm text-body2">
              <li>AI 대화형 페르소나 무제한</li>
              <li>영구 보관 + 이중화 백업</li>
              <li>기념일 자동 메시지/타임캡슐</li>
            </ul>
          </q-card-section>
          <q-separator dark />
          <q-card-actions align="between">
            <div>
              <div class="text-subtitle2">월 ₩19,900</div>
              <div class="text-caption text-grey-5">또는 연 ₩199,000</div>
            </div>
            <div class="row items-center q-gutter-sm">
              <q-btn color="amber-8" text-color="black" label="업그레이드" :to="{ name: 'funeral-checkout', query: { plan: 'Premium' } }" />
              <q-btn flat color="secondary" label="프리미엄 제작 패키지" :to="{ name: 'funeral-premium-package' }" />
            </div>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <q-banner class="bg-grey-9 text-grey-4 q-mt-lg" rounded>
      <q-icon name="inventory_2" class="q-mr-sm" />
      상조회사 연계 영구 보관의 가치를 확인하세요. 자세한 보존 정책은 <router-link :to="{ name: 'funeral-permanent-storage' }">여기</router-link>에서 확인.
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
