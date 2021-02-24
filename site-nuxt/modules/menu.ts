import fs from 'fs-extra';
import axios from 'axios';

import { Module } from '@nuxt/types';

interface Options {
  namespace: string;
  enable: boolean;
}

const menu: Module<Options> = async function (moduleOptions) {
  // expose the namespace / set a default
  if (!moduleOptions.namespace) moduleOptions.namespace = 'menu';

  const { namespace } = moduleOptions;
  console.info(`Fetching menu ${process.env.API_URL}/main-navigation`);

  const loadMenu = async () => {
    try {
      //await new Promise((resolve) => setTimeout(resolve, 10000));
      return await axios
        .get(`${process.env.API_URL}/main-navigation`)
        .then((res) => {
          //console.info(res.data)
          return res.data.links.filter(link => link.active);;
        })
    } catch (error) {
      console.error(`Fetching the menu failed. ${error}`)
      throw error;
    }
  };

  const writeData = (path, data) => {
    return new Promise((resolve, reject) => {
      try {
        fs.ensureFileSync(path);
        fs.writeJson(path, data, resolve(`${path} Write Successful`));
      } catch (e) {
        console.error(`${path} Write Failed. ${e}`);
        reject(`${path} Write Failed. ${e}`);
      }
    });
  };

  // Add hook for build
  this.nuxt.hook('build:before', async (builder) => {
    // Clean data directory
    fs.emptyDir('static/data');

    // Empty array to fill with promises
    let fetcher: Promise<any>[] = [];

    const menu = await loadMenu().then((menu) => {
      return menu;
    });

    fetcher.push(writeData('static/data/index.json', { content: menu }));

    // Finish when all of them are done
    return Promise.all(fetcher)
      .then(() => {
        console.log('JSON Build Complete!');
      })
      .catch((err) => {
        console.error(err);
      });
  });
};

export default menu;
