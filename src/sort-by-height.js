const { NotImplementedError } = require('../extensions/index.js');

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
    let arrSubOne = arr.filter(item => item > 0)
        .sort((a, b) => a - b);
    let arrSubOneIndex = 0;
    arr.forEach((item, index) => {
        if (arr[index] > 0) {
            arr[index] = arrSubOne[arrSubOneIndex];
            arrSubOneIndex += 1;
        }
    })
    return arr;
}

module.exports = {
    sortByHeight
};