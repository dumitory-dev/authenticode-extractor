<template>
  <q-footer class="footer bg-grey-1 q-pa-md">
    <div class="row justify-center items-center">
      <div class="q-mx-sm">
        <a target="_blank" href="https://github.com/dumitory-dev">
          <img src="~assets/icons/iconmonstr-github-1.svg" alt="github icon" class="footer__icon" />
        </a>
      </div>
      <div class="q-mx-sm">
        <a target="_blank">
          <img src="~assets/icons/iconmonstr-linkedin-3.svg" alt="linkedin icon" class="footer__icon" />
        </a>
      </div>
    </div>
    <div class="q-mx-sm text-custom">dumitory-dev</div>
    <div class="text-custom">2024</div>
  </q-footer>
</template>

<script setup></script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.footer__icon {
  width: 30px;
  height: 30px;
}

.text-custom {
  color: #080808;
  font-size: 20px;
}
</style>
