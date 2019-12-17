<!-- components/SkeletonCard.vue -->

<template>
  <card class="border-0" hover shadow body-classes="py-5">
    <template #image>
      <skeleton-box width="300px" height="120px" />
    </template>

    <icon :name="icon" :type="type" rounded class="mb-4"></icon>

    <skeleton-box :min-width="50" :max-width="70" />

    <skeleton-box />

    <div>
      <skeleton-box width="10px" height="10px" />
      <skeleton-box width="10px" height="10px" />
      <skeleton-box width="10px" height="10px" />
    </div>

    <skeleton-box width="10px" height="10px" />
  </card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Restaurant } from '../store/restaurant/types';

@Component({
  components: {
    Card: () => import('@/components/Card.vue'),

    Icon: () => import('@/components/Icon.vue'),
    SkeletonBox: () => import('@/components/SkeletonBox.vue')
  }
})
export default class NewsPreview extends Vue {
  @Prop({ type: String, default: 'ni ni-note-03' })
  icon!: String;

  @Prop({ type: String, default: 'primary' })
  type!: String;

  @Prop({ type: String, default: 'btn-primary' })
  buttonType!: String;

  @Prop({ type: String, default: 'text-primary' })
  textColor!: String;
}
</script>


