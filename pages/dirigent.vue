<template>
  <div class="profile-page">
    <section class="section-shaped my-0 skew-separator skew-mini">
      <div class="page-header page-header-small header-filter">
        <div
          class="page-header-image"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
        <div class="container">
          <div class="header-body text-center mb-7">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                <h1 class="text-white">Kevin Absillis</h1>

                <blockquote class="blockquote text-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 14.1818L4.57143 0H9.52381L5.71429 13.2893H9.52381V24H0V14.1818ZM14.4762 14.1818L19.0476 0H24L20.1905 13.2893H24V24H14.4762V14.1818Z"
                      fill="#88DD9B"
                    />
                  </svg>
                  <p class="text-lead text-white">
                    Het belangrijkste in de muziek staat niet in de noten.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <card shadow class="card-profile mt--200" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2 mb-5">
                <div class="card-profile-image">
                  <LazyImage
                    srcData="dirigent/dirigent3.jpeg"
                    fetchMode="srcset"
                    extraCss="rounded-circle"
                  />
                </div>
              </div>
              <div
                class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"
              >
                <div class="card-profile-actions py-4 mt-lg-0"></div>
              </div>
              <div class="col-lg-4 order-lg-1">
                <div class="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span class="heading"></span>
                    <span class="description"></span>
                  </div>
                  <div>
                    <span class="heading"></span>
                    <span class="description"></span>
                  </div>
                  <div>
                    <span class="heading"></span>
                    <span class="description"></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center mt-5">
              <div class="h6 font-weight-300"></div>
            </div>

            <div class="mt-5 py-5 border-top">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>
                    Onze harmonie wordt geleid door Kevin Absillis. Kevin zette
                    op 7-jarige leeftijd zijn eerste stappen in de muziek bij
                    Brassband Sint-Cecilia in Leest. Toen hij 17 jaar was,
                    besloot hij van zijn hobby zijn beroep te maken. Hij begon
                    studies tenortrombone aan het Lemmensinstituut te Leuven,
                    maar ruilde er al vlug zijn instrument in voor een
                    bastrombone. In 2009 rondde hij zijn studie af als Master in
                    de muziek, optie bastrombone.
                  </p>
                  <p>
                    Hoewel hij nog jong is, kan Kevin al een indrukwekkend
                    palmares voorleggen. Zo speelde hij mee in verschillende
                    vooraanstaande orkesten en ensembles, waaronder het Brussels
                    Philharmonic Orchestra, het Golden Symphonic Orchestra, het
                    orkest van de Vlaamse Opera, het Limburgs Symfonie Orkest,
                    het Kamerorkest van Vlaanderen, het ensemble Il Novecento,
                    het Orkest van de Koninklijke Muntschouwberg, het Nationaal
                    Orkest van België, de Philharmonie van Luik en het
                    kamerorkest Continuo uit Rotterdam.
                  </p>

                  <p>
                    Kevin is bijzonder bekommerd om de opleiding van jonge
                    muzikanten, die de toekomst van onze harmonie moeten
                    waarborgen. Al onmiddellijk na zijn aantreden als dirigent,
                    begin 2017, ging hij met veel enthousiasme een aantal
                    jongeren begeleiden bij hun eerste stapjes in de
                    blaasmuziek.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';

@Component({
  layout: 'appHeader',
  components: {
    Logo: () => import('@/components/Logo.vue'),

    Card: () => import('@/components/Card.vue'),

    Icon: () => import('@/components/Icon.vue'),

    LazyImage: () => import('@/components/LazyImage.vue'),
  },
})
export default class DirigentPage extends Vue {
  private title: string = 'Dirigent';
  private image = '../img/dirigent/dirigent.jpeg';
  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }],
    };
  }
}
</script>
