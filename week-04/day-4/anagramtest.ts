'use strict';

import { Angrm } from './anagram';
let test = require('tape');

test('See if anagram', t => {
  let anagramObj = new Angrm();
  let actual: boolean = anagramObj.anagram('asdf', 'dsfa');
  let expected: boolean = true;

  t.equal(actual, expected, 'Good');
  
  t.end();
});