<template>
  <q-page class="q-pa-md">
    <div class="text-h5 q-mb-md">자동 생성 콘텐츠 갤러리</div>

    <q-carousel v-model="slide" arrows animated infinite height="360px" class="q-mb-lg">
      <q-carousel-slide name="vid1">
        <div class="full-width full-height flex flex-center">
          <q-video src="https://www.w3schools.com/html/mov_bbb.mp4" style="width: 100%; max-width: 720px" />
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="img1" class="flex flex-center">
        <q-img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" style="max-width: 720px; width: 100%" :ratio="16/9" />
      </q-carousel-slide>
      <q-carousel-slide name="img2" class="flex flex-center">
        <q-img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop" style="max-width: 720px; width: 100%" :ratio="16/9" />
      </q-carousel-slide>
    </q-carousel>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-6 col-md-4" v-for="(g, i) in grid" :key="i">
        <q-card bordered clickable @click="open(g)">
          <q-img :src="g.type==='img'? g.src : thumb" :ratio="16/9"/>
          <q-card-section class="text-caption">{{ g.label }}</q-card-section>
        </q-card>
      </div>
    </div>

    <q-dialog v-model="viewer">
      <q-card style="max-width: 900px; width: 100%">
        <q-card-section>
          <q-video v-if="current?.type==='video'" :src="current?.src || ''" style="width: 100%" />
          <q-img v-else :src="current?.src || ''" :ratio="16/9" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const slide = ref('vid1');
const thumb = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=600&auto=format&fit=crop';
const grid = ref([
  { type: 'img', src: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop', label: '함께한 순간' },
  { type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4', label: '스토리텔링 영상' },
  { type: 'img', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop', label: '복원된 이미지' },
] as {type: 'img'|'video', src: string, label: string}[] );

const viewer = ref(false);
const current = ref<{type: 'img'|'video', src: string} | null>(null);
function open (g: {type: 'img'|'video', src: string}) { current.value = g; viewer.value = true; }
</script>
