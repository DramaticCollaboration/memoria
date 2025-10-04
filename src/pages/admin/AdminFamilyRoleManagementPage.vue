<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">D-4-P 유가족/승계자 권한 관리</div>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <q-table :rows="families" :columns="columns" row-key="id" flat bordered :pagination="{ rowsPerPage: 10 }">
          <template #body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense flat icon="manage_accounts" color="primary" label="관리" @click="open(props.row)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="dialog">
      <q-card class="bg-grey-10 text-white" style="min-width: 520px">
        <q-card-section>
          <div class="text-subtitle1">{{ current.familyName }} - 권한 설정</div>
          <div class="text-caption text-grey-5">Role 기반 접근 제어 현황</div>
        </q-card-section>
        <q-separator dark />
        <q-card-section>
          <q-list bordered class="bg-grey-9 rounded-borders">
            <q-item v-for="(m,i) in current.members" :key="i">
              <q-item-section avatar><q-avatar color="grey-7" text-color="white" icon="person"/></q-item-section>
              <q-item-section>
                <q-item-label>{{ m.name }}</q-item-label>
                <q-item-label caption>{{ m.relation }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <div class="row items-center q-gutter-sm">
                  <q-chip size="sm" color="grey-8" text-color="white">업로드</q-chip>
                  <q-toggle v-model="m.perms.upload" color="primary"/>
                  <q-chip size="sm" color="grey-8" text-color="white">다운로드</q-chip>
                  <q-toggle v-model="m.perms.download" color="primary"/>
                  <q-chip size="sm" color="grey-8" text-color="white">대화</q-chip>
                  <q-toggle v-model="m.perms.chat" color="primary"/>
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="닫기" v-close-popup/>
          <q-btn color="primary" label="저장" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

type Member = { name: string; relation: string; perms: { upload: boolean; download: boolean; chat: boolean } };

type FamilyRow = { id: number; familyName: string; deceased: string; membersCount: number; roles: string; members: Member[] };
const families = ref<FamilyRow[]>([
  { id: 1, familyName: '김민자 유가족', deceased: '故 김민자', membersCount: 3, roles: '관리자1/구성원2', members: [
    { name: '홍길동', relation: '장남', perms: { upload: true, download: true, chat: true } },
    { name: '김영희', relation: '차녀', perms: { upload: true, download: false, chat: true } },
    { name: '이철수', relation: '배우자', perms: { upload: true, download: true, chat: true } },
  ]},
]);

const columns = [
  { name: 'familyName', label: '가족 그룹', field: 'familyName', align: 'left' },
  { name: 'deceased', label: '고인', field: 'deceased', align: 'left' },
  { name: 'membersCount', label: '구성원 수', field: 'membersCount', align: 'right' },
  { name: 'roles', label: 'Role 요약', field: 'roles', align: 'left' },
  { name: 'actions', label: '작업', field: 'actions', align: 'right' },
] as never[];

const dialog = ref(false);
const current = reactive<FamilyRow>({ id: 0, familyName: '', deceased: '', membersCount: 0, roles: '', members: [] });

function open(row: FamilyRow) {
  Object.assign(current, row);
  dialog.value = true;
}
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
