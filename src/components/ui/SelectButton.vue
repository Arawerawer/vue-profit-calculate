<script setup lang="ts">
import { useProfitStore } from "@/store/profit";

const profitStore = useProfitStore();

// 預設百分比選項 (5%, 10%, ..., 100%)
const percentages = Array.from({ length: 20 }, (_, i) => (i + 1) * 5);

// 點擊百分比按鈕
const handleButtonClick = (percentage: number) => {
  if (profitStore.profitPercentage === percentage) {
    profitStore.profitPercentage = 0; // 取消選取
  } else {
    profitStore.profitPercentage = percentage; // 選取新的百分比
  }
};
</script>

<template>
  <button
    :key="percentage"
    v-for="percentage in percentages"
    @click.stop="handleButtonClick(percentage)"
    :class="[
      'rounded-lg bg-gray-200 py-3 px-6 font-sans text-xl font-bold text-black shadow-md transition-shadow ease-in-out duration-500 hover:shadow-lg hover:shadow-yellow-500 focus:shadow-xl focus:shadow-yellow-500 cursor-pointer',
      profitStore.profitPercentage === percentage
        ? 'ring-4 ring-blue-500'
        : 'focus:shadow-none',
    ]"
  >
    {{ percentage }}%
  </button>
</template>
