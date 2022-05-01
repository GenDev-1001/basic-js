const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    options.addition = (options.addition !== null) ? options.addition : 'null';
    let resultArray = [];
    let uniqSeparator = [];
    if (Object.prototype.toString(options.addition))
        for (let i = 0; i < ((options.additionRepeatTimes !== undefined) ? +options.additionRepeatTimes : 1); i++) {
            uniqSeparator.push(options.addition);
        }
    for (let j = 0; j < (options.repeatTimes ? +options.repeatTimes : 1); j++) {
        resultArray.push(`${str}${uniqSeparator.join((options.additionSeparator !== undefined) ? options.additionSeparator : '|')}`);
    }
    return (resultArray.join(`${(options.separator !== undefined) ? options.separator : '+'}`))
}

module.exports = {
    repeater
};