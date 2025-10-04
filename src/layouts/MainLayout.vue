<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Memoria </q-toolbar-title>

        <q-btn color="primary" unelevated label="상조 인증" to="/verify" class="q-mr-sm" />
        <q-btn color="secondary" outline label="플랜 보기" to="/plans" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> A. 가입/구독 </q-item-label>
        <q-item clickable v-ripple to="/">
          <q-item-section avatar><q-icon name="home"/></q-item-section>
          <q-item-section>랜딩</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/verify">
          <q-item-section avatar><q-icon name="verified"/></q-item-section>
          <q-item-section>상조 고객 인증</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/plans">
          <q-item-section avatar><q-icon name="view_list"/></q-item-section>
          <q-item-section>플랜 비교</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/checkout">
          <q-item-section avatar><q-icon name="payment"/></q-item-section>
          <q-item-section>결제</q-item-section>
        </q-item>

        <q-item-label header> B. 페르소나</q-item-label>
        <q-item clickable v-ripple to="/creator/dashboard">
          <q-item-section avatar><q-icon name="dashboard"/></q-item-section>
          <q-item-section>대시보드</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/creator/sources">
          <q-item-section avatar><q-icon name="link"/></q-item-section>
          <q-item-section>데이터 연동</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/creator/voice">
          <q-item-section avatar><q-icon name="mic"/></q-item-section>
          <q-item-section>목소리 클로닝</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/creator/timecapsule">
          <q-item-section avatar><q-icon name="event"/></q-item-section>
          <q-item-section>타임캡슐 예약</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/creator/premium-package">
          <q-item-section avatar><q-icon name="auto_awesome"/></q-item-section>
          <q-item-section>프리미엄 패키지</q-item-section>
        </q-item>

        <q-item-label header> C. 추모 & 대화</q-item-label>
        <q-item clickable v-ripple to="/memorial">
          <q-item-section avatar><q-icon name="park"/></q-item-section>
          <q-item-section>추모 공간</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/chat">
          <q-item-section avatar><q-icon name="smart_toy"/></q-item-section>
          <q-item-section>AI 대화</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/gallery">
          <q-item-section avatar><q-icon name="photo_library"/></q-item-section>
          <q-item-section>콘텐츠 갤러리</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/timecapsule/view">
          <q-item-section avatar><q-icon name="movie"/></q-item-section>
          <q-item-section>타임캡슐 열람</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/family/upload">
          <q-item-section avatar><q-icon name="cloud_upload"/></q-item-section>
          <q-item-section>가족 업로드</q-item-section>
        </q-item>

        <q-item-label header> D. 관리</q-item-label>
        <q-item clickable v-ripple to="/manage/subscription">
          <q-item-section avatar><q-icon name="manage_accounts"/></q-item-section>
          <q-item-section>구독 관리</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/manage/preservation">
          <q-item-section avatar><q-icon name="lock"/></q-item-section>
          <q-item-section>영구 보존 안내</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/manage/family-roles">
          <q-item-section avatar><q-icon name="group"/></q-item-section>
          <q-item-section>가족 권한</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/manage/notifications">
          <q-item-section avatar><q-icon name="notifications"/></q-item-section>
          <q-item-section>알림 설정</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
