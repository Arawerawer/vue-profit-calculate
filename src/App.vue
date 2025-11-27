<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div class="h-screen flex bg-gray-100 dark:bg-gray-800">
    <SideBar class="w-1/5" />
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
