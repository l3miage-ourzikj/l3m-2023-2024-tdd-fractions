import { illFormedException, fraction, add,multiply, divide, Fraction } from "./fractions";


describe("Instanciations de fractions impossibles", () => {
    it("shouldn't be possible to build the fraction 3/0", () => {
        expect( fraction(3, 0)).toEqual(undefined);
    });

    it("shouldn't be possible to build the fraction NaN/2", () => {
        expect(fraction(NaN, 2)).toEqual(undefined);
    });

    it("shouldn't be possible to build the fraction 7/NaN", () => {
        expect(fraction(7, NaN)).toEqual(undefined);
    });

    it("shouldn't be possible to build the fraction 3/Infinity", () => {
        expect(fraction(3, Infinity)).toEqual(undefined);
    });

    it("shouldn't be possible to build the fraction Infinity/8", () => {
        expect(fraction(Infinity, 8)).toEqual(undefined);
    });

});

describe("Instanciations de fractions possibles", () => {
    it("should be possible to build the fraction 3/2", () => {
        const f = fraction(3, 2);
        expect(f?.numérateur()).toEqual(3);
        expect(f?.dénominateur()).toEqual(2)
    });
    it("should be possible to build the fraction 2/5 from (-2)/(-5)", () => {
        const f = fraction(-2, -5);
        expect(f?.numérateur()).toEqual(2);
        expect(f?.dénominateur()).toEqual(5)
        expect(f?.toString()).toEqual("2/5")
    });

    it("should be possible to build the fraction -2/5 from (2)/(-5)", () => {
        const f = fraction(2, -5);
        expect(f?.numérateur()).toEqual(-2);
        expect(f?.dénominateur()).toEqual(5)
        expect(f?.toString()).toEqual("-2/5")
    });

    it("should  be possible to build the fraction -3/7 from 3/(-7)", () => {
        const f = fraction(3, -7);
        expect(f?.numérateur()).toEqual(-3);
        expect(f?.dénominateur()).toEqual(7)
        expect(f?.toString()).toEqual("-3/7")
    });

    it("should  be possible to build the fraction 5 from (-5)/(-1)", () => {
        const f = fraction(-5, -1);
        expect(f?.numérateur()).toEqual(5);
        expect(f?.dénominateur()).toEqual(1);
        expect(f?.toString()).toEqual("5");
    });

    it("should  be possible to build the fraction -4/3 from (12)/(-9)", () => {
        const f = fraction(12, -9);
        expect(f?.numérateur()).toEqual(-4);
        expect(f?.dénominateur()).toEqual(3)
        expect(f?.toString()).toEqual("-4/3")
    });

});


describe("Additions possibles de deux fractions", () => {

    it("Should be possible to add the two following fractions: 2/5 & 3/10", () => {
        const f1 = fraction(2, 5) as Fraction;
        const f2 = fraction(3, 10) as Fraction;
        const resultedFraction = add(f1, f2);
        expect(resultedFraction.numérateur()).toEqual(7);
        expect(resultedFraction.dénominateur()).toEqual(10);
        expect(resultedFraction.toString()).toEqual("7/10");

    });
    it("Should be possible to add the two following fractions: -2/5 & 3/10", () => {
        const f1 = fraction(-2, 5)as Fraction;
        const f2 = fraction(3, 10)as Fraction;
        const resultedFraction = add(f1, f2);
        expect(resultedFraction.numérateur()).toEqual(-1);
        expect(resultedFraction.dénominateur()).toEqual(10);
        expect(resultedFraction.toString()).toEqual("-1/10");

    });
    it("Should be possible to add the two following fractions: -2/5 & -3/10", () => {
        const f1 = fraction(-2, 5)as Fraction;
        const f2 = fraction(-3, 10) as Fraction;
        const resultedFraction = add(f1, f2);
        expect(resultedFraction.numérateur()).toEqual(-7);
        expect(resultedFraction.dénominateur()).toEqual(10);
        expect(resultedFraction.toString()).toEqual("-7/10");

    });
    it("Should be possible to add the two following fractions: -8/5 & 10/10", () => {
        const f1 = fraction(-8, 5)as Fraction;
        const f2 = fraction(10, 10)as Fraction;
        const resultedFraction = add(f1, f2);
        expect(resultedFraction.numérateur()).toEqual(-3);
        expect(resultedFraction.dénominateur()).toEqual(5);
        expect(resultedFraction.toString()).toEqual("-3/5");

    });
    



})





describe("Multiplications possibles de deux fractions", () => {

    it("Should be possible to multiply the two following fractions: 2/5 & 3/10", () => {
        const f1 = fraction(2, 5)as Fraction;
        const f2 = fraction(3, 10) as Fraction;
        const resultedFraction = multiply(f1, f2);
        expect( resultedFraction.numérateur()).toEqual(3);
        expect( resultedFraction.dénominateur()).toEqual(25);
        expect( resultedFraction.toString()).toEqual("3/25");

    });



})




describe("Divisions  possibles de deux fractions", () => {

    it("Should be possible to divide the two following fractions: 5/4 & 1/8", () => {
        const f1 = fraction(5, 4) as Fraction;
        const f2 = fraction(1, 8) as Fraction;
        const resultedFraction = divide(f1, f2);
        expect( resultedFraction?.numérateur()).toEqual(10);
        expect( resultedFraction?.dénominateur()).toEqual(1);
        expect( resultedFraction?.toString()).toEqual("10");

    });



})