import { describe, test, expect } from '@jest/globals';
import product from "./product.js";

describe('product function', () => {
    test('product of 3 and 4 should be 12', () => {
        expect(product(3, 4)).toBe(12);
    });

    test('product of -5 and -5 should be 25', () => {
        expect(product(-5, -5)).toBe(25);
    });

    test('product of 0 and 5 should be 0', () => {
        expect(product(0, 5)).toBe(0);
    });
});