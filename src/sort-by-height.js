const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const ones = arr.filter(el => el === -1)
  const noOnes = arr.filter(el => el !== -1).sort((a,b) => a-b)
  return arr.map(el => {
    return el !== -1 ? noOnes.shift() : -1
  })
}

module.exports = {
  sortByHeight
};


// console.log(sortByHeight([4, 2, 9, 11, 2, 16]))
