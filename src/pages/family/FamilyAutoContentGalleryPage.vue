<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">자동 생성 콘텐츠 갤러리</div>

    <q-banner class="bg-grey-9 q-mb-md" dense rounded>
      <q-icon name="movie" class="q-mr-sm" />
      AI가 생성한 스토리텔링 영상과 합성 이미지 복원 콘텐츠를 감상하세요.
      <q-space />
      <q-chip square color="amber-8" text-color="white" icon="workspace_premium">프리미엄</q-chip>
    </q-banner>

    <q-card flat bordered class="bg-grey-9 q-mb-lg">
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">추천 하이라이트</div>
        <q-carousel animated infinite swipeable v-model="slide" height="220px" control-color="white" arrows navigation>
          <q-carousel-slide v-for="(item, idx) in highlights" :key="idx" :name="idx">
            <div class="row items-center q-col-gutter-md">
              <div class="col-6">
                <q-img :src="item.thumbnail" ratio="16/9" :alt="item.title">
                  <div class="absolute-bottom text-subtitle2 q-pa-sm">{{ item.title }}</div>
                </q-img>
              </div>
              <div class="col-6">
                <div class="text-body2">{{ item.desc }}</div>
                <q-btn class="q-mt-md" dense color="secondary" icon="play_arrow" label="재생" @click="play(item)" />
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </q-card-section>
    </q-card>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">이미지 복원 갤러리</div>
        <div class="row q-col-gutter-md">
          <div v-for="(img, i) in gallery" :key="i" class="col-6">
            <q-img :src="img.src" ratio="4/3" :alt="img.title" class="rounded-borders">
              <div class="absolute-bottom text-caption q-pa-xs">{{ img.title }}</div>
            </q-img>
          </div>
        </div>
      </q-card-section>
      <q-separator dark />
      <q-card-actions align="right">
        <q-btn flat color="primary" icon="workspace_premium" label="고화질로 보기 (프리미엄)" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const slide = ref(0);
const highlights = ref([
  { title: '가족 여행 스토리', desc: '제주도에서의 따뜻한 추억을 영상으로 복원', thumbnail: 'https://picsum.photos/seed/mem1/640/360' },
  { title: '엄마의 하루', desc: '사진과 음성으로 구성된 스토리 영상', thumbnail: 'https://picsum.photos/seed/mem2/640/360' },
]);

const gallery = ref([
  { title: '어릴 적 사진 복원', src: 'https://picsum.photos/seed/mem3/640/480' },
  { title: '가족 사진 리터치', src: 'https://picsum.photos/seed/mem4/640/480' },
  { title: '기념일 합성 이미지', src: 'https://picsum.photos/seed/mem5/640/480' },
  { title: '흑백 사진 컬러화', src: 'https://picsum.photos/seed/mem6/640/480' },
]);

function play(item: { title: string }) {
  // In real app, navigate to a video player/detail
  // no-op for stub
  console.log('Playing:', item.title);
}
</script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
