const assert = require('assert');

//TDD intro
function capitalizeFirstLetters(words) {
  if (words != '') {
    let capitalizedLetter = words.split(' ');
    if (words.length != 1) {
      for (let i = 0; i < capitalizedLetter.length; i++) {
        capitalizedLetter[i] =
          capitalizedLetter[i][0].toUpperCase() + capitalizedLetter[i].slice(1);
      }
      return capitalizedLetter.join(' ');
    } else {
      return capitalizedLetter[0].toUpperCase();
    }
  } else {
    return '';
  }
}

assert.strictEqual(capitalizeFirstLetters('bonjour'), 'Bonjour');

assert.strictEqual(capitalizeFirstLetters('b'), 'B');

assert.strictEqual(capitalizeFirstLetters(''), '');

assert.strictEqual(capitalizeFirstLetters('hello world'), 'Hello World');

assert.strictEqual(
  capitalizeFirstLetters('welcome to my page'),
  'Welcome To My Page'
);
