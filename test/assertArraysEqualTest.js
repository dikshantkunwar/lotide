const assertArraysEqual = require('../assertArraysEqual');

//Test
assertArraysEqual([1,2,4],[1,2,4]); // => pass
assertArraysEqual([1,2,2],[1,2,4]); // => fail