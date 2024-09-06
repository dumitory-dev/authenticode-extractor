<template>
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center q-pa-xs toolbar-title-size" style="width: 100%">
          Tool for extracting authenticode from an .exe file
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .toolbar-title-size {
    font-size: 1.5rem;
  }
  
  @media (max-width: 1000px) {
    .toolbar-title-size {
      font-size: 3.5vw;
    }
  }
  </style>
  