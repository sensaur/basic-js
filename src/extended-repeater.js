const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let text = String(str)
  let res = []
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = String(options.addition) || '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || "|";
  console.log("text=>", text)
  console.log("addition=>", addition)
  console.log("additionSeparator=>", additionSeparator)
  let strToRepeat = text + ((String(options.addition) !== 'undefined' ? addition + additionSeparator : '')).repeat(additionRepeatTimes);
  if (String(options.addition) !== 'undefined') {
    strToRepeat = strToRepeat.slice(0, strToRepeat.length - additionSeparator.length);
  }
  for (let i = 0; i < repeatTimes; i++) {
    res.push(strToRepeat)
  }
  return res.join(separator)
}

module.exports = {
  repeater
};
//
// console.log(repeater('STRING', {
//   repeatTimes: 3, separator: '**',
//   addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00'
// }) === 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS')
// console.log('STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS')
//
// //
// console.log(repeater('la', { repeatTimes: 3 }))
// console.log('la+la+la')

// console.log(repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }))
// console.log('la+sla+sla+')
console.log(repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' }))
console.log('truefalse!!!false??? truefalse!!!false??? truefalse!!!false')
