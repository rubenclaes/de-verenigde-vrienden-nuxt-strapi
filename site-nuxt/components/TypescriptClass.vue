<template>
  <div>
    <p class="some-class">{{ val }}</p>
    <p class="another-class">{{ text }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
//import AnotherClass from '@/lib/another.class';
//import SomeClass from '/lib/some.class';

@Component({})
export default class TypescriptClass extends Vue {
  /* public val: number = 0;
  public text: string = '';

  public mounted() {
    const some = new SomeClass();
    some.value = 42;
    const anot = new AnotherClass();
    this.val = some.moarValue(); // should return 42+2=44 instead of 4+2=6
    this.text = anot.moarText();
  } */
}
</script>