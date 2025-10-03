# LaLo Consult 網站設計計劃書

## 專案概述

**公司名稱**: LaLo Consult  
**業務性質**: 紐約註冊建築師，專精建築細部設計和規範  
**目標客戶**: 全球建築/室內設計公司  

---

## 網站目標

為 LaLo Consult 創建一個簡潔、專業的網站，展示兩大核心服務：
1. **圖紙和規範製作** (Drawing and Spec production)
2. **AI 驅動合約解決方案** (AI-powered Contracts solution)

主要訴求：成為客戶的即時資源，專注處理非創意性業務，讓客戶專注於創新設計和客戶關係。

---

## 設計原則 (根據 Mockup)

### 視覺風格
- **簡潔優先**: 背景色可以非常簡單，不需要特殊圖形
- **單一品牌色**: 選擇單一顏色作為品牌識別色
  - 首頁使用深灰色 (#2C3E50 或類似)
  - 服務頁面使用深紅酒色 (#8B1538 或類似)
- **白色內容區**: 主要內容區域使用白色背景，提供良好可讀性
- **字體選擇**: 優雅、簡潔、精準的字體

### Logo 設計
- **"LaLo Consult"** 作為公司名稱
- 需要設計一個 logo (目前使用文字 logo)
- Logo 應該簡單、專業、易於識別

---

## 網站結構

### 導航欄
固定在頂部，包含以下項目：
- **LaLo Consult** (Logo/品牌名稱)
- **About us** (關於我們)
- **Drawings and Spec** (圖紙與規範)
- **Contracts editing** (合約編輯)
- **Contact us** (聯絡我們)

---

## 頁面內容規劃

### 1. 首頁 / About Us Page

#### Hero Section
**標題**: "We are New York registered architects"

**主要內容**:
> We are New York registered architects specializing in architectural detailing and specifications. We help architectural/ interior design firms worldwide in two aspects:
> 
> • Drawing and Spec production.  
> • AI-powered Contracts solution.
> 
> In other words, we are a just-in-time resource focusing on the non-creative aspect of your business, freeing you to focus on innovative design and client relationships.

**設計要點**:
- 使用大量留白
- 背景色可以很簡單
- 字體清晰易讀

---

### 2. Drawings and Spec Page (圖紙與規範頁面)

**背景色**: 使用深紅酒色 (#8B1538) 作為品牌識別

#### Section 1: Working Drawing Production

**標題**: "Drawing and Spec production"

**子標題**: "Working Drawing production"

**內容**:
> Outsource your labor-intensive production work to our curated network of production facilities in China. We act as the single-source coordinator, so you do not deal with language and cultural barriers. We deliver to you drawing packages that adhere to American (Imperial) or European (Metric) conventions. Our output will be in English and will match your style and terminologies.

**配圖要求**:
- 4 張照片/圖片展示辦公室和圖紙
- 排列成近似矩形的網格 (2x2)
- 不要改變照片的長寬比
- 照片應展示：
  - 辦公室工作環境 (中國深圳/香港)
  - 技術圖紙範例
  - 建築產品目錄界面

#### Section 2: Building Products Research and Spec

**子標題**: "Building products research and spec"

**內容**:
> We research on building materials and then generate an Outline Spec based on the research. China offers an extensive catalog of unique building products that can provide your clients with distinctive alternatives and potential cost savings. We serve as your dedicated gateway to this valuable resource.

---

### 3. Contracts Editing Page (合約編輯頁面)

**背景色**: 使用深紅酒色 (#8B1538) 作為品牌識別

#### Section 1: AI-powered Contracts Solution

**標題**: "AI-powered Contracts solution"

**子標題**: "Contracts development, negotiation and risk management"

**內容**:
> The design industry faces inherent contractual risks due to fluid project scopes and complex deliverable definitions. Most design professionals lack formal legal training, creating additional vulnerability. Through our partnership with **Docgility** - a leader in AI-driven contract management—we help you identify contractual risks and produce finalized agreements with unprecedented speed and accuracy.

**關鍵元素**:
- "Docgility" 需要**加粗並加底線**
- 這是一個連結，指向 **www.docgility.com**
- 包含一個 Docgility 平台的截圖/模擬圖
- **重要**: 點擊截圖應該啟動一個視頻 (included in assets)

---

### 4. Contact Us Page (聯絡頁面)

**背景色**: 繼續使用深紅酒色保持品牌一致性

#### Section 1: Summary

**內容**:
> While numerous architectural outsourcing companies exist, few combine deep expertise in architectural detailing and specification with cutting-edge AI and legal contract management. In other words, we systematize your technical operations so you can concentrate on creativity and client development.

#### Section 2: Technical Specifications

**語言能力**:
- Language - for regular communication, product research and drawings production: English only.
- Language - for work on contracts, our AI platform works in multiple languages. This is of particular importance for international projects.

**技術平台**:
- Drawing platform – latest AutoCAD versions.
- AI platform – Docgility's Virtual Collaboration Network (VCN).

**設計標準**:
- Design standards - American (MasterSpec, ASTM etc.) and European (EN, BS etc.)

**工作地點**:
- Locations - drawing production in Hong Kong and Shenzhen of China. Our AI partner is a Palo Alto company.

#### Section 3: CTA (Call-to-Action)

**內容**:
> Transform your practice efficiency while maintaining design excellence. To discover how our specialized services can optimize your project delivery and risk management, CONTACT US:

#### Section 4: Contact Information

**Email 地址**:
- info@laloconsult.com
- stephenchiang@laloconsult.com

**QR Codes**:
- Whatsapp QR code (待提供)
- wechat QR code (待提供)

---

## 技術規格

### 核心技術
- **Framework**: Next.js 14 (已實現)
- **語言**: TypeScript (已實現)
- **樣式**: Tailwind CSS (已實現)
- **部署**: 靜態匯出到 Cloudflare Pages (已配置)

### 響應式設計
- 桌面優先 (Desktop-first)
- 平板和手機完全支援
- 導航欄在小螢幕上可摺疊

### 性能優化
- 靜態網站生成 (SSG)
- 圖片優化和懶加載
- 最小化 JavaScript bundle

---

## 內容資產需求

### Logo
- [ ] 設計 LaLo Consult logo
- [ ] 提供 SVG 和 PNG 格式
- [ ] 包含深色和淺色版本

### 圖片
- [ ] Drawings and Spec 頁面: 4 張工作環境/圖紙照片
- [ ] Docgility 平台截圖 (已有模擬圖)
- [ ] 可選: About us 頁面的團隊照片

### 視頻
- [ ] Docgility 平台展示視頻 (mentioned in mockup as "included")

### QR Codes
- [ ] Whatsapp QR code
- [ ] WeChat QR code

---

## 品牌識別色方案

### 方案建議

**選項 1: 深紅酒色主題** (根據 Mockup)
- 主色: `#8B1538` (深紅酒色)
- 深灰: `#2C3E50` (首頁使用)
- 白色: `#FFFFFF` (內容區)
- 文字: `#333333` (深灰文字)

**選項 2: 專業藍色主題**
- 主色: `#1E3A8A` (深藍色)
- 輔色: `#3B82F6` (亮藍色)
- 白色: `#FFFFFF`
- 文字: `#1F2937`

**選項 3: 現代綠色主題**
- 主色: `#065F46` (深綠色)
- 輔色: `#10B981` (亮綠色)
- 白色: `#FFFFFF`
- 文字: `#1F2937`

**推薦**: 選項 1 (深紅酒色)，因為與 mockup 一致，且能傳達專業、可靠的形象。

---

## 開發階段

### Phase 1: 基礎架構 ✅ (已完成)
- [x] Next.js 專案設置
- [x] TypeScript 配置
- [x] Tailwind CSS 集成
- [x] 基本路由結構
- [x] 靜態匯出配置

### Phase 2: 首頁/About Us 設計 ⏳ (進行中)
- [ ] 根據 mockup 重新設計 Hero section
- [ ] 實現簡潔的背景色方案
- [ ] 優化字體和排版
- [ ] 確保內容準確性

### Phase 3: Drawings and Spec 頁面 ⏳
- [ ] 實現深紅酒色背景主題
- [ ] 添加 Working Drawing Production 區塊
- [ ] 添加 Building Products Research 區塊
- [ ] 集成 4 張照片網格布局
- [ ] 確保照片長寬比不變

### Phase 4: Contracts Editing 頁面 ⏳
- [ ] 實現深紅酒色背景主題
- [ ] 添加 AI-powered Contracts 說明
- [ ] 實現 Docgility 連結 (加粗+底線)
- [ ] 集成 Docgility 截圖
- [ ] 實現視頻播放功能 (點擊截圖啟動)

### Phase 5: Contact Us 頁面 ⏳
- [ ] 實現深紅酒色背景主題
- [ ] 添加完整的技術規格資訊
- [ ] 集成 Email 連結
- [ ] 添加 QR codes (Whatsapp & WeChat)
- [ ] 實現 CTA 區塊

### Phase 6: Logo 設計 ⏳
- [ ] 設計或委託設計 logo
- [ ] 集成到所有頁面
- [ ] 更新 favicon

### Phase 7: 最終優化 ⏸️
- [ ] 跨瀏覽器測試
- [ ] 響應式設計測試
- [ ] 性能優化
- [ ] SEO 優化
- [ ] 可訪問性 (Accessibility) 檢查

### Phase 8: 部署 ⏸️
- [ ] 最終內容審查
- [ ] 部署到 Cloudflare Pages
- [ ] DNS 配置
- [ ] SSL 證書驗證
- [ ] 上線測試

---

## 設計細節注意事項

### 從 Mockup 學到的關鍵要點

1. **簡潔至上**
   - 背景色可以非常簡單，不需要複雜圖形
   - 大量使用留白
   - 字體排版清晰

2. **單一品牌色識別**
   - 選擇一個主色並貫穿全站
   - 使用白色內容區提供對比
   - 保持視覺一致性

3. **內容組織**
   - 清晰的區塊劃分
   - 標題層級分明
   - 重要資訊突出顯示

4. **照片處理**
   - 不要改變原始長寬比
   - 排列成矩形網格
   - 保持專業形象

5. **互動元素**
   - Docgility 連結需要明顯標示
   - 視頻可點擊播放
   - CTA 按鈕清晰可見

---

## 未來擴展可能

### 短期 (3-6 個月)
- [ ] 添加案例研究頁面 (Case Studies)
- [ ] 添加客戶推薦 (Testimonials)
- [ ] 集成聯絡表單後端 (Cloudflare Workers)
- [ ] 添加多語言支援 (中文繁體/簡體)

### 中期 (6-12 個月)
- [ ] 添加部落格/資源中心
- [ ] 實現客戶登入區域
- [ ] 整合專案管理工具
- [ ] 添加即時聊天支援

### 長期 (12+ 個月)
- [ ] 開發客戶入口網站
- [ ] 整合 Docgility API
- [ ] 實現自動報價系統
- [ ] 添加專案進度追蹤

---

## 成功指標

### 技術指標
- Lighthouse 性能分數 > 90
- 首次內容繪製 (FCP) < 1.5s
- 最大內容繪製 (LCP) < 2.5s
- 累積版面配置偏移 (CLS) < 0.1

### 業務指標
- 清晰傳達兩大核心服務
- 建立專業、可靠的品牌形象
- 促進潛在客戶聯絡
- 展示技術能力和國際視野

---

## 聯絡資訊

**Production Director**: Stephen Chiang AIA  
**Email**: stephenchiang@laloconsult.com  
**Company Email**: info@laloconsult.com  

---

## 附註

這份計劃書根據 2025 年 9 月 24 日的 Mockup 和業務範圍文件創建。網站的核心目標是展示 LaLo Consult 作為一站式建築技術服務提供商的獨特價值主張：結合深厚的建築專業知識與尖端 AI 技術，為全球設計公司提供系統化的技術支援。

**設計哲學**: 簡潔、專業、國際化。讓內容說話,讓技術能力自然展現。

