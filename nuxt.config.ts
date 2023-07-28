// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    
    
    
   
  ],
  colorMode: {
    classSuffix: ''
  },
   // The private keys which are only available within server-side
  runtimeConfig: {
    OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
    API_BASE_URL: process.env.API_BASE_URL,
    API_ROOT_URL: process.env.API_ROO_URL,
    // Keys within public, will be also exposed to the client-side
    public: {
      OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
      API_BASE_URL: process.env.API_BASE_URL,
      API_ROOT_URL: process.env.API_ROOT_URL,
    },
  }, 
  
  plugins: [
    // '~/plugins/axios.js',
  ],

  

  
  
  
  
 
})
