export default {
  // Our Strapi Modules
  moduleComponents: {
    /* ImportantMessage: () => import('@/components/modules/ImportantMessage.vue'), */
    Banner: () => import('@/components/modules/Banner.vue'),
    Jeugdorkest: () => import('@/components/modules/Jeugdorkest.vue'),
    Harmonie: () => import('@/components/modules/Harmonie.vue'),
    Activiteiten: () => import('@/components/modules/Activiteiten.vue'),
    LatestArticles: () => import('@/components/modules/LatestArticles.vue'),
    Address: () => import('@/components/modules/Address.vue'),
    Contact: () => import('@/components/modules/Contact.vue'),
    ProfileCard: () => import('@/components/modules/ProfileCard.vue'),
    ImageWithText: () =>
      import('@/components/modules/section/ImageWithText.vue'),
    WebShop: () => import('@/components/modules/section/WebShop.vue'),

    Header: () => import('@/components/modules/blocks/Header.vue'),

    Quote: () => import('@/components/modules/blog/Quote.vue'),
    Slider: () => import('@/components/modules/blog/Slider.vue'),
    RichText: () => import('@/components/modules/blog/RichText.vue'),
    Video: () => import('@/components/modules/blog/Video.vue'),
    Picture: () => import('@/components/modules/blog/Picture.vue'),
  },
};
