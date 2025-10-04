<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">추억 아카이빙 뷰어</div>

    <q-card flat bordered class="bg-grey-9">
      <q-card-section>
        <q-tabs v-model="tab" dense inline-label class="text-grey-3" active-color="primary" indicator-color="primary">
          <q-tab name="advice" icon="tips_and_updates" label="자녀에게 남기는 조언" />
          <q-tab name="happy" icon="favorite" label="가족과의 행복한 추억" />
          <q-tab name="turning" icon="flag" label="인생의 전환점" />
          <q-tab name="travel" icon="flight_takeoff" label="여행" />
        </q-tabs>
        <q-separator dark />
        <q-tab-panels v-model="tab" animated transition-prev="jump-up" transition-next="jump-up" class="bg-grey-9">
          <q-tab-panel name="advice">
            <div class="row q-col-gutter-md">
              <div v-for="(c, i) in content.advice" :key="i" class="col-12 col-sm-6">
                <q-card flat bordered class="bg-grey-10">
                  <q-card-section>
                    <div class="text-subtitle2"><q-icon name="tips_and_updates" class="q-mr-sm" />{{ c.title }}</div>
                    <div class="text-caption text-grey-5">{{ c.desc }}</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="happy">
            <div class="row q-col-gutter-md">
              <div v-for="(c, i) in content.happy" :key="i" class="col-6">
                <q-img :src="c.thumbnail" ratio="4/3" :alt="c.title" class="rounded-borders">
                  <div class="absolute-bottom text-subtitle2 q-pa-xs">{{ c.title }}</div>
                </q-img>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="turning">
            <q-list bordered separator class="rounded-borders bg-grey-10">
              <q-item v-for="(c, i) in content.turning" :key="i" clickable>
                <q-item-section avatar><q-icon name="flag" /></q-item-section>
                <q-item-section>
                  <q-item-label>{{ c.title }}</q-item-label>
                  <q-item-label caption>{{ c.date }}</q-item-label>
                </q-item-section>
                <q-item-section side><q-icon name="chevron_right" /></q-item-section>
              </q-item>
            </q-list>
          </q-tab-panel>
          <q-tab-panel name="travel">
            <div class="row q-col-gutter-md">
              <div v-for="(c, i) in content.travel" :key="i" class="col-12 col-sm-6">
                <q-card flat bordered class="bg-grey-10">
                  <q-card-section>
                    <div class="text-subtitle2"><q-icon name="flight_takeoff" class="q-mr-sm" />{{ c.title }}</div>
                    <div class="text-caption text-grey-5">{{ c.desc }}</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('advice');
const content = {
  advice: [
    { title: '첫 월급을 받았을 때', desc: '스스로에게 작은 선물을 하고 남은 돈은 저축하렴' },
    { title: '힘든 일을 겪을 때', desc: '잠시 쉬어가도 괜찮아. 너는 충분히 잘하고 있어' },
  ],
  happy: [
    { title: '제주도 가족여행', thumbnail: 'https://picsum.photos/seed/a1/640/480' },
    { title: '봄소풍', thumbnail: 'https://picsum.photos/seed/a2/640/480' },
    { title: '크리스마스', thumbnail: 'https://picsum.photos/seed/a3/640/480' },
    { title: '해변에서', thumbnail: 'https://picsum.photos/seed/a4/640/480' },
  ],
  turning: [
    { title: '결혼', date: '1995-05-20' },
    { title: '첫 아이 탄생', date: '2001-02-11' },
  ],
  travel: [
    { title: '일본 여행', desc: '벚꽃이 한창이던 때' },
    { title: '부산 여행', desc: '해운대의 파도 소리' },
  ],
};
</script>
