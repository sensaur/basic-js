const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  console.log(sampleActivity)
  console.log(typeof sampleActivity)
  console.log(Number(sampleActivity))
  console.log(isNaN(Number(sampleActivity)))
  if (typeof sampleActivity !== "string" || typeof Number(sampleActivity) !== 'number' || isNaN(Number(sampleActivity))) return false
  if (Number(sampleActivity) > 15 || Number(sampleActivity) < 0) return false
  // if (sampleActivity < 0) return false
  let res = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity))/(0.693 / HALF_LIFE_PERIOD))
  return res === Infinity ? false : res
}

module.exports = {
  dateSample
};

console.log(dateSample(''))
