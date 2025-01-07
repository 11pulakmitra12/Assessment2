const assert = require('assert');
const { add } = require("../index");

describe("adder", () => {

    it("should return 0 for no inputs", () => {
        const result = add();
        assert.equal(result, 0);
    })
})