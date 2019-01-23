'use strict';

const students: any[] = [
  { name: 'Mark', age: 9.5, candies: 2 },
  { name: 'Paul', age: 12, candies: 5 },
  { name: 'Clark', age: 7, candies: 3 },
  { name: 'Pierce', age: 12, candies: 7 },
  { name: 'Sean', age: 10, candies: 1 }
];

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

function fourplus(group: any[] ) {
    let names: string = '';
    group.forEach(function(boy) {
        if (boy.candies < 4) {
            console.log(boy.name);
        }
    });
}

fourplus(students);

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function avg(group: any[] ) {
    let avg: number = 0;
    group.forEach(function(boy) {
        avg += boy.candies;
    });
    avg = avg / group.length;
    console.log(avg);
}

avg(students);