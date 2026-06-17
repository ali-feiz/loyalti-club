<template>
  <v-container>
    <v-card>
      <v-card-title>
        <div>{{ t("auth.login.homePage") }}</div>
      </v-card-title>

      <v-btn color="primary"> Primary Button </v-btn>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
