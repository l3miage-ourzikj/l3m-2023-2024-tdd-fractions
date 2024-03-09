import { illFormedException, fraction } from "./fractions";


describe("Instanciations de fractions impossibles", () => {
    it("shouldn't be possible to build the fraction 3/0", () => {
        expect(() => fraction(3, 0)).toThrow(illFormedException)
    });

    it("shouldn't be possible to build the fraction NaN/2", () => {
        expect(() => fraction(NaN, 2)).toThrow(illFormedException)
    });

    it("shouldn't be possible to build the fraction 7/NaN", () => {
        expect(() => fraction(7, NaN)).toThrow(illFormedException)
    });

    it("shouldn't be possible to build the fraction 3/Infinity", () => {
        expect(() => fraction(3, Infinity)).toThrow(illFormedException)
    });

    it("shouldn't be possible to build the fraction Infinity/8", () => {
        expect(() => fraction(Infinity, 8)).toThrow(illFormedException)
    });

});

describe("Instanciations de fractions possibles", () => {
    it("should be possible to build the fraction 3/2", () => {
        const f = fraction(3, 2);
        expect(f.numérateur()).toEqual(3);
        expect(f.dénominateur()).toEqual(2)
    });

    it("should be possible to build the fraction 2/5 from (-2)/(-5)", () => {
        const f = fraction(-2, -5);
        expect(f.numérateur()).toEqual(2);
        expect(f.dénominateur()).toEqual(5)
        expect(f.toString()).toEqual("2/5")
    });

    it("should be possible to build the fraction -2/5 from (2)/(-5)", () => {
        const f = fraction(2, -5);
        expect(f.numérateur()).toEqual(-2);
        expect(f.dénominateur()).toEqual(5)
        expect(f.toString()).toEqual("-2/5")
    });

    it("shouldn't be possible to build the fraction -3/7 from 3/(-7)", () => {
        const f = fraction(3, -7);
        expect(f.numérateur()).toEqual(-3);
        expect(f.dénominateur()).toEqual(7)
        expect(f.toString()).toEqual("-3/7")
    });

    it("shouldn't be possible to build the fraction 5 from (-5)/(-1)", () => {
        const f = fraction(-5, -1);
        expect(f.numérateur()).toEqual(5);
        expect(f.dénominateur()).toEqual(1)
        expect(f.toString()).toEqual("5")
    });

    it("shouldn't be possible to build the fraction -4/3 from (12)/(-9)", () => {
        const f = fraction(12, -9);
        expect(f.numérateur()).toEqual(-4);
        expect(f.dénominateur()).toEqual(3)
        expect(f.toString()).toEqual("-4/3")
    });

});