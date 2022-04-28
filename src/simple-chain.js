const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
class ChainMaker {

    constructor() {
        this.chain = [];
    }

    getLength() {
        return this.chain.length
    }

    addLink(value) {
        this.chain.push(value);
        return this;
    }

    removeLink(position) {
        if (!(Number.isInteger(position) && position > 0 && position <= this.chain.length)) {
            this.chain = [];
            throw new Error("You can't remove incorrect link!")
        }
        this.chain.splice(position - 1, 1);
        return this;
    }

    reverseChain() {
        this.chain.reverse();
        return this;
    }

    finishChain() {
        let resultChain = this.chain.map(item => `( ${item} )`)
            .join('~~');
        this.chain = [];
        return resultChain;
    }

};

const chainMaker = new ChainMaker();

module.exports = {
    chainMaker
};