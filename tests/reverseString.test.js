// tests/reverseString.test.js

const reverseString = require('../src/reverseString');

test('should reverse a simple string', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('should return an empty string when given an empty string', () => {
  expect(reverseString('')).toBe('');
});

test('should return the same string when given a palindrome', () => {
  expect(reverseString('racecar')).toBe('racecar');
});

test('should correctly reverse a string containing spaces', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('should preserve punctuation and original case when reversing', () => {
  expect(reverseString('Hello!')).toBe('!olleH');
});
