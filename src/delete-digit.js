const { NotImplementedError } = require('../extensions/index.js');

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
    const mas = n.toString().split('')
    const arrayResult = [];
    for (let i = 0; i < mas.length; i++) {
        let sum = '';
        mas.forEach((item, index) => {
            if (index !== i) {
                sum += item;
            }
        })
        arrayResult.push(sum);
    }
    arrayResult.sort((a, b) => b - a);
    return +arrayResult[0];
}

module.exports = {
    deleteDigit
};