import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { i18n } from "@/core/i18n/setup";
import vuetify from "@/plugins/vuetify";

import "@/assets/styles/global.css";
import "@/assets/styles/tokens.css";
import "@/assets/styles/utilities.css";
import "@/assets/styles/typography-utilities.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(vuetify);

app.mount("#app");
