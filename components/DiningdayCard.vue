<!-- components/DiningDayCard.vue -->

<template>
  <card
    type="secondary"
    shadow
    header-classes="bg-white pb-5"
    body-classes="px-lg-5 py-lg-5"
    class="border-0"
    v-if="diningday"
  >
    <template #image>
      <img v-lazy="diningday.image.url" class="card-img-top cardThumbnail" alt="Eetdag afbeelding" />
    </template>

    <icon :name="icon" :type="type" rounded class="mb-4"></icon>
    <h6 v-bind:class="textColor" class="text-uppercase">{{diningday.name}}</h6>
    <p class="description mt-3">{{ diningday.description || 'Geen omschrijving'}}</p>

    <template>
      <div class="text-center text-muted mb-4">
        <small>Kies je gerecht:</small>
      </div>

      <dish-preview v-for="(dish) in diningday.dishes" :key="dish.id" :dish="dish"></dish-preview>
    </template>
  </card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { DiningDay } from '../store/diningday/types';

@Component({
  components: {
    BaseButton: () => import('@/components/BaseButton.vue'),
    BaseCheckbox: () => import('@/components/BaseCheckbox.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
    DishPreview: () => import('@/components/DishPreview.vue')
  }
})
export default class DiningdayCard extends Vue {
  @Prop({ type: Object, required: true })
  diningday!: DiningDay;

  @Prop({ type: String, required: true })
  icon!: String;

  @Prop({ type: String, required: true })
  type!: String;

  @Prop({ type: String, required: true })
  buttonType!: String;

  @Prop({ type: String, required: true })
  textColor!: String;

  /* @Watch('$store.state.diningday.status.loading')
  private watchSomething() {
    console.log('wow');
  } */
  /**
   * We use created here instead of mounted because it doesn’t need to be rerun if we leave this layout and come back to it.
   * */
  /*   created() {
    this.$store.watch(
      state => state.diningday.status.loading,
      () => {
        console.log('created watch');
        const loading = this.$store.state.diningday.status.loading;
        if (loading === false) {
          this.show = true;
          //this.$store.commit('snackbar/setSnack', '');
        }
      }
    );
  } */

  /* mounted() {
    this.$store.watch(
      () => this.$store.state.diningday.status.loading,
      () => {
        console.log('watched: ');
      }
    );
  } */
}
</script>

<style lang="scss">
.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
  &[lazy='loaded'] {
    opacity: 1;
  }
}
</style>