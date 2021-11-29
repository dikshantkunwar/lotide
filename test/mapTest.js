const map = require('../map');
const assert = require('chai').assert;

const words = ["ground", "control", "to", "major", "tom"];

describe("#map", () => {
  it("should return first letters of the words when callback is defined", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("should return last letters of the words when callback is defined", () => {
    assert.deepEqual(map(words, word => word[word.length - 1]), [ 'd', 'l', 'o', 'r', 'm' ]);
  });

})