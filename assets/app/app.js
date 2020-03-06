if (typeof window !== 'undefined') {
  require('jarallax/dist/jarallax.min');
}

export const deverenigdevrienden = {
  index() {
    this.jarallax();
    console.log('test');
  },

  jarallax() {
    // eslint-disable-next-line no-undef
    jarallax(document.querySelectorAll('[data-parallax="true"]'), {
      speed: 0.6
    });
  }
};
