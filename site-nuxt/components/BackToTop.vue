<template>
  <back-to-top bottom="5%" right="50px">
    <button type="button" class="btn btn-info btn-to-top">
      <i class="fa fa-chevron-up"></i>
    </button>
  </back-to-top>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

import BackToTop from 'vue-backtotop';

@Component({
  components: { BackToTop },
})
export default class ToTop extends Vue {}
</script>

<style>
.btn-to-top {
  width: 60px;
  height: 60px;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}
</style>
