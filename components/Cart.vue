<!-- components/DishPreview.vue -->

<template>
  <div>
    <li
      v-for="(product) in productsInCart()"
      :key="product.id"
      class="list-group-item d-flex justify-content-between lh-condensed"
    >
      <div>
        <h6 class="my-0">{{ product.title }}</h6>
      </div>

      <base-button
        @click="quantity > 0 ? quantity-- : quantity = 0"
        size="sm"
        type="secondary"
        icon="fa fa-minus"
        rounded
        icon-only
      ></base-button>
      {{ product.quantity }}
      <base-button @click="quantity++" size="sm" type="primary" icon="fa fa-plus" rounded icon-only></base-button>
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
}
</script>