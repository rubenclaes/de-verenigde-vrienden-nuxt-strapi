<template>
  <div>
    <!-- Full Page Image Header with Vertically Centered Content -->
    <header
      class="masthead lazyload image-box demo"
      id="section10"
      :data-bg="
        `${require('../assets/img/home/header/music/music-chart_2560.jpg')}`
      "
    >
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12 text-center">
            <h1 class="display-3 text-white">
              Koninklijke Harmonie
              <span>De Verenigde Vrienden Heusden-Zolder</span>
              <p class="lead font-weight-bold">Daar zit muziek in!</p>
            </h1>

            <p class="lead text-white d-none d-md-block d-lg-block d-xl-block">
              Samen muziek maken met passie en oog voor kwaliteit, zowel op
              beginnersniveau als voor gevorderde muzikanten, is onze grootste
              uitdaging.
            </p>
            <div class="btn-wrapper">
              <button v-scroll-to="'#contact'" class="btn btn-lg btn-primary-3">
                <span class="nav-link-inner--text">Ik word lid</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <a href="#thanks"><span></span></a>
    </header>


    <!-- start important message -->
    <!--     <section class="section section-lg pt-0">
      <div class="container">
        <card gradient="warning" no-body shadow-size="lg" class="border-0">
          <div class="p-5">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3 class="text-white">Muziekkamp HEMELTJE - HEL</h3>
                <p class="lead text-white mt-3">
                  Samen muziek maken, samen actief zijn,... je beleeft het allemaal in dit muziekkamp.
                  Info en inschrijven voor 10 juni bij
                  <a
                    href="mailto:lieselotte_kleykens@hotmail.com?SUBJECT=Muziekkamp"
                  >lieselotte_kleykens@hotmail.com</a>
                </p>
              </div>
              <div class="col-lg-3 ml-lg-auto">
                <base-button
                  tag="a"
                  href="https://www.creative-tim.com/product/vue-argon-design-system"
                  type="white"
                  block
                  size="lg"
                >Lees Meer</base-button>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>-->
    <!-- end important message -->

    <!-- Harmonie  -->
    <section class="section bg-secondary">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6">
            <div
              class="card bg-default shadow border-0"
              data-aos="fade-in"
              data-aos-delay="150"
            >
              <LazyImage
                srcData="home/harmonie/close_up.jpeg"
                fetchMode="srcset"
                extraCss="card-img-top"
              />

              <blockquote class="card-blockquote">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  class="svg-bg"
                >
                  <polygon points="0,52 583,95 0,95" class="fill-default" />
                  <polygon
                    points="0,42 583,95 683,0 0,95"
                    opacity=".2"
                    class="fill-default"
                  />
                </svg>

                <h4 class="display-3 font-weight-bold text-white">Repetitie</h4>
                <p class="lead text-italic text-white">
                  Maandagavond, van 20u tot 22u is het repetitie in onze
                  muziekzaal (Kerkenblook) en dat is altijd een leuke tijd. Na
                  de repetitie wordt er nog gezellig nagebabbeld.
                </p>
              </blockquote>
            </div>
          </div>
          <div class="col-md-6">
            <div data-aos="fade-in" data-aos-delay="150" class="pl-md-5">
              <h1>Harmonie</h1>
              <client-only>
                <span class="c-lerp-block_title" data-scroll>
                  <span
                    data-scroll
                    data-scroll-delay="2.13"
                    data-scroll-speed="6"
                    >B</span
                  >
                  <span
                    data-scroll
                    data-scroll-delay="0.12"
                    data-scroll-speed="6"
                    >y</span
                  >
                  <span
                    data-scroll
                    data-scroll-delay="0.11"
                    data-scroll-speed="6"
                  >
                  </span>
                  <span
                    data-scroll
                    data-scroll-delay="0.1"
                    data-scroll-speed="6"
                    >L</span
                  >
                  <span
                    data-scroll
                    data-scroll-delay="0.09"
                    data-scroll-speed="6"
                    >e</span
                  >
                  <span
                    data-scroll
                    data-scroll-delay="0.08"
                    data-scroll-speed="6"
                    >t</span
                  >
                  <span
                    data-scroll
                    data-scroll-delay="0.07"
                    data-scroll-speed="6"
                    >t</span
                  >
                  <span
                    data-scroll
                    data-scroll-delay="0.06"
                    data-scroll-speed="6"
                    >e</span
                  >
                  <span
                    data-scroll
                    data-scroll-delay="0.05"
                    data-scroll-speed="6"
                    >r</span
                  >
                </span>
              </client-only>

              <p class="lead">
                We zijn toffe groep muzikanten van alle leeftijden die samen
                muzikaal plezier maken. Al wie graag muziek speelt is welkom om
                even te komen kennismaken!
              </p>

              <p class="lead">
                Je krijgt de kans om te groeien binnen onze harmonie, een ideale
                begeleiding van jeugd naar de ‘grote Harmonie’.
              </p>

              <p class="lead">
                Onze zorg gaat vooral uit naar de opleiding van de jeugd in
                samenwerking met de academie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Harmonie -->

    <!-- Jeugdorkest -->
    <section class="section section-lg">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-md-2">
            <div class="rounded shadow-lg overflow-hidden">
              <client-only>
                <b-carousel
                  id="carousel1"
                  :interval="4000"
                  data-aos="fade-in"
                  data-aos-delay="150"
                  controls
                  indicators
                >
                  <!-- Slides with img slot -->
                  <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                  <b-carousel-slide>
                    <template v-slot:img>
                      <LazyImage
                        srcData="home/jeugdorkest/jeugdorkest-min.jpeg"
                        fetchMode="srcset"
                        extraCss="d-block img-fluid w-100"
                        height="480"
                      />
                    </template>
                  </b-carousel-slide>
                  <b-carousel-slide>
                    <template v-slot:img>
                      <LazyImage
                        srcData="home/jeugdorkest/jeugdorkest2-min.jpeg"
                        fetchMode="srcset"
                        extraCss="d-block img-fluid w-100"
                        height="480"
                      />
                    </template>
                  </b-carousel-slide>
                  <b-carousel-slide>
                    <template v-slot:img>
                      <LazyImage
                        srcData="home/jeugdorkest/jeugdorkest3-min.jpeg"
                        fetchMode="srcset"
                        extraCss="d-block img-fluid w-100"
                        height="480"
                      />
                    </template>
                  </b-carousel-slide>
                  <b-carousel-slide>
                    <template v-slot:img>
                      <LazyImage
                        srcData="home/jeugdorkest/jeugdorkest4-min.jpeg"
                        fetchMode="srcset"
                        extraCss="d-block img-fluid w-100"
                        height="480"
                      />
                    </template>
                  </b-carousel-slide>
                  <b-carousel-slide>
                    <template v-slot:img>
                      <LazyImage
                        srcData="home/jeugdorkest/jeugdorkest5-min.jpeg"
                        fetchMode="srcset"
                        extraCss="d-block img-fluid w-100"
                        height="480"
                      />
                    </template>
                  </b-carousel-slide>
                </b-carousel>
              </client-only>
            </div>
          </div>
          <div class="col-md-6 order-md-1">
            <div class="pr-md-5" data-aos="fade-in" data-aos-delay="150">
              <icon
                name="smile-beam"
                class="mb-5 floating"
                size="lg"
                type="blue"
                shadow
                rounded
              ></icon>
              <h1 id="jeugdorkest">Jeugdorkest</h1>
              <p class="lead">
                Heb je de muziekmicrobe te pakken? Wil je op een leuke en
                speelse manier samen muziek maken? Dan moet je bij deze jeugdige
                muzikale bende zijn.
              </p>

              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="blue"
                      circle
                      class="mr-3"
                      icon="ni ni-check-bold"
                    ></badge>
                    <p>
                      Speel je een blaasinstrument (trompet, klarinet, hoorn,
                      trombone, bariton, tuba, dwarsfluit, hobo, fagot,
                      saxofoon) of doe je slagwerk, dan kan je bij ons
                      aansluiten!
                    </p>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="blue"
                      circle
                      class="mr-3"
                      icon="ni ni-like-2"
                    ></badge>
                    <p>
                      Je kan meespelen na je 1ste jaar instrumentles. Kevin
                      Absillis slaat er de maat. De harmonie stelt gratis een
                      instrument ter beschikking.
                    </p>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <badge
                      type="blue"
                      circle
                      class="mr-3"
                      icon="ni ni-calendar-grid-58"
                    ></badge>
                    <p>
                      De jeugdharmonie repeteert elke maandagavond van 19u tot
                      19u45.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Jeugdorkest -->

    <!-- Activiteiten -->
    <section
      class="masthead lazyload image-box demo"
      id="section10"
      :data-bg="
        `${require('../assets/img/home/header/music/music-chart_2560.jpg')}`
      "
    >
      <div class="container py-0 pb-lg">
        <div
          data-aos="fade"
          data-aos-delay="150"
          class="row justify-content-between align-items-center"
        >
          <div class="col-lg-5 mb-5 mb-lg-0">
            <icon
              name="ni ni-calendar-grid-58"
              class="mb-5 floating"
              size="lg"
              type="primary"
              shadow
              rounded
            ></icon>
            <h1 class="text-white font-weight-light">Activiteiten</h1>
            <p class="lead text-white mt-4">
              Ieder jaar zijn er een aantal vaste activiteiten: jaarconcert,
              kaas- en wijnconcert, opening Heusden kermis, muziekkamp,
              reuzenstoet, St. Cecilia,…
            </p>
          </div>
          <div class="col-lg-6 mb-lg-auto">
            <div
              class="rounded shadow-lg overflow-hidden transform-perspective-right"
            >
              <client-only>
                <b-carousel id="carousel3" controls indicators>
                  <!-- Text slides with image -->
                  <b-carousel-slide>
                    <template v-slot:img>
                      <LazyImage
                        srcData="home/activiteiten/jazz-min.jpeg"
                        fetchMode="srcset"
                        extraCss="d-block img-fluid w-100"
                        height="480"
                      />
                    </template>
                  </b-carousel-slide>
                </b-carousel>
              </client-only>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Activiteiten -->

    <!-- Dirigent -->
    <section class="section section-lg">
      <div class="container">
        <div class="row justify-content-center text-center mb-sm">
          <div class="col-lg-8">
            <h1>Dirigent</h1>
          </div>
          <blockquote class="blockquote text-center">
            <p class="mb-0">
              Het belangrijkste in de muziek staat niet in de noten.
            </p>
            <footer class="blockquote-footer">Kevin Absillis</footer>
          </blockquote>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
            <div class="px-4">
              <LazyImage
                srcData="home/dirigent/dirigent2.jpeg"
                fetchMode="srcset"
                extraCss="rounded img-center img-fluid shadow shadow-lg--hover"
                height="width: 200px;"
              />

              <div class="pt-4 text-center">
                <h5 class="title">
                  <span class="d-block mb-1">Kevin Absillis</span>
                  <small class="h6 text-muted">Dirigent</small>
                </h5>
                <div class="mt-3">
                  <base-button
                    tag="a"
                    href="dirigent"
                    type="primary"
                    icon="fa fa-globe"
                    rounded
                    icon-only
                  ></base-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end Dirigent -->

    <!-- Adres -->
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <LazyImage
          srcData="home/header/trumpet2.jpg"
          fetchMode="srcset"
          extraCss="img-fluid w-100"
        />
      </div>

      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <a href="https://goo.gl/maps/YgziKZGExWnQW9cd7">
              <icon
                name="ni ni-pin-3"
                class="mb-5 floating"
                size="lg"
                type="white"
                shadow
                rounded
              ></icon>
            </a>
            <h1 class="text-white font-weight-light">
              Hoe kan je ons bereiken?
            </h1>

            <a
              href="https://goo.gl/maps/YgziKZGExWnQW9cd7"
              class="lead text-white"
              target="blank"
            >
              <icon name="ni ni-map-big" size="sm" type="white"></icon
              >&nbsp;Kerkenblook z/n
              <p class="lead text-white">3550 Heusden-Zolder</p>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- end Adres -->

    <!-- Contact -->
    <section class="section section-lg pt-lg-0 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--300">
          <div class="col-lg-8">
            <form
              name="contact"
              id="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <card
                gradient="secondary"
                shadow
                body-classes="p-lg-5"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <h4 class="mb-1">Wil je meer van ons weten?</h4>
                <p class="mt-0">Een mailtje kan geen kwaad.</p>

                <div v-show="false">
                  <input name="form-name" value="contact" />
                </div>

                <ValidationObserver v-slot="{ invalid }">
                  <ValidationProvider name="model.name" rules="required|min:1">
                    <div slot-scope="{ errors }">
                      <base-input
                        name="name"
                        class="mt-5"
                        alternative
                        placeholder="Naam"
                        type="text"
                        addon-left-icon="ni ni-circle-08"
                        v-model="model.name"
                        :error="errors[0]"
                      ></base-input>
                    </div>
                  </ValidationProvider>
                  <ValidationProvider name="email" rules="required|min:3|email">
                    <div slot-scope="{ errors }">
                      <base-input
                        name="email"
                        type="email"
                        alternative
                        placeholder="Email"
                        v-model="email"
                        addon-left-icon="ni ni-email-83"
                        :error="errors[0]"
                      ></base-input>
                    </div>
                  </ValidationProvider>
                  <ValidationProvider
                    name="model.message"
                    rules="required|min:1"
                  >
                    <div slot-scope="{ errors }">
                      <base-input class="mb-4" :error="errors[0]">
                        <textarea
                          name="message"
                          class="form-control form-control-alternative"
                          rows="4"
                          cols="80"
                          placeholder="Schrijf je bericht..."
                          v-model="model.message"
                        ></textarea>
                      </base-input>
                    </div>
                  </ValidationProvider>
                  <b-button
                    block
                    type="submit"
                    variant="default"
                    round
                    :disabled="invalid"
                  >
                    <icon name="ni ni-send" size="sm"></icon>&nbsp;Verstuur
                  </b-button>
                </ValidationObserver>
              </card>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- end Contact -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

