'use strict';
const {createRequire} = require('module');
const {fileURLToPath} = require('url');
const {dirname} = require('path');

module.exports = ({url}) => {
  const fileName = fileURLToPath(url);
  return {
    fileName,
    dirName: dirname(fileName),
    require: createRequire(url)
  };
};
