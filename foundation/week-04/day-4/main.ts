'use strict';

export function addTwoNumbers(first: number, second: number): number {
  return first + second;
}

class SimpleName {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

export { SimpleName }