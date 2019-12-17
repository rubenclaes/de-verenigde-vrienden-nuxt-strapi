<template>
  <span :style="{ height, width: computedWidth }" class="SkeletonBox" />
</template>

<script>
export default {
  name: 'SkeletonBox',
  props: {
    maxWidth: {
      // The default maxiumum width is 100%.
      default: 100,
      type: Number
    },
    minWidth: {
      // Lines have a minimum width of 80%.
      default: 80,
      type: Number
    },
    height: {
      // Make lines the same height as text.
      default: '1em',
      type: String
    },
    width: {
      // Make it possible to define a fixed
      // width instead of using a random one.
      default: null,
      type: String
    }
  },
  computed: {
    computedWidth() {
      // Either use the given fixed width or
      // a random width between the given min
      // and max values.
      return (
        this.width ||
        `${Math.floor(
          Math.random() * (this.maxWidth - this.minWidth) + this.minWidth
        )}%`
      );
    }
  }
};
</script>

<style lang="scss">
.SkeletonBox {
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  display: inline-block;
  position: relative;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }

  @-webkit-keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
}
</style>