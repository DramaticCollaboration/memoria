<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-sm">Q&A 인터뷰 / 가치관 입력</div>
    <div class="text-caption text-grey q-mb-md">AI가 질문을 드립니다. 당신의 가치관과 답변 스타일을 학습합니다.</div>

    <q-card class="q-mb-md">
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">오늘의 질문</div>
        <q-list separator>
          <q-item v-for="(q, i) in questions" :key="i">
            <q-item-section>
              <q-item-label>{{ q.prompt }}</q-item-label>
              <q-input v-model="q.answer" type="textarea" autogrow filled placeholder="여기에 답변을 입력하세요" class="q-mt-sm" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-separator dark />
      <q-card-actions align="right">
        <q-btn flat color="secondary" label="임시 저장" @click="saveDraft" />
        <q-btn color="primary" label="제출하고 다음으로" :to="{ name: 'giver-voice-cloning' }" @click="submitAnswers" />
      </q-card-actions>
    </q-card>

    <q-banner class="bg-grey-9 text-grey-3" rounded>
      <q-icon name="tips_and_updates" class="q-mr-sm" /> 솔직한 마음과 평소 말투로 답변해 주세요. AI가 당신의 스타일을 더 잘 이해합니다.
    </q-banner>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

type QA = { prompt: string; answer: string };
const questions = reactive<QA[]>([
  { prompt: '자녀가 첫 월급을 받았을 때 어떤 조언을 해주고 싶나요?', answer: '' },
  { prompt: '힘든 시기를 이겨낸 당신만의 방법은 무엇인가요?', answer: '' },
  { prompt: '인생에서 가장 소중하게 여기는 가치는 무엇인가요?', answer: '' },
]);

function saveDraft() {
  // stub
}
function submitAnswers() {
  // stub
}
</script>
