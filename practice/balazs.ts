'use strict';

let pdata2: any = {
  'Eggs' : 200,
  'Milk': 200,
  'Fish': 400,
  'Apples' : 150,
  'Bread' : 50,
  'Chicken' : 550,
 }
 function infos(): any{
  let food = Object.keys(pdata2);
  let price = Object.values(pdata2);
  let all = Object.entries(pdata2);
 
 
 //for(let lowestPrices in pdata2) {
 
  //for(let lowestPrices in pdata2) {
    //if(pdata2[lowestPrices] < 202)
    //console.log(food[price.indexOf(pdata2[lowestPrices])]);
    //if(pdata2[lowestPrices] > 150)
    //console.log(all[price.indexOf(pdata2[lowestPrices])]);
  //}
  for (let [food, price] of Object.entries(pdata2)) {
    if(price < 202) {
      console.log(food);
    }
    if (price > 150) {
      console.log(food, price);
    }
  }
 }
 
 infos();