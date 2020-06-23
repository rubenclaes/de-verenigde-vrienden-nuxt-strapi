<template>
  <div id="faq-page">
    <h4>Invulblad Ventilatie</h4>
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      :title="null"
      :subtitle="null"
      finishButtonText="Submit"
      @on-complete="formSubmitted"
    >
      <tab-content title="Kies artikels" class="mb-5">
        <!-- tab 1 content -->
        <vs-collapse type="margin" accordion class="p-0">
          <vs-collapse-item class="faq-bg rounded-lg">
            <div slot="header">1. Dakdoorvoer</div>

            <vs-table
              multiple
              v-model="selected"
              @selected="handleSelected"
              :data="products"
            >
              <template slot="thead">
                <vs-th>Diameter</vs-th>
                <vs-th>Naam</vs-th>
              </template>

              <template slot-scope="{ data }">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].Diameter">
                    {{ data[indextr].Diameter }} (mm)
                  </vs-td>
                  <vs-td :data="data[indextr].Name">
                    {{ data[indextr].Name }}
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </vs-collapse-item>

          <vs-collapse-item class="faq-bg rounded-lg">
            <div slot="header">2. Opbouw muurrooster</div>

            Nunc auctor et leo vitae suscipit. Nullam aliquet purus scelerisque
            enim hendrerit tristique. Maecenas tincidunt dui arcu, a aliquet
            nisl venenatis vitae. Praesent mauris ligula, porta at maximus ac,
            rutrum vitae sapien. Donec a sapien id erat dapibus dignissim
            sodales in est. Donec gravida dapibus sapien at sollicitudin.
            Maecenas iaculis quam ex,
            <br /><br />
            eu aliquam erat sagittis eget. Suspendisse mollis felis nec ipsum
            vehicula, at posuere libero viverra. Nam hendrerit dapibus eleifend.
            Aliquam elit nulla, tincidunt pellentesque enim mollis, consectetur
            placerat enim. Integer condimentum tristique ante et ullamcorper.
            Mauris placerat pretium ex. Nam aliquam sed tortor sit amet
            <br /><br />
            efficitur. Mauris quis faucibus nulla. Pellentesque egestas non
            ipsum vel maximus.
          </vs-collapse-item>

          <vs-collapse-item class="faq-bg rounded-lg">
            <div slot="header">3. Comfoflat (Kunststof flexibel plat)</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu
          </vs-collapse-item>

          <vs-collapse-item class="faq-bg rounded-lg">
            <div slot="header">4. Comfotube (Kunststof flexibel rond)</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item class="faq-bg rounded-lg">
            <div slot="header">5. CK300 (Kunststof vaste buis)</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item class="faq-bg rounded-lg">
            <div slot="header">6. Geluidsdempers</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item>
            <div slot="header">7. Spiraliet</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item>
            <div slot="header">8. Isolatie 25mm</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item>
            <div slot="header">9. Aluminium-Tape</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item>
            <div slot="header">10. Stokbouten en toebehoren</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item>
            <div slot="header">11. Pluggen</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item>
            <div slot="header">12. Toezichtluiken</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item>
            <div slot="header">13. Ventilatie-unit (D-Systeem)</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item>
            <div slot="header">
              14. ComfoCool (Optioneel, prijs aan te vragen)
            </div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item>
            <div slot="header">15. Ventielen</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item>
            <div slot="header">16. LAN- Module (Internetverbinding)</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>

          <vs-collapse-item>
            <div slot="header">17. Inregelen installatie</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
          <vs-collapse-item>
            <div slot="header">18. Plaatsing (Boringen inbegrepen)</div>

            Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et.
            Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at
            magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel
            lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus
            nisl. Nunc venenatis tempus finibus.
          </vs-collapse-item>
        </vs-collapse>
      </tab-content>

      <!-- tab 2 content -->
      <tab-content title="Step 2" class="mb-5">
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="export-table">
              <!-- INVOICE TASKS TABLE -->
              <vs-table hoverFlat :data="selected" search>
                <template slot="header">
                  <vs-button
                    color="dark"
                    type="line"
                    icon-pack="feather"
                    icon="icon-eye"
                    @click="toggleShowDiscount()"
                  ></vs-button>
                  <vs-button
                    color="dark"
                    type="line"
                    icon-pack="feather"
                    icon="icon-save"
                  ></vs-button>
                </template>

                <!-- HEADER -->
                <template slot="thead">
                  <vs-th class="pointer-events-none">NAAM</vs-th>
                  <vs-th class="pointer-events-none">#</vs-th>
                  <vs-th class="pointer-events-none">Prijs Offerte</vs-th>
                  <vs-th class="pointer-events-none" v-if="showDiscount"
                    >Korting (%)</vs-th
                  >
                  <vs-th class="pointer-events-none" v-if="showDiscount"
                    >Lambrechts</vs-th
                  >
                  <vs-th class="pointer-events-none" v-if="showDiscount"
                    >WINST</vs-th
                  >
                </template>

                <!-- DATA -->
                <template slot-scope="{ data }">
                  <vs-tr v-for="(tr, index) in data" :key="index">
                    <vs-td :data="data[index].Name">{{
                      data[index].Name
                    }}</vs-td>
                    <vs-td class="md:w-1/6 lg:w-1/6 xl:w-1/6">
                      <vx-input-group>
                        <vs-input
                          v-model="numberOfArticles[index]"
                          size="small"
                          placeholder="0"
                        />

                        <template slot="append">
                          <div class="append-text bg-primary">
                            <span>st</span>
                          </div>
                        </template>
                      </vx-input-group>
                    </vs-td>
                    <vs-td :data="data[index].rate"
                      >{{
                        total(
                          data[index].prijs[0].GrossPrice,
                          numberOfArticles[index]
                        )
                      }}
                      euro
                    </vs-td>
                    <vs-td
                      class="md:w-1/6 lg:w-1/6 xl:w-1/6"
                      v-if="showDiscount"
                      :data="data[index].rate"
                    >
                      <vx-input-group>
                        <vs-input size="small" placeholder="0" />

                        <template slot="append">
                          <div class="append-text bg-danger">
                            <span>%</span>
                          </div>
                        </template>
                      </vx-input-group></vs-td
                    >
                    <vs-td v-if="showDiscount" :data="data[index].rate"
                      >{{ data[index].rate }} USD</vs-td
                    >
                    <vs-td v-if="showDiscount" :data="data[index].amount"
                      >{{ data[index].amount }} USD</vs-td
                    >
                  </vs-tr>
                </template>
              </vs-table>
            </div>
          </div>
        </div>
      </tab-content>

      <!-- tab 3 content -->
      <tab-content title="Step 3" class="mb-5">
        <div class="vx-row">
          <div class="vx-col md:w-1/2 w-full">
            <vs-input
              label="Event Name"
              v-model="eventName"
              class="w-full mt-5"
            />
          </div>
          <div class="vx-col md:w-1/2 w-full">
            <vs-select
              v-model="city"
              class="w-full select-large mt-5"
              label="Event Location"
            >
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in cityOptions"
                class="w-full"
              />
            </vs-select>
          </div>
          <div class="vx-col md:w-1/2 w-full mt-5">
            <vs-select
              v-model="status"
              class="w-full select-large"
              label="Event Status"
            >
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in statusOptions"
                class="w-full"
              />
            </vs-select>
          </div>
          <div class="vx-col md:w-1/2 w-full md:mt-8">
            <div class="demo-alignment">
              <span>Requirements:</span>
              <div class="flex">
                <vs-checkbox>Staffing</vs-checkbox>
                <vs-checkbox>Catering</vs-checkbox>
              </div>
            </div>
          </div>
        </div>
      </tab-content>

      <!-- tab 3 content -->
      <tab-content title="Step 3" class="mb-5">
        <div class="vx-row">
          <div class="vx-col md:w-1/2 w-full">
            <vs-input
              label="Event Name"
              v-model="eventName"
              class="w-full mt-5"
            />
          </div>
          <div class="vx-col md:w-1/2 w-full">
            <vs-select
              v-model="city"
              class="w-full select-large mt-5"
              label="Event Location"
            >
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in cityOptions"
                class="w-full"
              />
            </vs-select>
          </div>
          <div class="vx-col md:w-1/2 w-full mt-5">
            <vs-select
              v-model="status"
              class="w-full select-large"
              label="Event Status"
            >
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in statusOptions"
                class="w-full"
              />
            </vs-select>
          </div>
          <div class="vx-col md:w-1/2 w-full md:mt-8">
            <div class="demo-alignment">
              <span>Requirements:</span>
              <div class="flex">
                <vs-checkbox>Staffing</vs-checkbox>
                <vs-checkbox>Catering</vs-checkbox>
              </div>
            </div>
          </div>
        </div>
      </tab-content>
    </form-wizard>
  </div>
