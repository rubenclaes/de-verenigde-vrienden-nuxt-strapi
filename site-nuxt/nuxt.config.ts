import axios from 'axios';
import { NuxtConfig } from '@nuxt/types';

const IS_DEV = process.env.NODE_ENV !== 'production';

interface MyWindow extends Window {
  dataLayer: any;
}
declare var window: MyWindow;

const dynamicRoutes = async () => {
  const routesForArticles = await axios
    .get(`${process.env.API_URL}/blog-posts`)
    .then((res) => {
      return res.data.map((article) => {
        return {
          route: `/articles/${article.slug}`,
          payload: { article: article },
        };
      });
    })
    .catch((err) => {
      console.error(`Problem with generating articles routes ${err}`);
    });

  const routesForFlexPages = await axios
    .get(`${process.env.API_URL}/flex-pages`, {
      params: {
        active: true,
      },
    })
    .then((res) => {
      return res.data.map((page, index) => {
        const retPath = index == 0 ? `/` : `/${page.slug}`;

        return {
          route: retPath,
          payload: { page: page },
        };
      });
    })
    .catch((err) => {
      console.error(`Problem with generating FlexPages routes ${err}`);
    });

  const routes = routesForArticles.concat(routesForFlexPages);
  return routes;
};

const config: NuxtConfig = {
  target: 'static',

  publicRuntimeConfig: {
    baseURL: process.env.API_URL || 'http://localhost:1338',
    strapiUser: process.env.STRAPI_IDENTIFIER,
    strapiPassword: process.env.STRAPI_PASSWORD,
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
  },

  privateRuntimeConfig: {},

  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'nl-BE',
    },
    title: process.env.APP_ID,
    titleTemplate: '%s ← ' + process.env.APP_ID,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Koninklijke Harmonie de Verenige Vrienden Heusden-Zolder',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://res.cloudinary.com' },
    ],
    script: [],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#39b982' },

  manifest: {
    name: 'Koninklijke Harmonie De Verenigde Vrienden',
    short_name: 'Harmonie HZ',
    description:
      'Website Koninklijke Harmonie De Verenige Vrienden Heusden-Zolder',
    theme_color: '#39b982',
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/vendor/font-awesome/css/font-awesome.css',
    '@/assets/vendor/nucleo/css/nucleo.css',

    '@/assets/scss/argon.scss',
    '@/assets/main.scss',
    'aos/dist/aos.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/aos.client.js',

    '~/plugins/axios-accessor.ts',

    '~/plugins/notifier.js',

    '~/plugins/lazysizes.client.js',
    '~/plugins/vue-headroom.client.js',
    '~/plugins/vue-observe-visibility.client.js',
    '~/plugins/vue-glide.client.js',
    '~/plugins/vue-backtotop.client.js',

    { src: '~/plugins/sweetalert.ts', mode: 'client' },
    { src: '~/plugins/vuex-persist', mode: 'client' },
    { src: '~/plugins/vue-toasted.js', mode: 'client' },
    { src: '~/plugins/vue-confetti.js', mode: 'client' },

    '~/plugins/composition-api',
    '~/plugins/vue-scrollto.js',
    '~/plugins/filters',
    '~/plugins/vee-validate',
    '~/plugins/click-outside.js',
    `~/plugins/currency-filter.js`,
  ],

  /*
   ** Nuxt modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    'bootstrap-vue/nuxt',
    '@aceforth/nuxt-optimized-images',
    'vue-scrollto/nuxt',

    '~/modules/menu',

    '@nuxtjs/markdownit',
    [
      'nuxt-cookie-control',
      {
        controlButton: false,
        barPosition: 'bottom-right',
        blockIframe: true,
        colors: {
          barTextColor: '#fff',
          barBackground: '#06777c',
          barButtonColor: '#fff',
          barButtonBackground: '#206569',
          barButtonHoverColor: '#fff',
          barButtonHoverBackground: '#2e495e',
          modalButtonBackground: '#206569',
          modalButtonHoverColor: '#fff',
          controlButtonBackground: '#06777c',
          controlButtonHoverBackground: '#2e495e',
          controlButtonIconHoverColor: '#fff',
          controlButtonIconColor: '#fff',
          modalButtonHoverBackground: '#2e495e',
          checkboxActiveBackground: '#2e495e',
          checkboxInactiveBackground: '#ede1e1',
          checkboxActiveCircleBackground: '#00c58e',
          checkboxInactiveCircleBackground: '#f44336',
          checkboxDisabledBackground: '#ddd',
          checkboxDisabledCircleBackground: '#fff',
        },
      },
    ],
    [
      'nuxt-gmaps',
      {
        key: process.env.GOOGLE_MAPS,
      },
    ],

    //Always at the end
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  /*
   ** Nuxt-cookie-control module
   */
  cookies: {
    necessary: [
      {
        name: 'Strikt noodzakelijke Cookies ',

        description:
          'Zijn nodig om de website goed te laten functioneren en worden automatisch ingeschakeld als u de site bezoekt',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies'],
      },
    ],
    optional: [
      {
        name: 'Google Analytics',

        description:
          'Google Analytics is een webanalysedienst van Google die websiteverkeer volgt en rapporteert.',

        src: 'https://www.googletagmanager.com/gtag/js?id=GTM-TW8TSMW',
        async: true,
        cookies: ['_ga', '_gat_gtag_GTM-TW8TSMW', '_gid'],
        accepted: () => {
          window.dataLayer = window.dataLayer || [];
          function gtag(...args: any) {
            window.dataLayer.push(arguments);
          }

          gtag('js', new Date());
          gtag('config', 'GTM-TW8TSMW');
        },
        declined: () => { },
      },
    ],
    text: {
      barTitle: 'Cookies',
      barDescription:
        'We gebruiken cookies zodat deze website getoond kan worden en om beter te begrijpen hoe ze gebruikt wordt met het oog op verbetering.',
      acceptAll: 'Cookies toestaan',
      declineAll: 'Verwijder alles',
      manageCookies: 'Details',
      unsaved: 'U hebt niet-opgeslagen instellingen',
      close: 'Sluit',
      save: 'Opslaan',
      necessary: 'Noodzakelijke cookies',
      optional: 'Optionele cookies',
      functional: 'Functionele cookies',
      blockedIframe: 'Schakel functionele cookies in om dit te zien',
      here: 'hier',
    },
  },

  /*
   ** optimizedImages module
   ** name: 'images/[name]-[width].[ext]', // use [name] to keep the original filename
   */
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85,
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8],
    },
    webp: {
      quality: 80,
    },
  },

  /*
   ** BootstrapVue module
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
      'FormInputPlugin',
    ],
    directivePlugins: ['VBPopoverPlugin', 'VBTooltipPlugin'],

    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },

  /*
   ** Sitemap module
   */
  sitemap: {
    hostname: process.env.HOSTNAME,
    gzip: true,
    exclude: ['/secret', '/admin/**'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmodrealtime: true,
    },
    routes: [
      '/',
      '/nieuws',
      '/dirigent',
      '/geschiedenis',
      '/drumband',
      /* {
        url: '/page/2',
        changefreq: 'daily',
        priority: 1,
        lastmodISO: '2017-06-30T13:30:00.000Z'
      } */
    ],
  },

  robots: {
    sitemap: `${process.env.HOSTNAME}/sitemap.xml`,
  },

  /*
   ** @nuxtjs/pwa module
   */
  pwa: {
    workbox: {
      /* workbox options */
      offlineAnalytics: true,
    },
  },

  /*
   ** Markdownit module
   */
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
  },

  /*
   ** Sentry module
   */
  sentry: {
    dsn: process.env.SENTRY_DSN,
    publishRelease: true,
    disabled: true,
    config: {}, // Additional config
  },

  /*
   ** Axios module
   */
  axios: {
    baseURL: process.env.API_URL,
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/composition-api',
    '@nuxtjs/color-mode',
    '@nuxtjs/pwa',
  ],

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vee-validate/dist/rules'],

    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient, isServer, loaders: { vue } }) {
      if (isDev && isClient && vue != undefined && vue.transformAssetUrls) {
        vue.transformAssetUrls.img = ['data-src', 'src'];
        vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
      }
    },
  },

  /*
   ** Static generation
   */
  generate: {
    interval: 2000,
    fallback: true,
    routes: dynamicRoutes,
  },
};
export default config;
