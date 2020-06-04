import {createRequire} from 'module';
import {fileURLToPath} from 'url';
import {dirname} from 'path';

export default ({url}) => {
  const fileName = fileURLToPath(url);
  return {
    fileName,
    dirName: dirname(fileName),
    require: createRequire(url)
  };
};
