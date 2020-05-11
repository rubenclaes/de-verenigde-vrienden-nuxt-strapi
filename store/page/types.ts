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
  status: Status;
}

// Models

/**
 * HomePage interface
 *
 * @export
 * @interface HomePage
 */
export class HomePage {
  public harmonieData = [];
  public activiteitenData = [];
  public jeugdorkestData = [];
  public adresData = [];

  constructor(harmonieData, activiteitenData, jeugdorkestData, adresData) {
    console.info('joepie');
    console.log(harmonieData);
    this.harmonieData = harmonieData;
    this.activiteitenData = activiteitenData;
    this.jeugdorkestData = jeugdorkestData;
    this.adresData = adresData;
  }
}
