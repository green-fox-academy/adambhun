'use strict';
export { };

let shop = new Map();

shop.set('Milk', 1.07);
shop.set('Rice', 1.59);
shop.set('Eggs', 3.14);
shop.set('Cheese', 12.60);
shop.set('Chicken Breasts', 9.40);
shop.set('Apples', 2.31);
shop.set('Tomato', 2.58);
shop.set('Potato', 1.75);
shop.set('Onion', 1.10);

let bob: Object = {};
bob['Milk'] =	3;
bob['Rice'] =	2;
bob['Eggs'] =	2;
bob['Cheese'] =	1;
bob['Chicken Breasts'] =	4;
bob['Apples'] =	1;
bob['Tomato'] =	2;
bob['Potato'] =	1;

let alice: Object = {}
alice['Rice'] =	1;
alice['Eggs'] =	5;
alice['Chicken Breasts'] =	2;
alice['Apples'] =	1;
alice['Tomato'] =	10;


let baccu: number = 0;
for (let product in bob) {
  baccu += (shop.get(product) * bob[product]);
}
console.log(baccu);

let aaccu: number = 0;
for (let product in alice) {
  aaccu += (shop.get(product) * alice[product]);
}
console.log(aaccu);

if (alice['Rice'] > bob['Rice']) {
  console.log('Alice');
} else {
  console.log('Bob');  
}

let blist: number = 0;
let alist: number = 0;

for (let item in bob) {
  blist++;
}
for (let item in alice) {
  alist++;
}

if (blist > alist) {
  console.log('Bob');
} else if (blist === alist) {
  console.log('equal');
} else {
  console.log('Alice');  
}

let bnum: number = 0;
let anum: number = 0;

for (let item in bob) {
  bnum += bob[item];
}
for (let item in alice) {
  anum += alice[item];
}

if (bnum > anum) {
  console.log('Bob');
} else if (bnum === anum) {
  console.log('equal');
} else {
  console.log('Alice');  
}

console.log(anum, bnum);

console.log(shop.get('Milk'));

let asdf = new Map([['as', 2], ['alsd', 3]]);
console.log(asdf);
