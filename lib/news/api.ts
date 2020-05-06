import { $axios } from '~/utils/api';

const cloudinary =
  'https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/';

/**
 * Load articles.
 *
 */
export async function loadArticles() {
  try {
    return await $axios.get(`restaurants`).then((res) => {
      res.data.map((article) => {
        article.image.url = `${cloudinary}${article.image.public_id}${article.image.ext}`;
      });
      return res.data;
    });
  } catch (error) {
    throw error;
  }
}

/**
 * Load an article with id.
 *
 */
export async function loadArticle(id: number) {
  try {
    return await $axios.get(`restaurants/${id}`).then((res) => {
      res.data.image.url = `${cloudinary}/${res.data.image.public_id}${res.data.image.ext}`;
      return res.data[0];
    });
  } catch (error) {
    throw error;
  }
}

/**
 * Load an article with Slug
 *
 */
export async function loadArticleBySlug(slug: string) {
  try {
    return await $axios.get(`restaurants?slug=${slug}`).then((res) => {
      res.data[0].image.url = `${cloudinary}${res.data[0].image.public_id}${res.data[0].image.ext}`;
      return res.data[0];
    });
  } catch (error) {
    throw error;
  }
}
