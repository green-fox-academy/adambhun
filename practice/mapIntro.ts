'use strict';
export {};

let map: object = {};

map = {
  97: 'a',
  98: 'b',
  99:	'c',
  65:	'A',
  66:	'B',
  67:	'C'
};
console.log(map);

let keys = Object.keys(map);
console.log(keys);
let values = keys.map(key => map[key]);
console.log(values);

map[68] = 'D';

console.log(keys.length);
console.log(map[99]);
delete(map[97]);
console.log(map);

console.log(map[100]);
