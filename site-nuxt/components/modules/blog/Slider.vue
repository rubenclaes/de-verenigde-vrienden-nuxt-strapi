<template>
  <section>
    <vue-glide>
      <vue-glide-slide
        type="carousel"
        v-for="picture in data.picture"
        :key="picture.id"
      >
        <img :src="picture.url" height="500" width="450" />
      </vue-glide-slide>
    </vue-glide>
  </section>
</template>

<script></script>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { Glide, GlideSlide } from 'vue-glide-js';

@Component({
  components: { [Glide.name]: Glide, [GlideSlide.name]: GlideSlide },
})
export default class Slider extends Vue {
  @Prop({ type: Object, required: true })
  data;
}
</script>
