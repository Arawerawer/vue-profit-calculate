<script setup lang="ts">
import { computed } from "vue";
import { marked } from "marked";
import { useChatStore } from "@/store/chat";

const chatStore = useChatStore();

const formattedResponse = computed(() => {
  return marked(chatStore.response);
});
</script>

<template>
  <div
    class="dark:bg-gray-300 bg-gray-400 border-yellow-300 border-3 w-full h-full p-4 rounded-xl"
  >
    <div
      v-if="chatStore.response"
      class="text-gray-800 prose prose-sm message-content"
      v-html="formattedResponse"
    ></div>
    <div
      v-else-if="chatStore.isPending"
      class="text-gray-600 flex w-full h-full justify-center items-center"
    >
      AI 思考中...
    </div>
    <div
      v-else
      class="text-gray-600 flex w-full h-full justify-center items-center"
    >
      請輸入問題...
    </div>
  </div>
</template>

<style scoped>
/* 針對容易溢出的元素進行限制，並強制程式碼換行 */
.message-content :deep(pre) {
  white-space: pre-wrap; /* 允許程式碼自動換行 */
  word-break: break-word; /* 強制長單字斷行 */
}
</style>
