// tests/reverseString.test.js

const reverseString = require('../src/reverseString');

describe('reverseString', () => {
  test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('returns an empty string when given an empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('returns the same string when given a palindrome', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });

  test('reverses a string containing spaces correctly', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('preserves the order of punctuation and case when reversing', () => {
    expect(reverseString('Hello!')).toBe('!olleH');
  });
});
