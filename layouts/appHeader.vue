<template>
  <div>
    <client-only>
      <vue-headroom
        @pin="onPin(true)"
        @top="onTop(true)"
        @unpin="onPin(false)"
        @not-top="onTop(false)"
        :upTolerance="upTolerance"
      >
        <header class="header-global">
          <div id="top"></div>

          <base-nav
            class="navbar-main"
            :transparent="isTop"
            :effect="isPinned ? 'dark' : 'light'"
            type
            expand
          >
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
              <img src="~/assets/brand/logo_fulllogo_white.svg" alt="logo" />
            </router-link>

            <div class="row" slot="content-header" slot-scope="{ closeMenu }">
              <div class="col-6 collapse-brand">
                <router-link to="/">
                  <img src="~/assets/brand/logo_color3.svg" alt="logo" />
                </router-link>
              </div>
              <div class="col-6 collapse-close">
                <close-button @click="closeMenu"></close-button>
              </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
              <li class="nav-item">
                <router-link to="/" class="nav-link">
                  <span class="nav-link-inner--text">Home</span>
                </router-link>
              </li>
              <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
                <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                  <i class="ni ni-bold-down d-lg-none"></i>
                  <span class="nav-link-inner--text">Harmonie</span>
                </a>
                <div class="dropdown-menu-inner">
                  <router-link to="/dirigent" class="media d-flex align-items-center">
                    <div class="media-body ml-3">
                      <h6 class="heading text-success mb-md-1">Dirigent</h6>
                      <p
                        class="description d-none d-md-inline-block mb-0"
                      >Lees meer over onze dirigent.</p>
                    </div>
                  </router-link>
                  <router-link to="/geschiedenis" class="media d-flex align-items-center">
                    <div class="media-body ml-3">
                      <h5 class="heading text-success mb-md-1">Geschiedenis</h5>
                      <p
                        class="description d-none d-md-inline-block mb-0"
                      >Lees hoe onze harmonie is ontstaan.</p>
                    </div>
                  </router-link>
                </div>
              </base-dropdown>
              <!-- <li class="nav-item">
            <a class="nav-link" href="/nieuws">
              <span class="nav-link-inner--text">Nieuws</span>
            </a>
              </li>-->
              <li class="nav-item">
                <router-link class="nav-link" to="/drumband">
                  <span class="nav-link-inner--text">Drumband</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/nieuws">
                  <span class="nav-link-inner--text">Nieuws</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/eetdag">
                  <span class="nav-link-inner--text">Eetdag</span>
                </router-link>
              </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
              <li class="nav-item">
                <router-link class="nav-link nav-link-icon" to="/checkout">
                  <i class="fa fa-shopping-cart"></i>
                  <span class="nav-link-inner--text d-lg-none">Winkelmandje</span>
                  <client-only>
                    <badge type="white" rounded>{{ numberOfItems() }}</badge>
                  </client-only>
                </router-link>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link nav-link-icon"
                  href="https://www.facebook.com/koninklijkeharmoniedeverenigdevriendenheusden/"
                  target="_blank"
                  rel="noopener"
                  data-toggle="tooltip"
                  title="Vind ons op Facebook"
                >
                  <i class="fa fa-facebook-square"></i>
                  <span class="nav-link-inner--text d-lg-none">Facebook</span>
                </a>
              </li>

              <li class="nav-item ml-lg-4">
                <button @click="goTocontact()" class="btn btn-primary btn-icon">
                  <span class="btn-inner--icon">
                    <i class="fa fa-envelope mr-2"></i>
                  </span>
                  <span class="nav-link-inner--text">Contact</span>
                </button>
              </li>
            </ul>
          </base-nav>
        </header>
      </vue-headroom>
    </client-only>
    <IfBot>
      <CookieControl />
    </IfBot>

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

    <footer class="footer has-cards">
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
            >Begint het al een beetje te kriebelen?</h3>
            <h4
              class="mb-0 font-weight-light"
              data-aos="fade-right"
              data-aos-delay="250"
            >Volg ons ook op social media!</h4>
          </div>
          <div class="col-lg-6 text-lg-center btn-wrapper">
            <p class="lead">Volg ons op</p>
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
                <router-link to="/geschiedenis" class="nav-link">Geschiedenis</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/dirigent" class="nav-link">Dirigent</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/drumband" class="nav-link">Drumband</router-link>
              </li>
              <li class="nav-item" @click="goTocontact()">
                <span class="nav-link" style="cursor:pointer">Contact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
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

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown,
    BaseButton,
    BackToTop,
    OfflineDetection,
    IfBot,
    Badge: () =>
      import(/* webpackChunkName: 'badge' */ '@/components/Badge.vue'),
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue')
  }
})
export default class appHeader extends Vue {
  isPinned: boolean = false;
  isTop: boolean = false;
  downTolerance: number = 0;
  upTolerance: number = 0;
  year = new Date().getFullYear();

  goTocontact() {
    this.$router.push({ name: 'index', hash: '#contact' });
  }

  numberOfItems() {
    return this.$store.getters['cart/numberOfItems'];
  }

  onNotTop() {
    this.$emit('not-top', { time: Date.now() });
    console.log('hello');
  }

  onPin(pin: boolean) {
    console.log('pinned');
    this.isPinned = pin;
  }

  onTop(top: boolean) {
    console.log('pinned');
    this.isTop = top;
  }
}
</script>
