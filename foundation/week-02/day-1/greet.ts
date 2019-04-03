'use strict';

// -  Create variable named `name` and assign the value `Greenfox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Greenfox`
//     -  Prepare for the special case when no parameters are given
// -  Greet `name`

let nameasdf: string = 'Greenfox'; // unable to name it 'name' - lib.dom.d.ts(17405, 15): 'name' was also declared here.

function greet(greeting = 'Greetings, dear ', whom = nameasdf){
    console.log(greeting + whom);
  }
  
  greet();
  greet('Hey ', 'yall');
  greet(undefined, 'lalala');
  greet(undefined, undefined);
  greet(undefined, nameasdf);