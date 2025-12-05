// src/caesarCipher.js

function caesarCipher(str, shift) {
  // Define constants for clarity and to avoid "magic numbers"
  const UPPERCASE_A = 65; // Unicode for 'A'
  const UPPERCASE_Z = 90; // Unicode for 'Z'
  const LOWERCASE_A = 97; // Unicode for 'a'
  const LOWERCASE_Z = 122; // Unicode for 'z'
  const ALPHABET_SIZE = 26; // Number of letters in the alphabet

  return [...str]
    .map((char) => {
      const code = char.charCodeAt(0);
      let base;

      // Categorize character and determine the correct alphabet base
      if (code >= LOWERCASE_A && code <= LOWERCASE_Z) {
        base = LOWERCASE_A; // It's a lowercase letter
      } else if (code >= UPPERCASE_A && code <= UPPERCASE_Z) {
        base = UPPERCASE_A; // It's an uppercase letter
      } else {
        return char; // Not a letter (space, punctuation, number) - leave unchanged
      }

      // Apply the Caesar shift with wrap-around.
      // The formula `(x % n + n) % n` correctly handles negative shifts.
      const newCode =
        ((((code - base + shift) % ALPHABET_SIZE) + ALPHABET_SIZE) %
          ALPHABET_SIZE) +
        base;
      return String.fromCharCode(newCode);
    })
    .join('');
}

module.exports = caesarCipher;
