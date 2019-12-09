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
      <img
        v-lazy="diningday.image.url"
        class="card-img-top cardThumbnail"
        alt="Eetdag afbeelding"
      />
    </template>

    <icon :name="icon" :type="type" rounded class="mb-4"></icon>
    <h6 v-bind:class="textColor" class="text-uppercase">
      {{ diningday.name }}
    </h6>
    <p class="description mt-3">
      {{ diningday.description || 'Geen omschrijving' }}
    </p>

    <template>
      <div class="text-center text-muted mb-4">
        <small>Kies je gerecht:</small>
      </div>

      <dish-preview
        v-for="dish in diningday.dishes"
        :key="dish.id"
        :dish="dish"
      ></dish-preview>
    </template>
  </card>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { DiningDay } from '../store/diningday/types';
import { diningDayVuexNamespace } from '~/store/diningday/const';

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
export default class DishList extends Vue {
  // computed properties are defined as non-null variables
  @diningDayVuexNamespace.Getter('latestDiningDay')
  private diningday!: DiningDay[];

  @Prop({ type: String, default: 'ni ni-calendar-grid-58' })
  icon!: String;

  @Prop({ type: String, default: 'primary' })
  type!: String;

  @Prop({ type: String, default: 'btn-primary' })
  buttonType!: String;

  @Prop({ type: String, default: 'text-primary' })
  textColor!: String;

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

<style lang="scss">
.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
  &[lazy='loaded'] {
    opacity: 1;
  }
}
</style>
