<template>
  <div>
    <banner />
    <dynamic-zone
      name="MainContentZone"
      :page="page"
      :pageInSitemap="pageInSitemap"
      :dynamicPageItem="dynamicPageItem"
      :sharedContent="sharedContent"
      :sitemapFlat="sitemapFlat"
      :sitemapNested="sitemapNested"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component({
  components: {
    Banner: () =>
      import(
        /* webpackChunkName: 'header' */ '@/components/Modules/Banner.vue'
      ),
    DynamicZone: () =>
      import(
        /* webpackChunkName: 'dynamic-zone' */ '@/components/strapi/DynamicZone.vue'
      ),
  },
})
export default class BannerTemplate extends Vue {
  @Prop({ type: Object })
  page;

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
