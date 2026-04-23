<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

const { data, error } = await useFetch('/api/blog/post', {
  query: { slug }
})

const post = computed(() => data.value?.post)

useSeo({
  title: post.value?.title || 'Bài viết dự án',
  description: post.value?.excerpt || 'Bài viết phân tích dành cho khách hàng quan tâm Capital Square Đà Nẵng.',
  path: `/blog/${slug}`
})
</script>

<template>
  <main>
    <section class="section">
      <div class="container" style="max-width:860px">
        <p v-if="error">Không thể tải nội dung bài viết.</p>
        <article v-else-if="post" class="card">
          <h1 style="margin-top:0">{{ post.title }}</h1>
          <p style="color:#64748b">{{ post.excerpt }}</p>
          <div v-html="post.html" />
        </article>
      </div>
    </section>
  </main>
</template>
