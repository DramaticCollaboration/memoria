<template>
  <q-page class="q-pa-md column" style="height: 100%">
    <div class="text-h6 q-mb-sm">AI 대화</div>
    <q-separator class="q-mb-md" />
    <q-scroll-area class="col q-pa-sm bg-grey-1" style="border-radius: 8px">
      <div>
        <q-chat-message
          v-for="(m, idx) in messages"
          :key="idx"
          :name="m.role === 'user' ? '나' : '메모리아 AI'"
          :sent="m.role === 'user'"
          :avatar="m.role === 'user' ? userAvatar : aiAvatar"
        >
          <div class="q-pb-xs">{{ m.text }}</div>
          <div v-if="m.role === 'assistant'" class="text-caption text-grey-6">이 답변은 AI가 생성한 것입니다</div>
        </q-chat-message>
      </div>
    </q-scroll-area>

    <div class="row q-mt-md q-gutter-sm">
      <q-input class="col" dense outlined v-model="input" @keyup.enter="send" placeholder="메시지를 입력하세요..." />
      <q-btn color="primary" label="전송" @click="send" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Msg { role: 'user' | 'assistant'; text: string }
const messages = ref<Msg[]>([
  { role: 'assistant', text: '안녕하세요. 메모리아입니다. 오늘은 어떤 이야기를 나눠볼까요?' }
]);
const input = ref('');
const userAvatar = 'https://cdn.quasar.dev/img/avatar.png';
const aiAvatar = 'https://cdn.quasar.dev/logo-v2/svg/logo.svg';

function send () {
  const content = input.value.trim();
  if (!content) return;
  messages.value.push({ role: 'user', text: content });
  input.value = '';
  streamAIReply(content);
}

function streamAIReply (prompt: string) {
  // Placeholder streaming (simulate SSE/WebSocket)
  const replyFull = `고인의 기억을 바탕으로 생각해보면, ${prompt} 에 대해 이렇게 이야기할 수 있을 것 같아요.`;
  const partial: Msg = { role: 'assistant', text: '' };
  messages.value.push(partial);
  let i = 0;
  const timer = setInterval(() => {
    partial.text += replyFull[i] || '';
    i++;
    if (i >= replyFull.length) clearInterval(timer);
  }, 20);

  // TODO: Replace with actual SSE:
  // const es = new EventSource('/api/chat/stream?...');
  // es.onmessage = (ev) => { partial.text += ev.data };
}
</script>
