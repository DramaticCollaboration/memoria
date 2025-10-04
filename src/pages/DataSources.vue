<template>
  <q-page class="q-pa-md" style="max-width: 820px; margin: 0 auto;">
    <div class="text-h5 q-mb-sm">데이터 연동 설정</div>
    <div class="text-caption text-grey-7 q-mb-md">데이터는 암호화되어 학습에만 사용됩니다.</div>

    <q-list bordered separator>
      <q-item v-for="s in sources" :key="s.key">
        <q-item-section avatar>
          <q-icon :name="s.icon"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ s.label }}</q-item-label>
          <q-item-label caption>{{ s.caption }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="s.enabled" color="primary" />
        </q-item-section>
        <q-item-section side>
          <q-btn :disable="!s.enabled" label="연동" color="primary" flat @click="connect(s.key)" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface SourceItem { key: string; label: string; icon: string; caption: string; enabled: boolean }
const sources = reactive<SourceItem[]>([
  { key: 'google', label: 'Gmail/Drive', icon: 'mail', caption: '메일/문서', enabled: false },
  { key: 'kakao', label: '카카오톡', icon: 'chat', caption: '메신저 대화', enabled: false },
  { key: 'instagram', label: 'Instagram', icon: 'photo_camera', caption: '사진/댓글', enabled: false },
]);

function connect (key: string) {
  // TODO: OAuth window open & secure token storage
  console.log('connect', key);
}
</script>
