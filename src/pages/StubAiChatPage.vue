<template>
  <q-page class="column bg-grey-10 text-white" style="height: 100%">
    <div class="col column">
      <q-scroll-area class="col">
        <div class="q-pa-md">
          <q-chat-message
            v-for="(m, i) in messages"
            :key="i"
            :name="m.from"
            :text="[m.text]"
            :sent="m.sent"
            :stamp="m.time"
            :bg-color="m.sent ? 'primary' : 'grey-9'"
            :text-color="m.sent ? 'white' : 'white'"
            avatar="https://cdn.quasar.dev/img/avatar.png"
          />
        </div>
      </q-scroll-area>
    </div>

    <div class="q-pa-sm bg-grey-9">
      <div class="text-caption text-grey-5 q-mb-xs">이것은 AI이며, 실제 사람이 아님</div>
      <q-input
        v-model="draft"
        filled
        placeholder="메시지를 입력하세요..."
        dense
        @keyup.enter="send"
        :disable="sending"
        :loading="sending"
      >
        <template #append>
          <q-btn dense flat color="primary" icon="send" @click="send" :disable="!draft || sending" />
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Msg { from: string; text: string; time: string; sent: boolean }
const messages = ref<Msg[]>([
  { from: '나', text: '안녕, 오늘 너무 보고 싶어요.', time: '20:01', sent: true },
  { from: 'AI (어머니)', text: '나도 너를 많이 사랑해. 오늘 하루는 어땠니?', time: '20:02', sent: false },
]);
const draft = ref('');
const sending = ref(false);

function nowStamp() {
  const d = new Date();
  return d.toTimeString().slice(0,5);
}

async function send() {
  if (!draft.value || sending.value) return;
  const text = draft.value;
  draft.value = '';
  messages.value.push({ from: '나', text, time: nowStamp(), sent: true });
  sending.value = true;
  // Simulate AI response
  await new Promise(r => setTimeout(r, 600));
  messages.value.push({ from: 'AI (어머니)', text: '항상 네 곁에 있을게. 힘들면 잠시 쉬어가도 괜찮아.', time: nowStamp(), sent: false });
  sending.value = false;
}
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; height: 100%; }
</style>
