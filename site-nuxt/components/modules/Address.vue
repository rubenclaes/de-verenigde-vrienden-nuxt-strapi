<template>
  <!-- Address -->
  <section
    class="section section-lg bg-secondary my-0 overflow-hidden"
    :style="styles()"
  >
    <div class="container py-0 pb-200">
      <div class="row text-center justify-content-center">
        <div class="col-lg-10">
          <icon
            :name="data.icon"
            class="mb-5 floating"
            size="lg"
            type="info"
            shadow
            rounded
          ></icon>

          <h1 class="font-weight-light">{{ data.title }}</h1>

          <a :href="data.address.map_url" target="blank">
            <p class="lead text-primary">
              <icon name="ni ni-map-big" size="sm" type="primary"></icon
              >&nbsp;{{ data.address.street }} {{ data.address.number }}
              {{ data.address.bus }}
            </p>
            <p class="lead text-primary">
              {{ data.address.zip }} {{ data.address.city }}
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- end Address -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),
  },
})
export default class Address extends Vue {
  @Prop({ type: Object, required: true })
  data;

  styles() {
    return {
      'background-image': `url(${require('../../assets/svg/inn.svg')})`,
      'background-attachement': `fixed`,
      'background-repeat': `no-repeat`,
      'background-position': `center`,
      'background-size': `cover`,
    };
  }
}
</script>
