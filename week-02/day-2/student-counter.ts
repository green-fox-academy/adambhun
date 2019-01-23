'use strict';

const students: any[] = [
  {name: 'Theodor', age: 3, candies: 2},
  {name: 'Paul', age: 9.5, candies: 2},
  {name: 'Mark', age: 12, candies: 5},
  {name: 'Peter', age: 7, candies: 3},
  {name: 'Olaf', age: 12, candies: 7},
  {name: 'George', age: 10, candies: 1}
];

// create a function that takes a list of students and logs: 
// - How many candies are owned by students altogether

function candieCounter(group: any[]){
    let candies :number = 0;
    group.forEach(function(boy){
        candies += boy.candies;
    })
    console.log(candies);
}

candieCounter(students);

// create a function that takes a list of students and logs:
// - The sum of the age of people who have less than 5 candies

function ageof(group: any[]){
    let age :number = 0;
    group.forEach(function(boy){
        if(boy.candies < 5){
        age += boy.age;
        }
    })
    console.log(age);
}

ageof(students);