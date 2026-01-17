---
## 專案簡介

一款全端 Web 應用程式，採用前後端分離架構開發。前端使用 Vue 3 + TypeScript 建構 SPA 應用，後端使用 Express.js 作為 API 伺服器，並整合 OpenAI API 實現 AI 聊天功能。

應用程式透過 Server-Sent Events (SSE) 實現即時串流回應，讓 AI 回覆呈現打字效果。同時實作 PWA 技術，支援離線快取與裝置安裝，提供接近原生應用的使用體驗。
---

## 核心功能

### 1. 利潤試算系統（成本加成法 Markup）

採用成本加成法計算：`售價 = 成本 × (1 + 利潤率%)`

- 預設 20 種常用利潤率選項（5% - 100%），一鍵快速套用
- 支援自訂利潤百分比輸入
- 即時計算並顯示加成後價格
- 彩色邊框動態顯示當前選擇的利潤

### 2. AI 聊天助手

- 整合 OpenAI GPT-5.1 模型
- 實作 Server-Sent Events (SSE) 串流回應，呈現即時打字效果
- Markdown 格式化顯示，支援程式碼區塊
- 支援 `Ctrl/Cmd + Enter` 快速發送

### 3. PWA 功能

- 可安裝到裝置主畫面
- 離線快取支援
- 自動更新機制
- 跨平台兼容（iOS、Android、Desktop）

### 4. 其他特色

- 深色 / 亮色模式切換
- RWD 響應式設計，適配各種裝置尺寸
- 流暢的動畫與互動效果
- 漢堡選單側邊欄導航（行動裝置）

---

## 技術棧

### 前端

| 技術            | 版本    | 用途                       |
| --------------- | ------- | -------------------------- |
| Vue 3           | ^3.5.24 | 核心框架 (Composition API) |
| TypeScript      | ~5.9.3  | 類型安全                   |
| Vite            | ^7.2.2  | 建置工具                   |
| Pinia           | ^3.0.4  | 狀態管理                   |
| Vue Router      | ^4.6.3  | 路由管理                   |
| Tailwind CSS    | ^4.1.17 | 樣式框架                   |
| Marked          | ^17.0.1 | Markdown 渲染              |
| Iconify         | ^5.0.0  | 圖示庫                     |
| vite-plugin-pwa | ^1.2.0  | PWA 支援                   |

### 後端

| 技術               | 版本    | 用途         |
| ------------------ | ------- | ------------ |
| Express.js         | ^5.2.1  | Web 框架     |
| OpenAI SDK         | ^6.10.0 | GPT API 整合 |
| express-rate-limit | ^8.2.1  | API 限流     |
| CORS               | ^2.8.5  | 跨域處理     |
| dotenv             | ^17.2.3 | 環境變數管理 |

### 部署

- **前端：** Vercel（自動化部署）
- **後端：** Render（Node.js 環境）

---

## 專案結構

```
work-tool-project/
│
├── work-tool/                          # 前端 Vue 3 專案
│   ├── src/
│   │   ├── main.ts                     # 應用入口
│   │   ├── App.vue                     # 根元件
│   │   │
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── SelectButton.vue    # 利潤百分比選擇按鈕
│   │   │   │   └── NavigateButton.vue  # 導航按鈕
│   │   │   ├── SideBar.vue             # 側邊欄導航
│   │   │   ├── hamburger.vue           # 漢堡選單（行動端）
│   │   │   ├── ChatInput.vue           # AI 聊天輸入框
│   │   │   ├── MessageDisplay.vue      # AI 回應顯示區
│   │   │   ├── ProfitCalculatorForm.vue # 利潤計算表單
│   │   │   ├── CustomProfitForm.vue    # 自訂利潤輸入
│   │   │   ├── BorderColorCircle.vue   # 彩色邊框圓形顯示
│   │   │   └── ThemeToggle.vue         # 主題切換按鈕
│   │   │
│   │   ├── view/                       # 頁面元件
│   │   │   ├── HomeViewer.vue          # 首頁（利潤控制台）
│   │   │   ├── ProfitViewer.vue        # 利潤計算頁面
│   │   │   └── AiViewer.vue            # AI 聊天頁面
│   │   │
│   │   ├── api/                        # API 層
│   │   │   ├── client.ts               # Fetch 客戶端配置
│   │   │   └── chatgpt/                # ChatGPT API 模組
│   │   │
│   │   ├── store/                      # Pinia 狀態管理
│   │   │   ├── chat.ts                 # 聊天狀態 + SSE 處理
│   │   │   ├── profit.ts               # 利潤百分比狀態
│   │   │   └── theme.ts                # 主題狀態
│   │   │
│   │   └── router/                     # 路由配置
│   │
│   ├── public/                         # PWA 圖示
│   │   ├── icon-192.png
│   │   └── icon-512.png
│   │
│   └── vite.config.ts                  # Vite + PWA 配置
│
└── tool-server/                        # 後端 Express 伺服器
    ├── server.js                       # API 端點與 OpenAI 整合
    └── package.json
```

