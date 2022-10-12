const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

let seasons = ['winter', 'spring', 'summer', 'fall', 'winter'];

function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  // console.log(date instanceof Date)
  // console.log(Date.parse(date))
  // console.log(date.getTime() === date.getTime())
  // console.log(date.toLocaleString())
  // console.log(date.getUTCSeconds())
  // if (!Date.parse(date)) throw new Error('Invalid date!')

  // try {
  //   date.getUTCSeconds()
  // } catch {
  //   throw new Error('Invalid date!')
  // }


  // if (Object.prototype.toString.call(date) !== 'object Date') throw new Error('Invalid date!')
  // console.log(Object.prototype.toString.call(date) !== 'object Date')
  // console.log(Object.prototype.toString.call(date))
  let month = date.getUTCMonth();
  return seasons[parseInt((month + 1) / 3)];
}

module.exports = {
  getSeason
};


// console.log(getSeason(new Date(2020, 03, 31)))
