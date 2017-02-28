#!/usr/bin/env node

/*
 * Copyright (c) 2016. Taimos GmbH http://www.taimos.de
 */

const argv = require('minimist')(process.argv.slice(2));
const fileName = argv._[0];
const deployStyle = argv.deploy || false;

if (!fileName) {
  console.error('Missing filename');
  process.exit(1);
}

const YAML = require('yamljs');

let params = YAML.load(fileName);

let cliString = '';

for (let key in params) {
  if (params.hasOwnProperty(key)) {
    let value = params[key];
    if (Array.isArray(value)) {
      value = value.join(',');
    }
    if (deployStyle) {
      cliString += `${key}=${value} `;
    } else {
      cliString += `ParameterKey=${key},ParameterValue='${value}' `;
    }
  }
}

console.log(cliString);