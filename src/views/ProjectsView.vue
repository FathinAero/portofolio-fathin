<script setup>
import { projects } from '@/data/projects.js'
</script>

<template>
  <div class="projects-page">
    <h1 class="Josefin">PROJECTS</h1>
    <p class="subtitle">
      Here are some projects I've worked on. Click on a project to see more details.
    </p>

    <div class="projects-grid">
      <RouterLink
        v-for="project in projects"
        :key="project.id"
        :to="'/project/' + project.id"
        class="project-link"
      >
        <div class="project-item">
          <div class="project-card">
            <div class="logo">{{ project.logo }}</div>
            <h2>{{ project.title }}</h2>
          </div>
          <p class="project-description">{{ project.description }}</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.projects-page {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}

.projects-page h1 {
  text-align: center;
  font-size: 3rem;
  color: #004d40; /* Sesuaikan dengan warna tema Anda */
}

.subtitle {
  text-align: center;
  margin-bottom: 3rem;
  color: #555;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem 2rem; /* Jarak vertikal dan horizontal */
}

/* Menghilangkan dekorasi default dari link */
.project-link {
  text-decoration: none;
  color: inherit;
}

.project-item {
  text-align: center;
}

/* Kartu utama yang berisi logo dan nama proyek */
.project-card {
  background-color: #c8e6c9; /* Warna hijau muda, sesuaikan dengan tema Anda */
  border-radius: 20px;
  padding: 2rem 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Transisi untuk hover */
}

.project-card .logo {
  font-size: 3rem;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.project-card h2 {
  font-size: 1.5rem;
  color: #004d40;
  margin: 0;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
}

/* Deskripsi di bawah kartu */
.project-description {
  margin-top: 1rem;
  padding: 0 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #37474f;
  transition: transform 0.3s ease; /* Transisi untuk hover */
}

.project-item:hover .project-description {
  transform: scale(1.05);
}

.project-item:hover .project-card {
  transform: scale(1.05);
  background-color: #b9dcc3;
}
</style>
