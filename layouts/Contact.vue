<template>
  <section class="contact section-padding" data-scroll-index="5">
    <div class="container">
      <div class="contact__head">
        <h3 class="contact__head--title contact__head--font">
          Cont&aacute;ctame
        </h3>
      </div>
      <div class="contact__info text-center mb-50">
        <div class="row">
          <div class="col-xl-4">
            <div class="contact__item">
              <span class="contact__item--icon">
                <i class="fa fa-location-arrow" aria-hidden="true" />
              </span>
              <h6 class="contact__item--title contact__item--font">
                Direcci&oacute;n
              </h6>
              <p class="contact__item--description">
                Canc&uacute;n, Quintana Roo, M&eacute;xico
              </p>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="contact__item">
              <span class="contact__item--icon">
                <i class="fa fa-envelope" aria-hidden="true" />
              </span>
              <h6 class="contact__item--title contact__item--font">
                Correo
              </h6>
              <a
                class="contact__item--description"
                href="mailto:contacto@nestorkauil.com"
              >
                contacto@nestorkauil.com
              </a>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="contact__item">
              <span class="contact__item--icon">
                <i class="fa fa-phone" aria-hidden="true" />
              </span>
              <h6 class="contact__item--title contact__item--font">
                Tel&eacute;fono
              </h6>
              <a
                class="contact__item--description"
                href="tel:+5219982046995"
              >
                +52 1 998 204 6995
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <form class="contact__form">
            <div class="messages" />
            <div class="controls">
              <div class="row">
                <div class="col-xl-6">
                  <div class="form-group">
                    <input
                      v-model="contact.name"
                      v-validate="'required'"
                      data-vv-as="nombre"
                      class="contact__form--input form-control"
                      :class="{'is-invalid': errors.has('name') }"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                    >
                    <div
                      v-show="errors.has('name')"
                      class="invalid-feedback"
                    >
                      {{ errors.first('name') }}
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="form-group">
                    <input
                      v-model="contact.email"
                      v-validate="'required|email'"
                      data-vv-as="correo"
                      class="contact__form--input form-control"
                      :class="{'is-invalid': errors.has('email') }"
                      type="email"
                      name="email"
                      placeholder="Correo"
                    >
                    <div
                      v-show="errors.has('email')"
                      class="invalid-feedback"
                    >
                      {{ errors.first('email') }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xl-12">
                  <div class="form-group">
                    <textarea
                      v-model="contact.message"
                      v-validate="'required'"
                      data-vv-as="mensaje"
                      class="contact__form--input contact__form--textarea form-control"
                      :class="{'is-invalid': errors.has('message') }"
                      name="message"
                      placeholder="Mensaje"
                      rows="4"
                      required
                    />
                    <div
                      v-show="errors.has('message')"
                      class="invalid-feedback"
                    >
                      {{ errors.first('message') }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-12">
                  <input
                    type="button"
                    value="Enviar"
                    class="contact__form--button contact__form--button-bg"
                    @click="onClickSubmit"
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import es from 'vee-validate/dist/locale/es'
import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'

Vue.use(VeeValidate)
Validator.localize('es', es)

export default {
  name: 'Contact',
  data() {
    return {
      contact: {
        name: null,
        email: null,
        message: null
      }
    }
  },
  methods: {
    onClickSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.sendData()
        }
      })
    },
    async sendData() {
      const sendEmail = await this.$axios.post(process.env.API_URL + '/api/posts', this.contact)
      if (sendEmail.status === 201) {
        this.$swal('Enviado', 'Se ha enviado correctamente su mensaje.', 'success')
        this.clearForm()
      }
    },
    clearForm() {
      this.contact.name = null
      this.contact.email = null
      this.contact.message = null
      this.$validator.reset()
    }
  }
}
</script>
