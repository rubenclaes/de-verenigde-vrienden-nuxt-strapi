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
      password: password,
    })
      .then((response) => {
        //console.log(response);
        const token = response.data.jwt;
        const user = response.data.user;

        this.$axios.setToken(token, 'Bearer');

        /*   const expiryTime = new Date(new Date().getTime() + expiresIn * 1000);
        cookies.set('x-access-token', token, { expires: expiryTime }); */

        //console.log('User profile', response.data.user);
        //console.log('User token', response.data.jwt);

        //localStorage.setItem('token', token);
        //$axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        commit('authSuccess', { token, user });
        console.info('logged in!');
      })
      .catch((err) => {
        commit('authError');
        console.error(`Trying to login failed: ${err}`);
        localStorage.removeItem('token');
      });
  },

  async refreshToken({ dispatch }) {
    //const {token, expiresIn} = await this.$axios.$post('refresh-token');
    // dispatch('setToken', {token, expiresIn});
  },

  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit('logout');
      this.$axios.setToken(false);
      // commit('REMOVE_TOKEN');
      //localStorage.removeItem('token');
      //delete $axios.defaults.headers.common['Authorization'];
      resolve();
    });
  },

  register({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request');
      $axios({
        url: 'http://localhost:3000/register',
        data: user,
        method: 'POST',
      })
        .then((resp) => {
          const token = resp.data.token;
          const user = resp.data.user;
          localStorage.setItem('token', token);
          $axios.defaults.headers.common['Authorization'] = token;
          commit('auth_success', token, user);
          resolve(resp);
        })
        .catch((err) => {
          commit('auth_error', err);
          localStorage.removeItem('token');
          reject(err);
        });
    });
  },
};

export default actions;
