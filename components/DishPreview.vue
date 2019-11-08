<!-- components/DishPreview.vue -->

<template>
  <div>
    <h2>{{ dish.name }}</h2>
    <p>{{ dish.price }}</p>
    <base-button href="dirigent" type="primary" icon="fa fa-plus" rounded icon-only></base-button>
    <base-button href="dirigent" type="secondary" icon="fa fa-minus" rounded icon-only></base-button>
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
}
</script>