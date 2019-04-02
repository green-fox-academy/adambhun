'use strict';


// Write a function called `sum` that returns the sum of numbers from zero to the given parameter


function sum(end: number){
    let nums: number[];
    nums = [];
    for (let index = 0; index < end+1; index++) {
        nums.push(index);
        console.log(nums[index]);
    };
}

sum(5);