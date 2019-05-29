<template>
  <section>
    <nav ref="navbar" class="navbar navbar-default navbar-light">
      <div class="container d-block">
        <div class="navbar-header">
          <button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#nav-icon-collapse" aria-expanded="false">
            <span class="icon-bar" />
            <span class="icon-bar" />
            <span class="icon-bar" />
          </button>

          <!-- logo -->
          <a class="logo logo--font" href="#">Nestor</a>
        </div>
        <!-- Collect the nav links, and other content for toggling -->
        <div id="nav-icon-collapse" class="collapse navbar-collapse">
          <!-- links -->
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#" data-scroll-nav="0" class="active">Inicio</a></li>
            <li><a href="#" data-scroll-nav="1">Acerca</a></li>
            <li><a href="#" data-scroll-nav="2">Servicios</a></li>
            <li><a href="#" data-scroll-nav="3">Portafolio</a></li>
            <li><a href="#" data-scroll-nav="4">Clientes</a></li>
            <li><a href="#" data-scroll-nav="5">Contacto</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div>
    </nav>
  </section>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'Navbar',
  mounted() {
    this.navbarScrolling()
  },
  methods: {
    navbarScrolling() {
      const wind = $(window)
      wind.on('scroll', () => {
        const bodyScroll = wind.scrollTop()
        const navbar = $('.navbar-default')
        const hHight = $('.header').outerHeight()
        if (bodyScroll > hHight) {
          navbar.addClass('navbar-scroll')
        } else {
          navbar.removeClass('navbar-scroll')
        }
      })
    }
  }
}
</script>
