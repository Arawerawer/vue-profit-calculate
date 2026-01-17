<script setup lang="ts">
import { ref } from "vue";
import { useChatStore } from "@/store/chat";

const chatStore = useChatStore();
const inputText = ref("");

const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (inputText.value.trim() && !chatStore.isPending) {
    chatStore.sendMessage({ prompt: inputText.value });
    inputText.value = "";
  }
};

// 處理鍵盤事件：Ctrl/Cmd + Enter 發送
const handleKeydown = (e: KeyboardEvent) => {
  const isCtrlOrCmdEnter = (e.ctrlKey || e.metaKey) && e.key === "Enter";
  if (!isCtrlOrCmdEnter) return;

  e.preventDefault();

  const canSend = inputText.value.trim() && !chatStore.isPending;
  if (!canSend) return;

  chatStore.sendMessage({ prompt: inputText.value });
  inputText.value = "";
};
</script>

<template>
  <form
    @submit="handleSubmit"
    class="h-full w-full flex justify-center items-center gap-2"
  >
    <textarea
      v-model="inputText"
      placeholder="輸入訊息...(Ctrl/Cmd + Enter 發送）"
      :disabled="chatStore.isPending"
      @keydown="handleKeydown"
      rows="1"
      class="flex-1 py-2.5 px-4 rounded-2xl bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 min-h-11 overflow-hidden transition-all"
    />
    <button
      type="submit"
      :disabled="chatStore.isPending || !inputText.trim()"
      class="px-6 py-2.5 bg-yellow-500 text-white font-medium rounded-2xl hover:bg-yellow-400 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-all"
    >
      發送
    </button>
  </form>
</template>
