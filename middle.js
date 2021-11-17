// ACTUAL FUNCTION
const middle = (array) => {
  // odd and even check
  const arrlen = array.length;

  if (arrlen <= 2) {
    return [];
  } else {

    if (arrlen % 2 === 0) {
      let evenpos = [];
      evenpos.push(array[arrlen / 2 - 1]);
      evenpos.push(array[arrlen / 2 ]);
      return evenpos;
    } else {
      return [ array[Math.floor(arrlen / 2)] ];
    }
  }
};

module.exports = middle;
