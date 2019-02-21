'use strict';
export {};

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

function analyze(params: number[]) {
  console.log(params.reduce(function(accu: number, current: number) {
  return accu += current}));
  let max: number = 0;
  params.forEach(element => {
    if (max < element) {
      max = element;
    }
  });
  console.log(max);
  let min: number = expenses[0];
  params.forEach(element => {
    if (min > element) {
      min = element;
    }
  });
  console.log(min);
    
}

analyze(expenses);
