/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') {
    return '';
  }
  const arr = str.split('');
  let i = arr[0];
  let sum = 0;
  let newStr = '';
  arr.forEach((elem, key) => {
    if (elem === i) {
      sum++;
    } else {
      newStr += (sum === 1) ? i : sum + i;
      i = elem;
      sum = 1;
    }
    if (arr.length - 1 === key) {
      newStr += sum === 1 ? i : sum + i;
    }
  });
  return newStr;
}

module.exports = encodeLine;
