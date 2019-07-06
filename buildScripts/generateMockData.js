/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
*/

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import fs from 'fs';
import chalk from 'chalk';
import faker from 'faker';
import { schema } from './mockDataSchema';

jsf.extend('faker', () => faker);

const outputFile = './src/api/db.json';

fs.writeFile(outputFile, JSON.stringify(jsf(schema)), (err) => {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green(`Mock data generated here: ${outputFile}`));
  }
});
