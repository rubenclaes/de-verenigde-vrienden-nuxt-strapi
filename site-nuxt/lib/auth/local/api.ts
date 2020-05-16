import { $axios } from '../../../utils/api';

/**
 * Login to Strapi and get the JWT token + User.
 *
 */
export async function login(payload) {
  try {
    return await $axios.post(`auth/local`, payload);
  } catch (error) {
    throw error;
  }
}
