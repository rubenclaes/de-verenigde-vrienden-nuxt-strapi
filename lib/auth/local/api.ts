import { $axios } from '~/utils/api';

/**
 * Login to Strapi and get the JWT token + User.
 *
 */
export async function login(payload) {
  return await $axios.post(`auth/local`, payload);
}
