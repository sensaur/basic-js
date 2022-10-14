const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  let res = []
  for (let i = 0; i < arr.length; i++) {
    // console.log("1=>", arr[i])
    // console.log("res=>", res)
    if (arr[i] === '--double-next') {
      if (!!arr[i + 1]) {
        res.push("*")
        res.push(arr[i + 1])
      } else {
        res.push("*")
      }
    } else if (arr[i] === '--discard-prev') {
      res.pop()
      res.push("*")
    } else if (arr[i] === '--discard-next') {
      res.push("*")
      i++;//
    } else if (arr[i] === '--double-prev') {
      if (res.length && res[res.length-1] !== '*') {
        res.push(res[res.length-1])//
        res.push("*")
      } else {
      }
    } else {
      res.push(arr[i])
    }
  }
  return res.filter(el => el !== "*")
  // return res
}

module.exports = {
  transform
};


// console.log(transform(['--discard-prev', 1, 2, 3]))
// console.log(transform(['--double-prev', 1, 2, 3],))
// console.log(transform([1, 2, 3, '--double-next']))
// console.log(transform([1, 2, 3, '--discard-next']))
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
