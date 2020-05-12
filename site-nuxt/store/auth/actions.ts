import { ActionContext, ActionTree } from 'vuex/types';
import { RootState } from '../type';

import { AuthState } from './types';
import { login } from '../../lib/auth/local/api';

import { $axios } from '~/utils/api';

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
      .then(response => {
        //console.log(response);
        const token = response.data.jwt;
        const user = response.data.user;

        //console.log('User profile', response.data.user);
        //console.log('User token', response.data.jwt);

        //localStorage.setItem('token', token);
        //$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        commit('authSuccess', { token, user });
      })
      .catch(err => {
        commit('authError');
        console.error(`Trying to login failed: ${err}`);
        localStorage.removeItem('token');
      });
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout');
      localStorage.removeItem('token');
      delete $axios.defaults.headers.common['Authorization'];
      resolve();
    });
  },

  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request');
      $axios({
        url: 'http://localhost:3000/register',
        data: user,
        method: 'POST'
      })
        .then(resp => {
          const token = resp.data.token;
          const user = resp.data.user;
          localStorage.setItem('token', token);
          $axios.defaults.headers.common['Authorization'] = token;
          commit('auth_success', token, user);
          resolve(resp);
        })
        .catch(err => {
          commit('auth_error', err);
          localStorage.removeItem('token');
          reject(err);
        });
    });
  }
};

export default actions;