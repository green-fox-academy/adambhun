'use strict';
export { }

class Counter {
  integer;
  integer2;
  init;

  constructor(pint = 0, pint2?) {
    this.integer = pint;
    this.integer2 = pint2;
    this.init = pint;
  }

  add() {
    if (this.integer2 === undefined) {
      this.integer++;
    } else {
      this.integer += this.integer2;
    }
  }

  get() {
    console.log( this.integer.toString());
  }

  reset() {
    this.integer = this.init;
  }
}

const c1 = new Counter(8,9);

c1.add();
c1.get();
c1.reset();
c1.get();