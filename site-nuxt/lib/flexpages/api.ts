import { $axios } from '../../utils/api';

/**
 * Load flexpages.
 *
 */
export async function loadFlexPage() {
  try {
    //await new Promise((resolve) => setTimeout(resolve, 10000));
    return await $axios.get(`flex-pages`).then((res) => {
      return res.data;
    });
  } catch (error) {
    throw error;
  }
}

/**
 * Load an flexpage with a Slug
 *
 */
export async function loadFlexPageBySlug(slug: string) {
  try {
    return await $axios
      .get(`flex-pages`, {
        params: {
          slug: slug,
        },
      })
      .then((res) => {
        return res.data[0];
      });
  } catch (error) {
    throw error;
  }
}
