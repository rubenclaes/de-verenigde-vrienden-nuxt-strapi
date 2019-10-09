<template>
  <div>
    <header class="header-global">
      <base-nav class="navbar-main" transparent type effect="light" expand>
        <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
          <img src="~/assets/brand/logo_fulllogo_white.svg" alt="logo" />
        </router-link>

        <div class="row" slot="content-header" slot-scope="{closeMenu}">
          <div class="col-6 collapse-brand">
            <router-link to="/">
              <img src="~/assets/brand/logo_color3.svg" />
            </router-link>
          </div>
          <div class="col-6 collapse-close">
            <close-button @click="closeMenu"></close-button>
          </div>
        </div>

        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          <li class="nav-item">
            <a class="nav-link" href="/">
              <span class="nav-link-inner--text">Home</span>
            </a>
          </li>
          <base-dropdown class="nav-item" menu-classes="dropdown-menu-xl">
            <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
              <i class="ni ni-ui-04 d-lg-none"></i>
              <span class="nav-link-inner--text">Harmonie</span>
            </a>
            <div class="dropdown-menu-inner">
              <router-link to="/dirigent" class="media d-flex align-items-center">
                <div class="media-body ml-3">
                  <h6 class="heading text-primary mb-md-1">Dirigent</h6>
                  <p class="description d-none d-md-inline-block mb-0">Lees meer over onze dirigent.</p>
                </div>
              </router-link>
              <router-link to="/geschiedenis" class="media d-flex align-items-center">
                <div class="media-body ml-3">
                  <h5 class="heading text-warning mb-md-1">Geschiedenis</h5>
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
            <a class="nav-link" href="/drumband">
              <span class="nav-link-inner--text">Drumband</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <a
              class="nav-link nav-link-icon"
              href="hhttps://www.facebook.com/koninklijkeharmoniedeverenigdevriendenheusden/"
              target="_blank"
              rel="noopener"
              data-toggle="tooltip"
              title="Vind ons op Facebook"
            >
              <i class="fa fa-facebook-square"></i>
              <span class="nav-link-inner--text d-lg-none">Facebook</span>
            </a>
          </li>
          <!--        <li class="nav-item">
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
          </li>-->
          <li class="nav-item d-none d-lg-block ml-lg-4">
            <router-link to="#contact" class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon">
                <i class="fa fa-envelope mr-2"></i>
              </span>
              <span class="nav-link-inner--text">Contact</span>
            </router-link>
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
              &copy; {{year}}
              <a href="#" target="_blank" rel="noopener">D'ARK</a>
            </div>
          </div>
          <div class="col-md-6">
            <ul class="nav nav-footer justify-content-end">
              <li class="nav-item">
                <a href="/" class="nav-link">Home</a>
              </li>
              <li class="nav-item">
                <a href="/geschiedenis" class="nav-link">Geschiedenis</a>
              </li>
              <li class="nav-item">
                <a href="/dirigent" class="nav-link">Dirigent</a>
              </li>
              <li class="nav-item">
                <a href="/drumband" class="nav-link">Drumband</a>
              </li>
              <li class="nav-item">
                <router-link to="#contact" class="nav-link">Contact</router-link>
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
  data() {
    return {
      year: new Date().getFullYear()
    };
  }

  mounted() {}
}
</script>
