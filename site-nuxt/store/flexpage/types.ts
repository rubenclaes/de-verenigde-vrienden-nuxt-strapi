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
  homePage: HomePage;
  flexPages: FlexPage[];
  mainNavigation: MainNavigation;
  status: Status;
}

// Models

/**
 * HomePage class
 *
 * @export
 * @class HomePage
 */
export class HomePage {
  public harmonieData = [];
  public activiteitenData = [];
  public jeugdorkestData = [];
  public adresData = [];
  public recentNieuwsData = [];

  constructor(
    harmonieData: [],
    activiteitenData: [],
    jeugdorkestData: [],
    adresData: [],
    recentNieuwsData: []
  ) {
    this.harmonieData = harmonieData;
    this.activiteitenData = activiteitenData;
    this.jeugdorkestData = jeugdorkestData;
    this.adresData = adresData;
    this.recentNieuwsData = recentNieuwsData;
  }
}

/**
 * MainNavigation class
 *
 * @export
 * @class MainNavigation
 */
export class MainNavigation {
  public links = [];

  constructor(links: []) {
    this.links = links;
  }
}

/**
 * FlexPage class
 *
 * @export
 * @class FlexPage
 */
export class FlexPage {
  public content = [];
  public id: number;
  public title: string;
  public slug: string;

  constructor(content: [], id: number, title: string, slug: string) {
    this.content = content;
    this.id = id;
    this.title = title;
    this.slug = slug;
  }
}
