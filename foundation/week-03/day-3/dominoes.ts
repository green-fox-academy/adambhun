import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
  dominoes.forEach(function (value) {
    console.log(value);
  });
}

let dominoes = initializeDominoes();

/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);


//ordered array - starts with first array, push values into this applicable
let ordered = [vals(0)];

//first domino not needed
dominoes.splice(0,1);

//get left value of domino #x
function valAD(x) {
  return dominoes[x].values[0];
}

//get right value of domino #y
function valBO(y) {
  return ordered[y][1];
}

//get both values of domino #z
function vals(z) {
  return dominoes[z].values;
}

function order() {
  //do until no more dominoes
  while (dominoes.length !== 0) {
    //check each element of dominoes
    let index: number = 0;
    for (index; index < dominoes.length; index++) {
      // if left value of dominoes[index] === right value of previous domino push to ordered
      if (valAD(index) === valBO(ordered.length - 1)) {
        ordered.push(vals(index));
        dominoes.splice(index,1);
      }
    }
    index = 0;
  }
}

order();

console.log(ordered);
print(dominoes);