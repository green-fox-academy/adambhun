'use strict';

let test = require('tape');

class Apple {
  getApple() {
    return 'apple';
  }

  constructor() {
  }
}

test('Check if return value is apple', t => {
  let appleObj = new Apple();
  t.equal(appleObj.getApple(), 'apple');
  t.end();
})