const assert = require('assert');

function capitalizeAllFirstLetters(words) {
  if (words != '') {
    let capitalizedLetter = words.split(' ');
    if (words.length > 1) {
      for (let i = 0; i < capitalizedLetter.length; i++) {
        capitalizedLetter[i] =
          capitalizedLetter[i][0].toUpperCase() + capitalizedLetter[i].slice(1);
      }
      return capitalizedLetter.join(' ');
    } else {
      return capitalizedLetter.toUpperCase();
    }
  } else {
    return '';
  }
}

// assert.strictEqual(typeof capitalizeFirstLetters, 'function');

assert.strictEqual(capitalizeAllFirstLetters('bonjour'), 'Bonjour');

//assert.strictEqual(capitalizeAllFirstLetters('b'), 'B');

assert.strictEqual(capitalizeAllFirstLetters(''), '');
// //

// function capitalizeAllFirstLetters(words) {
//   let capitalizedLetter = words.split(' ');
//   for (let i = 0; i < capitalizedLetter.length; i++) {
//     capitalizedLetter[i] =
//       capitalizedLetter[i][0].toUpperCase() + capitalizedLetter[i].slice(1);
//   }
//   return capitalizedLetter.join(' ');
// }
assert.strictEqual(capitalizeAllFirstLetters('hello world'), 'Hello World');
