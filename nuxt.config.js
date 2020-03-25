import axios from 'axios';
const IS_DEV = process.env.NODE_ENV !== 'production';

require('./utils/config');

module.exports = {
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
        content: 'Koninklijke Harmonie de Verenige Vrienden Heusden-Zolder'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://res.cloudinary.com' }
    ],
    script: [
      {
        src: 'https://js.stripe.com/v3'
      }
    ]
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
    theme_color: '#39b982'
  },

  /*
   ** Global CSS
   */
  css: [
    '@/assets/vendor/font-awesome/css/font-awesome.css',
    '@/assets/vendor/nucleo/css/nucleo.css',
    '@/assets/scss/argon.scss',
    'aos/dist/aos.css'
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

    { src: '~/plugins/vuex-persist', mode: 'client' },
    { src: '~/plugins/vue-toasted.js', mode: 'client' },
    { src: '~/plugins/vue-confetti.js', mode: 'client' },

    '~/plugins/composition-api',
    '~plugins/vue-scrollto.js',
    '~/plugins/filters',
    '~/plugins/vee-validate',
    '~/plugins/click-outside.js',
    `~/plugins/currency-filter.js`
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    'bootstrap-vue/nuxt',
    '@bazzite/nuxt-optimized-images',
    'vue-scrollto/nuxt',

    '@nuxtjs/markdownit',
    [
      'nuxt-cookie-control',
      {
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
          checkboxDisabledCircleBackground: '#fff'
        }
      }
    ],
    [
      'nuxt-gmaps',
      {
        key: process.env.GOOGLE_MAPS
      }
    ],

    //Always at the end
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  /*
   ** nuxt-cookie-control module config
   **
   */
  cookies: {
    necessary: [
      {
        name: 'Strikt noodzakelijke Cookies ',

        description:
          'Zijn nodig om de website goed te laten functioneren en worden automatisch ingeschakeld als u de site bezoekt',
        cookies: ['cookie_control_consent', 'cookie_control_enabled_cookies']
      }
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
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'GTM-TW8TSMW');
        }
      }
    ],

    //default texts
    text: {
      barTitle: 'Cookies',
      barDescription:
        'We gebruiken onze eigen cookies en cookies van derden, zodat we u deze website kunnen laten zien en beter kunnen begrijpen hoe u deze gebruikt, met het oog op het verbeteren van de diensten die we aanbieden. Als u doorgaat met browsen, zijn wij van mening dat u de cookies hebt geaccepteerd.',
      acceptAll: 'Accepteer alles',
      declineAll: 'Verwijder alles',
      manageCookies: 'Beheer cookies',
      unsaved: 'U hebt niet-opgeslagen instellingen',
      close: 'Sluit',
      save: 'Opslaan',
      necessary: 'Noodzakelijke cookies',
      optional: 'Optionele cookies',
      functional: 'Functionele cookies',
      blockedIframe: 'Schakel functionele cookies in om dit te zien',
      here: 'hier'
    }
  },

  /*
   ** optimized images configuration
   ** name: 'images/[name]-[width].[ext]', // use [name] to keep the original filename
   */
  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
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
      quality: 80
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

  robots: {
    sitemap: 'https://pre-vue.web.app/sitemap.xml'
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
    preset: 'default',
    linkify: true,
    breaks: true,
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
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.API_URL
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build'],

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
    }
  },

  generate: {
    fallback: true,

    routes: async function() {
      return await axios
        .get(`${process.env.API_URL}/restaurants`)
        .then(res => {
          return res.data.map(article => {
            article.image.url = `https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/${article.image.public_id}${article.image.ext}`;
            return {
              route: `/articles/${article.slug}`,
              payload: article
            };
          });
        })
        .catch(err => {
          console.log('error', err);
        });
    }
  }
};
