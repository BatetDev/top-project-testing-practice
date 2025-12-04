// tests/capitalize.test.js

const capitalize = require('../src/capitalize');

test('capitalize first character of a string', () => {
  expect(capitalize('string')).toBe('String');
});

test('capitalizes first character of "hello world"', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('returns empty string when input is empty', () => {
  expect(capitalize('')).toBe('');
});

test('capitalize a single character', () => {
  expect(capitalize('a')).toBe('A');
});

test('does not change an already capitalized string', () => {
  expect(capitalize('Hello')).toBe('Hello');
});

test('handles string starting with non-letter', () => {
  expect(capitalize('123hello')).toBe('123hello');
});
