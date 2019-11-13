<!-- components/DishPreview.vue -->

<template>
  <div>
    <div>
      <h6 class="my-0">{{ dish.name }}</h6>
      <small class="text-muted">{{ dish.description }}</small>
    </div>

    <base-button
      @click="quantity > 0 ? quantity-- : quantity = 0"
      size="sm"
      type="secondary"
      icon="fa fa-minus"
      rounded
      icon-only
    ></base-button>
    {{quantity}}
    <base-button @click="quantity++" size="sm" type="primary" icon="fa fa-plus" rounded icon-only></base-button>
    <span class="text-muted">&euro; {{ dish.price }}</span>
    <base-button @click="removeFromCart(dish)" size="sm" type="danger" icon="fa fa-trash" outline></base-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Dish } from '../store/diningday/types';

@Component({
  components: { BaseButton: () => import('@/components/BaseButton.vue') }
})
export default class Cart extends Vue {
  @Prop({ type: Object, required: true })
  dish!: Dish;

  data() {
    return {
      quantity: 1,
      tempcart: [] // this object should be the same as the json store object, with an additional param, quantity
    };
  }

  removeFromCart() {
    this.$store.commit('cart/remove', this.dish);
  }
}
</script>