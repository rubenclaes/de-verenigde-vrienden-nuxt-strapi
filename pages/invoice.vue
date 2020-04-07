<template>
  <div>
    <section class="section section-lg pt-lg-0">
      <div class="container pt-lg-md">
        <div class="row justify-content-center">
          <div class="col-lg-10"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';

@Component({
  layout: 'appColor',

  components: {}
})
export default class EetdagPage extends Vue {
  private title: string = 'Invoice';
  head() {
    return {
      title: this.title,
      meta: [{ hid: 'og:title', property: 'og:title', content: this.title }]
    };
  }
}
</script>
