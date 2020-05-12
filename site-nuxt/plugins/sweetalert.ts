import { Plugin } from '@nuxt/types';
import Swal from 'sweetalert2';

declare module 'vue/types/vue' {
  interface Vue {
    $swal(): void;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $swal(): void;
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $swal(): void;
  }
}

const sweetalert: Plugin = (context, inject) => {
  inject(
    'swal',
    Swal.mixin({
      buttonsStyling: false,
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },

      showCancelButton: false
    })
  );
};

export default sweetalert;
