var expect  = require('chai').expect;

const { serialSequenceGenerator, sequenceGenerator } = require("../index");
const { listIterator, circularListIterator } = require('../mustehssuniqbal/main/keyGenerator');

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

describe("test custom sequenceGenerator", () => {
    it("should generate powers of 2", () => {
        const generate = sequenceGenerator(elem => elem * 2, 2);
        expect(generate()).to.equal("2");
        expect(generate()).to.equal("4");
        expect(generate()).to.equal("8");
        expect(generate()).to.equal("16");
        expect(generate()).to.equal("32");
    });
});

describe("test listIterator", () => {
    it("should iterate list", () => {
        const subject = [1, 2, 3, 4, 5];

        const generate = listIterator(subject);
        expect(generate()).to.equal(1);
        expect(generate()).to.equal(2);
        expect(generate()).to.equal(3);
        expect(generate()).to.equal(4);
        expect(generate()).to.equal(5);
    })
});

describe("test circular listIterator", () => {
    it("should iterate list in a circular fashion", () => {
        const subject = [1, 2, 3, 4, 5];

        const generate = circularListIterator(subject);
        expect(generate()).to.equal(1);
        expect(generate()).to.equal(2);
        expect(generate()).to.equal(3);
        expect(generate()).to.equal(4);
        expect(generate()).to.equal(5);
        expect(generate()).to.equal(1);
        expect(generate()).to.equal(2);
        expect(generate()).to.equal(3);
        expect(generate()).to.equal(4);
        expect(generate()).to.equal(5);
        expect(generate()).to.equal(1);
        expect(generate()).to.equal(2);
        expect(generate()).to.equal(3);
        expect(generate()).to.equal(4);
        expect(generate()).to.equal(5);
        expect(generate()).to.equal(1);
        expect(generate()).to.equal(2);
        expect(generate()).to.equal(3);
        expect(generate()).to.equal(4);
        expect(generate()).to.equal(5);
    });
});