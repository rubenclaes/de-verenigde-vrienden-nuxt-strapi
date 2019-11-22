import { Configuration } from '@nuxt/types';

import axios from 'axios';
import { IS_DEV } from './config';

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
    '~/plugins/click-outside.js'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    'bootstrap-vue/nuxt',

    'vue-scrollto/nuxt',

    '@nuxtjs/markdownit',
    '@bazzite/nuxt-optimized-images',
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS
      }
    ],
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

  env: {
    API_URL: 'https://strapi-de-verenigde-vrienden.herokuapp.com'
  },

  sitemap: {
    hostname: 'https://www.deverenigdevriendenheusden.be',
    gzip: true,
    exclude: ['/secret', '/admin/**'],
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
    id: 'UA-36999937-1'
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
    dsn: process.env.SENTRY_DSN, // Enter your project's DSN here
    publishRelease: true,
    disabled: IS_DEV,
    config: {} // Additional config
  },

  /*
   ** oneSignal module configuration
   */
  oneSignal: {
    // Use CDN
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
  axios: {},

  buildModules: ['@nuxt/typescript-build'],

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

  /*
   ** Generating dynamic routes
   */
  /*  generate: {
    routes: ['/restaurants/1', '/restaurants/2', '/users/3']
  } */
  /*   generate: {
    routes: async function() {
      const response = await strapi.request('post', '/graphql', {
        data: {
          query: `query {
              restaurants {
                id
                name
                description
                image {
                  url
                }
              }
            }
            `
        }
      });

      return response.data.restaurants.forEach(restaurant => {
        let route = 'restaurants/' + restaurant.id;
      });
    }
  } */

  generate: {
    fallback: true,

    routes: async function() {
      return await axios
        .get('https://strapi-de-verenigde-vrienden.herokuapp.com/restaurants')
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
