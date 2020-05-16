import { $axios } from '../../utils/api';

/**
 * Load dining days.
 *
 */
export async function loadDiningdays() {
  try {
    return await $axios.get(`diningdays`).then((res) => {
      res.data.map((diningday) => {
        diningday.image.url = `https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/${diningday.image.provider_metadata.public_id}${diningday.image.ext}`;

        /* console.log(`Fetched from API:`, { restaurant });
          commit('add', {
            id: restaurant.id,
            ...restaurant
          }); */
        //});
      });
      return res.data;
    });
  } catch (error) {
    throw error;
  }
}

/**
 * Load a dining day.
 *
 */
export async function loadDiningday(id) {
  try {
    return await $axios.get(`diningdays/${id}`).then((res) => {
      res.data.image.url = `https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/${res.data.image.provider_metadata.public_id}${res.data.image.ext}`;

      return res.data;
    });
  } catch (error) {
    throw error;
  }
}
