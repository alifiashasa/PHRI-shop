// https://nuxt.com/docs/api/configuration/nuxt-config
import { type NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  devtools: { enabled: false },
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/moment"],
  modules: ["@nuxtjs/i18n", "@vee-validate/nuxt"],
  css: ["~/assets/css/main.css", "~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    defaultLocale: "id",
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        name: "English",
      },
      {
        code: "id",
        name: "Bahasa Indonesia",
      },
    ],
    strategy: "prefix_except_default",
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.VITE_APP_API_URL,
      apiKey: process.env.VITE_APP_API_KEY,
      baseUrl: process.env.VITE_APP_BASE_URL,
    },
  },
};

export default config;
