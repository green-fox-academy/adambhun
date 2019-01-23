'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(num: number){
    let nums: number[];
    nums = [];
    let accu: number = 1;
    for (let index = 1; index < num+1; index++) {  //creates array
        nums.push(index); 
        accu *= index;
    }
    console.log(accu);
                  //rest parameter | note: spread may be better
}

factorio(5);