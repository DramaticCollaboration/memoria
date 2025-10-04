<template>
  <q-page class="q-pa-md" style="max-width: 980px; margin: 0 auto;">
    <div class="text-h5 q-mb-md">가족 공동 추억 업로드</div>

    <q-card flat bordered class="q-pa-md q-mb-md">
      <div class="text-subtitle2 q-mb-sm">접근 권한</div>
      <div class="text-caption text-grey-7 q-mb-sm">가족 전용 공간의 폐쇄형 보안 관리</div>
      <q-list bordered separator>
        <q-item v-for="m in members" :key="m.id">
          <q-item-section>{{ m.name }}</q-item-section>
          <q-item-section side>
            <div class="row items-center">
              <div class="q-mr-sm text-caption">업로드</div>
              <q-toggle v-model="m.canUpload" color="primary" />
            </div>
          </q-item-section>
          <q-item-section side>
            <div class="row items-center">
              <div class="q-mr-sm text-caption">열람</div>
              <q-toggle v-model="m.canView" color="primary" />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>

    <q-card bordered class="q-pa-md">
      <div class="text-subtitle2 q-mb-sm">추억 사진/영상 업로드</div>
      <q-uploader
        label="파일 업로드"
        accept="image/*,video/*"
        auto-upload="false"
        :disable="!currentUserCanUpload"
      />
      <div v-if="!currentUserCanUpload" class="text-negative text-caption q-mt-sm">업로드 권한이 없습니다.</div>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
const members = reactive([
  { id: 1, name: '가족 A', canUpload: true, canView: true },
  { id: 2, name: '가족 B', canUpload: false, canView: true },
]);
// Assume current user = 2 for demo
const currentUserId = 2;
const currentUserCanUpload = computed(() => members.find(m => m.id === currentUserId)?.canUpload ?? false);
</script>
