<template>
  <div>
    <section class="section section-lg pt-lg-0">
      <div class="container pt-lg-md">
        <!-- Using components -->
        <b-input-group size="lg" class="mt-3">
          <b-form-input type="text" debounce="500"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-success">Zoek</b-button>
          </b-input-group-append>
        </b-input-group>

        <!-- start Loading News -->
        <section class="section section-lg pt-lg-0 mt--100">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-12" data-aos="fade-up" data-aos-delay="150">
                <div v-if="loading" class="card-deck">
                  <skeleton-card />
                  <skeleton-card />
                  <skeleton-card />
                </div>

                <template v-else>
                  <!-- start NewsList -->
                  <client-only>
                    <news-list></news-list>
                  </client-only>
                </template>
              </div>
            </div>
          </div>
        </section>
        <!-- end Loading News -->
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';

import { Article } from '../store/article/types';
import { articleVuexNamespace } from '../store/article/const';

@Component({
  layout: 'appColor',
  components: {
    Logo: () => import('@/components/Logo.vue'),
    BaseButton: () => import('@/components/BaseButton.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
    BlogList: () => import('@/components/BlogList.vue'),
    NewsList: () =>
      import(/* webpackChunkName: 'news-list' */ '@/components/NewsList.vue'),
    SkeletonCard: () =>
      import(
        /* webpackChunkName: 'skeleton-card' */ '@/components/SkeletonCard.vue'
      )
  }
})
export default class NieuwsPage extends Vue {
  @articleVuexNamespace.Getter('loading')
  private loading!: boolean;

  private title: string = 'Nieuws';

  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }]
    };
  }
}
</script>
