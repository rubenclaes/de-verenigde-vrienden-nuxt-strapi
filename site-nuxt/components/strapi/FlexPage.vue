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

    <template v-for="component in templateComponents">
      <component
        :is="component.component"
        :contentID="component.contentID"
        :data="component.data"
        :key="component.id"
      />
    </template>

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

import { FlexPage } from '../../store/flexpage/types';
import { pageVuexNamespace } from '../../store/flexpage/const';
import StrapiComponents from '../../strapi.component';

@Component({
  components: {},
})
export default class FlexPageComponent extends Vue {
  /* @pageVuexNamespace.Getter('loading')
  private loading!: boolean; */

  @Prop({ type: Object, required: true })
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

  get contentComponents() {
    return this.renderContentComponents();
  }

  get templateComponents() {
    return this.renderTemplateComponents();
  }

  renderComponent(component: string) {
    console.log(
      component.split(`.`)[1].charAt(0).toUpperCase() +
        component.split(`.`)[1].slice(1)
    );
    return (
      component.split(`.`)[1].charAt(0).toUpperCase() +
      component.split(`.`)[1].slice(1)
    );
  }

  renderTemplateComponents() {
    let templateComponents: object[] = [];
    // Render Template DynamicZone
    this.flexPage.Template.forEach((component: any, index: number) => {
      const ComponentToRender =
        StrapiComponents.pageTemplateComponents[component.template];

      if (ComponentToRender) {
        templateComponents.push({
          component: ComponentToRender,
          contentID: component.id,
          id: index,
          data: component,
        });
      } else {
        console.error(
          `No template component found for the dynamicZone. Cannot render dynamicZone.`
        );
      }
    });

    return templateComponents;
  }

  renderContentComponents() {
    let modules: object[] = [];
    const contentZoneName = 'this.name';

    // const modulesForThisContentZone = this.flexPage.Content[contentZoneName];

    /*  const componentsForThisDyamicContentZone = [
      'Activiteiten',
      'Adres',
      'Banner',
      'Contact',
      'Harmonie',
      'Jeugdorkest',
      'RecentWritings',
    ];

    if (componentsForThisDyamicContentZone === undefined) {
      console.error(
        `Cannot render components for zone "${contentZoneName}". This does not appear to be a valid content zone for this page template.`
      );
      return;
    } */

    // Render Content DynamicZone
    this.flexPage.Content.forEach((dynamicZone: any, index: number) => {
      const ComponentToRender =
        StrapiComponents.moduleComponents[dynamicZone.component];

      if (ComponentToRender) {
        modules.push({
          component: ComponentToRender,
          contentID: dynamicZone.id,
          id: index,
          data: dynamicZone,
        });
      } else {
        console.error(
          `No component found for the dynamicZone. Cannot render dynamicZone.`
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
