const umeta = require('../cjs');

const {fileName, dirName} = umeta({url: `file://${__filename}`});

console.assert(__filename === fileName, 'incorrect fileName');
console.assert(__dirname === dirName, 'incorrect fileName');
