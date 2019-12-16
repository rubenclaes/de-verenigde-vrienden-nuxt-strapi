<template>
  <div class="profile-page">
    <section class="section-profile-cover section-shaped my-0">
      <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>

    <section class="section section-skew">
      <div class="container">
        <card shadow class="card-profile mt--300" no-body>
          <div class="px-4">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2 mb-5">
                <div class="card-profile-image"></div>
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
              <h3>Privacy</h3>
              <div class="h6 font-weight-300"></div>
            </div>

            <div class="mt-5 py-5 border-top">
              <div class="row justify-content-center">
                <div class="col-lg-9">
                  <p>
                    Onze harmonie wordt thans geleid door Kevin Absillis. Kevin
                    zette op 7-jarige leeftijd zijn eerste stappen in de muziek
                    bij Brassband Sint-Cecilia in Leest. Toen hij 17 jaar was,
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
    BaseButton: () => import('@/components/BaseButton.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue')
  }
})
export default class PrivacyPage extends Vue {
  private title = 'Privacy';

  head() {
    return {
      title: this.title
    };
  }
}
</script>
