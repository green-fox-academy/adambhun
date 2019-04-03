'use strict';
export { }
import { Sharpie } from './sharpie';

class SharpieSet {
  shset: Sharpie[] = [];

  add(psh: Sharpie): void {
    this.shset.push(psh);
  }

  countUsable() {
    let counter: number = 0;
    for (let index = 0; index < this.shset.length; index++) {
      if (this.shset[index].inkAmount !== 0) {
        counter++;
      }
    }
    return counter;
  }

  removeTrash() {
    for (let index = 0; index < this.shset.length; index++) {
      if (this.shset[index].inkAmount === 0) {
        this.shset.splice(index, 1);
      }
    }
  }
}

let red = new Sharpie('red', 1);
let blue = new Sharpie('blue', 2);
let green = new Sharpie('green', 5);
let yellow = new Sharpie('yellow', 8);
let black = new Sharpie('black', 5);

blue.inkAmount = 0;
yellow.inkAmount = 0;

let sharpies = new SharpieSet();

sharpies.add(red);
sharpies.add(blue);
sharpies.add(green);
sharpies.add(yellow);
sharpies.add(black);


console.log(sharpies);
console.log(sharpies.countUsable());

sharpies.removeTrash();

console.log(sharpies);
