'use strict';

import { addTwoNumbers } from './main';
let test = require('tape');

test('Add two numbers together', t => {
  let actual: number = addTwoNumbers(5, 4);
  let expected: number = 9;

  t.equal(actual, expected);
  t.notEqual(actual, 50, 'This should not be equal');
  t.end();
});

test('test arrays', t => {
  t.deepEqual([5, 4], [5, 4]);
  t.end();
});