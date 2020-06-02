<template>
  <card
    type="secondary"
    shadow
    header-classes="bg-white pb-5"
    body-classes="px-lg-5 py-lg-5"
    class="border-0"
  >
    <template class="text-center" #header>
      <div class="row justify-content-between">
        <div class="col-md-4 text-left">
          <img class="mb-2 w-100" :src="image" alt="Logo" />
          <h6>
            Kerkenblookstraat zn, 3550 Heusden-Zolder
          </h6>
          <small class="d-block text-muted">tel: 011 43 13 89</small>
        </div>
        <div class="col-lg-3 col-md-5 text-left mt-3">
          <h4 class="mb-1">Billed to:</h4>
          <span class="d-block">James Thompson</span>
          <p>
            Bld Mihail Kogalniceanu,<br />
            7652 Bucharest,<br />
            Romania
          </p>
        </div>
      </div>
      <br />
      <div class="row justify-content-md-between">
        <div class="col-md-4">
          <h3 class="mt-3 text-left">
            Invoice no <br /><small class="mr-2">#0453119</small>
          </h3>
        </div>
        <div class="col-lg-4 col-md-5">
          <div class="row mt-5">
            <div class="col-md-6">Invoice date:</div>
            <div class="col-md-6">06/03/2019</div>
          </div>
          <div class="row">
            <div class="col-md-6">Due date:</div>
            <div class="col-md-6">11/03/2019</div>
          </div>
        </div>
      </div>
    </template>

    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table text-right">
            <thead class="bg-default">
              <tr>
                <th scope="col" class="text-right text-white">Item</th>
                <th scope="col" class="text-right text-white">Qty</th>
                <th scope="col" class="text-right text-white">Rate</th>
                <th scope="col" class="text-right text-white">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Premium Support</td>
                <td>1</td>
                <td>$ 9.00</td>
                <td>$ 9.00</td>
              </tr>
              <tr>
                <td>BLK Design System PRO</td>
                <td>3</td>
                <td>$ 100.00</td>
                <td>$ 300.00</td>
              </tr>
              <tr>
                <td>Parts for service</td>
                <td>1</td>
                <td>$ 89.00</td>
                <td>$ 89.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th class="h4">Total</th>
                <th colspan="3" class="text-right h4">$ 750</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>

    <template class="text-right" #footer>
      <div class="col-md-5 ml-auto">
        <h5>Thank you!</h5>
        <p class="description">
          If you encounter any issues related to the invoice you can contact us
          at:
        </p>
        <h6 class="d-block">
          email:
          <small class="text-muted">support@cretive-tim.com</small>
        </h6>
      </div>
    </template>
  </card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
    Card: () => import('@/components/Card.vue'),

    Icon: () => import('@/components/Icon.vue'),

    DishPreview: () => import('@/components/DishPreview.vue'),
    LazyImage: () => import('@/components/LazyImage.vue'),
  },
})
export default class InvoiceCard extends Vue {
  @Prop({ type: String, default: 'ni ni-calendar-grid-58' })
  icon!: String;

  @Prop({ type: String, default: 'primary' })
  type!: String;

  @Prop({ type: String, default: 'text-primary' })
  textColor!: String;

  private image = require('../assets/brand/logo_color3.svg');
}
</script>

<style lang="scss"></style>
