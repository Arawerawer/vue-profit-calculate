import { apiClient } from "../client";
import type { ChatRequest } from "./types";

// 發送聊天訊息 (回傳 Response 供 chat.ts 處理 SSE)
export const sendChatMessage = async (request: ChatRequest) => {
  const { data } = await apiClient.fetch("/chat-stream", request);
  return data;
};
