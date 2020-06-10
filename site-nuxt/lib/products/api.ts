import { $axios } from '../../utils/api';

/**
 * Load products.
 *
 */
export async function loadProducts() {
  try {
    //await new Promise((resolve) => setTimeout(resolve, 10000));
    return await $axios.get(`products`).then((res) => {
      return res.data;
    });
  } catch (error) {
    throw error;
  }
}

/**
 * Load a product with name
 *
 */
export async function loadProductByName(name: string) {
  try {
    return await $axios.get(`products?name=${name}`).then((res) => {
      return res.data[0];
    });
  } catch (error) {
    throw error;
  }
}
