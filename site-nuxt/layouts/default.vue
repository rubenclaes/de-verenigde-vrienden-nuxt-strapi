<template>
  <div>
    <header-style1
      :logo-img="logo"
      :brand-img="brand"
      :nav-item-list="navItems"
      :styled-logo="true"
      class-name="header-global"
    ></header-style1>

    <IfBot>
      <CookieControl />
    </IfBot>

    <client-only>
      <offline-detection
        onlineClass="notification notification-online"
        offlineClass="notification notification-offline"
      >
        <template v-slot:offline>
          <span>Je hebt geen internetverbinding.</span>
        </template>
      </offline-detection>
    </client-only>

    <nuxt keep-alive />

    <footer class="footer">
      <div class="container">
        <back-to-top
          v-scroll-to="'#top'"
          icon="ni ni-bold-up"
          tag="a"
          textColor="secondary"
          size="lg"
          iconOnly
        ></back-to-top>
        <div class="row row-grid align-items-center my-md">
          <div class="col-lg-6">
            <h3
              class="text-primary font-weight-light mb-2"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              Begint het al een beetje te kriebelen?
            </h3>
            <h4
              class="mb-0 font-weight-light"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              Volg ons ook op social media!
            </h4>
          </div>
          <div class="col-lg-6 text-lg-center btn-wrapper">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.facebook.com/koninklijkeharmoniedeverenigdevriendenheusden/"
              class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg"
              data-toggle="tooltip"
              data-original-title="Like us"
            >
              <i class="fa fa-facebook-square"></i>
            </a>
          </div>
        </div>
        <hr />
        <div class="row align-items-center justify-content-md-between">
          <div class="col-md-6">
            <div class="copyright">
              &copy; {{ year }}
              <a href="#" target="_blank" rel="noopener">D'ARK</a>
              <a href="#" target="_blank" rel="noopener">privacy policy</a>
              <a href="#" target="_blank" rel="noopener">cookie policy</a>
            </div>
          </div>
          <div class="col-md-6">
            <ul class="nav nav-footer justify-content-end">
              <li class="nav-item">
                <router-link to="/" class="nav-link">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/geschiedenis" class="nav-link"
                  >Geschiedenis</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/dirigent" class="nav-link"
                  >Dirigent</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/drumband" class="nav-link"
                  >Drumband</router-link
                >
              </li>
              <li class="nav-item" @click="goTocontact()">
                <span class="nav-link" style="cursor: pointer;">Contact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BackToTop from '@/components/BackToTop.vue';
import OfflineDetection from '@/components/OfflineDetection.vue';

import IfBot from 'vue-if-bot/dist/vue-if-bot.es';

import { harmonieDropdown } from '../config/menu.js';

@Component({
  components: {
    BackToTop,
    OfflineDetection,
    IfBot,
    HeaderStyle1: () =>
      import(
        /* webpackChunkName: 'header-style1' */ '@/components/deverenigdevrienden/Header/HeaderStyle1.vue'
      ),
  },
})
export default class appHeader extends Vue {
  year = new Date().getFullYear();
  styleLogo = false;
  logo = require('../assets/brand/logo_fulllogo_white.svg');
  brand = require('../assets/brand/logo_color3.svg');

  navItems = [
    {
      href: '/',
      title: 'Home',
      active: true,
    },
    {
      href: '#',
      title: 'Harmonie',
      active: true,
      children: true,
      child: harmonieDropdown,
    },
    { href: '/drumband', title: 'Drumband', active: true },
    { href: '/nieuws', title: 'Nieuws', active: false },
    { href: '/eetdag', title: 'Eetdag', active: false },
  ];

  async asyncData({ params }) {
    const { data } = await axios.get(`https://my-api/posts/${params.id}`);
    return { title: data.title };
  }
}
</script>
