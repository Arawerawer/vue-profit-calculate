<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useProfitStore } from "@/store/profit";
import { useThemeStore } from "@/store/theme";
import Button from "@/components/ui/Button.vue";
import { Icon } from "@iconify/vue";

const router = useRouter();
const profitStore = useProfitStore();
const themeStore = useThemeStore();

let interval: number;

onMounted(() => {
  interval = profitStore.startBorderColorRotation();
});

onUnmounted(() => {
  clearInterval(interval);
});

const handleNavigateToCalculator = () => {
  profitStore.setSelectedPercentage(profitStore.activeButton || 0);
  router.push("/profit");
};
</script>

<template>
  <div class="w-full h-full flex flex-col p-4 space-y-4 overflow-auto">
    <header
      class="h-16 bg-white dark:bg-gray-700 rounded-2xl flex justify-between items-center px-4 gap-2"
    >
      <!-- 自訂利潤表單 -->
      <form
        @submit="profitStore.handleCustomProfitSubmit"
        class="flex items-center gap-2"
      >
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
            v-model="profitStore.customProfit"
            class="w-full py-1.5 pl-2 pr-4 rounded-2xl bg-gray-100 dark:bg-gray-800 text-black dark:text-yellow-400 border-2 border-yellow-500 text-center focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          class="px-4 py-1 bg-[#00FF00] rounded-2xl font-medium text-gray-800 text-lg hover:bg-[#00DD00] transition-colors whitespace-nowrap"
        >
          提交
        </button>
      </form>
      <!-- 亮暗模式切換 -->
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
      class="h-full bg-gray-300 dark:bg-gray-700 rounded-2xl p-4 overflow-auto flex flex-col"
    >
      <div class="flex-3">
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 h-full p-6 place-items-center"
        >
          <Button
            :key="percentage"
            v-for="percentage in profitStore.percentages"
            :onClick="() => profitStore.handleButtonClick(percentage)"
            :isActive="profitStore.activeButton === percentage"
          >
            {{ percentage }}%
          </Button>
        </div>
      </div>

      <div
        class="flex-1 w-full flex flex-col md:flex-row items-center justify-around gap-4 md:gap-0"
      >
        <div
          :class="[
            'w-32 h-32 md:w-40 md:h-40 rounded-full border-4 bg-gray-100 flex items-center justify-center transition-colors duration-500',
            profitStore.borderColors[profitStore.borderColorIndex],
          ]"
        >
          <h1
            :class="[
              'text-xl md:text-2xl font-bold transition-colors duration-500 overflow-auto',
              profitStore.textColors[profitStore.borderColorIndex],
            ]"
          >
            {{ profitStore.activeButton || 0 }}%
          </h1>
        </div>

        <button
          @click="handleNavigateToCalculator"
          class="py-4 px-6 md:py-10 md:px-30 bg-yellow-300 rounded-2xl font-extrabold text-xl md:text-2xl text-red-500 hover:bg-yellow-400 transition-colors flex items-center justify-center cursor-pointer whitespace-nowrap"
        >
          導向計算頁面
        </button>
      </div>
    </div>
  </div>
</template>
