<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Deze pagina bestaat niet</h1>
    <h1 v-else>Oeps, er is een fout opgetreden.</h1>
    <nuxt-link to="/">Terug naar Home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'appHeader', // you can set a custom layout for the error page
};
</script>
