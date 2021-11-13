const assertEqual = require('./assertEqual');

const findKeyByValue = (obj,value) => {
  let objValues = Object.keys(obj);
  for (const val of objValues) {
    if (obj[val] === value) {
      return val;
    }
  }
};

module.exports = findKeyByValue;

/* Test Assertions */
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);