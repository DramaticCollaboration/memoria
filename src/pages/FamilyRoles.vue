<template>
  <q-page class="q-pa-md" style="max-width: 820px; margin: 0 auto;">
    <div class="text-h5 q-mb-md">가족 권한 관리</div>
    <q-list bordered separator>
      <q-item v-for="m in members" :key="m.id">
        <q-item-section>
          <q-item-label>{{ m.name }}</q-item-label>
          <q-item-label caption>{{ m.email }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="column items-end">
            <div class="row items-center q-mb-xs">
              <div class="q-mr-sm text-caption">콘텐츠 열람</div>
              <q-toggle v-model="m.roles.view" color="primary" />
            </div>
            <div class="row items-center q-mb-xs">
              <div class="q-mr-sm text-caption">업로드</div>
              <q-toggle v-model="m.roles.upload" color="primary" />
            </div>
            <div class="row items-center">
              <div class="q-mr-sm text-caption">AI 대화</div>
              <q-toggle v-model="m.roles.chat" color="primary" />
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const members = reactive([
  { id: 1, name: '가족 A', email: 'a@example.com', roles: { view: true, upload: true, chat: true } },
  { id: 2, name: '가족 B', email: 'b@example.com', roles: { view: true, upload: false, chat: true } },
  { id: 3, name: '가족 C', email: 'c@example.com', roles: { view: false, upload: false, chat: false } },
]);
</script>
