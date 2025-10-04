<template>
  <q-page class="q-pa-md">
    <q-list bordered class="rounded-borders">
      <q-item clickable v-ripple to="/settings/family-permissions">
        <q-item-section avatar><q-icon name="group" /></q-item-section>
        <q-item-section>
          <q-item-label>유가족 권한 관리</q-item-label>
          <q-item-label caption>승계자 명단 및 권한 설정</q-item-label>
        </q-item-section>
        <q-item-section side><q-icon name="chevron_right" /></q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>
<script setup lang="ts"></script>
