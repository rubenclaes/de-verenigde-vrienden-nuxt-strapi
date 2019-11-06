<!-- components/NewsCard.vue -->

<template>
  <card class="border-0" hover shadow body-classes="py-5">
    <template #image>
      <img v-lazy="restaurant.image.url" class="card-img-top cardThumbnail" alt="Nieuws afbeelding" />
    </template>

    <icon :name="icon" :type="type" rounded class="mb-4"></icon>
    <h6 v-bind:class="textColor" class="text-uppercase">{{restaurant.name}}</h6>
    <p
      class="description mt-3"
    >{{ restaurant.description.substring(0,100) || 'Geen omschrijving'}}...</p>
    <div>
      <badge
        v-if="restaurant.Categories[0].Tag1"
        :type="type"
        rounded
      >{{restaurant.Categories[0].Tag1}}</badge>
      <badge
        v-if="restaurant.Categories[0].Tag2"
        :type="type"
        rounded
      >{{restaurant.Categories[0].Tag2}}</badge>
      <badge
        v-if="restaurant.Categories[0].Tag3"
        :type="type"
        rounded
      >{{restaurant.Categories[0].Tag3}}</badge>
    </div>
    <router-link
      :to="{ name: 'restaurants-id', params: { id: restaurant.id }}"
      tag="a"
      class="btn mt-4"
      :class="buttonType"
    >Lees meer</router-link>
  </card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Restaurant } from '../store/restaurant/types';
import { restaurantVuexNamespace } from '../store/restaurant/const';

@Component({
  components: {
    BaseButton: () => import('@/components/BaseButton.vue'),
    BaseCheckbox: () => import('@/components/BaseCheckbox.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue')
  }
})
export default class NewsCard extends Vue {
  @Prop({ type: Object, required: true })
  restaurant!: Restaurant;

  @Prop({ type: String, required: true })
  icon!: String;

  @Prop({ type: String, required: true })
  type!: String;

  @Prop({ type: String, required: true })
  buttonType!: String;

  @Prop({ type: String, required: true })
  textColor!: String;

  /* @Watch('$store.state.restaurant.status.loading')
  private watchSomething() {
    console.log('wow');
  } */
  /**
   * We use created here instead of mounted because it doesn’t need to be rerun if we leave this layout and come back to it.
   * */
  /*   created() {
    this.$store.watch(
      state => state.restaurant.status.loading,
      () => {
        console.log('created watch');
        const loading = this.$store.state.restaurant.status.loading;
        if (loading === false) {
          this.show = true;
          //this.$store.commit('snackbar/setSnack', '');
        }
      }
    );
  } */

  /* mounted() {
    this.$store.watch(
      () => this.$store.state.restaurant.status.loading,
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