// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["./assets/css/tailwind.css"],

   app: {
    head: {
      title: 'Yoofi & Matekuor — Our Wedding | 30th August 2025',
      meta: [
        { name: 'description', content: 'Join us as we celebrate a beautiful journey of love, laughter, and forever. Yoofi & Matekuor are getting married on August 30th, 2025. 11 AM. Save the date, explore our story, and be part of the celebration.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        // Open Graph (Facebook, LinkedIn)
        { property: 'og:title', content: 'Yoofi & Matekuor — Our Wedding | 30th August 2025' },
        { property: 'og:description', content: 'Join us as we celebrate a beautiful journey of love, laughter, and forever. Yoofi & Matekuor are getting married on August 30th, 2025. 11 AM. Save the date, explore our story, and be part of the celebration.' },
        { property: 'og:image', content: 'https://graham.africa/images/preview.jpg' },
        { property: 'og:url', content: 'https://graham.africa' },
        { property: 'og:image:width', content: '1080' },
        { property: 'og:image:height', content: '1350' },  // taller ratio for mobile
        { property: 'og:type', content: 'website' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Yoofi & Matekuor — Our Wedding | 30th August 2025' },
        { name: 'twitter:description', content: 'Join us as we celebrate a beautiful journey of love, laughter, and forever. Yoofi & Matekuor are getting married on August 30th, 2025. 11 AM. Save the date, explore our story, and be part of the celebration.' },
        { name: 'twitter:image', content: 'https://graham.africa/images/preview.jpg' }

        
      ]
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/image"],
});