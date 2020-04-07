<template>
  <!-- Dirigent -->
  <section class="section section-lg">
    <div class="container">
      <div class="row justify-content-center text-center mb-sm">
        <div class="col-lg-8">
          <h1>Dirigent</h1>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-3 mb-5 mb-lg-0">
          <div class="px-4">
            <LazyImage
              srcData="home/dirigent/dirigent2.jpeg"
              fetchMode="srcset"
              extraCss="rounded img-center img-fluid shadow shadow-lg--hover"
              height="width: 200px;"
            />

            <div class="pt-4 text-center">
              <h5 class="title">
                <span class="d-block mb-1">Kevin Absillis</span>
                <small class="h6 text-muted">Dirigent</small>
              </h5>

              <blockquote class="blockquote text-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 14.1818L4.57143 0H9.52381L5.71429 13.2893H9.52381V24H0V14.1818ZM14.4762 14.1818L19.0476 0H24L20.1905 13.2893H24V24H14.4762V14.1818Z"
                    fill="#88DD9B"
                  />
                </svg>
                <p class="mb-0">
                  Het belangrijkste in de muziek staat niet in de noten.
                </p>
              </blockquote>
              <div class="mt-3">
                <a href="dirigent" class="text-primary"
                  >Lees meer
                  <i class="ni ni-bold-right text-primary"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end Dirigent -->
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
    BaseButton: () =>
      import(
        /* webpackChunkName: 'base-button' */ '@/components/BaseButton.vue'
      ),
  },
})
export default class Dirigent extends Vue {}
</script>
