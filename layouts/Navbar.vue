<template>
  <section>
    <nav ref="navbar" class="navbar navbar-default navbar-light">
      <div class="container d-block">
        <div class="navbar-header clearfix">
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
            <li><a href="#">Portafolio</a></li>
            <li><a href="#" data-scroll-nav="4">Recomendaciones</a></li>
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
    this.scrollIt()
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
    },
    scrollIt() {
      $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'swing', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -60 // offste (in px) for fixed top navigation
      })
    }
  }
}
</script>
