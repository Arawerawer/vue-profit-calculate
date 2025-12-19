import { defineStore } from "pinia";
import { ref } from "vue";
import { sendChatMessage } from "@/api";
import type { ChatRequest } from "@/api";

export const useChatStore = defineStore("chat", () => {
  const response = ref("");
  const isPending = ref(false);

  const sendMessage = async (request: ChatRequest) => {
    isPending.value = true; // 設定載入狀態為 true，禁用發送按鈕
    response.value = ""; // 清空之前的回應內容

    try {
      const res = await sendChatMessage(request); // 呼叫 API，取得 Response 物件
      const reader = res.body?.getReader(); // 取得 ReadableStream 的讀取器
      if (!reader) throw new Error("無法讀取回應"); // 如果沒有 reader，拋出錯誤

      const decoder = new TextDecoder(); // 建立 UTF-8 解碼器，將 binary 轉為文字

      while (true) {
        // 無限迴圈，持續讀取串流
        const { done, value } = await reader.read(); // 讀取一個資料塊 (chunk)
        if (done) break; // 如果串流結束，跳出迴圈

        const chunk = decoder.decode(value); // 將 Uint8Array 解碼成字串
        const matches = chunk.matchAll(/data: ({.*?})/g); // 用正則找出所有 "data: {...}" 格式

        for (const match of matches) {
          // 遍歷每一個匹配到的 JSON
          try {
            const json = match[1]; // 取出 JSON 字串部分（去掉 "data: "）
            if (!json) continue; // 如果沒有內容，跳過
            const { content } = JSON.parse(json); // 解析 JSON，取出 content
            if (content) response.value += content; // 如果有內容，累加到 response
          } catch {} // 忽略 JSON 解析錯誤（例如空行或格式錯誤）
        }

        if (chunk.includes("[DONE]")) return; // 如果收到結束訊號，直接返回
      }
    } catch (error) {
      console.error("API 錯誤:", error); // 將錯誤輸出到瀏覽器 console
      response.value = "伺服器錯誤"; // 顯示錯誤訊息給使用者
    } finally {
      isPending.value = false; // 無論成功或失敗，都恢復按鈕可用狀態
    }
  };

  return {
    response,
    sendMessage,
    isPending,
  };
});
