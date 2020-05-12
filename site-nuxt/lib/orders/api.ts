import { $axios } from '~/utils/api';

/**
 * Create an order with a payload.
 *
 */
export async function createOrder(payload, token) {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    return await $axios.post(`orders`, payload, config).then((res) => {
      return res.data;
    });
  } catch (error) {
    throw error;
  }
}
