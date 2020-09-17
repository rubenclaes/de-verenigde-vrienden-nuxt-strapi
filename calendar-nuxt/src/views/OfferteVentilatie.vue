<template>
  <div id="faq-page">
    <h4>Offerte Ventilatie</h4>
    <form-wizard
      color="rgba(var(--vs-primary), 1)"
      :title="null"
      :subtitle="null"
      finishButtonText="Submit"
      @on-complete="formSubmitted"
    >
      <tab-content title="Kies artikels" class="mb-5">
        <vx-card
          ref="filterCard"
          title="Filters"
          class="user-list-filters mb-8"
          actionButtons
          @refresh="resetColFilters"
          @remove="resetColFilters"
        >
          <div class="vx-row">
            <div class="vx-col md:w-1/2 sm:w-1/2 w-full">
              <label class="text-sm opacity-75">Categoriëen</label>
              <v-select
                multiple
                :closeOnSelect="false"
                :options="categoryOptions"
                v-model="categoryFilter"
                class="mb-4 md:mb-0"
              />
            </div>
            <div class="vx-col md:w-1/2 sm:w-1/2 w-full">
              <label class="text-sm opacity-75">Prijs</label>
              <v-select
                :options="statusOptions"
                :clearable="false"
                v-model="statusFilter"
                class="mb-4 md:mb-0"
              />
            </div>
          </div>
        </vx-card>

        <!-- tab 1 content -->
        <vs-collapse accordion class="p-0">
          <vs-collapse-item
            v-for="(category, index) in categoryOptions"
            class="faq-bg rounded-lg"
            :key="index"
          >
            <div slot="header">{{ index + 1 + '. ' + category.label }}</div>

            <vs-table
              multiple
              v-model="selected"
              @selected="handleSelected"
              :data="filteredArticles(category.value)"
            >
              <template slot="thead">
                <vs-th>Diameter</vs-th>
                <vs-th>Naam</vs-th>
              </template>

              <template slot-scope="{ data }">
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].article.Diameter">
                    {{ data[indextr].article.Diameter }} (mm)
                  </vs-td>
                  <vs-td :data="data[indextr].article.Name">
                    {{ data[indextr].article.Name }}
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
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
                  <vs-th class="pointer-events-none">Item</vs-th>
                  <vs-th class="pointer-events-none">Kostprijs</vs-th>
                  <vs-th class="pointer-events-none">#</vs-th>

                  <vs-th class="pointer-events-none" v-if="showDiscount"
                    >Korting (%)</vs-th
                  >
                  <vs-th class="pointer-events-none" v-if="showDiscount"
                    >Winst</vs-th
                  >
                  <vs-th class="pointer-events-none">Korting Kl.</vs-th>
                  <vs-th class="pointer-events-none">Totaal</vs-th>
                </template>

                <!-- DATA -->
                <template slot-scope="{ data }">
                  <vs-tr v-for="(tr, index) in data" :key="index">
                    <vs-td :data="data[index].Name">{{
                      data[index].Name
                    }}</vs-td>
                    <vs-td :data="data[index].GrossPrice"
                      >&euro; {{ data[index].GrossPrice }}</vs-td
                    >
                    <vs-td class="md:w-1/6 lg:w-1/6 xl:w-1/6">
                      <vx-input-group>
                        <vs-input
                          v-model="numberOfArticles[data[index].Guid]"
                          size="small"
                          placeholder="0"
                          type="number"
                        />

                        <template slot="append">
                          <div class="append-text bg-primary">
                            <span>{{ data[index].article.Unit }}</span>
                          </div>
                        </template>
                      </vx-input-group>
                    </vs-td>

                    <vs-td
                      class="md:w-1/6 lg:w-1/6 xl:w-1/6"
                      v-if="showDiscount"
                      :data="data[index].rate"
                    >
                      <vx-input-group>
                        <vs-input
                          v-model="numberOfArticles[data[index].article.Guid]"
                          size="small"
                          :value="data[index].article.ClientDiscount"
                          :placeholder="data[index].article.ClientDiscount"
                        />

                        <template slot="append">
                          <div class="append-text bg-danger">
                            <span>%</span>
                          </div>
                        </template>
                      </vx-input-group></vs-td
                    >

                    <vs-td v-if="showDiscount" :data="data[index].amount"
                      >{{ data[index].amount }} &euro;</vs-td
                    >

                    <vs-td class="md:w-1/6 lg:w-1/6 xl:w-1/6">
                      <vx-input-group>
                        <vs-input
                          v-model="numberOfArticles[index]"
                          size="small"
                          placeholder="0"
                        />

                        <template slot="append">
                          <div class="append-text bg-primary">
                            <span>%</span>
                          </div>
                        </template>
                      </vx-input-group>
                    </vs-td>

                    <vs-td :data="data[index].rate">
                      &euro;
                      {{
                        total(data[index].GrossPrice, numberOfArticles[index])
                      }}
                    </vs-td>
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

      <!-- tab 4 content -->
      <tab-content title="Step 4" class="mb-5">
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
import vSelect from 'vue-select';
import { FormWizard, TabContent } from 'vue-form-wizard';
import 'vue-form-wizard/dist/vue-form-wizard.min.css';

