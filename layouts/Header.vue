<template>
  <section class="header header--bg" data-scroll-index="0" data-stellar-background-ratio="0.8">
    <div class="v-middle">
      <div class="container">
        <div class="row">
          <div class="header__caption header__caption--font">
            <h5 class="header__caption--title">
              Hola
            </h5>
            <h1 ref="headline" class="cd-headline clip">
              <span class="blc header__caption--font">Yo Soy</span>
              <span class="cd-words-wrapper">
                <b class="is-visible">Nestor Kauil</b>
                <b>Desarrollador Web</b>
                <b>Frontend</b>
                <b>Backend</b>
                <b>Mobile iOS/Android</b>
                <b>Analista DB</b>
              </span>
            </h1>
            <div class="social-icon">
              <a href="https://www.facebook.com/nestorkx" target="_blank" rel="nofollow">
                <span class="social-icon--rounded">
                  <i class="fab fa-facebook-f text-white" aria-hidden="true" />
                </span>
              </a>
              <a href="https://github.com/nestorkx" target="_blank" rel="nofollow">
                <span class="social-icon--rounded">
                  <i class="fab fa-github text-white" aria-hidden="true" />
                </span>
              </a>
              <a href="https://bitbucket.org/nestorkauil/" target="_blank" rel="nofollow">
                <span class="social-icon--rounded">
                  <i class="fab fa-bitbucket text-white" />
                </span>
              </a>
              <a href="https://www.linkedin.com/in/nestor-kauil/" target="_blank" rel="nofollow">
                <span class="social-icon--rounded">
                  <i class="fab fa-linkedin-in text-white" aria-hidden="true" />
                </span>
              </a>
              <a href="https://codepen.io/nestorkx/" target="_blank" rel="nofollow">
                <span class="social-icon--rounded">
                  <i class="fab fa-codepen text-white" aria-hidden="true" />
                </span>
              </a>
            </div>
            <div class="col-xl-12">
              <h5
                class="header__caption--font
              header__caption--line-height mt-4
              animated
              fadeIn"
              >
                Soy un apasionado <strong>Diseñador UI/UX</strong> y
                <strong>Desarrollador Front-End</strong> creando modernos y responsivos diseños para la
                <strong>Web</strong> y <strong>M&oacute;viles</strong>. <br> Ven y mira m&aacute;s
                <strong class="header__caption--link" data-scroll-nav="1">acerca de m&iacute;</strong>.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'Header',
  data() {
    return {
      animationDelay: 2500,
      barAnimationDelay: 3800,
      barWaiting: this.barAnimationDelay - 3000,
      lettersDelay: 50,
      typeLettersDelay: 150,
      selectionDuration: 500,
      typeAnimationDelay: this.selectionDuration + 800,
      revealDuration: 600,
      revealAnimationDelay: 1500
    }
  },
  mounted() {
    const parentHeadLine = this.$refs.headline
    this.animateHeadline(parentHeadLine)
  },
  methods: {
    animateHeadline(headlines) {
      const headlinesObj = $(headlines)
      let duration = this.animationDelay
      headlinesObj.each(() => {
        if (headlinesObj.hasClass('loading-bar')) {
          duration = this.barAnimationDelay
          setTimeout(() => {
            headlinesObj.find('.cd-words-wrapper').addClass('is-loading')
          }, this.barWaiting)
        } else if (headlinesObj.hasClass('clip')) {
          const spanWrapper = headlinesObj.find('.cd-words-wrapper')
          const newWidth = spanWrapper.width() + 10
          spanWrapper.css('width', newWidth)
        } else if (!headlinesObj.hasClass('type')) {
          const words = headlinesObj.find('.cd-words-wrapper b')
          let width = 0
          words.each(function () {
            const wordWith = words.width()
            if (wordWith > width) {
              width = wordWith
            }
          })
          headlinesObj.find('.cd-words-wrapper').css('width', width)
        }
        // Trigger animation
        setTimeout(() => {
          this.hideWord(headlinesObj.find('.is-visible').eq(0))
        }, duration)
      })
    },
    hideWord(word) {
      const nextWord = this.takeNext(word)

      if (word.parents('.cd-headline').hasClass('type')) {
        const parentSpan = word.parent('.cd-words-wrapper')
        parentSpan.addClass('selected').removeClass('waiting')
        setTimeout(() => {
          parentSpan.removeClass('selected')
          word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out')
        }, this.selectionDuration)
        setTimeout(() => {
          this.showWord(nextWord, this.typeLettersDelay)
        }, this.typeAnimationDelay)
      } else if (word.parents('.cd-headline').hasClass('letters')) {
        const bool = (word.children('i').length >= nextWord.children('i').length)
        this.hideLetter(word.find('i').eq(0), word, bool, this.lettersDelay)
      } else if (word.parents('.cd-headline').hasClass('clip')) {
        word.parents('.cd-words-wrapper').animate({
          width: '2px'
        }, this.revealDuration, () => {
          this.switchWord(word, nextWord)
          this.showWord(nextWord)
        })
      } else if (word.parents('.cd-headline').hasClass('loading-bar')) {
        word.parents('.cd-words-wrapper').removeClass('is-loading')
        this.switchWord(word, nextWord)
        setTimeout(() => {
          this.hideWord(nextWord)
        }, this.barAnimationDelay)

        setTimeout(() => {
          word.parents('.cd-words-wrapper').addClass('is-loading')
        }, this.barWaiting)
      } else {
        this.switchWord(word, nextWord)
        setTimeout(() => {
          this.hideWord(nextWord)
        }, this.animationDelay)
      }
    },
    showWord(word, duration) {
      if (word.parents('.cd-headline').hasClass('type')) {
        this.showLetter(word.find('i').eq(0), word, false, duration)
        word.addClass('is-visible').removeClass('is-hidden')
      } else if (word.parents('.cd-headline').hasClass('clip')) {
        word.parents('.cd-words-wrapper').animate({
          width: word.width() + 10
        }, this.revealDuration, () => {
          setTimeout(() => {
            this.hideWord(word)
          }, this.revealAnimationDelay)
        })
      }
    },
    hideLetter(letter, word, bool, duration) {
      letter.removeClass('in').addClass('out')
      if (!letter.is(':last-child')) {
        setTimeout(() => {
          this.hideLetter(letter.next(), word, bool, duration)
        }, duration)
      } else if (bool) {
        setTimeout(() => {
          this.hideWord(this.takeNext(word))
        }, this.animationDelay)
      }
      if (letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
        const nextWord = this.takeNext(word)
        this.switchWord(word, nextWord)
      }
    },
    showLetter(letter, word, bool, duration) {
      letter.addClass('in').removeClass('out')

      if (!letter.is(':last-child')) {
        setTimeout(() => {
          this.showLetter(letter.next(), word, bool, duration)
        }, duration)
      } else {
        if (word.parents('.cd-headline').hasClass('type')) {
          setTimeout(() => {
            word.parents('.cd-words-wrapper').addClass('waiting')
          }, 200)
        }
        if (!bool) {
          setTimeout(() => {
            this.hideWord(word)
          }, this.animationDelay)
        }
      }
    },
    takeNext(word) {
      return (!word.is(':last-child')) ? word.next() : word.parent().children().eq(0)
    },
    switchWord(oldWord, newWord) {
      oldWord.removeClass('is-visible').addClass('is-hidden')
      newWord.removeClass('is-hidden').addClass('is-visible')
    }
  }
}
</script>
