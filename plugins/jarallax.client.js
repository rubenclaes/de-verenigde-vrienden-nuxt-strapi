import Vue from 'vue';

//require('jarallax/dist/jarallax.min');
import { jarallax } from 'jarallax';

jarallax(document.querySelectorAll('[data-parallax="true"]'), {
  speed: 0.6
});

Vue.use(jarallax);
/* if (process.BROWSER_BUILD) {
  const VueEditor = require('vue2-editor');
  Vue.use(VueEditor);
} */

//Vue.use(jarallax);
