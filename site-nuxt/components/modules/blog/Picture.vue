<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <template v-if="data.picture">
            <LazyImage
              fetchMode="cloudinary"
              :placeholder="lqip()"
              :srcData="image()"
              extraCss="shadow img-fluid"
            />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
  },
})
export default class Picture extends Vue {
  @Prop({ type: Object, required: true })
  data;

  lqip() {
    let image = `https://res.cloudinary.com/deverenigdevrienden/images/t_lqip/${this.data.picture.provider_metadata.public_id}/${this.data.picture.name}`;
    return image;
  }

  image() {
    let image = `https://res.cloudinary.com/deverenigdevrienden/images/${this.data.picture.provider_metadata.public_id}/${this.data.picture.name}`;
    return image;
  }
}
</script>
