import axios from '../../../axios/index.js';
import store from '../../../../store/store.js';

export default {
  init() {
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        // const { config, response: { status } } = error
        const { config, response } = error;
        const originalRequest = config;

        // if (status === 401) {
        if (response && response.status === 401) {
          if (!isAlreadyFetchingAccessToken) {
            isAlreadyFetchingAccessToken = true;
            store.dispatch('auth/fetchAccessToken').then((access_token) => {
              isAlreadyFetchingAccessToken = false;
              onAccessTokenFetched(access_token);
            });
          }

          const retryOriginalRequest = new Promise((resolve) => {
            addSubscriber((access_token) => {
              originalRequest.headers.Authorization = `Bearer ${access_token}`;
              resolve(axios(originalRequest));
            });
          });
          return retryOriginalRequest;
        }
        return Promise.reject(error);
      }
    );
  },

  createDelivery(createDeliveryData) {
    return axios.post('/retours', {
      user: {
        id: 1,
      },
      retourType: createDeliveryData.retourType,
      customerName: createDeliveryData.customerName,
      language: createDeliveryData.language,
      contactPerson: createDeliveryData.contactPerson,
    });
  },
  registerUser(name, email, pwd) {
    return axios.post('/api/auth/register', {
      displayName: name,
      email,
      password: pwd,
    });
  },
  refreshToken() {
    return axios.post('/api/auth/refresh-token', {
      accessToken: localStorage.getItem('accessToKen'),
    });
  },
  logout() {
    return axios.post('/logout');
  },
};
