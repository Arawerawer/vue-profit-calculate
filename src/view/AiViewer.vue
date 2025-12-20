<script setup lang="ts">
import ThemeToggle from "@/components/ThemeToggle.vue";
import MessageDisplay from "@/components/MessageDisplay.vue";
import ChatInput from "@/components/ChatInput.vue";
import Hamburger from "@/components/hamburger.vue";
</script>

<template>
  <div class="w-full h-full flex flex-col p-4 space-y-4 overflow-auto">
    <header
      class="h-16 bg-white dark:bg-gray-700 rounded-2xl flex justify-between lg:justify-end items-center px-4 gap-4"
    >
      <Hamburger class="lg:hidden" />

      <ThemeToggle />
    </header>

    <div
      class="h-full bg-white dark:bg-gray-700 rounded-2xl p-4 flex flex-col items-center overflow-auto"
    >
      <!-- 消息展示區 -->
      <div class="flex-9 w-full p-4">
        <MessageDisplay />
      </div>

      <!-- 輸入區域 -->
      <div class="flex-1 w-full p-4">
        <ChatInput />
      </div>
    </div>
  </div>
</template>
