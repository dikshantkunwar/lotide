const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = (object1, object2) => {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const item of Object.keys(object1)) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      return eqArrays(object1[item], object2[item]);
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;



