// tests/caesarCipher.test.js

const caesarCipher = require('../src/caesarCipher');

describe('caesarCipher', () => {
  describe('basic shifting', () => {
    test('shifts a single lowercase letter forward', () => {
      expect(caesarCipher('a', 1)).toBe('b');
    });
    test('shifts another single lowercase letter forward', () => {
      expect(caesarCipher('d', 3)).toBe('g');
    });
    test('shifts a string with multiple letters', () => {
      expect(caesarCipher('abc', 1)).toBe('bcd');
    });
  });

  describe('edge cases', () => {
    test('wraps from z to a', () => {
      expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('preserves uppercase letters', () => {
      expect(caesarCipher('heLLo', 3)).toBe('khOOr');
    });

    test('leaves punctuation and spaces unchanged', () => {
      expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
  });
});
