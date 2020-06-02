import { $axios } from '../../utils/api';

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

/**
 * Load an order with idempotencyKey.
 *
 */
export async function loadOrder(idempotencyKey: string | string[]) {
  try {
    return await $axios
      .get(`orders/?idempotencyKey=${idempotencyKey}`)
      .then((res) => {
        return res.data[0];
      });
  } catch (error) {
    throw error;
  }
}
