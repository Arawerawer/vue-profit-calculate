<script setup lang="ts">
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="h-full bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-y-auto custom-scrollbar"
  >
    <div class="flex items-center justify-center pt-6">
      <Icon
        icon="fa-solid:dragon"
        class="w-10 h-10 text-black hover:text-yellow-500 dark:text-yellow-500 dark:hover:text-white transition-colors duration-300 ease-in-out"
      />
    </div>

    <nav class="mt-12">
      <div>
        <!-- 標籤：控制台 -->
        <RouterLink
          class="w-full flex items-center p-4 my-2 hover:bg-linear-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800 hover:text-blue-500 text-gray-500 dark:text-gray-200 font-thin transition-colors duration-200 hover:border-r-4 border-blue-500"
          to="/"
        >
          <span class="text-left">
            <!-- TODO: 替換成實際的 DashboardSVG 組件 -->
            <Icon
              icon="mdi:controller"
              style="color: #cb29ea"
              class="w-10 h-10"
            />
          </span>

          <span class="mx-auto text-2xl font-normal">控制台</span>
        </RouterLink>

        <!-- 標籤：利潤試算 -->
        <RouterLink
          class="w-full flex items-center p-4 my-2 hover:bg-linear-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800 hover:text-blue-500 text-gray-500 dark:text-gray-200 font-thin transition-colors duration-200 hover:border-r-4 border-blue-500"
          to="/profit"
        >
          <span class="text-left">
            <!-- TODO: 替換成實際的 ProfitSVG 組件 -->
            <Icon icon="emojione:money-bag" class="w-10 h-10" />
          </span>

          <span class="mx-auto text-2xl font-normal">利潤試算</span>
        </RouterLink>

        <RouterLink
          class="w-full flex items-center p-4 my-2 hover:bg-linear-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800 hover:text-blue-500 text-gray-500 dark:text-gray-200 font-thin transition-colors duration-200 hover:border-r-4 border-blue-500"
          to="/ai"
        >
          <span class="text-left">
            <!-- TODO: 替換成實際的 ProfitSVG 組件 -->
            <Icon icon="streamline-emojis:robot-face-3" class="w-10 h-10" />
          </span>

          <span class="mx-auto text-2xl font-normal">聊天機器人</span>
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
