abstract class Instrument {
  name: string;
  play(){

  }
  constructor(parameters) {
    
  }
}

abstract class StringedInstrument extends Instrument {

  numberOfStrings: number;

  sound() {

  }
}

