<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed } from 'vue'
import { projects } from '@/data/projects.js'

const route = useRoute()
const projectId = parseInt(route.params.id)

const project = computed(() => {
  return projects.find((p) => p.id === projectId)
})
</script>

<template>
  <div class="project-detail-page">
    <div v-if="project">
      <h1>{{ project.title }}</h1>
      <div class="tags">
        <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <p class="description">{{ project.description }}</p>
    </div>
    <div v-else>
      <h2>Proyek tidak ditemukan</h2>
      <p>Maaf, proyek yang Anda cari tidak ada.</p>
    </div>
    <RouterLink to="/projects" class="back-link">← Kembali ke Daftar Proyek</RouterLink>
  </div>
</template>

<style scoped>
.project-detail-page {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}
.tags {
  margin: 1rem 0;
  display: flex;
  gap: 10px;
}
.tag {
  background-color: #42b983;
  color: white;
  padding: 5px 15px;
  border-radius: 15px;
  font-size: 0.9rem;
}
.description {
  margin-top: 1.5rem;
  line-height: 1.7;
  font-size: 1.1rem;
}
.back-link {
  display: inline-block;
  margin-top: 2rem;
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}
.back-link:hover {
  text-decoration: underline;
}
</style>
