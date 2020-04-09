<template>
  <div class="diningday-page">
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
                <h1 class="text-white">Invoice</h1>

                <p class="text-lead text-white">
                  Bedankt voor je bestelling
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <!-- start Invoice -->
            <invoice-card class="mt--200"></invoice-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';

@Component({
  layout: 'appHeader',

  components: {
    InvoiceCard: () => import('@/components/InvoiceCard.vue'),
  },
})
export default class EetdagPage extends Vue {
  private title: string = 'Invoice';
  private image = '../img/invoice/payment.jpg';
  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }],
    };
  }
}
</script>
