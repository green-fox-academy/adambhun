'use strict';

// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio(num: number){
    let accu: number = 1;
    for (let index = 1; index < num+1; index++) {
        accu *= index;
    }
    console.log(accu);
}

factorio(5);