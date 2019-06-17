<template>
  <section class="testimonials section-padding" data-scroll-index="4">
    <div class="container">
      <div class="testimonials__head">
        <h3 class="testimonials__head--title testimonials__head--font">
          Recomendaciones.
        </h3>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="text-center">
            <carousel
              :items="1"
              :nav="false"
            >
              <div class="testimonials__item">
                <div
                  class="testimonials__item--img-container
                  testimonials__item--author-img"
                  :style="{backgroundImage: 'url(' + testimonials.remax + ')'}"
                />
                <p class="testimonials__item--description">
                  N&eacute;stor trabajo bajo mi cargo y se destacó por su gran responsabilidad
                  y competencia en el trabajo, desempeñando el cargo de Programador Web.
                  Dada su experiencia y capacidad, no tengo nungún incoveniente en recomendarlo
                  ampliamente para el cargo.
                </p>
                <h6
                  class="testimonials__item--title
                  testimonials__head--font"
                >
                  Frank Carpenter
                </h6>
                <span
                  class="testimonials__item--subtitle"
                >
                  Gerente General | RE/MAX Paradise Canc&uacute;n
                </span>
              </div>
              <div class="testimonials__item">
                <div
                  class="testimonials__item--img-container
                  testimonials__item--author-img"
                  :style="{backgroundImage: 'url(' + testimonials.wayaweb + ')'}"
                />
                <p class="testimonials__item--description">
                  N&eacute;stor es una persona muy responsable, confiable, estable y competente
                  con respecto a las actividades que aparecen especificadas en su curriculum vitae.
                </p>
                <h6
                  class="testimonials__item--title
                  testimonials__head--font"
                >
                  Jos&eacute; Luis Rodr&iacute;guez
                </h6>
                <span
                  class="testimonials__item--subtitle"
                >
                  Director General | WayaWeb
                </span>
              </div>
              <div class="testimonials__item">
                <div
                  class="testimonials__item--img-container
                  testimonials__item--author-img"
                  :style="{backgroundImage: 'url(' + testimonials.mayaland + ')'}"
                />
                <p class="testimonials__item--description">
                  N&eacute;stor desempeñó sus actividades como Programador Web, durante el tiempo
                  que estuvo con nosotros demostr&oacute; ser una persona honesta y desempeñó sus
                  funciones de manera eficiente y responsable.
                </p>
                <h6
                  class="testimonials__item--title
                  testimonials__head--font"
                >
                  Jos&eacute; Luis Mendez
                </h6>
                <span
                  class="testimonials__item--subtitle"
                >
                  Jefe Desarrollo / IT | Mayaland Tours
                </span>
              </div>
              <div class="testimonials__item">
                <div
                  class="testimonials__item--img-container
                  testimonials__item--author-img"
                  :style="{backgroundImage: 'url(' + testimonials.canada + ')'}"
                />
                <p class="testimonials__item--description">
                  Una de las principales cualidades de N&eacute;stor, y que creo que
                  lo hacen muy valioso para cualquier empresa, en su disponibilidad para trabajar en
                  equipo y su amabilidad.
                  Se qué N&eacute;stor sabr&aacute; cumplir a cabalidad con las tareas que le fueren
                  encomendadas, por lo que gustosamente lo recomiendo.
                </p>
                <h6
                  class="testimonials__item--title
                  testimonials__head--font"
                >
                  Cristian Rodr&iacute;guez
                </h6>
                <span
                  class="testimonials__item--subtitle"
                >
                  Jefe de Desarrollo | Canada Transfers
                </span>
              </div>
              <div class="testimonials__item">
                <div
                  class="testimonials__item--img-container
                  testimonials__item--author-img"
                  :style="{backgroundImage: 'url(' + testimonials.iorni + ')'}"
                />
                <p class="testimonials__item--description">
                  N&eacute;stor se desempeñó satisfactoriamente como Desarrollador Frontend en
                  la empresa IORNI SA DE CV, mostró ser una persona integra, profesional y totalmente
                  responsable en las tareas que se asignaron mostrando ser capaz de trabajar en equipo
                  en el cumplimiento de metas y objetivos de la empresa.
                </p>
                <h6
                  class="testimonials__item--title
                  testimonials__head--font"
                >
                  Carlos Mariscal
                </h6>
                <span
                  class="testimonials__item--subtitle"
                >
                  Co-fundador | iorni
                </span>
              </div>
              <div class="testimonials__item">
                <div
                  class="testimonials__item--img-container
                  testimonials__item--author-img"
                  :style="{backgroundImage: 'url(' + testimonials.cloudware + ')'}"
                />
                <p class="testimonials__item--description">
                  N&eacute;stor desempeñó su función en la categoría de Desarrollador Frontend, con
                  la dedicación intensidad y esmero que en su oportunidad mereció por lo que no tengo
                  ningún incoveniente en mencionar que dicha persona fué honesta y cumplida en sus
                  actividades encomendadas durante el tiempo que perduró su relación de trabajo con
                  la empresa.
                </p>
                <h6
                  class="testimonials__item--title
                  testimonials__head--font"
                >
                  Ernesto Fuentes de Mar&iacute;a
                </h6>
                <span
                  class="testimonials__item--subtitle"
                >
                  Jefe de Desarrollo | Cloudware Technology
                </span>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import carousel from 'vue-owl-carousel'
import remax from '@/assets/images/remax-paradise-cancun.jpg'
import wayaweb from '@/assets/images/wayaweb.jpg'
import mayaland from '@/assets/images/mayaland.jpg'
import canada from '@/assets/images/canada-transfers.jpg'
import iorni from '@/assets/images/iorni.jpg'
import cloudware from '@/assets/images/cloudware.jpg'

export default {
  name: 'Testimonials',
  components: { carousel },
  data() {
    return {
      testimonials: {
        remax,
        wayaweb,
        mayaland,
        canada,
        iorni,
        cloudware
      }
    }
  }
}
</script>
