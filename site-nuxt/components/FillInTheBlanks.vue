<template>
  <div>
    <client-only>
      <base-button @click="start()" size="lg" type="warning" icon="fa fa-play"
        >Play</base-button
      >
      <div v-if="play">
        <span v-for="(part, index) in sentenceParts" :key="index">
          <input
            v-if="part.input"
            v-model="part.guess"
            :aria-colindex="index"
            :class="{ correct: partIsCorrect(part) }"
          />
          <span v-else>{{ part.text }}</span>
        </span>

        <p v-if="allCorrect()">
          Goed gedaan!
          <LazyImage
            srcData="femme/ruben.jpeg"
            fetchMode="srcset"
            extraCss="shape"
            :style="{ objectFit: `cover` }"
          />
          <confetti></confetti>
        </p>
      </div>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import VueConfetti from 'vue-confetti';

import Confetti from './Confetti.vue';

@Component({
  components: {
    LazyImage: () => import('@/components/LazyImage.vue'),
    BaseButton: () => import('@/components/BaseButton.vue'),
    Confetti
  }
})
export default class FillInTheBlanks extends Vue {
  name: String = 'FillInTheBlanks';

  sentenceParts: any[] = [];

  confetti;

  play: boolean = false;

  @Prop({
    type: String,
    default: `Dag Femme, hierbij 2 [cadeau's] 🎁! 
      We kennen elkaar nu toch al enige [tijd], maar toch blijft een uniek cadeau zoeken voor jou geen simpele taak. 

      Femme, ik ben niet zo goed in een rijmpje verzinnen, maar laten we er toch aan [beginnen].
      
      Dansen, animeren, lesgeven en beleid vormen kan ze als geen ander,
       nochtans is ze geen [nederlander] 🇳🇱 
      
      1 tip het is niets eetbaar en zeker ook niets [drinkbaar] 🥤.
    

      Dus hopelijk stelt dit cadeau je niet teleur, en kan je het gebruiken in jouw [interieur] !
      

       Prettige feestdagen, succes met je thesis en goei examens, 

       Groetjes

       [Ruben] 🤖`
  })
  sentence!: String;

  @Watch('sentence', { immediate: true })
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
  }

  allCorrect() {
    if (this.sentenceParts.every(this.partIsCorrect)) {
      return true;
    }
  }

  start() {
    this.playSound(
      'https://www.bensound.com/bensound-music/bensound-christmasjoy.mp3'
    );

    this.play = true;
  }

  mounted() {}

  partIsCorrect(part) {
    return !part.input || part.text === part.guess;
  }

  playSound(sound) {
    if (sound) {
      var audio = new Audio(sound);
      audio.play();
    }
  }
}
</script>

<style>
.correct,
p {
  background: #7c7;
}
</style>
