const {NotImplementedError} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  console.log(names)
  let res = [];
  // return [... new Set(names)]
  for (let i = 0; i < names.length; i++) {
    if (!res.includes(names[i])) {
      res.push(names[i])
    } else {
      let counter = 1;
      while (res.includes(`${names[i]}(${counter})`)) counter++
      // console.log('28', `${names[i]}`)
      res.push(`${names[i]}(${counter})`)
    }
  }
  return res
}

module.exports = {
  renameFiles
};

// console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))
