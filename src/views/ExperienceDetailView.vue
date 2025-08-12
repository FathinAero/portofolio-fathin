<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed } from 'vue'
import { blogPosts } from '@/data/experiences.js'

const route = useRoute()
const postId = parseInt(route.params.id)

const post = computed(() => {
  return experiences.find((p) => p.id === postId)
})
</script>

<template>
  <div class="blog-detail-page">
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p class="post-date">{{ post.date }}</p>
      <div class="post-content" v-html="post.content"></div>
    </div>
    <div v-else>
      <h2>Postingan tidak ditemukan</h2>
    </div>
    <RouterLink to="/blog" class="back-link">← Kembali ke Semua Postingan</RouterLink>
  </div>
</template>

<style scoped>
.blog-detail-page {
  max-width: 750px;
  margin: auto;
}
.post-date {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 2rem;
}
.post-content {
  line-height: 1.7;
  font-size: 1.1rem;
}
/* Styling untuk tag di dalam v-html */
.post-content :deep(p) {
  margin-bottom: 1rem;
}
.post-content :deep(strong) {
  color: #2c3e50;
}
.back-link {
  display: inline-block;
  margin-top: 2rem;
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
}
</style>
