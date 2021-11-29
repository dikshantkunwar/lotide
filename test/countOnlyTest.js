const countOnly = require('../countOnly');
const assert = require('chai').assert;
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {

  it("should return 1 when looking for Jason in the firstname list", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  it("should return undefined when name is not in the list", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  it("should return 2 when name is twice in the list", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  it("should return undefined when name is in the array but is false", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});