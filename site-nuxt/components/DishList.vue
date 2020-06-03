<template>
  <card
    type="secondary"
    shadow
    header-classes="bg-white pb-5"
    body-classes="px-lg-5 py-lg-5"
    class="border-0"
  >
    <template #image>
      <LazyImage
        fetchMode="cloudinary"
        :placeholder="lqip()"
        :srcData="image()"
        extraCss="card-img-top cardThumbnail"
      />
    </template>

    <icon :name="icon" :type="type" rounded class="mb-4"></icon>

    <h4 v-bind:class="textColor" class="text-uppercase">
      {{ diningday.title }}
    </h4>

    <template v-if="diningday.description">
      <div v-html="$md.render(diningday.description)"></div>
    </template>

    <template>
      <div class="list-group list-group-flush">
        <div v-if="loading">
          <div class="text-center">
            <b-spinner
              style="width: 3rem; height: 3rem;"
              label="Large Spinner"
              type="grow"
            ></b-spinner>
          </div>
        </div>
        <template v-else>
          <client-only>
            <dish-preview
              v-for="dish in currentDiningDay.dishes"
              :key="dish.id"
              :dish="dish"
              :shopId="currentDiningDay.id"
            ></dish-preview>
          </client-only>
        </template>
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
    Card: () => import(/* webpackChunkName: 'card' */ '@/components/Card.vue'),

    Icon: () => import(/* webpackChunkName: 'icont' */ '@/components/Icon.vue'),

    DishPreview: () =>
      import(
        /* webpackChunkName: 'dish-preview' */ '@/components/DishPreview.vue'
      ),
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
  },
})
export default class DishList extends Vue {
  @diningDayVuexNamespace.Getter('loading')
  private loading!: boolean;

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

  lqip() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/${this.diningday.image.provider_metadata.public_id}/${this.diningday.image.name}`;
    return image;
  }

  image() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/${this.diningday.image.provider_metadata.public_id}/${this.diningday.image.name}`;
    return image;
  }

  /**
   * We use created here instead of mounted because it doesn’t need to be rerun if we leave this layout and come back to it.
   */
  async created() {
    // We need to get all products and set the state
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
