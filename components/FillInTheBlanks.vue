<template>
  <div>
    <span v-for="(part, index) in sentenceParts" :key="index">
      <input
        v-if="part.input"
        v-model="part.guess"
        :aria-colindex="index"
        :class="{ correct: partIsCorrect(part) }"
      />
      <span v-else>{{ part.text }}</span>
    </span>
    <p v-if="allCorrect">
      Goed gedaan!
      <LazyImage
        srcData="femme/ruben.jpeg"
        fetchMode="srcset"
        extraCss="shape"
        :style="{ objectFit: `cover` }"
      />
    </p>
  </div>
</template>

<script>
import LazyImage from './LazyImage';

export default {
  name: 'FillInTheBlanks',

  components: {
    LazyImage
  },

  props: { sentence: { type: String, default: 'buton' } },

  data() {
    return {
      sentenceParts: []
    };
  },

  computed: {
    allCorrect() {
      if (this.sentenceParts.every(this.partIsCorrect)) {
        this.$confetti.start();
        return true;
      }
    }
  },

  mounted() {
    this.playSound(
      'https://www.bensound.com/bensound-music/bensound-christmasjoy.mp3'
    );
  },

  methods: {
    partIsCorrect(part) {
      return !part.input || part.text === part.guess;
    },

    reset() {
      const re = /(\[[^\]]*\])/;

      // The filter removes empty strings
      const parts = this.sentence.split(re).filter(text => text);

      this.sentenceParts = parts.map(segment => {
        const isInput = re.test(segment);

        return {
          guess: '',
          input: isInput,
          text: isInput ? segment.slice(1, -1) : segment
        };
      });
    },

    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  },

  watch: {
    sentence: {
      immediate: true,
      handler: 'reset'
    }
  }
};
</script>

<style>
.correct,
p {
  background: #7c7;
}
</style>
