<template>
  <div>
    <Navbar />
    <Header />
    <Hero />
    <Services />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/layouts/Navbar.vue'
import Header from '@/layouts/Header.vue'
import Hero from '@/layouts/Hero.vue'
import Services from '@/layouts/Services.vue'
import Footer from '@/layouts/Footer.vue'
import Contact from '@/layouts/Contact.vue'

export default {
  components: {
    Footer,
    Services,
    Hero,
    Header,
    Navbar,
    Contact
  },
  mounted() {
    this.loadToken()
  },
  methods: {
    loadToken() {
      this.$store.dispatch('security/loadToken')
    }
  }
}
</script>
