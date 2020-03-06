<template>
  <div
    :id="ids"
    :class="classNames"
    :style="'background:url(' + bgImage + ')'"
    data-parallax="true"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ParallaxStyle1',
  // eslint-disable-next-line vue/require-prop-types
  props: ['ids', 'bgImage', 'classNames']
};
</script>
