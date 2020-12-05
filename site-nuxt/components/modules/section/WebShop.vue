<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <!-- start DishList -->
        <dish-list class="mt--200" :dishes="data.products">
          <template v-if="data.picture" #picture>
            <LazyImage
              fetchMode="cloudinary"
              :placeholder="lqip()"
              :srcData="image()"
              extraCss="card-img-top cardThumbnail"
            />
          </template>

          <template v-if="data.text" #description>
            <div v-html="$md.render(data.text)"></div>
          </template>
        </dish-list>
        <!-- end DishList -->

        <div class="text-center">
          <n-link to="/checkout" tag="a" class="btn btn-primary my-4">
            Verder naar afrekenen
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    DishList: () =>
      import(
        /* webpackChunkName: 'dish-list' */ '@/components/deverenigdevrienden/dish/DishList.vue'
      ),

    LazyImage: () =>
      import(/* webpackChunkName: 'lazy-image' */ '@/components/LazyImage.vue'),
  },
})
export default class WebShopTemplate extends Vue {
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
