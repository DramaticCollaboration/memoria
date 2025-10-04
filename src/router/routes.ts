import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/MemoriaMainPage.vue') },
      { path: 'ai', name: 'ai', component: () => import('pages/StubAiChatPage.vue') },
      { path: 'archive', name: 'archive', component: () => import('pages/StubArchivePage.vue') },
      { path: 'anniversaries', name: 'anniversaries', component: () => import('pages/StubAnniversariesPage.vue') },
      { path: 'subscription', name: 'subscription', component: () => import('pages/StubSubscriptionPage.vue') },
      { path: 'settings', name: 'settings', component: () => import('pages/StubSettingsPage.vue') },
      { path: 'settings/family-permissions', name: 'family-permissions', component: () => import('pages/StubFamilyPermissionsPage.vue') },

      // Family area
      { path: 'gallery', name: 'family-gallery', component: () => import('pages/family/FamilyAutoContentGalleryPage.vue') },
      { path: 'timecapsule', name: 'family-timecapsule', component: () => import('pages/family/FamilyTimecapsuleViewerPage.vue') },
      { path: 'upload', name: 'family-upload', component: () => import('pages/family/FamilyUploadMemoriesPage.vue') },
      { path: 'permanent-storage', name: 'family-permanent-storage', component: () => import('pages/family/FamilyPermanentStorageInfoPage.vue') },

      // Giver area
      { path: 'giver', name: 'giver', component: () => import('pages/giver/GiverHomePage.vue') },
      { path: 'giver/persona', name: 'giver-persona', component: () => import('pages/giver/GiverPersonaDashboardPage.vue') },
      { path: 'giver/data-sources', name: 'giver-data-sources', component: () => import('pages/giver/GiverDataSyncPage.vue') },
      { path: 'giver/qa-interview', name: 'giver-qa-interview', component: () => import('pages/giver/GiverQAInterviewPage.vue') },
      { path: 'giver/voice-cloning', name: 'giver-voice-cloning', component: () => import('pages/giver/GiverVoiceCloningPage.vue') },
      { path: 'giver/premium-packages', name: 'giver-premium-packages', component: () => import('pages/giver/GiverPremiumPackagePage.vue') },
      { path: 'giver/timecapsule', name: 'giver-timecapsule', component: () => import('pages/giver/GiverTimecapsuleSchedulingPage.vue') },
      { path: 'giver/content-upload', name: 'giver-content-upload', component: () => import('pages/giver/GiverContentUploadPage.vue') },
      { path: 'giver/permanent-storage', name: 'giver-permanent-storage', component: () => import('pages/giver/GiverPermanentStorageInfoPage.vue') },
      { path: 'giver/family-permissions', name: 'giver-family-permissions', component: () => import('pages/giver/GiverFamilyPermissionsPage.vue') },
      { path: 'giver/privacy-ethics', name: 'giver-privacy-ethics', component: () => import('pages/giver/GiverPrivacyEthicsSettingsPage.vue') },

      // Funeral company area
      { path: 'funeral/verify', name: 'funeral-verify', component: () => import('pages/funeral/FuneralCustomerVerificationPage.vue') },
      { path: 'funeral/plans', name: 'funeral-plans', component: () => import('pages/funeral/FuneralPlanComparisonPage.vue') },
      { path: 'funeral/qr', name: 'funeral-qr-landing', component: () => import('pages/funeral/FuneralQrLandingPage.vue') },
      { path: 'funeral/checkout', name: 'funeral-checkout', component: () => import('pages/funeral/FuneralCheckoutPage.vue') },
      { path: 'funeral/premium-package', name: 'funeral-premium-package', component: () => import('pages/funeral/FuneralPremiumPackagePage.vue') },
      { path: 'funeral/permanent-storage', name: 'funeral-permanent-storage', component: () => import('pages/giver/GiverPermanentStorageInfoPage.vue') },
      { path: 'funeral/admin', name: 'funeral-admin-dashboard', component: () => import('pages/funeral/FuneralAdminDashboardPage.vue') },
      { path: 'funeral/security-ethics', name: 'funeral-security-ethics', component: () => import('pages/funeral/FuneralSecurityEthicsNoticePage.vue') },

      // Admin area
      { path: 'admin', name: 'admin-home', component: () => import('pages/admin/AdminHomePage.vue') },
      { path: 'admin/dashboard', name: 'admin-dashboard', component: () => import('pages/admin/AdminDashboardPage.vue') },
      { path: 'admin/licenses', name: 'admin-licenses', component: () => import('pages/admin/AdminLicensesSettlementPage.vue') },
      { path: 'admin/high-value', name: 'admin-high-value', component: () => import('pages/admin/AdminHighValueSalesTrackingPage.vue') },
      { path: 'admin/verification', name: 'admin-verification', component: () => import('pages/admin/AdminCustomerVerificationManagementPage.vue') },
      { path: 'admin/subscription-conversion', name: 'admin-subscription-conversion', component: () => import('pages/admin/AdminSubscriptionConversionPage.vue') },
      { path: 'admin/preservation-monitor', name: 'admin-preservation-monitor', component: () => import('pages/admin/AdminDataPreservationMonitoringPage.vue') },
      { path: 'admin/ethics-security', name: 'admin-ethics-security', component: () => import('pages/admin/AdminEthicsSecurityPage.vue') },
      { path: 'admin/family-permissions', name: 'admin-family-role', component: () => import('pages/admin/AdminFamilyRoleManagementPage.vue') },
      { path: 'admin/faq', name: 'admin-faq', component: () => import('pages/admin/AdminFaqSupportPage.vue') },
      { path: 'admin/persona-quality', name: 'admin-persona-quality', component: () => import('pages/admin/AdminPersonaQualityReviewPage.vue') },
      { path: 'admin/anniversary-scheduler', name: 'admin-anniversary-scheduler', component: () => import('pages/admin/AdminAnniversarySchedulerPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
