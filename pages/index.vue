<template>
  <div>
    <Navbar />
    <Header />
    <Hero />
  </div>
</template>

<script>
import Navbar from '@/layouts/Navbar.vue'
import Header from '@/layouts/Header.vue'
import Hero from '@/layouts/Hero.vue'

export default {
  components: {
    Hero,
    Header,
    Navbar
  }
}
</script>
