import { describe, test, expect } from '@jest/globals';
import sub from "../Services/sub.js";

describe('sub function', () => {
    test('difference of 1 and 2 should be -1', () => {
        expect(sub(1, 2)).toBe(-1);
    });

    test('difference of -5 and -5 should be 0', () => {
        expect(sub(-5, -5)).toBe(0);
    });

    test('difference of 0 and 0 should be 0', () => {
        expect(sub(0, 0)).toBe(0);
    });
});