export default {
  components: { FormWizard, TabContent, vSelect },

  data() {
    return {
      // Filter Options

      faqFilter: 1,

      categoryFilter: { label: 'All', value: 'all' },
      categoryOptions: [
        { label: 'Dakdoorvoer', value: 'Dakdoorvoer' },
        { label: 'Opbouw muurrooster', value: 'Opbouw_Muurrooster' },
        { label: 'Comfoflat (Kunststof flexibel plat)', value: 'Comfoflat' },
        { label: 'Comfotube (Kunststof flexibel rond)', value: 'Comfotube' },
        { label: 'CK300 (Kunststof vaste buis)', value: 'CK300' },
        { label: 'Geluidsdempers', value: 'Geluidsdempers' },
        { label: 'Spiraliet', value: 'Spiraliet' },
        { label: 'Isolatie 25mm', value: 'Isolatie' },
        { label: 'Aluminium-Tape', value: 'Aluminium_Tape' },
        { label: 'Stokbouten en toebehoren', value: 'Stokbouten_Toebehoren' },
        { label: 'Pluggen', value: 'Pluggen' },
        { label: 'Toezichtluiken', value: 'Toezichtluiken' },
        { label: 'Ventilatie-unit (D-Systeem)', value: 'Ventilatie_Unit' },
        {
          label: 'ComfoCool (Optioneel, prijs aan te vragen)',
          value: 'ComfoCool',
        },
        { label: 'Ventielen', value: 'Ventielen' },
        {
          label: 'LAN- Module (Internetverbinding)',
          value: 'LAN',
        },
        { label: 'Inregelen installatie', value: 'Inregelen_Installatie' },
        { label: 'Plaatsing (Boringen inbegrepen)', value: 'Plaatsing' },
      ],
      statusFilter: { label: 'All', value: 'all' },
      statusOptions: [
        { label: 'All', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Deactivated', value: 'deactivated' },
        { label: 'Blocked', value: 'blocked' },
      ],

      isVerifiedFilter: { label: 'All', value: 'all' },
      isVerifiedOptions: [
        { label: 'All', value: 'all' },
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],

      departmentFilter: { label: 'All', value: 'all' },
      departmentOptions: [
        { label: 'All', value: 'all' },
        { label: 'Sales', value: 'sales' },
        { label: 'Development', value: 'development' },
        { label: 'Management', value: 'management' },
      ],

      searchQuery: '',

      selected: [],
      showDiscount: false,

      numberOfArticles: ['1'],
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

  watch: {
    categoryFilter(obj) {
      console.log(obj);
      this.setColumnFilter('role', obj.value);
    },
  },

  computed: {
    products() {
      return this.$store.state.dataList.products;
    },

    filteredFaq() {
      return this.products.filter((faq) => {
        if (this.faqFilter === 1) return faq.categoryId === 1;
        else if (this.faqFilter === 2)
          return (
            faq.categoryId === 2 &&
            faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase())
          );
        else if (this.faqFilter === 3)
          return (
            faq.categoryId === 3 &&
            faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase())
          );
        else if (this.faqFilter === 4)
          return (
            faq.categoryId === 4 &&
            faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase())
          );
        else if (this.faqFilter === 5)
          return (
            faq.categoryId === 5 &&
            faq.ans.toLowerCase().includes(this.faqSearchQuery.toLowerCase())
          );
      });
    },
  },
  methods: {
    filteredArticles(filter) {
      const articles = this.$store.state.dataList.products;
      return articles.filter((article) => article.article.Category === filter);
    },
    setColumnFilter(column, val) {
      console.log(val);
    },
    resetColFilters() {},
    updateSearchQuery(val) {},
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
    this.$store.dispatch('dataList/fetchDataListItemsByYear');
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
