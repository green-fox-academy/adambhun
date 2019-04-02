'use strict';
export { }

class PostIt {
  backgroundColor;
  text;
  textColor;

  constructor (pback, ptext, ptcolor) {
    this.backgroundColor = pback;
    this.text = ptext;
    this.textColor = ptcolor;
  }
}

const p1 = new PostIt ('orange', 'Idea 1', 'blue');
const p2 = new PostIt ('pink', 'Awesome', 'black');
const p3 = new PostIt ('yellow', 'Superb', 'green');

console.log(p1);
