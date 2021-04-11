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
  const newArr = [];
  names.forEach((elem, key) => {
    let ind = 0;
    for (let i = 0; i < key; i++) {
      if (names[i] === elem) {
        ind++;
      }
    }
    if (ind !== 0) {
      newArr.push(`${elem}(${ind})`);
    } else if (newArr.includes(elem)) {
      newArr.push(`${elem}(1)`);
    } else {
      newArr.push(elem);
    }
  });
  return newArr;
}

module.exports = renameFiles;
