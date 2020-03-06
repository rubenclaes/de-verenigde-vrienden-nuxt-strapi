<template>
  <!-- Jeugdorkest -->
  <section class="section bg-secondary section-lg">
    <div class="container">
      <div class="row row-grid align-items-center">
        <div class="col-md-6 order-md-2">
          <div class="rounded shadow-lg overflow-hidden">
            <client-only>
              <b-carousel id="carousel1" :interval="4000" controls indicators>
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
              name="ni ni-smile-beam"
              class="mb-5 floating"
              size="lg"
              type="primary"
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
                  <badge type="blue" circle class="mr-3" icon="ni ni-check-bold"></badge>
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
                  <badge type="blue" circle class="mr-3" icon="ni ni-like-2"></badge>
                  <p>
                    Je kan meespelen na je 1ste jaar instrumentles. Kevin
                    Absillis slaat er de maat. De harmonie stelt gratis een
                    instrument ter beschikking.
                  </p>
                </div>
              </li>
              <li class="py-2">
                <div class="d-flex align-items-center">
                  <badge type="blue" circle class="mr-3" icon="ni ni-calendar-grid-58"></badge>
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
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Badge: () =>
      import(/* webpackChunkName: 'badge' */ '@/components/Badge.vue'),
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue')
  }
})
export default class Jeugdorkest extends Vue {}
</script>