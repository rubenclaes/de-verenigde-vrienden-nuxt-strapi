<template>
  <div class="page-header page-header-small header-filter">
    <div
      data-aos="reveal-header-bg"
      class="page-header-image"
      :style="{ backgroundImage: 'url(' + data.image.url + ')' }"
    ></div>
    <div class="container">
      <div class="header-body text-center mb-7">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6 col-md-8 px-5">
            <h1 class="text-white">{{ data.title }}</h1>

            <p class="text-lead text-white">
              {{ data.lead }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Header extends Vue {
  @Prop({ type: Object, required: true })
  data;
}
</script>
