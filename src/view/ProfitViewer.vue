<script setup lang="ts">
//components
import ThemeToggle from "@/components/ThemeToggle.vue";
import ProfitCalculatorForm from "@/components/ProfitCalculatorForm.vue";
import Hamburger from "@/components/hamburger.vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="w-full h-full flex flex-col p-4 space-y-4 overflow-auto">
    <header
      class="h-16 bg-white dark:bg-gray-700 rounded-2xl flex justify-between lg:justify-end items-center px-4 gap-4"
    >
      <Hamburger class="lg:hidden" />

      <Icon icon="emojione:money-bag" class="w-10 h-10 lg:hidden" />

      <ThemeToggle />
    </header>

    <div
      class="h-full bg-white dark:bg-gray-700 rounded-2xl p-4 flex items-center justify-center overflow-auto"
    >
      <ProfitCalculatorForm />
    </div>
  </div>
</template>
