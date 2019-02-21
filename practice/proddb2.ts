'use strict';
export { };

let map: Object = {};

map['Eggs'] = 200;
map['Milk'] = 200;
map['Fish'] = 400;
map['Apples'] = 150;
map['Bread'] = 50;
map['Chicken'] = 550;

let products = Object.keys(map);
let prices = products.map(price => map[price]);


for (let property1 in map) {
  if (map[property1] < 201) {
   console.log(products[prices.indexOf(map[property1])]);    
  }
}

for (let property1 in map) {
  if (map[property1] > 150) {
   console.log(products[prices.indexOf(map[property1])], '-', map[property1]);    
  }
}

