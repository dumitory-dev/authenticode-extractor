<template>
  <q-header elevated>
    <q-toolbar class="q-px-lg bg-primary text-white">
      <q-avatar size="42px" class="q-mr-sm shadow-3 cursor-pointer" :to="{ path: '/' }">
        <q-icon name="security" size="32px" />
      </q-avatar>

      <q-breadcrumbs class="gt-xs" active-color="white" color="grey-3">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" color="grey-3" />
        </template>
        <q-space />
        <q-breadcrumbs-el label="Authenticode Extractor" class="text-white" />
      </q-breadcrumbs>

      <div class="text-subtitle1 lt-sm">Authenticode Extractor</div>

      <q-space />

      <div class="gt-xs">
        <q-btn flat round dense icon="help_outline" class="q-mr-sm" :to="{ path: '/help' }">
          <q-tooltip>Help</q-tooltip>
        </q-btn>

        <DarkModeToggle />
      </div>

      <q-btn flat dense round icon="menu" class="lt-sm">
        <q-menu color="black">
          <q-list padding style="min-width: 180px">
            <q-item clickable v-close-popup class="text-primary">
              <q-item-section avatar>
                <q-icon name="help_outline" />
              </q-item-section>
              <q-btn flat round dense :to="{ path: '/help' }">Help</q-btn>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import DarkModeToggle from './DarkModeToggle.vue'
</script>
