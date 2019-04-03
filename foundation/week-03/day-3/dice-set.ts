class DiceSet {
  dice: number[];
  readonly numOfDices: number = 6;

  roll(): number[] {
      this.dice = [];
      for(var i = 0; i < this.numOfDices; i++) { 
          this.dice.push(Math.floor(Math.random() * 6 + 1));
      }
      return this.dice;
  }

  reroll(index?: number) {
      if(index == undefined) {
          for(var i = 0; i < this.numOfDices; i++) { 
              this.dice[i] = Math.floor(Math.random() * 6 + 1);
          }
      } else {
          this.dice[index] = Math.floor(Math.random() * 6 + 1);
      }
  }
  
  getCurrent(index?: number) {
      if(index == undefined) {
          for(var i = 0; i < this.numOfDices; i++) { 
              return this.dice[i];
          }
      } else {
          return this.dice[index];
      }        
  }
}

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

let diceSet = new DiceSet();
/* console.log(diceSet.roll());
console.log(diceSet.getCurrent());

console.log("------------------");

diceSet.reroll();
console.log(diceSet.getCurrent());

console.log("------------------");

console.log(diceSet.getCurrent(5));
diceSet.reroll();
console.log(diceSet.getCurrent());

console.log("------------------");

diceSet.reroll(4);
console.log(diceSet.getCurrent()); */


diceSet.roll();

//while dice X is not 6, reroll, if yes X+1+
let x: number = 0;
while (diceSet.getCurrent(6) !== 6) {
    while (diceSet.getCurrent(x) !== 6) {
        diceSet.reroll(x);
    }
    x++;
}
    
console.log(diceSet.getCurrent(1));
console.log(diceSet.getCurrent(2));
console.log(diceSet.getCurrent(3));
console.log(diceSet.getCurrent(4));
console.log(diceSet.getCurrent(5));
console.log(diceSet.getCurrent(6));