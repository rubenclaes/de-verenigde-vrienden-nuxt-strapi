<template>
  <figure
    :class="[objectFit !== '' ? 'is-' + objectFit : '']"
    :data-aspect-ratio="aspectRatio"
    :height="height"
  >
    <picture v-if="fetchMode === 'srcset'">
      <source
        sizes="100vw"
        media="(max-width: 576px)"
        :data-srcset="
          require(`../assets/img/home/header/music/music-chart_576w.jpg?webp`)
        "
        type="image/webp"
      />

      <source
        sizes="100vw"
        media="(max-width: 992px)"
        :data-srcset="
          require(`../assets/img/home/header/music/music-chart_671w.jpg?webp`)
        "
        type="image/webp"
      />
      <source
        sizes="100vw"
        media="(max-width: 1200px)"
        :data-srcset="
          require(`../assets/img/home/header/music/music-chart_1200.jpg?webp`)
        "
        type="image/webp"
      />
      <source
        sizes="100vw"
        media="(max-width: 2560px)"
        :data-srcset="
          require(`../assets/img/home/header/music/music-chart_2560.jpg?webp`)
        "
        type="image/jpg"
      />
      <source
        sizes="100vw"
        media="(min-width: 2561px)"
        :data-srcset="
          require(`../assets/img/home/header/music/music-chart.jpg?webp`)
        "
        type="image/jpg"
      />

      <source
        data-sizes="100vw"
        media="(max-width: 576px)"
        :data-srcset="
          require(`../assets/img/home/header/music/music-chart_576w.jpg`)
        "
        type="image/jpg"
      />
      <source
        sizes="100vw"
        media="(max-width: 768px)"
        :data-srcset="
          require(`../assets/img/home/header/music/music-chart_671w.jpg`)
        "
        type="image/jpg"
      />
      <source
        sizes="100vw"
        media="(max-width: 992px)"
        :data-srcset="
          require(`../assets/img/home/header/music/music-chart_671w.jpg`)
        "
        type="image/jpg"
      />
      <source
        sizes="100vw"
        media="(max-width: 1200px)"
        :data-srcset="
          require(`../assets/img/home/header/music/music-chart_1200.jpg`)
        "
        type="image/jpg"
      />
      <source
        sizes="100vw"
        media="(max-width: 2560px)"
        :data-srcset="
          require(`../assets/img/home/header/music/music-chart_2560.jpg`)
        "
        type="image/jpg"
      />
      <source
        sizes="100vw"
        media="(min-width: 2561px)"
        :data-srcset="
          require(`../assets/img/home/header/music/music-chart.jpg`)
        "
        type="image/jpg"
      />

      <img
        :src="image.placeholder"
        v-bind:class="extraCss"
        class="lazyload blur"
        :data-src="image.opt"
        alt="image with artdirection"
        title="image with artdirection"
      />
    </picture>
    <img
      v-else-if="fetchMode === 'img'"
      :src="image.placeholder"
      v-bind:class="extraCss"
      class="lazyload blur"
      :data-src="image.opt"
    />
    <img v-else v-bind:class="extraCss" class="lazyload" :data-src="srcData" />
  </figure>
</template>

<script>
export default {
  props: {
    height: {
      default: '',
      required: false,
      type: String
    },
    extraCss: {
      default: '',
      required: false,
      type: String
    },
    aspectRatio: {
      default: '16:9',
      required: false,
      type: String
    },
    srcData: {
      default: 'cat2.jpg',
      required: false,
      type: String
    },
    objectFit: {
      default: 'cover',
      required: false,
      type: String
    },
    fetchMode: {
      default: 'none',
      required: false,
      type: String
    },
    lqip: {
      default: true,
      required: false,
      type: Boolean
    }
  },
  computed: {
    image() {
      return {
        original: require(`../assets/img/${this.srcData}?original`),
        opt: require(`../assets/img/${this.srcData}`),
        placeholder: require(`../assets/img/${this.srcData}?lqip`),
        placeholderBlur: require(`../assets/img/${this.srcData}?lqip`),
        colors: require(`../assets/img/${this.srcData}?lqip-colors`),
        webp: require(`../assets/img/${this.srcData}?webp`)
      };
    }
  },
  methods: {
    test() {
      try {
        let x = `${this.srcData}?original`;
      } catch (e) {
        console.log('error');
      }
    }
  }
};
</script>

<style scoped lang="scss">
figure {
  margin: 0;
}
img.blur {
  filter: blur(25px);
}

img.lazyloaded {
  opacity: 0;
  animation-name: fadein;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-direction: normal;
  animation-timing-function: ease-out;
  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &.blur {
    filter: blur(0);
  }
}
</style>
