import axios from 'axios';

//import { Restaurant } from 'types/';

/**
 * Load news.
 *
 */
export async function loadNews() {
  return await axios
    .get('https://strapi-de-verenigde-vrienden.herokuapp.com/restaurants')
    .then(res => {
      res.data.map(article => {
        article.image.url = `https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/${article.image.public_id}${article.image.ext}`;

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
 * Load an article.
 *
 */
export async function loadArticle(id) {
  return await axios
    .get(`https://strapi-de-verenigde-vrienden.herokuapp.com/restaurants/${id}`)
    .then(res => {
      res.data.image.url = `https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/${res.data.image.public_id}${res.data.image.ext}`;

      return res.data;
    });
}
