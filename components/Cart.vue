<!-- components/Cart.vue -->

<template>
  <div v-if="productsInCart() && productsInCart().length > 0">
    <li
      v-for="product in productsInCart()"
      :key="product.id"
      class="list-group-item d-flex justify-content-between lh-condensed"
    >
      <div>
        <h6 class="my-0">{{ product.title }}</h6>
      </div>

      <base-button
        @click="quantity > 0 ? quantity-- : (quantity = 0)"
        size="sm"
        type="secondary"
        icon="fa fa-minus"
        rounded
        icon-only
      ></base-button>

      {{ product.quantity }}

      <base-button
        @click="quantity++"
        size="sm"
        type="primary"
        icon="fa fa-plus"
        rounded
        icon-only
      ></base-button>

      <span class="text-muted">&euro; {{ product.price }}</span>

      <base-button
        @click="removeFromCart(product)"
        size="sm"
        type="danger"
        icon="fa fa-trash"
        outline
      ></base-button>
    </li>
  </div>
  <li
    v-else
    class="list-group-item d-flex justify-content-between lh-condensed"
  >
    Winkelmandje is leeg. 😔
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Item } from '../store/cart/types';

@Component({
  components: { BaseButton: () => import('@/components/BaseButton.vue') }
})
export default class Cart extends Vue {
  data() {
    return {
      quantity: 1,
      tempcart: [] // this object should be the same as the json store object, with an additional param, quantity
    };
  }

  removeFromCart(dish) {
    this.$store.commit('cart/remove', dish);
  }

  productsInCart() {
    return this.$store.getters['cart/cartProducts'];
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
