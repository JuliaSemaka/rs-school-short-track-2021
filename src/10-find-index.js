/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let finish = array.length;
  const res = 0;
  while (!res) {
    const i = Math.floor((start + finish) / 2);
    if (array[i] < value) {
      start = i;
    } else if (array[i] > value) {
      finish = i;
    } else {
      return i;
    }
  }
  return res;
}

module.exports = findIndex;
