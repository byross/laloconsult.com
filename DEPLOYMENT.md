# Cloudflare Pages 部署設定

## 環境變數設定

在 Cloudflare Pages 專案設定中，需要設定以下環境變數：

### GitHub Secrets
- `CLOUDFLARE_API_TOKEN`: Cloudflare API Token
- `CLOUDFLARE_ACCOUNT_ID`: Cloudflare Account ID

## 建置設定

- **建置命令**: `npm run build`
- **輸出目錄**: `out`
- **Node.js 版本**: 18

## 部署步驟

1. 在 Cloudflare Dashboard 中建立新的 Pages 專案
2. 連接 GitHub 儲存庫
3. 設定建置命令和輸出目錄
4. 設定環境變數
5. 部署完成

## 自訂網域

部署完成後，可以在 Cloudflare Pages 設定中新增自訂網域。

## 注意事項

- 確保 GitHub Actions 有適當的權限
- API Token 需要有 Pages 的讀寫權限
- 每次推送到 main 分支都會觸發自動部署
