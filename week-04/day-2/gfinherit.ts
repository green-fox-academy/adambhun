'use strict'
export{ };

class Person {
  name: string;
  age: number;
  gender: string;

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  getGoal () {
    console.log(`My goal is: Live for the moment!`);
  }

  constructor(n: string = 'Jane Doe', a: number = 30, g: string = 'female') {
    this.name = n;
    this.age = a;
    this.gender= g;
  }
}

class Student extends Person {
  previousOrganization: string;
  skippedDays: number;

  getGoal () {
    console.log(`My goal is: Be a junior software developer.`);
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
  }

  skipDays(numberOfDays) {
    this.skippedDays += numberOfDays;
  }

  constructor(n: string = 'Jane Doe', a: number = 30, g: string = 'female', prevorg: string = 'The School of Life') {
    super();
    this.skippedDays = 0;
    this.previousOrganization = prevorg;
  }
}

class Mentor extends Person {
  level: string;

  getGoal() {
    console.log(`My goal is: Educate brilliant junior software developers.`);
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  constructor(n: string = 'Jane Doe', a: number = 30, g: string = 'female', level: string = 'intermediate') {
    super();
    this.level = level;
  }
}

class Sponsor extends Person {
  company: string;
  hiredStudents: number;

  introduce() {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  hire() {
    this.hiredStudents++;
  }

  getGoal() {
    console.log(`My goal is: Hire brilliant junior software developers.`);
  }

  constructor(n: string = 'Jane Doe', a: number = 30, g: string = 'female', company: string = 'Google', hiredStudents: number = 0) {
    super();
    this.company = company;
    this.hiredStudents = hiredStudents;
  }
}

