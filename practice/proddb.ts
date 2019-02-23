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
let products: string[] = Object.keys(map);
let prices: number[] = products.map(price => map[price]);
let sorted: number[] = [];
prices.forEach(function(element){
  sorted.push(element);
});

sorted.sort(function(a, b) {
  return a-b;
});

console.log(products[prices.indexOf(sorted[sorted.length - 1])]);

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

function lessThan125(params: any) {
  let answer: string = 'No';
  params.forEach(element => {
    if (element === 125) {
      answer = 'Yes';
    }
  });
  console.log(answer);
}

lessThan125(prices);


console.log(products[prices.indexOf(sorted[0])]);