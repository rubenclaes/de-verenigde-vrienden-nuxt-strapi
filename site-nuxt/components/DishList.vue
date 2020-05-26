<template>
  <card
    type="secondary"
    shadow
    header-classes="bg-white pb-5"
    body-classes="px-lg-5 py-lg-5"
    class="border-0"
    v-if="currentDiningDay"
  >
    <template #image>
      <LazyImage
        :srcData="diningday.image.url"
        extraCss="card-img-top cardThumbnail"
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
      <div class="list-group list-group-flush">
        <dish-preview
          v-for="dish in currentDiningDay.dishes"
          :key="dish.id"
          :dish="dish"
        ></dish-preview>
      </div>
    </template>
  </card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { DiningDay } from '../store/diningday/types';
import { diningDayVuexNamespace } from '~/store/diningday/const';

@Component({
  components: {
    Card: () => import('@/components/Card.vue'),

    Icon: () => import('@/components/Icon.vue'),

    DishPreview: () => import('@/components/DishPreview.vue'),
    LazyImage: () => import('@/components/LazyImage.vue'),
  },
})
export default class DishList extends Vue {
  @diningDayVuexNamespace.Getter('currentDiningDay')
  private currentDiningDay!: DiningDay;

  @Prop({ type: String, default: 'ni ni-calendar-grid-58' })
  icon!: String;

  @Prop({ type: String, default: 'primary' })
  type!: String;

  @Prop({ type: String, default: 'text-primary' })
  textColor!: String;

  @Prop({ type: Object })
  diningday!: DiningDay;

  /**
   * We use created here instead of mounted because it doesn’t need to be rerun if we leave this layout and come back to it.
   */
  async created() {
    if (this.$store.getters['diningday/list'].length === 0) {
      return await this.$store.dispatch(
        'diningday/fetchDiningDay',
        this.diningday.id
      );
    } else {
      console.info('diningday Store not empty --> fetching data from store');
    }
  }
}
</script>
