const isDev = process.env.NODE_ENV !== 'production';

import { Configuration } from '@nuxt/types';
import axios from 'axios';
import webpack from 'webpack';
import { Restaurant } from './store/type';

const config: Configuration = {
  mode: 'universal',
  head: {
    title: '%s - ' + process.env.npm_package_name,
    /**
     *  Headers of the page
     */
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
  //loading: { color: '#39b982' },
  manifest: {
    name: 'Harmonie De Verenigde Vrienden',
    short_name: 'KH VV HZ',
    description:
      'Website Koninklijke Harmonie De Verenige Vrienden Heusden-Zolder',
    theme_color: '#188269'
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/argon.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/argon-kit.js', mode: 'client' },
    { src: '~/plugins/aos.js', mode: 'client' },
    '~/plugins/click-outside.js',
    new webpack.ProvidePlugin({
      _: 'lodash'
      // ...etc.
    })
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    'bootstrap-vue/nuxt',
    'vue-scrollto/nuxt',
    '@nuxtjs/markdownit',
    '@bazzite/nuxt-optimized-images',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-36999937-1'
      }
    ],
    //Always at the end
    '@nuxtjs/sitemap'
  ],
  env: {
    API_URL: 'https://strapi-de-verenigde-vrienden.herokuapp.com'
  },
  sitemap: {
    hostname: 'https://www.deverenigdevriendenheusden.be',
    gzip: true,
    exclude: ['/secret', '/admin/**'],
    routes: [
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
   ** bazzite/nuxt-optimized-images module configuration
   **
   */
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** markdownit module configuration
   **
   */
  markdownit: {
    injected: true
  },
  sentry: {
    dsn: 'https://fb2ee10337c04b69acc2256208c7ecd7@sentry.io/1508964', // Enter your project's DSN here
    publishRelease: true,
    disabled: isDev,
    config: {} // Additional config
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  buildModules: ['@nuxt/typescript-build'],

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
    routes: async function() {
      return await axios
        .get('https://strapi-de-verenigde-vrienden.herokuapp.com/restaurants')
        .then(res => {
          return res.data.map((restaurant: any) => {
            return {
              route: '/restaurants/' + restaurant.id,
              payload: restaurant
            };
          });
        });
    }
  }
};

export default config;
