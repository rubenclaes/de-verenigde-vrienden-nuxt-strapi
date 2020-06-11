import { Status, Image, User } from '../type';

/**
 * Type definitions of the Article state
 */

// State

/**
 * ArticleState interface
 *
 * @export
 * @interface ArticleState
 */
export interface ArticleState {
  selected: number;
  articles: Article[];
  currentArticle: Article;
  status: Status;
}

// Models

/**
 * An article item
 *
 * @export
 * @interface Article
 */
export interface Article {
  id: number;
  title: string;
  slug: string;
  author: User;
  description: string;
  content: [];
  header: {
    id: number;
    title: string;
    lead: string;
    image: Image;
  };
  meta: [];
  Tags: [];
  created_at: Date;
  updated_at: Date;
}
