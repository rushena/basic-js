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

    constructor(revert = true) {
        this.revert = revert;
        this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.square = this.alphabet.reduce((a, i, k) => {
            a[i] = [...(this.alphabet.slice(k)), ...(this.alphabet.slice(0, k))];
            return a;
        }, {})
    }

    encrypt(string, key) {
        if (!string || !key) {
            throw new Error('Incorrect arguments!')
        }

        let stringU = string.toUpperCase();
        let keyU = key.toUpperCase();
        let index = 0;

        if (stringU.length > keyU.length) {
            keyU = keyU.repeat(Math.ceil(stringU.length / keyU.length + 1)).slice(0, stringU.length);
        }

        let res = stringU.split('').reduce((a, i) => {
            if (this.alphabet.indexOf(i) === -1) return a + i;

            index += 1;

            return a + this.alphabet[(this.alphabet.indexOf(i) + this.alphabet.indexOf(keyU[index - 1])) % 26]

        }, '');

        if (this.revert === false) {
            res = res.split('').reduce((a, i) => i + a, '');
        }

        return res;
    }
    decrypt(string, key) {

        if (!string || !key) {
            throw new Error('Incorrect arguments!')
        }

        let stringU = string.toUpperCase();
        let keyU = key.toUpperCase();
        let index = 0;

        if (stringU.length > keyU.length) {
            keyU = keyU.repeat(Math.ceil(stringU.length / keyU.length + 1)).slice(0, stringU.length);
        }

        let res = stringU.split('').reduce((a, i) => {
            if (this.alphabet.indexOf(i) === -1) return a + i;

            index += 1;

            let b = this.alphabet.indexOf(i) - this.alphabet.indexOf(keyU[index - 1]);
            b = b < 0 ? b + 26 : b;

            return a + this.alphabet[b];

        }, '');

        if (this.revert === false) {
            res = res.split('').reduce((a, i) => i + a, '');
        }

        return res;
    }
}

module.exports = {
  VigenereCipheringMachine
};
