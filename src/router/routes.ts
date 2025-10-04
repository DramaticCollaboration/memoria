import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/LandingPage.vue') }, // A-1
      { path: 'verify', component: () => import('pages/VerifyFuneral.vue') }, // A-3
      { path: 'plans', component: () => import('pages/PlansPage.vue') }, // A-4
      { path: 'checkout', component: () => import('pages/CheckoutPage.vue') }, // A-5

      { path: 'creator/dashboard', component: () => import('pages/PersonaDashboard.vue') }, // B-1
      { path: 'creator/sources', component: () => import('pages/DataSources.vue') }, // B-2
      { path: 'creator/voice', component: () => import('pages/VoiceCloning.vue') }, // B-4
      { path: 'creator/timecapsule', component: () => import('pages/TimeCapsuleSchedule.vue') }, // B-5
      { path: 'creator/premium-package', component: () => import('pages/PremiumPackage.vue') }, // B-6

      { path: 'memorial', component: () => import('pages/MemorialMain.vue') }, // C-1
      { path: 'chat', component: () => import('pages/ChatPage.vue') }, // C-2
      { path: 'gallery', component: () => import('pages/GalleryPage.vue') }, // C-3
      { path: 'timecapsule/view', component: () => import('pages/TimeCapsuleViewer.vue') }, // C-5
      { path: 'family/upload', component: () => import('pages/FamilyUpload.vue') }, // C-6

      { path: 'manage/subscription', component: () => import('pages/SubscriptionManage.vue') }, // D-1
      { path: 'manage/preservation', component: () => import('pages/PreservationInfo.vue') }, // D-2
      { path: 'manage/family-roles', component: () => import('pages/FamilyRoles.vue') }, // D-4
      { path: 'manage/notifications', component: () => import('pages/NotificationsSettings.vue') }, // D-7
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
