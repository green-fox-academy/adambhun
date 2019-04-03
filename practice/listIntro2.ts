'use strict';

let arrA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];

let arrB: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
if (arrA.includes('Durian')) {
  console.log('yes');
} else {
  console.log('no');
}

arrB.splice(arrB.indexOf('Durian'), 1);
console.log(arrB);

arrA.splice(3,0, 'Kiwi');
if (arrA.length > arrB.length) {
  console.log('A');
} else {console.log('B');}

arrB.push('PF', 'pm');
console.log(arrB);

