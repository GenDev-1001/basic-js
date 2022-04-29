const { NotImplementedError } = require('../extensions/index.js');

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
    const resultArray = []
    let len = 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) {
            (len <= 1) ? resultArray.push(str[i]): resultArray.push(len, str[i])
            len = 1
        } else {
            len += 1
        }
    }
    return resultArray.join('')
}

module.exports = {
    encodeLine
};