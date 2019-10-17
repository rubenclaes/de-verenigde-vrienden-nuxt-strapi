declare function require(moduleName: string): any;

if (process.env.NODE_ENV !== 'production') {
  const dotenv: any = require('dotenv');

  dotenv.config();
}

export const APP_ID = process.env.APP_ID;
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const IS_DEV = process.env.NODE_ENV !== 'production';
