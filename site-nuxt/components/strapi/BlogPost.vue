<template>
  <div>
    <!--  <dynamic-zone
      name="MainContentZone"
      :flexPage="flexPages[0]"
      :pageInSitemap="pageInSitemap"
      :dynamicPageItem="content"
      :sharedContent="sharedContent"
      :sitemapFlat="sitemapFlat"
      :sitemapNested="sitemapNested"
    /> -->

    <template v-for="component in contentComponents">
      <component
        :is="component.component"
        :contentID="component.contentID"
        :data="component.data"
        :key="component.id"
      />
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

import StrapiComponents from '../../strapi.component';

@Component({
  components: {},
})
export default class BlogPost extends Vue {
  @Prop({ type: Object, required: true })
  blogPost;

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

  get contentComponents() {
    return this.renderContentComponents();
  }

  renderComponent(component: string) {
    const split = component.split('.');
    const components = {
      blog: {
        rich_text: 'RichText',
        slider: 'Slider',
        video: 'Video',
        quote: 'Quote',
      },
    };
    //console.info(split[1].replace(/-/g, '_'));
    return components[split[0]][split[1].replace(/-/g, '_')];
  }

  renderContentComponents() {
    let modules: object[] = [];

    // Render Content DynamicZone
    this.blogPost.content.forEach((dynamicZone: any, index: number) => {
      const component = this.renderComponent(dynamicZone.__component);
      const ComponentToRender = StrapiComponents.moduleComponents[component];

      if (ComponentToRender) {
        modules.push({
          component: ComponentToRender,
          contentID: dynamicZone.id,
          id: index,
          data: dynamicZone,
        });
      } else {
        console.error(
          `No component found for the dynamicZone ${dynamicZone.__component}. Cannot render.`
        );
      }
    });

    return modules;
  }

  /**
   *
   * You may want to fetch data and render it on the server-side.
   * This method you handle async operations before setting the component data.
   * asyncData to make sure it is always 100% up to date and so
   * refetch it every time this page is viewed
   * Usage:
   *  - When data fetched in a particular route is used only by a single component
   *  - The result from asyncData will be merged with data.
   */
  async created() {
    //console.log(this.homePageData.activiteitenData);
    //console.log(store.getters['page/homePageData']);
    /*    if (this.flexPages === null) {
      try {
        await this.$store.dispatch('flexpage/fetchFlexPageData');
      } catch (e) {
        // set status code on server and
        console.error('Error', e);
      }
    } else {
      console.log('return form state');
    } */
  }
}
</script>
