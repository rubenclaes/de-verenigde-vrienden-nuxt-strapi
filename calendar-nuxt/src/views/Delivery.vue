<template>
  <div>
    <div class="vx-row">
      <div class="vx-col sm:w-1/2 w-full mb-2">
        <vs-input
          class="w-full"
          label-placeholder="ID"
          v-model="guid"
          disabled
        />
      </div>
      <div class="vx-col sm:w-1/2 w-full mb-2">
        <vs-input
          class="w-full"
          label-placeholder="Creation Date"
          v-model="creationDate"
        />
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full mb-6">
        <vs-input
          class="w-full"
          label-placeholder="Username"
          v-model="username"
        />
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full mb-2">
        <v-select
          class="w-full"
          v-model="retourType"
          :options="[
            { label: 'Aanlevering', value: 'AL' },
            { label: 'Retour klacht', value: 'RK' },
            { label: 'Retour', value: 'RT' },
          ]"
          :dir="$vs.rtl ? 'rtl' : 'ltr'"
        />
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full mb-6">
        <vs-input
          class="w-full"
          label-placeholder="Customername"
          v-model="customerName"
        />
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full mb-2">
        <v-select
          class="w-full"
          v-model="language"
          :value="selectedLang"
          :options="[{ label: 'English', value: 'EN' }]"
          :dir="$vs.rtl ? 'rtl' : 'ltr'"
        />
      </div>

      {{ selectedLang.value }}
    </div>

    <div class="vx-row">
      <div class="vx-col w-full mb-6">
        <vs-input
          class="w-full"
          label-placeholder="Contact Person"
          v-model="contactPerson"
        />
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full mb-2">
        <vs-button
          color="success"
          type="border"
          icon-pack="feather"
          icon="icon-check"
          @click="createDelivery"
          >Done</vs-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select';

import moduleDelivery from '@/store/delivery/moduleDelivery.js';

export default {
  components: { 'v-select': vSelect },
  data() {
    return {
      guid: '',
      creationDate: '',
      username: '',
      retourType: '',
      customerName: '',
      language: '',
      contactPerson: '',
      selectedLang: 'English',
    };
  },
  methods: {
    createDelivery() {
      this.$store.registerModule('delivery', moduleDelivery);

      // Loading
      this.$vs.loading();

      const payload = {
        retourType: this.retourType.value,
        customerName: this.customerName,
        language: this.language.value,
        contactPerson: this.contactPerson,
      };

      console.log(payload);

      this.$store.dispatch('delivery/createDelivery', payload).then(() => {
        this.$vs.loading.close();

        this.openAlert('success');
      });
    },

    openAlert(color) {
      this.colorAlert = color;
      this.$vs.dialog({
        color: this.colorAlert,
        title: `Dialog - ${this.colorAlert}`,
        text: 'Thank you.',
      });
    },
  },
};
</script>
