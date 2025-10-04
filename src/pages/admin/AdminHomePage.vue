<template>
  <q-page class="q-pa-md bg-grey-10 text-white">
    <div class="text-h6 q-mb-md">관리자 홈 (B2B & 플랫폼 관리)</div>

    <q-banner class="bg-grey-9 q-mb-md" rounded>
      <q-icon name="analytics" class="q-mr-sm" />
      상조회사 파트너 성과, 구독 전환, 보안/윤리 준수 현황을 한 곳에서 관리합니다.
    </q-banner>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card flat bordered class="bg-grey-9">
          <q-card-section>
            <div class="text-subtitle1"><q-icon name="leaderboard" class="q-mr-sm"/>B2B 전략 & 수익</div>
          </q-card-section>
          <q-separator dark />
          <q-list class="bg-grey-10" bordered>
            <q-item clickable v-ripple :to="{ name: 'admin-dashboard' }">
              <q-item-section avatar><q-icon name="dashboard"/></q-item-section>
              <q-item-section>
                <q-item-label>D-6-A B2B 종합 대시보드</q-item-label>
                <q-item-label caption>프리미엄 전환율, 유지율, 유입, 정산</q-item-label>
              </q-item-section>
              <q-item-section side><q-icon name="chevron_right"/></q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'admin-licenses' }">
              <q-item-section avatar><q-icon name="verified"/></q-item-section>
              <q-item-section>
                <q-item-label>D-6-B 라이선스 및 정산 관리</q-item-label>
              </q-item-section>
              <q-item-section side><q-icon name="chevron_right"/></q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'admin-high-value' }">
              <q-item-section avatar><q-icon name="workspace_premium"/></q-item-section>
              <q-item-section>
                <q-item-label>D-6-C 고가 패키지 판매 추적</q-item-label>
              </q-item-section>
              <q-item-section side><q-icon name="chevron_right"/></q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'admin-verification' }">
              <q-item-section avatar><q-icon name="assignment_late"/></q-item-section>
              <q-item-section>
                <q-item-label>A-3-M 상조 고객 인증 관리</q-item-label>
              </q-item-section>
              <q-item-section side><q-icon name="chevron_right"/></q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'admin-subscription-conversion' }">
              <q-item-section avatar><q-icon name="sync_alt"/></q-item-section>
              <q-item-section>
                <q-item-label>D-4-M 구독 유료 전환 관리</q-item-label>
              </q-item-section>
              <q-item-section side><q-icon name="chevron_right"/></q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card flat bordered class="bg-grey-9">
          <q-card-section>
            <div class="text-subtitle1"><q-icon name="security" class="q-mr-sm"/>신뢰 & 보안</div>
          </q-card-section>
          <q-separator dark />
          <q-list class="bg-grey-10" bordered>
            <q-item clickable v-ripple :to="{ name: 'admin-preservation-monitor' }">
              <q-item-section avatar><q-icon name="cloud_done"/></q-item-section>
              <q-item-section>
                <q-item-label>D-5-S 데이터 영구 보존 시스템 모니터링</q-item-label>
              </q-item-section>
              <q-item-section side><q-icon name="chevron_right"/></q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'admin-ethics-security' }">
              <q-item-section avatar><q-icon name="gavel"/></q-item-section>
              <q-item-section>
                <q-item-label>D-8-E 윤리 및 폐쇄형 보안 관리</q-item-label>
              </q-item-section>
              <q-item-section side><q-icon name="chevron_right"/></q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'admin-family-role' }">
              <q-item-section avatar><q-icon name="group"/></q-item-section>
              <q-item-section>
                <q-item-label>D-4-P 유가족/승계자 권한 관리</q-item-label>
              </q-item-section>
              <q-item-section side><q-icon name="chevron_right"/></q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>

      <div class="col-12">
        <q-card flat bordered class="bg-grey-9 q-mt-md">
          <q-card-section>
            <div class="text-subtitle1"><q-icon name="support_agent" class="q-mr-sm"/>서비스 품질</div>
          </q-card-section>
          <q-separator dark />
          <q-list class="bg-grey-10" bordered>
            <q-item clickable v-ripple :to="{ name: 'admin-faq' }">
              <q-item-section avatar><q-icon name="help"/></q-item-section>
              <q-item-section>
                <q-item-label>D-5 고객센터 및 FAQ 관리</q-item-label>
              </q-item-section>
              <q-item-section side><q-icon name="chevron_right"/></q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'admin-persona-quality' }">
              <q-item-section avatar><q-icon name="fact_check"/></q-item-section>
              <q-item-section>
                <q-item-label>C-8-Q AI 페르소나 품질 검토</q-item-label>
              </q-item-section>
              <q-item-section side><q-icon name="chevron_right"/></q-item-section>
            </q-item>
            <q-item clickable v-ripple :to="{ name: 'admin-anniversary-scheduler' }">
              <q-item-section avatar><q-icon name="event"/></q-item-section>
              <q-item-section>
                <q-item-label>D-7-M 기념일 알림 스케줄러</q-item-label>
              </q-item-section>
              <q-item-section side><q-icon name="chevron_right"/></q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts"></script>

<style scoped>
.bg-grey-10 { background-color: #121212; }
</style>
