import sum from "./sum.js";
describe('sum function', () => {
    test('sum of 1 and 2 should be 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('sum of -5 and -5 should be -10', () => {
        expect(sum(-5, -5)).toBe(-10);
    });

    test('sum of 0 and 0 should be 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
});