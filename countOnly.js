const countOnly = (allItems, itemsToCount) => {

  let results = {};
  let count;
  for (const item in itemsToCount) {
    if (itemsToCount[item]) {
      count = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (item === allItems[i]) {
          count++;
        }
      }
      if (count === 0) {
        results[item] = undefined;
      } else {
        results[item] = count;
      }
    }
  }
  return results;
};

module.exports = countOnly;