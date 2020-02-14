<template>
  <div>
    <header class="header-global">
      <div id="top"></div>

      <base-nav class="navbar-main" transparent type effect="light" expand>
        <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        </router-link>
      </base-nav>
    </header>

    <client-only>
      <offline-detection
        onlineClass="notification notification-online"
        offlineClass="notification notification-offline"
      >
        <template v-slot:offline>
          <span>Je hebt geen internetverbinding</span>
        </template>
      </offline-detection>
    </client-only>

    <nuxt />

    <footer class="footer has-cards"></footer>
  </div>
</template>

<script lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import BaseNav from '@/components/BaseNav.vue';
import BaseDropdown from '@/components/BaseDropdown.vue';
import CloseButton from '@/components/CloseButton.vue';
import BackToTop from '@/components/BackToTop.vue';
import OfflineDetection from '@/components/OfflineDetection.vue';

import IfBot from 'vue-if-bot/dist/vue-if-bot.es';

import { Component, Vue, Prop } from 'vue-property-decorator';

import { cartVuexNamespace } from '~/store/cart/const';

@Component({
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
    BaseButton,
    BackToTop,
    OfflineDetection,
    IfBot,
    Badge: () => import('@/components/Badge.vue')
  }
})
export default class extends Vue {
  private windowHeight: number = 0;

  data() {
    return {
      year: new Date().getFullYear()
    };
  }
  goTocontact() {
    this.$router.push({ name: 'index', hash: '#contact' });
  }

  numberOfItems() {
    return this.$store.getters['cart/numberOfItems'];
  }

  /*   mounted() {
    window.addEventListener('resize', this.getWindowHeight);
    this.getWindowHeight();
  }

  getWindowHeight() {
    this.windowHeight = document.documentElement.clientHeight;
  } */
}
</script>
