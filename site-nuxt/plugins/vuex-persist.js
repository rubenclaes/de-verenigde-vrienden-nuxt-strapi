// ~/plugins/vuex-persist.js
import VuexPersistence from 'vuex-persist';

export default ({ store }) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      storage: window.localStorage, // or window.sessionStorage or localForage instance.
      // Function that passes the state and returns the state with only the objects you want to store.
      reducer: (state) => ({
        cart: state.cart,
        //auth: state.auth,
        // getRidOfThisModule: state.getRidOfThisModule (No one likes it.)
      }),
    }).plugin(store);
  });
};