---

## 路由結構

| 路徑      | 頁面         | 功能              |
| --------- | ------------ | ----------------- |
| `/`       | HomeViewer   | 首頁 - 利潤控制台 |
| `/profit` | ProfitViewer | 利潤計算頁面      |
| `/ai`     | AiViewer     | AI 聊天助手       |

---

## API 端點

### POST `/chat-stream`

AI 聊天串流端點，使用 Server-Sent Events 回傳即時回應。

**請求格式：**

```json
{
  "prompt": "使用者的問題"
}
```

**回應格式（SSE）：**

```
data: {"content":"AI"}
data: {"content":"回應"}
data: {"content":"內容"}
data: [DONE]
```

**限流設定：** 100 次/天（全域共享）

---

## 本地開發

### 前端啟動

```bash
cd work-tool
npm install
npm run dev         # 開發模式 (localhost:5173)
```

### 後端啟動

```bash
cd tool-server
npm install
node server.js      # 啟動伺服器 (localhost:3000)
```

### PWA 測試

```bash
cd work-tool
npm run build       # 建置生產版本
npm run preview     # 預覽 PWA (localhost:4173)
```

---

## 環境變數

### 前端 (.env)

```bash
VITE_API_BASE_URL=http://localhost:3000  # 本地開發
# 或
VITE_API_BASE_URL=https://your-render-app.onrender.com  # 生產環境
```

### 後端 (.env)

```bash
OPENAI_API_KEY=your_openai_api_key
```

---

## 技術亮點

### 1. SSE 串流整合

採用 Server-Sent Events 實作 AI 回應串流，相較於 WebSocket，SSE 更輕量且適合單向資料推送，提供即時打字效果的使用者體驗。

```javascript
// 後端發送串流
for await (const chunk of stream) {
  res.write(`data: ${JSON.stringify({ content })}\n\n`);
}

// 前端解析串流
const reader = res.body?.getReader();
while (true) {
  const { done, value } = await reader.read();
  // 即時更新 UI
}
```

### 2. PWA 完整實作

- Service Worker 自動註冊與更新
- Web App Manifest 配置
- 多尺寸圖示適配
- 離線快取策略

### 3. 深暗模式

使用 Tailwind CSS 的 `dark:` 前綴搭配 Pinia 狀態管理，實現一鍵切換主題並持久化到 localStorage。

### 4. API 安全防護

- CORS 白名單限制（只允許指定網域）
- 每日請求次數限制（防止濫用）
- Trust Proxy 配置（支援反向代理）

### 5. TypeScript 全面覆蓋

前端使用 TypeScript 提供完整的型別檢查，確保程式碼品質與可維護性。

---

## 部署架構

```
┌─────────────────────────────────────────────┐
│              使用者瀏覽器                    │
│   (https://vue-profit-calculate.vercel.app) │
└──────────────────┬──────────────────────────┘
                   │
        ┌──────────▼──────────┐
        │   Vercel (前端)     │
        │   Vue 3 SPA + PWA   │
        └──────────┬──────────┘
                   │ API 請求
        ┌──────────▼──────────┐
        │   Render (後端)     │
        │   Express + 限流    │
        └──────────┬──────────┘
                   │
        ┌──────────▼──────────┐
        │   OpenAI API        │
        │   GPT-5.1 串流      │
        └─────────────────────┘
```

---

## 開發心得

此專案從實際需求出發，經歷了從簡單計算工具到整合 AI 功能的演進過程：

- 深入理解 PWA 技術原理與實作細節
- 掌握 SSE 串流協議在實時應用中的應用
- 學習前後端分離架構與 API 設計
- 實踐響應式設計與深暗模式
- 體會從使用者需求到技術實現的完整流程

---
