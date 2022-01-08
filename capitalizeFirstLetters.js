const assert = require('assert');
assert.equal(Math.max(1, 5, 9), 9);

function capitalizeFirst(input) {
  return input[0].toUpperCase() + input.slice(1);
}
assert.strictEqual(typeof capitalizeFirst, 'function');
