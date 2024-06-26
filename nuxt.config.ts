// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        "@nuxt/ui",
        "@nuxtjs/google-fonts"
    ],
    googleFonts: {
        families: {
            "Noto Sans JP": true
        }
    }
})
