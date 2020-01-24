import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faSmileBeam);
library.add(faFacebookF);
library.add(faTwitter);
