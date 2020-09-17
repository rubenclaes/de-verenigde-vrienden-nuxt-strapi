<template>
  <footer class="footer">
    <div class="container">
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
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class footerStyle1 extends Vue {
  year = new Date().getFullYear();

  goTocontact() {
    this.$router.push({ path: '/', hash: '#contact' });
  }
}
</script>
