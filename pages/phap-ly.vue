<script setup lang="ts">
useSeo({
  title: 'Pháp lý Capital Square Đà Nẵng',
  description: 'Checklist pháp lý cần kiểm tra trước giao dịch: quy hoạch, giấy phép, hợp đồng mẫu, tiến độ nghiệm thu.',
  path: '/phap-ly'
})

const docs = [
  'Phê duyệt quy hoạch chi tiết / điều chỉnh quy hoạch',
  'Giấy phép xây dựng và thông báo đủ điều kiện mở bán (nếu có)',
  'Hợp đồng mua bán mẫu và phụ lục phí quản lý - vận hành',
  'Cam kết tiến độ bàn giao, bảo hành, sở hữu theo quy định hiện hành'
]
</script>

<template>
  <main>
    <PageHero title="Trang pháp lý" description="Khu vực cập nhật tài liệu pháp lý theo checklist để giảm rủi ro cho khách hàng." />
    <section class="section">
      <div class="container card-grid" style="grid-template-columns:1fr">
        <article v-for="item in docs" :key="item" class="card">{{ item }}</article>
      </div>
    </section>
  </main>
</template>
