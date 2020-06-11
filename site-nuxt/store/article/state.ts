import { ArticleState, Article } from './types';

/**
 * Article state initializer
 *
 */
export const initState = (): ArticleState => ({
  selected: 1,
  articles: [],
  currentArticle: {} as Article,
  status: {
    loading: false,
    success: false,
    error: false,
  },
});

export default initState;
