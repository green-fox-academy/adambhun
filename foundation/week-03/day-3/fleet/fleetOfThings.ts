import { Thing } from "./thing";
import { Fleet } from "./fleet";

let fleet = new Fleet();

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

let t1 = new Thing('Get milk');
let t2 = new Thing('Remove the obstacles');
let t3 = new Thing('Stand up');
let t4 = new Thing('Eat lunch');

let list = new Fleet();

//create list array for mklist
t3.complete();
t4.complete();
list.add(t1);
list.add(t2);
list.add(t3);
list.add(t4);

//mk string: list + x where applicable and log it
function mklist(params) {
  let i: number = 0;
  let displ = params.things;
  while (i < displ.length) {
    if (displ[i].completed) {
      console.log('[x] ' + displ[i].name);
      i++;
    } else {
      console.log('[ ] ' + displ[i].name);;
      i++;
    }
  }
}

mklist(list);

//note to self - displ[i] === object.variable