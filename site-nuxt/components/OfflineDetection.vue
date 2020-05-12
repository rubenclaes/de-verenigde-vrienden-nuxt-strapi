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
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </base-alert>
  </div>
</template>

<script>
import BaseAlert from './BaseAlert';

const EVENTS = ['online', 'offline', 'load'];
export default {
  components: {
    BaseAlert
  },
  name: 'offline-detection',
  props: {
    onlineClass: {
      type: String,
      required: false
    },
    offlineClass: {
      type: String,
      required: false
    }
  },
  data: () => ({
    isOnline: navigator.onLine || false
  }),
  mounted() {
    EVENTS.forEach(event =>
      window.addEventListener(event, this.updateOnlineStatus)
    );
  },
  beforeDestroy() {
    EVENTS.forEach(event =>
      window.removeEventListener(event, this.updateOnlineStatus)
    );
  },
  methods: {
    updateOnlineStatus() {
      this.isOnline = navigator.onLine || false;
      this.$emit('detected-condition', this.isOnline);
    },
    wrapperClass() {
      return {
        [this.onlineClass]: this.isOnline,
        [this.offlineClass]: !this.isOnline
      };
    }
  }
};
</script>
<style scoped>
.notification.notification-offline {
  position: fixed;
  width: 100%;
  z-index: 9999999;
}
</style>
