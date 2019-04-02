'use strict';

let test = require('tape');


class Summer {

  sum(param: number[]) {
    let accu: number = 0;
    param.forEach(element => {
      accu += element;
    });
    return accu;
  }

  constructor() {
  }
}

test('Test array sum method', t => {
  let sumobj = new Summer();
  let actual = sumobj.sum('asdf');
  let expected: number = 6;

  t.equal(actual, expected);
  t.notEqual(actual, expected, 'Not equal');
    
  t.end();
})