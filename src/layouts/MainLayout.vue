<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <router-link :to="{ name: 'home' }" class="text-white text-decoration-none cursor-pointer">
          Memoria
        </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list padding>
        <q-item-label header>페르소나별 메뉴</q-item-label>

        <q-expansion-item icon="home" label="공통 (메인)" expand-separator>
          <q-item clickable v-ripple :to="{ name: 'home' }">
            <q-item-section avatar><q-icon name="home" /></q-item-section>
            <q-item-section><q-item-label>홈</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'ai' }">
            <q-item-section avatar><q-icon name="chat" /></q-item-section>
            <q-item-section><q-item-label>AI 대화</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'archive' }">
            <q-item-section avatar><q-icon name="inventory_2" /></q-item-section>
            <q-item-section><q-item-label>아카이빙 뷰어</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'anniversaries' }">
            <q-item-section avatar><q-icon name="celebration" /></q-item-section>
            <q-item-section><q-item-label>기념일</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'subscription' }">
            <q-item-section avatar><q-icon name="workspace_premium" /></q-item-section>
            <q-item-section><q-item-label>구독 관리</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'settings' }">
            <q-item-section avatar><q-icon name="settings" /></q-item-section>
            <q-item-section><q-item-label>설정</q-item-label></q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item icon="family_restroom" label="가족 (Receiver)" expand-separator>
          <q-item clickable v-ripple :to="{ name: 'family-gallery' }">
            <q-item-section avatar><q-icon name="photo_library" /></q-item-section>
            <q-item-section><q-item-label>자동 생성 갤러리</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'family-timecapsule' }">
            <q-item-section avatar><q-icon name="lock_clock" /></q-item-section>
            <q-item-section><q-item-label>타임캡슐 열람</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'family-upload' }">
            <q-item-section avatar><q-icon name="cloud_upload" /></q-item-section>
            <q-item-section><q-item-label>추억 업로드</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'family-permanent-storage' }">
            <q-item-section avatar><q-icon name="inventory_2" /></q-item-section>
            <q-item-section><q-item-label>영구 보존 안내</q-item-label></q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item icon="hub" label="Giver (생전 가입자)" expand-separator>
          <q-item clickable v-ripple :to="{ name: 'giver' }">
            <q-item-section avatar><q-icon name="dashboard" /></q-item-section>
            <q-item-section><q-item-label>Giver 홈</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'giver-persona' }">
            <q-item-section avatar><q-icon name="hub" /></q-item-section>
            <q-item-section><q-item-label>페르소나 대시보드</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'giver-data-sources' }">
            <q-item-section avatar><q-icon name="cloud_sync" /></q-item-section>
            <q-item-section><q-item-label>데이터 연동</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'giver-qa-interview' }">
            <q-item-section avatar><q-icon name="forum" /></q-item-section>
            <q-item-section><q-item-label>Q&A 인터뷰</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'giver-voice-cloning' }">
            <q-item-section avatar><q-icon name="graphic_eq" /></q-item-section>
            <q-item-section><q-item-label>목소리 클로닝</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'giver-premium-packages' }">
            <q-item-section avatar><q-icon name="workspace_premium" /></q-item-section>
            <q-item-section><q-item-label>프리미엄 패키지</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'giver-timecapsule' }">
            <q-item-section avatar><q-icon name="schedule_send" /></q-item-section>
            <q-item-section><q-item-label>타임캡슐 예약</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'giver-content-upload' }">
            <q-item-section avatar><q-icon name="upload_file" /></q-item-section>
            <q-item-section><q-item-label>콘텐츠 업로드</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'giver-permanent-storage' }">
            <q-item-section avatar><q-icon name="inventory_2" /></q-item-section>
            <q-item-section><q-item-label>영구 보존 안내</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'giver-family-permissions' }">
            <q-item-section avatar><q-icon name="group" /></q-item-section>
            <q-item-section><q-item-label>가족 권한 관리</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'giver-privacy-ethics' }">
            <q-item-section avatar><q-icon name="policy" /></q-item-section>
            <q-item-section><q-item-label>프라이버시/윤리</q-item-label></q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item icon="corporate_fare" label="상조회사" expand-separator>
          <q-item clickable v-ripple :to="{ name: 'funeral-verify' }">
            <q-item-section avatar><q-icon name="verified_user" /></q-item-section>
            <q-item-section><q-item-label>상조 고객 인증</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'funeral-plans' }">
            <q-item-section avatar><q-icon name="table_view" /></q-item-section>
            <q-item-section><q-item-label>플랜 비교</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'funeral-qr-landing' }">
            <q-item-section avatar><q-icon name="qr_code_2" /></q-item-section>
            <q-item-section><q-item-label>QR 랜딩</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'funeral-checkout' }">
            <q-item-section avatar><q-icon name="payment" /></q-item-section>
            <q-item-section><q-item-label>결제/구독</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'funeral-premium-package' }">
            <q-item-section avatar><q-icon name="workspace_premium" /></q-item-section>
            <q-item-section><q-item-label>프리미엄 패키지</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'funeral-security-ethics' }">
            <q-item-section avatar><q-icon name="shield" /></q-item-section>
            <q-item-section><q-item-label>보안/윤리 고지</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'funeral-admin-dashboard' }">
            <q-item-section avatar><q-icon name="analytics" /></q-item-section>
            <q-item-section><q-item-label>B2B 관리자</q-item-label></q-item-section>
          </q-item>
        </q-expansion-item>

        <q-expansion-item icon="admin_panel_settings" label="관리자" expand-separator>
          <q-item clickable v-ripple :to="{ name: 'admin-home' }">
            <q-item-section avatar><q-icon name="home" /></q-item-section>
            <q-item-section><q-item-label>관리자 홈</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'admin-dashboard' }">
            <q-item-section avatar><q-icon name="dashboard" /></q-item-section>
            <q-item-section><q-item-label>종합 대시보드</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'admin-licenses' }">
            <q-item-section avatar><q-icon name="receipt_long" /></q-item-section>
            <q-item-section><q-item-label>라이선스/정산</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'admin-high-value' }">
            <q-item-section avatar><q-icon name="trending_up" /></q-item-section>
            <q-item-section><q-item-label>고가 패키지 판매 추적</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'admin-verification' }">
            <q-item-section avatar><q-icon name="manage_accounts" /></q-item-section>
            <q-item-section><q-item-label>상조 고객 인증 관리</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'admin-subscription-conversion' }">
            <q-item-section avatar><q-icon name="autorenew" /></q-item-section>
            <q-item-section><q-item-label>구독 유료 전환 관리</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'admin-preservation-monitor' }">
            <q-item-section avatar><q-icon name="inventory_2" /></q-item-section>
            <q-item-section><q-item-label>영구 보존 모니터링</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'admin-ethics-security' }">
            <q-item-section avatar><q-icon name="policy" /></q-item-section>
            <q-item-section><q-item-label>윤리/보안 관리</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'admin-family-role' }">
            <q-item-section avatar><q-icon name="group" /></q-item-section>
            <q-item-section><q-item-label>유가족 권한 관리</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'admin-faq' }">
            <q-item-section avatar><q-icon name="help" /></q-item-section>
            <q-item-section><q-item-label>FAQ 관리</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'admin-persona-quality' }">
            <q-item-section avatar><q-icon name="psychology" /></q-item-section>
            <q-item-section><q-item-label>AI 페르소나 품질</q-item-label></q-item-section>
          </q-item>
          <q-item clickable v-ripple :to="{ name: 'admin-anniversary-scheduler' }">
            <q-item-section avatar><q-icon name="event" /></q-item-section>
            <q-item-section><q-item-label>기념일 스케줄러</q-item-label></q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
onMounted(() => {
  $q.dark.set(true);
});


const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
