const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

/* Test Assertions
const results1 = map(words, word => word[0]);
assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word[word.length - 1]);
assertArraysEqual(results2,[ 'd', 'l', 'o', 'r', 'm' ]);

const results3 = map(words, word => word);
assertArraysEqual(results3,words)
*/
