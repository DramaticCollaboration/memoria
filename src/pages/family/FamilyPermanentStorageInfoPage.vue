<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">데이터 영구 보존 안내</div>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <div class="row items-center">
          <q-icon name="verified" color="teal-5" size="28px" class="q-mr-sm" />
          <div class="text-subtitle1">신뢰할 수 있는 상조회사 연계</div>
        </div>
        <div class="text-body2 q-mt-sm text-grey-4">
          상조회사와의 협력을 통해 소중한 데이터는 이중 백업, 무결성 검증, 재해 복구 체계를 갖춘 시스템에 장기 보관됩니다.
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-section class="row q-col-gutter-md">
        <div class="col-12 col-md-4">
          <q-card flat bordered class="bg-grey-10">
            <q-card-section>
              <div class="text-subtitle2"><q-icon name="cloud_done" class="q-mr-sm" />3중 백업</div>
              <div class="text-caption text-grey-5 q-mt-xs">온라인/오프라인/콜드 스토리지로 다계층 보관</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card flat bordered class="bg-grey-10">
            <q-card-section>
              <div class="text-subtitle2"><q-icon name="shield" class="q-mr-sm" />보안 및 접근 통제</div>
              <div class="text-caption text-grey-5 q-mt-xs">권한 기반 접근과 감사 로그로 안전하게 관리</div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-12 col-md-4">
          <q-card flat bordered class="bg-grey-10">
            <q-card-section>
              <div class="text-subtitle2"><q-icon name="history" class="q-mr-sm" />장기 보존 SLA</div>
              <div class="text-caption text-grey-5 q-mt-xs">장기 구독 기간 동안 무중단 보존을 보장</div>
            </q-card-section>
          </q-card>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions align="right">
        <q-btn flat color="secondary" icon="article" label="보안/보존 정책 보기" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
