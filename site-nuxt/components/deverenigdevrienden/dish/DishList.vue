<template>
  <card
    type="secondary"
    shadow
    header-classes="bg-white pb-5"
    body-classes="px-lg-5 py-lg-5"
    class="border-0"
  >
    <template #image>
      <slot name="picture"> </slot>
    </template>

    <icon :name="icon" :type="type" rounded class="mb-4"></icon>

    <slot name="description"> </slot>

    <dish-preview v-for="dish in dishes" :key="dish.id" :dish="dish" />
  </card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Dish } from '~/store/diningday/types';

@Component({
  components: {
    Card: () => import(/* webpackChunkName: 'card' */ '@/components/Card.vue'),
    Icon: () => import(/* webpackChunkName: 'icont' */ '@/components/Icon.vue'),
    DishPreview: () =>
      import(
        /* webpackChunkName: 'dish-preview' */ '@/components/deverenigdevrienden/dish/DishPreview.vue'
      ),
  },
})
export default class DishList extends Vue {
  @Prop({ type: String, default: 'ni ni-calendar-grid-58' })
  icon!: String;

  @Prop({ type: String, default: 'primary' })
  type!: String;

  @Prop({ type: String, default: 'text-primary' })
  textColor!: String;

  @Prop({ type: Array })
  dishes!: Dish[];
}
</script>
