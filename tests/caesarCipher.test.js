// tests/caesarCipher.test.js

const caesarCipher = require('../src/caesarCipher');

test('shifts a single lowercase letter forward', () => {
  expect(caesarCipher('a', 1)).toBe('b');
});

test('shifts another single lowercase letter forward', () => {
  expect(caesarCipher('d', 3)).toBe('g');
});
