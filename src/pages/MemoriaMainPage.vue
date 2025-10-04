<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <!-- A. Persona & CTA -->
    <section class="q-mb-lg">
      <div class="row items-center q-col-gutter-md">
        <div class="col-auto">
          <q-avatar size="88px" color="grey-8">
            <img :src="persona.photoUrl" alt="avatar" v-if="persona.photoUrl" />
            <q-icon v-else name="favorite" size="48px" />
          </q-avatar>
        </div>
        <div class="col">
          <div class="text-h5">{{ persona.name }}</div>
          <div class="text-subtitle2 text-grey-4">{{ persona.slogan }}</div>

          <div class="row q-mt-md q-col-gutter-sm">
            <div class="col-auto">
              <q-btn color="primary" glossy unelevated size="lg" icon="chat" label="AI 대화 시작" @click="goTo('ai')" />
            </div>
            <div class="col-auto" v-if="plan === 'Basic'">
              <q-banner rounded class="bg-amber-8 text-white q-pa-sm">
                <div class="row items-center no-wrap">
                  <q-icon name="workspace_premium" class="q-mr-sm" />
                  <div class="text-caption">프리미엄으로 업그레이드하고 영구 보관 + AI 대화 무제한</div>
                  <q-space />
                  <q-btn dense flat color="white" label="업그레이드" @click="goTo('subscription')" />
                </div>
              </q-banner>
            </div>
          </div>

          <div class="q-mt-sm">
            <q-chip color="teal-8" text-color="white" icon="verified">
              신뢰할 수 있는 상조회사 연계 영구 보존 시스템
            </q-chip>
          </div>
        </div>
      </div>
    </section>

    <!-- B1. Timeline preview -->
    <section class="q-mb-lg">
      <div class="text-subtitle1 q-mb-sm">
        인생 연대기
      </div>
      <q-card flat bordered class="bg-grey-9">
        <q-card-section>
          <q-timeline color="secondary" layout="comfortable">
            <q-timeline-entry
              v-for="(item, idx) in timelinePreview"
              :key="idx"
              :title="item.title"
              :subtitle="item.date"
              :side="idx % 2 === 0 ? 'left' : 'right'"
              :icon="item.icon"
            >
              <div class="text-body2">{{ item.desc }}</div>
            </q-timeline-entry>
          </q-timeline>
        </q-card-section>
        <q-separator dark />
        <q-card-actions align="right">
          <q-btn flat color="secondary" label="전체 보기" @click="goTo('archive')" />
        </q-card-actions>
      </q-card>
    </section>

    <!-- B2. Upload memories CTA -->
    <section class="q-mb-lg">
      <q-card flat bordered class="bg-grey-9">
        <q-card-section class="row items-center">
          <q-icon name="collections" size="32px" class="q-mr-md" />
          <div>
            <div class="text-subtitle1">가족 앨범에 추억을 추가하세요</div>
            <div class="text-caption text-grey-5">사진, 영상, 음성 등 소중한 기억을 함께 보관합니다</div>
          </div>
          <q-space />
          <q-btn color="secondary" label="추억 공유하기" @click="uploadMemory" />
        </q-card-section>
      </q-card>
    </section>

    <!-- B3. Upcoming anniversaries -->
    <section class="q-mb-xl">
      <div class="text-subtitle1 q-mb-sm">다가오는 기념일</div>
      <q-list bordered separator class="rounded-borders bg-grey-9">
        <q-item v-for="(a, i) in anniversaries" :key="i">
          <q-item-section avatar>
            <q-icon name="event" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ a.title }}</q-item-label>
            <q-item-label caption>{{ a.date }} • 남은 {{ a.remainingDays }}일</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn flat dense icon="edit" @click="goTo('anniversaries')" />
          </q-item-section>
        </q-item>
      </q-list>
    </section>

    <!-- C. Bottom Navigation (inline for simplicity) -->
    <section class="q-mb-lg">
      <div class="row q-col-gutter-sm">
        <div class="col-6">
          <q-btn class="full-width" outline color="primary" icon="chat" label="AI 대화" @click="goTo('ai')" />
        </div>
        <div class="col-6">
          <q-btn class="full-width" outline color="secondary" icon="inventory_2" label="아카이빙" @click="goTo('archive')" />
        </div>
        <div class="col-6 q-mt-sm">
          <q-btn class="full-width" outline color="pink-5" icon="celebration" label="기념일" @click="goTo('anniversaries')" />
        </div>
        <div class="col-6 q-mt-sm">
          <q-btn class="full-width" outline color="amber-7" icon="workspace_premium" label="구독 관리" @click="goTo('subscription')" />
        </div>
        <div class="col-12 q-mt-sm">
          <q-btn class="full-width" flat color="grey-4" icon="settings" label="설정 및 권한 관리" @click="goTo('settings')" />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const plan = ref<'Basic' | 'Premium'>('Basic');

const persona = ref({
  name: '우리 엄마, 김민자 님',
  slogan: '기억의 저장소, 마음의 영속',
  photoUrl: '' // Put actual URL when available
});

const timelinePreview = ref([
  { date: '1990', title: '졸업', desc: 'OO대학 경영학과 졸업', icon: 'school' },
  { date: '1995', title: '결혼', desc: '따뜻한 가정을 꾸리다', icon: 'favorite' },
  { date: '2001', title: '첫 아이 탄생', desc: '가족이 늘어난 행복의 해', icon: 'child_care' },
  { date: '2019', title: '가족 여행', desc: '제주도에서의 소중한 추억', icon: 'flight_takeoff' },
]);

const anniversaries = ref([
  { title: '기일', date: '10월 21일', remainingDays: 17 },
  { title: '생일', date: '12월 03일', remainingDays: 60 },
]);

function goTo(name: string) {
  // Navigate to named route (ignore promise intentionally)
  void router.push({ name });
}

function uploadMemory() {
  goTo('archive');
}
</script>

<style scoped>
.bg-grey-10 {
  background-color: #121212;
}
</style>
