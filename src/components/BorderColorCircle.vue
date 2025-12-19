<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useProfitStore } from "@/store/profit";
import { ref } from "vue";

const profitStore = useProfitStore();

const borderColorIndex = ref(0);
const borderColors = [
  "border-red-500",
  "border-yellow-500",
  "border-blue-500",
  "border-green-500",
];
const textColors = [
  "text-red-700",
  "text-yellow-700",
  "text-blue-700",
  "text-green-700",
];

// 啟動顏色輪播（每 3 秒切換一次）
const startBorderColorRotation = () => {
  return setInterval(() => {
    borderColorIndex.value = (borderColorIndex.value + 1) % borderColors.length;
  }, 3000);
};

// 邊框顏色輪播
let interval: number;
onMounted(() => {
  interval = startBorderColorRotation();
});
onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <div
    :class="[
      'w-32 h-32 md:w-40 md:h-40 rounded-full border-4 bg-gray-100 flex items-center justify-center transition-colors duration-500',
      borderColors[borderColorIndex],
    ]"
  >
    <h1
      :class="[
        'text-xl md:text-2xl font-bold transition-colors duration-500 overflow-auto',
        textColors[borderColorIndex],
      ]"
    >
      {{ profitStore.profitPercentage || 0 }}%
    </h1>
  </div>
</template>
