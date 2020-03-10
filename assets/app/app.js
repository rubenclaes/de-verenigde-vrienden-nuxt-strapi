if (typeof window !== 'undefined') {
  require('jarallax/dist/jarallax.min');
}

export const verenigdevriendenApp = {
  index() {
    this.jarallax();
  },

  jarallax() {
    /* init Jarallax */
    jarallax(document.querySelectorAll('.jarallax'));

    jarallax(document.querySelectorAll('.jarallax-keep-img'), {
      keepImg: true
    });

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
  }
};
