<template>
  <div>
    <Banner />
    <harmonie />
    <jeugdorkest />
    <activiteiten />
    <dirigent />

    <!-- Adres -->
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <GMap
          ref="gMap"
          :cluster="{ options: { styles: clusterStyle } }"
          :center="{ lat: locations[0].lat, lng: locations[0].lng }"
          :options="{
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            zoomControl: true,
            gestureHandling: 'cooperative',
            styles: mapStyle
          }"
          :zoom="6"
        >
          <GMapMarker
            v-for="location in locations"
            :key="location.id"
            :position="{ lat: location.lat, lng: location.lng }"
            :options="{
              icon:
                location === currentLocation ? pins.selected : pins.notSelected
            }"
            @click="currentLocation = location"
          >
            <GMapInfoWindow>
              <b>{{ location.name }}</b>
              <br />
              <br />
              <code>Lat: {{ location.lat }}, Lng: {{ location.lng }}</code>
            </GMapInfoWindow>
          </GMapMarker>
        </GMap>
      </div>

      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <a href="https://goo.gl/maps/YgziKZGExWnQW9cd7">
              <icon name="ni ni-pin-3" class="mb-5 floating" size="lg" type="white" shadow rounded></icon>
            </a>
            <h1 class="text-white font-weight-light">Hoe kan je ons bereiken?</h1>

            <a href="https://goo.gl/maps/YgziKZGExWnQW9cd7" class="lead text-white" target="blank">
              <icon name="ni ni-map-big" size="sm" type="white"></icon>&nbsp;Kerkenblook z/n
              <p class="lead text-white">3550 Heusden-Zolder</p>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- end Adres -->

    <!-- Nieuws -->
    <section id="nieuws" class="section section-lg">
      <div class="container">
        <news-list></news-list>
      </div>
    </section>
    <!-- end Nieuws -->

    <!-- Contact -->
    <section class="section section-lg pt-lg-0 section-contact-us">
      <div class="container">
        <div class="row justify-content-center mt--200">
          <div class="col-lg-8">
            <form
              name="contact"
              id="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <card
                gradient="secondary"
                shadow
                body-classes="p-lg-5"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <h4 class="mb-1">Wil je meer van ons weten?</h4>
                <p class="mt-0">
                  <badge type="primary" class="mr-3">Laat een bericht achter</badge>
                </p>

                <div v-show="false">
                  <input name="form-name" value="contact" />
                </div>

                <ValidationObserver v-slot="{ invalid }">
                  <ValidationProvider name="model.name" rules="required|min:1">
                    <div slot-scope="{ errors }">
                      <base-input
                        name="name"
                        class="mt-5"
                        alternative
                        placeholder="Naam"
                        type="text"
                        addon-left-icon="ni ni-circle-08"
                        v-model="model.name"
                        :error="errors[0]"
                      ></base-input>
                    </div>
                  </ValidationProvider>
                  <ValidationProvider name="email" rules="required|min:3|email">
                    <div slot-scope="{ errors }">
                      <base-input
                        name="email"
                        type="email"
                        alternative
                        placeholder="Email"
                        v-model="email"
                        addon-left-icon="ni ni-email-83"
                        :error="errors[0]"
                      ></base-input>
                    </div>
                  </ValidationProvider>
                  <ValidationProvider name="model.message" rules="required|min:1">
                    <div slot-scope="{ errors }">
                      <base-input class="mb-4" :error="errors[0]">
                        <textarea
                          name="message"
                          class="form-control form-control-alternative"
                          rows="4"
                          cols="80"
                          placeholder="Schrijf je bericht..."
                          v-model="model.message"
                        ></textarea>
                      </base-input>
                    </div>
                  </ValidationProvider>
                  <b-button block type="submit" variant="default" round :disabled="invalid">
                    <icon name="ni ni-send" size="sm"></icon>&nbsp;Verstuur
                  </b-button>
                </ValidationObserver>
              </card>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- end Contact -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

import { ValidationObserver, ValidationProvider } from 'vee-validate';

import { articleVuexNamespace } from '@/store/article/const';
import { deverenigdevrienden } from '../assets/app/app';

@Component({
  layout: 'default',

  components: {
    Banner: () =>
      import(/* webpackChunkName: 'header' */ '@/components/Home/Banner.vue'),
    Harmonie: () =>
      import(
        /* webpackChunkName: 'harmonie' */ '@/components/Home/Harmonie.vue'
      ),
    Jeugdorkest: () =>
      import(
        /* webpackChunkName: 'jeugdorkest' */ '@/components/Home/Jeugdorkest.vue'
      ),
    Activiteiten: () =>
      import(
        /* webpackChunkName: 'activiteiten' */ '@/components/Home/Activiteiten.vue'
      ),
    Dirigent: () =>
      import(
        /* webpackChunkName: 'dirigent' */ '@/components/Home/Dirigent.vue'
      ),
    BaseButton: () =>
      import(
        /* webpackChunkName: 'base-button' */ '@/components/BaseButton.vue'
      ),

    Card: () => import(/* webpackChunkName: 'card' */ '@/components/Card.vue'),

    Badge: () =>
      import(/* webpackChunkName: 'badge' */ '@/components/Badge.vue'),
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),

    BaseInput: () =>
      import(/* webpackChunkName: 'base-input' */ '@/components/BaseInput.vue'),

    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),

    LazyPicture: () =>
      import(
        /* webpackChunkName: 'lazy-picture' */ '@/components/LazyPicture.vue'
      ),

    NewsList: () =>
      import(/* webpackChunkName: 'news-list' */ '@/components/NewsList.vue'),

    ValidationObserver,
    ValidationProvider
  }
})
export default class IndexPage extends Vue {
  private title = 'Home';

