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
      class="flex-1 py-1.5 pl-2 pr-4 rounded-2xl bg-white border-2 border-yellow-500 focus:outline-none min-h-[38px] overflow-hidden"
    />
    <button
      type="submit"
      :disabled="chatStore.isPending || !inputText.trim()"
      class="px-6 py-1.5 bg-yellow-500 text-white rounded-2xl hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
    >
      發送
    </button>
  </form>
</template>
