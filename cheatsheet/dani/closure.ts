'use strict';

const createDigestiveSystem = () => {
  let belly: number = 0;

  return {
    eat(): void {
      belly++;
    },
    poop(): void {
      belly--;
    }
  };
};

let ds = createDigestiveSystem();
ds.poop();


const createFun = () => {
  let happinessLevel = 100;

  return {
    walk(): void {
      happinessLevel += 10;
    },
    leaveAlone(): void {
      happinessLevel -= 50;
    }
  }
};

const dog = () => {
  let ds = createDigestiveSystem();
  let fun = createFun();

  return {
    walk(): void {
      fun.walk();
    },
    eat(): void {
      ds.eat();
    }
  }
}