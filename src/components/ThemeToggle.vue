<script setup lang="ts">
import { useThemeStore } from "@/store/theme";
import { Icon } from "@iconify/vue";

const themeStore = useThemeStore();
</script>

<template>
  <button
    @click="themeStore.toggleTheme"
    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
    :aria-label="
      themeStore.theme === 'light' ? '切換到暗色模式' : '切換到亮色模式'
    "
  >
    <Icon
      v-if="themeStore.theme === 'dark'"
      icon="line-md:sun-rising-loop"
      style="color: #eae729"
      class="w-10 h-10"
    />
    <Icon v-else icon="icon-park:moon" class="w-10 h-10" />
  </button>
</template>
