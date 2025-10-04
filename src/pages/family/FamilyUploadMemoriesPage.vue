<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">가족 공동 추억 업로드</div>

    <q-banner class="bg-grey-9 q-mb-md" rounded>
      <q-icon name="security" class="q-mr-sm" />
      이 공간은 초대된 가족만 접근 가능한 폐쇄형 서비스입니다. 업로드된 콘텐츠는 안전하게 보관됩니다.
    </q-banner>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">파일 업로드</div>
            <q-uploader
              label="사진/영상/음성 파일을 드래그 앤 드롭 또는 선택"
              accept="image/*,video/*,audio/*"
              :auto-upload="false"
              flat
              bordered
            />
          </div>
          <div class="col-12 col-md-6">
            <div class="text-subtitle2 q-mb-sm">메타데이터 (AI 분류 개선)</div>
            <q-input filled v-model="meta.title" label="제목" class="q-mb-sm" />
            <q-input filled v-model="meta.description" type="textarea" label="설명" autogrow class="q-mb-sm" />
            <q-select filled v-model="meta.theme" :options="themes" label="테마" class="q-mb-sm" />
            <q-input filled v-model="meta.date" label="날짜 (예: 2019-08-15)" mask="####-##-##" />
          </div>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions align="right">
        <q-btn flat color="secondary" icon="save" label="임시 저장" />
        <q-btn color="primary" icon="cloud_upload" label="업로드" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const meta = ref({ title: '', description: '', theme: '', date: '' });
const themes = [
  '가족과의 행복한 추억',
  '자녀에게 남기는 조언',
  '인생의 전환점',
  '학교/직장',
  '여행',
];
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
