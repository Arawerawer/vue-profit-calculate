<script setup lang="ts">
import { useProfitStore } from "@/store/profit";
import { ref } from "vue";

const profitStore = useProfitStore();

// 自訂利潤輸入值
const customProfit = ref<number | null>(null);

// 提交自訂利潤
const handleCustomProfitSubmit = (e: Event) => {
  e.preventDefault();
  if (customProfit.value !== null && customProfit.value >= 0) {
    profitStore.profitPercentage = customProfit.value;
    customProfit.value = null;
  }
};
</script>

<template>
  <form @submit="handleCustomProfitSubmit" class="flex items-center gap-2">
    <label
      for="customProfitInput"
      class="text-gray-700 dark:text-gray-300 font-medium text-lg whitespace-nowrap"
    >
      自訂利潤：
    </label>

    <div class="max-w-md">
      <input
        type="number"
        id="customProfitInput"
        v-model.number="customProfit"
        class="w-full py-1.5 pl-2 pr-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-black dark:text-yellow-400 border-2 border-transparent text-center focus:outline-none focus:border-yellow-500 transition-colors"
      />
    </div>

    <button
      type="submit"
      class="px-4 py-1 bg-[#00FF00] rounded-2xl font-medium text-gray-800 text-lg hover:bg-[#00DD00] transition-colors whitespace-nowrap"
    >
      提交
    </button>
  </form>
</template>
