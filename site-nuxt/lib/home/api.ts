import { $axios } from '~/utils/api';

/**
 * Load dining days.
 *
 */
export async function loadHome() {
  try {
    //await new Promise((resolve) => setTimeout(resolve, 10000));
    return await $axios.get(`home`).then((res) => {
      return res.data;
    });
  } catch (error) {
    throw error;
  }
}
