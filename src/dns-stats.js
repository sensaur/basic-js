const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = domains.map(el => el.split(".").reverse())
  let res = {}
  for (let i = 0; i < arr.length; i++) {
    let key = ''
    for (let j = 0; j < arr[i].length; j++) {
      key = key + "." + arr[i][j]
      res.hasOwnProperty(key) ? res[key]++ : res[key] = 1
      // console.log(arr[i][j])
    }
  }
  return res
}

module.exports = {
  getDNSStats
};

// console.log(getDNSStats([
//   'code.yandex.ru',
//   'music.yandex.ru',
//   'yandex.ru'
// ]))
