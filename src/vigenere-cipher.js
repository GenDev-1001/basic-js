const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
    constructor(isTrue) {
        this.isTrue = isTrue === false ? isTrue : true;
        this.code = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }

    check(message, key) {
        if (!message || !key) throw new Error("Incorrect arguments!");
    }

    encrypt(message, key) {
        this.check(message, key);
        const masResult = [];
        const keyUpper = key.toUpperCase().split('');
        const mesUpper = message.toUpperCase().split('');
        let j = 0;
        for (let i = 0; i < mesUpper.length; i++) {
            let index = this.code.indexOf(mesUpper[i]);
            if (index !== -1) {
                let indexKey = this.code.indexOf(keyUpper[j % keyUpper.length]);
                let currentKey = (index + indexKey) % this.code.length;
                masResult.push(this.code[currentKey]);
                j++;
            } else {
                masResult.push(mesUpper[i]);
            }
        }
        return this.isTrue ? masResult.join('') : masResult.reverse().join('');
    }

    decrypt(message, key) {
        this.check(message, key);
        const masResult = [];
        const keyUpper = key.toUpperCase().split('');
        const mesUpper = message.toUpperCase().split('');
        let j = 0;
        for (let i = 0; i < mesUpper.length; i++) {
            let index = this.code.indexOf(mesUpper[i]);
            if (index !== -1) {
                let indexKey = this.code.indexOf(keyUpper[j % keyUpper.length]);
                let currentKey = index >= indexKey ? (index - indexKey) % this.code.length : index - indexKey + this.code.length;
                masResult.push(this.code[currentKey]);
                j++;
            } else {
                masResult.push(mesUpper[i]);
            }
        }
        return this.isTrue ? masResult.join('') : masResult.reverse().join('');
    }
}

module.exports = {
    VigenereCipheringMachine
};