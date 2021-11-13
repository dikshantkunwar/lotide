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

const without = (source, itemsToRemove) => {
  let cleanArray = source.map( x => {
    if (!itemsToRemove.includes(x)){ return x;}
  });
  console.log(cleanArray.filter( item => item));
}

const words = ["hello", "world", "lighthouse"];
without(words,["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function

assertArraysEqual(words,["hello", "world", "lighthouse"])