<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-sm">콘텐츠 직접 입력/업로드</div>
    <div class="text-caption text-grey q-mb-md">일기, 메모, 사진, 동영상, 음성 등을 업로드하고 메타데이터를 입력해 주세요. AI가 테마별로 분류합니다.</div>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">파일 업로드</div>
        <q-uploader
          flat
          bordered
          :auto-upload="false"
          accept="image/*,video/*,audio/*,.pdf,.txt"
          label="여기에 파일을 드롭하거나 선택하세요"
        />
      </q-card-section>

      <q-separator dark />

      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">메타데이터</div>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-select v-model="category" :options="categories" label="카테고리" filled />
          </div>
          <div class="col-12 col-md-6">
            <q-input v-model="tags" label="태그 (쉼표로 구분)" filled />
          </div>
          <div class="col-12">
            <q-input v-model="description" type="textarea" autogrow filled label="설명/메모" />
          </div>
        </div>
      </q-card-section>

      <q-separator dark />
      <q-card-actions align="right">
        <q-btn color="primary" label="업로드 및 저장" @click="save" />
      </q-card-actions>
    </q-card>

    <q-banner class="bg-grey-9 text-grey-3" rounded>
      <q-icon name="info" class="q-mr-sm" /> 업로드된 콘텐츠는 암호화되어 보관되며, AI 분류 정확도를 위해 최소한의 메타데이터를 요청할 수 있습니다.
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const categories = ['가족', '직장', '취미', '여행', '자기계발', '기타'];
const category = ref<string | null>(null);
const tags = ref('');
const description = ref('');

function save() {
  // stub
}
</script>
