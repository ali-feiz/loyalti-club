import { createRouter, createWebHistory } from "vue-router";

import authRoutes from "@/modules/auth/router/auth.routes";
import dashboardRoutes from "@/modules/dashboard/router/dashboard.routes";

const router = createRouter({
  history: createWebHistory(),
  routes: [...authRoutes, ...dashboardRoutes],
});

export default router;
