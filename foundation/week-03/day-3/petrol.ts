'use strict';
export { }

class Station {
  gasAmount = 1000;

  refill(car) {
    this.gasAmount--;
    car.gasAmount++;
  }
}

class Car {
  gasAmount;
  capacity;
  constructor (igas, icap) {
    this.gasAmount = igas;
    this.capacity = icap;
  }
}

let mol = new Station;

let nissan = new Car(20, 100);

mol.refill(nissan);

console.log(mol.gasAmount);
console.log(nissan.gasAmount);

