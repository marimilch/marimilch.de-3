// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    pageTransition: {
      onEnter(_el, done) {
        done();
      },
    },
  },
});
