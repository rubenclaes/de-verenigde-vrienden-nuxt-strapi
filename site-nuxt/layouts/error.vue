<template>
  <div class="page-header error-page">
    <div
      class="page-header-image"
      :style="{
        'background-image': `url(${require('~/assets/svg/404.svg')})`,
      }"
    ></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <template v-if="error.statusCode === 404">
            <h1 class="title">
              404
            </h1>
            <p class="lead">Pagina niet gevonden :(</p>
            <h4 class="description text-default">
              Ooooeps! Het ziet er naar uit dat je verloren bent geraakt.
            </h4>
          </template>
          <template v-else>
            <h1 class="title">
              FOUT
            </h1>
            <p class="lead">Oeps, er is een fout opgetreden.</p>
            <h4 class="description text-default">
              {{ error }}
            </h4>
          </template>

          <base-button
            size="sm"
            type="primary"
            icon="ni ni-bold-left"
            @click="goToHome()"
            >naar home</base-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'appHeader', // you can set a custom layout for the error page
  components: {
    BaseButton: () => import('@/components/BaseButton.vue'),
  },

  methods: {
    goToHome() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style lang="scss">
.error-page > .container .title {
  font-size: 12em;
  color: #172b4d;
  letter-spacing: 14px;
  font-weight: 700;
}

.page-header .title {
  margin-bottom: 15px;
}
</style>
