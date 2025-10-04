<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-sm">데이터 영구 보존 안내</div>
    <div class="text-caption text-grey q-mb-md">상조회사와의 연계로 데이터를 신뢰성 있게 장기 보관합니다.</div>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="row q-col-gutter-md items-center">
          <div class="col-auto">
            <q-chip color="teal-8" text-color="white" icon="verified">상조회사 연계</q-chip>
          </div>
          <div class="col-auto">
            <q-chip color="indigo" text-color="white" icon="shield">보안 암호화</q-chip>
          </div>
          <div class="col-auto">
            <q-chip color="purple" text-color="white" icon="cloud_done">이중화 백업</q-chip>
          </div>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <ul class="q-pl-md">
          <li>재무적으로 안정적인 파트너와의 제휴로 장기 보관을 보장합니다.</li>
          <li>데이터는 전송/저장 모두 암호화되며 접근 통제가 적용됩니다.</li>
          <li>장기 구독 시 영구 보존 정책 및 정기 무결성 점검을 수행합니다.</li>
        </ul>
      </q-card-section>
    </q-card>

    <q-banner class="bg-grey-9 text-grey-3" rounded>
      <q-icon name="lock" class="q-mr-sm" /> 신뢰할 수 있는 영구 보존 시스템으로, 당신의 기록은 가족에게 안전하게 전해집니다.
    </q-banner>
  </q-page>
</template>

<script setup lang="ts"></script>
