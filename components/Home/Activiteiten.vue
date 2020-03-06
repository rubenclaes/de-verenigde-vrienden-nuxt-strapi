<template>
  <!-- Activiteiten -->
  <section
    class="section section-lg"
    id="section10"
    :data-bg="
        `${require('../../assets/img/home/header/trumpet-tamborine-and-flute-instruments.jpg')}`
      "
  >
    <div class="container py-0 pb-lg">
      <div class="row justify-content-between align-items-center">
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
          <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
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
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue')
  }
})
export default class Activiteiten extends Vue {}
</script>