<script setup lang="ts">
useSeo({
  title: 'Capital Square Đà Nẵng - Landing Page dự án',
  description:
    'Website SEO chuyên sâu 1 dự án: cập nhật tổng quan, vị trí, bảng giá, chính sách, pháp lý và blog phân tích thị trường Capital Square Đà Nẵng.',
  path: '/'
})

const { data } = await useFetch('/api/project/overview')
const keywordData = await useFetch('/api/project/keywords')

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Capital Square Đà Nẵng nằm ở đâu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dự án được giới thiệu tại giao điểm Trần Hưng Đạo và Ngô Quyền, quận Sơn Trà, TP. Đà Nẵng.'
      }
    },
    {
      '@type': 'Question',
      name: 'Website này có bán nhiều dự án không?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Không. Đây là website chuyên biệt cho duy nhất dự án Capital Square Đà Nẵng.'
      }
    }
  ]
}

useHead({
  script: [{ type: 'application/ld+json', children: JSON.stringify(faqJsonLd) }]
})
</script>

<template>
  <main>
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p style="font-weight:600;color:#1d4ed8;margin:0 0 .5rem">SEO LANDING PAGE CHUYÊN 1 DỰ ÁN</p>
          <h1>Capital Square Đà Nẵng</h1>
          <p>
            Kênh nội dung tập trung cho khách mua ở và đầu tư: cập nhật dữ liệu dự án, phân tích vị trí, bảng giá, chính sách,
            pháp lý và chiến lược khai thác dòng tiền.
          </p>
          <div style="display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1rem">
            <NuxtLink class="btn btn-primary" to="/bang-gia">Nhận bảng giá</NuxtLink>
            <NuxtLink class="btn btn-outline" to="/vi-tri">Phân tích vị trí</NuxtLink>
          </div>
          <div class="kpis" style="margin-top:1rem">
            <div class="kpi"><strong>{{ data?.project?.landArea }}</strong><br /> Quỹ đất tham chiếu</div>
            <div class="kpi"><strong>{{ data?.project?.towers }}</strong><br /> Quy mô cao tầng</div>
            <div class="kpi"><strong>{{ data?.project?.totalUnits }}</strong><br /> Tổng số căn</div>
          </div>
        </div>

        <LeadForm page="home" />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Thông tin tổng quan đã chuẩn hóa nội dung SEO</h2>
        <p class="section-subtitle">Dữ liệu được tổng hợp từ các website thị trường, cần đối chiếu hồ sơ pháp lý chính thức trước khi giao dịch.</p>
        <div class="card-grid">
          <article class="card"><strong>Vị trí</strong><p>{{ data?.project?.location }}</p></article>
          <article class="card"><strong>Chủ thể triển khai</strong><p>{{ data?.project?.investor }}</p></article>
          <article class="card"><strong>Sở hữu</strong><p>{{ data?.project?.legalOwnership }}</p></article>
        </div>
      </div>
    </section>

    <section class="section" style="background:#f8fafc">
      <div class="container">
        <h2 class="section-title">Cụm từ khóa triển khai SEO</h2>
        <div class="card-grid" style="grid-template-columns: 1fr">
          <article v-for="cluster in keywordData.data.value?.clusters || []" :key="cluster.cluster" class="card">
            <h3 style="margin-top:0">{{ cluster.cluster }} - {{ cluster.intent }}</h3>
            <p style="margin:0">{{ cluster.keywords.join(' • ') }}</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
