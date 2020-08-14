<template>
  <component
    :is="tag"
    class="badge"
    :href="link"
    :class="[
      `badge-${type}`,
      rounded ? `badge-pill` : '',
      circle && 'badge-circle',
    ]"
  >
    <slot>
      <i v-if="icon" :class="icon"></i>
    </slot>
  </component>
</template>
<script>
export default {
  name: 'badge',
  props: {
    tag: {
      type: String,
      default: 'a',
      description: 'Html tag to use for the badge.',
    },
    link: {
      type: String,
      default: '#',
      description: 'a href link',
    },
    rounded: {
      type: Boolean,
      default: false,
      description: 'Whether badge is of pill type',
    },
    circle: {
      type: Boolean,
      default: false,
      description: 'Whether badge is circle',
    },
    icon: {
      type: String,
      default: '',
      description: 'Icon name. Will be overwritten by slot if slot is used',
    },
    type: {
      type: String,
      default: 'default',
      description: 'Badge type (primary|info|danger|default|warning|success)',
    },
  },
};
</script>
<style></style>
