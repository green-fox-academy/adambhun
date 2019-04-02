'use strict';

import { SimpleName } from './main';
let test = require('tape');

test('Get the name field of class', t => {
  let firstName = new SimpleName('Mate');

  t.equal(firstName.getName(), 'Mate');
  t.end();
})