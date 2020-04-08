import umeta from '../esm/index.js';

const {fileName, dirName, require} = umeta(import.meta);
const {__filename, __dirname} = require('./index.cjs');

console.assert(__filename.replace(/cjs$/, 'js') === fileName, 'incorrect fileName');
console.assert(__dirname === dirName, 'incorrect dirName');
console.assert(require.resolve('./index.cjs') === __filename, 'incorrect resolver');
