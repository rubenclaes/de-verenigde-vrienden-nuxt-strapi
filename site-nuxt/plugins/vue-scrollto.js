import Vue from 'vue';

import VueScrollTo from 'vue-scrollto';

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 5000,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});
