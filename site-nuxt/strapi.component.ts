// Our Strapi Modules

// Our Strapi PageTemplates
//import OneColumnTemplate from './components/templates/OneColumnTemplate';

export default {
  moduleComponents: {
    Activiteiten: () => import('@/components/modules/Activiteiten.vue'),
    Banner: () => import('@/components/modules/Banner.vue'),
    Contact: () => import('@/components/modules/Contact.vue'),
    Harmonie: () => import('@/components/modules/Harmonie.vue'),
    ImportantMessage: () => import('@/components/modules/ImportantMessage.vue'),
    Jeugdorkest: () => import('@/components/modules/Jeugdorkest.vue'),
    RecentWritings: () => import('@/components/modules/RecentWritings.vue'),
  },
  pageTemplateComponents: {},
};
