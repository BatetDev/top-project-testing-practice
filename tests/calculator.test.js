// tests/calculator.test.js
const calculator = require('../src/calculator');

describe('calculator', () => {
  describe('add operation', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(1, 2)).toBe(3);
    });
    test('adds two negative numbers', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
    });
  });

  describe('subtract operation', () => {
    test('subtracts two positive numbers', () => {
      expect(calculator.subtract(2, 1)).toBe(1);
    });
    test('subtracts two negative numbers', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });
  });
  describe('divide operation', () => {
    test('divides two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });
    test('divides a negative by a positive', () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
    });
    test('returns a floating-point result from division', () => {
      expect(calculator.divide(5, 2)).toBeCloseTo(2.5);
    });
    test('throws an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Divide by zero');
    });
  });
  describe('multiply operation', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiply(3, 2)).toBe(6);
    });

    test('multiplies a negative and a positive number', () => {
      expect(calculator.multiply(-5, 3)).toBe(-15);
    });
  });
});
