<!-- components/Cart.vue -->

<template>
  <ul class="list-group mb-3">
    <div v-if="productsInCart() && productsInCart().length > 0">
      <li
        v-for="product in productsInCart()"
        :key="product.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <h6 class="my-0">{{ product.title }}</h6>
        </div>

        <base-button
          @click="decrementItemQuantity(product.id)"
          size="sm"
          type="secondary"
          icon="fa fa-minus"
          rounded
          outline
          icon-only
        ></base-button>

        {{ product.quantity }}

        <base-button
          @click="incrementItemQuantity(product.id)"
          size="sm"
          type="primary"
          icon="fa fa-plus"
          outline
          rounded
        ></base-button>

        <span class="badge badge-primary badge-pill"
          >&euro; {{ product.price }}</span
        >

        <div class="col-auto">
          <base-button
            @click="removeFromCart(product)"
            size="sm"
            type="danger"
            icon="fa fa-trash"
            outline
            rounded
          ></base-button>
        </div>
      </li>
      <li
        v-if="false"
        class="list-group-item d-flex justify-content-between align-items-center bg-light"
      >
        <div class="text-success">
          <h6 class="my-0">Promo code</h6>
          <small>EXAMPLECODE</small>
        </div>
        <span class="text-success">-$5</span>
      </li>
      <li
        class="list-group-item active d-flex justify-content-between align-items-center"
      >
        <span>Totaal (EUR)</span>
        <strong>{{ price() | euro }}</strong>
      </li>
    </div>
    <li
      v-else
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      Winkelmandje is leeg. 😔
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Item } from '../store/cart/types';

@Component({
  components: { BaseButton: () => import('@/components/BaseButton.vue') }
})
export default class Cart extends Vue {
  removeFromCart(dish) {
    this.$store.commit('cart/remove', dish);
  }

  productsInCart() {
    return this.$store.getters['cart/cartProducts'];
  }

  incrementItemQuantity(id) {
    this.$store.commit('cart/incrementItemQuantity', { id });
  }

  decrementItemQuantity(id) {
    this.$store.commit('cart/decrementItemQuantity', { id });
  }

  deleteAllItemQuantity(id) {
    this.$store.commit('cart/deleteAllItemQuantity', { id });
  }

  price(): number {
    return this.$store.getters['cart/cartTotalPrice'];
  }

  /**
   * We use created here instead of mounted because it doesn’t need to be rerun if we leave this layout and come back to it.
   */
  async created() {
    if (this.$store.getters['diningday/list'].length === 0) {
      return await this.$store.dispatch('diningday/fetchData');
    } else {
      console.info('diningday Store not empty --> fetching data from store');
    }
  }
}
</script>
