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
  const arrKey = [];
  const newArr = [];
  arr.forEach((elem, key) => {
    if (elem === -1) {
      arrKey.push(key);
    } else {
      newArr.push(elem);
    }
  });
  newArr.sort((a, b) => a - b);
  arrKey.forEach((elem) => {
    newArr.splice(elem, 0, -1);
  });
  return newArr;
}

module.exports = sortByHeight;
