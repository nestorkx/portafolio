<template>
  <div>
    <Navbar />
    <Header />
    <Hero />
    <Services />
    <Portfolio />
  </div>
</template>

<script>
import Navbar from '@/layouts/Navbar.vue'
import Header from '@/layouts/Header.vue'
import Hero from '@/layouts/Hero.vue'
import Services from '@/layouts/Services.vue'
import Portfolio from '@/layouts/Portfolio.vue'

export default {
  components: {
    Services,
    Hero,
    Header,
    Navbar,
    Portfolio
  }
}
</script>
