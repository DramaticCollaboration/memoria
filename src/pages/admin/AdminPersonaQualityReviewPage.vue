<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">C-8-Q AI 페르소나 품질 검토</div>

    <q-card flat bordered class="bg-grey-9 q-mb-md">
      <q-card-section class="row items-center q-col-gutter-sm">
        <div class="col-12 col-md-3"><q-select dense filled v-model="type" :options="types" label="샘플 유형"/></div>
        <div class="col-auto"><q-btn color="primary" label="무작위 샘플링" @click="sample"/></div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <div class="text-subtitle1"><q-icon name="rule" class="q-mr-sm"/>검토 큐</div>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <q-table :rows="queue" :columns="columns" row-key="id" flat bordered :pagination="{ rowsPerPage: 5 }">
          <template #body-cell-preview="props">
            <q-td :props="props">
              <div v-if="props.row.type==='chat'" class="text-caption text-grey-4">{{ props.row.preview }}</div>
              <div v-else class="text-caption text-grey-4">영상: {{ props.row.preview }}</div>
            </q-td>
          </template>
          <template #body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense flat icon="thumb_up" color="positive" @click="approve(props.row)" />
              <q-btn dense flat icon="thumb_down" color="negative" @click="reject(props.row)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
      <q-separator dark />
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">피드백 (학습 데이터 개선)</div>
        <q-input v-model="feedback" type="textarea" autogrow filled placeholder="문체/가치관 일치 여부, 개선 제안 등" />
        <div class="q-mt-sm"/>
        <q-btn color="secondary" label="피드백 저장" @click="saveFeedback" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

type Item = { id: number; type: 'chat'|'video'; preview: string };
const queue = ref<Item[]>([
  { id: 1, type: 'chat', preview: '"항상 네 곁에 있을게"와 같은 표현의 적절성' },
  { id: 2, type: 'video', preview: '스토리텔링 영상 2025-09-15 ver1' },
]);

const columns = [
  { name: 'type', label: '유형', field: 'type', align: 'left' },
  { name: 'preview', label: '미리 보기', field: 'preview', align: 'left' },
  { name: 'actions', label: '작업', field: 'actions', align: 'right' },
] as never[];

const types = [ { label: '채팅', value: 'chat' }, { label: '영상', value: 'video' } ];
const type = ref('chat');
const feedback = ref('');

function sample() { /* stub - populate queue in real impl */ }
function approve(i: Item) { queue.value = queue.value.filter(q => q.id !== i.id); }
function reject(i: Item) { queue.value = queue.value.filter(q => q.id !== i.id); }
function saveFeedback() { feedback.value = ''; }
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
