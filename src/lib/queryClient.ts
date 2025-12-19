import { QueryClient } from "@tanstack/vue-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 快取 5 分鐘
      staleTime: 1000 * 60 * 5,
      // 切回視窗不重抓
      refetchOnWindowFocus: false,
    },
  },
});
