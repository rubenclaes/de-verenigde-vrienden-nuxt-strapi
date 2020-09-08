<template>
  <div>
    <header-style1
      :logo-img="logo"
      :brand-img="brand"
      :styled-logo="true"
      class-name="header-global"
      :navItemList="navItemList"
    ></header-style1>

    <IfBot>
      <client-only>
        <CookieControl />
      </client-only>
    </IfBot>

    <client-only>
      <offline-detection
        onlineClass="notification notification-online"
        offlineClass="notification notification-offline"
      >
        <template #offline>
          <span>Je hebt geen internetverbinding.</span>
        </template>
      </offline-detection>
    </client-only>

    <nuxt keep-alive />

    <footer-style1></footer-style1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import OfflineDetection from '@/components/OfflineDetection.vue';
import IfBot from 'vue-if-bot/dist/vue-if-bot.es';

import { menulinkVuexNamespace } from '../store/menulink/const';
import { MainNavigationLink } from '../store/menulink/types';

@Component({
  components: {
    OfflineDetection,
    IfBot,

    HeaderStyle1: () =>
      import(
        /* webpackChunkName: 'header-style1' */ '@/components/deverenigdevrienden/Header/HeaderStyle1.vue'
      ),
    FooterStyle1: () =>
      import(
        /* webpackChunkName: 'footer-style1' */ '@/components/deverenigdevrienden/footer/FooterStyle1.vue'
      ),
  },
})
export default class appHeader extends Vue {
  styleLogo = false;
  logo = require('../assets/brand/logo_fulllogo_white.svg');
  brand = require('../assets/brand/logo_color3.svg');

  @menulinkVuexNamespace.Getter('list')
  private navItemList!: MainNavigationLink[];

  scrollToHash() {
    var hash = this.$nuxt.$route.hash;

    this.$nextTick(() => {
      this.$scrollTo(hash, 0, { offset: -120 });
    });
  }
}
</script>
