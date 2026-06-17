import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

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
    rtl: { fa: true },
  },
});
