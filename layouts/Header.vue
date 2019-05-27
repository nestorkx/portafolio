<template>
  <section class="header" data-scroll-index="0" style="background-position: 0 0;" :style="{ backgroundImage: 'url(' + require('@/assets/bg.jpg')}" data-stellar-background-ratio="0.8">
    <div class="v-middle">
      <div class="container">
        <div class="row">
          <div class="header__caption">
            <h5 class="header__caption--title header__caption--font">Hola</h5>
            <h1 class="cd-headline clip">
              <span class="blc header__caption--font">Yo Soy</span>
              <span class="cd-words-wrapper header__caption--font">
                <b class="is-visible">Nestor Kauil</b>
                <b>Desarrollador</b>
                <b>Frontend</b>
                <b>Backend</b>
                <b>Mobile</b>
                <b>Analista DB</b>
              </span>
            </h1>
            <div class="social-icon">
              <a href="https://www.facebook.com/nestorkx" target="_blank">
                <span class="social-icon--rounded"><i class="fab fa-facebook-f text-white" aria-hidden="true"></i></span>
              </a>
              <a href="https://github.com/nestorkx" target="_blank">
                <span class="social-icon--rounded"><i class="fab fa-github text-white" aria-hidden="true"></i></span>
              </a>
              <a href="https://www.linkedin.com/in/nestor-kauil/" target="_blank">
                <span class="social-icon--rounded"><i class="fab fa-linkedin-in text-white" aria-hidden="true"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Header'
}
</script>
