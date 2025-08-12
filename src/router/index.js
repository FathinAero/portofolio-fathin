import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue' // <-- PASTIKAN BARIS INI BENAR

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView // <-- PASTIKAN HomeView ditunjuk di sini
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: () => import('../views/ExperiencesView.vue') // Nama file juga akan kita ganti
    },
    {
      path: '/experiences/:id',
      name: 'experience-detail',
      component: () => import('../views/ExperienceDetailView.vue') // Nama file juga akan kita ganti
    },
    {
      path: '/project/:id', // URL akan menjadi /project/1, /project/2, dst.
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue')
    },
  ]
})

export default router