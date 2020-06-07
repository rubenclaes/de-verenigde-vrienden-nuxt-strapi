<template>
  <div class="profile-page container">
    <card shadow class="card-profile mt--200 mb-5" no-body>
      <div class="px-4">
        <div class="row justify-content-center">
          <div class="col-lg-3 order-lg-2 mb-5">
            <div class="card-profile-image">
              <LazyImage
                fetchMode="cloudinary"
                :placeholder="lqip()"
                :srcData="image()"
                extraCss="rounded-circle"
              />
            </div>
          </div>
          <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
            <div class="card-profile-actions py-4 mt-lg-0"></div>
          </div>
          <div class="col-lg-4 order-lg-1 mt-5">
            <div class="card-profile-stats d-flex justify-content-center">
              <base-button
                size="lg"
                type="secondary"
                icon="ni ni-bold-left"
                @click="goToHome()"
                >naar home</base-button
              >
            </div>
          </div>
        </div>

        <div class="mt-5 py-5">
          <div class="row justify-content-center">
            <div class="col-lg-9">
              <template>
                <div v-html="$md.render(data.text)"></div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    Card: () => import('@/components/Card.vue'),

    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),

    BaseButton: () =>
      import(
        /* webpackChunkName: 'base-button' */ '@/components/BaseButton.vue'
      ),
  },
})
export default class ProfileCard extends Vue {
  @Prop({ type: Object, required: true })
  data;

  lqip() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/${this.data.profile_image.provider_metadata.public_id}/${this.data.profile_image.name}`;
    return image;
  }

  image() {
    //demo-res.cloudinary.com/images/ltepu4mm0qzw6lkfxt1m/basketball-game-in-college.jpg

    let image = `https://res.cloudinary.com/deverenigdevrienden/images/${this.data.profile_image.provider_metadata.public_id}/${this.data.profile_image.name}`;
    return image;
  }

  goToHome() {
    this.$router.push({ path: '/' });
  }
}
</script>
