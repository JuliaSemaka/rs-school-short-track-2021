/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (domains.length === 0) {
    return {};
  }
  const newArr = domains.map((elem) => elem.split('.').reverse());

  const obj = {};
  newArr.forEach((elem) => {
    let col = 0;
    while (elem[col]) {
      let k = '';
      for (let i = 0; i <= col; i++) {
        k += `.${elem[i]}`;
      }
      if (!obj[k]) {
        obj[k] = 1;
      } else {
        obj[k] = +obj[k] + 1;
      }
      col++;
    }
  });
  return obj;
}

module.exports = getDNSStats;
