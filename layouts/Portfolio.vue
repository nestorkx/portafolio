<template>
  <section class="portfolio section-padding pb-70" data-scroll-index="3">
    <div class="container">

      <div class="portfolio__head">
        <h3 class="portfolio__head--title portfolio__head--font">Portafolio.</h3>
      </div>

      <div class="portfolio__filtering text-center mb-50">
        <span class="active portfolio__filtering--item" data-filter="*">Todo</span>
        <span class="portfolio__filtering--item" data-filter=".web">Web</span>
        <span class="portfolio__filtering--item" data-filter=".movil">M&oacute;vil</span>
        <span class="portfolio__filtering--item" data-filter=".design">Diseño UX/UI</span>
      </div>

      <div class="portfolio__gallery text-center">
        <div class="row">
          <div class="col-xl-4 col-sm-6 portfolio__gallery--item design">
            <div class="portfolio__gallery--item-img">
              <img class="img-fluid" src="" alt="Diseño UX/UI">
              <div class="portfolio__gallery--item-img-overlay">
                <div class="overlay-info v-middle text-center">
                  <h6 class="portfolio__gallery--sm-title">Diseño</h6>
                  <div class="icons">

                    <span class="icon">
                      <a href="#">
                        <i class="fa fa-chain-broken" aria-hidden="true" />
                      </a>
                    </span>

                    <span class="icon link">
                      <a href="#">
                        <i class="fa fa-search-plus" aria-hidden="true" />
                      </a>
                    </span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<script>
export default {
  name: 'Porfolio'
}
</script>
