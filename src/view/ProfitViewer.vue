<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useProfitStore } from "@/store/profit";
import { useThemeStore } from "@/store/theme";
import { Icon } from "@iconify/vue";

const router = useRouter();
const profitStore = useProfitStore();
const themeStore = useThemeStore();

onMounted(() => {
  // 如果沒有選中的百分比，設置為默認值
  if (!profitStore.selectedPercentage) {
    profitStore.setSelectedPercentage(0);
  }
  // 重置計算器
  profitStore.resetCalculator();
});

const handleSubmit = (e: Event) => {
  e.preventDefault();
  profitStore.handleCalculate();
};

const handleBack = () => {
  router.push("/");
};
</script>

<template>
  <div class="w-full h-full flex flex-col p-4 space-y-4 overflow-auto">
    <header
      class="h-16 bg-white dark:bg-gray-700 rounded-2xl flex justify-end items-center px-4 gap-4"
    >
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
    </header>

    <div
      class="h-full bg-gray-100 dark:bg-gray-700 rounded-2xl p-4 flex items-center justify-center overflow-auto"
    >
      <form
        @submit="handleSubmit"
        class="w-full max-w-5xl px-6 py-4 bg-blue-500 dark:bg-gray-500/20 rounded-lg flex flex-col gap-6"
      >
        <h2 class="text-center text-[#00FF00] text-5xl">
          {{ profitStore.selectedPercentage }}%
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
            v-model="profitStore.inputPrice"
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
          {{ profitStore.outputPrice.toFixed(2) }}
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
    </div>
  </div>
</template>
