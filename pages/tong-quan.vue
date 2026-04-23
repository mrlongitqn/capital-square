<script setup lang="ts">
useSeo({
  title: 'Tổng quan Capital Square Đà Nẵng',
  description: 'Phân tích tổng quan dự án: quy mô, định vị sản phẩm, nhóm khách hàng mục tiêu và cơ hội đầu tư.',
  path: '/tong-quan'
})

const { data } = await useFetch('/api/project/overview')
</script>

<template>
  <main>
    <PageHero :title="data?.pageContent?.tongQuan?.title || 'Tổng quan dự án'" :description="data?.pageContent?.tongQuan?.summary || ''" />
    <section class="section">
      <div class="container card-grid" style="grid-template-columns:1fr">
        <article v-for="item in data?.pageContent?.tongQuan?.sections || []" :key="item" class="card">{{ item }}</article>
      </div>
    </section>
  </main>
</template>
