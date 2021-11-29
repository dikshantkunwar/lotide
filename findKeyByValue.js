const findKeyByValue = (obj,value) => {
  let objValues = Object.keys(obj);
  for (const val of objValues) {
    if (obj[val] === value) {
      return val;
    }
  }
};

module.exports = findKeyByValue;