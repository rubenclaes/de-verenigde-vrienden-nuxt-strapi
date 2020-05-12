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
              <div class="col-lg-12">
                <client-only>
                  <!-- start NewsList -->
                  <news-list></news-list>
                </client-only>
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
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  layout: 'appColor',
  components: {
    BaseButton: () => import('@/components/BaseButton.vue'),
    BaseInput: () => import('@/components/BaseInput.vue'),
    NewsList: () =>
      import(/* webpackChunkName: 'news-list' */ '@/components/NewsList.vue'),
  },
})
export default class NieuwsPage extends Vue {
  private title: string = 'Nieuws';

  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }],
    };
  }
}
</script>
