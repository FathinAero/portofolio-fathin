<script setup>
import { RouterLink } from 'vue-router'
import { experiences } from '@/data/experiences.js'
</script>

<template>
  <div v-for="post in blogPosts" :key="post.id" class="post-summary">
    <h2>
      <RouterLink :to="'/blog/' + post.id">{{ post.title }}</RouterLink>
    </h2>
  </div>

  <div v-for="experience in experiences" :key="experience.id" class="post-summary">
    <h2>
      <RouterLink :to="'/experiences/' + experience.id">{{ experience.title }}</RouterLink>
    </h2>
    <p class="post-date">{{ experience.date }}</p>
    <p>{{ experience.summary }}</p>
    <RouterLink :to="'/experiences/' + experience.id" class="read-more"
      >Baca Selengkapnya →</RouterLink
    >
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
