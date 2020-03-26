import { MutationTree } from 'vuex';
import { AuthState, User } from './types';

/**
 * Cart mutations
 */
export const mutations: MutationTree<AuthState> = {
  authRequest(state) {
    state.status = 'loading';
  },

  authSuccess(state, { token, user }) {
    state.status = 'success';
    state.token = token;
    state.user = user;
  },

  authError(state) {
    state.status = 'error';
  },

  logout(state) {
    state.status = '';
    state.token = '';
  }
};

export default mutations;
