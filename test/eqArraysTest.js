const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", ()=>{
  it("returns true when two arrays are equal", () => {
    assert.strictEqual(eqArrays([1,2,3],[1,2,3]), true);
  });

  it("returns false when two arrays are unequal", () => {
    assert.strictEqual(eqArrays([1,2,3,4],[1,2,3]), false);
  });
})