<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-sm">프리미엄 제작 패키지</div>
    <div class="text-caption text-grey-5 q-mb-md">전문 성우/배우 기반 페르소나 제작 및 생전 인터뷰 영상 기록 등 고가치 서비스를 제공합니다.</div>

    <q-card class="bg-grey-9 q-mb-md">
      <q-card-section>
        <div class="row items-center q-col-gutter-md">
          <div class="col-12 col-md-8">
            <div class="text-h6">Signature Plus</div>
            <div class="q-mt-sm">
              <ul class="q-pl-md text-body2">
                <li>전문 인터뷰 동행 2회 세션 (4K 촬영)</li>
                <li>전문 성우/배우 톤 튜닝 + 보이스 클로닝</li>
                <li>정밀 페르소나 커스터마이징</li>
                <li>타임캡슐 영상/음성 3건 포함</li>
                <li>영구 보관 및 정기 무결성 점검</li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="text-h5 text-amber-5">₩5,000,000+</div>
            <div class="text-caption text-grey-4">상담 후 맞춤 견적</div>
          </div>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions align="right">
        <q-btn color="amber-8" text-color="black" icon="support_agent" label="상담 요청" @click="openDialog = true" />
        <q-btn outline color="white" icon="shopping_cart" label="즉시 구매(모의)" @click="buyMock" />
      </q-card-actions>
    </q-card>

    <q-banner class="bg-grey-10 text-grey-4" rounded>
      <q-icon name="workspace_premium" class="q-mr-sm" /> 서비스의 품질과 영속성을 강조합니다. 가족이 영원히 기억할 유산을 준비하세요.
    </q-banner>

    <q-dialog v-model="openDialog">
      <q-card style="min-width: 360px">
        <q-card-section class="row items-center q-col-gutter-sm">
          <div class="text-subtitle1">상담 요청</div>
        </q-card-section>
        <q-card-section class="q-gutter-sm">
          <q-input v-model="form.name" label="이름" filled />
          <q-input v-model="form.phone" label="연락처" filled />
          <q-input v-model="form.email" label="이메일" filled />
          <q-input v-model="form.note" type="textarea" label="요청/메모 (선택)" autogrow filled />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="취소" v-close-popup />
          <q-btn color="primary" label="제출" @click="submitConsult" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const openDialog = ref(false);
const form = reactive({ name: '', phone: '', email: '', note: '' });

function submitConsult() {
  openDialog.value = false;
  $q.notify({ color: 'amber-8', textColor: 'black', message: '상담 요청이 접수되었습니다 (모의)', icon: 'support_agent' });
}
function buyMock() {
  $q.notify({ color: 'primary', message: '구매 요청이 접수되었습니다 (모의)', icon: 'shopping_cart' });
}
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
