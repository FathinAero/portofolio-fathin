<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <RouterView v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
</template>

<style scoped>
main {
  padding: 2rem;
}
</style>
