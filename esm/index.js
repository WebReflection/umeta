import {createRequire} from 'module';
import {fileURLToPath} from 'url';
import path from 'path';

const {dirname} = path;

export default ({url}) => {
  const fileName = fileURLToPath(url);
  const dirName = dirname(fileName);
  return {fileName, dirName, require: createRequire(url)};
};
