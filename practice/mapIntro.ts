'use strict';
export {};

let izeke: object = {};

izeke = {
  97: 'a',
  98: 'b',
  99:	'c',
  65:	'A',
  66:	'B',
  67:	'C'
};
console.log(izeke);

let keys = Object.keys(izeke);
console.log(keys);
let values = keys.map(key => izeke[key]);
console.log(values);

izeke[68] = 'D';

console.log(keys.length);
console.log(izeke[99]);
delete(izeke[97]);
console.log(izeke);

console.log(izeke[100]);

for (let key in izeke) {
  delete(izeke[key]);
}

console.log(izeke);

