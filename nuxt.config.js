import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'ほどよい合同会社',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/bootstrap.scss', '~/assets/css/app.scss'],

  build: {
    babel: {
      babelrc: false,
      compact: false,
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // ['bootstrap-vue/nuxt', { icons: true }],
    // '@nuxtjs/sitemap',
  ],

  // bootstrap-vue module
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
  },

  // sitemap module
  sitemap: {
    hostname: 'https://hodoyoi.net',
    gzip: true,
    exclude: ['/service/**'],
    routes: ['/about', '/contact', '/samples'],
  },
})
