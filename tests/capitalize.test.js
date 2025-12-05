// tests/capitalize.test.js

const capitalize = require('../src/capitalize');

describe('capitalize', () => {
  test('capitalizes the first character of a lowercase string', () => {
    expect(capitalize('string')).toBe('String');
  });

  test('capitalizes only the first character in a multi-word string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  test('returns an empty string when given an empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('capitalizes a single character', () => {
    expect(capitalize('a')).toBe('A');
  });

  test('does not modify an already capitalized string', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  test('does not modify leading non-letter characters', () => {
    expect(capitalize('123hello')).toBe('123hello');
  });
});
