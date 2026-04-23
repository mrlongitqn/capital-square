<script setup lang="ts">
useSeo({
  title: 'Blog SEO Capital Square Đà Nẵng',
  description: 'Cụm bài viết chiến lược: thương hiệu dự án, vị trí, pháp lý, đầu tư và thị trường căn hộ Đà Nẵng.',
  path: '/blog'
})

const { data, pending, error } = await useFetch('/api/blog/posts')

const suggestedTopics = [
  'Capital Square Đà Nẵng có phù hợp đầu tư cho thuê 2026?',
  'So sánh căn hộ ven sông Hàn và ven biển: ưu tiên dòng tiền hay tăng giá?',
  'Checklist pháp lý khi mua căn hộ hình thành trong tương lai tại Đà Nẵng',
  'Chiến lược đàm phán giá và chọn giỏ hàng theo mục tiêu tài chính'
]
</script>

<template>
  <main>
    <PageHero title="Blog dự án & thị trường" description="Nội dung blog giúp kéo SEO TOFU-MOFU-BOFU và điều hướng về trang chuyển đổi." />

    <section class="section">
      <div class="container">
        <h2 class="section-title">Chủ đề SEO nên triển khai hằng tuần</h2>
        <div class="card-grid" style="grid-template-columns:1fr">
          <article v-for="topic in suggestedTopics" :key="topic" class="card">{{ topic }}</article>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top:0">
      <div class="container">
        <h2 class="section-title">Bài viết từ Ghost CMS</h2>
        <p v-if="pending">Đang tải bài viết...</p>
        <p v-else-if="error">Không thể tải bài viết từ Ghost CMS. Vui lòng kiểm tra cấu hình API.</p>
        <div v-else class="card-grid">
          <NuxtLink v-for="post in data?.posts || []" :key="post.slug" :to="`/blog/${post.slug}`" class="card">
            <h3 style="margin-top:0">{{ post.title }}</h3>
            <p style="color:#64748b">{{ post.excerpt }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>
