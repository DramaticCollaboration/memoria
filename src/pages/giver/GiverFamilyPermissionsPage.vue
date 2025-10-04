<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-sm">가족 권한 관리</div>
    <div class="text-caption text-grey q-mb-md">유가족(승계자)의 업로드/다운로드/대화 권한을 설정합니다.</div>

    <q-list bordered class="rounded-borders">
      <q-item v-for="(m, i) in members" :key="i" class="items-start">
        <q-item-section avatar>
          <q-avatar color="grey-8"><q-icon name="person" /></q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ m.name }}</q-item-label>
          <q-item-label caption>{{ m.relation }}</q-item-label>
          <div class="row q-col-gutter-sm q-mt-sm">
            <div class="col-auto">
              <q-toggle v-model="m.perms.upload" color="primary" label="업로드" left-label />
            </div>
            <div class="col-auto">
              <q-toggle v-model="m.perms.download" color="primary" label="다운로드" left-label />
            </div>
            <div class="col-auto">
              <q-toggle v-model="m.perms.chat" color="primary" label="대화" left-label />
            </div>
          </div>
        </q-item-section>
        <q-item-section side top>
          <q-btn dense flat icon="delete" color="negative" @click="remove(i)" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-card flat bordered class="q-mt-md">
      <q-card-section class="row items-center q-col-gutter-sm">
        <div class="col">
          <q-input v-model="inviteEmail" label="가족 초대 이메일" dense filled />
        </div>
        <div class="col-auto">
          <q-btn color="primary" label="초대" @click="invite" />
        </div>
      </q-card-section>
    </q-card>

    <q-banner class="bg-grey-9 text-grey-3 q-mt-md" rounded>
      <q-icon name="lock" class="q-mr-sm" /> 폐쇄형 서비스 운영을 위한 핵심 보안 기능입니다. 권한은 언제든 변경 가능합니다.
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

type Member = { name: string; relation: string; perms: { upload: boolean; download: boolean; chat: boolean } };
const members = reactive<Member[]>([
  { name: '홍길동', relation: '장남', perms: { upload: true, download: true, chat: true } },
  { name: '김영희', relation: '차녀', perms: { upload: true, download: false, chat: true } },
]);

const inviteEmail = ref('');
function remove(i: number) {
  members.splice(i, 1);
}
function invite() {
  inviteEmail.value = '';
}
</script>
