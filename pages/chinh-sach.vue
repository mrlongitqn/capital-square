<script setup lang="ts">
useSeo({
  title: 'Chính sách bán hàng Capital Square',
  description: 'Tổng hợp chính sách ưu đãi, tiến độ thanh toán, hỗ trợ vay và kịch bản dòng tiền dành cho người mua.',
  path: '/chinh-sach'
})

const { data } = await useFetch('/api/project/overview')
</script>

<template>
  <main>
    <PageHero title="Chính sách bán hàng" description="Trang này ưu tiên trả lời câu hỏi: mua như thế nào để tối ưu dòng tiền?" />
    <section class="section">
      <div class="container card-grid">
        <article v-for="item in data?.project?.policyHighlights || []" :key="item" class="card">{{ item }}</article>
      </div>
    </section>
  </main>
</template>
