'use strict';

class DigestiveSystem {
  private belly: number = 0;

  eat(): void {
    this.belly++;
  }

  poop(): number {
    if (this.belly > 0) {
      this.belly--;
      return 1;
    } else {
      return 0;
    }
  }
}

class Fun {
  private happiness: number = 100;

  walk(): void {
    this.happiness += 10;
  }

  eat(): void {
    this.happiness += 20;
  }

  leaveAlone(): void {
    this.happiness -= 50;
  }
}

class Dog {
  private digestion = new DigestiveSystem();
  private fun = new Fun();

  eat(): void {
    this.digestion.eat();
    this.fun.eat();
  }

  poop(): void {
    this.digestion.poop();
  }
}