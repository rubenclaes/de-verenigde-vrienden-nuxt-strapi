<template>
  <!-- Adres -->
  <section class="section section-lg bg-secondary my-0 overflow-hidden" :style="styles()">
    <div class="container py-0 pb-200">
      <div class="row text-center justify-content-center">
        <div class="col-lg-10">
          <a href="https://goo.gl/maps/YgziKZGExWnQW9cd7" target="blank">
            <icon name="ni ni-pin-3" class="mb-5 floating" size="lg" type="info" shadow rounded></icon>
          </a>
          <h1 class="font-weight-light">Hoe kan je ons bereiken?</h1>

          <a href="https://goo.gl/maps/YgziKZGExWnQW9cd7" class="lead text-info" target="blank">
            <icon name="ni ni-map-big" size="sm" type="primary"></icon>&nbsp;Kerkenblook z/n
            <p class="lead text-primary">3550 Heusden-Zolder</p>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- end Adres -->
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),
  },
})
export default class Adres extends Vue {
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
