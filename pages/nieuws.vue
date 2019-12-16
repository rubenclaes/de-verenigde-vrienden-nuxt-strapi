<template>
  <div>
    <section class="section section-lg pt-lg-0">
      <div class="container pt-lg-md">
        <div class="col-md-6">
          <base-input alternative placeholder="Zoek" addon-right-icon="ni ni-zoom-split-in"></base-input>
        </div>
        <!-- Using components -->
        <b-input-group size="lg" class="mt-3">
          <b-form-input v-model="value" type="text" debounce="500"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-success">Zoek</b-button>
          </b-input-group-append>
        </b-input-group>
        <div class="row">
          <news-card
            :key="article.id"
            :article="article"
            :icon="icon(index)"
            :type="colors[index]"
            :buttonType="buttons[index]"
            :textColor="text[index]"
          ></news-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';

import { Restaurant } from '../store/restaurant/types';
import { restaurantVuexNamespace } from '../store/restaurant/const';

@Component({
  layout: 'appColor',
  components: {
    Logo: () => import('@/components/Logo.vue'),
    BaseButton: () => import('@/components/BaseButton.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
    NewsList: () => import('@/components/NewsList.vue')
  }
})
export default class NieuwsPage extends Vue {
  @restaurantVuexNamespace.Getter('list')
  private news!: Restaurant[];

  private title = 'Nieuws';

  head() {
    return {
      title: this.title
    };
  }
}
</script>
