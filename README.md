# Lalo Consult Website

這是一個使用 Next.js 建立的靜態網站，專為 Lalo Consult 顧問公司設計。

## 功能特色

- 響應式設計，支援各種裝置
- 靜態網站生成，適合部署到 Cloudflare Pages
- 現代化的 UI 設計
- 包含首頁、關於我們、聯絡我們等頁面

## 技術棧

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS (內建樣式)

## 本地開發

1. 安裝依賴：
```bash
npm install
```

2. 啟動開發伺服器：
```bash
npm run dev
```

3. 開啟瀏覽器訪問 [http://localhost:3000](http://localhost:3000)

## 建置和部署

### 建置靜態檔案
```bash
npm run build
```

### 部署到 Cloudflare Pages

1. 將程式碼推送到 GitHub
2. 在 Cloudflare Pages 中連接 GitHub 儲存庫
3. 設定建置命令：`npm run build`
4. 設定輸出目錄：`out`
5. 部署完成後，網站將自動更新

## 專案結構

```
├── pages/           # 頁面檔案
│   ├── index.tsx    # 首頁
│   ├── about.tsx    # 關於我們
│   ├── contact.tsx  # 聯絡我們
│   ├── _app.tsx     # 應用程式入口
│   └── _document.tsx # HTML 文件模板
├── components/      # 可重用元件
│   └── Layout.tsx   # 佈局元件
├── next.config.js   # Next.js 配置
├── package.json     # 專案依賴
└── tsconfig.json    # TypeScript 配置
```

## 自訂內容

您可以透過編輯以下檔案來自訂網站內容：

- `pages/index.tsx` - 首頁內容
- `pages/about.tsx` - 關於我們頁面
- `pages/contact.tsx` - 聯絡我們頁面
- `components/Layout.tsx` - 導航和頁腳

## 注意事項

- 此網站配置為靜態匯出，不支援伺服器端功能
- 所有樣式都使用內聯 CSS，無需額外的 CSS 檔案
- 適合部署到 CDN 和靜態網站託管服務