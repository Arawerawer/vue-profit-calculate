<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>

<template>
  <div class="h-screen flex bg-gray-100 dark:bg-gray-800">
    <div class="w-1/5 h-full py-4 pl-4 hidden lg:block">
      <SideBar />
    </div>

    <main class="flex-1">
      <RouterView />
      <VueQueryDevtools />
    </main>
  </div>
</template>

<style scoped></style>
