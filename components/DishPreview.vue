<!-- components/DishPreview.vue -->

<template>
  <div class="row">
    <div class="col-12 col-sm-12 col-md-2 text-center">
      <img
        class="img-responsive"
        src="http://placehold.it/120x80"
        alt="prewiew"
        width="120"
        height="80"
      />
    </div>
    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
      <h4 class="product-name">
        <strong>{{ dish.name }}</strong>
      </h4>
      <h4>
        <small>{{ dish.description }}</small>
      </h4>
    </div>
    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
      <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
        <h6>
          <strong>&euro; {{ dish.price }}</strong>
        </h6>
      </div>

      <div class="col-2 col-sm-2 col-md-2 text-right">
        <base-button
          @click="addToCart(dish)"
          size="sm"
          type="success"
          icon="fa fa-shopping-cart"
          outline
        ></base-button>
      </div>
    </div>
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

  quantity = 1;

  data() {
    return {
      tempcart: [] // this object should be the same as the json store object, with an additional param, quantity
    };
  }

  addToCart(dish: Dish) {
    this.$toasted.success(`${dish.name} toegevoegd in mandje.`, {
      duration: 2000,
      position: 'bottom-center'
    });
    //this.$store.dispatch('cart/addProductToCart', this.dish);
  }
}
</script>
