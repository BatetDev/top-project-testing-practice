// src/caesarCipher.js

function caesarCipher(str, shift) {
  return [...str]
    .map((char) => {
      const base = 'a'.charCodeAt(0); // Constant: 97
      const charCode = char.charCodeAt(0);
      // 1. Convert to 0-25 alphabet index
      // 2. Apply shift and wrap with modulo
      // 3. Convert back to character code
      const newCode = ((charCode - base + shift) % 26) + base;
      return String.fromCharCode(newCode);
    })
    .join('');
}

module.exports = caesarCipher;
