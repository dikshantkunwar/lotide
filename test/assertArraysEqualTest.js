const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true for equal arrays", () => {
    assert.strictEqual(assertArraysEqual([1,2,4],[1,2,4]), true);
  });

  it("returns false for unequal arrays", () => {
    assert.strictEqual(assertArraysEqual([1,2,2],[1,2,4]), false);
  });
})