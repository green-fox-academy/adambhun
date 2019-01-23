'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

//even index=boy. selector-assigner-iterators for each array
function makingMatches(first: string[], second: string[]){
    let twos: string[] = [' '];
    let b: number = 0;
    let g: number = 0;
    for (let index = 0; index < boys.length+girls.length; index++) {
        if(index % 2 !== 0){
            if(b === boys.length){
                twos[index] = girls[g];
            }else{
            twos[index] = boys[b];
            b++;
            }
        }else if(g === girls.length){
            twos[index] = boys[b];
        }else{
            (twos[index] = girls[g]);
            g++;
        }

    }
    return twos;
}

console.log(makingMatches(girls, boys));

export = makingMatches;