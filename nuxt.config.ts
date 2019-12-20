import { Configuration } from '@nuxt/types';

import { IS_DEV } from './config';
import axios from 'axios';

//require('dotenv').config();

const config: Configuration = {
  mode: 'universal',

  /*
   ** Headers of the page
   */

  head: {
    htmlAttrs: {
      lang: 'nl-BE'
    },

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

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://res.cloudinary.com' }
    ]
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
    { src: '~/plugins/argon-kit.js', mode: 'client' }, // VueLazyLoad inside
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/vue-toasted.js', mode: 'client' },
    '~plugins/vue-scrollto.js',
    '~/plugins/filters',
    { src: '~/plugins/lazysizes.js', ssr: false },
    '~/plugins/vee-validate',
    '~/plugins/click-outside.js',
    { src: '~/plugins/vuex-persist', ssr: false },
    `~/plugins/currency-filter.js`,
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
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    'bootstrap-vue/nuxt',
    '@bazzite/nuxt-optimized-images',
    'vue-scrollto/nuxt',
    '@nuxtjs/markdownit',

    '@nuxtjs/google-analytics',
    //Always at the end
    '@nuxtjs/sitemap'
  ],

  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: true,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },

  /*
   ** bootstrapVue module configuration
   */
  bootstrapVue: {
    componentPlugins: [
      'Badge',
      'Button',
      'BreadcrumbPlugin',
      'CarouselPlugin',
      'ImagePlugin',
      'SpinnerPlugin',
      'InputGroupPlugin',
      'FormInputPlugin'
    ],
    directivePlugins: ['VBPopoverPlugin', 'VBTooltipPlugin'],
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },

  /*
   ** sitemap module configuration
   */
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
      '/geschiedenis',
      '/drumband'
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
   ** @nuxtjs/pwa module configuration
   */
  pwa: {
    workbox: {
      /* workbox options */
      offlineAnalytics: true
    }
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
    disabled: IS_DEV,
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
    transpile: ['vee-validate/dist/rules'],

    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isDev && isClient && vue != undefined && vue.transformAssetUrls) {
        vue.transformAssetUrls.img = ['data-src', 'src'];
        vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
      }
    }
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
