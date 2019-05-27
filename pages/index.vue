<template>
  <div>
    <Navbar />
    <Header />
  </div>
</template>

<script>
import Navbar from '@/layouts/Navbar.vue'
import Header from '@/layouts/Header.vue'

export default {
  components: {
    Header,
    Navbar
  }
}
</script>
