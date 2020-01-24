export default {
  data() {
    return {};
  },
  watch: {
    $route() {
      this.lmS.update();
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.lmS = new this.locomotiveScroll({
        el: document.querySelector('#js-scroll'),
        smooth: true /* if false disable overflow: hidden on html, body */
      });
    });
  },
  destroyed() {
    this.lmS.destroy();
  },
  computed: {},
  methods: {}
};
