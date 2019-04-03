'use strict';
export { }

class Animal {
  hunger;
  thirst;

  constructor (phunger = 50, pthirst = 50) {
    this.hunger = phunger;
    this.thirst = pthirst;
  }

  eat() {
    this.hunger--;
  }

  drink() {
    this.thirst--;
  }

  play() {
    this.hunger++;
    this.thirst++;
  }
}

const lion = new Animal (20, 40);

lion.play();

console.log(lion);
