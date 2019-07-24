<template>
  <div>
    <nuxt />
  </div>
</template>


<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  namespace,
  Getter
} from 'nuxt-property-decorator';

export default class DefaultC extends Vue {
  mounted() {
    console.log('DDADFDs');
    this.setupMailchimpPopup();
  }

  setupMailchimpPopup() {
    var mailchimpConfig = {
      baseUrl: 'mc.us3.list-manage.com',
      uuid: '3eec687836a96a8b1daf23510',
      lid: '252e420417',
      uniqueMethods: true
    };
    // No edits below this line are required
    var chimpPopupLoader = document.createElement('script');
    chimpPopupLoader.src =
      '//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js';
    chimpPopupLoader.setAttribute(
      'data-dojo-config',
      'usePlainJson: true, isDebug: false'
    );
    var chimpPopup = document.createElement('script');
    chimpPopup.appendChild(
      document.createTextNode(
        'require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +
          mailchimpConfig.baseUrl +
          '", "uuid": "' +
          mailchimpConfig.uuid +
          '", "lid": "' +
          mailchimpConfig.lid +
          '", "uniqueMethods: "' +
          mailchimpConfig.uniqueMethods +
          '"})});'
      )
    );

    chimpPopupLoader.onload = function() {
      document.body.appendChild(chimpPopup);
    };
    document.body.appendChild(chimpPopupLoader);
  }
}
</script>