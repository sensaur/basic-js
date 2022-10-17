const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }
    let messageArr = message.toUpperCase().split('');
    // console.log(messageArr)
    // console.log(this.CODE_A)
    let keyArr = key.toUpperCase().split('').map(v => v.charCodeAt(0) - 65);
    let keyIndex = 0;
    let res = [];
    // console.log(keyArr)
    for (let i = 0; i < messageArr.length; i++) {
      if (messageArr[i].toUpperCase() !== messageArr[i].toLowerCase()) {
        res.push(String.fromCharCode(65 + (messageArr[i].charCodeAt(0) - 65 + keyArr[keyIndex % keyArr.length]) % 26));
        // console.log("messageArr[i] =>>", messageArr[i])
        // console.log("messageArr[i].charCodeAt(0) =>>", messageArr[i].charCodeAt(0))
        keyIndex++;
      } else {
        res.push(messageArr[i]);
      }
    }
    return this.type ? res.join('') : res.reverse().join('');
  }
  decrypt(message, key) {
    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }

    let messageArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('').map(v => v.charCodeAt(0) - 65);
    let keyIndex = 0;
    let res = [];

    for (let i = 0; i < messageArr.length; i++) {
      if (messageArr[i].toUpperCase() !== messageArr[i].toLowerCase()) {
        res.push(String.fromCharCode(65 + (messageArr[i].charCodeAt(0) - 65 - keyArr[keyIndex % keyArr.length] + 26) % 26));
        keyIndex++;
      } else {
        res.push(messageArr[i]);
      }
    }

    return this.type ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

directMachine = new VigenereCipheringMachine();
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))
