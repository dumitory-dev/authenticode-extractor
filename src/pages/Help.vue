<template>
  <div class="q-pa-md">
    <div class="row items-center q-mb-md">
      <q-btn
        flat
        icon="arrow_back"
        label="Back to Home"
        color="primary"
        :to="{ path: '/' }"
        class="q-mb-md"
      />
    </div>
    <q-card class="help-card">
      <q-card-section>
        <div class="text-h5 q-mb-md">How to Use</div>

        <q-list bordered separator>
          <q-item>
            <q-item-section avatar>
              <q-icon name="upload_file" color="primary" size="md" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-bold">Step 1: Select File</q-item-label>
              <q-item-label caption>
                Click the file upload area and select an .exe file from your computer.
                Only .exe files are supported.
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon name="settings" color="primary" size="md" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-bold">Step 2: Choose Conversion Type</q-item-label>
              <q-item-label caption>
                Select the conversion mode:
                <ul>
                  <li>ASN1: Extracts ASN.1 formatted data</li>
                  <li>Raw: Extracts raw digital signature data</li>
                </ul>
              </q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon name="transform" color="primary" size="md" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-weight-bold">Step 3: Convert</q-item-label>
              <q-item-label caption>
                Click the "Extract" button to process your file. The conversion process will begin automatically.
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <div class="q-mt-lg">
          <div class="text-h6 q-mb-md">Additional Information</div>

          <q-expansion-item
            expand-separator
            icon="info"
            label="Supported File Types"
          >
            <q-card>
              <q-card-section>
                Currently, only Windows executable (.exe) files with valid digital signatures are supported.
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="warning"
            label="Common Issues"
          >
            <q-card>
              <q-card-section>
                <ul class="q-mb-none">
                  <li>File not recognized: Ensure you're selecting a valid .exe file</li>
                  <li>No signature found: The file might not be digitally signed</li>
                  <li>Conversion failed: The signature might be corrupted or invalid</li>
                </ul>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            icon="security"
            label="Security Note"
          >
            <q-card>
              <q-card-section>
                All processing is done locally in your browser. No files are uploaded to any server.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
        <div class="q-mt-lg">
          <div class="text-h6 q-mb-md">Need Help?</div>
          <p>
            If you encounter any issues or have questions, please visit our
            <a href="https://github.com/dumitory-dev" target="_blank" rel="noopener noreferrer">
              GitHub repository
            </a>.
          </p>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.help-card {
  max-width: 800px;
  margin: 0 auto;
}

ul {
  margin-top: 8px;
  margin-bottom: 8px;
}

a {
  color: var(--q-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
