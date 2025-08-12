<script setup>
import { RouterLink } from 'vue-router'
import { blogPosts } from '@/data/experiences.js'
</script>

<template>
  <div class="blog-page">
    <h1>Blog</h1>
    <p class="subtitle">
      Tulisan saya tentang teknologi, pemrograman, dan hal-hal lain yang menarik.
    </p>
    <div class="post-list">
      <div v-for="post in blogPosts" :key="post.id" class="post-summary">
        <h2>
          <RouterLink :to="'/blog/' + post.id">{{ post.title }}</RouterLink>
        </h2>
        <p class="post-date">{{ post.date }}</p>
        <p>{{ post.summary }}</p>
        <RouterLink :to="'/blog/' + post.id" class="read-more">Baca Selengkapnya →</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-page {
  max-width: 800px;
  margin: auto;
}
.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
}
.post-summary {
  margin-bottom: 3rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 2rem;
}
.post-summary h2 a {
  text-decoration: none;
  color: #2c3e50;
}
.post-summary h2 a:hover {
  color: #42b983;
}
.post-date {
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 1rem;
}
.read-more {
  font-weight: bold;
  color: #42b983;
  text-decoration: none;
}
</style>
