/**
 * Type definitions of the Menulink state
 */

import { Status } from '../type';
import { FlexPage } from '../flexpage/types';

// State

/**
 * Menulink interface
 *
 * @export
 * @interface Menulink
 */
export interface MenulinkState {
  mainNavigationLinks: MainNavigationLink[];
  status: Status;
}

// Models

/**
 * MainNavigationLink interface
 *
 * @export
 * @interface MainNavigationLink
 */
export interface MainNavigationLink {
  id: number;
  menu_link_title: string;
  Active: boolean;
  Show_expanded: boolean;
  Description: string;
  Language: string;
  link: FlexPage;
}
