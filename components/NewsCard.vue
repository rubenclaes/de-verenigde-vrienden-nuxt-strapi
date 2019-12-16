<!-- components/NewsPreview.vue -->

<template>
  <card class="border-0" hover shadow body-classes="py-5">
    <template #image>
      <img v-lazy="article.image.url" class="card-img-top cardThumbnail" alt="Nieuws afbeelding" />
    </template>

    <icon :name="icon" :type="type" rounded class="mb-4"></icon>

    <h6 v-bind:class="textColor" class="text-uppercase">{{ article.name }}</h6>

    <p
      class="description mt-3"
    >{{ article.description.substring(0, 100) || 'Geen omschrijving' }}...</p>

    <div>
      <badge v-if="article.Categories[0].Tag1" :type="type" rounded>
        {{
        article.Categories[0].Tag1
        }}
      </badge>
      <badge v-if="article.Categories[0].Tag2" :type="type" rounded>
        {{
        article.Categories[0].Tag2
        }}
      </badge>
      <badge v-if="article.Categories[0].Tag3" :type="type" rounded>
        {{
        article.Categories[0].Tag3
        }}
      </badge>
    </div>

    <router-link
      :to="{ name: 'restaurants-id', params: { id: article.id } }"
      tag="a"
      class="btn mt-4"
      :class="buttonType"
    >Lees meer</router-link>
  </card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Restaurant } from '../store/restaurant/types';

@Component({
  components: {
    BaseButton: () => import('@/components/BaseButton.vue'),
    Card: () => import('@/components/Card.vue'),
    Badge: () => import('@/components/Badge.vue'),
    Icon: () => import('@/components/Icon.vue')
  }
})
export default class NewsPreview extends Vue {
  @Prop({ type: Object, required: true })
  article!: Restaurant;

  @Prop({ type: String, default: 'ni ni-note-03' })
  icon!: String;

  @Prop({ type: String, default: 'primary' })
  type!: String;

  @Prop({ type: String, default: 'btn-primary' })
  buttonType!: String;

  @Prop({ type: String, default: 'text-primary' })
  textColor!: String;

  /* @Watch('$store.state.restaurant.status.loading')
  private watchSomething() {
    console.log('wow');
  } */
  /**
   * We use created here instead of mounted because it doesn’t need to be rerun if we leave this layout and come back to it.
   * */
  /*   created() {
    this.$store.watch(
      state => state.restaurant.status.loading,
      () => {
        console.log('created watch');
        const loading = this.$store.state.restaurant.status.loading;
        if (loading === false) {
          this.show = true;
          //this.$store.commit('snackbar/setSnack', '');
        }
      }
    );
  } */

  /* mounted() {
    this.$store.watch(
      () => this.$store.state.restaurant.status.loading,
      () => {
        console.log('watched: ');
      }
    );
  } */
}
</script>

<style lang="scss">
.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
  &[lazy='loaded'] {
    opacity: 1;
  }
}
</style>
