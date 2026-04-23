<script setup lang="ts">
useSeo({
  title: 'Tổng quan Capital Square Đà Nẵng',
  description: 'Thông tin tổng quan dự án: quy mô, định vị sản phẩm, nhóm khách hàng mục tiêu và giá trị cốt lõi.',
  path: '/tong-quan'
})

const { data } = await useFetch('/api/project/overview')
</script>

<template>
  <main>
    <PageHero :title="data?.pageContent?.tongQuan?.title || 'Tổng quan dự án'" :description="data?.pageContent?.tongQuan?.summary || ''" />

    <section class="section">
      <div class="container split-grid">
        <article class="card" style="padding:0;overflow:hidden">
          <img :src="data?.mediaLibrary?.heroSlides?.[1]?.image" alt="Tổng quan phối cảnh" style="width:100%;height:100%;object-fit:cover;min-height:280px" />
        </article>
        <article class="card">
          <h3 style="margin-top:0">Thông số dự án</h3>
          <p><strong>Vị trí:</strong> {{ data?.project?.location }}</p>
          <p><strong>Quy mô:</strong> {{ data?.project?.towers }}</p>
          <p><strong>Tổng số sản phẩm:</strong> {{ data?.project?.totalUnits }}</p>
          <p><strong>Mật độ xây dựng:</strong> {{ data?.project?.density }}</p>
        </article>
      </div>
    </section>

    <section class="section" style="background:#f8fafc">
      <div class="container card-grid" style="grid-template-columns:1fr">
        <article v-for="item in data?.pageContent?.tongQuan?.sections || []" :key="item" class="card">{{ item }}</article>
      </div>
    </section>
  </main>
</template>
