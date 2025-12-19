> 這是一款集成利潤試算與 AI 助手的漸進式 Web 應用程式 (PWA)

**線上預覽：** [https://vue-profit-calculate.vercel.app]

---

## 核心功能

### 1. 利潤試算系統

- 預設多種常用利潤率選項，快速套用
- 支援自訂利潤百分比
- 即時計算並顯示加成後價格
- 計算結果複製功能，方便轉貼到報價單

### 2. AI 聊天助手

- 整合 OpenAI GPT-5.1 模型
- 實作 Server-Sent Events (SSE) 串流回應
- Markdown 格式化顯示，支援程式碼高亮
- 友善的對話介面設計

### 3. PWA 功能

- 可安裝到裝置主畫面
- 離線快取支援
- 自動更新機制
- 跨平台兼容（iOS、Android、Desktop）

### 4. 其他特色

- 深色模式支援
- RWD 響應式設計，適配各種裝置尺寸
- 流暢的動畫與互動效果
- 漢堡選單側邊欄導航

### 前端

- **框架：** Vue 3 (Composition API + TypeScript)
- **建置工具：** Vite
- **狀態管理：** Pinia
- **路由：** Vue Router
- **樣式：** Tailwind CSS
- **圖示：** Iconify
- **PWA：** vite-plugin-pwa
- **Markdown 渲染：** Marked

### 後端

- **框架：** Express.js
- **AI 整合：** OpenAI API (GPT-5.1)
- **API 限流：** express-rate-limit
- **跨域處理：** CORS
- **串流協議：** Server-Sent Events (SSE)

### 部署

- **前端：** Vercel
- **後端：** Render
- **環境變數管理：** dotenv

---

## 專案結構

```
work-tool-project/
├── work-tool/              # 前端 Vue 3 專案
│   ├── src/
│   │   ├── components/     # 可重用元件
│   │   ├── view/          # 頁面元件
│   │   ├── store/         # Pinia 狀態管理
│   │   └── router/        # 路由配置
│   ├── public/            # 靜態資源（PWA icons）
│   └── vite.config.ts     # Vite 配置（含 PWA 設定）
│
└── tool-server/           # 後端 Express 伺服器
    └── server.js          # API 端點與 OpenAI 整合
```

## 技術亮點

### 1. 漸進式 Web 應用 (PWA)

實作 PWA 功能，讓 Web 應用具備原生 App 體驗。

### 2. SSE 串流整合

採用 Server-Sent Events 實作 AI 回應串流，相較於傳統的輪詢或 WebSocket，SSE 更輕量且適合單向資料推送，提供即時打字效果的使用者體驗。

### 3. 狀態管理最佳實踐

使用 Pinia 進行集中式狀態管理，分離利潤計算邏輯與 AI 聊天狀態，保持代碼可維護性。

### 4. API 安全與限流

實作 CORS 白名單限制與每日請求次數限制，防止 API 濫用與資源耗盡。

### 5. TypeScript 類型安全

前端全面採用 TypeScript，提供編譯時期的型別檢查，降低執行時期錯誤。

---

## 開發心得

此專案從實際需求出發，經歷了從簡單計算工具到整合 AI 功能的演進過程。透過此專案：

- 深入理解 PWA 技術原理與實作細節
- 掌握 SSE 串流協議在實時應用中的應用
- 學習前後端分離架構與 API 設計
- 實踐響應式設計
- 體會從使用者需求到技術實現的完整流程

---

## 未來規劃

- [ ] 新增使用者認證系統
- [ ] 優化 AI 回應快取機制
- [ ] 加入資料匯出功能（PDF/Excel）
