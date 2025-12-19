import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { queryClient } from "@/lib/queryClient";

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);
app.use(router);

app.use(VueQueryPlugin);
app.use(VueQueryPlugin, {
  queryClient,
});

// 初始化主題（在應用掛載前）

app.mount("#app");
