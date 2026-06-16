import { createI18n } from "vue-i18n";

// modules
import faAuth from "@/modules/auth/i18n/fa";
import enAuth from "@/modules/auth/i18n/en";

const messages = {
  fa: {
    auth: faAuth,
  },
  en: {
    auth: enAuth,
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "fa",
  fallbackLocale: "en",
  messages,
});
