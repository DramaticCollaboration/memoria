<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">유가족 권한 관리</div>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <div class="row items-center">
          <q-icon name="group" class="q-mr-sm" />
          <div class="text-subtitle1">승계자 명단 및 권한</div>
          <q-space />
          <q-btn dense color="primary" icon="person_add" label="초대" />
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <q-list bordered separator class="rounded-borders bg-grey-10">
          <q-item v-for="(m, i) in members" :key="i">
            <q-item-section avatar>
              <q-avatar icon="person" color="grey-8" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ m.name }}</q-item-label>
              <q-item-label caption>{{ m.relation }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <div class="row items-center q-gutter-sm">
                <q-chip size="sm" color="grey-8" text-color="white">업로드</q-chip>
                <q-toggle v-model="m.perms.upload" color="primary" />
                <q-chip size="sm" color="grey-8" text-color="white">다운로드</q-chip>
                <q-toggle v-model="m.perms.download" color="primary" />
                <q-chip size="sm" color="grey-8" text-color="white">대화</q-chip>
                <q-toggle v-model="m.perms.chat" color="primary" />
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-separator dark />
      <q-card-actions align="right">
        <q-btn flat color="secondary" icon="save" label="변경 사항 저장" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Member { name: string; relation: string; perms: { upload: boolean; download: boolean; chat: boolean } }
const members = ref<Member[]>([
  { name: '홍길동', relation: '장남', perms: { upload: true, download: true, chat: true } },
  { name: '김영희', relation: '차녀', perms: { upload: true, download: false, chat: true } },
  { name: '이철수', relation: '배우자', perms: { upload: true, download: true, chat: true } },
]);
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
