<template>
  <div :class="wrapperClass()">
    <slot v-if="isOnline" name="online"></slot>

    <base-alert v-else type="warning" dismissible>
      <span class="alert-inner--icon">
        <i class="ni ni-bell-55"></i>
      </span>
      <span class="alert-inner--text">
        <strong>Opgelet!</strong>
        <slot name="offline" />
      </span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </base-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    toast(toaster, append = false) {
      this.counter++;
      this.$bvToast.toast(`Toast ${this.counter} body content`, {
        title: `Toaster ${toaster}`,
        toaster: toaster,
        solid: true,
        appendToast: append
      });
    },
    makeToast(variant = null) {
      this.$bvToast.toast('Toast body content', {
        title: `Variant ${variant || 'default'}`,
        variant: variant,
        solid: true
      });
    }
  }
};
</script>
<style scoped>
</style>