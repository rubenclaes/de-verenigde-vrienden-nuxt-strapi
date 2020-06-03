/**
 * Type definitions of the Page state
 */

import { Status } from '../type';

// State

/**
 * PageState interface
 *
 * @export
 * @interface PageState
 */
export interface PageState {
  flexPages: FlexPage[];
  currentFlexPage: FlexPage;
  status: Status;
}

// Models

/**
 * FlexPage class
 *
 * @export
 * @interface FlexPage
 */
export interface FlexPage {
  content: [];
  id: number;
  title: string;
  slug: string;
  active: boolean;
  layout: string;
  meta: [];
}
