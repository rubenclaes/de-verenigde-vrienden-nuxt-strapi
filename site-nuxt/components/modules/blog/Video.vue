<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <client-only>
            <iframe
              :src="src()"
              width="640"
              height="360"
              frameborder="0"
              :title="data.title"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Video extends Vue {
  @Prop({ type: Object, required: true })
  data;

  src() {
    return `https://player.vimeo.com/video/${this.data.video_id}`;
  }
}
</script>
