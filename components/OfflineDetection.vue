<template>
  <div :class="wrapperClass()">
    <slot v-if="isOnline" name="online"></slot>

    <base-alert v-else dismissible="dismissible" type="warning">
      <strong>Warning!</strong>
      <slot vname="offline" />
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
    isOnline: navigator.onLine || false,
    dismissible: true
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