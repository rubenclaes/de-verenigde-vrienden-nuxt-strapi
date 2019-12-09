import { Configuration } from '@nuxt/types';

import { IS_DEV } from './config';
import axios from 'axios';

require('dotenv').config();

const config: Configuration = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.APP_ID,

    titleTemplate: '%s ← ' + process.env.APP_ID,

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Koninklijke Harmonie de Verenige Vrienden Heusden-Zolder web'
      }
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#39b982' },

  manifest: {
    name: 'Harmonie De Verenigde Vrienden',
    short_name: 'KH DVV H-Z',
    description:
      'Website Koninklijke Harmonie De Verenige Vrienden Heusden-Zolder',
    theme_color: '#188269'
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/vendor/nucleo/css/nucleo.css',
    '@/assets/vendor/font-awesome/css/font-awesome.css',
    '@/assets/scss/argon.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/argon-kit.js', mode: 'client' }, //VueLazyLoad
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/vue-toasted.js', mode: 'client' },
    '~plugins/vue-scrollto.js',
    '~/plugins/filters',
    /* '~/plugins/vue-lazysizes.client.js', */
    '~/plugins/vee-validate',
    '~/plugins/click-outside.js',
    '~/plugins/axios-accessor.ts'
  ],

  env: {
    API_URL: 'https://strapi-de-verenigde-vrienden.herokuapp.com'
  },

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    'bootstrap-vue/nuxt',

    'vue-scrollto/nuxt',

    '@nuxtjs/markdownit',
    '@bazzite/nuxt-optimized-images',
    '@nuxtjs/google-analytics',
    //Always at the end
    '@nuxtjs/sitemap'
  ],

  bootstrapVue: {
    componentPlugins: [
      'Badge',
      'Button',
      'BreadcrumbPlugin',
      'CarouselPlugin',
      'ImagePlugin',
      'SpinnerPlugin'
    ],
    directivePlugins: ['VBPopoverPlugin', 'VBTooltipPlugin'],
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  sitemap: {
    hostname: process.env.HOSTNAME,
    gzip: true,
    exclude: ['/secret', '/admin/**'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmodrealtime: true
    },
    routes: [
      '/',
      '/nieuws',
      '/dirigent',
      '/geschiedenis'
      /* {
        url: '/page/2',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      } */
    ]
  },

  /*
   ** googleAnalytics module configuration
   */
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS,
    disabled: () => document.cookie.includes('ga_optout=true'),
    debug: {
      sendHitTask: !IS_DEV
    },
    set: [{ field: 'anonymizeIp', value: true }]
  },

  /*
   ** bazzite/nuxt-optimized-images module configuration
   */
  optimizedImages: {
    optimizeImages: true
  },

  /*
   ** markdownit module configuration
   */
  markdownit: {
    injected: true
  },

  /*
   ** sentry module configuration
   */
  sentry: {
    dsn: process.env.SENTRY_DSN,
    publishRelease: true,
    disabled: true,
    config: {} // Additional config
  },

  /*
   ** oneSignal module configuration
   */
  oneSignal: {
    cdn: true,
    init: {
      appId: process.env.ONE_SIGNAL_ID,
      allowLocalhostAsSecureOrigin: true,

      welcomeNotification: {
        disable: true
      }
    }
  },

  /*
   ** Auth module configuration
   ** See https://auth.nuxtjs.org/guide/setup.html
   */
  auth: {
    // Options
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/users/me', method: 'get', propertyName: 'user' }
        }
      }
    }
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL
  },

  buildModules: ['@nuxtjs/dotenv', '@nuxt/typescript-build'],

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vee-validate/dist/rules']
    /*
     ** You can extend webpack config here
     */
    /* extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) { */
    /* vue.transformAssetUrls.img = ['data-src', 'src'];
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']; */
    /*    } */
    // }
  },

  generate: {
    fallback: true,

    routes: async function() {
      return await axios
        .get(`${process.env.API_URL}/restaurants`)
        .then(res => {
          return res.data.map((restaurant: any) => {
            restaurant.image.url = `https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/${restaurant.image.public_id}${restaurant.image.ext}`;
            return {
              route: `/restaurants/${restaurant.id}`,
              payload: restaurant
            };
          });
        })
        .catch(err => {
          console.log('error', err);
        });
    }
  }
};

export default config;
