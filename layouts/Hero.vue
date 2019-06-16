<template>
  <section class="hero section-padding pb-70" data-scroll-index="1">
    <div class="container">
      <div class="row">
        <div class="col-xl-5">
          <div class="hero-img">
            <img class="img-fluid" src="@/assets/hero.jpg" alt="Nestor Kauil">
          </div>
        </div>

        <div class="col-xl-7">
          <div class="content mb-30">
            <h3 class="hero__title hero__title--font">
              Acerca de m&iacute;.
            </h3>
            <span class="hero__subtitle">
              Desarrollador Web - Mobile iOS / Android - Frontend - Backend & Analista BD
            </span>
            <p class="text-justify hero__description">
              Mi nombre es <b>Néstor Julián Kauil Xix</b> soy Ingeniero en Software con
              más de 5+ Años desarrollando aplicaciones, 4+ años de experiencia
              profesional en el lenguaje de programación PHP (Backend),
              2+ años de experiencia en base de datos usando MySQL, 1 año
              y 8 meses de experiencia competente como desarrollador frontend
              y 1+ año desarrollando proyectos móviles de forma
              independiente tales como iOS y Android usando tecnologías Swift 4, Java y Kotlin.
            </p>
            <div class="hero__skills">
              <div class="hero__skills--item">
                <div class="hero__skills--progress">
                  <h6 class="hero__skills--title hero__title--font">
                    Diseño Web
                  </h6>
                  <span class="hero__skills--bg-progress" data-value="95%" />
                </div>
              </div>
              <div class="hero__skills--item">
                <div class="hero__skills--progress">
                  <h6 class="hero__skills--title hero__title--font">
                    Desarrollo
                  </h6>
                  <span class="hero__skills--bg-progress" data-value="95%" />
                </div>
              </div>
            </div>
            <div class="clearfix" />

            <a :href="pdf" download="CV-NESTOR-KAUIL">
              <span class="hero__button hero__button--bg">
                <i class="fa fa-download" />
                Descargar CV
              </span>
            </a>
            <a href="#0" data-scroll-nav="5">
              <span class="hero__button">
                <i class="fa fa-paper-plane" />
                Cont&aacute;ctame
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import $ from 'jquery'
import pdf from '~/assets/documents/CV-NESTOR_ONLINE.pdf'

export default {
  name: 'Hero',
  data: () => ({ pdf }),
  mounted() {
    this.progressBar()
  },
  methods: {
    progressBar() {
      const wind = $(window)
      const spanProgress = $('.hero__skills--progress span')
      // progress bar
      wind.on('scroll', () => {
        spanProgress.each(() => {
          const bottomObject = spanProgress.offset().top + spanProgress.outerHeight()
          const bottomWindow = $(window).scrollTop() + $(window).height()
          const myVal = spanProgress.attr('data-value')
          if (bottomWindow > bottomObject) {
            spanProgress.css({
              width: myVal
            })
          }
        })
      })
    }
  }
}
</script>
