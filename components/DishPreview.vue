<!-- components/DishPreview.vue -->

<template>
  <div>
    <h2>{{ dish.name }}</h2>
    <p>
      &euro; {{ dish.price }} x
      <input
        type="number"
        step="1"
        max="99"
        min="1"
        value="1"
        title="Qty"
        class="qty"
        size="4"
      />
      =
    </p>
    <p class="quantity">
      <base-button
        @click="quantity > 0 ? quantity-- : quantity = 0"
        size="sm"
        type="secondary"
        icon="fa fa-minus"
        rounded
        icon-only
      ></base-button>

      <input
        type="number"
        step="1"
        max="99"
        min="1"
        value="1"
        title="Qty"
        class="qty"
        size="4"
        v-model="quantity"
      />
      <base-button @click="quantity++" size="sm" type="primary" icon="fa fa-plus" rounded icon-only></base-button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Dish } from '../store/diningday/types';

@Component({
  components: { BaseButton: () => import('@/components/BaseButton.vue') }
})
export default class DishPreview extends Vue {
  @Prop({ type: Object, required: true })
  dish!: Dish;

  data() {
    return {
      quantity: 1,
      tempcart: [] // this object should be the same as the json store object, with an additional param, quantity
    };
  }
}
</script>