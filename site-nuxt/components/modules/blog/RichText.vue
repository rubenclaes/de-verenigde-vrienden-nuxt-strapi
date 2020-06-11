<template>
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <div v-html="$md.render(data.text)"></div>
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
export default class RichText extends Vue {
  @Prop({ type: Object, required: true })
  data;
}
</script>
