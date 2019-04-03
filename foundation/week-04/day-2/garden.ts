'use strict';
export { };

class Flower {
  water: number = 0;
  color: string;

  constructor(color: string) {
    this.color = color;
  }
}

class Tree {
  water: number = 0;
  color: string;

  constructor(color: string) {
    this.color = color;
  }
}

class Garden {
  flowers: Flower[] = [];
  trees: Tree[] = [];

  constructor(flowers: Flower[], trees: Tree[]) {
    this.flowers = flowers;
    this.trees = trees;
  }
  needsWater: number = 0;
  finalwater: number = 0;

  watering(waterAmount: number) {

    this.flowers.forEach(element => {
      //check if needs water
      if (element.water < 5) {
        console.log(`The ${element.color} Flower needs water`); 
        this.needsWater++;
        return this.needsWater;       
      } else {
        console.log(`The ${element.color} Flower doesn't need water`);        
      }
    });
    
    this.trees.forEach(element => {
      if (element.water < 10) {
        console.log(`The ${element.color} Tree needs water`);  
        this.needsWater++;
        return this.needsWater;      
      } else {
        console.log(`The ${element.color} Tree doesn't need water`);        
      }
    });

    //start watering
    this.finalwater = waterAmount / this.needsWater;

    this.flowers.forEach(element => {
      if (element.water < 5) {
        element.water += (this.finalwater * 0.75);
        return element.water;
      }
    });

    this.trees.forEach(element => {
      if (element.water < 10) {
        element.water += (this.finalwater * 0.4);
        return element.water;
      }
    });

    this.flowers.forEach(element => {
      console.log(element.color, element.water);      
    });

    this.trees.forEach(element => {
      console.log(element.color, element.water);      
    });

    this.needsWater = 0;
  }
}

let yellow = new Flower('yellow');
let blue = new Flower('blue');
let purple = new Tree('purple');
let orange = new Tree('orange');

let garden1 = new Garden([yellow, blue], [purple, orange]);

//water those in need, div equally
//SOLUTION: if plant needs to be watered increment needsWater by 1, then div water by counter, then water plants

garden1.watering(40);
console.log(garden1.needsWater);


garden1.watering(70);
console.log(garden1.needsWater);

garden1.watering(200);
console.log(garden1.needsWater);

garden1.watering(30);
