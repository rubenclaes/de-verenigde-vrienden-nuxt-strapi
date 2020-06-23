/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import delivery from '../../http/requests/auth/deliveryplatform/index.js';

export default {
  createDelivery({ commit }, payload) {
    return new Promise((resolve, reject) => {
      delivery
        .createDelivery(payload)
        .then((response) => {
          console.log('Gelukt');
          resolve(response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
