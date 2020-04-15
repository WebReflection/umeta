import {createRequire} from 'module';
import path from 'path';
import {fileURLToPath} from 'url';

export default ({url}) => {
  const fileName = fileURLToPath(url);
  const dirName = path.dirname(fileName);
  return {fileName, dirName, require: createRequire(url)};
};
