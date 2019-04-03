'use strict';
export { };

let shop: Object = {};

shop['Eggs'] = 200;
shop['Milk'] = 200;
shop['Fish'] = 400;
shop['Apples'] = 150;
shop['Bread'] = 50;
shop['Chicken'] = 550;

let products = Object.keys(shop);
let prices = products.map(price => shop[price]);

let lessThan: Object = {};
Object.assign(lessThan, shop);

for (let property1 in shop) {
  if (shop[property1] >= 201) {
    delete(lessThan[property1]);
  }
}
console.log(`<201 \n ${Object.keys(lessThan)}`);

let greaterThan: Object = {};
for (let property1 in shop) {
  if (shop[property1] > 150) {
    greaterThan[property1] = shop[property1];
  }
}

console.log(`\n >150 \n`, greaterThan);

// console.log(`\n >150 \n ${greaterThan}`);    --- Why does this log [object Object]?????
