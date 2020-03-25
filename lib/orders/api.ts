import { $axios } from '~/utils/api';

/**
 * Create an order with a payload.
 *
 */
export async function createOrder(payload) {
  return await $axios.post(`order`, payload);
}
