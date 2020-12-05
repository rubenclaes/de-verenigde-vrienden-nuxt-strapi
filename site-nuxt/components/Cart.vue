<!-- components/Cart.vue -->

<template>
  <ul class="list-group mb-3">
    <div v-if="itemsInCart() && itemsInCart().length > 0">
      <li
        v-for="item in itemsInCart()"
        :key="item.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <h6 class="my-0">
            {{ item.name }}
            <span class="badge badge-primary badge-pill"
              >&euro; {{ item.price }}</span
            >
          </h6>
        </div>
        <div class="btn-group mb-1">
          <base-button
            @click="decrementItemQuantity(item.id)"
            size="sm"
            type="info"
            icon="fa fa-minus"
            icon-only
          ></base-button>
          <base-button
            @click="incrementItemQuantity(item.id)"
            size="sm"
            type="info"
            icon="fa fa-plus"
            icon-only
          ></base-button>
        </div>

        <span> {{ item.quantity }} </span>

        <div class="col-auto">
          <base-button
            @click="removeFromCart(item)"
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
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Item } from '../store/cart/types';

@Component({
  components: {
    BaseButton: () =>
      import(
        /* webpackChunkName: 'base-button' */ '@/components/BaseButton.vue'
      ),
  },
})
export default class Cart extends Vue {
  removeFromCart(dish) {
    this.$store.commit('cart/removeFromCart', dish);
  }

  itemsInCart(): Item[] {
    return this.$store.getters['cart/list'];
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
}
</script>
