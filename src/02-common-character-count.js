/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  let num = 0;
  s1Arr.forEach((elem) => {
    const ind = s2Arr.indexOf(elem);
    if (ind !== -1) {
      num++;
      s2Arr.splice(ind, 1);
    }
  });
  return num;
}

module.exports = getCommonCharacterCount;
