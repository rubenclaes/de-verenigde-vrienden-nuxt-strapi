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
          <h6>Kerkenblookstraat zn, 3550 Heusden-Zolder</h6>
          <small class="d-block text-muted">tel: 011 43 13 89</small>
        </div>
        <div class="col-lg-3 col-md-5 text-left mt-3">
          <h4 class="mb-1">Adres begunstigde:</h4>
          <!-- <span class="d-block">James Thompson</span> -->
          <p>
            {{ order.address }},<br />
            {{ order.zip }}<br />
            België
          </p>
        </div>
      </div>
      <br />
      <div class="row justify-content-md-between">
        <div class="col-md-4">
          <h3 class="mt-3 text-left">
            Order nr. <br /><small class="mr-2">#{{ order.id }}</small>
          </h3>
        </div>
        <div class="col-lg-4 col-md-5">
          <div class="row mt-5">
            <div class="col-md-6">Datum bestlling:</div>
            <div class="col-md-6">{{ order.created_at | formattedDate }}</div>
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
                <th scope="col" class="text-right text-white">#</th>
                <th scope="col" class="text-right text-white">Prijs</th>
                <th scope="col" class="text-right text-white">Totaal</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="dish in order.dishes" :key="dish.id">
                <td>{{ dish.title }}</td>
                <td>{{ dish.quantity }}</td>
                <td>{{ dish.price | euro }}</td>
                <td>{{ (dish.price * dish.quantity) | euro }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th class="h4">Totaal</th>
                <th colspan="3" class="text-right h4">
                  {{ this.order.amount | euro }}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>

    <template class="text-right" #footer>
      <div class="col-md-5 ml-auto">
        <h5>Alvast bedankt!</h5>
        <p class="description">
          Hou zeker uw e-mail in de gaten. Ook de spam folder. Als u problemen
          ondervindt met betrekking tot de bestelling, kunt u contact met ons
          opnemen.
        </p>
        <h6 class="d-block">
          email:
          <small class="text-muted">info@deverenigdevriendenheusden.be</small>
        </h6>
      </div>
    </template>
  </card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Order } from '../store/cart/types';

@Component({
  components: {
    Card: () => import('@/components/Card.vue'),
    LazyImage: () => import('@/components/LazyImage.vue'),
    Icon: () => import('@/components/Icon.vue'),

    DishPreview: () =>
      import('@/components/deverenigdevrienden/dish/DishPreview.vue'),
  },
})
export default class InvoiceCard extends Vue {
  @Prop({ type: String, default: 'ni ni-calendar-grid-58' })
  icon!: String;

  @Prop({ type: String, default: 'primary' })
  type!: String;

  @Prop({ type: String, default: 'text-primary' })
  textColor!: String;

  @Prop({ type: Object, required: true })
  order!: Order;

  private image = require('../assets/brand/logo_color3.svg');
}
</script>

<style lang="scss"></style>
