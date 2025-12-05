// tests/analyzeArray.test.js

const analyzeArray = require('../src/analyzeArray');

describe('analyzeArray', () => {
  test('returns the correct analysis for a standard array', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({ average: 4, min: 1, max: 8, length: 6 });
  });

  test('calculates the correct length property', () => {
    const result = analyzeArray([10, 20, 30]);
    expect(result.length).toBe(3);
  });

  test('calculates the correct minimum value', () => {
    const result = analyzeArray([5, -2, 10, 1]);
    expect(result.min).toBe(-2);
  });

  test('calculates the correct maximum value', () => {
    const result = analyzeArray([-5, 0, 25, 3]);
    expect(result.max).toBe(25);
  });

  test('calculates the correct average value', () => {
    const result = analyzeArray([10, 20, 30]);
    expect(result.average).toBe(20);
  });

  describe('edge cases', () => {
    test('handles an array with a single number', () => {
      const result = analyzeArray([7]);
      expect(result).toEqual({ average: 7, min: 7, max: 7, length: 1 });
    });

    test('handles an empty array by returning defined special values', () => {
      const result = analyzeArray([]);
      expect(result).toEqual({
        average: NaN,
        min: Infinity,
        max: -Infinity,
        length: 0,
      });
    });
  });
});
