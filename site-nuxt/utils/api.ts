import { NuxtAxiosInstance } from '@nuxtjs/axios';

let $axios: NuxtAxiosInstance;

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance;
  $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded');
}

export { $axios };
