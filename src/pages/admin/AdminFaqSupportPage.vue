<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">D-5 고객센터 및 FAQ 관리</div>

    <q-card flat bordered class="bg-grey-9 q-mb-md">
      <q-card-section class="row items-center q-col-gutter-sm">
        <div class="col-12 col-md-4"><q-input dense filled v-model="search" label="FAQ 검색"/></div>
        <div class="col-12 col-md-3"><q-select dense filled v-model="category" :options="categories" label="카테고리" clearable/></div>
        <div class="col-auto"><q-btn color="primary" icon="add" label="FAQ 추가" @click="openDialog()"/></div>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <q-table :rows="filtered" :columns="columns" row-key="id" flat bordered :pagination="{ rowsPerPage: 10 }">
          <template #body-cell-actions="props">
            <q-td :props="props">
              <q-btn dense flat icon="edit" color="secondary" @click="openDialog(props.row)" />
              <q-btn dense flat icon="delete" color="negative" @click="remove(props.row.id)" />
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <q-dialog v-model="dialog">
      <q-card class="bg-grey-10 text-white" style="min-width: 520px">
        <q-card-section class="text-subtitle1">FAQ 항목</q-card-section>
        <q-card-section>
          <q-input filled v-model="form.q" label="질문" class="q-mb-sm"/>
          <q-input filled type="textarea" autogrow v-model="form.a" label="답변" class="q-mb-sm"/>
          <q-select filled v-model="form.cat" :options="categories" label="카테고리"/>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="취소" v-close-popup/>
          <q-btn color="primary" label="저장" @click="save" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';

type Faq = { id: number; q: string; a: string; cat: string };
const faqs = ref<Faq[]>([
  { id: 1, q: 'AI 대화는 어떻게 시작하나요?', a: '메인 화면의 AI 대화 시작 버튼을 누르세요.', cat: '사용 방법' },
  { id: 2, q: '상조회사 인증이 안돼요.', a: '고객번호와 상조회사 정보를 확인해 주세요. 문제가 지속되면 고객센터로 문의해 주세요.', cat: '인증' },
]);

const categories = [ '사용 방법', '인증', '데이터', '결제/구독', '기타' ];
const columns = [
  { name: 'q', label: '질문', field: 'q', align: 'left' },
  { name: 'a', label: '답변', field: 'a', align: 'left' },
  { name: 'cat', label: '카테고리', field: 'cat', align: 'left' },
  { name: 'actions', label: '작업', field: 'actions', align: 'right' },
] as never[];

const search = ref('');
const category = ref<string|undefined>();
const filtered = computed(() => faqs.value.filter(f =>
  (!search.value || f.q.includes(search.value) || f.a.includes(search.value)) &&
  (!category.value || f.cat === category.value)
));

const dialog = ref(false);
const form = reactive<Faq>({ id: 0, q: '', a: '', cat: '' });
function openDialog(row?: Faq) {
  if (row) Object.assign(form, row); else Object.assign(form, { id: 0, q: '', a: '', cat: '' });
  dialog.value = true;
}
function save() {
  if (form.id === 0) {
    form.id = Math.max(0, ...faqs.value.map(f => f.id)) + 1;
    faqs.value.push({ ...form });
  } else {
    const i = faqs.value.findIndex(f => f.id === form.id);
    if (i >= 0) faqs.value[i] = { ...form };
  }
  dialog.value = false;
}
function remove(id: number) { faqs.value = faqs.value.filter(f => f.id !== id); }
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
