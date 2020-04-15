'use strict';
const {createRequire} = require('module');
const {fileURLToPath} = require('url');
const path = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('path'));

const {dirname} = path;

module.exports = ({url}) => {
  const fileName = fileURLToPath(url);
  const dirName = dirname(fileName);
  return {fileName, dirName, require: createRequire(url)};
};
