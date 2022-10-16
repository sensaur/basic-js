const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = [...n.toString()]
  let res = arr.reduce((acc, el) => acc + Number(el), 0)
  // console.log(res)
  return res.toString().length === 1 ? res : getSumOfDigits(res)
  // return res
}

module.exports = {
  getSumOfDigits
};

// console.log(getSumOfDigits(100008))
// console.log(getSumOfDigits(9100098))
