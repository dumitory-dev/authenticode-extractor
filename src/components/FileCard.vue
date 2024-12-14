<template>
  <div class="full-page row justify-center items-center">
    <q-card class="q-pa-md" style="max-width: 400px; width: 100%">
      <q-inner-loading :showing="isLoading" color="primary">
        <q-spinner-dots size="100px" color="primary" />
      </q-inner-loading>
      <q-card-section class="text-h6 text-center">Select a file</q-card-section>

      <q-card-section>
        <q-file :disable="isLoading" accept=".exe" filled bottom-slots v-model="file" label="Please, select only .exe files" counter >
          <template v-slot:prepend>
            <q-icon name="upload" @click.stop.prevent />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click.stop.prevent="file = null" class="cursor-pointer" />
          </template>
        </q-file>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle1 q-mb-md">Choose type to convert:</div>
        <q-option-group
          v-model="convertMode"
          :options="convertOptions"
          type="radio"
          inline
          color="primary"
          aria-label="Encryption Mode"
        />
      </q-card-section>

      <q-card-actions>
        <q-btn label="Extract" color="primary" @click="convertFile" class="full-width" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { useFileConverter } from '../composables/use-file-converter'
const { file, convertMode, convertOptions, convertFile,isLoading } = useFileConverter()
</script>

<style scoped>
.full-page {
  width: 100%;
  height: 100%;
}

.q-pa-md {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
