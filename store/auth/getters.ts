import { GetterTree } from 'vuex/types';

import { RootState } from '../type';
import { AuthState } from './types';

/**
 * Item getters
 */
export const getters: GetterTree<AuthState, RootState> = {
  token: state => {
    if (!state.token) return 0;

    return state.token;
  },
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status
};

export default getters;
