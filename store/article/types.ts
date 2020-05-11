import { Status } from '../type';

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
  name: string;
  icon: string;
  description: string;
  image: {
    id: number;
    name: string;
    hash: string;
    sha256: string;
    ext: string;
    mime: string;
    size: string;
    url: string;
    provider: string;
    public_id: string;
    created_at: Date;
    updated_at: Date;
    provider_metadata: { public_id: string; resource_type: string };
  };
  slug: string;
  Categories: { Tag1: string; Tag2: string; Tag3: string };
  created_at: Date;
  updated_at: Date;
}
