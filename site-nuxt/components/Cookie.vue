<template>
  <div v-if="isOpen" class="cookie">
    <base-alert type="default" dismissible>
      <span class="alert-inner--icon">
        <i class="ni ni-like-2"></i>
      </span>
      <span class="alert-inner--text">
        <strong>Default!</strong> This is a default alert—check it out!
      </span>
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </base-alert>

    <v-alert prominent type="info" color="#6859de">
      <v-row align="center">
        <v-col class="grow">
          <slot name="message">
            Deze website gebruikt cookies 🍪 voor gebruikersanalyses en
            verbeteringen op de pagina's We use cookies to provide our services
            and for analytics and marketing. To find out more about our use of
            cookies, please see our
            <nuxt-link class="cookie__link" to="/privacy-policy"
              >Privacybeleid</nuxt-link
            >. Click accept for the best user experience on our app.
          </slot>
        </v-col>
        <v-col class="shrink d-flex justify-end" cols="12" md="3">
          <v-btn class="ma-2" @click="accept">{{ buttonTextAccept }}</v-btn>
          <v-btn class="ma-2" text @click="deny">{{ buttonTextDeny }}</v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: 'CookieMessage',
  props: {
    buttonTextAccept: {
      type: String,
      default: 'Accept'
    },
    buttonTextDeny: {
      type: String,
      default: 'Deny'
    },
    message: {
      type: String,
      default:
        'We use cookies to provide our services and for analytics and marketing. To find out more about our use of cookies, please see our Privacy Policy. By continuing to browse our website, you agree to our use of cookies.'
    },
    position: {
      type: String,
      default: 'top'
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    containerPosition() {
      return `cookie--${this.position}`;
    }
  },
  created() {
    if (!this.getGDPR() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true);
      }
    },
    accept() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem('GDPR:accepted', true);
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false;
        localStorage.setItem('GDPR:accepted', false);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.cookie
  z-index: 1
  position: fixed
  bottom: 0
  &__link
    color: #ffffff
    text-decoration: underline
    transition: all .25s
    &:hover
      text-decoration: none
</style>
