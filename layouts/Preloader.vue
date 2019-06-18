<template>
  <div class="loading">
    <div class="loading__load-circle" />
  </div>
</template>
<script>
import $ from 'jquery'

export default {
  name: 'Preloader',
  mounted() {
    this.loadPreloader()
  },
  methods: {
    loadPreloader() {
      // Preloader
      setTimeout(() => {
        $('.loading').addClass('loading-end').fadeOut(1000)
      }, 500)
    }
  }
}
</script>
