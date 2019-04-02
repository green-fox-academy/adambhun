'use strict';
export { Sharpie }

class Sharpie {
  color;
  width;
  inkAmount;

  constructor (pcol, pwid) {
    this.color = pcol;
    this.width = pwid;
    this.inkAmount = 100;
  }

  use() {
    this.inkAmount--;
  }
}

const lblue = new Sharpie('blue', 10);

lblue.use();

console.log(lblue);