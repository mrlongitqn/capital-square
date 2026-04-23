<script setup lang="ts">
useSeo({
  title: 'Capital Square Đà Nẵng - Trang thông tin dự án chính thức',
  description:
    'Landing page chuẩn SEO cho Capital Square Đà Nẵng: tổng quan, vị trí, tiện ích, mặt bằng, bảng giá, chính sách và pháp lý.',
  path: '/'
})

const { data } = await useFetch('/api/project/overview')
const keywordData = await useFetch('/api/project/keywords')

const amenityBlocks = [
  { title: 'Hồ bơi vô cực', desc: 'Tầm nhìn trực diện sông Hàn, phù hợp phân khúc cư dân cao cấp.' },
  { title: 'Sky Garden', desc: 'Không gian xanh trên cao đáp ứng xu hướng sống wellness.' },
  { title: 'Clubhouse', desc: 'Khu sinh hoạt cộng đồng, lounge cư dân và business corner.' },
  { title: 'Shophouse khối đế', desc: 'Tăng trải nghiệm mua sắm - ẩm thực - giải trí trong nội khu.' }
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Capital Square Đà Nẵng phù hợp để ở hay đầu tư?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dự án phù hợp cả 2 nhóm: ở thực phân khúc cao cấp và đầu tư cho thuê nhờ vị trí trung tâm Sơn Trà.'
      }
    },
    {
      '@type': 'Question',
      name: 'Nên kiểm tra hồ sơ nào trước khi đặt cọc?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nên kiểm tra quy hoạch, giấy phép xây dựng, điều kiện mở bán, hợp đồng mẫu và tiến độ thực tế.'
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
    <section class="hero hero-rich">
      <div class="hero-bg" :style="`background-image:url(${data?.mediaLibrary?.heroSlides?.[0]?.image || ''})`" />
      <div class="container hero-grid hero-content">
        <div>
          <span class="badge">DỰ ÁN TRUNG TÂM SÔNG HÀN</span>
          <h1>{{ data?.project?.name }}</h1>
          <p class="hero-lead">
            Trang thông tin chuyên biệt theo phong cách website bất động sản Việt Nam: trực quan, nhiều điểm chạm chuyển đổi,
            tập trung pháp lý - chính sách - nội dung SEO thực chiến.
          </p>
          <div style="display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1rem">
            <NuxtLink class="btn btn-primary" to="/bang-gia">Tải bảng giá mới nhất</NuxtLink>
            <NuxtLink class="btn btn-outline" to="/phap-ly" style="background:#fff">Kiểm tra pháp lý</NuxtLink>
          </div>
          <div class="kpis" style="margin-top:1rem">
            <div class="kpi" v-for="s in data?.project?.stats || []" :key="s.label"><strong>{{ s.value }}</strong><br/>{{ s.label }}</div>
          </div>
        </div>

        <LeadForm page="home-hero" />
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Điểm nổi bật dự án</h2>
        <p class="section-subtitle">Nội dung được trình bày theo thói quen đọc của khách Việt: ngắn, rõ, đi thẳng vào lợi ích.</p>
        <div class="card-grid">
          <article class="card" v-for="item in data?.project?.highlights || []" :key="item">{{ item }}</article>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container split-grid">
        <div>
          <h2 class="section-title" style="color:#fff">Video giới thiệu dự án</h2>
          <p class="section-subtitle" style="color:#cbd5e1">Tạo trải nghiệm trực quan trước khi khách để lại số điện thoại.</p>
          <div class="video-wrap">
            <iframe :src="data?.mediaLibrary?.videoTour" title="Video tour" allowfullscreen loading="lazy" />
          </div>
        </div>
        <div>
          <h2 class="section-title" style="color:#fff">Bản đồ / 360 khu vực</h2>
          <p class="section-subtitle" style="color:#cbd5e1">Khách có thể tự đánh giá liên kết vùng trực tiếp trên bản đồ.</p>
          <div class="video-wrap">
            <iframe :src="data?.mediaLibrary?.virtual360" title="360 map" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Thư viện hình ảnh dự án</h2>
        <div class="gallery-grid">
          <img v-for="(img, idx) in data?.mediaLibrary?.gallery || []" :key="img" :src="img" :alt="`Hình phối cảnh Capital Square ${idx + 1}`" loading="lazy" />
        </div>
      </div>
    </section>

    <section class="section" style="background:#f8fafc">
      <div class="container">
        <h2 class="section-title">Tiện ích trọng tâm</h2>
        <div class="card-grid">
          <article class="card" v-for="a in amenityBlocks" :key="a.title">
            <h3 style="margin-top:0">{{ a.title }}</h3>
            <p style="margin-bottom:0">{{ a.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Bản đồ từ khóa SEO triển khai 6 tháng</h2>
        <div class="card-grid" style="grid-template-columns:1fr">
          <article class="card" v-for="cluster in keywordData.data.value?.clusters || []" :key="cluster.cluster">
            <h3 style="margin-top:0">{{ cluster.cluster }}</h3>
            <p>{{ cluster.keywords.join(' • ') }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section-gold">
      <div class="container split-grid">
        <div>
          <h2 class="section-title">Đăng ký nhận tài liệu dự án ngay</h2>
          <p class="section-subtitle">Bao gồm bảng giá, mặt bằng, chính sách ngân hàng và checklist pháp lý.</p>
          <ul>
            <li>Cam kết phản hồi trong 15 phút.</li>
            <li>Bảo mật thông tin 100%.</li>
            <li>Tư vấn theo mục tiêu ở thực / đầu tư.</li>
          </ul>
        </div>
        <LeadForm page="home-bottom" />
      </div>
    </section>
  </main>
</template>
