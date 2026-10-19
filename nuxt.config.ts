// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    'nuxt-lottie'
  ],
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  lottie: {
    componentName: 'Lottie', // Optional: Customize the component name
    lottieFolder: '/assets/lottie', // Optional: Customize the Lottie folder path
    autoFolderCreation: true, // Optional: Auto create lottie folder (default: true)
    enableLogs: true, // Optional: Enable console logs from module (default: true)
    defaults: {
      // Optional: Set default prop values for all <Lottie> instances
      loop: false,
      autoplay: false
    }
  }
})
