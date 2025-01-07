const assert = require('assert');
const { sumOfAllDigit, checkPrime } = require("../index");

describe("test-programs", () => {

    it("should return 0 for no inputs", () => {
        const result = sumOfAllDigit();
        assert.equal(result, 0);
    });

    it("should return addition of all digit for digit-number", () => {
        const result = sumOfAllDigit(12345);
        assert.equal(result, 15);
    });

});


describe("Prime-Check", () => {

    it("should return 0 for no inputs", () => {
        const result = checkPrime();
        assert.equal(result, 0);
    });

    it("should return 1 is neighter prime nor composite number", () => {
        const num=1;
        const result = checkPrime(num);
        assert.equal(num, 1);
    });

    it("should return true for prime number", () => {
        const result = checkPrime(19);
        assert.equal(result, true);
    });
    it("should return false for not prime number", () => {
        const result = checkPrime(125);
        assert.equal(result, false);
    });

});