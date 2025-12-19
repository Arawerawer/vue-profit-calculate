import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/view/HomeViewer.vue"),
  },
  {
    path: "/profit",
    name: "Profit",
    component: () => import("@/view/ProfitViewer.vue"),
  },
  {
    path: "/ai",
    name: "AI",
    component: () => import("@/view/AiViewer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
