<template>
  <q-footer bordered class="bg-primary mobile-footer">
    <q-toolbar class="toolbar-container">
      <div class="mobile-footer-content">
        <div class="social-links">
          <q-btn
            v-for="link in socialLinks"
            :key="link.name"
            flat
            round
            :icon="link.icon"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            color="grey-1"
            class="social-btn"
            size="s"
          >
            <q-tooltip>{{ link.name }}</q-tooltip>
          </q-btn>
        </div>

        <div class="text-center text-weight-medium text-grey-1 developer-name">
          {{ developerName }}
        </div>

        <div class="text-grey-1 year-text">
          {{ currentYear }}
        </div>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface SocialLink {
  name: string
  url: string
  icon: string
}

const developerName = 'dumitory-dev'
const currentYear = computed(() => new Date().getFullYear())

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/dumitory-dev',
    icon: 'code',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/your-profile',
    icon: 'person',
  },
]
</script>

<style lang="scss">
.q-footer {
  .q-btn {
    &::before {
      box-shadow: none;
    }

    &:hover {
      .q-icon {
        transform: scale(1.1);
        transition: transform 0.3s ease;
      }
    }
  }

  @media (max-width: 600px) {
    .mobile-footer-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      padding: 4px 0;
    }

    .social-links {
      display: flex;
      gap: 4px;
    }

    .q-btn {
      padding: 4px;

      .q-icon {
        font-size: 16px;
      }
    }

    .developer-name {
      font-size: 0.85rem;
      line-height: 1;
      padding: 4px 0;
    }

    .year-text {
      font-size: 0.85rem;
      line-height: 1;
      padding: 4px 0;
    }
  }

  @media (min-width: 600px) {
    .mobile-footer-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
    }

    .social-links {
      display: flex;
      gap: 8px;
    }

    .q-btn {
      padding: 8px;
    }

    .developer-name,
    .year-text {
      font-size: 1rem;
    }
  }
}
</style>
