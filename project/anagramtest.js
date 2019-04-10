'use strict';

let Angrm = require('./anagram')
let test = require('tape');

test('See if anagram', t => {
  let anagramObj = new Angrm();
  let actual = anagramObj.anagram('asdf', 'dsfa');
  let expected = true;

  t.equal(actual, expected, 'Is anagram');
  t.end();
});