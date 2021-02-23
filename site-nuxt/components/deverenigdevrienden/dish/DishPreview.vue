<!-- components/DishPreview.vue -->
<template>
  <div class="list-group-item list-group-item-action">
    <div class="row align-items-center">
      <div class="col-auto">
        <!-- Avatar -->
        <img
          alt="Image placeholder"
          src="http://placehold.it/80x80"
          class="avatar rounded-circle"
        />
      </div>
      <div class="col ml--2">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <h4 class="mb-0 text-sm">{{ dish.name }}</h4>
          </div>
          <div class="text-right text-muted">
            <small>{{ dish.price | euro }}</small>
          </div>
        </div>
        <p class="text-sm mb-0">{{ dish.description }}</p>
      </div>
      <div class="col-auto">
        <base-button @click="addToCart(dish)" size="sm" type="success"
          >Bestel</base-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Dish } from '@/store/diningday/types';
import { Item } from '@/store/cart/types';

@Component({
  components: { BaseButton: () => import('@/components/BaseButton.vue') },
})
export default class DishPreview extends Vue {
  @Prop({ type: Object, required: true })
  dish!: Dish;

  addToCart(dish: Dish) {
    const itemToAdd: Item = {
      id: dish.id,
      price: dish.price,
      name: dish.name,
      quantity: 1,
      shopId: 0,
    };
    this.$store.commit('cart/addToCart', itemToAdd);
    this.$toasted.success(
      `<strong>${dish.name}</strong>&nbsp;toegevoegd aan mandje`,
      {
        iconPack: 'fontawesome',
        duration: 2000,
        position: 'bottom-right',
        icon: 'check',
        action: {
          text: 'Cancel',
          onClick: (e, toastObject) => {
            this.$store.commit('cart/removeFromCart', dish);
            toastObject.goAway(0);
          },
        },
      }
    );
  }
}
</script>
