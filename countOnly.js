const assertEqual = require('./assertEqual');

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

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
