import { $axios } from '~/utils/api';

/**
 * Load news.
 *
 */
export async function loadArticles() {
  return await $axios.get(`restaurants`).then(res => {
    res.data.map(article => {
      article.image.url = `https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/${article.image.public_id}${article.image.ext}`;
    });
    return res.data;
  });
}

/**
 * Load an article.
 *
 */
export async function loadArticle(id) {
  return await $axios.get(`restaurants/${id}`).then(res => {
    res.data.image.url = `https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/${res.data.image.public_id}${res.data.image.ext}`;
    return res.data;
  });
}
