import { loadMenu } from 'lib/menu/api';
import fs from 'fs-extra';
import { Module } from '@nuxt/types';

const optionName = '<%= menu %>';

interface Options {
  a: boolean;
  b: number;
  c: string;
}

const menu: Module<Options> = function (moduleOptions) {
  const options = Object.assign(
    {},
    this.options[optionName],
    moduleOptions || {}
  );

  // expose the namespace / set a default
  if (!options.namespace) options.namespace = 'menu';
  const { namespace } = options;

  const writeData = (path: string, data: JSON) => {
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
    let fetcher;

    const menu = await loadMenu();

    // One of these for every top level page, a loop for dynamic nested pages
    fetcher.push(writeData('static/data/index.json', menu));

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

// REQUIRED if publishing the module as npm package
export const meta = require('./package.json');
