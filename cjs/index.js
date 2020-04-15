'use strict';
const {createRequire} = require('module');
const path = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('path'));
const {fileURLToPath} = require('url');

module.exports = ({url}) => {
  const fileName = fileURLToPath(url);
  const dirName = path.dirname(fileName);
  return {fileName, dirName, require: createRequire(url)};
};
