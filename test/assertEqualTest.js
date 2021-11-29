const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns true for two equal values", () => {
    assert.strictEqual(assertEqual(1,1), true);
  });

  it("returns false for two equal values", () => {
    assert.strictEqual(assertEqual(1,2), false);
  });

  it("returns true for two equal string values", () => {
    assert.strictEqual(assertEqual("Lighthouse", "Lighthouse"), true);
  });

  it("returns false for two unequal string values", () => {
    assert.strictEqual(assertEqual("Lighthouse", "Bootcamp"), false);
  });
})
// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
