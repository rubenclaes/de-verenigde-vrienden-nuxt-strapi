import { $axios } from '~/utils/api';

/**
 * Create an order with a payload.
 *
 */
export async function fetchPaymentIntent(paymentIntent, token: String) {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    return await $axios.get(`payment-intents/${paymentIntent}/status`, config);
  } catch (error) {
    throw error;
  }
}
