var expect  = require('chai').expect;

const { serialSequenceGenerator, sequenceGenerator } = require("../index");

describe("test serialSequenceGenerator", () => {
    it("should generate serial sequence", () => {
        const generate = serialSequenceGenerator();
    
        expect(generate()).to.equal("0");
        expect(generate()).to.equal("1");
        expect(generate()).to.equal("2");
        expect(generate()).to.equal("3");
        expect(generate()).to.equal("4");
        expect(generate()).to.equal("5");
    });
    
    it("should start generating from the specified initial value", () => {
        const generate = serialSequenceGenerator(5);
    
        expect(generate()).to.equal("5");
        expect(generate()).to.equal("6");
        expect(generate()).to.equal("7");
        expect(generate()).to.equal("8");
        expect(generate()).to.equal("9");
        expect(generate()).to.equal("10");
    });
    
    it("should generate with the specified prefix", () => {
        const generate = serialSequenceGenerator(5, "specified prefix");
    
        expect(generate()).to.equal("specified prefix5");
        expect(generate()).to.equal("specified prefix6");
        expect(generate()).to.equal("specified prefix7");
    });
});

describe("test custom sequence generator", () => {
    it("should generate powers of 2", () => {
        const generate = sequenceGenerator(elem => elem * 2, 2);

        expect(generate()).to.equal("2");
        expect(generate()).to.equal("4");
        expect(generate()).to.equal("8");
        expect(generate()).to.equal("16");
        expect(generate()).to.equal("32");
    });
});