import { articleVuexNamespace } from '~/store/article/const';

import { BCarousel, BCarouselSlide } from 'bootstrap-vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

@Component({
  layout: 'appHeader',

  components: {
    BaseButton: () =>
      import(
        /* webpackChunkName: 'base-button' */ '@/components/BaseButton.vue'
      ),
    Card: () => import(/* webpackChunkName: 'card' */ '@/components/Card.vue'),
    Badge: () =>
      import(/* webpackChunkName: 'badge' */ '@/components/Badge.vue'),
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),
    BaseInput: () =>
      import(/* webpackChunkName: 'base-input' */ '@/components/BaseInput.vue'),

    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
    LazyPicture: () =>
      import(
        /* webpackChunkName: 'lazy-picture' */ '@/components/LazyPicture.vue'
      ),
    ValidationObserver,
    ValidationProvider
  }
})
export default class IndexPage extends Vue {
  private title = 'Home';

  private modals = {
    modal3: false
  };

  private model = {
    name: '',
    message: ''
  };

  private email = '';

  @articleVuexNamespace.Getter('loading')
  private loading!: boolean;

  head() {
    return {
      title: this.title
    };
  }

  scrollToHash() {
    var hash = this.$nuxt.$route.hash;
    this.$nextTick(() => {
      this.$scrollTo(hash, 0, { offset: -120 });
    });
  }

