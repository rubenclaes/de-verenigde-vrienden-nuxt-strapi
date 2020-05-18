<template>
  <!-- Contact -->
  <section
    class="section section-lg pt-lg-0 bg-secondary pb-0"
    :style="styles()"
  >
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
              <h4 class="mb-1">{{ data.title }}</h4>
              <p class="mt-0">
                <badge type="primary" class="mr-3">{{ data.info_text }}</badge>
              </p>

              <div v-show="false">
                <input name="bot-field" value="contact" />
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

                <b-button
                  block
                  type="submit"
                  variant="default"
                  :disabled="invalid"
                  round
                >
                  <icon name="ni ni-send" size="sm"></icon>Verstuur
                </b-button>
              </ValidationObserver>
            </card>
          </form>
        </div>
      </div>
    </div>

    <div
      id="map-contactus-3"
      class="map skew-separator skew-top"
      style="height: 500px; position: relative; overflow: hidden;"
    >
      <GMap
        ref="gMap"
        :cluster="{ options: { styles: clusterStyle } }"
        :center="{ lat: 51.0422056, lng: 5.2807416 }"
        :options="{
          fullscreenControl: true,
          streetViewControl: true,
          mapTypeControl: true,
          zoomControl: true,
          gestureHandling: 'cooperative',
          styles: mapStyle,
        }"
        :zoom="14"
        :style="{ height: 100 + '%' }"
      >
        <GMapMarker
          v-for="location in locations"
          :key="location.id"
          :position="{ lat: location.lat, lng: location.lng }"
          :options="{
            icon:
              location === currentLocation ? pins.selected : pins.notSelected,
          }"
          @click="currentLocation = location"
        >
          <GMapInfoWindow>
            <b>{{ location.name }}</b>
            <br />
            {{ location.street }}
            <br />
            {{ location.city }}
            <br />
            <code>
              <a href="https://goo.gl/maps/YgziKZGExWnQW9cd7" target="blank"
                >Bekijk op grotere kaart</a
              >
            </code>
          </GMapInfoWindow>
        </GMapMarker>
      </GMap>
    </div>
  </section>
  <!-- end Contact -->
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

@Component({
  components: {
    Icon: () => import(/* webpackChunkName: 'icon' */ '@/components/Icon.vue'),
    Card: () => import(/* webpackChunkName: 'card' */ '@/components/Card.vue'),
    Badge: () =>
      import(/* webpackChunkName: 'badge' */ '@/components/Badge.vue'),
    BaseInput: () =>
      import(/* webpackChunkName: 'base-input' */ '@/components/BaseInput.vue'),
    ValidationObserver,
    ValidationProvider,
  },
})
export default class Contact extends Vue {
  @Prop({ type: Object, required: true })
  data;

  private email = '';
  private model = {
    name: '',
    message: '',
  };

  currentLocation = {};
  locationsVisibleOnMap = '';

  locations = [
    {
      lat: 51.0359603,
      lng: 5.282072,
      name: 'KH De Verenigde Vrienden',
      street: 'Kerkenblook z/n',
      city: '3550 Heusden-Zolder',
    },
  ];
  pins = {
    selected:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=',
    notSelected:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII=',
  };

  clusterStyle = [
    {
      url:
        'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
      width: 56,
      height: 56,
      textColor: '#fff',
    },
  ];

  mapStyle = [
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'on',
        },
        {
          color: '#3e606f',
        },
        {
          weight: 2,
        },
        {
          gamma: 0.84,
        },
      ],
    },
    {
      featureType: 'all',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'administrative',
      elementType: 'geometry',
      stylers: [
        {
          weight: 0.6,
        },
        {
          color: '#313536',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        {
          color: '#44a688',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'geometry',
      stylers: [
        {
          color: '#13876c',
        },
      ],
    },
    {
      featureType: 'poi.attraction',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#f5e4e4',
        },
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'poi.attraction',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'on',
        },
        {
          lightness: '14',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#13876c',
        },
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#067372',
        },
        {
          lightness: '-20',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#357374',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#004757',
        },
      ],
    },
  ];

  styles() {
    return {
      'background-image': `url(${require('../../assets/svg/inn.svg')})`,
      'background-attachement': `fixed`,
      'background-repeat': `no-repeat`,
      'background-position': `center`,
      'background-size': `cover`,
    };
  }
}
</script>

<style lang="scss">
div#map-contactus-3 {
  margin-top: -220px !important;
}

.card {
  z-index: 2;
}

.GMap__Wrapper {
  width: 100%;
  height: 100% !important;
}
</style>
