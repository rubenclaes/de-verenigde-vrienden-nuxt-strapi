<template>
  <div>
    <template v-for="module in modules">
      <component
        :is="module.component"
        :contentID="module.contentID"
        :data="module.data"
        :key="module.contentID"
      />
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class DynamicZone extends Vue {
  @Prop({ type: String })
  name;

  @Prop({ type: Object })
  flexPage;

  @Prop({ type: Object })
  pageInSitemap;

  @Prop({ type: Object })
  dynamicPageItem;

  @Prop({ type: Object })
  sharedContent;

  @Prop({ type: Object })
  sitemapFlat;

  @Prop({ type: Array })
  sitemapNested;
}
</script>
