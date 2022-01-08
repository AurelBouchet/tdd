const assert = require('assert');

function capitalizeFirstLetters(input) {
  return input.length > 0 ? input[0].toUpperCase() + input.slice(1) : '';
}
assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeFirstLetters('bonjour'), 'Bonjour');

assert.strictEqual(capitalizeFirstLetters('b'), 'B');

assert.strictEqual(capitalizeFirstLetters(''), '');
