export default {
  // Our Strapi Modules
  moduleComponents: {
    Activiteiten: () => import('@/components/modules/Activiteiten.vue'),
    Banner: () => import('@/components/modules/Banner.vue'),
    Contact: () => import('@/components/modules/Contact.vue'),
    Harmonie: () => import('@/components/modules/Harmonie.vue'),
    ImportantMessage: () => import('@/components/modules/ImportantMessage.vue'),
    Jeugdorkest: () => import('@/components/modules/Jeugdorkest.vue'),
    LatestArticles: () => import('@/components/modules/LatestArticles.vue'),
    Address: () => import('@/components/modules/Address.vue'),
    ImageWithText: () => import('@/components/modules/ImageWithText.vue'),
  },
  // Our Strapi PageTemplates
  pageTemplateComponents: {
    WebShopTemplate: () => import('@/components/templates/WebShopTemplate.vue'),
    ProfileTemplate: () => import('@/components/templates/ProfileTemplate.vue'),
  },
};
