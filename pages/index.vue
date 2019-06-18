<template>
  <div>
    <Preloader />
    <Navbar />
    <Header />
    <Hero />
    <Services />
    <Testimonials />
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
import Testimonials from '@/layouts/Testimonials.vue'
import Preloader from '@/layouts/Preloader.vue'

export default {
  components: {
    Preloader,
    Testimonials,
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