  private modals = {
    modal3: false
  };

  private model = {
    name: '',
    message: ''
  };

  private email = '';

  @articleVuexNamespace.Getter('loading')
  private loading!: boolean;

  data() {
    return {
      currentLocation: {},
      locationsVisibleOnMap: '',
      locations: [
        {
          lat: 45.81444,
          lng: 15.97798,
          name: 'Zagreb'
        },
        {
          lat: 46.056946,
          lng: 14.505751,
          name: 'Ljubljana'
        }
      ],
      pins: {
        selected:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=',
        notSelected:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII='
      },
      clusterStyle: [
        {
          url:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff'
        }
      ],
      mapStyle: [
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#ffffff'
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'on'
            },
            {
              color: '#3e606f'
            },
            {
              weight: 2
            },
            {
              gamma: 0.84
            }
          ]
        },
        {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [
            {
              weight: 0.6
            },
            {
              color: '#313536'
            }
          ]
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            {
              color: '#44a688'
            }
          ]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#13876c'
            }
          ]
        },
        {
          featureType: 'poi.attraction',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#f5e4e4'
            },
            {
              visibility: 'off'
            }
          ]
        },
        {
          featureType: 'poi.attraction',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'on'
            },
            {
              lightness: '14'
            }
          ]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#13876c'
            },
            {
              visibility: 'simplified'
            }
          ]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#067372'
            },
            {
              lightness: '-20'
            }
          ]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#357374'
            }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#004757'
            }
          ]
        }
      ]
    };
  }

  mounted() {
    deverenigdevrienden.index();
  }

  head() {
    return {
      title: this.title
    };
  }

  scrollToHash() {
    var hash = this.$nuxt.$route.hash;

    this.$nextTick(() => {
      this.$scrollTo(hash, 0, { offset: -120 });
    });
  }

  /**
   * Will be called after all middleware has run and validation has cleared, so by the time it runs we know for certain this page will render.
   * This makes it ideal for fetching expensive data that is necessary for page render but that you wouldn't want to do speculatively.
   * Fetching data as soon as the component's been mounted
   * Both are *only executed for pages (NOT components).
   * Should be used for data intended for VueX store - it does not need to return anything and should instead commit to store any required data.
   * It can use async/await.
   * Warning: You don't have access of the component instance through this inside fetch because it is called before initiating the component.
   * */
  async fetch({ store, params }) {
    /* if (store.getters['article/list'].length === 0) {
      console.info('Fetching data from API');
      return await store.dispatch('article/fetchData');
    }
    console.info('Store was not empty --> fetched data from store'); */
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  /* The height needs to be set to a fixed value for the effect to work.
   * 100vh is the full height of the viewport. */
  height: 100vh;
  /* The scaling of the images would add a horizontal scrollbar, so disable x overflow. */
  overflow-x: hidden;
  /* Enable scrolling on the page. */
  overflow-y: auto;
  /* Set the perspective to 2px. This is essentailly the simulated distance from the viewport to transformed objects.*/
  perspective: 2px;
  min-height: 500px;
  background-image: url(../assets/img/home/header/music/music-chart.jpg?lqip);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.wrapper.blur {
  filter: blur(25px);
}
.wrapper.lazyloaded {
  opacity: 0;
  animation-name: fadein;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &.blur {
    filter: blur(0);
  }
}

#thanks {
  background-color: #fff;
}
#thanks::after {
  content: none;
}
#thanks div {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.demo a {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: opacity 0.3s;
}
.demo a:hover {
  opacity: 0.5;
}
#section10 a {
  padding-top: 60px;
}
#section10 a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 50px;
  margin-left: -15px;
  border: 2px solid #e9ecef;
  border-radius: 50px;
  box-sizing: border-box;
}
#section10 a span::before {
  position: absolute;
  top: 10px;
  left: 50%;
  content: '';
  width: 6px;
  height: 6px;
  margin-left: -3px;
  background-color: #e9ecef;
  border-radius: 100%;
  -webkit-animation: sdb10 2s infinite;
  animation: sdb10 2s infinite;
  box-sizing: border-box;
}
@-webkit-keyframes sdb10 {
  0% {
    -webkit-transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    -webkit-transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
@keyframes sdb10 {
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 20px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.cnt {
  width: 304px; /* 320px max-width on mobile with 8px margins */
  height: 188px; /* width / 1.618 = golden ratio */
  overflow: hidden;
  background-color: white;
  position: relative;
}
.img {
  position: absolute;
  bottom: 0;
  display: block;
  width: 310px;
  height: 197px;
  background-image: url(http://www.tesco.com/christmas/2016/phase2/i/recipes-s5-gingerbread.jpg);
}
</style>
