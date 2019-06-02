'use strict';

import { hamming } from './retake';
import * as test from "tape";

test("see if it works", t => {
  let actual: string[] = hamming('apple', ["apple", "apply", "tuple", "alter"]);
  let expected: string[] = ["apple", "apply", "tuple"];

  t.deepEqual(actual, expected, 'equals');
  t.end();
});
