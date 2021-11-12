// TEST/ASSERTION FUNCTIONS
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log("😀 😀 Assertion Passed: " + arr1 + " === " + arr2);
  } else {
    console.log("🥵 🥵 Assertion Failed: " + arr1 + " !== " + arr2);
  }
};

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

//TEST CODE
assertArraysEqual(middle(["i", "am", "in", "middle", "here", "guys"]), ["in", "middle"]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle(["one", 2, "chess", "four", 4]), ["chess"]);

