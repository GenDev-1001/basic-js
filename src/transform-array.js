const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

    let mas = arr.slice();
    let i = 0;
    let lengthArray = mas.length;

    function nextDiscard() {
        if (i !== lengthArray) {
            mas.splice(i, 2, undefined, undefined);
            i += 2;
        } else {
            mas[i] = undefined;
            incIndex();
        }
    }

    function prevDiscard() {
        if (i !== 0) {
            mas.splice(i - 1, 2, undefined, undefined);
            i++;
        } else {
            mas[i] = undefined;
            incIndex();
        }
    }

    function nextDouble() {
        if (i !== lengthArray) {
            mas[i] = mas[i + 1];
            incIndex();
        } else {
            mas[i] = undefined;
            incIndex();
        }
    }

    function prevDouble() {
        if (i !== 0) {
            mas[i] = mas[i - 1];
            incIndex();
        } else {
            mas[i] = undefined;
            incIndex();
        }
    }

    function incIndex() {
        i++;
    }

    const uniqValue = {
        "--discard-next": nextDiscard,
        "--discard-prev": prevDiscard,
        "--double-next": nextDouble,
        "--double-prev": prevDouble,
    };

    while (i < lengthArray) {
        const changeArr = uniqValue[mas[i]] || incIndex;
        changeArr();
        lengthArray = mas.length;
    }

    let masResult = mas.filter(item => item !== undefined);
    return masResult;
}

module.exports = {
    transform
};