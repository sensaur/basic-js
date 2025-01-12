const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let res = [];
  let str = num.toString()

  for (let i = 0; i < str.length; i++) {
    let slicedDigit = str.slice(0, i) + str.slice(i + 1)
    // console.log(slicedDigit)
    res.push(slicedDigit)
  }

  return Math.max(...res)
}

module.exports = {
  deleteDigit
};

// console.log(deleteDigit(152234))
