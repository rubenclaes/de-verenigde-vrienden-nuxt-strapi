const isDev = process.env.NODE_ENV !== 'production';

import NuxtConfiguration from '@nuxt/config';

import Strapi from 'strapi-sdk-javascript/build/main';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

const config: NuxtConfiguration = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  manifest: {
    name: 'Nuxt Hacker News Typescript',
    short_name: 'Nuxt HN TS',
    description: 'HackerNews clone built with Nuxt.js & Typescript',
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
        id: 'UA-12301-2'
      }
    ],
    //Always at the end
    '@nuxtjs/sitemap'
  ],
  env: {
    API_URL: 'https://strapi-de-verenigde-vrienden.herokuapp.com'
  },
  sitemap: {
    hostname: 'https://example.com',
    gzip: true,
    exclude: ['/secret', '/admin/**'],
    routes: [
      '/page/1',
      {
        url: '/page/2',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      }
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
  generate: {
    routes: ['/restaurants/1', '/restaurants/2', '/restaurants/3']
  }
  /*   generate: {
    routes: async () => {
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

      let routes = response.data.restaurants.forEach(restaurant => {
        routes.push('restaurants/' + restaurant.id);
      });
      return routes;
    }
  } */
};

export default config;
