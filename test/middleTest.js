const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it("returns [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });

  it("returns empty array [] for [1,2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("returns ['middle'] for ['front', 'side', 'middle', 'side', 'end']", () => {
    assert.deepEqual(middle(['front', 'side', 'middle', 'side', 'end']), ['middle']);
  });
});