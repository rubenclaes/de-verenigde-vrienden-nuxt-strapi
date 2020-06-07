export default {
  // Our Strapi Modules
  moduleComponents: {
    /*
    ,


    ImportantMessage: () => import('@/components/modules/ImportantMessage.vue'), */
    Banner: () => import('@/components/modules/Banner.vue'),
    Jeugdorkest: () => import('@/components/modules/Jeugdorkest.vue'),
    Harmonie: () => import('@/components/modules/Harmonie.vue'),
    Activiteiten: () => import('@/components/modules/Activiteiten.vue'),
    LatestArticles: () => import('@/components/modules/LatestArticles.vue'),
    Address: () => import('@/components/modules/Address.vue'),
    Contact: () => import('@/components/modules/Contact.vue'),
    /*


    ImageWithText: () => import('@/components/modules/ImageWithText.vue'), */
  },
  // Our Strapi PageTemplates
  pageTemplateComponents: {
    WebShopTemplate: () => import('@/components/templates/WebShopTemplate.vue'),
  },
};
