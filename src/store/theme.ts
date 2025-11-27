import { defineStore } from "pinia";
import { ref, watch } from "vue";

export type Theme = "light" | "dark";

export const useThemeStore = defineStore("theme", () => {
  // 從 localStorage 讀取使用者偏好，預設為 dark
  const savedTheme = localStorage.getItem("theme") as Theme | null;
  const theme = ref<Theme>(savedTheme || "dark");

  // 初始化時應用主題
  const applyTheme = (newTheme: Theme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // 切換主題
  const toggleTheme = () => {
    if (theme.value === "light") {
      theme.value = "dark";
    } else {
      theme.value = "light";
    }
  };

  // 監聽主題變化，自動應用並儲存
  watch(
    theme,
    (newTheme) => {
      applyTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    },
    { immediate: true }
  );

  return {
    theme,
    toggleTheme,
  };
});
