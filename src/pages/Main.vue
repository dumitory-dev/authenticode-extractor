<script setup lang="ts">
import AppHeader from '../components/Header.vue'
import FileCard from '../components/FileCard.vue'
import AppFooter from '../components/Footer.vue'
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <AppHeader />
    <q-page-container>
      <q-page class="page-container">
        <FileCard />
      </q-page>
    </q-page-container>
    <AppFooter />
  </q-layout>
</template>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 100px);
}
</style>
