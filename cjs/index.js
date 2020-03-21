'use strict';
const path = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('path'));

module.exports = ({url}) => {
  const fileName = url.replace(/^[a-z]+:\/\//, '');
  const dirName = path.dirname(fileName);
  return {fileName, dirName};
};
