const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey", () => {

  it("returns noma when callback function checks for 2 stars", () => {
    assert.strictEqual(findKey({'abc': {stars: 1}, 'noma': {stars: 2}, 'ora': {stars: 3}}, x => x.stars === 2), "noma");
  });

  it("returns ora when callback function checks for greater than 2 stars", () => {
    assert.strictEqual(findKey({'abc': {stars: 1}, 'noma': {stars: 2}, 'ora': {stars: 3}}, x => x.stars > 2), "ora");
  });

  it("returns undefined when callback function checks for greater than 5 stars", () => {
    assert.strictEqual(findKey({'abc': {stars: 1}, 'noma': {stars: 2}, 'ora': {stars: 3}}, x => x.stars > 5), undefined);
  });
})