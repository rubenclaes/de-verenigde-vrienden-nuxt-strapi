<template>
  <button
    type="button"
    class="navbar-toggler"
    data-toggle="collapse"
    @click="handleClick"
    :data-target="`#${target}`"
    :aria-controls="target"
    :aria-expanded="expanded"
    aria-label="Toggle navigation"
  >
    <span></span>
    <span></span>
  </button>
</template>
<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component
export default class CloseButton extends Vue {
  @Prop({ type: [String, Number] })
  target;
  @Prop({ type: Boolean })
  expanded;
  handleClick(evt) {
    this.$emit('click', evt);
  }
}
</script>
<style>
</style>
