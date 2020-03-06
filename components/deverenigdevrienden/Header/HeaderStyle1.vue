<template>
  <client-only>
    <vue-headroom
      @pin="onPin(true)"
      @top="onTop(true)"
      @unpin="onPin(false)"
      @not-top="onTop(false)"
      :upTolerance="upTolerance"
      :downTolerance="downTolerance"
      :speed="speed"
    >
      <header :class="className">
        <base-nav
          class="navbar-main"
          :transparent="isTop"
          :effect="isPinned || !isTop ? 'dark' : 'light'"
          type
          expand
        >
          <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
            <img :src="logoImg" alt="logo" />
          </router-link>

          <div class="row" slot="content-header" slot-scope="{ closeMenu }">
            <div class="col-6 collapse-brand">
              <router-link to="/">
                <img :src="brandImg" alt="logo" />
              </router-link>
            </div>
            <div class="col-6 collapse-close">
              <close-button @click="closeMenu"></close-button>
            </div>
          </div>

          <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
            <li v-for="(option, index) in navItemList" :key="index" class="nav-item">
              <router-link v-if="!option.children" :to="option.href" class="nav-link">
                <span class="nav-link-inner--text">{{ option.title}}</span>
              </router-link>

              <base-dropdown
                v-if="option.children"
                class="nav-item"
                menu-classes="dropdown-menu-xl"
              >
                <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
                  <i class="ni ni-bold-down d-lg-none"></i>
                  <span class="nav-link-inner--text">{{option.title}}</span>
                </a>
                <div class="dropdown-menu-inner">
                  <router-link
                    v-for="(child, index) in option.child"
                    :key="index"
                    :to="child.href"
                    class="media d-flex align-items-center"
                  >
                    <div class="media-body ml-3">
                      <h6 class="heading text-success mb-md-1">{{child.title}}</h6>
                      <p class="description d-none d-md-inline-block mb-0">{{ child.description }}</p>
                    </div>
                  </router-link>
                </div>
              </base-dropdown>
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
              <button @click="goTocontact()" class="btn btn-primary btn-icon btn-block">
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
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import { harmonieDropdown } from '../../../config/menu.js';
@Component({
  components: {
    BaseNav: () =>
      import(/* webpackChunkName: 'base-nav' */ '@/components/BaseNav.vue'),
    CloseButton: () =>
      import(
        /* webpackChunkName: 'close-button' */ '@/components/CloseButton.vue'
      ),
    BaseDropdown: () =>
      import(
        /* webpackChunkName: 'base-dropdown' */ '@/components/BaseDropdown.vue'
      ),
    BaseButton: () =>
      import(
        /* webpackChunkName: 'base-button' */ '@/components/BaseButton.vue'
      ),
    Badge: () =>
      import(/* webpackChunkName: 'badge' */ '@/components/Badge.vue'),
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue')
  }
})
export default class headerStyle1 extends Vue {
  isPinned: boolean = false;
  isTop: boolean = false;
  downTolerance: number = 40;
  upTolerance: number = 40;
  speed: number = 250;

  @Prop({ type: String })
  className!: String;
  @Prop({ type: String })
  logoImg!: String;
  @Prop({ type: String })
  brandImg!: String;
  @Prop({ type: Array })
  navItemList!: [];
  @Prop({ type: Boolean, default: true })
  styledLogo!: Boolean;

  onPin(pin: boolean) {
    this.isPinned = pin;
  }

  onTop(top: boolean) {
    this.isTop = top;
  }

  goTocontact() {
    this.$router.push({ name: 'index', hash: '#contact' });
  }

  numberOfItems() {
    return this.$store.getters['cart/numberOfItems'];
  }
}
</script>

<style scoped></style>
