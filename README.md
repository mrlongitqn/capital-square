# Capital Square Đà Nẵng - SEO Website (Nuxt 3 + Ghost CMS)

Website chuyên biệt cho **1 dự án duy nhất** (không phải sàn BĐS): Capital Square Đà Nẵng.

## 1) Kiến trúc FE + BE
- **Frontend/SSR**: Nuxt 3.
- **SEO stack**: `@nuxtjs/seo` (Nuxt SEO) cho sitemap, robots, canonical site URL, schema-friendly setup.
- **Backend (trong Nuxt server)**: API nội bộ cho dữ liệu dự án, từ khóa SEO, nhận lead.
- **CMS**: Ghost CMS (Content API) cho blog.

## 2) Các phần đã hoàn thiện
- Landing page chuyển đổi + các trang trụ cột SEO: Tổng quan, Vị trí, Bảng giá, Chính sách, Pháp lý.
- Blog page theo funnel TOFU/MOFU/BOFU và đọc bài từ Ghost API.
- Lead form FE nối trực tiếp về endpoint BE.
- Dữ liệu nội dung/keyword cluster nằm ở server để dễ quản trị.

## 3) Cấu hình môi trường
```env
SITE_URL=https://capital-square-danang.vn
GHOST_URL=https://your-ghost-domain.com
GHOST_CONTENT_KEY=your_ghost_content_key
```

## 4) Endpoints backend
- `GET /api/project/overview`
- `GET /api/project/keywords`
- `POST /api/leads/submit`

## 5) SEO với NuxtSeo
- Module `@nuxtjs/seo` được bật trong `nuxt.config.ts`.
- Sitemap được cấp dữ liệu từ endpoint: `GET /api/__sitemap__/urls`.
- Robots/sitemap được quản lý tự động qua cấu hình Nuxt SEO.

## 6) Chạy bằng Docker (FE + BE + Ghost + MySQL)
### Build và chạy
```bash
docker compose up -d --build
```

### Truy cập
- Nuxt app: http://localhost:3000
- Ghost Admin: http://localhost:2368/ghost
- Ghost site: http://localhost:2368

### Tắt hệ thống
```bash
docker compose down
```

## 7) Nguồn tham khảo nội dung thị trường
Thông tin tổng hợp từ các website thị trường để xây dựng cấu trúc content SEO; cần đối chiếu tài liệu pháp lý chính thức trước khi giao dịch.
- https://www.capital-square.vn/
- https://capitalsquarevietnam.com/
- https://capitalsquaredanangs.com.vn/
