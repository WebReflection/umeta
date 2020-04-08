const umeta = require('../cjs');

const {fileName, dirName, require: $require} = umeta({url: 'file://' + __filename});

console.assert(__filename === fileName, 'incorrect fileName');
console.assert(__dirname === dirName, 'incorrect dirName');
console.assert($require.resolve('./index.cjs') === __filename, 'incorrect resolver');

module.exports = {__filename, __dirname};
