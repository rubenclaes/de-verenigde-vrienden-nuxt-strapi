import axios from 'axios';

//import { Restaurant } from 'types/';

/**
 * Load Dining days.
 *
 */
export async function loadDiningdays() {
  return await axios
    .get('https://strapi-de-verenigde-vrienden.herokuapp.com/diningdays')
    .then(res => {
      res.data.map(diningday => {
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
}

/**
 * Load a dining day.
 *
 */
export async function loadDiningday(id) {
  return await axios
    .get(`https://strapi-de-verenigde-vrienden.herokuapp.com/diningdays/${id}`)
    .then(res => {
      res.data.image.url = `https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/${res.data.image.provider_metadata.public_id}${res.data.image.ext}`;

      return res.data;
    });
}
