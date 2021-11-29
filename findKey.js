const findKey = (obj, callback) => {
  let objValues = Object.keys(obj);
  /* loop through object values and check if the callback satisfies the condition */
  for (const val of objValues) {
    if (callback(obj[val])) {
      return val;
    }
  }
};

module.exports = findKey;