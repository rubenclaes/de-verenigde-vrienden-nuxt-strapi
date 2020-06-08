<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <p class="blockquote">
            {{ data.quote }}
            <br />
            <br />
            <small>
              {{ data.author }}
            </small>
          </p>
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
export default class Quote extends Vue {
  @Prop({ type: Object, required: true })
  data;
}
</script>