  /*   created() {
    this.$store.watch(
      state => state.article.status.loading,
      () => {
        console.log('created watch');
        const loading = this.$store.state.article.status.loading;
        if (loading === false) {
          //this.show = true;
          //this.$store.commit('snackbar/setSnack', '');
        }
      }
    );
  } */

  /*   mounted() {
    if (this.$nuxt.$route.hash) {
      this.scrollToHash();
    }
    setInterval(() => {
      this.$store.state.article.status.loading = !this.$store.state
        .article.status.loading;
    }, 1000);
    this.$store.watch(
      () => this.$store.state.article.status.loading,
      () => {
        console.log('mounted watch ');
      }
    );
  } */

  /**
   * Will be called after all middleware has run and validation has cleared, so by the time it runs we know for certain this page will render.
   * This makes it ideal for fetching expensive data that is necessary for page render but that you wouldn't want to do speculatively.
   * Fetching data as soon as the component's been mounted
   * Both are *only executed for pages (NOT components).
   * Should be used for data intended for VueX store - it does not need to return anything and should instead commit to store any required data.
   * It can use async/await.
   * Warning: You don't have access of the component instance through this inside fetch because it is called before initiating the component.
   * */
  async fetch({ store, params }) {
    /* if (store.getters['article/list'].length === 0) {
      console.info('Fetching data from API');
      return await store.dispatch('article/fetchData');
    }
    console.info('Store was not empty --> fetched data from store'); */
  }
}
</script>
<style scoped lang="scss">
.masthead {
  height: 100vh;
  min-height: 500px;
  background-image: url(../assets/img/home/header/music/music-chart.jpg?lqip);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
header.blur {
  filter: blur(25px);
}
header.lazyloaded {
  opacity: 0;
  animation-name: fadein;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &.blur {
    filter: blur(0);
  }
}

#thanks {
  background-color: #fff;
}
#thanks::after {
  content: none;
}
#thanks div {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.demo a {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
}
.demo a:hover {
  opacity: 0.5;
}

#section10 a {
  padding-top: 60px;
}
#section10 a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid #e9ecef;
  border-radius: 50px;
  box-sizing: border-box;
}
#section10 a span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: '';
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: #e9ecef;
  border-radius: 100%;
  -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb10 {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.c-lerp-block_title {
  display: inline-block;
  vertical-align: middle;
  span {
    display: inline-block;
    min-width: 0.3em;
  }
}


</style>
