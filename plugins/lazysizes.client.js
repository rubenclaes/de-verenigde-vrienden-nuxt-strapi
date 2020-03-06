// ~/plugins/lazysizes.client.js
import supportsLoadingAttribute from '~/assets/js/supports/loading-attribute';

export default () => {
  //TODO: https://viewsource.io/lazy-loading-images-in-nuxt/
  if (supportsLoadingAttribute) {
    import('lazysizes');
    // import plugins
    // Lazysizes parent-fit is recommended if you use object fit responsive images in combination with data-sizes="auto"
    import('lazysizes/plugins/parent-fit/ls.parent-fit');
    import('lazysizes/plugins/unveilhooks/ls.unveilhooks');

    if (!('object-fit' in document.createElement('a').style)) {
      // This extension polyfills object-fit: cover and contain properties as also the object-position in non supporting browsers.
      require('lazysizes/plugins/object-fit/ls.object-fit');
    }
  }
};
