import path from 'path';

export default ({url}) => {
  const fileName = url.replace(/^[a-z]+:\/\//, '');
  const dirName = path.dirname(fileName);
  return {fileName, dirName};
};
