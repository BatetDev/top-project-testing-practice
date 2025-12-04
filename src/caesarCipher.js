// src/caesarCipher.js

function caesarCipher(str, shift) {
  // Get the code of the first letter
  const charCode = str.charCodeAt(0);
  // Add the shift
  const shiftedCode = charCode + shift;
  // Convert back to a character
  return String.fromCharCode(shiftedCode);
}

module.exports = caesarCipher;
