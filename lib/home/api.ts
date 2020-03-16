import { $axios } from '~/utils/api';

/**
 * Load dining days.
 *
 */
export async function loadHome() {
  return await $axios.get(`home`).then(res => {
    return res.data;
  });
}

/**
 * Load a dining day.
 *
 */
export async function loadDiningday(id) {
  return await $axios.get(`diningdays/${id}`).then(res => {
    res.data.image.url = `https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/${res.data.image.provider_metadata.public_id}${res.data.image.ext}`;

    return res.data;
  });
}
