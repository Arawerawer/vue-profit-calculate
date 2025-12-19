<script setup lang="ts">
import { useProfitStore } from "@/store/profit";
import { useRouter } from "vue-router";
import { ref } from "vue";

const profitStore = useProfitStore();
const router = useRouter();

// 輸入的原價
const inputPrice = ref<number | null>(null);
// 計算後的售價
const outputPrice = ref<number>(0);

const handleCalculate = () => {
  if (inputPrice.value !== null) {
    const result =
      inputPrice.value * (1 + profitStore.profitPercentage / 100);
    outputPrice.value = result;
  }
};

const handleSubmit = (e: Event) => {
  e.preventDefault();
  handleCalculate();
};

const handleBack = () => {
  router.push("/");
};
</script>

<template>
  <form
    @submit="handleSubmit"
    class="w-full max-w-5xl px-6 py-4 bg-blue-500 dark:bg-gray-500/20 rounded-lg flex flex-col gap-6"
  >
    <h2 class="text-center text-[#00FF00] text-5xl">
      {{ profitStore.profitPercentage }}%
    </h2>

    <div>
      <label
        for="InputPrice"
        class="block mb-2 text-2xl font-medium text-white text-center"
      >
        輸入價格
      </label>

      <input
        type="number"
        id="InputPrice"
        v-model.number="inputPrice"
        class="w-full p-2 text-2xl text-center rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
        required
      />
    </div>

    <label
      for="OutputPrice"
      class="block text-2xl font-medium text-white text-center"
    >
      輸出價格
    </label>

    <h1
      class="w-full p-2 text-3xl text-center rounded-xl bg-gray-700 border-gray-600 text-white placeholder-gray-400 ring-5 ring-blue-500"
    >
      {{ Math.round(outputPrice) }}
    </h1>

    <button
      type="submit"
      class="w-full py-4 text-2xl font-semibold bg-[#00FF00] rounded-2xl hover:bg-[#00DD00] transition-colors"
    >
      計算
    </button>

    <button
      type="button"
      @click="handleBack"
      class="py-4 px-6 bg-yellow-300 rounded-2xl font-extrabold text-2xl text-red-500 hover:bg-yellow-400 transition-colors flex items-center justify-center cursor-pointer"
    >
      返回控制台
    </button>
  </form>
</template>
