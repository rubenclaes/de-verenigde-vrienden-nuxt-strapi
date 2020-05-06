import { Middleware } from '@nuxt/types';

const authenticated: Middleware = ({ store, redirect }) => {
  // If the user is not authenticated
  if (!store.getters['auth/isLoggedIn']) {
    return redirect('/');
  }
};

export default authenticated;
