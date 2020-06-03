<template>
  <div></div>
</template>
<script>
import noUiSlider from 'nouislider';

export default {
  name: 'confetti',
  props: {},

  data() {
    return {};
  },
  methods: {},
  mounted() {
    this.$confetti.start();
  }
};
</script>
