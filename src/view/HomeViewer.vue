<script setup lang="ts">
//component
import SelectButton from "@/components/ui/SelectButton.vue";
import CustomProfitForm from "@/components/CustomProfitForm.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";
import BorderColorCircle from "@/components/BorderColorCircle.vue";
import NavigateButton from "@/components/ui/NavigateButton.vue";
import Hamburger from "@/components/hamburger.vue";
</script>

<template>
  <div class="w-full h-full flex flex-col p-4 space-y-4 overflow-auto">
    <header
      class="h-16 bg-white dark:bg-gray-700 rounded-2xl flex justify-between items-center px-4 gap-2"
    >
      <Hamburger class="lg:hidden" />
      <!-- 自訂利潤表單 -->
      <CustomProfitForm class="hidden lg:flex" />

      <!-- 亮暗模式切換 -->
      <ThemeToggle />
    </header>

    <div
      class="h-full bg-gray-300 dark:bg-gray-700 rounded-2xl p-4 overflow-auto flex flex-col"
    >
      <section class="flex-3">
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 h-full p-6 place-items-center"
        >
          <SelectButton />
        </div>
      </section>

      <section class="flex-1">
        <div
          class="w-full flex flex-col md:flex-row items-center justify-around gap-4 md:gap-0"
        >
          <BorderColorCircle />

          <NavigateButton />
        </div>
      </section>
    </div>
  </div>
</template>
