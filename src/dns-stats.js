const { NotImplementedError } = require('../extensions/index.js');

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


    const resultArray = [];

    domains.forEach(item => {
        resultArray.push(
            item
            .split(".")
            .reverse()
            .reduce((acc, current) => {
                resultArray.push(acc);
                return `${acc}.${current}`;
            })
        );
    });
    return resultArray
        .map((item) => `.${item}`)
        .reduce((acc, current) => {
            acc[current] = (acc[current] || 0) + 1;
            return acc;
        }, {});

}

module.exports = {
    getDNSStats
};