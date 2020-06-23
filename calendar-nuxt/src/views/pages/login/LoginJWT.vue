<template>
  <div>
    <ValidationObserver v-slot="{ invalid }">
      <ValidationProvider
        name="password"
        rules="required|min:3"
        v-slot="{ errors }"
      >
        <vs-input
          data-vv-validate-on="blur"
          name="email"
          icon-no-border
          icon="icon icon-user"
          icon-pack="feather"
          label-placeholder="Email"
          v-model="email"
          class="w-full"
        />
        <span class="text-danger text-sm">{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider
        name="password"
        rules="required|min:6|max:10"
        v-slot="{ errors }"
      >
        <vs-input
          data-vv-validate-on="blur"
          type="password"
          name="password"
          icon-no-border
          icon="icon icon-lock"
          icon-pack="feather"
          label-placeholder="Password"
          v-model="password"
          class="w-full mt-6"
        />
        <span class="text-danger text-sm">{{ errors[0] }}</span>
      </ValidationProvider>

      <div class="flex flex-wrap justify-between my-5">
        <vs-checkbox v-model="checkbox_remember_me" class="mb-3"
          >Remember Me</vs-checkbox
        >
        <router-link to="/pages/forgot-password">Forgot Password?</router-link>
      </div>
      <div class="flex flex-wrap justify-between mb-3">
        <vs-button type="border" @click="registerUser">Register</vs-button>
        <vs-button :disabled="invalid" @click="loginJWT">Login</vs-button>
      </div>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      email: 'admin@admin.com',
      password: 'adminadmin',
      checkbox_remember_me: false,
    };
  },
  computed: {},
  methods: {
    checkLogin() {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {
        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning',
        });

        return false;
      }
      return true;
    },
    loginJWT() {
      if (!this.checkLogin()) return;

      // Loading
      this.$vs.loading();

      const payload = {
        checkbox_remember_me: this.checkbox_remember_me,
        userDetails: {
          email: this.email,
          password: this.password,
        },
      };

      this.$store
        .dispatch('auth/loginJWT', payload)
        .then(() => {
          this.$acl.change('admin');
          this.$vs.loading.close();
          // Navigate User to homepage
          this.$router.push('/').catch(() => {});
        })
        .catch((error) => {
          this.$vs.loading.close();
          this.$vs.notify({
            title: 'Error',
            text: error.message,
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger',
          });
        });
    },
    registerUser() {
      if (!this.checkLogin()) return;
      this.$router.push('/pages/register').catch(() => {});
    },
  },
};
</script>
