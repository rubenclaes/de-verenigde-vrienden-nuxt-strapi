const isDev = process.env.NODE_ENV !== 'production';

import NuxtConfiguration from '@nuxt/config';
import axios from 'axios';

const config: NuxtConfiguration = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: '%s - ' + process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'Harmonie De Verenigde Vrienden',
        content:
          'Koninklijke Harmonie de Verenige Vrienden Heusden-Zolder Website'
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
    { src: '~/plugins/argon-kit.js', ssr: false },
    '~/plugins/click-outside.js'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
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
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
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
    routes: async function() {
      return await axios
        .get('https://strapi-de-verenigde-vrienden.herokuapp.com/restaurants')
        .then(res => {
          return res.data.map(restaurant => {
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
