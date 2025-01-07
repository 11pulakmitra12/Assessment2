const assert = require('assert');
const { add } = require("../index");

describe("adder", () => {

    it("should return 0 for no inputs", () => {
        const result = add();
        assert.equal(result, 0);
    });

    it("should return addition of 2 numbers",()=>{
        const result =add(3,5);
        assert.equal(result,8);
    });

    it("should return addition of n numbers",()=>{
        const result =add(1,2,3,4,5);
        assert.equal(result,15);
    });
})