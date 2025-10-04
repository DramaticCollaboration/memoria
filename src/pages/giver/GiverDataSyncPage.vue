<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-sm">다중 데이터 연동 설정</div>
    <div class="text-caption text-grey q-mb-md">SNS/메일/메신저 기록을 안전하게 연동하여 AI 학습의 기초 데이터를 확보합니다.</div>

    <q-banner class="bg-grey-9 text-grey-3 q-mb-md" rounded>
      <q-icon name="verified_user" class="q-mr-sm" /> 데이터는 암호화되어 안전하게 보관되며 AI 분석에만 사용됩니다.
    </q-banner>

    <q-list bordered class="rounded-borders">
      <q-item v-for="(s, i) in sources" :key="i">
        <q-item-section avatar><q-icon :name="s.icon" /></q-item-section>
        <q-item-section>
          <q-item-label>{{ s.label }}</q-item-label>
          <q-item-label caption>{{ s.caption }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle v-model="s.enabled" color="primary" :label="s.enabled ? '연동됨' : '해제'" left-label />
        </q-item-section>
        <q-item-section side>
          <q-btn dense outline color="secondary" :label="s.connected ? '해제' : '연동'" @click="toggleConnect(s)" />
        </q-item-section>
      </q-item>
    </q-list>

    <div class="q-mt-md">
      <q-btn color="primary" label="다음: Q&A 인터뷰" :to="{ name: 'giver-qa-interview' }" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

type Source = { label: string; caption: string; icon: string; enabled: boolean; connected: boolean };
const sources = reactive<Source[]>([
  { label: 'Instagram', caption: '사진/스토리 가져오기', icon: 'photo_camera', enabled: true, connected: false },
  { label: 'Gmail', caption: '이메일 콘텐츠 분석', icon: 'mail', enabled: false, connected: false },
  { label: 'KakaoTalk', caption: '대화 기록 요약', icon: 'chat', enabled: true, connected: false },
  { label: 'Naver Blog', caption: '텍스트 기록 수집', icon: 'description', enabled: false, connected: false },
]);

function toggleConnect(s: Source) {
  s.connected = !s.connected;
}
</script>
