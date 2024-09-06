<template>
  <div class="full-page row justify-center items-center">
    <q-card class="q-pa-md" style="max-width: 400px; width: 100%">
      <q-card-section class="text-h6 text-center">Select a file to get started</q-card-section>

      <q-card-section>
        <q-file filled bottom-slots v-model="model" label="Label" counter>
          <template v-slot:prepend>
            <q-icon name="cloud_upload" @click.stop.prevent />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click.stop.prevent="model = null" class="cursor-pointer" />
          </template>
          <template v-slot:hint>Only .exe files</template>
        </q-file>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle1 q-mb-md">Choose type to convert:</div>
        <q-radio v-model="encryptionMode" val="aes" label="ASN1 decoded" color="primary" />
        <q-radio v-model="encryptionMode" val="rc4" label="Raw Binary" color="primary" />
      </q-card-section>

      <q-card-actions>
        <q-btn label="Convert" color="primary" @click="encryptFile" class="full-width" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const model = ref(null)
const encryptionMode = ref('aes')

const encryptFile = () => {
  // Your logic here
}
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
