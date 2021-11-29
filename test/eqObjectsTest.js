const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("returns true when both objects have identical keys with identical values", () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(obj1,obj2), true);
  });

  it("returns false when both objects do not have identical keys with identical values", () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(obj1,obj2), false);
  });

  it("returns true when both objects have identical keys with identical values", () => {
    const obj1 = { c: "1", d: ["2", 3] };
    const obj2 = { d: ["2", 3], c: "1" };
    assert.strictEqual(eqObjects(obj1,obj2), true);
  });
});