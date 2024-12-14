<template>
  <q-btn
    :icon="isDark ? 'dark_mode' : 'light_mode'"
    flat
    round
    @click="toggleDarkMode"
    :color="isDark ? 'yellow' : 'white'"
  >
    <q-tooltip>{{ isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}</q-tooltip>
  </q-btn>
</template>

<script lang="ts" setup>
import { useDarkMode } from '../composables/use-dark-mode'

const { isDark, toggleDarkMode } = useDarkMode()
</script>
