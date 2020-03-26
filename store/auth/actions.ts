import { ActionContext, ActionTree } from 'vuex/types';
import { RootState } from '../type';

import { AuthState } from './types';
import { login } from '../../lib/auth/local/api';

/**
 * Action context specific to Auth module
 */
interface AuthActionContext extends ActionContext<AuthState, RootState> {}

/**
 * Cart actions
 */
export const actions: ActionTree<AuthState, RootState> = {
  async login({ commit, state }, { identifier, password }) {
    commit('authRequest');

    await login({
      identifier: identifier,
      password: password
    })
      .then(resp => {
        const token = resp.data.jwt;
        const user = resp.data.user;

        console.log(token);
        //localStorage.setItem('token', token);
        //axios.defaults.headers.common['Authorization'] = token;
        commit('authSuccess', { token, user });
      })
      .catch(err => {
        commit('authError');
        console.error(err);
        //localStorage.removeItem('token');
      });
  },

  logout({ commit }) {
    /*  return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
    }) */
  }
};

export default actions;
