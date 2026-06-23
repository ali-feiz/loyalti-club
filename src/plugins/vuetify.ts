import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/600.css";
import "@fontsource/vazirmatn/700.css";

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { lightTheme } from "@/core/theme/light.theme";

export default createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme,
    },
  },

  locale: {
    locale: "fa",
    fallback: "en",
    rtl: { fa: true, en: false },
  },

  defaults: {
    global: {
      style: {
        fontFamily: "Vazirmatn, sans-serif",
      },
    },
  },
});
