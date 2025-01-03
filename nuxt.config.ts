import type { NuxtPage } from 'nuxt/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config/
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: [
    '@unocss/reset/tailwind-compat.css',
  ],
  // https://devtools.nuxt.com/
  devtools: {
    enabled: true,
  },
  // https://eslint.nuxt.com/
  eslint: {
    config: {
      standalone: false,
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    'nuxt-lodash',
    'nuxtjs-naive-ui',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
          'storeToRefs',
        ],
      },
    ],
  ],
})
