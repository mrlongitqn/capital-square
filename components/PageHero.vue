<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <section class="page-hero">
    <div class="container">
      <h1 class="section-title" style="margin-bottom:.6rem">{{ title }}</h1>
      <p class="section-subtitle" style="margin:0">{{ description }}</p>
    </div>
  </section>
</template>
