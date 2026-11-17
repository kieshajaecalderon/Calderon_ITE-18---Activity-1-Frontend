export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  postcss: {
    plugins: {
      'tailwindcss/nesting': false,
    },
  },
})