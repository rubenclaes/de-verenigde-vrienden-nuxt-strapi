<!-- components/SvgIcon.vue -->

<template>
  <div
    class="inline-block"
    :class="[
      size && `icon-${size}`,
      type && `icon-shape-${type}`,
      gradient && `bg-gradient-${gradient}`,
      shadow && 'shadow',
      rounded && 'rounded-circle',
      color && `text-${color}`
    ]"
    v-html="require('~/assets/svg/calendar-grid-58.svg?include')"
  ></div>
</template>
<script>
export default {
  name: 'icon',
  props: {
    name: {
      type: String,
      default: '',
      description: 'Icon name'
    },
    prefix: {
      type: String,
      default: 'fas',
      description: 'fas, fab'
    },
    size: {
      type: String,
      default: '',
      description: 'Icon size'
    },
    type: {
      type: String,
      default: '',
      description: 'Icon type (primary, warning etc)'
    },
    gradient: {
      type: String,
      default: '',
      description: 'Icon gradient type (primary, warning etc)'
    },
    color: {
      type: String,
      default: '',
      description: 'Icon color (primary, warning etc)'
    },
    shadow: {
      type: Boolean,
      default: false,
      description: 'Whether icon has shadow'
    },
    rounded: {
      type: Boolean,
      default: false,
      description: 'Whether icon is rounded'
    }
  },
  mounted() {
    this.$el.firstChild.classList.add(this.$style.svg);
    this.$el.outerHTML = this.$el.innerHTML;
  }
};
</script>

<style module>
.svg {
  fill: green;
  height: 1em;

  margin-top: -4px;
  vertical-align: middle;
  width: 1em;
}
</style>
