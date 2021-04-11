/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('');
  let max = 0;
  arr.forEach((element, key) => {
    const newNum = Number(arr.filter((item, k) => k !== key).join(''));
    if (newNum > max) {
      max = newNum;
    }
  });
  return max;
}

module.exports = deleteDigit;
