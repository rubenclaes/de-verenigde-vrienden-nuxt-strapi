<template>
  <!-- LatestArticles -->

  <section class="section section-lg bg-secondary my-0 overflow-hidden blogs">
    <div class="container-fluid py-0 pb-200">
      <div class="row mb-md-5">
        <div class="col-md-8 mx-auto">
          <h1 class="font-weight-light text-center">{{ this.data.title }}</h1>

          <p class="lead text-center">
            {{ this.data.text }}
          </p>
        </div>
      </div>
      <client-only>
        <!-- start BlogList -->
        <blog-list></blog-list>
      </client-only>
    </div>
  </section>
  <!-- end LatestArticles -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    BlogList: () =>
      import(/* webpackChunkName: 'blog-list' */ '@/components/BlogList.vue'),
  },
})
export default class RecentWritings extends Vue {
  @Prop({ type: Object, required: true })
  data;
}
</script>
