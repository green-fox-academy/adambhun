'use strict';

import { fun } from './exam1';
let test = require('tape');

test('first test', t => {
  const arr: number[] = [1, 2, 3, 1, 1, 2, 5, 1];
  const n: number = 3;
  let actual = fun(arr, n);
  let expected = [1, 2, 15, 1, 1, 10, 5, 1];

  t.deepEqual(actual, expected);
  t.end();
});

test('second test', t => {
  const arr: number[] = [1, 2, 3, 1, 1, 2, 5, 1];
  const n: number = 2;
  let actual = fun(arr, n);
  let expected = [];

  t.notDeepEqual(actual, expected);
  t.end();
});