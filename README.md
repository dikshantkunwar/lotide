# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dikshantkunwar/lotide`

**Require it:**

`const _ = require('@dikshantkunwar/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => 1`

**Test it:**

`npm run test`

Runs the tests from /test folder using mocha and chai

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the array head
* `middle(...)`: returns the middle of an array
* `assertArraysEqual(...)`: returns logical value of equality of two arrays
* `assertObjectsEqual(...)`: returns logical value of equality of two objects (key, value)
* `countOnly(...)`: count the number of keys in an object which are true
* `eqArrays(...)`: checks the equality of two arrays
* `eqObjects(...)`: checks the equality of two objects 
* `findKey(...)`: find key of an object passed that satisfies the callback condition 
* `findKeyByValue(...)`: Returns the object key for the value passed in 
* `map(...)`: Returns a new array which maps the existing array according to the callback's condition
