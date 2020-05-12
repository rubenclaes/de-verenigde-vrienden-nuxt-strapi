import { $axios } from '~/utils/api';

/**
 * Load dining days.
 *
 */
export async function loadMenu() {
  try {
    //await new Promise((resolve) => setTimeout(resolve, 10000));
    return await $axios.get(`pages`).then((res) => {
      return JSON.parse(res.data);
    });
  } catch (error) {
    throw error;
  }
}
