import { defineStore } from "pinia";
import { ref } from "vue";

export const useProfitStore = defineStore("profit", () => {
  // 當前選中的利潤百分比
  const profitPercentage = ref<number>(0);

  return {
    profitPercentage,
  };
});
