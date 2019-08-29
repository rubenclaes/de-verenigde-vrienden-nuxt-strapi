<template>
  <div>
    <header class="header-global">
      <base-nav class="navbar-main" transparent type effect="light" expand>
        <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
          <img :src="brand" alt="logo" />
        </router-link>

        <div class="row" slot="content-header" slot-scope="{closeMenu}">
          <div class="col-6 collapse-brand">
            <router-link to="/">
              <img src="img/brand/logo_color3.svg" />
            </router-link>
          </div>
          <div class="col-6 collapse-close">
            <close-button @click="closeMenu"></close-button>
          </div>
        </div>

        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
            <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
              <i class="ni ni-ui-04 d-lg-none"></i>
              <span class="nav-link-inner--text">Harmonie</span>
            </a>
            <div class="dropdown-menu-inner">
              <router-link to="/dirigent" class="media d-flex align-items-center">
                <div class="icon icon-shape bg-gradient-primary rounded-circle text-white">
                  <i class="ni ni-spaceship"></i>
                </div>
                <div class="media-body ml-3">
                  <h6 class="heading text-primary mb-md-1">Dirigent</h6>
                  <p class="description d-none d-md-inline-block mb-0">
                    Get started with Bootstrap, the
                    world's most popular framework for building responsive sites.
                  </p>
                </div>
              </router-link>
              <router-link to="/geschiedenis" class="media d-flex align-items-center">
                <div class="icon icon-shape bg-gradient-warning rounded-circle text-white">
                  <i class="ni ni-ui-04"></i>
                </div>
                <div class="media-body ml-3">
                  <h5 class="heading text-warning mb-md-1">Geschiedenis</h5>
                  <p class="description d-none d-md-inline-block mb-0">
                    Learn how to use Argon
                    compiling Scss, change brand colors and more.
                  </p>
                </div>
              </router-link>
            </div>
          </base-dropdown>
          <base-dropdown tag="li" class="nav-item">
            <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
              <i class="ni ni-collection d-lg-none"></i>
              <span class="nav-link-inner--text">Nieuws</span>
            </a>
            <router-link to="/landing" class="dropdown-item">Home</router-link>
            <router-link to="/profile" class="dropdown-item">Geschiedenis</router-link>
            <router-link to="/login" class="dropdown-item">Dirigent</router-link>
            <router-link to="/register" class="dropdown-item">Contact</router-link>
          </base-dropdown>
        </ul>
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.facebook.com/creativetim"
              target="_blank"
              rel="noopener"
              data-toggle="tooltip"
              title="Like us on Facebook"
            >
              <i class="fa fa-facebook-square"></i>
              <span class="nav-link-inner--text d-lg-none">Facebook</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="https://www.instagram.com/creativetimofficial"
              target="_blank"
              rel="noopener"
              data-toggle="tooltip"
              title="Follow us on Instagram"
            >
              <i class="fa fa-instagram"></i>
              <span class="nav-link-inner--text d-lg-none">Instagram</span>
            </a>
          </li>
          <li class="nav-item d-none d-lg-block ml-lg-4">
            <a
              href="https://www.creative-tim.com/product/vue-argon-design-system"
              target="_blank"
              rel="noopener"
              class="btn btn-neutral btn-icon"
            >
              <span class="btn-inner--icon">
                <i class="fa fa-envelope mr-2"></i>
              </span>
              <span class="nav-link-inner--text">Contact</span>
            </a>
          </li>
        </ul>
      </base-nav>
    </header>
    <nuxt />

    <footer class="footer has-cards">
      <div class="container">
        <div class="row row-grid align-items-center my-md">
          <div class="col-lg-6">
            <h3 class="text-primary font-weight-light mb-2">Begint het al een beetje te kriebelen?</h3>
            <h4 class="mb-0 font-weight-light">Volg ons ook op social media!</h4>
          </div>
          <div class="col-lg-6 text-lg-center btn-wrapper">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.facebook.com/creativetim"
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
              &copy; {{year}}
              <a
                href="https://www.creative-tim.com"
                target="_blank"
                rel="noopener"
              >D'ARK</a>
            </div>
          </div>
          <div class="col-md-6">
            <ul class="nav nav-footer justify-content-end">
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                >Home</a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/presentation"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                >Geschiedenis</a>
              </li>
              <li class="nav-item">
                <a
                  href="http://blog.creative-tim.com"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                >Dirigent</a>
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                >Contact</a>
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

import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: { BaseNav, CloseButton, BaseDropdown, BaseButton }
})
export default class extends Vue {
  brand = '/img/brand/logo_full.svg';

  data() {
    return {
      year: new Date().getFullYear()
    };
  }

  mounted() {}
}
</script>
