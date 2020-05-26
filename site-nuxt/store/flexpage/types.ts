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
  currentFlexPage: FlexPage;
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
