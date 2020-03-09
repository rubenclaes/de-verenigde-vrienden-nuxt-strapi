if (typeof window !== 'undefined') {
  require('jarallax/dist/jarallax.min');
}

export const verenigdevriendenApp = {
  index() {
    this.jarallax();
  },

  jarallax() {
    // eslint-disable-next-line no-undef
    jarallax(document.querySelectorAll('[data-parallax="true"]'), {
      speed: 0.6
    });
  }
};