</template>

<script>
import moduleDataList from '@/store/data-list/moduleDataList.js';

import { FormWizard, TabContent } from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

export default {
  components: { FormWizard, TabContent },

  data() {
    return {
      selected: [],
      showDiscount: false,

      numberOfArticles: [],
      transparent: 'transparent',
      passengers: 1,
      firstName: '',
      lastName: '',
      email: '',
      city: 'new-york',
      proposalTitle: '',
      jobTitle: '',
      textarea: '',
      eventName: '',
      eventLocation: 'san-francisco',
      status: 'plannning',
      cityOptions: [
        { text: 'New York', value: 'new-york' },
        { text: 'Chicago', value: 'chicago' },
        { text: 'San Francisco', value: 'san-francisco' },
        { text: 'Boston', value: 'boston' },
      ],
      statusOptions: [
        { text: 'Plannning', value: 'plannning' },
        { text: 'In Progress', value: 'in progress' },
        { text: 'Finished', value: 'finished' },
      ],
      LocationOptions: [
        { text: 'New York', value: 'new-york' },
        { text: 'Chicago', value: 'chicago' },
        { text: 'San Francisco', value: 'san-francisco' },
        { text: 'Boston', value: 'boston' },
      ],
    };
  },

  computed: {
    products() {
      return this.$store.state.dataList.products;
    },
  },
  methods: {
    total(price, amount) {
      return parseFloat(price) * parseFloat(amount);
    },
    toggleShowDiscount() {
      this.showDiscount = !this.showDiscount;
    },
    formSubmitted() {
      alert('Form submitted!');
    },
    handleSelected(tr) {
      this.$vs.notify({
        title: `${tr.Name} gesecteerd.`,
        text: `${tr.Description}`,
      });
    },
  },
  created() {
    if (!moduleDataList.isRegistered) {
      this.$store.registerModule('dataList', moduleDataList);
      moduleDataList.isRegistered = true;
    }
    this.$store.dispatch('dataList/fetchDataListItems');
  },
};
</script>

<style lang="scss">
#faq-page {
  .faq-bg {
    background-color: #fff;
  }
}
</style>
