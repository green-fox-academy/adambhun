'use strict';

abstract class Animal {
  name: string;
  healCost: number;
  healthy: boolean;
  
  heal() {
    this.healthy = true;
    return this.healthy;
  }
  
  isAdoptable() {
    if (this.healthy) {
      return true;
    } else {
      return false;
    }
  }
  
  toString () {
    console.log((this.healthy) ? `${this.name} is healthy, and adoptable`
    : `${this.name} is not healthy (${this.healCost}€), and not adoptable `);
  }
  
  constructor () {
    if (this.healCost === 0) {
      this.healthy = true;
    } else {
      this.healthy = false;
    }
  }
}

class Cat extends Animal {
  constructor(name: string = 'Cat') {
    super();
    this.name = name;
    this.healCost = Math.floor((Math.random() * 6));
  }
}

class Dog extends Animal {
  constructor(name: string = 'Dog') {
    super();
    this.name = name;
    this.healCost = Math.floor((Math.random() * 8)+1);
  }
}

class Parrot extends Animal {
  constructor(name: string = 'Parrot') {
    super();
    this.name = name;
    this.healCost = Math.floor((Math.random() * 10)+4);
  }
}

class AnimalShelter {
  budget: number;
  animals: Animal[] = [];
  adopters: string[] = [];

  rescue(animal: Animal) {
    this.animals.push(animal);
    return this.animals.length;
  }
  heal() {
    for (let index = 0; index < this.animals.length; index++) {
      if (this.animals[index].healthy) {
      } else {
        this.animals[index].heal();
      }
    }
  }
  addAdopter(name) {
    this.adopters.push(name);
  }
  findNewOwner() {
    //animal and owner
    let pair: object = {};
    //animals to choose from
    let healthy: Animal[] = [];
    this.animals.forEach(element => {
      if (element.healthy) {
        healthy.push(element);
      }
    });
    let newAdopterNum: number = Math.floor((Math.random() * this.adopters.length));
    let newRescuedNum: number = Math.floor((Math.random() * healthy.length));

    if (pair[newAdopterNum] === undefined) {
      pair[newAdopterNum] = healthy[newRescuedNum];
    }
    //remove chosens
    this.adopters.splice(newAdopterNum, 1);
    this.animals.splice(this.animals.indexOf(healthy[newRescuedNum]), 1);

    return this.animals, this.adopters, pair;
  }

  earnDonation(sum: number) {
    this.budget += sum;
    return this.budget;
  }
  toString() {
    console.log(`Budget: ${this.budget}€, There are ${this.animals.length} animal(s) and ${this.adopters.length} potential adopter(s)`);
    this.animals.forEach(element => {
      element.toString();
    });
  }

  constructor(budget: number) {
    this.budget = budget;
  }
}

let animalShelter = new AnimalShelter(50);

animalShelter.rescue(new Cat());
animalShelter.rescue(new Dog("Furkesz"));
animalShelter.rescue(new Parrot());
console.log(animalShelter.toString());

animalShelter.heal();
console.log(animalShelter.toString());

animalShelter.addAdopter("Kond");
console.log(animalShelter.toString());

animalShelter.findNewOwner();
animalShelter.earnDonation(30);
console.log(animalShelter.toString());
