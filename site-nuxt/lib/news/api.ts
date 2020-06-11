import { $axios } from '../../utils/api';

const cloudinary =
  'https://res.cloudinary.com/deverenigdevrienden/image/upload/c_scale,q_auto,w_490/';

/**
 * Load articles.
 *
 */
export async function loadArticles() {
  try {
    // new Promise((resolve) => setTimeout(resolve, 10000));
    return await $axios.get(`blog-posts`).then((res) => {
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
    return await $axios.get(`blog-posts/${id}`).then((res) => {
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
    return await $axios.get(`blog-posts?slug=${slug}`).then((res) => {
      return res.data[0];
    });
  } catch (error) {
    throw error;
  }
}
