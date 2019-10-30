import { ActionContext, ActionTree } from 'vuex/types';
import { DiningDayState } from './types';
import { RootState } from '../type';

import Strapi from 'strapi-sdk-javascript/build/main';
const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

/**
 * Action context specific to DiningDays module
 */
interface DiningDayActionContext
  extends ActionContext<DiningDayState, RootState> {}

/**
 * DiningDay actions
 */
export const actions: ActionTree<DiningDayState, RootState> = {
  /**
   * Fetch DiningDays data en put them in the state
   */
  async fetchData({ commit }: DiningDayActionContext) {
    const response = await strapi
      .request('post', '/graphql', {
        data: {
          query: `query GetDiningDays {
            diningdays( sort: "created_at:desc", where: {active: true}) {
              id
              name
              active
          
              description
              image {
                url
              }
              place {
                street
                number
                bus
                town
                postal_code
                id
              }
              dishes {
                name
                description
                image {
                  url
                }
                price
                id
              }
          
              created_at
            }
          }
          `
        }
      })
      .then(response => {
        commit('clear');
        console.info('dispatching data in state');
        response.data.diningdays.forEach(diningDay => {
          console.log(`Fetched from graphql:`, { diningDay });
          //DiningDay.image.url = `${apiUrl}${DiningDay.image.url}`;
          commit('add', {
            id: diningDay.id,
            ...diningDay
          });
        });
      })
      .catch(err => {
        console.error('error', err);
      });

    /* const response = strapi
      .request('post', '/graphql', {
        data: {
          query: `query {
            DiningDays {
              id
              name
              description
              image {
                url
              }
            }
          }
          `
        }
      })
      .then(
        response => {
          const payLoad = response && response.data;
          payLoad.DiningDays.forEach(DiningDay => {
            DiningDay.image.url = `${apiUrl}${DiningDay.image.url}`;
            commit('add', {
              id: DiningDay.id,
              ...DiningDay
            });
          });
        },
        error => {
          console.log(error);
          //commit('profileError');
        }
      ); */
  },
  /**
   * Fetching a DiningDay with ID and adding it to currentDiningDay state.
   */
  async fetchDiningDay({ commit }: DiningDayActionContext, id) {
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
          DiningDay(id: "${id}") {
              id
              name
              description
              image {
                url
              }
              created_at
            }
          }
          `
      }
    });

    const DiningDay = response.data.DiningDay;
    //DiningDay.image.url = `${apiUrl}${DiningDay.image.url}`;
    console.log(DiningDay);
    commit('setCurrentDiningDay', {
      id: DiningDay.id,
      ...DiningDay
    });
  }
};

export default actions;
