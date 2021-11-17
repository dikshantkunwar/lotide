// TEST/ASSERTION FUNCTIONS
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
assertArraysEqual(middle(["i", "am", "in", "middle", "here", "guys"]), ["in", "middle"]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle(["one", 2, "chess", "four", 4]), ["chess"]);