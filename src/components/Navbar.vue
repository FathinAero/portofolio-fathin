<template>
  <nav class="navbar">
    <div class="brand">Fathin Umara Aero</div>
    <ul class="nav-links">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/projects">Projects</RouterLink></li>
      <li><RouterLink to="/blog">Blog</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-primary);
  padding: 1rem 2rem;
  color: white;
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: var(--color-secondary); /* Warna hijau khas Vue */
}
</style>
