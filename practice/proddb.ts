'use strict';
export {};

let map: Object = {};

map['Eggs'] = 200;
map['Milk'] = 200;
map['Fish'] = 400;
map['Apples'] = 150;
map['Bread'] = 50;
map['Chicken'] = 550;

console.log(map['Fish']);
let products = Object.keys(map);
let prices = products.map(price => map[price]);

function expensive() {
  prices.sort(function(a, b) {
    return a-b;
  });
  return prices[prices.length - 1];
}
console.log(products[prices.indexOf(expensive())]);

let sum: number = prices.reduce(function(accu, current) {
  accu += current;
  return accu;
});

console.log(sum / products.length);

let cheap: number = 0;
for (let index = 0; index < prices.length; index++) {
  if (prices[index] < 300) {
    cheap++;
  }  
}

console.log(cheap);

prices.forEach(element => {
  if (element === 125) {
    console.log('yes');
  } else { console.log('no');
  }
});

