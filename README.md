# Capital Square Đà Nẵng - SEO Website (Nuxt 3 + Ghost CMS)

Website chuyên biệt cho **1 dự án duy nhất** (không phải sàn BĐS): Capital Square Đà Nẵng.

## 1) Kiến trúc FE + BE
- **Frontend/SSR**: Nuxt 3.
- **SEO stack**: `@nuxtjs/seo` (Nuxt SEO) cho sitemap, robots, canonical site URL, schema-friendly setup.
- **Backend (trong Nuxt server)**: API nội bộ cho dữ liệu dự án, từ khóa SEO, nhận lead.
- **CMS**: Ghost CMS (Content API) cho blog.

## 2) Nâng cấp giao diện public-ready
- Hero lớn theo phong cách landing page BĐS Việt Nam: CTA nổi bật, form nhận bảng giá, số hotline luôn thấy.
- Section video tour + bản đồ/360, gallery ảnh lớn, khối tiện ích và khối chốt lead cuối trang.
- Nội dung được tổ chức theo funnel SEO và hành vi đọc thực tế của khách hàng Việt.

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

## 7) Nguồn tham khảo style & nội dung thị trường
- https://capitalsquare.vn/
- https://capitalsquarebrg.com.vn/
- https://vinhomeshvb.com/

## 8) Ghi chú bản quyền hình ảnh
Bản hiện tại dùng ảnh minh họa từ nguồn mở (Unsplash) để triển khai nhanh. Trước khi public chính thức, nên thay bằng ảnh/video có quyền sử dụng thương mại hoặc bộ media chính thức từ CĐT.
