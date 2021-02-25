<template>
  <client-only>
    <Headroom
      :style="{ height: 0 + 'px' }"
      :downTolerance="downTolerance"
      :upTolerance="upTolerance"
      :speed="speed"
      @pin="onPin(true)"
      @top="onTop(true)"
    >
      <header
        :class="className"
        @mouseover="isHovering = true"
        @mouseleave="isHovering = false"
      >
        <base-nav
          class="navbar-main"
          :effect="isHovering || isTop ? 'dark' : 'light'"
          type
          expand
        >
          <nuxt-link slot="brand" class="navbar-brand mr-lg-5" to="/">
            <img :src="logoImg" alt="logo" />
          </nuxt-link>

          <div class="row" slot="content-header" slot-scope="{ closeMenu }">
            <div class="col-6 collapse-brand">
              <nuxt-link to="/">
                <img :src="brandImg" alt="logo" />
              </nuxt-link>
            </div>
            <div class="col-6 collapse-close">
              <close-button @click="closeMenu"></close-button>
            </div>
          </div>

          <ul
            v-if="isHovering || !isPinned || isTop"
            class="navbar-nav navbar-nav-hover align-items-lg-center"
            slot-scope="{ closeMenu }"
          >
            <li
              v-for="(link, index) in navItemList"
              :key="index"
              class="nav-item"
            >
              <template
                v-if="
                  link.active &&
                  link.__component === 'menulinks.main-navigation-link'
                "
              >
                <n-link
                  v-if="!hasChildren(link.childlink)"
                  :to="pageSlug(link.link.slug)"
                  class="nav-link"
                >
                  <span class="nav-link-inner--text">{{
                    link.menu_link_title
                  }}</span>
                </n-link>

                <base-dropdown
                  v-if="hasChildren(link.childlink)"
                  class="nav-item"
                  menu-classes="dropdown-menu-xl"
                >
                  <a
                    slot="title"
                    href="#"
                    class="nav-link"
                    data-toggle="dropdown"
                    role="button"
                  >
                    <i class="ni ni-bold-down d-lg-none"></i>
                    <span class="nav-link-inner--text">{{
                      link.menu_link_title
                    }}</span>
                  </a>
                  <div class="dropdown-menu-inner">
                    <router-link
                      v-for="(child, index) in link.childlink"
                      :key="index"
                      :to="pageSlug(child.flex_page.slug)"
                      class="media d-flex align-items-center"
                    >
                      <div class="media-body ml-3">
                        <h6 class="heading text-success mb-md-1">
                          {{ child.child_link_title }}
                        </h6>
                        <p class="description d-none d-md-inline-block mb-0">
                          {{ child.description }}
                        </p>
                      </div>
                    </router-link>
                  </div>
                </base-dropdown>
              </template>
              <template
                v-if="
                  link.active &&
                  link.__component === 'menulinks.main-navigation-scroll-link'
                "
              >
                <div
                  @click="
                    scrollToComponent(link.scroll_to_component, closeMenu)
                  "
                  class="nav-link"
                  :style="{ cursor: 'pointer' }"
                >
                  <span class="nav-link-inner--text">{{
                    link.menu_link_title
                  }}</span>
                </div>
              </template>
            </li>
          </ul>

          <ul class="navbar-nav align-items-lg-center ml-lg-auto">
            <li v-if="numberOfItems() > 0" class="nav-item">
              <router-link class="nav-link nav-link-icon" to="/checkout">
                <i class="fa fa-shopping-cart"></i>
                <span class="nav-link-inner--text d-lg-none"
                  >Winkelmandje
                </span>
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
              <button
                @click="goTocontact()"
                class="btn btn-primary btn-icon btn-block"
              >
                <span class="btn-inner--icon">
                  <i class="fa fa-envelope mr-2"></i>
                </span>
                <span class="nav-link-inner--text">Contact</span>
              </button>
            </li>
          </ul>
        </base-nav>
      </header>
    </Headroom>
  </client-only>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { headroom } from 'vue-headroom';

@Component({
  components: {
    Headroom: headroom,
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
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),
  },
})
export default class headerStyle1 extends Vue {
  downTolerance: number = 0;
  upTolerance: number = 0;
  speed: number = 350;
  isHovering: boolean = false;

  isPinned: boolean = false;
  isTop: boolean = false;

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

  goTocontact() {
    this.$router.push({ path: '/', hash: '#contact' });
  }

  scrollToComponent(componentToScroll: string, closeMenu) {
    closeMenu();
    this.$router.push({ path: '/', hash: `#${componentToScroll}` });
  }

  onPin(pin: boolean) {
    this.isPinned = pin;
  }

  onTop(top: boolean) {
    this.isTop = top;
  }

  pageSlug(slug: string) {
    const pageSlug = slug == `home` ? `/` : `/${slug}`;
    return pageSlug;
  }

  hasChildren(childlink: any) {
    return childlink.length != 0 ? true : false;
  }

  numberOfItems() {
    return this.$store.getters['cart/numberOfItems'];
  }

  /*   async asyncData({ $axios, $payloadURL, route }) {
    //if generated and works as client navigation, fetch previously saved static JSON payload
    if (process.static && process.client && $payloadURL)
      return await $axios.$get($payloadURL(route));

    //your request logic
    let post = await $axios.$get(`/data/index.json`);
    console.log(post);
    return {
      post,
    };
  } */
}
</script>
