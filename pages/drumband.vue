<template>
  <div>
    <section class="section section-lg pt-lg-0">
      <!-- Repetitie  -->
      <section class="section section-lg">
        <div class="container">
          <div class="row row-grid align-items-center">
            <div class="back-top hidden-lg col-lg-12 col-md-12">
              <base-button
                size="lg"
                type="secondary"
                icon="ni ni-bold-left"
                @click="goToHome()"
              >naar home</base-button>
            </div>
            <div class="col-md-6">
              <div data-aos="fade-in" data-aos-delay="150" class="pl-md-5">
                <h1>Drumband</h1>
                <p class="lead">
                  De drumband Just For Fun o.l.v. Domien Poelmans begeleidt de
                  harmonie bij korte straatparades. En samen met de oud-drummers
                  van ’De Bergengalm’ uit Hechtel lukt het hen toch om af en toe
                  nog eens een concertje te geven.
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="card bg-default shadow border-0">
                <LazyImage
                  srcData="drumband/drumband3.jpg"
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
                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default" />
                  </svg>
                  <h4 class="display-3 font-weight-bold text-white">Repetitie</h4>
                  <p class="lead text-italic text-white">
                    Deze ritmebende oefent één maal per maand in Heusden en één
                    maal per maand in Hechtel
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end Repetitie -->

      <!-- Weetjes -->
      <section class="section bg-secondary section-lg">
        <div class="container">
          <div class="row row-grid align-items-center">
            <div class="col-md-6 order-md-2">
              <div class="rounded shadow-lg overflow-hidden">
                <b-carousel id="carousel1">
                  <!-- Text slides with image -->
                  <b-carousel-slide>
                    <template v-slot:img>
                      <LazyImage
                        srcData="drumband/drumband1.jpg"
                        extraCss="img-fluid w-100 d-block"
                        fetchMode="srcset"
                      />
                    </template>
                  </b-carousel-slide>
                </b-carousel>
              </div>
            </div>
            <div class="col-md-6 order-md-1">
              <div class="pr-md-5" data-aos="fade-in" data-aos-delay="150">
                <icon
                  name="ni ni-satisfied"
                  class="mb-5 floating"
                  size="lg"
                  type="success"
                  shadow
                  rounded
                ></icon>
                <h1 id="jeugdorkest">Weetjes</h1>
                <p class="lead"></p>

                <ul class="list-unstyled mt-5">
                  <li class="py-2">
                    <div class="d-flex align-items-center">
                      <badge type="success" circle class="mr-3" icon="ni ni-like-2"></badge>
                      <p>
                        Drumband De Toekomst was in de jaren ’90 een stille dood
                        gestorven, maar in 2002 is er een nieuwe start gemaakt
                        onder de naam “Just for Fun”.
                      </p>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="d-flex align-items-center">
                      <badge type="success" circle class="mr-3" icon="ni ni-calendar-grid-58"></badge>
                      <p>
                        Het 100-jarig bestaan van de harmonie is aanleiding om de
                        vroegere leden, intussen allemaal volwassen mannen en
                        vrouwen geworden, nog eens samen te brengen en de
                        trommelstokken opnieuw ter hand te nemen.
                      </p>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="d-flex align-items-center">
                      <badge type="success" circle class="mr-3" icon="ni ni-check-bold"></badge>
                      <p>
                        Sindsdien repeteert de drumband regelmatig en neemt het
                        deel aan de activiteiten van de harmonie, zoals het
                        jaarconcert en de opening van de kermis in juni. Het is
                        niet meer competitiegericht zoals in de vroegere jaren,
                        maar “puur voor de lol”, zoals de naam het zegt.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end Weetjes -->
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  layout: 'appColor',

  components: {
    Badge: () =>
      import(/* webpackChunkName: 'badge' */ '@/components/Badge.vue'),
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
    BaseButton: () =>
      import(
        /* webpackChunkName: 'base-button' */ '@/components/BaseButton.vue'
      ),
  },
})
export default class DrumbandPage extends Vue {
  private title: string = 'Drumband';
  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }],
    };
  }
  goToHome() {
    this.$router.push({ path: '/' });
  }
}
</script>
<style></style>
