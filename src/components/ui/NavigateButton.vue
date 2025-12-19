<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleNavigateToCalculator = () => {
  router.push("/profit");
};
</script>

<template>
  <button
    @click="handleNavigateToCalculator"
    class="py-4 px-6 md:py-10 md:px-30 bg-yellow-300 rounded-2xl font-extrabold text-xl md:text-2xl text-red-500 hover:bg-yellow-400 transition-colors flex items-center justify-center cursor-pointer whitespace-nowrap"
  >
    導向計算頁面
  </button>
</template>
